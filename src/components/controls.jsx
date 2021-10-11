import React from 'react';

class Controls extends React.Component {
  render() {
    const { onClockwise, onAntiClockwise } = this.props;

    return <div className="d-grid d-md-block form-floating mt-3 mb-2">
      <button
        className="btn btn-dark mx-1"
        type="button"
        onClick={onAntiClockwise}>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button
        className="btn btn-dark mx-1"
        type="button"
        onClick={onClockwise}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
    </div>;
  }
}

export default Controls;