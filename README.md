# Portfolio Website with Vite in Docker

This repository contains a React app built with Vite, and it provides instructions on how to run the app inside a Docker container.

## Prerequisites

Before you begin, ensure that you have the following tools installed on your machine:

- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Running the App in a Docker Container

Follow the steps below to run the React app in a Docker container:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dzhu712/portfolio-website
   cd portfolio-website
   ```

2. Build the Docker image:

   ```bash
   docker build -t zhu_daniel_coding_assignment12 .
   ```

3. Run the Docker container:

   ```bash
   docker run -d -p 7775:5173 -p 8083:6006 zhu_daniel_coding_assignment12
   ```

   This command maps port 7775 and 8083 on your local machine to port 5173 and 6006, respectively inside the Docker container.

4. Open your browser and navigate to [http://localhost:7775](http://localhost:7775) to view the React app or [http://localhost:8083](http://localhost:8083) to view the Storybook.

## Dockerfile Explanation

The `Dockerfile` in this project is designed to containerize the React app built with Vite. Below is an explanation of each line in the Dockerfile:

```Dockerfile
FROM node:lts-iron AS development
```
- This line sets the base image to Node.js LTS version.

```Dockerfile
ENV NODE_ENV development
```
- Sets the Node environment to "development".

```Dockerfile
WORKDIR /zhu_daniel_site
```
- Sets the working directory inside the container to "/zhu_daniel_site". Next commands will be executed in this directory.

```Dockerfile
COPY package.json .
RUN npm install
```
- Copies the `package.json` file to the working directory and installs the dependencies. Separating this step allows Docker to cache the dependencies, improving build performance.

```Dockerfile
COPY . .
```
- Copies the rest of the application files from the host machine to the working directory in the container.

```Dockerfile
EXPOSE 5173
EXPOSE 6006
```
- Informs Docker that the container will listen on port 7775 at runtime.

```Dockerfile
CMD ["npm", "run", "dev"]
```
- Specifies the default command to run when the container starts. It runs the "dev" script using npm.

Happy coding!
