# extractOrcaFindings

Usage example, that adds lables based on Orca Secuirty findings.

It will add this label: `orca-security:{{ item.name }}-{{ item.priority | lower }}`
The color of the label will be red, orange, yellow or blue, according to the highest priority identified. Since the label text has the priority in it, the color will be consitent for each label.

`item.name` has the following values: `introduced-cves`, `iac-misconfigurations`, `exposed-secrets` 
`item.priority` has the following values: `HIGH`, `MEDIUM`, `LOW`, `INFO`

for example, an issue with serects which the has both MEDIUM and LOW prioriry will get this label:
`orca-security:exposed-secrets-medium` with color orange (`#d93f0b`)

It can be easily edited and adjusted as you like. For example, if you dont like the color, just delete line 20. if you dont like the text of the label edit line 19. If you want different colors edit their hexa values at the bottom.

```yaml+jinja
# -*- mode: yaml -*-

manifest:
  version: 1.0

automations:
  {% for item in reports %}
  label_orca_{{ item.name }}:
    if:
      - {{ item.count > 0 }}
    run:
      - action: add-label@v1
        args:
          label: 'orca-security:{{ item.name }}:{{ item.priority | lower }}'
          color: {{ colors.red if (item.priority == "HIGH") else (colors.orange if (item.priority == "MEDIUM") else (colors.yellow if (item.priority == "LOW") else colors.blue)) }}
  {% endfor %}

orca: {{ pr | extractOrcaFindings }}

reports:
  - name: introduced-cves
    count: {{ orca.vulnerabilities.count }}
    priority: {{ "HIGH" if (orca.vulnerabilities.priority.high > 0) else ("MEDIUM" if (orca.vulnerabilities.priority.medium > 0) else ("LOW" if (orca.vulnerabilities.priority.low > 0) else "INFO")) }}
  - name: iac-misconfigurations
    count: {{ orca.infrastructure_as_code.count }}
    priority: {{ "HIGH" if (orca.infrastructure_as_code.priority.high > 0) else ("MEDIUM" if (orca.infrastructure_as_code.priority.medium > 0) else ("LOW" if (orca.infrastructure_as_code.priority.low > 0) else "INFO")) }}
  - name: exposed-secrets 
    count: {{ orca.secrets.count }}
    priority: {{ "HIGH" if (orca.secrets.priority.high > 0) else ("MEDIUM" if (orca.secrets.priority.medium > 0) else ("LOW" if (orca.secrets.priority.low > 0) else "INFO")) }}

colors:
  red: 'b60205'
  orange: 'd93f0b'
  yellow: 'fbca04'
  blue: '19c3fb'

```