console.log("Wesh frero ça va ou quoi ?");
let msg = "";
while (true) {
    msg = prompt("Tu veux quoi ?");
    if (msg === "Ok boomer") {
        break;
    }
    else if (msg[msg.length - 1] == "?") {
        console.log("Ouais ouais...");
    }
    else if (msg == msg.toUpperCase() && msg) {
        console.log("Pwa, calme-toi...");
    }
    else if (msg.includes("Fortnite")) {
        console.log("on s' fait une partie soum-soum ?");
    }
    else if (!msg) {
        console.log("t'es en PLS ?");
    }
    else {
    console.log("balek.");
    }
}
console.log("Je suis démasqué j'ai 55 ans !");
console.log("*Acné-Bot prend la fuite*");