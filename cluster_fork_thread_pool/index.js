process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require("cluster");
const { pbkdf2 } = require("crypto");
//github.com/Unitech/pm2/tree/master/examples

// Is the file being executed in master mode ?
https: if (cluster.isMaster) {
  // Cause index.js to be executed *again* but in child mode
  cluster.fork();
} else {
  // Im a child, Im going to act like a server and do nothing else
  const express = require("express");
  const app = express();

  app.get("/", (req, res) => {
    pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("HI would ");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("This is my first server response ");
  });

  app.listen(3000, () => {
    console.log("server running on 3000 port ");
  });
}

/*   function doWork(duration) {
    const start = Date.now();
    while (Date.now() - start < duration) {}
  }
 */
