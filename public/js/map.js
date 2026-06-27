console.log("MAP JS LOADED");

const map = L.map('map').setView([lat, lng], 12);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
 attribution: '&copy; OpenStreetMap contributors'
}
).addTo(map);

L.marker([lat, lng])
.addTo(map)
.bindPopup(title)
.openPopup();