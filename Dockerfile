FROM openjdk:10
COPY ShareCar.Api/service/target/service-1.0-SNAPSHOT.jar /home/service-1.0-SNAPSHOT.jar
CMD ["java","-jar","/home/service-1.0-SNAPSHOT.jar"]
