import React from 'react';
import './App.css';

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

var ResumeContent = React.createClass({
  render: function() {
    return (
      <a href='./resume/Dan_Shapiro_Resume.pdf' download>Download</a>
    );
  }
});

//APP START- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var App = React.createClass({
  render: function() {
    return (
      <div>
        <Tabs selected={0}>
          <Pane title="Home">
            <div>
              <p>This is my Home content!</p>
            </div>
          </Pane>
          <Pane title="Academic">
            <div>
              <p>This is my Academic content!</p>
            </div>
          </Pane>
          <Pane title="Personal">
            <div>
              <p>This is my Personal content!</p>
            </div>
          </Pane>
          <Pane title="Resume">
            <div>
              <p>This is my Resume content!</p>
              <ResumeContent />
            </div>
          </Pane>
        </Tabs>
      </div>
    );
  }
});
//APP END- - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default App;
