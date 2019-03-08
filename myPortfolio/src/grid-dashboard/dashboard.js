//Calling the function for API location and establishing that the the link element with id map will remain undefined, the element with id of coordinate will have no inner text, and the element with id map will also have no inner text'
function geoAPIlocation () {
    locating.href = '';
    coordinates.textContent = '';
    map.textContent = '';

//Calling the function result of success for the previous geoAPIlocation function we used. We define the constant reference for latitude and longitude' that resulted from the function and log it.

//Then we define what will happen to the selectors we said would stay empty until there was a success or error result to the function of geoapilocation; We assing a link to the map and ask it to open on a new tab with it. We  define the content for the map id element. We define the inner content for the id coordinates element to show the lattitude and longitude resulting from the function and displayed at the end of the map link


function success (position) {
    const latitude = position.coords.latitude;
    console.log (latitude)
    const longitude = position.coords.longitude;
    console.log (longitude)

    locating.textContent='';
    map.href = 'https://www.openstreetmap.org/#map=4/${latitude}/${longitude}';
    map.target = '_blank';
    map.textContent = 'Click to see the map of your location';
    coordinates.textContent = 'Latitude: ${latitude}, Longitude: ${longitude}';
}

//In case of an error, we define what will happen in two scenarios. Scenario one is when the api function is not able to locate your position because of settings or a non-browser-capability error. the second scenario is when the api function is not able to lo retrieve your location due to browser capability. In this case, internet explorer is the only browser that does not support this API. 

function error (position) {
    locating.textContent = 'You must be good at hide and seek';
}

if (!navigator.geolocation) {
    locating.textContent = 'Please stop using Internet Explorer'
} 

//We define what will happen if there is no error, but the function hasn't yet delivered a success. This will usually occur while the function is working to locate the current position. Then we define two options for the navigator calling the geolocation and getting the current position - it has the option to deliver a success or an error with a function defined for each.

else {
    locating.textContent = 'Working to locate your current position'
    navigator.geolocation.getCurrentPosition (success, error)
}
}

//we call the element with id "getlocation" and add an event listener to it of 'click' and then establish what needs to happen - what function needs to be called - when the event occurs.
getLocation.addEventListener('click', geoAPIlocation);