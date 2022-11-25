// fetch the api
class Fetch {
    async getCurrent(input) {
// store your API key into a variable & search history functions
        const APIKey = "00b302d41546917b937056b9a6f40975"; 

// make a request to a url
// store whatever the fetch method returns in a response
        const response = await fetch(
             `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKey}`
        );

        const data = await response.json(); // grab data from json method

        console.log(data);

        return data;
    }
}

// create class UI

class UI {
    constructor() {
        this.uiContainer = document.getElementById(content);
        this.city;
    }

    // Populate the UI here
    populateUI(data) { // take the data that the fetch method returns
        // we are receiving an object in return
        this.uiContainer.innerHTML = `
        
        <div class="card mx-auto mt-5" style="width: 18rem;">
            <div class="card-body justify-content-center">
                <h3 class="card-title">${data.name}</h3>
                <h4 class="card-subtitle mb-2 text-muted">Highs of ${data.main.temp_max}. Lows of ${data.main.temp_min}</h4>
                <p class="card-text ">Weather conditions are depicted as: ${data.weather[0].description}</p>
                
            </div>
        </div>
        
        `;
    }
}

// call the methods from other files

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
// call a UI method from the ui file, pass in the data
        ui6.populateUI(data);
    });
});