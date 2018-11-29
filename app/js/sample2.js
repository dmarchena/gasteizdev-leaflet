const mymap = L.map('map', {
  center: [42.8, -2.6],
  zoom: 11,
});

const wmsLayer = L.tileLayer.wms(
  'http://www.geo.euskadi.eus/geoeuskadi/services/U11/WMS_ORTOARGAZKIAK/MapServer/WmsServer?',
  { layers: 'ORTO_EGUNERATUENA_MAS_ACTUALIZADA' }
  // { layers: 'ORTO_1991' }
);

wmsLayer.addTo(mymap);