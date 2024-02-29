let arn1 = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"

let arnArray = arn1.match(/.{1,3}/g);
console.log(arnArray);

// var str = 'abcdefghijkl';
// console.log(str.match(/.{1,3}/g));

let arnName = []

arnArray.forEach(arn => {
    switch (arn) {
        case "UCU": case "UCC": case "UCA": case "UCG": case "AGU": case "AGC":
            arnName.push("sérine");
            break;
        case "CCU": case "CCA": case "CCC": case "CCG":
            arnName.push("Proline");
            break;
        case "UUA": case "UUG":
            arnName.push("Leucine");
            break;
        case "UUU": case "UUC":
            arnName.push("Phénylalanine");
            break;
        case "CGU": case "CGC": case "CGA": case "AGA": case "AGG": case "CGG":
            arnName.push("Arginine");
            break;
        case "UAU": case "UAC":
            arnName.push("Tyrosine");
        break;
    }
})


console.log(arnName.join("-"))