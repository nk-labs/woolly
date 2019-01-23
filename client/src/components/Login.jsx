import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function LoginGrid (props) {
  return (
    <div>
      <Grid container spacing={24}>
        
        <Grid item xs={6} sm={6}>
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField placeholder='username' type='text'  onChange={props.handleText} />
        </Grid>

        <Grid item xs={6} sm={3}>
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField placeholder='password' type='password'  onChange={props.handleText} />
        </Grid>

      </Grid>
    </div>
  )
}
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: '',
    }
  }


  handleText(e) {
    debugger
    this.setState({
      uname: e.target.value})
  }

  render() {
    debugger
    if (this.state.uname !== '') {
      debugger
    }
    return (
      <div>
        <LoginGrid handleText={this.handleText} />
      </div>
    )
  }


}




export default Login;