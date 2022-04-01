import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      isDisable: true,
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value },
    this.validationBtn);

  validationBtn = () => {
    const { email, password } = this.state;
    const magicNumber = 5;
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // https://stackoverflow.com/questions/18371339/how-to-retrieve-name-from-email-address //;
    return (
      // /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      validEmail.test(email)
      && password.length > magicNumber
        ? this.setState({ isDisable: false })
        : this.setState({ isDisable: true })
    );
  }

  handleClick = () => {
    const { history, saveData } = this.props;
    const { email } = this.state;
    history.push('/carteira');
    saveData(email);
  }

  // handleClick = () => <Link to="./carteira" />;

  render() {
    const { isDisable, email, password } = this.state;
    return (
      <div>
        <form className="login-form">
          <input
            value={ email }
            name="email"
            type="email"
            placeholder="usuario@email.com"
            data-testid="email-input"
            className="input-box"
            onChange={ this.handleChange }
          />
          <input
            value={ password }
            name="password"
            type="password"
            placeholder="senha"
            data-testid="password-input"
            className="input-box"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ isDisable }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
        Login aqui?
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveData: (data) => dispatch(saveEmail(data)),
});

Login.propTypes = {
  saveData: PropTypes.func,
  hystory: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
