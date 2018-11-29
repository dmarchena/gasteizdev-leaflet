const mymap = L.map('map', {
  center: [42.8, -2.6],
  zoom: 10,
});

mymap.addLayer(
  L.tileLayer.wms(
    'http://www.geo.euskadi.eus/geoeuskadi/services/U11/WMS_ORTOARGAZKIAK/MapServer/WmsServer?',
    { layers: 'ORTO_1991' }
  )
);

L.marker([43, -2.5])
  .addTo(mymap)
  .bindPopup("Kaixo world!");

L.circle([42.8, -2.5], {
    color: 'blue',
    fillColor: 'red',
    radius: 10000, // metros
  })
  .addTo(mymap);