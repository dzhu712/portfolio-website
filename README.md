# zhu_daniel_coding_assignment11

## Setup

1. Clone the repository:

```bash
git clone https://github.com/dzhu712/zhu_daniel_coding_assignment11
```

2. Navigate to the project directory:

```bash
cd zhu_daniel_coding_assignment11
```

3. Build Docker image:

```bash
docker build -t zhu_daniel_coding_assignment11 .
```

4. Run Docker image and map ports:

```bash
docker run -d -p 7775:7775 zhu_daniel_coding_assignment11
```

5. View the React app:

Open a web browser and visit [localhost:7775](http://localhost:7775/).
