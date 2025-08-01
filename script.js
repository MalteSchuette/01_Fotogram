// Listen von Bildern

// Wenn noch Zeit:

let commander = ["Ghalta, Primal Hunger"]
let creature = ["Bane of Progress", "Bramble Sovereign", "Elder Gargaroth", "Gigantosaurus", "God-Eternal Rhonas", "Goreclaw, Terror of Qal Sisma", "Gwenna, Eyes of Gaea", "Karametra's Acolyte", "Kodama of the East Tree", "Kogla, the Titan Ape", "Llanowar Tribe", "Lupine Prototype", "Managorger Hydra", "Old-Growth Troll", "Old One Eye", "Phytotitan", "Relic Golem", "Rhonas the Indomitable", "Runadi, Behemoth Caller", "Selvala, Heart of the Wilds", "Steel Leaf Champion", "Surrak, the Hunt Caller", "Topiary Stomper", "Verdant Sun's Avatar", "Vigor", "Wayward Swordtooth"]
let sorcery = ["Exponential Growth", "Ezuri's Predation", "Genesis Wave", "Green Sun's Zenith", "Kodama's Reach", "Majestic Genesis", "Overwhelming Stampede", "Rampant Growth", "Rishkar's Expertise", "Search for Tomorrow", "Shamanic Revelation", "Skyshroud Claim", "Soul's Majesty", "Traverse the Outlands"]
let instant = ["Beast Within", "Boon of Boseiju", "Heroic Intervention", "Hunter's Insight", "Momentous Fall", "Return of the Wildspeaker", "Tamiyo's Safekeeping"]
let artifact = ["Emerald Medallion", "Fireshrieker", "Lightning Greaves", "Nyx Lotus", "Sol Ring", "Swiftfoot Boots", "Tangleweave Armor", "The Skullspore Nexus"]
let enchantment = ["Death's Presence", "Eladamri's Vineyard", "Food Chain", "Garruk's Uprising", "Greater Good", "Guardian Project", "Lurking Predators","Unnatural Growth", "Vernal Bloom"]
let lands = ["Blighted Woodland", "Cactus Preserve", "Field of Ruin", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Myriad Landscape","Nykthos, Shrine to Nyx", "Rogue's Passage"]



console.log(commander.length)
console.log(creature.length);
console.log(sorcery.length)
console.log(instant.length);
console.log(artifact.length);
console.log(enchantment.length);
console.log(lands.length);



// Die Funktion geht die Liste durch und packt für jede Karte in der Liste ein Bild ins HTML. 
// Jedes Bild bekommt auch eine ID zusammengesetzt aus dem letter und index damits einzigartig ist. 
// Parameter wählen gleich den richtigen Ordner im img folder und auch die kartenbilder in img wurden numerisch benannt damit sie zum index passen.
// // Ein Alternativtext wird miterstellt und geben auch den Kartennamen mit an. Der wird mit array[i] aus der liste

function setImage(cardtype, id, folder, letter) {
    for (let i = 1; i<=cardtype.length; i++) {
        document.getElementById(id).innerHTML += 
        `<img id=${letter}${i} src="./img/cards/${folder}/${letter}${i}.webp" alt="Grafik von Karte ${cardtype[i]}">`
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
