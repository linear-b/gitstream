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
          label: '{{ item.icon }} Orca: {{ item.name }}'
          color: {{ colors.red if (item.rating == "HIGH") else (colors.orange if (item.rating == "MEDIUM") else (colors.yellow if (item.rating == "LOW") else colors.blue)) }}
  {% endfor %}

orca: {{ pr | extractOrcaFindings }}

reports:
  - name: vulnerabilities
    count: {{ orca.vulnerabilities.count }}
    rating: {{ "HIGH" if (orca.vulnerabilities.rating.high > 0) else ("MEDIUM" if (orca.vulnerabilities.rating.medium > 0) else ("LOW" if (orca.vulnerabilities.rating.low > 0) else "INFO")) }}
    icon: ☣️
  - name: infrastructure_as_code
    count: {{ orca.infrastructure_as_code.count }}
    rating: {{ "HIGH" if (orca.infrastructure_as_code.rating.high > 0) else ("MEDIUM" if (orca.infrastructure_as_code.rating.medium > 0) else ("LOW" if (orca.infrastructure_as_code.rating.low > 0) else "INFO")) }}
    icon: 🛡️
  - name: secrets
    count: {{ orca.secrets.count }}
    rating: {{ "HIGH" if (orca.secrets.rating.high > 0) else ("MEDIUM" if (orca.secrets.rating.medium > 0) else ("LOW" if (orca.secrets.rating.low > 0) else "INFO")) }}
    icon: 🔓

colors:
  red: 'b60205'
  orange: 'd93f0b'
  yellow: 'fbca04'
  blue: '19c3fb'

```