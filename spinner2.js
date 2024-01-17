const animationItems = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
let delay = 100;

for (const item of animationItems) {
  setTimeout(() => {
    process.stdout.write(item);
  }, delay);
  delay += 200;
}