var React = require('react');
var SiteTitle = require('./siteTitle');
var MenuTrigger = require('./menuTrigger');
require("./styles.less");

function Header(props){
  return(
    <header>
      <SiteTitle />
      <MenuTrigger openMenu={props.openMenu} />
    </header>
  );
}

module.exports = Header;
