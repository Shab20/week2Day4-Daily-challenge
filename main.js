const words = prompt("Please enter several words, separated by commas:").split(",");

const longestWord = words.reduce((a, b) => a.length > b.length ? a : b);

console.log("*".repeat(longestWord.length + 4));

for (const word of words) {
    console.log(`* ${word}${" ".repeat(longestWord.length - word.length)} *`);
}

console.log("*".repeat(longestWord.length + 4));
