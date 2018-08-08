pipeline {
	
    agent any

    stages {
        stage ('Build') {
	    tools {
        	maven 'maven-3.5.4'
        	jdk 'jdk10'
    	    }
            steps {
                sh 'mvn -B -DskipTests -f ShareCar.Api/pom.xml clean package' 
            }
        }    
	stage('Deploy') {
            steps {
		sh 'docker stop sharecar-java || true && docker rm sharecar-java || true'   
                sh 'docker build -t sharecarapp .'
		sh 'docker run --name sharecar-java -p 9001:9001 -d sharecarapp'    
             }
        }
      
    }
}

