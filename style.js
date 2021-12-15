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

    reachabilityControl.isolinesGroup.resetStyle(layer);
    //console.log(reachabilityControl.isolinesGroup)
}

// Function to create a custom marker at the origin of the isoline groups
function isolinesOrigin(latLng, travelMode, rangeType) {
    return L.circleMarker(latLng, {radius:4, weight:2, color:'#0073d4', fillColor:'#fff', fillOpacity:1});
}