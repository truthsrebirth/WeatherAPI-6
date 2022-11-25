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