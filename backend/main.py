from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# Define a list of allowed origins for CORS
# This is just an example; in production, you'd want to restrict this to known domains
allowed_origins = [
    "http://localhost:3000",  # Example frontend URL
    "http://yourfrontend.com",
]

# Add CORSMiddleware to the application instance
app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

@app.get("/")
def read_root():
    return { "message" : "Hello, world!!!"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q, "message": "Hello, {item_id}"}
