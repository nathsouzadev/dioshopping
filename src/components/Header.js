import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';

const Header = () => {
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3'>
                Dio Shopping
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
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
    )
}

export default Header;
