---
layout: archives
---

# document document

### Commands for Docker

|command| explanation| note|
|-------|------------|-----|
|**"docker run --help"**|  show all related commands available|
|**"docker ps -a"**|  show all containers currently running|
|**"docker images"**|  show a list of images available locally|
|**"docker rm $(docker ps -a -q -f status=exited)"**|  delete runnning containers|
|**"docker stop 'Container ID'"**|  stop a running container|
|**"docker rm 'Container ID'"**|  remove exited container|
|**"docker-compose up --build'"**|  manage building images with ".yaml"|

Source: https://docker-curriculum.com/  ...depoyed single container to AWSBeanStalk!  
Other reference: https://www.youtube.com/watch?v=zkMRWDQV4Tg


Note: You have to save file before add to stage. If not, you'll find nothing to add.