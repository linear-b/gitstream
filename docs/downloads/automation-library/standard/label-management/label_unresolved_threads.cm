# -*- mode: yaml -*-
manifest:
  version: 1.0
automations:
  label_unresolved_threads:  
    if:  
      - {{ pr.unresolved_threads }}
    run:
      - action: add-label@v1
        args:
          label: {{ pr.unresolved_threads }} Unresolved Thread(s)
          color: {{ colors.yellow }}
      
colors:
  yellow: 'fbca04'