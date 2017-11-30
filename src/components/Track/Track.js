import React from 'react';
import './Track.css';

function renderAction(props) {
  if(props.isRemoval)
    return `-`;
  else
    return `+`;
}

class Track extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isRemoval: true};
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.title}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action">
          <renderAction isRemoval={this.state.isRemoval} />
        </a>
      </div>
    );
  }
}

export default Track;
