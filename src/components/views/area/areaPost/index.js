var React = require('react');
var WpApi = require('wp/api');
var WpItem = require('wp/item');
var Cargando = require('utils/cargando');
require('./styles.less')

function AreaPost (props) {
  return(
    <section id='area'>
      <WpItem url={props.site.wpurl} type={props.match.params.section} slug={props.match.params.slug} >
        <Cargando/>
      </WpItem>
    </section>
  )
}

module.exports = AreaPost;
