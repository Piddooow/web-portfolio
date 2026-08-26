import os
import subprocess
import re

bundle_path = '/Users/piddooow/Documents/web-portfolio/src/js/bundle.js'
with open(bundle_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

# Modify IIFE to return the rendered HTML when evaluated and quit(0)
modified_js = js_content.replace(
    "if (document.readyState === 'loading') {",
    "print(renderNavbar('#/') + '\\n<div id=\"app-main\" style=\"flex: 1; width: 100%;\">\\n' + renderHomePage() + '\\n</div>\\n' + renderFooter() + '\\n' + renderChatWidget()); quit(0); if (false) {"
)

runner_code = f"""
var window = {{ 
  matchMedia: function() {{ return {{ matches: false }}; }}, 
  addEventListener: function() {{}} 
}};
var document = {{ 
  documentElement: {{ classList: {{ add: function() {{}}, remove: function() {{}} }} }},
  addEventListener: function() {{}},
  getElementById: function() {{ return null; }},
  querySelectorAll: function() {{ return []; }}
}};
var localStorage = {{ getItem: function() {{ return null; }}, setItem: function() {{}} }};

{modified_js}
"""

temp_js = '/Users/piddooow/Documents/web-portfolio/scripts/temp_render.js'
with open(temp_js, 'w', encoding='utf-8') as f:
    f.write(runner_code)

res = subprocess.run(
    ['/System/Library/Frameworks/JavaScriptCore.framework/Versions/Current/Helpers/jsc', temp_js],
    capture_output=True,
    text=True
)

if os.path.exists(temp_js):
    os.remove(temp_js)

if res.returncode != 0 and not res.stdout:
    print("Error during JSC render:", res.stderr)
else:
    rendered_html = res.stdout.strip()
    print("Rendered HTML length:", len(rendered_html))
    print("Has 'Who\\'s Piddooow?':", "Who's Piddooow?" in rendered_html)
    print("Has 'Let’s connect & build.':", "Let’s connect & build." in rendered_html)
    
    # Read index.html and update the inner content of <div id="root">
    index_html_path = '/Users/piddooow/Documents/web-portfolio/index.html'
    with open(index_html_path, 'r', encoding='utf-8') as f:
        current_html = f.read()
    
    new_html = re.sub(
        r'<div id="root">.*?</div>',
        f'<div id="root">\n{rendered_html}\n    </div>',
        current_html,
        flags=re.DOTALL
    )
    
    with open(index_html_path, 'w', encoding='utf-8') as f:
        f.write(new_html)
    print("Successfully updated index.html with complete pre-rendered semantic HTML!")
