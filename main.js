
// Create map object
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[-1.2423299249870705,36.68276221601912],[-1.0997245013662968,36.80580119527722]]);

// Add the tilelayer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
}).addTo(map);

// Leaflet-hash lets you add dynamic URL hashes to web pages with Leaflet maps. You can easily link users to specific
// map view. https://github.com/mlevans/leaflet-hash
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}

function pop_Kiambaa_subcounty_0(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['county'] !== null ? autolinker.link(feature.properties['county'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
} 
function style_Kiambaa_subcounty_0_0() {
    return {
        pane: 'pane_Kiambaa_subcounty_0',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fillOpacity: 0,
        interactive: false,
    }
}
map.createPane('pane_Kiambaa_subcounty_0');
map.getPane('pane_Kiambaa_subcounty_0').style.zIndex = 400;
map.getPane('pane_Kiambaa_subcounty_0').style['mix-blend-mode'] = 'normal';
var layer_Kiambaa_subcounty_0 = new L.geoJson(json_Kiambaa_subcounty_0, {
    attribution: '',
    interactive: false,
    dataVar: 'json_Kiambaa_subcounty_0',
    layerName: 'layer_Kiambaa_subcounty_0',
    pane: 'pane_Kiambaa_subcounty_0',
    onEachFeature: pop_Kiambaa_subcounty_0,
    style: style_Kiambaa_subcounty_0_0,
});
bounds_group.addLayer(layer_Kiambaa_subcounty_0);
map.addLayer(layer_Kiambaa_subcounty_0);


function pop_Kiambaa_healthfacilities_1(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['HFName'] !== null ? autolinker.link(feature.properties['HFName'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}


const fontAwesomeHealthIcon = L.divIcon({
    html: '<span style="font-size: 1.3em; color: Red;"><i class="fa-solid fa-square-h"></i></span>',
    className:'healthIcon',
})
map.createPane('pane_Kiambaa_healthfacilities_1');
map.getPane('pane_Kiambaa_healthfacilities_1').style.zIndex = 401;
map.getPane('pane_Kiambaa_healthfacilities_1').style['mix-blend-mode'] = 'normal';
var layer_Kiambaa_healthfacilities_1 = new L.geoJson(json_Kiambaa_healthfacilities_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Kiambaa_healthfacilities_1',
    layerName: 'layer_Kiambaa_healthfacilities_1',
    pane: 'pane_Kiambaa_healthfacilities_1',
    onEachFeature: pop_Kiambaa_healthfacilities_1,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        //return L.circleMarker(latlng, style_Kiambaa_healthfacilities_1_0(feature));
        return L.marker(latlng, {icon: fontAwesomeHealthIcon})
    },
});
bounds_group.addLayer(layer_Kiambaa_healthfacilities_1);
//map.addLayer(layer_Kiambaa_healthfacilities_1);


function pop_Kiambaa_secondaryschools_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

const fontAwesomeSecSchIcon = L.divIcon({
    html: '<span style="font-size: 1em; color: DarkRed;"><i class="fa-solid fa-circle-dot"></i></i></span>',
    className:'healthIcon',
})
map.createPane('pane_Kiambaa_secondaryschools_2');
map.getPane('pane_Kiambaa_secondaryschools_2').style.zIndex = 402;
map.getPane('pane_Kiambaa_secondaryschools_2').style['mix-blend-mode'] = 'normal';
var layer_Kiambaa_secondaryschools_2 = new L.geoJson(json_Kiambaa_secondaryschools_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Kiambaa_secondaryschools_2',
    layerName: 'layer_Kiambaa_secondaryschools_2',
    pane: 'pane_Kiambaa_secondaryschools_2',
    onEachFeature: pop_Kiambaa_secondaryschools_2,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        //return L.circleMarker(latlng, style_Kiambaa_secondaryschools_2_0(feature));
        return L.marker(latlng, {icon:fontAwesomeSecSchIcon})
    },
});
bounds_group.addLayer(layer_Kiambaa_secondaryschools_2);
//map.addLayer(layer_Kiambaa_secondaryschools_2);


function pop_Kiambaa_primaryschools_3(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['NAME'] !== null ? autolinker.link(feature.properties['NAME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

const fontAwesomePriSchIcon = L.divIcon({
    html: '<span style="font-size: 1em; color: MediumPurple;"><i class="fa-solid fa-circle-dot"></i></span>',
    className:'healthIcon',
})
map.createPane('pane_Kiambaa_primaryschools_3');
map.getPane('pane_Kiambaa_primaryschools_3').style.zIndex = 403;
map.getPane('pane_Kiambaa_primaryschools_3').style['mix-blend-mode'] = 'normal';
var layer_Kiambaa_primaryschools_3 = new L.geoJson(json_Kiambaa_primaryschools_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Kiambaa_primaryschools_3',
    layerName: 'layer_Kiambaa_primaryschools_3',
    pane: 'pane_Kiambaa_primaryschools_3',
    onEachFeature: pop_Kiambaa_primaryschools_3,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        //return L.circleMarker(latlng, style_Kiambaa_primaryschools_3_0(feature));
        return L.marker(latlng, {icon: fontAwesomePriSchIcon})
    },
});
bounds_group.addLayer(layer_Kiambaa_primaryschools_3);
//map.addLayer(layer_Kiambaa_primaryschools_3);


function pop_Kiambaa_marketcenters_4(feature, layer) {
    layer.on({
        mouseout: function(e) {
            for (i in e.target._eventParents) {
                e.target._eventParents[i].resetStyle(e.target);
            }
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['MktName'] !== null ? autolinker.link(feature.properties['MktName'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}


const fontAwesomeMartetIcon = L.divIcon({
    html: '<span style="font-size: 1.3em; "><i class="fa-solid fa-cart-shopping"></i></span>',
    className:'healthIcon',
})
map.createPane('pane_Kiambaa_marketcenters_4');
map.getPane('pane_Kiambaa_marketcenters_4').style.zIndex = 404;
map.getPane('pane_Kiambaa_marketcenters_4').style['mix-blend-mode'] = 'normal';
var layer_Kiambaa_marketcenters_4 = new L.geoJson(json_Kiambaa_marketcenters_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Kiambaa_marketcenters_4',
    layerName: 'layer_Kiambaa_marketcenters_4',
    pane: 'pane_Kiambaa_marketcenters_4',
    onEachFeature: pop_Kiambaa_marketcenters_4,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        //return L.circleMarker(latlng, style_Kiambaa_marketcenters_4_0(feature));
        return L.marker(latlng, {icon: fontAwesomeMartetIcon})
    },
});
bounds_group.addLayer(layer_Kiambaa_marketcenters_4);
//map.addLayer(layer_Kiambaa_marketcenters_4);

var allLayers = [layer_Kiambaa_healthfacilities_1, layer_Kiambaa_marketcenters_4, layer_Kiambaa_primaryschools_3, layer_Kiambaa_secondaryschools_2]
L.layerGroup(allLayers).addTo(map)
var baseMaps = {};
var overlays = {
    '<span style="font-size: 1.3em; "><i class="fa-solid fa-cart-shopping"></i></span> Market Centers': layer_Kiambaa_marketcenters_4,
    '<span style="font-size: 1.3em; color: MediumPurple;"><i class="fa-solid fa-circle-dot"></i></span> Primary Schools': layer_Kiambaa_primaryschools_3,
    '<span style="font-size: 1.3em; color: DarkRed;"><i class="fa-solid fa-circle-dot"></i></span> Secondary Schools': layer_Kiambaa_secondaryschools_2,
    '<span style="font-size: 1.3em; color: Red;"><i class="fa-solid fa-square-h"></i></span> Health Facilities': layer_Kiambaa_healthfacilities_1,
    }

// Adding legend marker images to the layer switcher
//'<img src="legend/Kiambaa_healthfacilities_1.png" /> Kiambaa_healthfacilities': layer_Kiambaa_healthfacilities_1,}
L.control.layers(baseMaps,overlays, {collapsed:false}).addTo(map);
setBounds();

let secSchools = document.getElementById('secSchools')


// Initialize the Reachability plugin
var reachabilityControl = L.control.reachability({
    // Add settings/options here
    apiKey: '5b3ce3597851110001cf62486b66b7cb662948a7ba684b8af3ebc133',
    markerFn: isolinesOrigin,
    styleFn: styleIsolines,
    mouseOverFn: highlightIsolines,
    mouseOutFn: resetIsolines,
    clickFn: clickIsolines,
    expandButtonContent: "",
    expandButtonStyleClass: "reachbility-control-expand-button fa-solid fa-bullseye fa-2x",
    drawButtonContent: "",
    drawButtonStyleClass: "fas fa-pencil-alt fa-2x",
    deleteButtonContent: "",
    deleteButtonStyleClass: "fas fa-trash fa-2x",
    distanceButtonContent: "",
    distanceButtonStyleClass: "fas fa-road fa-2x",
    timeButtonContent: "",
    timeButtonStyleClass: "far fa-clock fa-2x",
    travelModeButton1Content: "",
    travelModeButton1StyleClass: "fas fa-car-alt fa-2x",
    travelModeButton2Content: "",
    travelModeButton2StyleClass: "fas fa-biking fa-2x",
    travelModeButton3Content: "",
    travelModeButton3StyleClass: "fas fa-walking fa-2x",
    travelModeButton4Content: "",
    travelModeButton4StyleClass: "fas fa-wheelchair fa-2x",
    collapseButtonContent: "X",

}).addTo(map);

// Error handlers in case there is a problem when calling the API
map.on('reachability:error', function () {
    alert('Unfortunately there has been an error calling the API.\nMore details are available in the console.');
});
map.on('reachability:no_data', function () {
    alert('Unfortunately no data was received from the API.\n');
});

