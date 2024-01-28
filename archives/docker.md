---
layout: archives
---

# Docker document

- ### {{ layout.title1 }}

[docker for beginners](https://docker-curriculum.com/)  ...depoyed single container to AWSBeanStalk!  
[How To Use Docker To Make Local Development A Breeze](https://www.youtube.com/watch?v=zkMRWDQV4Tg)
[Docker Crash Course Tutorial - Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hxjeEtdHFNYMtCpjNBm3h7)


- ### {{ layout.title2 }}

|command| explanation| note|
|-------|------------|-----|
|**"docker run --help"**|  show all related commands available|
|**"docker ps -a"**|  show all containers currently running|
|**"docker images"**|  show a list of images available locally|
|**"docker rm $(docker ps -a -q -f status=exited)"**|  delete runnning containers|
|**"docker stop 'Container ID'"**|  stop a running container|
|**"docker rm 'Container ID'"**|  remove exited container|
|**"docker-compose up --build'"**|  manage building images with ".yaml"|

- Specify location of the "Dockerfile" at the FROM command in the docker-compose.yaml file when creating container(s).
  - Dockerfile	
    - Blueprint for building Docker images.
  - Docker-compose.yaml
    - Orchestrates multi-container Docker applications.


- ### {{ layout.title3 }}



- ### {{ layout.title4 }}

Note: You have to save file before add to stage. If not, you'll find nothing to add.