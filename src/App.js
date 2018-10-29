import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Messages from "./Messages";
import img from './badge_blue2.png';
/*import imga from './imga.png';*/
import img2 from './eva_is_listenig.png'

class App extends Component {
  render() {
    return (
      <div className="App">
 <img src={img} className="circle" data-toggle="modal" data-target="#myModal2" alt="logo"/>    
 <iframe
        src="http://www.example.com" frameBorder="0" sandbox="allow-scripts allow-same-origin allow-presentation" title="iframe"></iframe>

    <div className="container demo">
 {/*

 /*}    
  
   
  {/*-- Modal --*/}
  <div className="modal right fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2" data-backdrop="false">
    <div className="modal-dialog" role="document">
      <div className="modal-content">

        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times-circle"></i></span></button>
             <img src={img2} alt="eva_modal"/>    
{/*

          <h4 className="modal-title text-center" id="myModalLabel2">
EVA is listening...
          </h4>

*/}  </div>

        <div className="modal-body" >
                <Messages/>          
      </div>{/* modal-content */}
    </div>{/* modal-dialog */}
  </div>{/* modal */}

       </div>
  </div>
       </div>

    );
  }
}

export default App;
