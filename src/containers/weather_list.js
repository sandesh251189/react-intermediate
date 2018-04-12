import React ,{Component} from 'react';
import {connect} from 'react-redux';

import ChartComponent from '../components/chart'
class WeatherList extends Component{
renderWeather(cityData){
const temps=cityData.list.map(weather => weather.main.temp);
const pressure=cityData.list.map(weather => weather.main.pressure);
const humidty=cityData.list.map(weather => weather.main.humidity);
console.log(cityData)
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
        <ChartComponent color="red" data={temps} />
        </td>
        <td>
        <ChartComponent color="blue" data={pressure} />
        </td>
        <td>
        <ChartComponent color="green" data={humidty } />
        </td>
      </tr>
    )
}
  render(){
    return(
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidty</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}

        </tbody>
      </table>
    )
  }


}
function mapStateToProps(state){
  return{
    weather:state.weather
  }
console.log("hi")
}


export default connect(mapStateToProps)(WeatherList)
