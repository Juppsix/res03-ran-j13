function exercice1()
{
let hidespider = document.getElementById("hide-spider");  
let showspider = document.getElementById("show-spider");
let spider = document.getElementById("spider")


 hidespider.addEventListener("click", function(){  // quand je clique l'onglet 2
    spider.style.display = "none";  // l'onglet 1 disparait
});  
   
showspider.addEventListener("click", function(){  // quand je clique l'onglet 1
   spider.style.display = "block";  // l'onglet 1 s'affiche
}); 

}
function exercice2()
{
let bouton=document.getElementById("load");
let loader=document.getElementById("loader")
console.log(bouton, loader);

bouton.addEventListener("click", function()

{
   loader.classList.add('rotate');
})}

function exercice3()
{
let boat=document.getElementById("boat");
console.log(boat.classList)
boat.addEventListener("click", function(){
    if (boat.classList =="" || boat.classList =='translateRight') 
    {
            boat.classList.add('translateLeft')
            boat.classList.remove('translateRight')
        }
        
        else {
            boat.classList.add('translateRight')
            boat.classList.remove('translateLeft')
        }
    
})
}

window.addEventListener("DOMContentLoaded", function(){
    exercice1();
    exercice2();
    exercice3();
});