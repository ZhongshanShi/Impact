# Impact
Run instruction

GitHub Run Instruction:

1, git clone https://github.com/ZhongshanShi/Impact
2, for UI, run below two commands in terminal: Node.js (v14.16.0)
npm install
npm start
3, for Server, just run the Springboot application (JDK 15, Maven 3.6.3)

 
DockerHub Run Instruction：
1, docker pull jayshidocker/docker-spring-boot:1.1.1
2, docker pull jayshidocker/react-impact:1.1.1
3, check whether the pull is completed, run below command:
  docker images
you should see below two images in your docker:
REPOSITORY                        TAG       IMAGE ID       CREATED          SIZE
jayshidocker/docker-spring-boot   1.1.1     348dd038d20d   16 minutes ago   823MB
jayshidocker/react-impact         1.1.1     7da80c3744ec   27 minutes ago   484MB

4, run below command for springboot server (make sure port 9090 is not taken by other apps)
docker run -p 9090:9090 jayshidocker/docker-spring-boot:1.1.1

go to below link to check server is up running:
http://localhost:9090/impact.com/api/healthCheck

you should see below response:

{
    "statusCode": 200,
    "message": "healthCheck successful"
}


5, run below command for UI (make sure port 3000 is not taken by other apps)
docker run -p 3000:3000 jayshidocker/react-impact:1.1.1

6, run below command to check both containers are running
docker ps
you should see below two containers in your docker:

CONTAINER ID   IMAGE                                   COMMAND                  CREATED              STATUS              PORTS                    NAMES
95845e5d8fdb   jayshidocker/react-impact:1.1.1         "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:3000->3000/tcp   dreamy_shirley
908f2a006e2f   jayshidocker/docker-spring-boot:1.1.1   "java -jar impact-sp…"   4 minutes ago        Up 4 minutes        0.0.0.0:9090->9090/tcp   elastic_dewdney

6, go to localhost:3000 to test 





