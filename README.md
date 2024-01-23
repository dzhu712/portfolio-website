# React App with Vite in Docker

This repository contains a React app built with Vite, and it provides instructions on how to run the app inside a Docker container.

## Prerequisites

Before you begin, ensure that you have the following tools installed on your machine:

- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

## Running the App in a Docker Container

Follow the steps below to run the React app in a Docker container:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/dzhu712/zhu_daniel_coding_assignment11
   cd zhu_daniel_coding_assignment11
   ```

2. Build the Docker image:

   ```bash
   docker build -t zhu_daniel_coding_assignment11 .
   ```

3. Run the Docker container:

   ```bash
   docker run -d -p 7775:7775 zhu_daniel_coding_assignment11
   ```

   This command maps port 7775 on your local machine to port 7775 inside the Docker container.

4. Open your browser and navigate to [http://localhost:7775](http://localhost:7775) to view the React app.

Happy coding!
