# A Google Maps plugin

### Params Property

| Name     | Type    | Default  | Description                                                       |
|----------|---------|----------|-------------------------------------------------------------------|
| apiKey   | String  | Required | The Google Maps API key. You can find out how to create it here.  |
| el       | String  | Required | The selector for the target DOM element.                          |
| debug    | Boolean | false    | If set to true prints logs in console.                            |
| clusters | Boolean | false    | If set true, group the markers by clusters.                       |


### Map Options

Default Google Maps options and property. You can find them [here](https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions). 

### Pin properties
| Name         | Type           | Default  | Description                                                                     |
|--------------|----------------|----------|---------------------------------------------------------------------------------|
| location     | object         | Required | Object with lat and lng.                                                        |
| location.lat | Number         | Required | Latitude                                                                        |
| location.lng | Number         | Required | Longitude                                                                       |
| address      | string         | none     | Infowindow purpose                                                              |
| title        | string         | none     | Infowindow purpose                                                              |
| content      | string         | none     | Infowindow purpose                                                              |
| link         | string         | none     | Infowindow purpose                                                              |
| animation    | Boolean/String | false    | Choose between 'bounce' and 'drop'. If set to true DROP animation will be used. |
| icon         | Boolean/String | false    | Set a URL if you want to use a custom URL. Otherwise Google ones will be used.  |
| infowindow   | Boolean        | false    | If set to true infowindow will be opened on marker's click.                     |