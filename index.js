window.addEventListener("DOMContentLoaded", function(){
 let maison =document.getElementById("home");
 let rouge =document.getElementById("red");
 let orange =document.getElementById("orange");
 let jaune =document.getElementById("yellow");
 let vert =document.getElementById("green");
 let bleu =document.getElementById("blue");
 let mauve =document.getElementById("purple");
 let currentScrollPosition = document.documentElement.scrollTop;   // Connaitre la position actuelle du scroll  
 let position = element.getBoundingClientRect().top; //      Connaitre la position en hauteur d'un Ã©lÃ©men 
 console.log(maison, rouge, orange, jaune, vert, bleu, mauve, currentScrollPosition, position);

 function getNetSection (e)
 {
     if (e.id === "red")
     return document.getElementById("orange");
 }
     if (e.id === "orange")
      return document.getElementById("yellow");
     }
 }
}
 
