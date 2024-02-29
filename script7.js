let message = prompt('Tu veux quoi wesh ?')

if(message.slice(-1) === "?"){
    console.log("Ouais ouais...")
} else if(message.length > 0 && message.toUpperCase() === message){
    console.log("Pwa, calme-toi...");
} else if(message.includes("Fortnite")){
    console.log("On s'fait une petite partie en soum-soum ou quoi la ?");
} else if(message.length === 0){
    console.log("T'es stone ou quoi ? Tu as fumé de la marijuanga ? looooool t'es en PLS ou quoi frere ? babylone t'auras comme personnes")
} else {
    console.log("Baleeeek frerooot c'est bon pour vous ?")
};