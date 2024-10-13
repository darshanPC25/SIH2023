function copyText(elementId) {
    // Get the text from the element
    var textToCopy = document.getElementById(elementId);

    // Create a textarea element to hold the text
    var textarea = document.createElement("textarea");
    textarea.value = textToCopy.value;

    // Append the textarea to the body
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text
    document.execCommand("copy");

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);

    // Provide feedback to the user (optional)
    alert("Text copied to clipboard: " + textToCopy.value);
  }



  
// =================for search engines============
var searchEngines = ['Ahmia', 'GDark', 'Deep Search', 'Onion Scanner'];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function updateSearchEngine() {
    var randomIndex = getRandomIndex(searchEngines.length);
    var randomSearchEngine = searchEngines[randomIndex];
    document.getElementById('searchEngines').innerText = randomSearchEngine;
}


updateSearchEngine();