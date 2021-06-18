/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Secret Shopper'},
                {episode: 7, episodeName: 'Color Wars'},
                {episode: 8, episodeName: 'Wedding Day Sale'},
                {episode: 9, episodeName: 'All-Nighter'},
                {episode: 10, episodeName: 'Demotion'},
                {episode: 11, episodeName: 'Labor'}
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix);

console.log(netflix.season1);

console.log(netflix.season1.seasonInfo);

console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//Pick an episode to log in the terminal
//Using dot notation, walk through the Netflix object and print off both the episode number
//and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[1].episodeName);

//JSON -> JavaScript Object Notation - pretty much everything has ""s around them except numbers or Boolean, JSON allows us to take a stringified object and convert it into object notation.

varjson = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/ .git": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
            "**/*/*.js.map": {
                "when": "$(basename)"
            }
        },
        "editor.fontFamily": "Monaco, 'Courier New', monospace",
        "editor.detectIndentation": false,
        "editor.letterSpacing": 0,
        "editor.tabSize": 2,
        "files.autoSave": "off",
        "editor.wordWrap": "on",
        "extensions.ignoreRecommendations": true,
        "[html]": {},
        "files.associates": {
            "*.html": "html",
            "*js": "javascriptreact"
        },
        "html.format.indentInnerHtml": true,
        "editor.fontSize:": 11,
        "liveServer.settings.donotShowInfoMsg": true,
        "liveServer.settings.port": 3500,
        "[javascriptreact]": {}
    }

    let spaceJam = {
        toonSquad: {
            human: 'Michael Jordan',
            rabbit1: 'Bug Bunny',
            rabbit2: 'Lola Bunny',
            duck: 'Daffy Duck',
            tDevil: 'Tasmanian Devil',
            bird: 'Tweety',
            cat: 'Sylvester',
            pig: 'Porky Pig'
        },
        monstars: {
            0: 'Bupkus',
            1: 'Bang',
            2: 'Nawt',
            3: 'Pound',
            4: 'Blanko'
        },
        nbaPlayers: {
            phoenixSuns: 'Charles Barkley',
            newJerseyNets: 'Shawn Bradley',
            newYorkNicks: 'Patrick Ewing',
            charlotteHornets1: 'Larry Johnson',
            charlotteHornets2: 'Muggsy Bogeus'
        }
        }

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in our object

console.log(Object.keys(spaceJam.toonSquad));

console.log(Object.keys(spaceJam.toonSquad).toString())

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);

let x = 'vegetable';

let inc = 'fruit';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread'
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);

console.log(baking.bestKeyEver);

console.log(baking[baking.bestKeyEver]); //we are saying what is the value of baking zucchini

let g = 'water';

Object.keys(garden).forEach(key => {
    if (key == g){
        console.log(garden[key]);
    }
})
