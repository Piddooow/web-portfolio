import os

base_dir = "/Users/piddooow/Documents/web-portfolio/src/assets/images"
os.makedirs(base_dir, exist_ok=True)

def generate_clean_project_svg(title, tag, subtitle, filename, symbol):
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="pgrad_{filename.replace('.', '_')}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141416"/>
      <stop offset="100%" stop-color="#0a0a0c"/>
    </linearGradient>
    <pattern id="grid_{filename.replace('.', '_')}" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#pgrad_{filename.replace('.', '_')})"/>
  <rect width="800" height="500" fill="url(#grid_{filename.replace('.', '_')})"/>
  
  <!-- Subtle Framing -->
  <rect x="36" y="36" width="728" height="428" rx="10" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
  
  <!-- Inner UI Container -->
  <g transform="translate(64, 64)">
    <!-- Monospace Tag -->
    <rect width="130" height="24" rx="4" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="65" y="16" fill="#a1a1aa" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="500" text-anchor="middle" letter-spacing="1.5">{tag.upper()}</text>
    
    <!-- Title & Subtitle -->
    <text x="0" y="70" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="32" font-weight="300" letter-spacing="-0.5">{title}</text>
    <text x="0" y="104" fill="#71717a" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="14" font-weight="300">{subtitle}</text>
    
    <!-- Abstract Architecture Graphic -->
    <g transform="translate(0, 140)">
      {symbol}
    </g>
  </g>
</svg>'''
    with open(f"{base_dir}/{filename}", "w") as f:
        f.write(svg)

# 1. Waena Jaya
waena_symbol = '''<rect x="0" y="0" width="310" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<rect x="24" y="24" width="80" height="8" rx="4" fill="#52525b"/>
<rect x="24" y="44" width="220" height="12" rx="6" fill="#ffffff"/>
<rect x="24" y="68" width="260" height="6" rx="3" fill="#3f3f46"/>
<rect x="24" y="82" width="190" height="6" rx="3" fill="#3f3f46"/>
<rect x="24" y="120" width="110" height="28" rx="6" fill="#27272a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
<text x="79" y="138" fill="#e4e4e7" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">waenajaya.com</text>

<rect x="330" y="0" width="340" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<circle cx="380" cy="90" r="32" fill="#27272a" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<path d="M370 90 L378 98 L392 82" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round"/>
<rect x="430" y="65" width="160" height="10" rx="5" fill="#ffffff"/>
<rect x="430" y="85" width="200" height="6" rx="3" fill="#52525b"/>
<rect x="430" y="99" width="140" height="6" rx="3" fill="#3f3f46"/>'''
generate_clean_project_svg("Waena Jaya", "Website Development", "Clean corporate digital web presence & service catalog", "waena-jaya.svg", waena_symbol)

# 2. AI Business Assistant
ai_symbol = '''<rect x="0" y="0" width="670" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<rect x="24" y="24" width="240" height="36" rx="8" fill="#27272a"/>
<text x="40" y="46" fill="#d4d4d8" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="12">Summarize monthly inventory variance</text>

<rect x="200" y="74" width="446" height="76" rx="8" fill="#202024" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
<text x="220" y="100" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="12">Processed 1,420 SKU records across 3 warehouse nodes.</text>
<text x="220" y="124" fill="#a1a1aa" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="11">Total deviation is within 0.4% baseline tolerance.</text>'''
generate_clean_project_svg("AI Business Assistant", "AI & LLM Integration", "Automated intelligence layer for enterprise workflows", "ai-assistant.svg", ai_symbol)

# 3. ERP Management System
erp_symbol = '''<rect x="0" y="0" width="210" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<text x="24" y="36" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">MODULE 01</text>
<text x="24" y="60" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="16" font-weight="500">Procurement</text>
<line x1="24" y1="80" x2="186" y2="80" stroke="rgba(255,255,255,0.08)"/>
<rect x="24" y="98" width="130" height="6" rx="3" fill="#52525b"/>
<rect x="24" y="112" width="90" height="6" rx="3" fill="#3f3f46"/>

<rect x="230" y="0" width="210" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<text x="254" y="36" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">MODULE 02</text>
<text x="254" y="60" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="16" font-weight="500">Inventory Sync</text>
<line x1="254" y1="80" x2="416" y2="80" stroke="rgba(255,255,255,0.08)"/>
<rect x="254" y="98" width="140" height="6" rx="3" fill="#52525b"/>
<rect x="254" y="112" width="110" height="6" rx="3" fill="#3f3f46"/>

<rect x="460" y="0" width="210" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<text x="484" y="36" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="10">MODULE 03</text>
<text x="484" y="60" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="16" font-weight="500">Accounting</text>
<line x1="484" y1="80" x2="646" y2="80" stroke="rgba(255,255,255,0.08)"/>
<rect x="484" y="98" width="120" height="6" rx="3" fill="#52525b"/>
<rect x="484" y="112" width="80" height="6" rx="3" fill="#3f3f46"/>'''
generate_clean_project_svg("ERP Management System", "Enterprise Systems", "Integrated multi-module business operations platform", "erp-system.svg", erp_symbol)

# 4. Business Automation Platform
automation_symbol = '''<rect x="0" y="0" width="670" height="180" rx="8" fill="#18181b" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
<circle cx="80" cy="90" r="28" fill="#27272a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
<text x="80" y="95" fill="#e4e4e7" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">WEBHOOK</text>

<line x1="110" y1="90" x2="250" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4 4"/>

<rect x="250" y="62" width="170" height="56" rx="8" fill="#202024" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
<text x="335" y="86" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="11" font-weight="500" text-anchor="middle">Pipeline Transformer</text>
<text x="335" y="103" fill="#71717a" font-family="'JetBrains Mono', monospace" font-size="9" text-anchor="middle">JSON Schema Validate</text>

<line x1="420" y1="90" x2="560" y2="90" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4 4"/>

<circle cx="590" cy="90" r="28" fill="#27272a" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
<text x="590" y="95" fill="#e4e4e7" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">DATABASE</text>'''
generate_clean_project_svg("Business Automation Platform", "Automation & Workflow", "Reliable event-driven pipelines and data orchestration", "automation-platform.svg", automation_symbol)

print("Generated all custom project SVGs for Vidd!")
