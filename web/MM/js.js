window.onload = function() {
    Loadddata();
    document.cookie = "username=John Doe";
};

function Loadddata(oo) {
    var Nummer = 1;
    if (oo == 1) {
        var text_I_data = document.getElementById("textII").value;
        S(1 ,text_I_data)

    }else{
        if (localStorage.getItem("text_Data") !== null) {
            var text_I_data = localStorage.getItem("text_Data");
        } else {
            return
        }
    }
    

    try {
        var jsondata = JSON.parse(text_I_data);
        console.log(jsondata);

        var data_List = document.getElementById("data_list");
        data_List.innerHTML = "";

        jsondata._embedded.exercises.forEach(item => {
            var IIDD = item._id;
            var listItem = document.createElement("div");
            listItem.id = IIDD; // Set exercise ID on the parent container
            listItem.className = "L";
            listItem.textContent = item.name; // Remove JSON.stringify for clean display

            // Attach click handler to hide child problems
            listItem.addEventListener("dblclick", () => AS(IIDD));

            item.problems.forEach(problem => {
                var listItem1 = document.createElement("div");
                listItem1.className = "LL problem"; // Use a class instead of ID
                listItem1.textContent = '||' + Nummer + '||  ' + problem.answer;
                listItem.appendChild(listItem1);
                Nummer += 1;
            });

            data_List.appendChild(listItem);
            Nummer = 1; // Reset counter for next exercise
        });

    } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Invalid JSON data. Please check the input and try again.");
    }
}

function AS(ll) {
    // Get the exercise container by ID
    var exerciseContainer = document.getElementById(ll);
    
    // Get all child elements with the "problem" class
    var problems = exerciseContainer.getElementsByClassName("problem");
    
    // Toggle visibility of all problems
    Array.from(problems).forEach(problem => {
        if (problem.style.display === "none") {
            problem.style.display = "flex"; // Show the problem
        } else {
            problem.style.display = "none"; // Hide the problem
        }
    });
}

function S(DataValue ,Data) {
    if (DataValue == 1) {
        localStorage.setItem("text_Data", Data);
    }else if (DataValue == 2) {
        localStorage.setItem("lastname", Data);
    }
}