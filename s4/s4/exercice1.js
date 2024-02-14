// Exercice 1: Utilisation de Promise.all
// Définir un tableau de promesses
const promesses = [
    new Promise((resolve) => {
      setTimeout(() => resolve("a"), Math.random() * 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve("b"), Math.random() * 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => resolve("c"), Math.random() * 1000);
    }),
  ];
  
  // Utiliser la méthode Promise.all() pour attendre les promesses
  Promise.all(promesses).then((valeurs) => {
    console.log(valeurs); // ["a", "b", "c"]
  });