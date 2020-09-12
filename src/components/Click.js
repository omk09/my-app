import React, {useState} from 'react'; 

export default class Clock extends React.Component {

    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
      tick() {
        this.setState({
          date: new Date()
        });
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    render(){
       return (    
       <div><h1>hello Sam time is {this.state.date.toLocaleTimeString()}</h1></div>
       )
    }
}