var React = require('react');
require('./styles.less');

class FormContacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      area: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    setTimeout(function(){this.props.show()}.bind(this), 2000);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    alert('Su mensaje fue enviado con exito');
    event.preventDefault();
  }

  render() {
    return (
      <section id='home-contacto'>
        <header>
          <span>Contactarse con el Ministerio:</span>
        </header>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>Nombre:</label>
              <div><input name="nombre" type='text' value={this.state.nombre} onChange={this.handleInputChange} /></div>
            </li>
            <li>
              <label>Apellido:</label>
              <div><input name='apellido' type='text' value={this.state.apellido} onChange={this.handleInputChange} /></div>
            </li>
            <li>
              <label>Email:</label>
              <div><input name='email' type='email' value={this.state.email} onChange={this.handleInputChange} /></div>
            </li>
            <li>
              <label>Area:</label>
              <div>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="recursos-humanos">Recursos Humanos</option>
                  <option value="prensa">Prensa</option>
                  <option value="estadisticas">Estadísticas</option>
                  <option value="superintendencia">Superintendencia</option>
                  <option value="Sistemas">Superintendencia</option>
                </select>
              </div>
            </li>
            <li>
              <div><input name='enviar' type='submit' value='enviar' /></div>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}

module.exports = FormContacto;
