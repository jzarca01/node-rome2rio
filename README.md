# Node-Rome2Rio

A Wrapper for Rome2Rio API

## Usage

```javascript
const Rome2Rio = require('node-rome2rio');
const rome = new Rome2Rio({
  apiKey: ''
});
```

### Geocode

```javascript
const geo = await rome.geocode(searchTerm);
```

### Search

```javascript
const routes = await rome.search({
  departure,
  arrival,
  departureCoordinates, // '-22.9657374,-42.0279869'
  arrivalCoordinates
}, options)

/*
You can either search by searchTerm, or coordinates, or mix them
Coordinates are encoded as a comma seprated string (eg: "51.5324,-0.12729").

List of options available here: https://www.rome2rio.com/documentation/1-4/search/
```
