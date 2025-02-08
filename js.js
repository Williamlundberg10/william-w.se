window.onload = function() {
    loadData()
};

function loadData() {
    fetch('web/web-data.json')
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON data
        })
        .then(data => {
            console.log(data);
            addData(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function addData(data) {
    var G = document.getElementById("WW")
    G.innerHTML = "";
    data.forEach(item => {
        console.log(item, getcolor(item))
        const div = document.createElement('div');
        div.innerHTML = `
            <div class=${getcolor(item)}>
                <div class="title-box">${item.title}</div>
                <div class="title-box1">${item.v}</div>
            </div>
        `;
        div.addEventListener('click', () => {
            window.open(item.url, "_self")
        });
        G.appendChild(div);
    });
}

function getcolor(item) {
    if(item.color == "B"){
        return "box-B"
    }
    if(item.color == "R"){
        return 'box-R'
    }
    if(item.color == "G"){
        return 'box-G'
    }
    if(item.color == ""){
        return 'box'
    }
}