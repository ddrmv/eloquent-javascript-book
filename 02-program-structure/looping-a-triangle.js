let line = "";
for (let i = 1; i < 8; i++) {
  for (let j = 0; j < i; j++) {
    line += "#";
  }
  console.log(`${line}`);
  line = "";
}
