x = prompt("De quel nombre veux-tu calculer la factorielle ?");
tmp = x - 1;
while (tmp > 0) {
	x *= tmp;
	tmp--;
}
console.log(`Le résultat est : ${x}`);