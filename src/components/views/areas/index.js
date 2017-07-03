var React = require('react');
var Link = require('react-router-dom').Link;
var Cargando = require('utils/cargando');
var WpApi = require('wp/api');
var NavLink = require('react-router-dom').NavLink;
require('./styles.less');

class Areas extends React.Component {

  constructor(props){
      super(props);
      this.state  = {
        areas:null
      }
      this.getAreas = this.getAreas.bind(this);
  }

  componentDidMount(){
      this.getAreas();
  }

  getAreas(){
    this.setState(function(){
      return {
        areas:null
      }
    });
    WpApi.getSitesList()
      .then(function(sites){
        this.setState(function(){
          return {
            areas:sites
          }
        });
      }.bind(this))
  }

  render(){
    return (
      <section id='home-areas' className='parallax-group'>
        {!this.state.areas
          ?
          <Cargando />
          :
          <ul className='areas-list' >
            <header>Areas</header>
            {
              this.state.areas.map(function(item,index){
                return (
                  <li key={item.blog_id}>
                    <NavLink to={item.path}>
                      {item.blog_name}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>
        }
      </section>
    )
  }
}

module.exports = Areas;
