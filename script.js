// ----------------- GAMES --------------------- //
//     BIENVENUE SUR LE JEUX D'HARRY POTTER
// --------------------------------------------- //
// LANCEMENT DU JEUX AFFICHAGE
let launchGames = prompt("Veux-tu faire une partie du jeux Harry Potter ? Ecrit 'y' pour OUI ou 'n' pour NON" );

    if (launchGames === "y") {
    // DEBUT DU JEUX "BIENVENUE - WELCOME"
    alert(" Bienvenue dans le jeux d'Harry Potter !" );
    // INFORMATION POUR OUVRIR LA CONSOLE
    alert("Ouvre ta console de ton navigateur pour voir ton aventure (Raccourci F12)" );

    // ENTRAINEMENT INFORMATIONS
    console.log(" Debut de l'entrainement de ton héro !" );
    console.log(" Ton héro doit effectuer une série de 5 entrainements avant de partir au combat !" );

    // DEMANDE A L'UTILISATEUR LE NOMBRE DE SEANCE POUR OBTENIR DE L'ENERGIE
    let nbSeances = prompt("Combien de séances d'entrainement veux-tu réaliser ?")

    // L'UTILISATEUR NE POSSEDE AUCUNE ENERGIE
    let energie = 0;

    // ENTRAINEMENT -> EN FONCTION DU CHOIX DE L'UTILISATEUR
    for ( energie; energie <= nbSeances; (energie++) ) {
        console.log( "Entrainement " + energie + " terminé ! Bravo !" );
    }
    // RETIRER 1 POINT POUR COMMENCER A ZERO
    const heroEnergie = (energie - 1)

    // INFORMATION DU RENDU DE L'ENTRAINEMENT
    console.log( "Ton entrainement est terminé ! Tu peux désormais combattre contre des ennemis !" );
    alert(" Tu as obtenu" + " " + heroEnergie + " " + "énergies" );
    console.log( " Tu as obtenu" + " " + heroEnergie + " " + "énergies" );
    // INFORMATION ENNEMIES EN APPROCHE
    alert("Harry aperçoit 3 ennemies !")

    // CHOIX DE L'UTILISATEUR
    let choixUser = prompt("Que veux-tu faire ?  Combattre 'y' ou 'n'" );

    if (choixUser == "y"){

        // COMBAT - CONTRE ENNEMIS
        console.log( "Lancement du combat !" );
        console.log( "Il y a 3 ennemies devant toi ! Attention !" );

        // COMBAT - LE JOUEUR PERD TOUTE SON ENERGIE
        const choixUser = prompt( "Combien d'ennemies veux-tu combattre ?" );
        // 
        while (heroEnergie >= choixUser) { 
            // INFORMATION
            alert("Le premier ennemie a été abattu ! Bravo !");
            // REGARDER ENERGIE PDT COMBAT
            let consultEnergie = prompt( "Veux-tu consulter ton énergie ? Ecrit 'y' pour OUI ou 'n' pour NON" );
            
            if (consultEnergie == "y") {
                const heroEnergiecombat = (heroEnergie - 1)
                alert("Il te reste " + heroEnergiecombat + "énergie");
                console.log("Il te reste " + heroEnergiecombat + " " + "énergie");
            } else {
                alert("L'aventure continue !");
            }
            // INFORMATION FINAL DU COMBAT
            alert("Tu as tué les " + choixUser + " ennemis, Bravo !");
            break;
        }




        // EN COURS //
        // 
        //
        // RECOMPENSE COFFRES
        let ObjetCoffre = [ "Epée legendaire", "Potion magique", "Bouclier en or" ];
        ObjetCoffre.forEach(function(objetcoffre){
        console.log("Objet récupéré :" + " " + objetcoffre);
        });

        // INFORMATION ENERGIE APRES COMBAT
        console.log( "Alerte ! Tu n'as plus d'energie !" );
        console.log( "Tu dois refaire un entrainement pour continuer l'aventure !" );
    } else{
        alert("Dommage ! Tu aurais pu essayer..." );
        alert("Relance le jeux si tu veux refaire une partie" );
    }
// ARRET DU JEUX
} else{
    alert("Reviens quand tu veux, si tu veux faire une partie de ce jeux !")
}