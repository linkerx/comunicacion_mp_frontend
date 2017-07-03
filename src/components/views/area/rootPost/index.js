var React = require('react');
var WpItem = require('wp/item');

function RootPost(props){
  return (
    <section id='seccion'>
      <WpItem type={props.type} slug={props.match.params.slug} />
    </section>
  )
}

module.exports = RootPost;
