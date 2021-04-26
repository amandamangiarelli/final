import React from 'react';
import PropTypes from 'prop-types';

export default class Title extends React.Component {
  render(){
    return (
      <div className='wrapper'>
        <h1 className='title'>{this.props.title}</h1>
        <h3 className='title__creator'>{this.props.creator}</h3>
      </div>
    );
  }
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  creator: PropTypes.string.isRequired,
};
