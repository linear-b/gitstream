# Review Sonar Duplications

Request changes when Sonar reports an excessive level of duplicated code.

![Review Sonar Duplications](/automations/integrations/sonar/review-sonar-duplications/review-sonar-duplications.png)

Conditions (all must be true):

* The PR contains more than 3% duplicated code.

Automation Actions:

* Apply a label that indicates how much duplicated code Sonar detected.
* Request changes and post a comment explaining why.

!!! example "Review Sonar Duplications"
    ```yaml+jinja
    --8<-- "docs/downloads/automation-library/integrations/sonar/review_sonar_duplications.cm"
    ```
    <div class="result" markdown>
      <span>
      [:octicons-download-24: Download this example as a CM file.](/downloads/automation-library/integrations/sonar/review_sonar_duplications.cm){ .md-button }
      </span>
    </div>



