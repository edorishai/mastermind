    document.getElementById("monForm").addEventListener("submit", function(e) {
      e.preventDefault(); 

      let couleur = document.getElementById("couleur").value; 
      let zone = document.getElementById("affichage");

      zone.innerHTML += couleur + "<br>";

      document.getElementById("couleur").value = "";
    });


    