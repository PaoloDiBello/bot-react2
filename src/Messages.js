import React from 'react';
import Chat from './chat.json';
import './Messages.css';
import { TransitionGroup } from 'react-transition-group' // ES6

class Messages extends React.Component {
 constructor(props) {
  super(props);
   this.state = {
   input:'',
   chat:Chat,
  };
 } 

    handleClick(event) {
    let newObj= [...this.state.chat];
    let current_time = new Date(); // for now
    let time=current_time.getHours()+":"+(current_time.getMinutes()<10?'0':'')+current_time.getMinutes();
    let milliseconds=current_time.getMilliseconds();
    this.setState({ input: '' });  
    /*when the message is not only spaces*/
    newObj.push({"id":"human","text":this.state.input,"time":time,"milliseconds":milliseconds});
    this.setState({chat: newObj});  

  }

  handleChange(event) {
  this.setState({ input: event.target.value });
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
  this.handleClick()
    }
  }

scrollToBottom = () => {
  this.messagesEnd.scrollIntoView({ behavior: "smooth" });
}

componentDidMount() {
  this.scrollToBottom();
}

componentDidUpdate() {
  this.scrollToBottom();
}

  render() {
    const deg=45;
  const style_1 = { 
        transform: `rotate(${deg}deg)`
    };

  let items=Object.keys(this.state.chat).map((key, i) => {
  let current_time = new Date(); // for now
  let key_each=this.state.chat[key].text+this.state.chat[key].time+this.state.chat[key].milliseconds;
  let time=current_time.getHours()+":"+(current_time.getMinutes()<10?'0':'')+current_time.getMinutes();

//  console.log(key_each);
  return ( 
    <div key={key_each}>
    {this.state.chat[key].id==="human"? 
    (<div>
    <div className="from-me">
      <p>{this.state.chat[key].text}
  <span className="metadata">
  <span className="time">{this.state.chat[key].time===time?"just now":this.state.chat[key].time}</span>
  </span>
  </p>

    </div>
    </div>):
    (<div key={key_each}>
    <div className="from-them">
      <p>{this.state.chat[key].text}
      <span className="metadata">
  <span className="time">{this.state.chat[key].time===time?"just now":this.state.chat[key].time}</span>
  </span>
  </p>
    </div>
    </div>)} 
    </div>
    );
});
    return (

<div className="Messages">


          <section>

                  <TransitionGroup enter>
                    {items}
                 </TransitionGroup>

        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>


          </section>

           <div className="input-group">
                    <input type="text" className="form-control" value={this.state.input} onChange={this.handleChange.bind(this)} onKeyPress={this._handleKeyPress} placeholder="Type Something..."/>
                    <span className="input-group-addon" onClick={this.handleClick.bind(this)}><i className="fas fa-location-arrow" style={style_1}></i></span>
                </div>
        </div>

   );
  }
}
  export default Messages;
 
 