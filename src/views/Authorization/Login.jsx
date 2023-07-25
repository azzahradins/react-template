import { Component } from "react";
import LoginData from "../../components/Authorization/LoginData";

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  onSubmit = async (values) => {
    console.log(values, 'success login');
  }

  render() {
    return (<LoginData onSubmit={this.onSubmit}/>);
  }
}

export default Login;