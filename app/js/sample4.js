const baseLayers = {
  GeoEuskadi: L.tileLayer.wms(
    'http://www.geo.euskadi.eus/geoeuskadi/services/U11/WMS_ORTOARGAZKIAK/MapServer/WmsServer?',
    { layers: 'ORTO_1991', attribution: 'GeoEuskadi' }
  ),
  OpenStreetMap: L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { attribution: "OpenStreetMap" }
  ),
};

const grupoCosas = L.layerGroup();
[
  L.marker([43, -2.5])
    .bindPopup("Kaixo world!"),
  L.marker([42.6, -2.3], {
      icon: L.icon({ 
        iconUrl: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-15-396360.png',
        iconSize: L.point(50, 50)
      })
    })
    .bindPopup("Kaixo pokemos!"),
  L.circle([42.8, -2.5], {
    color: 'blue',
    fillColor: 'red',
    radius: 10000, // metros
  })
].map(o => o.addTo(grupoCosas));

const overlays = {
  'Cosas guays': grupoCosas,
};

const mymap = L.map('map', {
  center: [42.8, -2.6],
  zoom: 10,
  layers: Object.values(baseLayers)
});

L.control.layers(baseLayers, overlays).addTo(mymap);

