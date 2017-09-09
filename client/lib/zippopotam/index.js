import Axios from 'axios';
import config from './config';
import fetch from 'node-fetch';

export default {
  config, 
  get: function(zipCode){
    //return fetch(`${this.config.baseUrl}${this.config.country}/${zipCode}`);
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?&address=${zipCode}`).then(res => res.json());
    //return Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${zipCode}`);
  }
}


