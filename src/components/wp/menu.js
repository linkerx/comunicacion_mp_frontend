var React = require('react');
var WpApi = require('./api');
var MenuItem = require('./menu-item');
var NavLink = require('react-router-dom').NavLink;

class WpMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: null,
    }
    this.updateItems = this.updateItems.bind(this);
  }

  componentDidMount(){
      this.updateItems();
  }

  updateItems(){
    this.setState(function () {
      return {
        menu: null
      }
    });
    var opts = {
      url: this.props.url,
      location: this.props.location,
      slug: this.props.slug,
    }

    WpApi.getMenuIdByLocation(opts)
      .then(function(menu) {
        this.setState(function () {
          return {
            menu: menu
          }
        });
      }.bind(this));
  }

  render() {

    //console.log(this.state.menu);

    return (
      <nav>
        {!this.state.menu
          ?
            this.props.children
          :
          <ul className='menu'>
          {
            this.state.menu.items.map(function (menuItem, index) {
                return (<li key={index}><MenuItem key={menuItem.ID} item={menuItem} path={this.props.path} /></li>)
            }.bind(this))
          }
          {
            this.props.extraItems &&
              this.props.extraItems.map(function (item, index) {
                return (
                  <li key={100+index}>
                    <NavLink exact to={item.url} activeClassName="active" >{item.title}</NavLink>
                  </li>)
            }.bind(this))
          }
          </ul>
        }
      </nav>
    )
  }
}

// TODO: propTypes

module.exports = WpMenu;
