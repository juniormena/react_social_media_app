import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Scream from '../components/Scream';

let api='https://europe-west1-socialape-d081e.cloudfunctions.net/api'
class Home extends Component {
  state={
    screams:null
  }
  componentDidMount(){
    axios.get(`${api}/screams`).then(res=>{
      this.setState({
        screams:res.data
      })
      console.log(this.state.screams)
    }).catch(err => console.log(err))
  }
  render() {
    let recentScreamsMarkup = this.state.screams ? (
      this.state.screams.map(scream=><Scream key={scream.screamId} scream={scream}></Scream>)
    ) : <p>Loading...</p>
    return (
      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          {recentScreamsMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
        <p>....profile</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;