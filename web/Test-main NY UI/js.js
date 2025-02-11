var PA = parseInt(localStorage.getItem("PP")) || 0; // Initialize PA from localStorage, or set to 0 if not found
var MM = JSON.parse(localStorage.getItem("MM")) || []; // Initialize MM as an array if not found in localStorage

var NNq1 = {};
var NNq2 = {};
var NNq3 = {};
var NNq4 = {};
var NNq5 = {};
var MN = 0;
var btt = parseInt(localStorage.getItem("MP")) || 0

var DDDD = 'hehj';
console.log(DDDD.replace(/(?!h)\w/g, ''));

var HH11 = document.getElementById("HRRaa"); // Ensure this matches the actual ID in your HTML
if (HH11) {
    HH11.textContent = 'MAX: ' + (parseInt(localStorage.getItem("MP")) || 0);
} else {
    console.error("Element with ID 'HH11' not found.");
}

function FF(Namn, L, D11, B, PP1) {
    console.log('FF called with:', Namn, L, D11);

    var GG = 'L' + L; // Key for the first JSON
    var GG11 = '../../R/L' + D11; // Key for the JSON file name

    console.log('Fetching from:', GG11 + '.json', 'and', GG11 + 'R.json');

    var HH = document.getElementById('in').value;
    var HH1 = document.getElementById('HEE');

    NNq1 = Namn;
    NNq2 = L;
    NNq3 = D11;
    NNq4 = B; // Fixed typo here
    NNq5 = PP1;

    fetch(GG11 + '.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            var KII = data[GG];
            console.log(KII);
            HH1.textContent = KII;

            return fetch(GG11 + 'R.json');
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            var NN = data[GG];
            II(HH, NN, Namn, PP1);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function JJ(AQ) {
    console.log('JJ called with:', NNq1, NNq2, NNq3);
    FF(NNq1, NNq2, NNq3, AQ, NNq5);
    QQQQ('<' + AQ);
}

function II(HH, NN, Namn, PP1) {
    console.log('User Input:', HH);
    console.log('Expected Answer:', NN);

    if (NN == HH && HH !== '') { // Strict equality and correct check
        console.log('Correct answer');
        
        if (!MM.includes(Namn + 'JA')) {
            MM.push(Namn + 'JA');
            PA += PP1;
        }
        deleteFromMM(Namn + 'NEJ');
        console.log('Score:', PA);
        SET();
    } else {
        console.log('Wrong answer');
        console.log('Correct Answer was:', NN);

        if (!MM.includes(Namn + 'NEJ') && !MM.includes(Namn + 'JA')) {
            MM.push(Namn + 'NEJ');
            SET();
        }
    }
}

function SET() {
    localStorage.setItem("PP", PA); // Store updated score
    localStorage.setItem("MM", JSON.stringify(MM));
    localStorage.setItem("MP", btt);

}

function SSSS() {
    PA = 0;
    MM = [];
    SET();
    window.open('index.html', "_self");
}

function deleteFromMM(valueToDelete) {
    MM = MM.filter(item => item !== valueToDelete);
    localStorage.setItem("MM", JSON.stringify(MM));
    console.log('Updated MM:', MM);
}

function DB() {
    console.log('MM length:', MM.length);
    for (let i = 0; i < MM.length; i++) {
        var SS = MM[i];
        
        // Handle 'NEJ'
        if (SS.includes("NEJ")) {
            let newText = SS.replace("NEJ", "").trim();
            console.log(newText);
            let element = document.getElementById(newText);
            if (element) {
                element.style.backgroundColor = '#AF3939';
            }
        }

        // Handle 'JA'
        if (SS.includes("JA")) {
            let newText1 = SS.replace("JA", "").trim();
            console.log(newText1);
            let element1 = document.getElementById(newText1);
            if (element1) {
                element1.style.backgroundColor = '#41AF39';
            }
        }
    }
}

DB();

function QQQQ(V) {
    var popElement = document.getElementById('pop');
    var leftValue = window.getComputedStyle(popElement).borderRadius;
    let FQQWW = true;

    var urlMap = {
        'E': 'ELS.html',
        'M': 'MLS.html',
        'H': 'HLS.html',
        'I': 'L/I.html',
        '<': 'index.html',
        '<!': '../index.html',
        '<1': '../../ELS.html',
        '<2': '../../MLS.html',
        '<3': '../../HLS.html'
    };

    function checkPosition() {
        if (leftValue === '0px') {
            if (urlMap[V]) {
                FQQWW = false;
                window.location.href = urlMap[V];
            }
        } else {
            document.getElementById('pop').className = 'BOXQQQQ';
        }
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            checkPosition();
            leftValue = window.getComputedStyle(popElement).borderRadius;
            console.log(leftValue);
        }, i * 100);
    }
}

function QQ(V) {
    console.log(V.replace(/[^E]/g, ''));
    console.log(V.replace(/[^M]/g, ''));
    console.log(V.replace(/[^H]/g, ''));
    
    var BQE = V.replace(/[^E]/g, '');
    var BQM = V.replace(/[^M]/g, '');
    var BQH = V.replace(/[^H]/g, '');

    var popElement = document.getElementById('pop');
    var leftValue = window.getComputedStyle(popElement).left;
    let FQQWW = true;

    function checkPosition() {
        if (leftValue === '0px') {
            if (BQE === 'E') {
                window.open('L/EE/' + V + '.html', "_self");
            } else if (BQM === 'M') {
                window.open('L/MM/' + V + '.html', "_self");
            } else if (BQH === 'H') {
                window.open('L/HH/' + V + '.html', "_self");
            }
        } else {
            document.getElementById('pop').className = 'BOXQQQQ';
        }
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            checkPosition();
            leftValue = window.getComputedStyle(popElement).left;
            console.log(leftValue);
        }, i * 100);
    }
}

var FF1 = '';
function RRRR() {
    var HH1 = document.getElementById('HEE');
    var HH2 = document.getElementById('HRR');
    FF1 = '';
    var GG = 5 + MN;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomInt = getRandomInt(1, GG);
    var randomInt1 = getRandomInt(1, GG);
    var random = getRandomInt(1, 6);

    if (random === 1 || random === 5) {
        FF = randomInt + ' + ' + randomInt1;
    } else if (random === 2 || random === 6) {
        FF = randomInt + ' - ' + randomInt1;
    } else if (random === 3) {
        FF = randomInt + ' / ' + randomInt1;
    } else if (random === 4) {
        FF = randomInt + ' * ' + randomInt1;
    }

    FF1 = eval(FF);
    console.log(FF);
    console.log(FF1);
    console.log(MN);
    HH1.textContent = FF;
    HH2.textContent = MN;
}

function GFD() {
    var HH = document.getElementById('in1');
    if (HH.value == FF1 && HH.value !== '') {
        MN += 1;
    }

    if (MN > localStorage.getItem("MP")) {
        btt += 1
        console.log(btt)
    }

    HH.value = '';

    SET();
    RRRR();
    HH11.textContent = 'MAX: ' + parseInt(localStorage.getItem("MP"));

}

document.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        
        if (document.activeElement === document.getElementById('in1')) {
            GFD();
        }

        if (document.activeElement === document.getElementById('in')) {
            if (NNq5 === 1) {
                FF(NNq1, NNq2, NNq3, 1, NNq5);
                QQQQ('<1');
            }
            if (NNq5 === 2) {
                FF(NNq1, NNq2, NNq3, 2, NNq5);
                QQQQ('<2');
            }
            if (NNq5 === 5) {
                FF(NNq1, NNq2, NNq3, 3, NNq5);
                QQQQ('<3');
            }
        }
    }
});

function NNNQQ() {
    document.getElementById('pop').className = 'BOXQQQQ q1';
}
