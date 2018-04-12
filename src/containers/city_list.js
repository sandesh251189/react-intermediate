import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CitiesList extends Component{
constructor(props){
  super(props);
    this.state={
      term:''

    }
     this.handleChange = this.handleChange.bind(this);

}
handleChange(event) {
  this.setState({value: event.target.value});

}
  renderCities(){
    return this.props.cities.map(city=>{
        return (
          <option value={city} key={city}>{city}</option>
        )
})
  }
  render(){
    return(
      <div>

      <select className="form-control" value={this.state.value} onChange={this.handleChange}>
            {this.renderCities()}
            </select>
            {this.state.value}

      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    cities:state.cities
  }
}
function mapDispachToProps(dispach){
  return bindActionCreators({fetchWeather},dispach)
}
export default connect(mapStateToProps)(CitiesList) ;
