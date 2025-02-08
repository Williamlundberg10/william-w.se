function Loadddata() {
    var Nummer = 1;
    // Get the value of the text input
    var text_I_data = document.getElementById("textII").value;

    try {
        // Parse the JSON data
        var jsondata = JSON.parse(text_I_data);
        console.log(jsondata); // Log the parsed JSON object

        // Display the data in the list
        var data_List = document.getElementById("data_list");
        data_List.innerHTML = ""; // Clear the list before adding new data

        // Iterate over the JSON data and add each item to the list
        console.log(jsondata)

    } catch (error) {
        console.error("Error parsing JSON:", error);
        alert("Invalid JSON data. Please check the input and try again.");
    }
}