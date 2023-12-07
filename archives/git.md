---
layout: archives
---

# Git/GitHub document

- ### {{ layout.title1 }}

|topic| note|
|-------|-----|
|[Adding a local repository to GitHub using Git](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git)|
|[Adding locally hosted code to GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github) |checked|
|[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/)|not checked yet|
|[How to Publish a Docker Image to GitHub's Container Registry](https://dev.to/github/publishing-a-docker-image-to-githubs-container-repository-4n50)||not checked yet|
|[Confusing git terminology](https://jvns.ca/blog/2023/11/01/confusing-git-terminology/)|from RealPython Podcast|
|[Oh Shit, Git!?!](https://ohshitgit.com/)|git relog -> git reset HEAD@{index}|


[Tech with Tim](https://www.youtube.com/watch?v=DVRQoVRzMIY)   
[Kevin](https://www.youtube.com/watch?v=tRZGeaHPoaw)


- ### {{ layout.title2 }}

  - ##### Setting

  |command| explanation| note|
  |-------|------------|-----|
  |**"git remote add origin URL"**| Add remote origin|    
  |**"git push -u origin master"**| push to remote origin| needed only in the first push| 

    - ##### Update

  |command| explanation| note|
  |-------|------------|-----|
  |**"git add . "**| Add files to stage|   
  |**"git commit -m '[message]' "**| Commit|  
  |**"git push"**| Push| Can be omitted properties after the first push |
  |**"git reset "**|  remove a file from staging area|
  |**"git rm --cashed 'file name' "**|  remove a file from repository (get untracked)|
  |**"git commit --amend"**|  amend the message of the last commit|


  - ##### Branching

  |command| explanation| note|
  |-------|------------|-----|
  |**"git branch"**| list branches|
  |**"git checkout -b 'branch name'"**| create a branch|
  |**"git checkout 'branch name' "**| Change branch|
  |**"git merge 'branch name' "**|  merge to master| Note: have to be in Master branch|
  |**"git branch -d 'branch name'"**| Delete a branch|
  |**"git pull origin 'main'"**| pull update from origin to local main branch|
  |**"git rebase"**|  [Merging vs. rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)|


  - ##### Check status, configuration and so on

  |command| explanation| note|
  |-------|------------|-----|
  |**"git config -h"**|  show all related commands available|
  |**"git config user.email"**| show email configurated|
  |**"git diff "**|  show diffence|
  |**"git log"**|  show all commits in repository|
  |**"git relog"**| show all commits in across all branches|
  |**"git reset HEAD@{index}"**| magic time machine|



- ### {{ layout.title3 }}

- ### {{ layout.title4 }}

