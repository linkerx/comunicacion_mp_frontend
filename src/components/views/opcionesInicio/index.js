var React = require('react');
var NavLink = require('react-router-dom').NavLink;
require('./styles.less');

function OpcionesInicio(){
  return (
    <section id='home-opciones'>
      <ul className='opciones-list'>
        <li><NavLink to='/' activeClassName="active" exact >Inicio</NavLink></li>
        <li><NavLink to='/contacto' activeClassName="active" >Contacto</NavLink></li>
      </ul>
    </section>
  )
}

module.exports = OpcionesInicio;
