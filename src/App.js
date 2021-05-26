import { Container, Paper, Grid, Typography, Button, TextField, List, ListItem, ListItemText, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '5px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
  },
}));

const App = () => {
  const classes = useStyles();

  return(
    <Container maxWidth="xl">
      <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
        <Typography variant='h3'>
          Dio Shopping
        </Typography>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#CartModal">
          <span><i className="fas fa-shopping-cart"></i></span>
          <span className="badge rounded-pill bg-info text-dark">3</span>
        </button>

        {/* Modal */}
        <div class="modal fade" id="CartModal" tabindex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
              <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Produto</th>
                      <th scope="col">Qtd</th>
                      <th scope="col">Preço</th>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th><button className="badge bg-danger"><i className="fas fa-window-close"></i></button></th>
                      <th><img className="img-fluid img-thumbnail" src="./images/produtos/fla.jpg" alt="Flamengo 2020" width="50px"/></th>
                      <th><span className="badge badge-pill bg-warning">2</span></th>
                      <th>R$ 100.00</th>
                      <th><button className="badge badge-pill bg-primary"><i className="fas fa-plus"></i></button></th>
                      <th><button className="badge badge-pill bg-danger"><i className="fas fa-minus"></i></button></th>
                      <th>R$ 200.00</th>
                    </tr>
                    <tr>
                      <th colSpan="2" scope="col">Total</th>
                      <th colSpan="3">2 itens</th>
                      <th colSpan="2">R$ 200.00</th>
                    </tr>
                  </tbody>
                </table>
                </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h5'>
              Categorias
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Times nacionais"
                  secondary="3"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Times internacionais"
                  secondary="3"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Times históricos"
                  secondary="3"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid container xs={9} spacing={3} className={classes.root}>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Grid container direction='column'>
                <Grid item>
                  <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                  <Typography variant='h6'>
                    Produto
                  </Typography>
                  <Typography variant='subtitle1'>
                    R$ 99.00
                  </Typography>
                </Grid>
              <Button variant="contained">Adicionar</Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Grid container direction='column'>
                <Grid item>
                  <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                  <Typography variant='h6'>
                    Produto
                  </Typography>
                  <Typography variant='subtitle1'>
                    R$ 99.00
                  </Typography>
                </Grid>
              <Button variant="contained">Adicionar</Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Grid container direction='column'>
                <Grid item>
                  <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                  <Typography variant='h6'>
                    Produto
                  </Typography>
                  <Typography variant='subtitle1'>
                    R$ 99.00
                  </Typography>
                </Grid>
              <Button variant="contained">Adicionar</Button>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <Grid container direction='column'>
                <Grid item>
                  <img width="140px" src="./images/produtos/fla.jpg" alt="Flamengo 2020"/>
                  <Typography variant='h6'>
                    Produto
                  </Typography>
                  <Typography variant='subtitle1'>
                    R$ 99.00
                  </Typography>
                </Grid>
              <Button variant="contained">Adicionar</Button>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" xs={12}>
        <TextField id="name" label="Name" fullWidth/>
        <TextField id="message" label="Message" fullWidth/>
      </Grid>
      <Button variant="contained" color="primary">
        Sent
      </Button>
    </Container>
  )
}

export default App;
