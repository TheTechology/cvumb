import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.post("/webhook", (req, res) => {
  // Demo: în realitate, evenimentul intră în coadă și se procesează async
  res.json({ received: req.body, queued: true });
});

app.listen(3000, () => {
  console.log("Integration Hub demo on :3000");
});
