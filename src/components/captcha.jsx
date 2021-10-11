import React from 'react';
import Controls from './controls';
import HeaderText from './headerText';
import Image from './image';

class Captcha extends React.Component {
  state = { angle: 135 };

  getAngle = function () {
    const randomQuadrant = Math.floor(Math.random() * 8);
    return randomQuadrant === 0 ? 135 : randomQuadrant * 45;
  }

  componentDidMount() {
    const angle = this.getAngle();
    this.setState({ angle });
  }

  handleClockwise = () => {
    let { angle } = this.state;
    angle += 45;
    angle %= 360;
    this.setState({ angle });
  };

  handleAntiClockwise = () => {
    let { angle } = this.state;
    angle -= 45;
    angle %= 360;
    this.setState({ angle });
  };

  handleSubmit = e => {
    e.preventDefault();
    window.location = '/';
  };

  render() {
    const { angle } = this.state;
    return <form className="text-center captcha-form">
      <HeaderText />
      <Image angle={angle} />
      <Controls
        onClockwise={this.handleClockwise}
        onAntiClockwise={this.handleAntiClockwise}
      />
      <button type="submit" className="w-100 btn btn-lg btn-primary" disabled={angle} >Done</button>
    </form>;
  }
}

export default Captcha;