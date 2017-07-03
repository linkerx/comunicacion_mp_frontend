var React = require('react');
var WpList = require('wp/list');
require('./styles.less');

function AreaSection(props){
  return (
    <section id='seccion'>
      <WpList url={props.site.wpurl} type={props.match.params.section} />
    </section>
  )
}

module.exports = AreaSection;
