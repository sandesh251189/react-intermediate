import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={
      term:''
    }
    this.onTermChange=this.onTermChange.bind(this);
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
  }
  onTermChange(e){
    this.setState({
          term:e.target.value
        })
  }
  onSubmitHandler(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({
      term:''
    })
  }
  render(){
    return(

      <form onSubmit={this.onSubmitHandler} className="input-group">
      <input
       className="form-control"
       placeholder="Search Your city"
       value={this.state.term}
       onChange={this.onTermChange}
       />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Search</button>
      </span>

      </form>

    )
  }
}
function mapDispachToProps(dispach){
    return bindActionCreators({fetchWeather},dispach)
}
export default connect(null,mapDispachToProps)(SearchBar);
