let char = "| / - \\ | / - \\ |";

let delay = 100;

for( let i = 0;i<char.length;i++){
setTimeout(() => {
  process.stdout.write(`\r${char[i]}   `);

}, delay+=200);
}
setTimeout(() => {   console.log(''); }, delay); 
 

