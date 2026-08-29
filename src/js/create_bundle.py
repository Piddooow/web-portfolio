# Auto-generated bundle compiler
import os
import re

base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bundle_file = os.path.join(base_dir, 'js', 'bundle.js')
index_file = os.path.join(os.path.dirname(base_dir), 'index.html')

# Run build_perfect_bundle logic
import subprocess
subprocess.run(['python3', os.path.join(base_dir, 'js', 'build_perfect_bundle.py')], check=True)
