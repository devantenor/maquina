import React, {Component} from 'react';
import Typist from 'react-typist';

export default class MyComponent extends Component {

    render() {
      return (
       <div id="id">
           <h1>
           <Typist>
           <span> primeiramente gostaria de dizer que foi um pouco estressante ser um "romantico-nerd" MAS... </span>
           <Typist.Backspace count={92} delay={1500} />
           <span> sabe que ate vale a pena, sei lá é bonitinho aprender as coisas e ainda ganhar uns pontinhos com a quase namorada </span>
           <Typist.Backspace count={114} delay={1500} />
           <span>no fim eu sou pica!</span>
           <Typist.Backspace count={19} delay={1500} />
           <span>deixo meus sinceros sentimentos</span>
           <br/>
           <span>EU TE AMOO TANTOOOO!! TAYNARA S2!!</span>
           </Typist>
           </h1>
       </div>
      );
    }
   }