<p align="center">¡ Bienvenido !</p>
<p align="center"><b>Ejemplo practico de Jenkins con nodeJS</b></p>
<p align="center"><a>Dessarrollo para un proceso integración continua</a></p>
<p align="center"><b>Si se puede inmaginar, se puede programar</b></p>
<hr>
<p align="center"><i>¡ Sigue los pasos en el archivo pasos.txt !</i></p>
# Actualiza los paquetes del sistema operativo
apt-get update
apt-get upgrade -y

# Instala dependencias necesarias
apt-get install -y apt-transport-https ca-certificates curl software-properties-common

# Descarga la clave GPG oficial de Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -

# Agrega el repositorio de Docker al sistema
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Instala Docker Engine
apt-get update
apt-get install -y docker-ce
