import express from "express";

const PORT = 4000;
const app = express();

app.listen(PORT, () => {
  console.log(`✅ Server listenning on http://localhost:${PORT}`);
});
const handleRemove = (req, res) => res.send("USER DELETE");
app.use("/", handleRemove);
