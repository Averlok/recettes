---
layout: default
title: <i class="fa-solid fa-calculator"></i> Outils & Conversions
nav_order: 15
---

<div class="categorie-header" markdown="1">
**<i class="fa-solid fa-calculator"></i> Outils & Conversions**
</div>

<div class="sous-titre">
Un petit coin pratique pour ajuster tes mesures sans te casser la tête la farine jusqu'aux coudes!
</div>

* Table des matières 
{:toc min_level=3 max_level=3}

---

## <i class="fa-solid fa-arrows-rotate"></i> Convertisseur interactif
{::nomarkdown}
<div style="background: rgba(66, 41, 86, 0.05); padding: 18px; border-radius: 10px; border: 1px solid #422956; margin-bottom: 25px;">

  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
    <span style="font-weight: bold; color: #422956;" id="volLabel">Volume (Tasses <i class="fa-solid fa-right-long"></i> ml)</span>
    <button type="button" id="btnVol" title="Inverser le sens" style="background: transparent; color: #422956; border: 1px solid #422956; border-radius: 20px; padding: 4px 10px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 5px; transition: all 0.2s ease;">
      <i class="fa-solid fa-arrows-rotate"></i> <span style="font-size: 11px; font-weight: 600;">Inverser</span>
    </button>
  </div>
  <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 18px;">
    <input type="number" id="volInput" placeholder="0" step="0.25" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; width: 50%; font-size: 16px;">
    <span style="font-weight: bold; color: #422956;">= <span id="volResult">0</span> <span id="volUnit">ml</span></span>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
    <span style="font-weight: bold; color: #422956;" id="casLabel">Cuillères à soupe (c. à soupe <i class="fa-solid fa-right-long"></i> ml)</span>
    <button type="button" id="btnCas" title="Inverser le sens" style="background: transparent; color: #422956; border: 1px solid #422956; border-radius: 20px; padding: 4px 10px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 5px; transition: all 0.2s ease;">
      <i class="fa-solid fa-arrows-rotate"></i> <span style="font-size: 11px; font-weight: 600;">Inverser</span>
    </button>
  </div>
  <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 18px;">
    <input type="number" id="casInput" placeholder="0" step="1" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; width: 50%; font-size: 16px;">
    <span style="font-weight: bold; color: #422956;">= <span id="casResult">0</span> <span id="casUnit">ml</span></span>
  </div>

  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
    <span style="font-weight: bold; color: #422956;" id="tempLabel">Température (°F <i class="fa-solid fa-right-long"></i> °C)</span>
    <button type="button" id="btnTemp" title="Inverser le sens" style="background: transparent; color: #422956; border: 1px solid #422956; border-radius: 20px; padding: 4px 10px; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 5px; transition: all 0.2s ease;">
      <i class="fa-solid fa-arrows-rotate"></i> <span style="font-size: 11px; font-weight: 600;">Inverser</span>
    </button>
  </div>
  <div style="display: flex; gap: 10px; align-items: center;">
    <input type="number" id="tempInput" placeholder="0" step="5" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc; width: 50%; font-size: 16px;">
    <span style="font-weight: bold; color: #422956;">= <span id="tempResult">0</span> <span id="tempUnit">°C</span></span>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  let volInv = false, casInv = false, tempInv = false;

  function calcVol() {
    let val = parseFloat(document.getElementById('volInput').value);
    if (isNaN(val)) { document.getElementById('volResult').innerText = '0'; return; }
    let res = volInv ? (val / 250) : (val * 250);
    document.getElementById('volResult').innerText = volInv ? res.toFixed(2) : Math.round(res);
  }

  function calcCas() {
    let val = parseFloat(document.getElementById('casInput').value);
    if (isNaN(val)) { document.getElementById('casResult').innerText = '0'; return; }
    let res = casInv ? (val / 15) : (val * 15);
    document.getElementById('casResult').innerText = casInv ? res.toFixed(1) : Math.round(res);
  }

  function calcTemp() {
    let val = parseFloat(document.getElementById('tempInput').value);
    if (isNaN(val)) { document.getElementById('tempResult').innerText = '0'; return; }
    let res = tempInv ? ((val * 9 / 5) + 32) : ((val - 32) * 5 / 9);
    document.getElementById('tempResult').innerText = Math.round(res);
  }

  document.getElementById('volInput').addEventListener('input', calcVol);
  document.getElementById('casInput').addEventListener('input', calcCas);
  document.getElementById('tempInput').addEventListener('input', calcTemp);

  document.getElementById('btnVol').addEventListener('click', function() {
    volInv = !volInv;
    document.getElementById('volLabel').innerHTML = volInv ? 'Volume (ml <i class="fa-solid fa-right-long"></i> Tasses)' : 'Volume (Tasses <i class="fa-solid fa-right-long"></i> ml)';
    document.getElementById('volUnit').innerText = volInv ? 'tasses' : 'ml';
    calcVol();
  });

  document.getElementById('btnCas').addEventListener('click', function() {
    casInv = !casInv;
    document.getElementById('casLabel').innerHTML = casInv ? 'Cuillères à soupe (ml <i class="fa-solid fa-right-long"></i> c. à soupe)' : 'Cuillères à soupe (c. à soupe <i class="fa-solid fa-right-long"></i> ml)';
    document.getElementById('casUnit').innerText = casInv ? 'c. à soupe' : 'ml';
    calcCas();
  });

  document.getElementById('btnTemp').addEventListener('click', function() {
    tempInv = !tempInv;
    document.getElementById('tempLabel').innerHTML = tempInv ? 'Température (°C <i class="fa-solid fa-right-long"></i> °F)' : 'Température (°F <i class="fa-solid fa-right-long"></i> °C)';
    document.getElementById('tempUnit').innerText = tempInv ? '°F' : '°C';
    calcTemp();
  });
});
</script>
{:/nomarkdown}


---

## <i class="fa-solid fa-spoon"></i> Équivalences de cuillères et tasses

| Mesure | Équivalent en cuillères | Métrique (ml) |
| :--- | :--- | :--- |
| **1 c. à thé (tsp)** | 1/3 c. à soupe | 5 ml |
| **1 c. à soupe (tbsp)** | 3 c. à thé | 15 ml |
| **1/4 tasse** | 4 c. à soupe | 60 ml |
| **1/3 tasse** | 5 c. à soupe + 1 c. à thé | 80 ml |
| **1/2 tasse** | 8 c. à soupe | 125 ml |
| **1 tasse** | 16 c. à soupe | 250 ml |

---

## <i class="fa-solid fa-weight-hanging"></i> Équivalences de poids courantes

| Ingrédient | 1/4 tasse | 1/2 tasse | 1 tasse |
| :--- | :--- | :--- | :--- |
| **Farine tout-usage** | 30 g | 60 g | 120 g |
| **Sucre blanc** | 50 g | 100 g | 200 g |
| **Cassonade (tassée)** | 55 g | 110 g | 220 g |
| **Beurre** | 55 g | 115 g | 230 g |
| **Pépites de chocolat** | 45 g | 90 g | 180 g |
| **Cacao en poudre** | 25 g | 50 g | 100 g |

---

## <i class="fa-solid fa-utensils"></i> Équivalences poids ➔ tasses par type de pâte (Sèches)

| Type de pâte | 200 g | 250 g | 300 g | 350 g |
| :--- | :--- | :--- | :--- | :--- |
| **Orzo / Risoni** *(Très dense)* | 1 tasse + 1/8 | 1 tasse + 1/3 | 1 tasse + 2/3 | 2 tasses |
| **Ditalini / Petits tubes** | 1 tasse + 1/2 | 1 tasse + 7/8 | 2 tasses + 1/3 | 2 tasses + 2/3 |
| **Macaronis / Coudes** | 2 tasses | 2 tasses + 1/2 | 3 tasses | 3 tasses + 1/2 |
| **Coquillages (Medium)** | 2 tasses + 1/3 | 3 tasses | 3 tasses + 1/2 | 4 tasses + 1/8 |
| **Penne / Rigatoni / Cavatappi** | 2 tasses + 1/2 | 3 tasses + 1/8 | 3 tasses + 3/4 | 4 tasses + 3/8 |
| **Fusilli / Rotini / Farfalle** *(Volumineux)* | 2 tasses + 2/3 | 3 tasses + 1/3 | 4 tasses | 4 tasses + 2/3 |

> **Astuce de chef :**
> * **Règle de cuisson** : 100 g de pâtes sèches absorbent l'eau et donnent environ **225 g à 250 g de pâtes cuites**.
> * **Pâtes longues (Spaghetti, Linguine)** : 100 g correspondent à un faisceau d'environ **2.5 cm (1 pouce)** de diamètre (la taille d'une pièce de 1$ CAD).


---

## <i class="fa-solid fa-temperature-high"></i> Températures du four

* **275 °F (140 °C)** : Réchauffer / Cuisson très lente
* **350 °F (180 °C)** : La température standard (Gâteaux, biscuits, gratins)
* **400 °F (200 °C)** : Rôtissage des légumes et viandes
* **450 °F (230 °C)** : Pizzas et pains maison

---

## <i class="fa-solid fa-layer-group"></i> Positionnement des grilles de four

| Position dans le four | Types de plats recommandés | Pourquoi cette position ? |
| :--- | :--- | :--- |
| **Grille supérieure** *(Haut)* | • Brochettes, gratins, lasagnes (fin de cuisson)<br>• Pizzas (pour griller le fromage)<br>• Viandes minces à griller (*Broil*) | Rapproche les aliments de l'élément supérieur pour **dorer, griller ou gratiner** rapidement sans trop cuire l'intérieur. |
| **Grille centrale** *(Milieu)* | • Gâteaux, muffins, biscuits<br>• Pains et brioches<br>• Pâtés, quiches, casseroles<br>• Rôtis de viande et volailles | **Option par défaut.** Assure une circulation d'air chaud uniforme tout autour du plat sans risquer de brûler le dessus ou le dessous. |
| **Grille inférieure** *(Bas)* | • Pizzas (sur pierre ou plaque)<br>• Tartes (pour cuire la pâte du dessous)<br>• Grosses pièces de viande (dinde, gigot) | Offre une chaleur directe par le bas pour **rendre le dessous croustillant**. Libère de l'espace en hauteur pour les gros plats. |

> **Conseils pratiques :**
> * **Cuisson multi-niveaux :** Utiliser les positions haute et basse, puis intervertir les plaques à mi-cuisson.
> * **Chaleur tournante (Convection) :** La température étant plus uniforme, le choix de la grille est moins critique, mais le milieu reste l'option idéale par défaut.


---

## <i class="fa-solid fa-kit-medical"></i> Substituts de dépannage

* **1 tasse de babeurre** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 1 tasse de lait + 1 c. à soupe de jus de citron (attendre 5 min).
* **1 c. à thé de poudre à pâte** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 1/4 c. à thé de bicarbonate de soude + 1/2 c. à thé de crème de tartre.
* **1 c. à soupe de fécule de maïs** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 2 c. à soupe de farine tout-usage.
* **1 oeuf (en pâtisserie)** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 1/2 banane écrasée OU 1 c. à soupe de graines de lin moulues + 3 c. à soupe d'eau.
* **1 gousse d'ail** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 1/8 c. à thé d'ail en poudre.
* **1 tasse de crème sûre** <i class="fa-solid fa-arrow-right" style="color: #422956; font-size: 0.9em; margin: 0 5px;"></i> 1 tasse de yogourt grec nature.
