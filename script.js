document.getElementById("quiz-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let totalScore = 0;
    const scoreMapping = {
      q1: { Bandana: 4, Casquette: 2, Lunettes: 1, Chaine: 3 },
      q2: { Créatif: 4, Rebelle: 2, Loyal: 1, Ambitieux: 3 },
      q3: { Rouge: 3, Noir: 2, Blanc: 4, Bleu: 1 },
      q4: { Aventure: 3, Poèmes: 2, Valeurs: 1, Fete: 4 },
      q5: { Rap: 4, 'R&amp;B': 3, Rock: 1, Pop: 2 },
    };
  
    
    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (selected) {
        totalScore += scoreMapping[`q${i}`][selected.value];
      }
    }
  
    
    let resultMessage = "";
    if (totalScore >= 18) {
      resultMessage = "🔥 Tu es un vrai thug dans l'âme, 100% compatible avec Tupac !";
    } else if (totalScore >= 13) {
      resultMessage = "💯 Tu as pas mal de points communs avec lui, respect !";
    } else if (totalScore >= 8) {
      resultMessage = "🎶 Quelques vibes en commun, mais t'es pas vraiment dans le même univers.";
    } else {
      resultMessage = "🤔 Tupac et toi, c'est pas trop ça... Essaie d'écouter ses sons pour voir !";
    }
  
    document.getElementById("quiz-result").innerHTML = `<p>${resultMessage} ta note est de ${totalScore}/20</p>`;
  });
  