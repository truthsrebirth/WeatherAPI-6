// this file will call the methods from other files

const fetch6 = new Fetch();
const ui6 = new UI();

// add event listener(s) here
const button = document.getElementById("submit"); // line 37 of html. connected to the button

const search = document.getElementById("searchUser"); // line 28 of html


// place the button event listener here
button.addEventListener("click", () => {
    // on click, we want to capture the current value
    const currentValue = search.value;

// call the getCurrent() method in the fetch.js file
    fetch6.getCurrent(currentValue).then((data) => {
// call a UI method
        ui6.populateUI(data);
        ui6.saveTols(data);
    });
});