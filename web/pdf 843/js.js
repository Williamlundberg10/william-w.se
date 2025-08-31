window.onload = init;

const totalTabs = 3; // If you want more tabs, just change this number
let currentTab = 1;

// Cache DOM elements for better performance
const colorInput = document.getElementById("colorp");
const colorInput2 = document.getElementById("colorpp");
const textInput = document.getElementById("textp");
const sizeInput = document.getElementById("numderp");
const colorPreview = document.getElementById("colorp1");
const colorPreview2 = document.getElementById("colorpp1");

// Default fallback values
const defaultColor = "#ededed";
const defaultNameColor = "#ffffff";
const defaultFontSize = 120;

// Initialize page
function init() {
    ll()
    for (let i = 1; i <= totalTabs; i++) {
        loadTabSettings(i);
    }
    switchTab(1);

    colorInput.addEventListener("input", handleColorChange);
    colorInput2.addEventListener("input", handleColorChange2);
    textInput.addEventListener("input", handleTextChange);
    sizeInput.addEventListener("input", handleSizeChange);
}

// Load saved settings for a specific tab
function loadTabSettings(tab) {
    const tabId = `tt_${tab}`;
    const contentId = `content_${tab}`;

    const savedColor = localStorage.getItem(`color ${tabId}`) || defaultColor;
    const savedColor2 = localStorage.getItem(`name color ${tabId}`) || defaultColor;
    const savedName = localStorage.getItem(`Name ${tabId}`) || "";
    const savedSize = parseInt(localStorage.getItem(`Font_size ${tabId}`)) || defaultFontSize;

    document.getElementById(contentId).style.backgroundColor = savedColor;
    document.getElementById(tabId).style.color = savedColor2;
    document.getElementById(tabId).textContent = savedName;
    document.getElementById(tabId).style.fontSize = savedSize + "px";

    // Update inputs only for the first tab initially
    if (tab === 1) {
        colorInput.value = savedColor;
        colorPreview.style.backgroundColor = savedColor;
        colorInput2.value = savedColor2;
        colorPreview2.style.backgroundColor = savedColor2;
        textInput.value = savedName;
        sizeInput.value = savedSize;
    }
}

// Switch between tabs
function switchTab(tab) {
    currentTab = tab;
    for (let i = 1; i <= totalTabs; i++) {
        document.getElementById(`content_${i}`).className = "oo" + (i === tab ? " q" : "");
    }

    // Update input fields based on current tab values
    const tabId = `tt_${currentTab}`;
    const contentId = `content_${currentTab}`;
    colorInput.value = localStorage.getItem(`color ${tabId}`) || defaultColor;
    colorPreview.style.backgroundColor = colorInput.value;
    colorInput2.value = localStorage.getItem(`name color ${tabId}`) || defaultColor;
    colorPreview2.style.backgroundColor = colorInput2.value;
    console.log(colorInput2.value)
    textInput.value = localStorage.getItem(`Name ${tabId}`) || "";
    sizeInput.value = parseInt(localStorage.getItem(`Font_size ${tabId}`)) || defaultFontSize;
}

// Handle color changes
function handleColorChange(e) {
    const color = e.target.value;
    const tabId = `tt_${currentTab}`;
    const contentId = `content_${currentTab}`;

    document.getElementById(contentId).style.backgroundColor = color;
    colorPreview.style.backgroundColor = color;
    localStorage.setItem(`color ${tabId}`, color);
}

function handleColorChange2(e) {
    const color = e.target.value;
    const tabId = `tt_${currentTab}`;
    const contentId = `content_${currentTab}`;

    document.getElementById(tabId).style.color = color;
    colorPreview2.style.backgroundColor = color;
    localStorage.setItem(`name color ${tabId}`, color);
}

// Handle text changes
function handleTextChange(e) {
    const text = e.target.value;
    const tabId = `tt_${currentTab}`;

    document.getElementById(tabId).textContent = text;
    localStorage.setItem(`Name ${tabId}`, text);
}

// Handle font size changes
function handleSizeChange(e) {
    const size = parseInt(e.target.value);
    const tabId = `tt_${currentTab}`;

    document.getElementById(tabId).style.fontSize = size + "px";
    localStorage.setItem(`Font_size ${tabId}`, size);
}

// Predefined quick themes
const themes = {
    ma:  { color: "#3D921F", text: "MA", text_color: "#ffffff" },
    bl:  { color: "#BD6621", text: "BL", text_color: "#ffffff" },
    en:  { color: "#4C275D", text: "EN", text_color: "#ffffff" },
    hkk: { color: "#2A6FAD", text: "HKK", text_color: "#ffffff" },
    idh: { color: "#B43A2F", text: "IDH", text_color: "#ffffff" },
    mu:  { color: "#9bae2d", text: "MU", text_color: "#ffffff" },
    no:  { color: "#7C9E39", text: "NO", text_color: "#ffffff" },
    sl:  { color: "#25305C", text: "SL", text_color: "#ffffff" },
    so:  { color: "#9D2F52", text: "SO", text_color: "#ffffff" },
    sv:  { color: "#7B2820", text: "SV", text_color: "#ffffff" },
    tk:  { color: "#3B6386", text: "TK", text_color: "#ffffff" }
};

// Apply predefined theme by ID
function abcd(themeId) {
    if (!(themeId in themes)) return;

    const { color, text, text_color } = themes[themeId];
    colorInput.value = color;
    colorInput2.value = text_color;
    textInput.value = text;
    sizeInput.value = 120;

    handleColorChange({ target: { value: color } });
    handleColorChange2({ target: { value: text_color } });
    handleTextChange({ target: { value: text } });
    handleSizeChange({ target: { value: 120 } });
}

function abcdff(text,color,s,color2) {

    colorInput.value = color;
    colorInput2.value = color2;
    textInput.value = text;
    sizeInput.value = s;

    handleColorChange({ target: { value: color } });
    handleColorChange2({ target: { value: color2 } });
    handleTextChange({ target: { value: text } });
    handleSizeChange({ target: { value: s } });
}

function save() {
    const s1 = document.getElementById("add12");
    const s2 = textInput.value;
    let s3 = 35; // initial font size
    const s4 = "juju_" + Date.now();

    for (let index = 0; index < s2.length; index++) {
        if(s3 > 11){
            s3 -= 3.5;
        } else {
            if(s3 > 6){
                s3 -= 1.5;
            }
        }
    }

    const data_html = `
        <div id="${s4}" style="font-size: ${s3}px; background-color: ${colorInput.value};" class="bil_q" onclick="abcdff('${s2}','${colorInput.value}','${sizeInput.value}','${colorPreview2.style.backgroundColor}')">
            <div style="color: ${colorPreview2.style.backgroundColor};" class="kdd">${s2}</div>
        </div>
    `;

    s1.insertAdjacentHTML("beforeend", data_html);

    const div = document.getElementById(s4);
    div.onmouseover = () => div.style.fontSize = s3 * 1.6 + "px";
    div.onmouseout = () => div.style.fontSize = s3 + "px";

    // Save to localStorage
    const savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");
    savedItems.push({
        id: s4,
        text: s2,
        color: colorInput.value,
        color2: colorPreview2.style.backgroundColor,
        size2: s3,
        size: sizeInput.value
    });
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
}

function ll(){
    const s1 = document.getElementById("add12");
    const savedItems = JSON.parse(localStorage.getItem("savedItems") || "[]");

    savedItems.forEach(item => {
        const data_html = `
            <div id="${item.id}" style="font-size: ${item.size2}px; background-color: ${item.color};" class="bil_q" onclick="abcdff('${item.text}','${item.color}','${item.size}','${item.color2}')">
                <div style="color: ${item.color2};" class="kdd">${item.text}</div>
            </div>
        `;
        s1.insertAdjacentHTML("beforeend", data_html);

        const div = document.getElementById(item.id);
        div.onmouseover = () => div.style.fontSize = item.size2 * 1.6 + "px";
        div.onmouseout = () => div.style.fontSize = item.size2 + "px";
    });
}

function generateShareURL() {
    const color1 = encodeURIComponent(localStorage.getItem(`color tt_1`) || defaultColor);
    const color2 = encodeURIComponent(localStorage.getItem(`color tt_2`) || defaultColor);
    const color3 = encodeURIComponent(localStorage.getItem(`color tt_3`) || defaultColor);
    const name_color1 = encodeURIComponent(localStorage.getItem(`name color tt_1`) || defaultNameColor);
    const name_color2 = encodeURIComponent(localStorage.getItem(`name color tt_2`) || defaultNameColor);
    const name_color3 = encodeURIComponent(localStorage.getItem(`name color tt_3`) || defaultNameColor);
    const text1 = encodeURIComponent(localStorage.getItem(`Name tt_1`) || "");
    const text2 = encodeURIComponent(localStorage.getItem(`Name tt_2`) || "");
    const text3 = encodeURIComponent(localStorage.getItem(`Name tt_3`) || "");
    const size1 = encodeURIComponent(localStorage.getItem(`Font_size tt_1`) || defaultFontSize);
    const size2 = encodeURIComponent(localStorage.getItem(`Font_size tt_2`) || defaultFontSize);
    const size3 = encodeURIComponent(localStorage.getItem(`Font_size tt_3`) || defaultFontSize);

    const url = `${window.location.origin}/william-w.se/web/pdf%20843/h.html?c=1&color1=${color1}&color2=${color2}&color3=${color3}&name_color1=${name_color1}&name_color2=${name_color2}&name_color3=${name_color3}&text1=${text1}&text2=${text2}&text3=${text3}&size1=${size1}&size2=${size2}&size3=${size3}`;
    prompt("Share this URL:", url);
}
