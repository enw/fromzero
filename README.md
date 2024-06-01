# Project Title: Zero to One with LLMs

## Overview

This project serves as an exploratory exercise leveraging Large Language Models (LLMs) to develop a full-stack application. The stack consists of a containerized React frontend and a Python backend, facilitating interactions with an agent system. This initiative aims to demonstrate the capabilities of LLMs in creating scalable and efficient web applications from scratch.

## Prerequisites

- Docker installed on your machine
- Basic knowledge of React, Python, and Docker
- Node.js and npm installed for the frontend development

## Setup Instructions

### Clone the Repository

First, clone the repository to your local machine:

```sh
git clone https://your-repository-url.git
cd your-project-directory
```

### Frontend Setup

Navigate to the frontend directory and install dependencies:

```sh
cd frontend
npm install
```

### Backend Setup

Ensure you have Python installed. Then, navigate to the backend directory and install the required packages:

```sh
cd ../backend
pip install -r requirements.txt
```

### Docker Compose

With Docker and Docker Compose installed, bring up the entire stack by running:

```sh
docker-compose up
```

This command will build and start the React frontend, Python backend, and PostgreSQL database defined in the `docker-compose.yml`.

## Running the Application

Once the Docker containers are up and running, you can access the React frontend by navigating to `http://localhost:3000` in your browser.

## Contributing

Contributions are welcome. Please feel free to submit a pull request.

## License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.