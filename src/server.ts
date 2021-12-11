import express from "express";

const app = express();

app.post("/test-post", (request, response) => {
  return response.send("olá POST");
});
app.listen(3000, () => console.log("Server is running"));
