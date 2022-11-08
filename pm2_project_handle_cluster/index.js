import express from "express";
const app = express();
import Worker from "web-worker";

app.get("/", (req, res) => {
  const url = new URL("./worker.cjs", import.meta.url);
  const worker = new Worker(url);

  worker.addEventListener("message", (e) => {
    console.log(e.data); // "hiya!"
    res.send("" + e.data);
  });

  worker.postMessage("hello");
});

app.get("/fast", (req, res) => {
  res.send("This is my first server response ");
});

app.listen(3000, () => {
  console.log("server running on 3000 port ");
});

/*   function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }
 */
