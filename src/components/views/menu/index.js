var React = require('react');
var WpMenu = require('wp/menu');
var CloseMenuBtn = require('./closeMenuBtn');
var MinisterioInfo = require('./ministerioInfo');
require('./styles.less');

class Menu extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        menuClass: 'initial'
      }
      this.closeMenu = this.closeMenu.bind(this);
      this.openMenu = this.openMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open){
      this.openMenu();
    } else if(this.props.open == true){
      this.closeMenu();
    }
  }

  openMenu(){
    this.setState(function(){
      return {
        menuClass: 'opened'
      }
    });
  }

  closeMenu(){
    this.setState(function(){
      return {
        menuClass: 'closed'
      }
    });
  }

  render(){
    return (
      <div id='menu' className={this.state.menuClass} >
        <CloseMenuBtn closeMenu={this.props.closeMenu} />
        <MinisterioInfo />
        <WpMenu url='http://localhost' location='main-menu-location' path='/' action={this.props.closeMenu}/>
      </div>
    )
  }
}

module.exports = Menu;
