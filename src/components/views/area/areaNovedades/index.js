var React = require('react');
var WpApi = require('wp/api');
var AreaNovedadItem = require('./novedadItem');
var Cargando = require('utils/cargando');
require('./styles.less');

class AreaNovedades extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: null,
    }
    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount(){
      this.updateItems();
  }

  updateItems(){
    this.setState(function () {
      return {
        items: null
      }
    });
    var opts = {
      url: this.props.site.wpurl,
      type: 'posts',
      queries: ['_embed']
    }

    WpApi.getList(opts)
      .then(function(items) {
        this.setState(function () {
          return {
            items: items
          }
        });
      }.bind(this));
  }

  render() {
    return (
      <div className="list">
        {!this.state.items
          ?
          <Cargando />
          :
          <ul className='novedades-list'>
          {
            this.state.items.map(function (item, index) {
              var blog = {
                blog_id: this.props.site.blog_id,
                blog_url: this.props.site.path,
                blog_name: this.props.site.blog_name
              }

              item.blog = blog;

              return (
                <li key={index} >
                  <AreaNovedadItem item={item} />
                </li>
              )
            }.bind(this))
          }
          </ul>
        }
      </div>
    )
  }
}

module.exports = AreaNovedades;
