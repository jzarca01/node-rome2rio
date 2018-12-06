const axios = require('axios');

class Rome2Rio {
  constructor({ apiKey }) {
    this.request = axios.create({
      baseURL: 'http://free.rome2rio.com/api/1.4/json'
    });

    this.request.interceptors.request.use(
      axiosConfig => {
        axiosConfig.params = {
          ...axiosConfig.params,
          key: apiKey
        };
        return axiosConfig;
      },
      error => Promise.reject(error)
    );
  }

  async geocode(query) {
    try {
      const geo = await this.request({
        method: 'GET',
        url: '/Geocode',
        params: {
          query: query
        }
      });
      return geo.data;
    } catch (err) {
      console.log(err);
    }
  }

  async search(
    {
      departure,
      arrival,
      departureCoordinates = null,
      arrivalCoordinates = null
    },
    options = {}
  ) {
    try {
      const routes = await this.request({
        method: 'GET',
        url: '/Search',
        params: {
          oName: departure,
          dName: arrival,
          oPos: departureCoordinates,
          dPos: arrivalCoordinates,
          ...options
        }
      });
      return routes.data;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Rome2Rio;
