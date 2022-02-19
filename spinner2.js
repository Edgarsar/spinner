// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 100
let char = "| / - \\"
char += "\n"
for( let i = 0;i<char.length;i++){
setTimeout(() => {
  process.stdout.write(`\r${char[i]}   `);

}, delay+=200);
}

/* setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);



setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);



setTimeout(() => {
  process.stdout.write("\r|   ");
}, 1000);



setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1400);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1600);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1900); */