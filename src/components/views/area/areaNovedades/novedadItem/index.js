var React = require('react');
var Link = require('react-router-dom').Link;
var ItemImage = require('wp/item-image');
require('./styles.less');

function AreaNovedadItem(props) {
  var objFecha = new Date(props.item.date);
  var fecha = objFecha.getDate() + '/' + objFecha.getMonth() + '/' + objFecha.getFullYear();
  var category = props.item._embedded['wp:term'][0][0];

  var item_image = ""
  if(props.item._embedded['wp:featuredmedia']){
    item_image = props.item._embedded['wp:featuredmedia'][0].media_details.sizes['thumbnail'].source_url;
  }

  return (
    <article className='novedad'>
      <header>
        <div className='fecha'>{fecha}</div>
        <div className='area'><Link to={props.item.blog.blog_url+category.slug}>{category.name}</Link></div>
      </header>
      <div className='titulo'><Link to={props.item.blog.blog_url+category.slug+'/'+props.item.slug}><h2>{props.item.title.rendered}</h2></Link></div>
      {!item_image == ""
        ? <ItemImage src={item_image} endLoading={props.endLoading} render='img' /> : <div></div>
      }
      <div className='resumen'>{props.item.post_excerpt}</div>
      <div style={{'clear':'both'}}></div>
    </article>
  )
}

module.exports = AreaNovedadItem;
