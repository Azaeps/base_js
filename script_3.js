x = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
tmp = 1;
console.log("Voici votre pyramide !");
while (tmp <= x) {
    console.log(" ".repeat(x - tmp) + "#".repeat(tmp));
    tmp++;
}