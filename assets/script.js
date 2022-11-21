// store your API key into a variable
var APIKey = "1e8d43ac54cddc6d28ff5880c8320a27"; 
var cityName = "Austin";
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey; 

// base URL = http://api.openweathermap.org/data/2.5/weather 

// The question mark (?) marks the boundary between the base URL of the API call and the query terms of the API call.

// q= is the query parameter, where we can add any user input to specify the data that we want to request in the API call. The value assigned to this parameter is called the query string.

 // Following the query parameter, we concatenate the user input, which is stored in the variable city. This is the query string assigned to the query parameter.

 // The ampersand character (&) indicates that we're adding another parameter after the query parameter.

 // Next, we concatenate the other required parameter, appid=, where we'll add the API key specific to the application.
 
 // Finally, we concatenate the APIKey variable that contains the key we obtained at the beginning of this guide.

 // The Fetch API is a Web API built into the browser that allows you to make server-side API calls without having to use AJAX and install a bulky library like jQuery.
fetch(queryURL);

// I need to adjust my application to accept user input, to store in the city variable that you've created.