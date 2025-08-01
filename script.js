//2do:
// Infobox springt bei schnellen wechseln während die Bilder laden. Evtl. position absolute? 
// Footer Text . Am besten 2 reihig damits nicht so voll aussieht. 
// texturen in den BG bringen. 

let currentId = ""
let cardName = ""

let commander = ["Ghalta, Primal Hunger"]
let creature = ["Bane of Progress", "Bramble Sovereign", "Elder Gargaroth", "Gigantosaurus", "God-Eternal Rhonas", "Goreclaw, Terror of Qal Sisma", "Gwenna, Eyes of Gaea", "Karametra's Acolyte", "Kodama of the East Tree", "Kogla, the Titan Ape", "Llanowar Tribe", "Lupine Prototype", "Managorger Hydra", "Old-Growth Troll", "Old One Eye", "Phytotitan", "Relic Golem", "Rhonas the Indomitable", "Runadi, Behemoth Caller", "Selvala, Heart of the Wilds", "Steel Leaf Champion", "Surrak, the Hunt Caller", "Topiary Stomper", "Verdant Sun's Avatar", "Vigor", "Wayward Swordtooth"]
let sorcery = ["Exponential Growth", "Ezuri's Predation", "Genesis Wave", "Green Sun's Zenith", "Kodama's Reach", "Majestic Genesis", "Overwhelming Stampede", "Rampant Growth", "Rishkar's Expertise", "Search for Tomorrow", "Shamanic Revelation", "Skyshroud Claim", "Soul's Majesty", "Traverse the Outlands"]
let instant = ["Beast Within", "Boon of Boseiju", "Heroic Intervention", "Hunter's Insight", "Momentous Fall", "Return of the Wildspeaker", "Tamiyo's Safekeeping"]
let artifact = ["Emerald Medallion", "Fireshrieker", "Lightning Greaves", "Nyx Lotus", "Sol Ring", "Swiftfoot Boots", "Tangleweave Armor", "The Skullspore Nexus"]
let enchantment = ["Death's Presence", "Eladamri's Vineyard", "Food Chain", "Garruk's Uprising", "Greater Good", "Guardian Project", "Lurking Predators","Unnatural Growth", "Vernal Bloom"]
let lands = ["Blighted Woodland", "Cactus Preserve", "Field of Ruin", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Myriad Landscape","Nykthos, Shrine to Nyx", "Rogue's Passage"]


// Die Funktion geht die Liste durch und packt für jede Karte in der Liste ein Bild ins HTML. 
// Jedes Bild bekommt auch eine ID zusammengesetzt aus dem letter und index damits einzigartig ist. 
// Parameter wählen gleich den richtigen Ordner im img folder und auch die kartenbilder in img wurden numerisch benannt damit sie zum index passen.
// Ein Alternativtext wird miterstellt und geben auch den Kartennamen mit an. Der wird mit array[i] aus der liste

function setImage(cardtype, id, folder, letter) {
    for (let i = 1; i<=cardtype.length; i++) {
        document.getElementById(id).innerHTML += 
        `<img id=${letter}${i} class="cards" onmouseover="getDetails(event)" onclick="toggleOverlay(event)" src="./img/cards/${folder}/${letter}${i}.webp" alt="Grafik von Karte ${cardtype[i]}">`
    }
}

// "cardtype" = which array, 
// "id" is where the function is putting it in the HTML,
// "folder" is the name of the img folder, 
// "letter" is startin letter of the img name

setImage(commander, "activ_card", "commander", "x" )
setImage(commander, "commander", "commander", "x")
setImage(creature, "creature", "creature","c")
setImage(sorcery, "sorcery", "sorcery", "s")
setImage(instant, "instant", "instants", "i")
setImage(artifact, "artifact", "artifact", "a")
setImage(enchantment, "enchantment", "enchantments", "e")
setImage(lands,"land","lands","l")


// Funktionen zählen die Anzahl der Karten pro Liste und geben sie neben der h2 an
function amountCards(array, id) {
    document.getElementById(id).innerHTML += " " + "(" + array.length + ")"
}

amountCards(creature, "h2_creature")
amountCards(sorcery, "h2_sorcery")
amountCards(instant, "h2_instant")
amountCards(artifact, "h2_artifact")
amountCards(enchantment, "h2_enchantment")
amountCards(lands, "h2_land")


// Hier wird das Bild für die linke main gewählt (detailed view). Die ID die das Event auslöst wird ausgelesen und ist gleichzeitig auch der Dateiname.
// Mit einer if Schleife stelle ich fest in welchen Ordner die Funktion suchen muss. 

function getDetails(event) {
    let folder = ""
    currentId = event.currentTarget.id;
    if (currentId.includes("x") ) {
        folder = "commander";
    }
    else if (currentId.includes("c") ) {
        folder = "creature";
    }
    else if (currentId.includes("s") ) {
        folder = "sorcery";
    }   
    else if (currentId.includes("i") ) {
        folder = "instants";
    }
    else if (currentId.includes("a") ) {
        folder = "artifact";
    }
    else if (currentId.includes("e") ) {
        folder = "enchantments";  
    }
    else if (currentId.includes("l") ) {
        folder = "lands";
    }
    console.log("Current ID: " + currentId, "Current Folder: " + folder);  
    document.getElementById("activ_card").innerHTML = `<img id=${currentId} src="./img/cards/${folder}/${currentId}.webp" alt="${currentId}">`
}

// Mit der Togglefunktion lasse ich zum Schluss auch die Inhalte rendern. 


function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    renderOverlay(event)

}


//Hiermit Fülle ich das Overlay, die If-Abfrage klärt wieder welche Karte geklickt wurde um das richtige Bild sowie Index anzuzeigen. Für den HTML input habe ich
//eine eigene Funktion gebaut um js und html zu trennen. amountType muss nicht mit übergeben werden, weil global. 

function renderOverlay(event){
    let folder = ""
    currentId = event.currentTarget.id;
    if (currentId.includes("x") ) {
        folder = "commander";
        amountType = commander.length;
    }
    else if (currentId.includes("c") ) {
        folder = "creature";
        amountType = creature.length;
    }
    else if (currentId.includes("s") ) {
        folder = "sorcery";
        amountType = sorcery.length;
    }
    else if (currentId.includes("i") ) {
        folder = "instants";
        amountType = instant.length;
    }
    else if (currentId.includes("a") ) {
        folder = "artifact";
        amountType = artifact.length;
    }
    else if (currentId.includes("e") ) {
        folder = "enchantments";
        amountType = enchantment.length;
    }
    else if (currentId.includes("l") ) {
        folder = "lands";
        amountType = lands.length;
;
    }

    fillOverlay(event, folder)   
}

// Mit der Funktion fülle ich das Overlay_window mit den ausgewählten Karteninfos. Ich gebe dem Fenster direkt eine ID damit ich diese Info an
// eine If Schleife weitergeben kann die das Bild davor/danach bestimmt. 

function fillOverlay(event, folder) {
        document.getElementById("overlay").innerHTML = 
    
            `<div id="${currentId}" class="overlay_window" onclick="event.stopPropagation();">
                <div class="upper_overlay_window">
                    <div class="overlay_left">
                        <img id=${currentId} onclick="getCardname()" src="./img/cards/${folder}/${currentId}.webp" alt="${currentId}">
                    </div>
                    <div class="overlay_right">
                        PLACEHOLDER
                    </div>
                </div>
                <div class="lower_overlay_window">
                    <button><</button>
                    <span> ${currentId.slice(1)} / ${amountType} </span>
                    <button onclick="checkEvent()">></button>
                </div>
            </div>` 
}


function checkEvent() {
    console.log(event);
}

// Hier nutze ich die ID um wieder auf die Listen zu verweisen und den passenden Namen pro Karte rauszufinden und so die richtigen Infos pro Karte anzuzeigen.

function getCardname() {
    if (currentId.includes("x")) {
        cardName = commander[0]
        console.log(cardName);
        console.log(currentId); 
    }
    else if (currentId.includes("c"))
        i = currentId.slice(1)
        console.log(creature[i-1]);
        
}

// }