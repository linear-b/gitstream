# /:\ gitStream

**gitStream automates your reviews, so you can focus human effort on what matters most.** Not all Pull Requests are the same. Some reviews can be automated, like changes using a specific API (deprecated, sensitive), changes that are non-functional, like docs or tests, or even reformatting code. Automate these reviews to reduce context switches by assigning specific people to review, approve, or even merge simple changes that passed all checks, and more.

#### Quick Start

Take these three steps to see how gitStream works; later on you can learn about the .cm file, see some automation examples and learn how to create and edit your automation.

=== ":fontawesome-brands-github: GitHub"


	1. Install gitStream for free from [GitHub marketplace](https://github.com/marketplace/gitstream-by-linearb)
	2. Add this action to your repo here `.github/workflows/gitstream.yml` [:octicons-download-24:](/downloads/gitstream.yml){ .md-button }
	3. Add the default automation rules to your repo here `.cm/gitstream.cm` [:octicons-download-24:](/downloads/gitstream.cm){ .md-button }
	
	That's it! Now sit back and watch gitStream automation rules on your next PR (You don’t have to merge it)

	!!! note 

		When installing for GitHub, gitStream can be installed for one repo, specific repos, or all repos in your organization. We recommend installing for **all**, as it will also cover new repos you add in the future. You can change this setting at any time later.


=== ":fontawesome-brands-gitlab: GitLab"

	Coming soon

=== ":fontawesome-brands-bitbucket: BitBucket"

	Coming soon


## Features

**Building Custom Rules**

- PR Complexity 
- Multiple sources
- Code change variables  
- Branch details & history

**gitStream engine**

- Auto-merge PRs
- Custom PR labels
- Require specific reviewers 
- Automated change requests
- Increase quality requirements 
- Based on Jinja2 template engine

## Continuous Merge

**Continuous Merge (CM)** is the practice of automating the merge path by classifying pull requests based on change type, size, and complexity to allow work to flow more efficiently.

[learn more about the .cm file](/cm-file)

[automation examples](/examples)

![Continuous Merge](/assets/ContinuousMerge3l.png#only-light)
![Continuous Merge](/assets/ContinuousMerge3d.png#only-dark)

