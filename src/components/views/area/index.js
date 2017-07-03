var React = require('react');
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var WpApi = require('wp/api');
var WpMenu = require('wp/menu');
var AreaNovedades = require('./areaNovedades')
var AreaSection = require('./areaSection');
var AreaPost = require('./areaPost');
var AreaDocumentos = require('./areaDocumentos');
var RootArchive = require('./rootArchive');
var RootPost = require('./rootPost');
var Cargando = require('utils/cargando');
require('./styles.less');

class Area extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      site: null,
      root: false
    }
    this.getSite = this.getSite.bind(this);
  }

  componentDidMount(){
    this.getSite();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.location.pathname != this.props.location.pathname) {
      this.getSite(nextProps.match.params.site_name);
    }
  }

  getSite(site_name = null){
    this.setState(function(){
      return {
        site:null,
        root:false
      }
    });

    var opts = {
      name: this.props.match.params.site_name,
    }

    if(site_name){
      opts.name = site_name;
    }

    WpApi.getSite(opts)
      .then(function(site){
        setTimeout(function(){this.props.show()}.bind(this), 2000);
        this.setState(function(){
          return {
            site:site
          }
        })
      }.bind(this))
  }

  render() {

    var extraItemsMenu = [
      {
        title: 'Documentos',
        url: this.props.match.url+'/documentos'
      }
    ]

    return(
      <section id='area'>
        {!this.state.site
          ?
          <div className='no-area'>
            {!this.state.root
              ?
                <Cargando />
              :
                <div className='root-content'>
                  <Route exact path={this.props.match.url} render={ function(props) { return ( <RootArchive {...props} type={this.props.match.params.site_name} /> ) }.bind(this) } />
                  <Route exact path={this.props.match.url+'/:slug'} render={ function(props) { return ( <RootPost {...props} type={this.props.match.params.site_name} /> ) }.bind(this) } />
                </div>
            }
          </div>
          :
          <div className='area-wrapper'>
            <header>
              <span>{this.state.site.blog_description}</span>
            </header>

            <WpMenu url={this.state.site.wpurl} location='main-menu-location' path={this.state.site.path} extraItems={extraItemsMenu} >
              <Cargando />
            </WpMenu>

            <div className='inner-content'>
              <Switch>
                <Route exact path={this.props.match.url} render={ function(props) { return ( <AreaNovedades {...props} site={this.state.site} /> ) }.bind(this) } />
                {/* Importante: si el tipo de dato es post, ":section" es el nombre de la categoría, sino, es el tipo de dato */}
                <Route exact path={this.props.match.url+'/documentos'} render={ function(props) { return ( <AreaDocumentos {...props} site={this.state.site} type={this.props.match.params.site_name} /> ) }.bind(this) } />
                <Route exact path={this.props.match.url+'/:section'} render={ function(props) { return ( <AreaSection {...props} site={this.state.site} /> ) }.bind(this) } />
                <Route exact path={this.props.match.url+'/:section/:slug'} render={ function(props) { return ( <AreaPost {...props} section={props.match.section} site={this.state.site} /> ) }.bind(this) } />
              </Switch>
            </div>
          </div>
        }
      </section>
    )
  }
}

module.exports = Area;
