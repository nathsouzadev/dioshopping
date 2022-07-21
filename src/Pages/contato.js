import { Grid, Button, TextField } from '@material-ui/core/';

const Contatos = () => {
  

    return(
        <>
            <Grid container direction="row" xs={12}>
                <TextField id="name" label="Name" fullWidth/>
                <TextField id="message" label="Message" fullWidth/>
            </Grid>

            <Button className="mt-2" variant="contained" color="primary">
                Sent
            </Button>
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Contatos;
