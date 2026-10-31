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

## <i class="fa-solid fa-drumstick-bite"></i> Températures de cuisson des viandes

Pour une cuisson parfaite et sécuritaire, mesure la température au cœur de la pièce (partie la plus épaisse, sans toucher d'os). Retire la viande du feu à **2 à 3 °C (3 à 5 °F) sous la cible** : la cuisson se poursuit au repos.

### Bœuf, Veau & Agneau

| Cuisson | Température interne | Description & Aspect |
| :--- | :---: | :--- |
| **Bleu** | **48 °C à 50 °C** *(120 °F à 122 °F)* | Cœur très rouge, chaud mais à peine saisi |
| **Saignant** | **52 °C à 54 °C** *(125 °F à 130 °F)* | Cœur rouge vif, très tendre et juteux |
| **Médium-saignant** *(À point)* | **55 °C à 57 °C** *(130 °F à 135 °F)* | Cœur rose chaud *(recommandé)* |
| **Médium** | **60 °C à 63 °C** *(140 °F à 145 °F)* | Cœur rose pâle, viande plus ferme |
| **Bien cuit** | **68 °C et plus** *(155 °F et plus)* | Entièrement brun, peu de jus |

### Porc

| Coupe / Type | Température interne | Remarques |
| :--- | :---: | :--- |
| **Filet & Longe (Rosé)** | **63 °C** *(145 °F)* | Laisser reposer 3 min |
| **Porc haché** | **71 °C** *(160 °F)* | Cuisson complète |
| **Épaule / Effiloché (Pulled Pork)** | **93 °C à 95 °C** *(200 °F à 203 °F)* | Pour fondre le collagène |

### Volaille (Poulet & Dindon)

| Coupe / Type | Température interne | Remarques |
| :--- | :---: | :--- |
| **Poitrine & Suprême** | **74 °C** *(165 °F)* | Retirer à 72 °C (160 °F) et laisser monter au repos |
| **Cuisses & Pilons** | **74 °C à 82 °C** *(165 °F à 180 °F)* | Plus tendre autour de 80 °C (175 °F) |
| **Volaille hachée** | **74 °C** *(165 °F)* | Cuisson complète obligatoire |

### Viandes hachées, Saucisses & Poissons

| Type | Température interne | Remarques |
| :--- | :---: | :--- |
| **Bœuf / Porc / Agneau haché** | **71 °C** *(160 °F)* | Sécurité sanitaire minimale |
| **Saucisses fraîches** | **71 °C** *(160 °F)* | Cuire à feu moyen-doux |
| **Saumon & Thon** | **50 °C à 52 °C** *(122 °F à 125 °F)* | Mi-cuit / Nacre au centre |
| **Poissons blancs** | **60 °C** *(140 °F)* | La chair se détache à la fourchette |

---

## <i class="fa-solid fa-hourglass-half"></i> Temps de repos des viandes

Le repos permet aux fibres de se détendre et aux jus de se redistribuer de manière homogène.

| Pièce de viande | Temps de repos | Technique & Consignes |
| :--- | :---: | :--- |
| **Petites coupes** *(Steaks, poitrines, côtelettes)* | **5 minutes** | Sur une grille ou assiette chaude, recouvrir lâchement d'aluminium. |
| **Rôtis moyens** *(Rôti de bœuf, longe, gigot)* | **10 à 15 minutes** | Couvrir d'aluminium. La température grimpera de 2 à 4 °C (3 à 7 °F). |
| **Volaille entière & Gros rôtis** | **20 à 30 minutes** | Repos sur grille pour conserver le croustillant de la peau. |
| **BBQ / Effiloché** *(Brisket, épaule de porc)* | **45 min à 2 h** | Envelopper dans un papier de boucherie et placer en glacière vide. |

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
