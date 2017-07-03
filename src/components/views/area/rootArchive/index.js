var React = require('react');
var WpList = require('wp/list');

function RootArchive(props){
  return (
    <section id='seccion'>
      <WpList type={props.type} />
    </section>
  )
}

module.exports = RootArchive;
