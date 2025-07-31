// Listen von Bildern


let creature = ["Bane of Progress", "Bramble Sovereign", "Elder Gargaroth", "Gigantosaurus", "God-Eternal Rhonas", "Goreclaw, Terror of Qal Sisma", "Gwenna, Eyes of Gaea", "Karametra's Acolyte", "Kodama of the East Tree", "Kogla, the Titan Ape", "Llanowar Tribe", "Lupine Prototype", "Managorger Hydra", "Old-Growth Troll", "Old One Eye", "Phytotitan", "Relic Golem", "Rhonas the Indomitable", "Runadi, Behemoth Caller", "Selvala, Heart of the Wilds", "Steel Leaf Champion", "Surrak, the Hunt Caller", "Topiary Stomper", "Verdant Sun's Avatar", "Vigor", "Wayward Swordtooth"]
let sorcery = ["Exponential Growth", "Ezuri's Predation", "Genesis Wave", "Green Sun's Zenith", "Kodama's Reach", "Majestic Genesis", "Overwhelming Stampede", "Rampant Growth", "Rishkar's Expertise", "Search for Tomorrow", "Shamanic Revelation", "Skyshroud Claim", "Soul's Majesty", "Traverse the Outlands"]
let instant = ["Beast Within", "Boon of Boseiju", "Heroic Intervention", "Hunter's Insight", "Momentous Fall", "Return of the Wildspeaker", "Tamiyo's Safekeeping"]
let artifact = ["Emerald Medallion", "Fireshrieker", "Lightning Greaves", "Nyx Lotus", "Sol Ring", "Swiftfoot Boots", "Tangleweave Armor", "The Skullspore Nexus"]
let enchantment = ["Death's Presence", "Eladamri's Vineyard", "Food Chain", "Garruk's Uprising", "Greater Good", "Guardian Project", "Lurking Predators","Unnatural Growth", "Vernal Bloom"]
let lands = ["Blighted Woodland", "Cactus Preserve", "Field of Ruin", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Myriad Landscape","Nykthos, Shrine to Nyx", "Rogue's Passage"]




console.log(creature.length);

function setImage(cardtype,  ) {
    for (let i = 1; i<=cardtype.length; i++) {
        intoHTML(cardtype, i)
    }
}


function intoHTML(cardtype, i) {
    document.getElementById("creature").innerHTML += `<img src="./img/cards/creatures/c${i}.webp" alt="Grafik von Karte ${cardtype[i]}">`
}

setImage(creature)

function amountCards(cardtyp){
    document.getElementById(`amount`).innerHTML += cardtyp.length 
}


amountCards(creature)