var React = require('react');
var Link = require('react-router-dom').Link;
var ItemImage = require('wp/item-image');
require('./styles.less');

function NovedadItem(props) {
  var objFecha = new Date(props.item.post_date);
  var fecha = objFecha.getDate() + '/' + objFecha.getMonth() + '/' + objFecha.getFullYear();

  return (
    <article className='novedad'>
      <header>
        <div className='fecha'>{fecha}</div>
        <div className='area'><Link to={props.item.blog.blog_url}>{props.item.blog.blog_name}</Link></div>
      </header>
      <div className='titulo'><Link to={props.item.blog.blog_url+props.item.the_term+'/'+props.item.post_name}><h2>{props.item.post_title}</h2></Link></div>
      {!props.item.thumbnail == ""
        ? <ItemImage src={props.item.thumbnail} endLoading={props.endLoading} render='img' /> : <div></div>
      }
      <div className='resumen'>{props.item.post_excerpt}</div>
      <div style={{'clear':'both'}}></div>
    </article>
  )
}

module.exports = NovedadItem;
