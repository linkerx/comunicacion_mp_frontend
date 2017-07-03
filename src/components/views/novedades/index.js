var React = require('react');
var Link = require('react-router-dom').Link;
var Cargando = require('utils/cargando');
var WpApi = require('wp/api');
var NovedadItem = require('./novedadItem');
var Funcs = require('utils/funcs');
require('./styles.less');

class Novedades extends React.Component {

  constructor(props){
      super(props);
      this.state  = {
        posts:null,
        loading:true
      }
      this.getPosts = this.getPosts.bind(this);
      this.endLoading = this.endLoading.bind(this);
  }

  componentDidMount(){
      this.getPosts();
  }

  getPosts(){
    this.setState(function(){
      return {
        posts:null
      }
    });
    WpApi.getSitesPosts()
      .then(function(posts){
        setTimeout(
          function(){
            this.props.show();
          }.bind(this), 3000);
        this.setState(function(){
          return {
            posts:posts
          }
        });
      }.bind(this))
  }

  endLoading(){
    /*
    if(Funcs.allImagesLoaded(this.refs.home_novedades)){
      this.props.show();
    }
    */
  }

  render(){
    return (
      <section id='home-novedades' ref='home_novedades'>
        <header>
          <span>Ultimas publicaciones:</span>
        </header>
        {!this.state.posts
          ?
          <Cargando />
          :
          <ul className='novedades-list'>
          {
            this.state.posts.map(function(item,index){
              return (
                <li key={index}>
                  <NovedadItem item={item} endLoading={this.endLoading} />
                  <div style={{'clear':'both'}}></div>
                </li>
              )
            }.bind(this))
          }
          </ul>
        }
      <div style={{'clear':'both'}}></div>
      </section>
    )
  }
}

module.exports = Novedades;
