<p align="center">¡ Bienvenido !</p>
<p align="center"><b>Ejemplo practico de Jenkins con nodeJS</b></p>
<p align="center"><a>Dessarrollo para un proceso integración continua</a></p>
<p align="center"><b>Si se puede inmaginar, se puede programar</b></p>
<hr>
<p align="center"><i>¡ Sigue los pasos en el archivo pasos.txt !</i></p>

pipeline {
    agent any
    
    stages {
        stage('Check Docker Version') {
            steps {
                script {
                    def dockerVersion = sh(script: 'docker --version | awk \'{print $3}\'', returnStdout: true).trim()
                    
                    echo "Versión de Docker: ${dockerVersion}"
                    
                    if (dockerVersion.startsWith("20.")) {
                        echo "La versión de Docker es compatible."
                    } else {
                        error "La versión de Docker no es compatible. Se requiere la versión 20.x.x."
                    }
                }
            }
        }
    }
}
