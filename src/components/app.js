var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var historyCreator = require('history');
var Piwik = require('./utils/piwik');

var history = historyCreator.createBrowserHistory();

var Menu = require('./views/menu');
var Header = require('./views/header');
var Novedades = require('./views/novedades');
var NotFound = require('./utils/notfound');
var FormContacto = require('./views/formContacto');
var Area = require('./views/area');
var Areas = require('./views/areas');
var OpcionesInicio = require('./views/opcionesInicio');
var Info = require('./views/info');
var CargandoTop = require('./utils/cargandoTop');

require('./app.less');

class App extends React.Component {

  constructor(props){
   super(props);
   this.state = {
     menuOpen: false,
     loading: true
   }

   this.openMenu = this.openMenu.bind(this);
   this.closeMenu = this.closeMenu.bind(this);
   this.endLoading = this.endLoading.bind(this);
  }

  endLoading(){
    this.setState(function(){
      return {loading: false}
    })
  }

  openMenu(e){
    e.preventDefault();
    this.setState({
      menuOpen: true
    })
  }

  closeMenu(e){
    e.preventDefault();
    this.setState({
      menuOpen: false
    })
  }

  render() {
    return (
      <Router history={Piwik.connectToHistory(history)}>
        <div className='main'>
          <CargandoTop show={this.state.loading} />
          <Menu open={this.state.menuOpen} closeMenu={this.closeMenu} />
          <Header openMenu={this.openMenu} />
          <OpcionesInicio />
          <Areas />
          <div id='main-wrapper'>
            <Switch>
                <Route exact path='/' render={ function(props) { return ( <Novedades {...props} show={this.endLoading} /> ) }.bind(this) } />
                <Route exact path='/contacto' render={ function(props) { return ( <FormContacto {...props} show={this.endLoading} /> ) }.bind(this) } />
                <Route path='/:site_name' render={ function(props) { return ( <Area {...props} show={this.endLoading} /> ) }.bind(this) } />
                <Route component={NotFound} />
            </Switch>
          </div>
          <Info />
        </div>
      </Router>
    )
  }
}

module.exports = App;
