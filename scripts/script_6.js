function arnTrasformer(str){
    let result = [];
    str.match(/.{1,3}/g).forEach(codon => {
        if (codon == "UCU" || codon == "UCC" || codon == "UCA" || codon == "UCG" || codon == "AGU" || codon == "AGC") {
            result.push("Sérine");
        } else if (codon == "CCU" || codon == "CCC" || codon == "CCA" || codon == "CCG") {
            result.push("Proline");
        } else if (codon == "UUA" || codon == "UUG") {
            result.push("Leucine");
        } else if (codon == "UUU" || codon == "UUC") {
            result.push("Phénylalanine");
        } else if (codon == "CGU" || codon == "CGC" || codon == "CGA" || codon == "CGG" || codon == "AGA" || codon == "AGG") {
            result.push("Arginine");
        } else if (codon == "UAU" || codon == "UAC") {
            result.push("Tyrosine");
        } else {
            result.push(codon);
        }
    });
    result = result.join('-');
    console.log(result);
  }

console.log("L'ARN \"CCGUCGUUGCGCUACAGC\" est composé des acides aminés suivants :");
arnTrasformer("CCGUCGUUGCGCUACAGC");

console.log("L'ARN \"CCUCGCCGGUACUUCUCG\" est composé des acides aminés suivants :");
arnTrasformer("CCUCGCCGGUACUUCUCG");