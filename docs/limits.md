# Automation limits for free accounts

## Monthly PR automation limit

Free accounts have a monthly cap on the number of PRs that can trigger automations in their organization. This limit ensures fair usage while allowing teams to experience gitStream’s benefits before upgrading.

### How it works
- When the account reaches 90% of its quota, a warning appears in PR comments.  
- Once the limit is reached, new PRs will not execute automations and the gitStream check will be concluded as `Skipped`.  
- The limit resets at the start of each month.  

### What happens when the limit is reached?
- PRs that exceed the quota will still be created as usual, but gitStream will not process automations on them.  
- The PR check will indicate that automations were skipped due to limits.  

## Need more automations?
If your team requires a higher automation quota, upgrading to a paid plan will remove these restrictions.

<a href="https://linearb.io/contact-us" target="_blank">Contact LinearB</a> or <a href="https://linearb.io/book-a-demo" target="_blank">Book a demo</a> to explore upgrade options.