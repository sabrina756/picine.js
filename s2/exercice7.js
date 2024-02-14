// Exercice 7: Vérifier si un mot est un palindrome
var str="radar"
// Function to check if a given text is a palindrome
function checkPalindrome(txt) {
    // Remove non-alphanumeric characters and convert to lowercase
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
    // Get the length of the modified text
    let len = txt_new.length;
  
    // Calculate the half-length of the text
    let halfLen = Math.floor(len / 2);

    // Loop through the first half of the text
    for (let i = 0; i < halfLen; i++) {
      // Check if the characters from the beginning and end match
      if (txt_new[i] !== txt_new[len - 1 - i]) {
        // If a mismatch is found, set the result text and return from the function
        console.log("Nope! Not a palindrome");
       
      }
      // If no mismatch is found, set the result text to indicate it's a palindrome
     else{
      console.log("Yes! It's a palindrome");
     } 
    }
  }
  console.log(checkPalindrome(str));