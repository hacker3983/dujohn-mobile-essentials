from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

app = FastAPI(
    title="Dujohn Mobile Essentials API",
    description="Backend API for the DME e-commerce platform.",
    version="0.1.0",
)
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

@app.get("/")
def home(request: Request):
    return templates.TemplateResponse(
        request=request,
        name="base.html"
    )


@app.get("/health")
def health_check():
    return {"status": "healthy"}
