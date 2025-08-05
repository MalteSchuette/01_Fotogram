let currentId = ""
let cardName = ""
let description = ""

let commander = ["Ghalta, Primal Hunger"]
let creature = ["Bane of Progress", "Bramble Sovereign", "Elder Gargaroth", "Gigantosaurus", "God-Eternal Rhonas", "Goreclaw, Terror of Qal Sisma", "Gwenna, Eyes of Gaea", "Karametra's Acolyte", "Kodama of the East Tree", "Kogla, the Titan Ape", "Llanowar Tribe", "Lupine Prototype", "Managorger Hydra", "Old-Growth Troll", "Old One Eye", "Phytotitan", "Relic Golem", "Rhonas the Indomitable", "Runadi, Behemoth Caller", "Selvala, Heart of the Wilds", "Steel Leaf Champion", "Surrak, the Hunt Caller", "Topiary Stomper", "Verdant Sun's Avatar", "Vigor", "Wayward Swordtooth"]
let sorcery = ["Exponential Growth", "Ezuri's Predation", "Genesis Wave", "Green Sun's Zenith", "Kodama's Reach", "Majestic Genesis", "Overwhelming Stampede", "Rampant Growth", "Rishkar's Expertise", "Search for Tomorrow", "Shamanic Revelation", "Skyshroud Claim", "Soul's Majesty", "Traverse the Outlands"]
let instant = ["Beast Within", "Boon of Boseiju", "Heroic Intervention", "Hunter's Insight", "Momentous Fall", "Return of the Wildspeaker", "Tamiyo's Safekeeping"]
let artifact = ["Emerald Medallion", "Fireshrieker", "Lightning Greaves", "Nyx Lotus", "Sol Ring", "Swiftfoot Boots", "Tangleweave Armor", "The Skullspore Nexus"]
let enchantment = ["Death's Presence", "Eladamri's Vineyard", "Food Chain", "Garruk's Uprising", "Greater Good", "Guardian Project", "Lurking Predators","Unnatural Growth", "Vernal Bloom"]
let lands = ["Blighted Woodland", "Cactus Preserve", "Field of Ruin", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Forest", "Myriad Landscape","Nykthos, Shrine to Nyx", "Rogue's Passage"]


let commanderText = ["This spell costs less to cast, where X is the total power of creatures you control. <br> Trample (This creature can deal excess combat damage to the player or planeswalker it's attacking.)"]
let creatureText = [
    "When this creature enters, destroy all artifacts and enchantments. Put a +1/+1 counter on this creature for each permanent destroyed this way.",
    "Whenever another nontoken creature enters, you may pay 1+G. If you do, that creature's controller creates a token that's a copy of that creature.",
    "Vigilance, reach, trample. Whenever this creature attacks or blocks, choose one — <br> Create a 3/3 green Beast creature token. <br> You gain 3 life. <br> Draw a card.",
    "Only flavortext - Each tooth is the length of a horse, and new ones grow in every sixteen days. Let's get a closer look!",
    "Deathtouch <br> <br> When God-Eternal Rhonas enters, double the power of each other creature you control until end of turn. <br> Those creatures gain vigilance until end of turn. <br> <br> When God-Eternal Rhonas dies or is put into exile from the battlefield, you may put it into its owner's library third from the top.",
    "Creature spells you cast with power 4 or greater cost 2 less to cast. <br> <br> Whenever Goreclaw attacks, each creature you control with power 4 or greater gets +1/+1 and gains trample until end of turn.",
    "tap: Add two mana in any combination of colors. Spend this mana only to cast creature spells or activate abilities of creature sources. <br> <br> Whenever you cast a creature spell with power 5 or greater, put a +1/+1 counter on Gwenna and untap it.",
    "tap: Add an amount of equal to your devotion to green. (Each in the mana costs of permanents you control counts toward your devotion to green.)",
    "Reach <br> <br> Whenever another permanent you control enters, if it wasn't put onto the battlefield with this ability, you may put a permanent card with equal or lesser mana value from your hand onto the battlefield. <br> <br> Partner (You can have two commanders if both have partner.)",
    "When Kogla enters, it fights up to one target creature you don't control. <br> <br> Whenever Kogla attacks, destroy target artifact or enchantment defending player controls. <br> <br> 1G: Return target Human you control to its owner's hand. Kogla gains indestructible until end of turn.",
    "tap: Add G G G",
    "This creature can't attack or block unless a player has no cards in hand.",
    "Trample <br> <br> Whenever a player casts a spell, put a +1/+1 counter on this creature.",
    "Trample <br> <br> When Old-Growth Troll dies, if it was a creature, return it to the battlefield. It's an Aura enchantment with enchant Forest you control and `Enchanted Forest has ': Add G G' and pay 1 tap, Sacrifice this land: Create a tapped 4/4 green Troll Warrior creature token with trample.'",
    "Trample <br> <br> Other creatures you control have trample. <br> <br> When Old One Eye enters, create a 5/5 green Tyranid creature token. <br> <br> Fast Healing — At the beginning of your first main phase, you may discard two cards. If you do, return this card from your graveyard to your hand.",
    "When this creature dies, return it to the battlefield tapped under its owner's control at the beginning of their next upkeep.",
    "This creature can't attack or block unless an opponent has eight or more cards in their graveyard. <br> <br> 2 and tap: Target player mills two cards. (They put the top two cards of their library into their graveyard.)",
    "Deathtouch, indestructible <br> <br> Rhonas can't attack or block unless you control another creature with power 4 or greater. <br> <br> 2 G: Another target creature gets +2/+0 and gains trample until end of turn.",
    "Whenever you cast a creature spell with mana value 5 or greater, that creature enters with X additional +1/+1 counters on it, where X is its mana value minus 4. <br> <br> Creatures you control with three or more +1/+1 counters on them have haste. <br> <br> tap: Add G.",
    "Whenever another creature enters, its controller may draw a card if its power is greater than each other creature's power. <br> <br> G, tap: Add X mana in any combination of colors, where X is the greatest power among creatures you control.",
    "This creature can't be blocked by creatures with power 2 or less.",
    "Formidable — At the beginning of combat on your turn, if creatures you control have total power 8 or greater, target creature you control gains haste until end of turn. (It can attack and no matter when it came under your control.)",
    "Vigilance (Attacking doesn't cause this creature to tap.) <br> <br> When this creature enters, search your library for a basic land card, put it onto the battlefield tapped, then shuffle. <br> <br> This creature can't attack or block unless you control seven or more lands.",
    "Whenever this creature or another creature you control enters, you gain life equal to that creature's toughness.",
    "Trample <br> <br> If damage would be dealt to another creature you control, prevent that damage. Put a +1/+1 counter on that creature for each 1 damage prevented this way.<br> <br> When Vigor is put into a graveyard from anywhere, shuffle it into its owner's library.",
    "Ascend (If you control ten or more permanents, you get the city's blessing for the rest of the game.) <br> <br>You may play an additional land on each of your turns. <br> <br> This creature can't attack or block unless you have the city's blessing."
]

let sorceryText = [
    "Until end of turn, double target creature's power X times.",
    "For each creature your opponents control, create a 4/4 green Phyrexian Beast creature token. Each of those tokens fights a different one of those creatures.",
    "Reveal the top X cards of your library. You may put any number of permanent cards with mana value X or less from among them onto the battlefield. Then put all cards revealed this way that weren't put onto the battlefield into your graveyard.",
    "Search your library for a green creature card with mana value X or less, put it onto the battlefield, then shuffle. Shuffle Green Sun's Zenith into its owner's library.",
    "Search your library for up to two basic land cards, reveal those cards, put one onto the battlefield tapped and the other into your hand, then shuffle.",
    "Reveal the top X cards of your library, where X is the greatest mana value of a commander you own on the battlefield or in the command zone. You may put any number of permanent cards from among them onto the battlefield. Put the rest on the bottom of your library in a random order.",
    "Until end of turn, creatures you control gain trample and get +X/+X, where X is the greatest power among creatures you control.",
    "Search your library for a basic land card, put that card onto the battlefield tapped, then shuffle.",
    "Draw cards equal to the greatest power among creatures you control. <br> <br> You may cast a spell with mana value 5 or less from your hand without paying its mana cost.",
    "Search your library for a basic land card, put it onto the battlefield, then shuffle. <br> <br> Suspend 2G— (Rather than cast this card from your hand, you may pay G and exile it with two time counters on it. At the beginning of your upkeep, remove a time counter. When the last is removed, you may cast it without paying its mana cost.)",
    "Draw a card for each creature you control. <br> <br> Ferocious — You gain 4 life for each creature you control with power 4 or greater.",
    "Search your library for up to two Forest cards, put them onto the battlefield, then shuffle.",
    "Draw cards equal to the power of target creature you control.",
    "Search your library for up to X basic land cards, where X is the greatest power among creatures you control. Put those cards onto the battlefield tapped, then shuffle.",
]

let instantText = [
    "Destroy target permanent. Its controller creates a 3/3 green Beast creature token.",
    "Target creature gets +X/+X until end of turn, where X is the greatest mana value among permanents you control. Untap it.",
    "Permanents you control gain hexproof and indestructible until end of turn.",
    "Choose target creature you control. Whenever that creature deals combat damage to a player or planeswalker this turn, draw that many cards.",
    "As an additional cost to cast this spell, sacrifice a creature. <br> <br> You draw cards equal to the sacrificed creature's power, then you gain life equal to its toughness.",
    "Choose one — <br> <br> • Draw cards equal to the greatest power among non-Human creatures you control. <br> <br> • Non-Human creatures you control get +3/+3 until end of turn.",
    "Target permanent you control gains hexproof and indestructible until end of turn. You gain 2 life. (A permanent with hexproof and indestructible can't be the target of spells or abilities your opponents control. Damage and effects that say `destroy` don't destroy it.)",
    
]

let artifactText = [
    "Green spells you cast cost 1 less to cast.",
    "Equipped creature has double strike. (It deals both first-strike and regular combat damage.) <br> <br> Equip 2",
    "Equipped creature has haste and shroud. (It can't be the target of spells or abilities.) <br> <br> Equip 0",
    "Nyx Lotus enters tapped. <br> <br> tap: Choose a color. Add an amount of mana of that color equal to your devotion to that color. (Your devotion to a color is the number of mana symbols of that color in the mana costs of permanents you control.)",
    "tap : Add 2.",
    "Equipped creature has hexproof and haste. (It can't be the target of spells or abilities your opponents control. It can attack and no matter when it came under your control.) <br> <br> Equip 1",
    "Living weapon (When this Equipment enters, create a 0/0 black Phyrexian Germ creature token, then attach this to it.) <br> <br> Equipped creature gets +X/+X, where X is the greatest mana value among your commanders. Equip 4",
    "This spell costs x less to cast, where X is the greatest power among creatures you control. <br> <br> Whenever one or more nontoken creatures you control die, create a green Fungus Dinosaur creature token with base power and toughness each equal to the total power of those creatures. <br> <br> 2 and tap: Double target creature's power until end of turn",
]

let enchantmentText = [
    "Whenever a creature you control dies, put X +1/+1 counters on target creature you control, where X is the power of the creature that died.",
    "At the beginning of each player's first main phase, that player adds G G.",
    "Exile a creature you control: Add X mana of any one color, where X is 1 plus the exiled creature's mana value. Spend this mana only to cast creature spells.",
    "When this enchantment enters, if you control a creature with power 4 or greater, draw a card. <br> <br> Creatures you control have trample. (Each of those creatures can deal excess combat damage to the player or planeswalker it's attacking.) <br> <br> Whenever a creature you control with power 4 or greater enters, draw a card.",
    "Sacrifice a creature: Draw cards equal to the sacrificed creature's power, then discard three cards.",
    "Whenever a nontoken creature you control enters, if it doesn't have the same name as another creature you control or a creature card in your graveyard, draw a card.",
    "Whenever an opponent casts a spell, reveal the top card of your library. If it's a creature card, put it onto the battlefield. Otherwise, you may put that card on the bottom of your library.",
    "At the beginning of each combat, double the power and toughness of each creature you control until end of turn.",
    "Whenever a Forest is tapped for mana, its controller adds an additional G.",
]

let landText = [
    "tap: Add 1. <br> <br> 3G and tap: Sacrifice this land: Search your library for up to two basic land cards, put them onto the battlefield tapped, then shuffle.",
    "This land enters tapped. <br> <br> tap : Add one mana of any type that a land you control could produce. <br> <br> 3: Until end of turn, this land becomes an X/X green Plant creature with reach, where X is the greatest mana value among your commanders. It's still a land.",
    "tap: Add 1. <br> <br> 2 and tap: Sacrifice this land: Destroy target nonbasic land an opponent controls. Each player searches their library for a basic land card, puts it onto the battlefield, then shuffles.",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "tap: Add G",
    "This land enters tapped. <br> <br> tap: Add 1. <br> <br> 2, tap and Sacrifice this land: Search your library for up to two basic land cards that share a land type, put them onto the battlefield tapped, then shuffle.",
    "tap : Add 1. <br> <br> 2 and tap: Choose a color. Add an amount of mana of that color equal to your devotion to that color. (Your devotion to a color is the number of mana symbols of that color in the mana costs of permanents you control.)",
    "tap: Add 1. <br> <br>4 and tap: Target creature can't be blocked this turn.",

]

function init() {
setImage(commander, "activ_card", "commander", "x" )
setImage(commander, "commander", "commander", "x")
setImage(creature, "creature", "creature","c")
setImage(sorcery, "sorcery", "sorcery", "s")
setImage(instant, "instant", "instants", "i")
setImage(artifact, "artifact", "artifact", "a")
setImage(enchantment, "enchantment", "enchantments", "e")
setImage(lands,"land","lands","l")
amountCards(creature, "h2_creature")
amountCards(sorcery, "h2_sorcery")
amountCards(instant, "h2_instant")
amountCards(artifact, "h2_artifact")
amountCards(enchantment, "h2_enchantment")
amountCards(lands, "h2_land")
}


function setImage(cardtype, id, folder, letter) {
    for (let i = 1; i<=cardtype.length; i++) {
        document.getElementById(id).innerHTML += 
        `<img id=${letter}${i} class="cards" onmouseover="getDetails(event)" onclick="toggleOverlay(event)" src="./img/cards/${folder}/${letter}${i}.webp" alt="Grafik von Karte ${cardtype[i]}">`
    }
}


function amountCards(array, id) {
    document.getElementById(id).innerHTML += " " + "(" + array.length + ")"
}


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
    document.getElementById("activ_card").innerHTML = `<img id=${currentId} src="./img/cards/${folder}/${currentId}.webp" alt="${currentId}">`
}


function toggleOverlay() {
    let overlayRef = document.getElementById("overlay");
    overlayRef.classList.toggle("d_none");
    renderOverlay(event)
}


function getCardname() {
    if (currentId.includes("x")) {
        cardName = commander[0]
        description = commanderText[0]
    }
    else if (currentId.includes("c")) {
        setInfo(currentId , creature, creatureText)
    }
    else if (currentId.includes("s")){
        setInfo(currentId, sorcery, sorceryText)
    }
    else if (currentId.includes("i")) {
        setInfo(currentId, instant, instantText)
    }
    else if (currentId.includes("a")) {
        setInfo(currentId, artifact, artifactText)
    }
    else if (currentId.includes("e")) {
        setInfo(currentId, enchantment, enchantmentText)
    }
    else if (currentId.includes("l")) {
        setInfo(currentId, lands, landText)
    }
return cardName;
}


function setInfo(currentId, nameArray, textArray) {
        i = currentId.slice(1);
        cardName = nameArray[i-1]
        description = textArray[i-1]
}

function getDescription() {
    if (currentId.includes("x")) {
        cardName = commander[0];
    }
    else if (currentId.includes("c")) {
        i = currentId.slice(1);
    }
    else if (currentId.includes("s")){
        i = currentId.slice(1);
    }
    else if (currentId.includes("i")) {
        i = currentId.slice(1);
    }
    else if (currentId.includes("a")) {
        i = currentId.slice(1);
    }
    else if (currentId.includes("e")) {
        i = currentId.slice(1);
    }
    else if (currentId.includes("l")) {
        i = currentId.slice(1);
    }
return cardName;
}


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

    fillOverlay(currentId, folder);
}


function fillOverlay(currentId, folder) {
        getCardname();
        document.getElementById("overlay").innerHTML = getHTML(currentId, folder);
;

}


function getHTML(currentId, folder) {
    return  `<div id="${currentId}" class="overlay_window" onclick="event.stopPropagation();">
                <div class="upper_overlay_window">
                    <button class="close_button" onclick="close_overlay()">X</button>
                    <div class="overlay_left">
                        <img id=${currentId} onclick="getCardname()" src="./img/cards/${folder}/${currentId}.webp" alt="${currentId}">
                    </div>
                    <div class="overlay_right" onload="getCardname()">
                        <h2> ${cardName} </h2>
                        <p> ${description} </p>
                    </div>
                </div>
                <div class="lower_overlay_window">
                    <button onclick="lastCard('${currentId}')"><</button>
                    <span> ${currentId.slice(1)} / ${amountType} </span>
                    <button onclick="nextCard('${currentId}')">></button>                
                </div>
            </div>`  
}

function close_overlay() {
    document.getElementById("overlay").classList.toggle("d_none");
}


function nextCard(currentId) {
    folder = ""
    let index = parseInt(currentId.slice(1));
    let prefix = currentId.charAt(0);
    let cardArray = [];

    if (prefix === "x") {
        folder = "commander";
        cardArray = commander;
    }
    else if (prefix === "c" ) {
        folder = "creature";
        cardArray = creature;
    }
    else if (prefix === "s") {
        folder = "sorcery";
        cardArray = sorcery;
    }
    else if (prefix === "i") {
        folder = "instants";
        cardArray = instant;
    }
    else if (prefix === "a") {
        folder = "artifact";
        cardArray = artifact;
    }
    else if (prefix === "e") {
        folder = "enchantments";
        cardArray = enchantment;
    }
    else if (prefix === "l") {
        folder = "lands";
        cardArray = lands;
    }

    index = index + 1;
    if (index > cardArray.length) {
        index = 1;
    }

let newId = prefix + index;

let dummyEvent = {currentTarget: {id: newId}};
renderOverlay(dummyEvent)
}


function lastCard(currentId) {
    folder = ""
    let index = parseInt(currentId.slice(1));
    let prefix = currentId.charAt(0);
    let cardArray = [];

    if (prefix === "x") {
        folder = "commander";
        cardArray = commander;
    }
    else if (prefix === "c" ) {
        folder = "creature";
        cardArray = creature;
    }
    else if (prefix === "s") {
        folder = "sorcery";
        cardArray = sorcery;
    }
    else if (prefix === "i") {
        folder = "instants";
        cardArray = instant;
    }
    else if (prefix === "a") {
        folder = "artifact";
        cardArray = artifact;
    }
    else if (prefix === "e") {
        folder = "enchantments";
        cardArray = enchantment;
    }
    else if (prefix === "l") {
        folder = "lands";
        cardArray = lands;
    }

    index = index - 1;
    if (index < 1) {
        index = cardArray.length;
    }

let newId = prefix + index;
let dummyEvent = {currentTarget: {id: newId}};
renderOverlay(dummyEvent)
}