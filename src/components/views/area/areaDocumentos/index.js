var React = require('react');
var WpApi = require('wp/api');
var Link = require('react-router-dom').Link;
var FontAwesome = require('react-fontawesome');
var Cargando = require('utils/cargando');
require('./styles.less')

class AreaDocumentos extends React.Component {

  constructor(props){
      super(props);
      this.state  = {
        documentos:null
      }
      this.getDocumentos = this.getDocumentos.bind(this);
  }

  componentDidMount(){
      this.getDocumentos();
  }

  getDocumentos(){
    this.setState(function(){
      return {
        documentos:null
      }
    });
    WpApi.getDocumentos(this.props.type)
      .then(function(documentos) {
        this.setState(function () {
          return {
            documentos: documentos
          }
        });
      }.bind(this));
  }

  render() {
    return (
      <section id='documentos'>
        {!this.state.documentos
          ?
          <Cargando />
          :
          <ul className='documentos-list'>
          {
            this.state.documentos.map(function (item, index) {
              return (
                <li key={index} >
                  <div className='titulo'>{item.titulo}</div>
                  <div className='descripcion'>{item.descripcion}</div>
                  <div className='archivo'>
                    <Link to={item.archivo}><FontAwesome name='download' /></Link>
                  </div>
                </li>
              )
            }.bind(this))
          }
          </ul>
        }
      </section>
    )
  }
}

module.exports = AreaDocumentos;
