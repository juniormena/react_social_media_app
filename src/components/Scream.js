import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
const Link = require("react-router-dom").Link;

const styles = {
    cad:{
        display:'flex',
        marginBottom:20
    },
    image:{
        minWidth:200,
    },
    content:{
        padding:25,
        objectfit:'cover'
    }
}

class Scream extends Component{
    render(){
        dayjs.extend(relativeTime)
        const {classes, scream : {body,createAt,userImage,userHandle,screamId,likeCount,commentCount}} = this.props;
        return(
            <Card className={classes.card}>
                <CardMedia image={userImage} title="Profile Image" className={classes.image}/>
                    <CardContent className={classes.content}>
                    <Typography variant="h5" component={Link} to={`/users/${userHandle}`} color="primary">{userHandle}</Typography>
                    <Typography variant="body2" color="textSecondary">{dayjs(createAt).fromNow()}</Typography>
                    <Typography variant="body1" color="textSecondary">{body}</Typography>
                    </CardContent>  
            </Card>
        )
    }
}

export default withStyles(styles)(Scream);