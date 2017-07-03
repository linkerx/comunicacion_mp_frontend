var React = require('react');
var Link = require('react-router-dom').Link;
require("./styles.less");
var Image = require('./logo.png');

function SiteTitle() {
  return (
    <div className="site-title">
      <div className="logo">
          <Link to='/' title="Ir al Inicio"><img src={Image} /></Link>
      </div>
      <div className="title">
        <div className="comu">
            <Link to='/' title="Ir al Inicio">Comunicacíon Interna</Link>
        </div>
        <div className="minis">
            <Link to="http://ministeriopublico.jusrionegro.gov.ar" target="_blank">Ministerio Público - Río Negro</Link>
        </div>
      </div>
    </div>
  )
}

module.exports = SiteTitle;
