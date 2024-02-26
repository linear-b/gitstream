---
title: Automation - Flag CSS Important Tags
description: Automatically request changes when PRs that include !important tags.
category: [html, css, quality]
---
# Review Important Tags in CSS Files

<!-- --8<-- [start:example]-->
Flag the use of `!important` in CSS files and automatically request changes.

<div class="automationImage" markdown="1">
![Review Important Tags in CSS Files](/automations/languages/html/review-css-important/review-css-important.png)
</div>
<div class="automationDescription" markdown="1">
!!! info "Configuration Description"
    Conditions (all must be true):

    * The PR contains changes to CSS files.
    * The changes include `!important`

    Automation Actions:

    * Apply an orange label that says `⚠️ Includes !important tag`
    * Request changes an post a comment asking the PR author to remove the important tage.

</div>
<div class="automationExample" markdown="1">
!!! example "Review Important Tags in CSS Files"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/languages/css/review_css_important.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/languages/css/review_css_important.cm){ .md-button }
      </span>
    </div>
</div>
<!-- --8<-- [end:example]-->
