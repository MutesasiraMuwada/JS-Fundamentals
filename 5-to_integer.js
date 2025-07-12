const num = process.argv[2];
const converted = parseInt(num);

if (isNaN(converted)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${converted}`);
}