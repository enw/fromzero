FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy dependency related files to the working directory
COPY pyproject.toml poetry.lock ./

# Install Poetry and the project dependencies
RUN pip install poetry && \
    poetry config virtualenvs.create false && \
    poetry install --no-dev --no-interaction --no-ansi

# Copy the rest of the application code to the working directory
COPY . .

# Define the command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]