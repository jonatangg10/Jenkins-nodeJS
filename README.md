<p align="center">¡ Bienvenido !</p>
<p align="center"><b>Ejemplo practico de Jenkins con nodeJS</b></p>
<p align="center"><a>Dessarrollo para un proceso integración continua</a></p>
<p align="center"><b>Si se puede inmaginar, se puede programar</b></p>
<hr>
<p align="center"><i>¡ Sigue los pasos en el archivo pasos.txt !</i></p>
[appNodeJS] $ docker build -t nodejsapp:app1 --pull=true /var/jenkins_home/workspace/appNodeJS
ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
Build step 'Docker Build and Publish' marked build as failure
Finished: FAILURE


docker run -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock jenkins/jenkins:lts


docker: Error response from daemon: driver failed programming external connectivity on endpoint pedantic_ritchie (a358a5ad2a05a2d658fac25af0fd6c07fd22dd1d99fbff9a1085688070d9153c): Bind for 0.0.0.0:50000 failed: port is already allocated.
ERRO[0000] error waiting for container:
