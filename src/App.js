import React, { Component } from 'react';
import './App.css';
import USAMap from 'react-usa-map';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';


class App extends Component {
  state = {
    open: false,
  };

  mapHandler = (event) => {
      alert(event.target.dataset.name);
  };

   statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => alert('', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;

    return (
      <div className="App">
        <h1>HRVP Map Sample</h1>
        <USAMap customize={this.statesCustomConfig()} title='Click on a state for more information.' onClick={this.mapHandler} />
        <Button onClick={this.handleClickOpen}>Open responsive dialog</Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Exit
            </Button>
          </DialogActions>
        </Dialog>
        <p></p>
      </div>
    );
  }
}

App.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(App); 

