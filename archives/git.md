---
layout: archives
---

# Git/GitHub document

- ### {{ layout.title1 }}

|topic| link| note|
|-------|------------|-----|
|[Adding locally hosted code to GitHub](https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github) |test |checked|
|[Inviting collaborators to a personal repository](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/)|test |not checked yet|
|[How to Publish a Docker Image to GitHub's Container Registry](https://dev.to/github/publishing-a-docker-image-to-githubs-container-repository-4n50)||not checked yet|

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

  - ##### Branching

  |command| explanation| note|
  |-------|------------|-----|
  |**"git branch"**|  list branches|
  |**"git checkout -b 'branch name'"**|  create a branch|
  |**"git checkout 'branch name' "**|  Change branch|
  |**"git branch -D 'branch name'"**|  Delete a branch|
  |**"git merge 'branch name' "**|  merge to master| Note: have to be in Master branch|

  - ##### Check status, configuration and so on

  |command| explanation| note|
  |-------|------------|-----|
  |**"git config -h"**|  show all related commands available|
  |**"git config user.email"**| show email configurated|
  |**"git diff "**|  show diffence|
  |**"git log"**|  show all commits in repository|
  |**"git log --oneline"**| show all commits in repository|


- ### {{ layout.title3 }}

- ### {{ layout.title4 }}

