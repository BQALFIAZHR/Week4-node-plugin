
import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";


const fullName = chalk.green.bold("Nama: Baiq Alfia Zahira");
const nim = chalk.magentaBright.underline("NIM: F1D02310042");

console.log(fullName);
console.log(nim);


console.log(
  cowsay.say({
    text: "Tetap semangat hiyahiyahiya ",
    e: "^^",
    T: "U ",
  })
);


figlet("Baiq Alfia", (err, data) => {
  if (err) {
    console.error("Figlet error:", err);
    return;
  }
  console.log(chalk.blue(data));
});
