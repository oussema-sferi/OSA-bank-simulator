import React from 'react';
import './Signup2.css';

const Theme = {
  color: 'rgba(255, 255, 255, 0.8)',
  bg: '#34495e',
  font: 'Anton',
};

const styles = {
  body: {
    background: Theme.bg,
  },
  center: {
    textAlign: 'center',
  },
  text: {
    color: Theme.color,
    fontFamily: Theme.font,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    textAlign: 'center',
    margin: 5,
    background: Theme.bg,
    border: 'solid 4px rgba(255, 255, 255, 0.8)',
    width: '75vw',
    maxWidth: '540px',
  },
  rounded: {
    borderRadius: '25px',
  },
  underlined: {
    border: 'none',
    borderBottom: 'solid 4px rgba(255, 255, 255, 0.8)',
  },
  blurred: {
    position: 'relative',
    top: 45,
    left: 10,
    fontSize: 20,
  },
  focused: {
    position: 'relative',
    top: 0,
    left: 10,
    fontSize: 12,
  },
  transition: {
    transition: 'all .35s ease-in-out',
  },
};

const Button = (props) => {
  return (
    <button style={{ ...props.style, 'background:active': '#333' }}>
      {props.text}
    </button>
  );
};

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  onFocus = () => {
    this.setState({ isFocused: true });
  };

  onBlur = () => {
    this.setState({ isFocused: false });
  };

  render() {
    let { isFocused } = this.state;
    let focus = isFocused
      ? styles.focused
      : this.props.value
      ? styles.focused
      : styles.blurred;

    //= !this.state.isFocused ? styles.blurred : !this.props.value && !this.state.isFocused ? styles.blurred: styles.focused;
    return (
      <div>
        <label
          htmlFor={this.props.name}
          style={{ ...this.props.labelStyle, ...focus, ...styles.transition }}
        >
          {this.props.name.toUpperCase()}
        </label>
        <br />
        <input
          style={this.props.style}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.updateInput}
          type={this.props.type}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  updateInput = (e) => this.setState({ [e.target.name]: e.target.value });

  componentDidMount() {
    document.body.style.background = styles.body.background;
  }

  render() {
    const inputStyles = { ...styles.input, ...styles.text, fontSize: 24 };
    return (
      <form style={styles.form}>
        <Input
          style={{ ...inputStyles, ...styles.underlined }}
          labelStyle={styles.text}
          name="email"
          value={this.state.email}
          updateInput={this.updateInput}
        />
        <Input
          style={{ ...inputStyles, ...styles.underlined }}
          labelStyle={styles.text}
          name="password"
          type="password"
          value={this.state.password}
          updateInput={this.updateInput}
        />
        <Input
          style={{ ...inputStyles, ...styles.underlined }}
          labelStyle={styles.text}
          name="confirm password"
          type="password"
          value={this.state.confirmPassword}
          updateInput={this.updateInput}
          secure
        />
        <Button
          style={{ ...inputStyles, ...styles.rounded, background: '#27ae60' }}
          text="Submit"
        />
      </form>
    );
  }
}

const OurTeam = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.center, ...styles.text }}>SIGN UP</h1>
      <Form />
    </div>
  );
};

export default OurTeam;
