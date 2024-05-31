let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"];
let withN = [];
let withoutN = [];

for (let word of letterSearch) {
    if (word.toLowerCase().includes('н')) {
        withN.push(word);
    } else {
        withoutN.push(word);
    }
}

console.log("Слова с буквой 'н':", withN);
console.log("Слова без буквы 'н':", withoutN);
