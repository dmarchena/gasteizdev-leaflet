const mymap = L.map('map', {
  center: [20, 20],
  zoom: 8,
});

const wmsLayer = L.tileLayer.wms(
  'https://ows.mundialis.de/services/service',
  { layers: 'OSM-WMS' }
);

wmsLayer.addTo(mymap);