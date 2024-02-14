// Exercice 2: Gérer les erreurs avec try...catch
// Définir deux nombres
let a = 10;
let b = 0;

// Utiliser try...catch pour gérer l'erreur
try {
  // Tenter de diviser a par b
  let c = a / b;
  // Si b est égal à zéro, une exception est levée
  if (b === 0) {
    throw new Error("Division par zéro");
  }
  // Afficher le résultat
  console.log(c);
} catch (err) {
  // Afficher le message d'erreur
  console.log(err.message); // Division par zéro
} finally {
  // Afficher un message de fin
  console.log("Fin du programme");
}