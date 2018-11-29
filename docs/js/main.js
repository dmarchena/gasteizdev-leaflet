const euskadiwms = layer => L.tileLayer.wms(
  'http://www.geo.euskadi.eus/geoeuskadi/services/U11/WMS_ORTOARGAZKIAK/MapServer/WmsServer?',
  { layers: layer, attribution: 'GeoEuskadi' }
);


const baseLayers = {
  'Euskadi': euskadiwms('ORTO_EGUNERATUENA_MAS_ACTUALIZADA'),
  'Euskadi 1945': euskadiwms('ORTO_1945_46_AMERICANO'),
  'Euskadi 1956': euskadiwms('ORTO_1956_57_AMERICANO'),
  'Euskadi 1977': euskadiwms('ORTO_INTERMINISTERIAL_1977_78'),
  'Euskadi 1984': euskadiwms('ORTO_1984_85'),
  'Euskadi 1991': euskadiwms('ORTO_1991'),
  'Euskadi 2001': euskadiwms('ORTO_2001'),
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
    .bindPopup('Kaixo pokemon!'),
  L.circle([42.8, -2.5], {
    color: 'blue',
    fillColor: 'red',
    radius: 10000, // metros
  })
].map(o => o.addTo(grupoCosas));

const overlays = {
  'Cosas guays': grupoCosas,
  'Pueblos': new L.GeoJSON.AJAX(
    '/gasteizdev-leaflet/data/pueblos.geojson',
    {
      onEachFeature: (f, l) => {
        l.bindPopup(f.properties.municipality)
      }
    }
  ),
  'Centros de salud': new L.GeoJSON.AJAX(
    '/gasteizdev-leaflet/data/salud.geojson',
    {
      onEachFeature: (f, l) => {
        l.bindPopup(f.properties.nombre)
      }
    }
  )
};

const mymap = L.map('map', {
  center: [42.846718, -2.671635],
  zoom: 16,
  layers: Object.values(baseLayers)[0]
});

L.control.layers(baseLayers, overlays).addTo(mymap);

