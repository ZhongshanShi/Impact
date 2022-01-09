FROM adoptopenjdk/openjdk15:ubi
ADD target/impact-spring-boot.jar impact-spring-boot.jar
EXPOSE 9090
ENTRYPOINT ["java", "-jar", "impact-spring-boot.jar"]