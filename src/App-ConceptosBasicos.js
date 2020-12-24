import React from 'react';
import './style/style.css';



// Esto es igual que App
const AppConArrowFunction = () => <p> Este es mi arrow component <MiComponente /></p>

// Esto es con "components"

// class AppConClase extends React.Component , lo mismo que abajo.
class AppConClase extends React.Component {
  render() {
    return <p> Este es mi class component <MiComponente /></p>
  }
}


function MiComponente(props) {
  return (
    <div>
      {props.myText}
    </div>
  );
}

class MiClaseComponente extends React.Component {


  state = {
    show: true
  }

  mostrar() {
    if (this.state.show)
      this.setState({ show: false })
  }

  ocultar = () =>{
    if (!this.state.show)
      this.setState({ show: true })
  }

  mostrarOcultar = () => {
      this.setState({show: !this.state.show})
  }

  render() {


    // Se ejecuta cuando show == true
    if (this.state.show) {
      return (
        <div className='styleClaseComp'>
          <h3> Este es mi clase </h3>
          {this.props.myText}
          <button onClick={this.mostrar.bind(this)} > Cambiar estado </button>      
          <button onClick={this.mostrarOcultar} > El boton </button>  
        </div>
      )
    } else {
      return (
        <div>
          <h1> No hay elementos</h1>
          <button onClick={this.ocultar} > Cambiar estado </button>
          <button onClick={this.mostrarOcultar} > El boton  </button>
        </div>
      )
    }

  }
}



// Esto es con "hooks"
function App() {
  return (
    <div>
      <p> Este es mi componente: </p>
      <div className="miComponente"><MiComponente myText="Hello React!" /></div>

      {/*  Uso de Props */}

      <p id='primerCom'> <MiComponente myText="Este es mi Props" /> </p>
      <MiComponente className="miComponente" myText="Mi segundo props" />
      <MiComponente className="miComponente" myText="Mi tercer props" />
      <MiClaseComponente className="miComponente" myText="Estoy en mi clase component" />
    </div>
  );
}



export default App;