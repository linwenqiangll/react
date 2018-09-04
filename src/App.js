import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBox from './components/SearchBox';
import Todolist from './components/Todolist';
import {Provider} from "./context";

class App extends Component {
  constructor(){
    super()
    this.state={
      inputValue:"",
      todolist:[
        {
          id:Math.random().toString(),
          text:"吃饭"
        },
        {
          id:Math.random().toString(),
          text:"睡觉"
        }
      ]
    }  
  }
  addList=(text)=>{
    const todolist = this.state.todolist.slice();
    todolist.push({
      id:Math.random().toString(),
      text
    })
    this.setState({
      inputValue: '',
      todolist
    })
  }
  onItemClick= (id) => {
    // 复制state里的todoList
    const todoList = [...this.state.todoList];
    // 根据传过来的id判断是否要修改isCompleted
    const newTodoList = todoList.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item;
    })
    this.setState({
      todoList: newTodoList
    })
  
  render(){
    return (
      <Provider value={{
        onItemClick: this.onItemClick
      }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>

        <SearchBox
          onSearch={this.addList}
        />
          
        <Todolist
          todolist={this.state.todolist}      
        />
        </div>
      </Provider>
    );
  }
}

export default App;
