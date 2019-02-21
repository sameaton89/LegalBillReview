import React, { Component } from 'react';
import BankNotes from "./img/banknotes.jpg";
import Coins from "./img/coins.jpg";
import Benji from "./img/Benji eye.jpg";
import {Parallax} from 'react-materialize';





export default class Main extends Component {

    render() {
        return(
//             <div>


// {/* <div id="index-banner" className="parallax-container">
// <div className="section no-pad-bot">
//   <div className="container">
//   <br /><br />
//   <h1 className="header center Black-text text-lighten-2">Legal Bill Review</h1>
//   <div className="row center">
// <h5 className="header col s12 light">Pending</h5>
// </div>
// <br /><br />

//   </div> */}
//   <Parallax imageSrc={BankNotes} alt="bank notes"/>



//  </div>
// <div className="container">
//     <div className="section">
//       <div className="row">
//         <div className="col s12 m4">
//           <div className="icon-block">
//             <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
//             <h5 className="center">Speeds up development</h5>

//             <p className="light"> EMPTY </p>
//           </div>
//         </div>
//     </div>
//     </div>
// </div>
// </div>
<div>
<div id="index-banner" className="parallax-container">
<div className="section no-pad-bot">
  <div className="container">
    <br /><br />
    <h1 className="header center Black-text text-lighten-2">Legal Bill Review</h1>
    <div className="row center">
      <h5 className="header col s12 light">Pending</h5>
    </div>

    <br /><br />

  </div>
</div>
<div className="parallax">  <Parallax imageSrc={BankNotes} alt="bank notes"/>
</div>
</div>
  <div className="container">
  <div className="section">

    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
          <h5 className="center">Speeds up development</h5>

          <p className="light"> EMPTY </p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">group</i></h2>
          <h5 className="center">User Experience Focused</h5>

          <p className="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
          <h5 className="center">Easy to work with</h5>

          <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
        </div>
      </div>
    </div>

  </div>
</div>


  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
           <div className="row center">

            <button data-target="modal1" className="btn modal-trigger">Sign In</button>
            
            </div>
               <div id="modal1" className="modal">
                <div className="modal-content">
                 <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                 <a href="modal" className="modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={Coins} alt="Unsplashed background img 2" /></div>
  </div>


  <div className="container">
    <div className="section">

      <div className="row">
        <div className="col s12 center">
          <h3><i className="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p className="left-align light"></p>
        </div>
      </div>

    </div>
  </div>
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot"><param name="" value="" />
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 light">Footer</h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={Benji} alt="Unsplashed background img 3" /></div>
  </div>
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text"></h5>
          <p className="grey-text text-lighten-4"></p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
            <li><a className="white-text" href="#!">Link 2</a></li>
            <li><a className="white-text" href="#!">Link 3</a></li>
            <li><a className="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>
</div>



        )
    }
}

