

    function genererCombinaison() {
      let combinaison = [];
      for (let i = 0; i < 4; i++) {
        let chiffre = Math.floor(Math.random() * 6) + 1; 
        combinaison.push(chiffre);
      }
      return combinaison;
    }

    let combinaisonSecrete = genererCombinaison();
    console.log("Combinaison secrète :", combinaisonSecrete.join(""));

    document.getElementById("valider").addEventListener("click", function() {
      let couleur = document.getElementById("couleur").value;
      let zone = document.getElementById("zone");

      if (couleur === combinaisonSecrete.join("")) {
        zone.innerHTML += " Bonne combinaison : " + couleur + "<br>";
      } else {
        zone.innerHTML += " Mauvaise combinaison : " + couleur + "<br>" + combinaisonSecrete ;
      }
    });

