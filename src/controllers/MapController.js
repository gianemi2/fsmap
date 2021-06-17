import { Loader, LoaderOptions } from 'google-maps';
import createInfoWindow from '../components/createInfoWindow';

createInfoWindow({ title: "hello", content: 'Hello 2' })

class MapController {
    constructor(params, options = {}, markers = []) {
        const { el, apiKey, debug } = params
        this.debug = debug ? debug : false

        const defaultMapOptions = {
            center: { lat: -34, lng: 150 },
            zoom: 8
        }
        const mapOptions = { ...defaultMapOptions, ...options };


        if (!apiKey)
            this.log('No apiKey selected. ')
        if (!el)
            this.log('No dom element selected for the map.')
        if (!document.querySelector(el))
            this.log('Dom element passed but not found in dom. ');

        this.initGoogle(apiKey).then((res) => {
            this.mapContainer = document.querySelector(el);
            this.initMap(mapOptions)
            this.initMarkers(markers)
        })

    }

    initGoogle = async (apiKey) => {
        const loader = new Loader(apiKey)
        this.google = await loader.load();
    }

    initMap = async (mapOptions) => {
        this.gmap = new this.google.maps.Map(this.mapContainer, mapOptions)
        this.mapContainer.classList.add('fs-map')
    }

    initMarkers = async (markers) => {
        if (markers.length < 1)
            return

        this.markers = markers.map((marker, index) => {
            if (typeof marker.location != 'object')
                this.log(`Marker with index: ${index} location property is missing`)

            if (!marker.location.lat || !marker.location.lng)
                this.log(`Marker is missing lat or lng: ${JSON.stringify(marker.location)}`)

            const markerElement = new this.google.maps.Marker({
                map: this.gmap,
                draggable: true,
                position: marker.location,
                animation: marker.animation
                    ? (marker.animation === 'bounce'
                        ? this.google.maps.Animation.BOUNCE
                        : this.google.maps.Animation.DROP)
                    : false,
                icon: marker.icon ? marker.icon : false
            })
            if (marker.infowindow) {
                const infowindow = new google.maps.InfoWindow({
                    content: createInfoWindow(marker),
                });
                markerElement.addListener("click", () => {
                    infowindow.open(this.gmap, markerElement);
                });
            }

        })
        return this.markers;
    }

    log = (text, logType = 'error') => {
        if (this.debug) {
            switch (logType) {
                case 'error':
                    console.error(text)
                    break;
                case 'warn':
                    console.warn(text)
                case 'log':
                    console.log(text)
                default:
                    console.log(text)
                    break;
            }
        }
    }

    addPins = () => {
        alert('Add pins!');
    }
}
export default MapController