from fastapi import FastAPI

app = FastAPI(
    title="Dujohn Mobile Essentials API",
    description="Backend API for the DME e-commerce platform.",
    version="0.1.0",
)


@app.get("/")
def root():
    return {"message": "Welcome to Dujohn Mobile Essentials API"}


@app.get("/health")
def health_check():
    return {"status": "healthy"}
