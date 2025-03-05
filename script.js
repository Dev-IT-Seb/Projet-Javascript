// Exerice 3
// let user = prompt("Saisie le prix de ton article");
// let solde = prompt("Saisie le pourcentage de la remise de cet article");
// let resultatFirst = ( user * solde / 100 )
// let resultatLast = (user - resultatFirst) 
// 
// if (user <= 0){
//    console.log("Veuillez saisir une valeur valide de votre article !")
// }
// else {
//    console.log("Après une réduction de" + " " + solde + " " +"%, le prix final est de" + " " + resultatLast + " euros")
// }
//
// Exercice GAME
let Harry = 30; 
let Voldemort = "Voldemort"; 

// Conditions si 
if (Harry >= 50){
    alert("Harry dit: J'attaque normalement.");
}
// EFFET POISON SUR POINT DE VIE PDT L'ATTAQUE
else if (Harry >= 30 && Harry <= 50){
    // Conversation après l'attaque
    alert( "Harry dit: J'attaque moins fort.. Car j'ai contracté son poison..." );
    alert( Voldemort + " " + "dit : HAAAA tu me fais mal mais tu as hérité de mon poison, héhéhé !");
    alert( "Harry dit : Comme l'adversaire est contaminé, je perd 1 point de vie, snif :=(" )
    // Perte de 1pt sur la vie du Hero
    Harry--;
    alert("voici mes points de vie actuel à cause du poison :" + " " + Harry)
}   