---
title: How to Setup gitStream with GitHub
description: Install gitStream to your GitHub organization.
---
# How to Setup gitStream with GitHub

!!! Info "Prerequisites"
    Allowed network connection between the runners and the following IPs:

    - 13.56.203.235
    - 54.151.81.98

??? Info "Understanding IP Allowlisting for gitStream"
    When setting up IP allowlists in GitHub, you're specifying which source IP addresses are permitted to interact with your repositories and APIs. This affects both gitStream and your CI/CD runners.

    There are two primary cases where this matters for gitStream:

    1. **Webhook Event Handling by gitStream**
       When GitHub triggers a webhook event (e.g., a pull request opened), gitStream may need to make follow-up API calls to GitHub. This can include fetching additional metadata, posting comments to the PR, or performing other actions. These calls are made from the LinearB/gitStream service, which uses a fixed set of IP addresses. These IPs must be added to your GitHub allowlist to ensure proper operation.
    2. **Outbound Requests from Your CI Runner**
       When your pipeline runs gitStream (e.g., via a GitHub Action), that runner might also make outbound calls to GitHub—for example, to clone a repository or retrieve commit history. These requests will originate from the runner's IP address.

    If you encounter errors due to blocked IPs during your CI runs, it's likely that the runner is using an IP that is not part of the configured allowlist. This is a common issue with GitHub-hosted runners, as their IPs can be dynamic and change frequently.

    **Recommended Solution**
    To ensure reliability:

    - Add LinearB/gitStream service IPs to your GitHub allowlist (listed above).
    - Use self-hosted runners or runners with static IPs so you can manage and allowlist their addresses explicitly.

    This combination ensures that both gitStream's internal operations and your CI runners' interactions with GitHub function without network restrictions.

!!! Warning "Install gitStream"

    Before you can complete the gitStream setup process, you need to install the gitStream app to your [GitHub organization](https://github.com/apps/gitstream-cm/installations/new){ .md-button }.
## Setup
You can set up gitStream for a single repo or your entire GitHub organization. Select the tab below for the instructions you want.
=== "Single Repo"
    **Single Repo Setup**

    You must implement two main components for gitStream to function for a single GitHub repo. The first is a configuration file that defines the workflow automations to execute for the repo. The second is a GitHub actions configuration file that triggers gitStream when PRs are created or updated.
    !!! example "Required Configurations"
        **gitStream**

        Create a `.cm/gitstream.cm` rules file in your repository's default branch (usually `master` or `main`). This file will contain a YAML configuration that determines the workflows that run on the repo, and you can name it anything you want as long as it ends in `.cm`

        Here is an example of a gitStream configuration file you can use to setup some basic workflow automations.

        ```yaml+jinja
        --8<-- "docs/downloads/gitstream.cm"
        ```

        **GitHub Actions**

        Once your gitStream configuration file is setup, you need a GitHub Actions configuration file to trigger gitStream automations. Create a `.github/workflows/gitstream.yml` file in your repository's default branch (usually `master` or `main`) and add the following configuration:

        ```yaml+jinja
        --8<-- "docs/downloads/gitstream.yml"
        ```

        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download gitstream.yml (regular version)](/downloads/gitstream.yml){ .md-button }
          </span>
        </div>

        !!! tip "Large Repository Support (Lite Version)"
            If you're working with a large repository (typically monorepos) and experience timeout issues during GitHub Actions execution, you can use the lite version of gitStream that performs a shallow clone to reduce execution time:

            ```yaml
            jobs:
              gitStream:
                timeout-minutes: 15
                runs-on: ubuntu-latest
                name: gitStream workflow automation
                steps:
                  - name: Evaluate Rules
                    uses: linear-b/gitstream-github-action@v2-lite
                    id: rules-engine
            ```

            **Important:** The lite version has limitations - automations that rely on Git history (such as code-experts) may not work properly due to the shallow clone.

        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download gitstream.yml (lite version)](/downloads/gitstream-lite.yml){ .md-button }
          </span>
        </div>
        
        !!! Success
            When finished, you should have the following file structure in your repo.

            ```
            .
            ├─ .cm/
            │  └─ gitstream.cm
            ├─ .github/
            │  └─ workflows/
            │     └─ gitstream.yml
            ```

=== "GitHub Organization"
    **GitHub Organization Setup**

    Organization rules are ideal when you want to enforce consistent rules across every repo in your organization. You can define them by creating a special repository named `cm` in your GitHub organization where you can add automation files that will apply to **all** repositories within that organization.

    !!! Tip "Prerequisite: Create a cm repo and enable gitStream."
        Organization-wide automations need to be defined in a repo named "cm" inside your GitHub organization. Before continuing, you must create this repo and <a href="https://github.com/apps/gitstream-cm/installations/new" target="_blank">enable the gitStream app for it</a>.

    !!! example "Required Configurations"
        **gitStream**

        Create a `gitstream.cm` rules file in the root directory of your cm repository's default branch (usually `master` or `main`). This file will contain a YAML configuration that determines the workflows that run on your organization's repos. You can name it anything you want as long as it ends in `.cm`

        !!! info "Configuration files go in the repo's root directory."
            Unlike the set up instructions for a single repo, your `.cm` files should be placed in the repository's root directory.
        ```yaml+jinja
        --8<-- "docs/downloads/gitstream.cm"
        ```
        **GitHub Actions**

        Once your gitStream configuration file is set up, you will need to create a GitHub Actions configuration file to trigger gitStream automations. Create a `.github/workflows/gitstream.yml` file in your `cm` repository's default branch (usually `master` or `main`) and add the following configuration:

        ```yaml+jinja
        --8<-- "docs/downloads/gitstream.yml"
        ```

        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download gitstream.yml (regular version)](/downloads/gitstream.yml){ .md-button }
          </span>
        </div>

        !!! tip "Large Repository Support (Lite Version)"
            If you're working with large repositories in your organization (typically monorepos) and experience timeout issues during GitHub Actions execution, you can use the lite version of gitStream that performs a shallow clone to reduce execution time:

            ```yaml
            jobs:
              gitStream:
                timeout-minutes: 15
                runs-on: ubuntu-latest
                name: gitStream workflow automation
                steps:
                  - name: Evaluate Rules
                    uses: linear-b/gitstream-github-action@v2-lite
                    id: rules-engine
            ```

            **Important:** The lite version has limitations - automations that rely on Git history (such as code-experts) may not work properly due to the shallow clone. See the [troubleshooting section](/troubleshooting/#github-timeout-issues-with-large-repositories) for more details.

        <div class="result" markdown>
          <span>
          [:octicons-download-24: Download gitstream.yml (lite version)](/downloads/gitstream-lite.yml){ .md-button }
          </span>
        </div>
        
        !!! Success
            Once finished, **all** PRs to your organization's repositories will be processed by the GitHub Action in this repo, and your `cm` repo should have a file directory that looks like this.

            ```
            .
            ├─ gitstream.cm
            ├─ .github/
            │  └─ workflows/
            │     └─ gitstream.yml
            ```

!!! info "gitStream will now do these two things."
    When a PR is created or changed, apply or update a label that provides an estimated time to review.
    ![Estimated Review Time label](screenshots/etr_label_example.png)
    ![Estimated review time](screenshots/slack-estimated-review-time-example-1-min.png)
    When a new PR is created, comment with a list of code experts.
    ![Suggested reviewers](screenshots/github-codeexperts-expanded.png)
## Next Step
!!! tip "How gitStream Works"
    Read our guide: [How gitStream Works](/how-it-works/) to get an overview of the gitStream syntax and automation lifecycle.
## Additional Resources

### Required GitHub Permissions

| Permissions           | Reason |
|----------------------|-------------------------------------------------------|
| Write access to dedicated gitStream app files | Used to set up the gitStream workflow files |
| Write access to code | To allow gitStream to approve PRs once all conditions are met |
| Read access to administration, issues, and metadata | To get the user team membership, and branch protection settings |
| Read and write access to actions, checks, pull requests, and workflows | Trigger workflows, create and update pull requests and their checks, and modify workflow files |
| User email | Used to identify users |

### Configure gitStream to Block Merges <a name="github-merge-block"></a>
You can configure GitHub to require gitStream checks to pass before PRs can be merged using [branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

!!! info "Run a gitStream check before continuing"
    You need to run a check using your gitStream configuration at least once before it can be set as a required check. Make sure to open at least 1 PR before doing this setting.

Here are the steps to configure gitStream in your repo's branch protection rules.

1. Go to repo `settings`
2. On the left panel select `Code and automation` > `Branches`
3. Set `Branch protection rules` for your desired branch
4. Enable `Require status checks to pass before merging`
5. Search for `status checks in the last week for this repository`
6. Select `gitStream.cm` as required check

![Branch protection rules](/screenshots/branch_protection_in_github.png)

![Required checks](/screenshots/required_checks_in_github.png)

### Configuring gitStream with Self-Hosted Runners

Follow these steps to ensure gitStream runs on self-hosted GitHub Actions runners:

1. **Configure Self-Hosted Runners**
    - Set up self-hosted runners for your GitHub organization or repository. Refer to GitHub documentation on [self-hosted runners](https://docs.github.com/en/actions/hosting-your-own-runners) and [using them in a workflow](https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow) for detailed instructions.

2. **Prerequisites for Self-Hosted Runners**
    - Git: Installation instructions can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
    - Python 3.x
        - black 24.4.2

3. **Update GitHub Actions Configuration**
    - Modify the gitStream GitHub Actions workflow file (`.github/workflows/gitstream.yml`) to specify self-hosted runners:

    ```yaml
    jobs:
      gitStream:
        runs-on: self-hosted
        # ... other configuration ...
    ```

4. **Save and Commit**
    - Save changes to the workflow file and commit them to your repository.

5. **Test with a Sample PR**
    - Create a sample pull request to verify gitStream's behavior with self-hosted runners.


## Uninstalling gitStream

Configure in your [GitHub organization](https://github.com/apps/gitstream-cm/installations/new){ .md-button }, and choose `Uninstall "gitStream.cm"`
