from fastapi import FastAPI

app = FastAPI(title="chatpdf")


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
