import React from 'react';

class Image extends React.Component {
  render() {
    const style = {
      transform: `rotate(${this.props.angle}deg)`,
      borderRadius: '50%'
    };

    const captcha_image = "https://images.pexels.com/photos/1809127/pexels-photo-1809127.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=150&w=150";

    return <React.Fragment>
      <div className="form-floating">
        <img
          src={captcha_image}
          className="img-thumbnail my-2"
          style={style}
          alt="a cup"
        />
      </div>
    </React.Fragment >;
  }
}

export default Image;