import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

function InputText(props) {
  return(
    <div> 
      <TextField placeholder={props.type} type={props.type}/>
    </div>
  )
    
}

function LoginGrid (props) {
  return (
    <div>
      <Grid container spacing={24}>
  
        <Grid item xs={6} sm={3}>
        </Grid>

        <Grid item xs={6} sm={3}>
          <InputText type='text' />
        </Grid>

  
        <Grid item xs={6} sm={3}>
        </Grid>

        <Grid item xs={6} sm={3}>
          <InputText type='password' />
        </Grid>

      </Grid>
    </div>
  )
}


{/* 
      <Grid container spacing={12}>
        <Grid item xs>
        </Grid>
        <Grid item xs={8} >
          <InputText type='text' txt='ussernamee'/> 
        </Grid>
        <Grid item xs>
        </Grid>s
      </Grid>
      
      <Grid container spacing={12}>
        <Grid item xs>
        </Grid>
        <Grid item xs={6}>
          <TextField type="password" txt='paasswrrd'/>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid> 
    </div>
  )
  */}


class Login extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
    <div>
      <LoginGrid />
    </div>
)
  }
}


export default Login;