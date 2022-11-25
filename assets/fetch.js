// This file will be used to fetch the API

// fetch the api
class Fetch {
    async getCurrent(input) {
// store your API key into a variable & search history functions
        const APIKey = "1e8d43ac54cddc6d28ff5880c8320a27"; 

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