// EXO1
// let nr1 = prompt("Donne un num")
// let nr2 = prompt("Donne un autre num")
// let reponse = (nr1==nr2)

// if(nr1==nr25){

//     alert(`Le nombre ${nr1} et le nombre ${nr2} sont-ils égaux? : ${reponse} `)
// }

// exo2
// let nr1 = prompt("donne un num entre 1 et 10")
// let nr2 = prompt("donne un autre num entre 1 et 10")
// let reponse = (nr1 < nr2)
// if (reponse = (nr1<nr2) || true){
//     alert(`le nombre ${nr1} est-il plus petit que ${nr2}: ${nr1<nr2} `)
// }
// Exo 2
// let nb1 = prompt("Entrez un nombre: ");
// let nb2 = prompt("Entrez un second nombre: ");
// let reponse = nb1 < nb2;
// alert(" Le nombre " + nb1 + " est-il plus petit que le nombre " + nb2 + " ? :" + reponse);

// EXO3
// let nbr1 = parseInt(prompt("Entrez un nombre: "));
// let nbr2 = Number(prompt("Entrez un second nombre: "));
// let nbr3 = Number(prompt("Entrez un dernier nombre: "));
// let somme = nbr1 + nbr2;
// let reponse = somme > nbr3;
// alert("La somme du nombre " + nbr1 + " + le nombre " + nbr2 + " est-elle plus grande que le nombre " + nbr3 + " ? : " + reponse);

// exo3
// let nr1 = prompt("donne un numero entre 1 et 10")
// let nr2 = prompt("donne un numero entre 1 et 10")
// let nr3 = prompt("donne un numero entre 1 et 10")

// let reponse = (nr1 + nr2 > nr3)
// if (reponse = (nr1 + nr2 > nr3) || true ) {
//     alert(`La somme du nombre ${nr1} + le nombre ${nr2} est-elle plus grande que le nombre ${nr3} ? : ${(nr1 + nr2 > nr3)}`)
// };

// Exo 4
// let char = prompt("Ecris la phrase: ");
// let reponse = parseInt(prompt("Combien de caractères comporte la phrase que t'as écris: "));
// let repBonne = char.length == reponse;
// if (repBonne == true) {
//     alert("Felicitation, t'as bien répondu!!");
// } else {
//     alert("Incorrect, t'étais à " + (char.length - reponse) + " de la bonne réponse.");
// }

// Exo 1 version 1
// let nbr1 = prompt("Entrez un nombre: ");
// let nbr2 = prompt("Entrez un second nombre: ");
// let reponse = nbr1 == nbr2;
// alert("Le nombre " + nbr1 + " et le nombre " + nbr2 + " sont ils égaux ? : " + reponse);

// Exo1 version 2
// let nb1 = parseInt(prompt("Nombre 1?")); // reste en string
// let nb2 = parseInt(prompt("nombre 2?")); // passe en int.  

// if ((!isNaN(nb1) && nb1 != undefined ) && ((!isNaN(nb2) && nb2 != undefined ))){
//     alert(`le nombre ${nb1} et le nombre ${nb2} sont t'ils égaux? ${nb1==nb2} et strictement: ${nb1===nb2}`);
// }else{
//     alert('une rreur...');
// }

// Exo 2
// let nb1 = prompt("Entrez un nombre: ");
// let nb2 = prompt("Entrez un second nombre: ");
// let reponse = nb1 < nb2;
// alert(" Le nombre " + nb1 + " est-il plus petit que le nombre " + nb2 + " ? :" + reponse);

// Exo 3
// let nbr1 = parseInt(prompt("Entrez un nombre: "));
// let nbr2 = Number(prompt("Entrez un second nombre: "));
// let nbr3 = Number(prompt("Entrez un dernier nombre: "));
// let somme = nbr1 + nbr2;
// let reponse = somme > nbr3;
// alert("La somme du nombre " + nbr1 + " + le nombre " + nbr2 + " est-elle plus grande que le nombre " + nbr3 + " ? : " + reponse);

// Exo 4
// let char = prompt("Ecris la phrase: ");
// let reponse = parseInt(prompt("Combien de caractères comporte la phrase que t'as écris: "));
// let repBonne = char.length == reponse;
// if (repBonne == true) {
//     alert("Felicitation, t'as bien répondu!!");
// } else {
//     alert("Incorrect, t'étais à " + (char.length - reponse) + " de la bonne réponse.");
// }

// Exo 5
// let prenom = prompt("Entrez votre prénom: ");
// if (prenom.length >= 1) {
//     alert("Bonjour " + prenom);
// } else {
//     prenom = prompt("Attention, vous devez remplir le champs ci dessous, quel est votre prenom");
//     if (prenom.length >= 1) {
//         alert("Bonjour " + prenom);
//     } else {
//         prenom = prompt("Attention, vous devez remplir le champs ci dessous, quel est votre prenom");
        
//     };
// };

// Exo 6
// if (confirm("Veux-tu t'abonner? ")){

//     let rep = prompt("Veux-tu l'abonnement Normal ou Luxe ? ");
//     if (rep == "Normal") {

//         alert("Merci pour votre abonnement");
//     } else if (rep == "Luxe") {

//         alert("Felicitations, vous avez choisis la formule Luxe");
//     }else if (rep == "") {

//         if (confirm("es-tu certain?")) {

//             alert("C'est dommage")
//         } else {

//             rep = prompt("Veux-tu l'abonnement Normal ou Luxe ? ");
//             if (rep == "Normal") {

//                 alert("Merci pour votre abonnement");
//             } else if (rep == "Luxe") {

//                 alert("Felicitations, vous avez choisis la formule Luxe");
//             }else if (rep == "") {

//                 if (confirm("es-tu certain?")) {

//                     alert("C'est dommage")
//                 } else {
                    
//                 };
//             };
//         };
//     };
// } else {
//     if (confirm("Es-tu certain?")) {

//         alert("C'est dommage")
//     } else {

//         rep = prompt("Veux-tu l'abonnement Normal ou Luxe ? ");
//         if (rep == "Normal") {

//             alert("Merci pour votre abonnement");
//         } else if (rep == "Luxe") {

//             alert("Felicitations, vous avez choisis la formule Luxe");
//         }else if (rep == "") {

//             if (confirm("es-tu certain?")) {

//                 alert("C'est dommage")
//             } else {
                
//             };
//         };
//     };
// }

// Exo 7
// let ask = prompt("Comment trouves-tu mes bombons? ");
// let ask2 = prompt("Comment trouves-tu les marshmallows");
// let reponse1 = "Bon";
// let reponse2 = "Pas bon";
// if (ask != reponse1 && ask2 != reponse2) {
//     alert("Aucune des 2 réponses est valide");
// } else if (ask != reponse1 && ask2 == reponse2) {
//     alert("Tu es presque ");
// } else if (ask == reponse1 && ask2 != reponse2) {
//     alert("Tu es presque ");
// } else if (ask == reponse1 && ask2 == reponse2) {
//     alert("Bien joué ");
// };

// Exo 8
// let age = prompt("Quel est votre age? ");
// if (age > 100) {
//     alert("Vous ne pouvez pas reserver car vous etes trop vieux");
// } else if ( age < 0) {
//     alert("Vous ne pouvez pas reserver car vous n'etes meme pas né");
// } else if ( age < 18) {
//     alert("Vous ne pouvez pas reserver car vous etes mineur");
// } else if ( age > 18 ) {
//     alert("Vous pouvez reserver car vous etes majeur");
// } else {
//     alert("Vous pouvez rentrer mais c'est tout juste")
// }

// Exo 9
// let riche = prompt("Est-ce que vous etes riche? ");
// let vacances = prompt("Voulez vous partir en vacances? ");
// let chat = prompt("Est-ce que vous avez un chat");
// if ( vacances == "non") {
//     alert("Pas de problème, ne partez pas en vacances");
// } else if ( riche == "non" || chat == "oui") {
//     alert("Meme si vous voulez, vous ne pouvez pas partir");
// } else if ( riche == "oui" && chat == "non") {
//     alert("Vous pourriez partir en vacances si vous le vouliez");
// } else if ( riche == "oui" && chat=="non" && vacances == "oui") {
//     alert("Tout est parfait, partez en vacances");
// } 

// if (vacances == "oui" ) {

//     if (riche == "non" || chat == "oui") {
//         alert("Meme si vous voulez, vous ne pouvez pas partir");

//     } else if (riche == "oui" && chat == "non") {
//         alert("Tout est parfait, partez en vacances");

//     } else if (riche == "oui" || chat == "non") {
//         alert("InchAllah, t'es riche sinon tu reste a la dar a fou")
//     }

// } else {
//     alert("Pas de problème, ne partez pas en vacances");
// }