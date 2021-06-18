import MapController from "./controllers/MapController";
import './style.css'

const params = {
    apiKey: 'AIzaSyDYQqUVga8bZO67P0H-AHA0nd9ykD0uVv8',
    el: '#fsmap'
}
const options = {
    center: { lat: 43.54427, lng: 10.32615 },
    zoom: 9
}
const pins = [
    {
        location: { lat: 43.54427, lng: 10.32615 },
        address: "Via Fabio Filzi 31 Livorno",
        title: "6EMME Studio",
        content: "Hello this is the content of that",
        link: "https://6emme.it",
        animation: false,
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/parking_lot_maps.png',
        infowindow: true
    },
    {
        location: { lat: 43.54427, lng: 10.32815 },
        address: "Via dell'Eremo 1 Livorno",
        title: "6EMME Studio",
        content: "Hello this is the content of that",
        link: "https://6emme.it",
        animation: false,
        icon: false,
        infowindow: false
    }
]
const maps = new MapController(params, options, pins)