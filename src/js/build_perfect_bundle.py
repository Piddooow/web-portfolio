import os
import re

base_dir = '/Users/piddooow/Documents/instant/web-portfolio'
js_dir = os.path.join(base_dir, 'src', 'js')

# 1. Read data.js and clean
with open(os.path.join(js_dir, 'data.js'), 'r', encoding='utf-8') as f:
    data_raw = f.read()

data_clean = re.sub(r'^export const ', 'const ', data_raw, flags=re.MULTILINE)
data_clean = re.sub(r'^export let ', 'let ', data_clean, flags=re.MULTILINE)

# 2. Read helper
def read_and_clean(rel_path):
    full_path = os.path.join(js_dir, rel_path)
    if not os.path.exists(full_path):
        print(f"Warning: {rel_path} not found")
        return ""
    with open(full_path, 'r', encoding='utf-8') as f:
        code = f.read()
    # Remove import statements
    lines = [line for line in code.splitlines() if not line.strip().startswith('import ')]
    text = '\n'.join(lines)
    # Remove export keywords
    text = re.sub(r'\bexport function\b', 'function', text)
    text = re.sub(r'\bexport const\b', 'const', text)
    text = re.sub(r'\bexport let\b', 'let', text)
    text = re.sub(r'\bexport default\b', '', text)
    return text

modules = [
    # Theme & Core
    'theme.js',
    # Components
    'components/scroll-reveal.js',
    'components/logo-loop.js',
    'components/philosophy.js',
    'components/hero.js',
    'components/featured.js',
    'components/capabilities.js',
    'components/about.js',
    'components/experience.js',
    'components/projects.js',
    'components/other-side.js',
    'components/github-graph.js',
    'components/github-activity.js',
    'components/contact.js',
    'components/footer.js',
    'components/navbar.js',
    'components/modal-cards.js',
    'components/chat.js',
    'components/preloader.js',
    'components/warp-twister.js',
    'components/click-spark.js',
    'components/user-cursor.js',
    'components/text-scatter-section.js',
    'components/text-scatter.js',
    'components/marquee.js',
    'components/bending-marquee.js',
    'components/staggered-text.js',
    'components/pull-to-refresh.js',
    'components/outside-ide.js',
    'components/certifications.js',
    # Pages
    'pages/home.js',
    'pages/projects-page.js',
    'pages/experience-page.js',
    'pages/events-page.js',
    'pages/certs-page.js',
    'pages/tech-page.js',
    'pages/case-study.js',
    'pages/error-404-page.js',
    # Router
    'router.js'
]

assembled_modules = []
for mod in modules:
    code = read_and_clean(mod)
    assembled_modules.append(f"  // --- Module: {mod} ---\n{code}")

all_modules_code = "\n\n".join(assembled_modules)

bootstrap_code = """
  // ==========================================================================
  // Application Bootstrap Engine
  // ==========================================================================
  function safeRun(fn, name) {
    try {
      if (typeof fn === 'function') fn();
    } catch (err) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[SafeInit] ' + name + ':', err);
      }
    }
  }

  function initApp() {
    safeRun(initTheme, 'Theme');
    safeRun(initRouter, 'Router');
    safeRun(initPreloader, 'Preloader');
    safeRun(initWarpTwister, 'WarpTwister');
    safeRun(initClickSpark, 'ClickSpark');
    safeRun(() => initUserCursor({ name: 'Jhon Doe' }), 'UserCursor');
    safeRun(initTextScatter, 'TextScatter');
    safeRun(initBendingMarquee, 'BendingMarquee');
    safeRun(initStaggeredText, 'StaggeredText');
    safeRun(initPullToRefresh, 'PullToRefresh');
    safeRun(initModalCards, 'ModalCards');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
"""

bundle_full = f"""(function() {{
  'use strict';

  // ==========================================================================
  // 1. DATA STORE (Verified Single Source of Truth — Vidd)
  // ==========================================================================
{data_clean}

  // ==========================================================================
  // 2. MODULAR COMPONENTS, PAGES & ROUTER
  // ==========================================================================
{all_modules_code}

{bootstrap_code}
"""

bundle_file = os.path.join(js_dir, 'bundle.js')
with open(bundle_file, 'w', encoding='utf-8') as f:
    f.write(bundle_full)

print(f"Generated pristine {bundle_file} ({len(bundle_full)} bytes)!")

# Update create_bundle.py so future builds stay pristine
with open(os.path.join(js_dir, 'create_bundle.py'), 'w', encoding='utf-8') as f:
    f.write(f'''# Auto-generated bundle compiler
import os
import re

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bundle_file = os.path.join(base_dir, 'js', 'bundle.js')
index_file = os.path.join(os.path.dirname(base_dir), 'index.html')

# Run build_perfect_bundle logic
import subprocess
subprocess.run(['python3', os.path.join(base_dir, 'js', 'build_perfect_bundle.py')], check=True)
''')
