import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ name, price, image, children }) => {
    const classes = useStyles();

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="140px" src={image} alt={name}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography variant='subtitle1'>
                        R$ {price}
                    </Typography>
                    </Grid>
                <Button variant="contained">Adicionar</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
