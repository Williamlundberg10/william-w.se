window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("c");
    if(c != 1){
        ss()
    }else{
        sss()
    }
};


function ss(){
    var q = document.getElementById("content")
    var q1 = document.getElementById("q1")
    var q2 = document.getElementById("q2")
    var q3 = document.getElementById("q3")

    q1.textContent = localStorage.getItem("Name tt_1") || "";
    q2.textContent = localStorage.getItem("Name tt_2") || "";
    q3.textContent = localStorage.getItem("Name tt_3") || "";

    q1.style.fontSize = parseInt(localStorage.getItem("Font_size tt_1")) + 20 + "px" || 96 + "px";
    q2.style.fontSize = parseInt(localStorage.getItem("Font_size tt_2")) + 20 + "px" || 96 + "px";
    q3.style.fontSize = parseInt(localStorage.getItem("Font_size tt_3")) + 20 + "px" || 96 + "px";

    q1.style.backgroundColor = localStorage.getItem("color tt_1") || "#ededed";
    q2.style.backgroundColor = localStorage.getItem("color tt_2") || "#ededed";
    q3.style.backgroundColor = localStorage.getItem("color tt_3") || "#ededed";

    q1.style.color = localStorage.getItem("name color tt_1") || "#ffffffff";
    q2.style.color = localStorage.getItem("name color tt_2") || "#ffffffff";
    q3.style.color = localStorage.getItem("name color tt_3") || "#ffffffff";

}

function sss(){
    const params = new URLSearchParams(window.location.search);
    const color1 = params.get("color1");
    const color2 = params.get("color2");
    const color3 = params.get("color3");
    const name_color1 = params.get("name_color1");
    const name_color2 = params.get("name_color2");
    const name_color3 = params.get("name_color3");
    const text1 = params.get("text1");
    const text2 = params.get("text2");
    const text3 = params.get("text3");
    const size1 = params.get("size1");
    const size2 = params.get("size2");
    const size3 = params.get("size3");

    var q = document.getElementById("content")
    var q1 = document.getElementById("q1")
    var q2 = document.getElementById("q2")
    var q3 = document.getElementById("q3")
    document.getElementById("bbp").style.display = "none"

    q1.textContent = text1
    q2.textContent = text2
    q3.textContent = text3

    q1.style.fontSize = parseInt(size1) + 20 + "px"
    q2.style.fontSize = parseInt(size2) + 20 + "px"
    q3.style.fontSize = parseInt(size3) + 20 + "px"

    q1.style.backgroundColor = color1
    q2.style.backgroundColor = color2
    q3.style.backgroundColor = color3

    q1.style.color = name_color1
    q2.style.color = name_color2
    q3.style.color = name_color3
}