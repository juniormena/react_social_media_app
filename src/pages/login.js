import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppIcon from './favicon.ico';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import {Link} from 'react-router-dom';

const styles={
    form:{
        textAlign: 'center'
    },
    image:{
        margin: '20px auto 20px auto'
    },
    pageTitle:{
        margin: '10px auto 10px auto'
    },
    textField:{
        margin:'10px auto 10px auto'
    },
    button:{
        marginTop:20,
        position:'relative'
    },
    customError:{
        color:'red',
        fontSize:'0.8rem',
        marginTop:10
    },
    progress:{
        position:'absolute'
    }
}

let api='https://europe-west1-socialape-d081e.cloudfunctions.net/api'

class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            loading:false,
            errors:{}
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            loading:true
        });
        const userData = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post(`${api}/login`,userData)
        .then(res=>{
            console.log(res.data);
            this.setState({
                loading:false
            });
            this.props.history.push('/')
        })
        .catch((err)=> {
            this.setState({
                errors: err.response.data,
                loading:false
            })
        })
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {
        const {classes } = this.props;
        const { errors, loading} = this.state;
        return (
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid item sm>
                    <img src={AppIcon} alt="Media" className={classes.image}/>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField id="email" type="email" name="email" label="Email" className={classes.textField}
                        value={this.state.email} onChange={this.handleChange} fullWidth helperText={errors.email} error={errors.email ? true: false}/>

                        <TextField id="password" type="password" name="password" label="Password" className={classes.textField}
                        value={this.state.password} onChange={this.handleChange} fullWidth helperText={errors.password} error={errors.password ? true: false}/>
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={loading}>
                            Login
                            {loading && (
                                <CircularProgress size={30} className={classes.progress}></CircularProgress>
                            )}
                        </Button>
                        <br/>
                        <small>Do not have an account? sign up <Link to="/signup">Here</Link></small>
                    </form>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
        )
    }
}

Login.propTypes = {
    classes:PropTypes.object.isRequired
}

export default withStyles(styles)(Login);