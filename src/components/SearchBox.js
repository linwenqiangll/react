import React, { Component,Fragment } from 'react'

export default class SearchBox extends Component {
  constructor(props){
    super(props)
    this.state={
      inputVlue:''
    }
  }
  handleChange= (e) => {
    this.setState({
      inputValue:e.target.value
    })
  }
  handleAddlist=()=>{
    this.props.onSearch(this.state.inputValue)
    this.setState({
      inputValue:''
    })
  }
  render() {
    return (
      
      <Fragment>
        <input 
            type="text"
            value = {this.state.inputValue}
            onChange={this.handleChange}
            />
        <button onClick={this.handleAddlist}>添加</button>
        
            
      </Fragment>
      
    )
  }
}
