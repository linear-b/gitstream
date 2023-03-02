# Allowing gitStream to block PRs merge

!!! note 

	To be able to select `gitStream.cm` as required check it should run at least once in the repo. Make sure to open at least 1 PR before doing this setting.

1. Go to repo `settings`
2. On the left panel select `Code and automation` > `Branches` 
3. Set `Branch protection rules` for your desired branch 
4. Enable `Require status checks to pass before merging`
5. Search for `status checks in the last week for this repository`
6. Select `gitStream.cm` as required check

![Branch protection rules](/screenshots/branch_protection_in_github.png)
  
![Required checks](/screenshots/required_checks_in_github.png)

