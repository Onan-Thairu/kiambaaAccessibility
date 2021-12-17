// Function to style the isoline polygons when they are returned from the API call
function styleIsolines(feature) {
    // Conditional styling can be done by reading the properties of feature parameter passed to the function
    return {
        color: '#0073d4',
        opacity: 0.5,
        fillOpacity: 0.2
    };
}

// Functions to style the isoline polygons when the user hovers over them.
function highlightIsolines(e) {
    var layer = e.target;

    layer.setStyle({
        fillColor:'#ffea00',
        dashArray: '1, 13',
        weight: 4,
        fillOpacity: '0.5',
        opacity: '1'
    })
}

// Function to reset the style of the isoline polygons when the user stops hovering over them
function resetIsolines(e) {
    var layer = e.target;

    // When initializing the reachability plugin, it was as assigned a variable reachabilityControl. We reference it below to reset the
    // isolines
    reachabilityControl.isolinesGroup.resetStyle(layer);
    // isolinesGroup contains all the sets of reachability area polygons that are currently drawn on the map.
}

// Function to create a custom marker at the origin of the isoline groups
function isolinesOrigin(latLng, travelMode, rangeType) {
    return L.circleMarker(latLng, {radius:4, weight:2, color:'#0073d4', fillColor:'#fff', fillOpacity:1});
}

// Function to display information about an isoline in a popup when the user clicks on it
function clickIsolines(e) {
    var layer = e.target;
    console.log(layer);
    var props = layer.feature.properties;
    var popupContent = `Mode of travel: ${props['Travel mode']} <br /> Range: 0 - ${props['Range']} ${props['Range units']} <br />Area: ${props['Area']} ${props['Area units']} <br />Population: ${props['Population']}`;
    if (props.hasOwnProperty('Reach factor')) {
        popupContent += `<br />Reach Factor: ${props['Reach factor']}`;
    }
    layer.bindPopup(popupContent).openPopup();    
}









































/* Find a way of using this function to style the polygons

// Function to return a colour based on the 'Range' value of the reachability polygons
function getColourByRange(value) {
    switch (value) {
        case 5:
            return '#ff0000';
        case 10:
            return '#00ff00';
        case 15:
            return '#0000ff';
        case 20:
            return '#ffff00';
        case 25:
            return '#ff00ff';
        default:
            return '#00ffff'
    }
}
*/