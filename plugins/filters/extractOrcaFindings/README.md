# extractOrcaFindings

Usage example:

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
          label: 'orca-security:{{ item.name }}'
          color: {{ colors.red }}
      - action: add-reviewers@v1
        args:
          reviewers: [my-organization/security]
  {% endfor %}

orca: {{ pr | extractOrcaFindings }}

reports:
  - name: introduced-cves
    count: {{ orca.vulnerabilities.count }}
  - name: iac-misconfigurations
    count: {{ orca.infrastructure_as_code.count }}
  - name: exposed-secrets 
    count: {{ orca.secrets.count }}

colors:
  red: 'b60205'
  orange: 'd93f0b'
  yellow: 'fbca04'
  blue: '19c3fb'

```