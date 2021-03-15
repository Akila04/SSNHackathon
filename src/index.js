import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import MapboxClient from 'mapbox';
import * as turfHelpers from '@turf/helpers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import Map from './Map';
import CloudIcon from '@material-ui/icons/Cloud';
import Grid from '@material-ui/core/Grid';
import MapIcon from '@material-ui/icons/Map';


mapboxgl.accessToken = 'pk.eyJ1IjoiYWlzaHdhcnktZzEyMyIsImEiOiJja21hMmlwa3kxbnNvMnFuNnN1YjRyNWp6In0.d-jFdGIO0venJyHn9uM9Fg';

class App extends React.Component {
  constructor (props) {
    super(props);



    this.state = {
      origin: [80.2707, 13.0827],
      des:[77.5946,12.9716],
      destination: [],
      mapboxClient: new MapboxClient(mapboxgl.accessToken),
      intermediate:{
        place:'',
        temp:0,
        icon:false,
      },
      weather:{
        starttemp:0,
        endtemp:0,
      }
    }

    this.onMapLoad = this.onMapLoad.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  getstartWeatherDeatils(lat, lon, lat1, lon1) {
    const Apikey="44f2e0222cafae724c2b6a53cacee4b3";
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+Apikey)
      .then(response => {
          console.log("Response: ",response);
          const t = Math.floor(response.data.main.temp - 273.15);
          //this.setState({weather:{starttemp:t,endtemp:this.state.endtemp}});
          axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat1+'&lon='+lon1+'&appid='+Apikey)
            .then(response => {
                console.log("Response: ",response);
                const tt = Math.floor(response.data.main.temp - 273.15);
                this.setState({weather:{starttemp:t,endtemp:tt}})
            })
            .catch(error =>{console.log(error)});
      })
      .catch(error =>{console.log(error)});
  }
  getendWeatherDeatils(lat, lon) {
    const Apikey="44f2e0222cafae724c2b6a53cacee4b3";
    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+Apikey)
      .then(response => {
          console.log("Response: ",response);
          const t = Math.floor(response.data.main.temp - 273.15);
          this.setState({weather:{starttemp:this.state.starttemp,endtemp:t}})
      })
      .catch(error =>{console.log(error)});
  }

  onMapLoad () {
    this._map.addSource('origin-source', {
      type: 'Point',
      coordinates: this.state.origin,
    });
    this._map.addSource('origin-source-des', {
      type: 'Point',
      coordinates: this.state.des,
    });

    this._map.addLayer({
      id: 'origin-layer',
      type: 'circle',
      source: 'origin-source',
      paint: {
        'circle-radius': 10,
        'circle-color': 'blue',
        'circle-stroke-width': 2,
        'circle-stroke-color': 'white',
      },
    });
    this._map.addLayer({
      id: 'origin-layer-des',
      type: 'circle',
      source: 'origin-source-des',
      paint: {
        'circle-radius': 10,
        'circle-color': 'green',
        'circle-stroke-width': 2,
        'circle-stroke-color': 'white',
      },
    });
  }

  onMapClick (e) {
    console.log(")_)_)_)_)_)_)_)_)_");
    const Apikey="44f2e0222cafae724c2b6a53cacee4b3";
    const dest = [e.lngLat.lng, e.lngLat.lat];
    const ooty = [12.9716,77.5946];

    axios.get('https://api.openweathermap.org/data/2.5/weather?lat='+e.lngLat.lng+'&lon='+e.lngLat.lat+'&appid='+Apikey)
      .then(response => {
          console.log("Response_+_+_+_+_+_+_+_+_+: ",response);
          this.setState({intermediate:{icon:true,place:response.data.name,temp:Math.floor(response.data.main.temp - 273.15)}})
      })
      .catch(error =>{console.log(error)});

    if (!this.state.destination.length) {
      this._map.addSource('destination-source', turfHelpers.point(dest));
      this._map.addSource('destination-source1', turfHelpers.point(ooty));
      this._map.addSource('directions-source', turfHelpers.lineString([[0,0], [0, 0]]));

      this._map.addLayer({
        id: 'destination-layer',
        type: 'circle',
        source: 'destination-source',
        paint: {
          'circle-radius': 10,
          'circle-color': 'red',
          'circle-stroke-width': 2,
          'circle-stroke-color': 'white',
        },
      });

      this._map.addLayer({
        id: 'directions-layer',
        type: 'line',
        source: 'directions-source',
        paint: {
          'line-width': 2,
          'line-color': 'black',
        }
      }, 'origin-layer');

    } else {
      this._map.updateSource('destination-source', turfHelpers.point(dest));
    }

    this.getDirections(dest);
    this.setState({ destination: dest });
  }

  async getDirections (dest) {
    try {
      const r = await this.state.mapboxClient.getDirections([
        { latitude: this.state.origin[1], longitude: this.state.origin[0] },
        { latitude: dest[1], longitude: dest[0] },
      ], { profile: 'driving', alternatives: false });
      this._map.updateSource('directions-source', r.entity.routes[0].geometry);


      const res = await this.state.mapboxClient.getDirections([
         { latitude: this.state.origin[1], longitude: this.state.origin[0] },
         { latitude: dest[1], longitude: dest[0] },
         { latitude: 12.9716, longitude: 77.5946 }
        ], { profile: 'driving', alternatives: false });
      this._map.updateSource('directions-source', res.entity.routes[0].geometry);
    } catch (e) {
      console.log(e);
    }
    return Promise.resolve();
  }

  componentDidMount(){
    this.getstartWeatherDeatils(13.114656,80.089645,11.4102, 76.6950);
  }


  render () {
    return (
      <div id="app-content">
        <div style={{height: '120px'}}>
        <Grid container spacing={3}>
          <Grid item xs={3} style={{textAlign:'center', color:"purple"}}>
            <MapIcon style={{fontSize:'40px'}} />
            <h2 style={{marginTop:'0px !important'}}>AAA Routes</h2>
          </Grid>
          <Grid item xs={3} style={{textAlign:'left'}}>
            <h2>Chennai</h2>
            <div>
              <p style={{display:'inline', marginLeft: '5px',marginRight:'5px'}}><CloudIcon /></p>
              <h2 style={{display:'inline'}}>{this.state.weather.starttemp}</h2>
            </div>
          </Grid>
          <Grid item xs={3} style={{textAlign:'left'}}>
            <h2>{this.state.intermediate.place}</h2>
            <div>
              <p style={{display:'inline', marginLeft: '5px',marginRight:'5px'}}>{this.state.intermediate.icon&&<CloudIcon />}</p>
              <h2 style={{display:'inline'}}>{this.state.intermediate.temp !==0 && this.state.intermediate.temp}</h2>
            </div>
          </Grid>
          <Grid item xs={3} style={{textAlign:'left'}}>
            <h2>Bangalore</h2>
            <div>
              <p style={{display:'inline', marginLeft: '5px',marginRight:'5px'}}><CloudIcon /></p>
              <h2 style={{display:'inline'}}>{this.state.weather.endtemp}</h2>
            </div>
          </Grid>
        </Grid>
        </div>
        <Map
          id='map-example'
          ref={c => this._map = c}
          center={this.state.origin}
          onLoad={this.onMapLoad}
          onClick={this.onMapClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
