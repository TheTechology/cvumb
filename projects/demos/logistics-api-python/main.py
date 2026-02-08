from fastapi import FastAPI

app = FastAPI(title="Logistics API Demo")

STOCK = [
    {"id": "MAT-001", "name": "Asfalt", "qty": 120, "unit": "t"},
    {"id": "MAT-002", "name": "Piatra spartă", "qty": 300, "unit": "t"},
]

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/stock")
def list_stock():
    return {"items": STOCK}

@app.post("/deliveries")
def register_delivery(payload: dict):
    # Demo: în realitate se validează și se salvează în DB
    return {"received": payload, "status": "queued"}
