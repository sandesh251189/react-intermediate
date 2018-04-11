import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines ,SparklinesLine  } from 'react-sparklines';
import Chart from '../components/chart'
class WeatherList extends Component{
renderWeather(cityData){
const temps=cityData.list.map(weather => weather.main.temp);
console.log(cityData)
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
        <Sparklines data={temps}>
          <SparklinesLine color="blue" />
        </Sparklines>
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
