var highlightLayer;
    function highlightFeature(e) {
        highlightLayer = e.target;
        if (e.target.feature.geometry.type === 'LineString') {
          highlightLayer.setStyle({
            color: '#ffff00',
          });
        } else {
          highlightLayer.setStyle({
            fillColor: '#ffff00',
            fillOpacity: 1
          });
        }
        highlightLayer.openPopup();
    }

// Create map object
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:1
}).fitBounds([[-1.2423299249870705,36.65276221601912],[-1.0997245013662968,36.91580119527722]]);

// Add the tilelayer
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
}).addTo(map);

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
                <td colspan="2">' + (feature.properties['country'] !== null ? autolinker.link(feature.properties['country'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['provpcode'] !== null ? autolinker.link(feature.properties['provpcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['province'] !== null ? autolinker.link(feature.properties['province'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['ctypcode'] !== null ? autolinker.link(feature.properties['ctypcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['county'] !== null ? autolinker.link(feature.properties['county'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['scpcode'] !== null ? autolinker.link(feature.properties['scpcode'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['subcounty'] !== null ? autolinker.link(feature.properties['subcounty'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <td colspan="2">' + (feature.properties['dhis2_id'] !== null ? autolinker.link(feature.properties['dhis2_id'].toLocaleString()) : '') + '</td>\
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
function style_Kiambaa_healthfacilities_1_0() {
    return {
        pane: 'pane_Kiambaa_healthfacilities_1',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(22,255,236,1.0)',
        interactive: true,
    }
}
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
        return L.circleMarker(latlng, style_Kiambaa_healthfacilities_1_0(feature));
    },
});
bounds_group.addLayer(layer_Kiambaa_healthfacilities_1);
map.addLayer(layer_Kiambaa_healthfacilities_1);
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
function style_Kiambaa_secondaryschools_2_0() {
    return {
        pane: 'pane_Kiambaa_secondaryschools_2',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(255,255,0,1.0)',
        interactive: true,
    }
}
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
        return L.circleMarker(latlng, style_Kiambaa_secondaryschools_2_0(feature));
    },
});
bounds_group.addLayer(layer_Kiambaa_secondaryschools_2);
map.addLayer(layer_Kiambaa_secondaryschools_2);
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
function style_Kiambaa_primaryschools_3_0() {
    return {
        pane: 'pane_Kiambaa_primaryschools_3',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(129,15,19,1.0)',
        interactive: true,
    }
}
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
        return L.circleMarker(latlng, style_Kiambaa_primaryschools_3_0(feature));
    },
});
bounds_group.addLayer(layer_Kiambaa_primaryschools_3);
map.addLayer(layer_Kiambaa_primaryschools_3);
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
function style_Kiambaa_marketcenters_4_0() {
    return {
        pane: 'pane_Kiambaa_marketcenters_4',
        radius: 4.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(21,108,252,1.0)',
        interactive: true,
    }
}
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
        return L.circleMarker(latlng, style_Kiambaa_marketcenters_4_0(feature));
    },
});
bounds_group.addLayer(layer_Kiambaa_marketcenters_4);
map.addLayer(layer_Kiambaa_marketcenters_4);
var baseMaps = {};

// Adding legend images to the layer switcher
L.control.layers(baseMaps,{'<img src="legend/Kiambaa_marketcenters_4.png" /> Kiambaa_marketcenters': layer_Kiambaa_marketcenters_4,'<img src="legend/Kiambaa_primaryschools_3.png" /> Kiambaa_primaryschools': layer_Kiambaa_primaryschools_3,'<img src="legend/Kiambaa_secondaryschools_2.png" /> Kiambaa_secondaryschools': layer_Kiambaa_secondaryschools_2,'<img src="legend/Kiambaa_healthfacilities_1.png" /> Kiambaa_healthfacilities': layer_Kiambaa_healthfacilities_1,},{collapsed:false}).addTo(map);
setBounds();

// Initialize the Reachability plugin
var reachabilityControl = L.control.reachability({
    // Add settings/options here
    apiKey: '5b3ce3597851110001cf62486b66b7cb662948a7ba684b8af3ebc133',
    markerFn: isolinesOrigin,
    styleFn: styleIsolines,
    mouseOverFn: highlightIsolines,
    mouseOutFn: resetIsolines,
    clickFn: clickIsolines,

}).addTo(map);

// Error handlers in case there is a problem when calling the API
map.on('reachability:error', function () {
    alert('Unfortunately there has been an error calling the API.\nMore details are available in the console.');
});
map.on('reachability:no_data', function () {
    alert('Unfortunately no data was received from the API.\n');
});