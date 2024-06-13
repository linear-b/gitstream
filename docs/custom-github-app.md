---
title: How to Setup Custom GitHub App and connect to gitStream services
description: Install gitStream on your GitHub Server.
---

# Create GitHub App

A GitHub application serves as the link between gitStream and GitHub. It facilitates user authentication via OAuth2 and allows users to select repositories accessible by gitStream.

In this section, we'll guide you through creating a GitHub app for your self-hosted gitStream installation. By the end, you should have the following values noted down:

* App ID
* App URL
* Client ID
* Client secret
* Private Key

!!! Note

    Throughout this document, when we refer to a GitHub account, it can be an individual or organization account on github.com or your own GitHub Enterprise installation, depending on the GitHub offering you are using.

## Prerequisite

- Decide the endpoint at which you'll be running gitStream. It's typically `gitstream.<your-domain>.com`. Your application won't be running there yet, but you need to know the endpoint you'll be using.

!!! warning
    For integrating with GitHub Enterprise Server (GHE), the top-level domain for gitStream must be the same as the top-level GHE domain. For example, if your GHE is running on `github.prod.company.com`, then gitStream should also run at a `.company.com` endpoint.

## Create New App

Any GitHub account can own the app, but we recommend creating it under the organization account of the team who will maintain the gitStream installation.

- Log in to GitHub and go to your organization account page (e.g., `https://github.com/<organization account name>`).
- Click on *Settings -> Developer Settings -> GitHub Apps -> New GitHub App* as shown below.
- Or go directly to `https://github.com/organizations/<organization account name>/settings/apps/new`

![GitHub App Creation](screenshots/create-new-github-app.png)

## Setup URLs and General Information

Fill in the app information as shown in the screenshot below. For URLs, replace `gitstream.<your-domain>.com` with the actual endpoint at which you'll be hosting the gitStream application.

!!! Warning
    Do not forget trailing slashes for the URLs.

!!! Warning
    Do not forget to disable the "Expire user authorization tokens" checkbox.

![GitHub App Setup - Register](screenshots/create-new-github-app-setup-register.png)

!!! Note
    Use the webhook URL you got from the LinearB setup page.

![GitHub App Setup - Post Installation](screenshots/create-new-github-app-setup-post-installation.png)

## Setup Permissions

We need the following permissions to enable all gitStream functionality:

- **Write access to dedicated gitStream app files:** Used to set up the gitStream workflow files
- **Write access to code:** To allow gitStream to approve PRs once all conditions are met
- **Read access to administration, issues, and metadata:** To get user team membership and branch protection settings
- **Read and write access to actions, checks, pull requests, and workflows:** Trigger workflows, create and update pull requests and their checks, and modify workflow files
- **User email:** Used to identify users                                       |

You need to enable these under the permissions section as shown below:

![Permissions Setup 1](screenshots/create-new-github-app-setup-permissions-1.png)
![Permissions Setup 2](screenshots/create-new-github-app-setup-permissions-2.png)
![Permissions Setup 3](screenshots/create-new-github-app-setup-permissions-3.png)
![Permissions Setup 4](screenshots/create-new-github-app-setup-permissions-4.png)

## Webhook Events & Scope

* Subscribe to events so gitStream is notified when a PR is created or changed, or being commented etc.

![Permissions Setup 5](screenshots/create-new-github-app-setup-permissions-5.png)
![Permissions Setup 6](screenshots/create-new-github-app-setup-permissions-6.png)

!!! Note

    *"Where can this GitHub App be installed?"* choose *"Any account"* so other orgs in your company can use gitStream as well. For on-prem installations that work with github.com, only repositories under your company's org account can be accessed via gitStream.

![Permissions Setup 7](screenshots/create-new-github-app-setup-permissions-7.png)

## Generate Private Key

Once the app is created, scroll down and click *Generate private key*. This will create and download a .pem file for you. Please keep this file safe.

![Private Key](screenshots/create-new-github-app-pkey.png)

## Upload Logo

Download the logo file and upload the logo to your app.

- [Black logo](assets/gitstream-black.png)
- [White logo](assets/gitstream-white.png)

## Get App Config

On your newly created app page, you can find the Client ID, Client Secret, App ID, and App URL. Please note down these fields along with the private key generated in the above step. We'll need to plug them back in LinearB setup.

*Public link* is the App URL and *ID* is the App ID.

![App Config Details](screenshots/create-new-github-app-config.png)

## Finish Setup in LinearB

To complete the integration, fill in the App ID and Private Key in the LinearB setup screen.
