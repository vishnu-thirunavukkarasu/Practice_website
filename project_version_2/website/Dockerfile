# ---- Build stage ----
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

# copy pom + source
COPY pom.xml .
COPY src ./src

# build the jar
RUN mvn -q -DskipTests package

# ---- Run stage ----
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# copy the built jar
COPY --from=build /app/target/*.jar app.jar

# Spring Boot default port
EXPOSE 8080

ENTRYPOINT ["java","-jar","app.jar"]
