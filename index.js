const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    // Checking to see if the input box has an empty value, and if it does, it will alert the user to add an item
    if(inputBox.value === '') {
        alert("Please add an item!");
    } else {
        // Line 10 is creating an HTML li element and storing it in the li variable 
        let li = document.createElement("li");
        // Line 12 will add the text that the user has typed in the input field (inputBox.value) into the li element (li.innerHTML) 
        li.innerHTML = inputBox.value;
        // Line 14 will display the li that the user has typed in the ul>list-container 
        listContainer.appendChild(li);
        // A span is created to display an 'x' next to an item that is added 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    // Line 17 will clear the text from the input once the user has added something to their list 
    inputBox.value = '';
}

// An event listener click was added 
listContainer.addEventListener("click", function(e) {
    // First it will check where the user has clicked and if li was clicked, then it should add the checked class name and if the checked class name is already there, then it will remove it because we have the classList.toggle
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    // If a span has been clicked then it will delete the parent element as we have parentElement.remove. The parent element is the LI element so it will remove that LI so the task will be deleted      
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, 
    false
);

// This function will save the tasks when you close the browser 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// This function will show the tasks that have been saved 
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();