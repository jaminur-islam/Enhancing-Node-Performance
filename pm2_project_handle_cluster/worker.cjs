addEventListener("message", (e) => {
  let i = 0;
  while (i < 5e9) {
    i++;
  }
  postMessage(i);
});
