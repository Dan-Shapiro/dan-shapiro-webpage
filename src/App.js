import React from 'react';
import Linkedin from 'react-icons/lib/fa/linkedin-square';
import Github from 'react-icons/lib/fa/github-square';
import './App.css';
var headshot = require('./images/photo2.png');

var SocialMedia = React.createClass({
  render: function() {
    return (
      <div className="social-media">
        <a className="icon" href="https://www.linkedin.com/in/dan-shapiro-102b85a3">
          <Linkedin size={48} />
        </a>
        <a className="icon" href="https://github.com/Shappp">
          <Github size={48} />
        </a>
      </div>
    );
  }
});

var Header = React.createClass({
  render: function() {
    var divImage = {
      backgroundImage: 'url(' + headshot + ')',
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'none'
    };

    return(
      <div className='header' id="header">
        <div className="info" style={divImage}>
          <h1>Dan Shapiro</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <SocialMedia />
        </div>
      </div>
    );
  }
});

//TABS START - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var Pane = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

var Tabs = React.createClass({
  getDefaultProps: function() {
    return {
      selected: 0
    };
  },

  getInitialState: function() {
    return {
      selected: this.props.selected
    };
  },

  handleClick: function(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },

  createTitles: function() {
    function titles(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        <li key={index}>
          <a href='#' className={activeClass} onClick={this.handleClick.bind(this, index)}>
            {child.props.title}
          </a>
        </li>
      );
    }
    return (
      <ul className='tabs-titles'>
        {this.props.children.map(titles.bind(this))}
      </ul>
    );
  },

  createContent: function() {
    return (
      <div className='tabs-content'>
        {this.props.children[this.state.selected]}
      </div>
    );
  },

  render: function() {
    return (
      <div className='tabs'>
        {this.createTitles()}
        {this.createContent()}
      </div>
    );
  }
});
//TABS END- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//CONTENT START - - - - - - - - - - - - - - - - - - - - - - - - - -
var HomeContent = React.createClass({
  render: function() {
    return (
      <div className="content">
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
        <p>This is my Home content!</p>
      </div>
    );
  }
});

var BioContent = React.createClass({
  render: function() {
    return (
      <div className="content">
        <p>This is my Bio content!</p>
      </div>
    );
  }
});

var AcademicContent = React.createClass({
  render: function() {
    return (
      <div className="content">
        <p>This is my Academic content!</p>
      </div>
    );
  }
});

var ResumeContent = React.createClass({
  render: function() {
    return (
      <div className="content">
        <p>This is my Resume content!</p>
        <a href='https://drive.google.com/uc?export=download&id=0B27Eys614E94T0g0OHJBM2dmeG8' download="Dan_Shapiro_Resume">Download</a>
      </div>
    );
  }
});
//CONTENT END - - - - - - - - - - - - - - - - - - - - - - - - - -

//FOOTER START - - - - - - - - - - - - - - - - - - - - - - - - - -
var Footer = React.createClass({
  render: function() {
    return (
      <div className="footer">
        <h4>DAN SHAPIRO</h4>
      </div>
    );
  }
});
//FOOTER END - - - - - - - - - - - - - - - - - - - - - - - - - - -

//APP START- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Tabs selected={0}>
          <Pane title="Home">
            <HomeContent />
          </Pane>
          <Pane title="Bio">
            <BioContent />
          </Pane>
          <Pane title="Academic">
            <AcademicContent />
          </Pane>
          <Pane title="Resume">
            <ResumeContent />
          </Pane>
        </Tabs>
      </div>
    );
  }
});
//APP END- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default App;
