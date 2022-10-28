import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

//Ejemplor de un component stateful
// const Button = () => {
//     const [name, setName] = useState('Hola, Mundo');
//     return (
//         <h1>{name}</h1>
//     );
// }


//ejemplo de component stateless
// const Button = () => <ButtonRed  text={text}/>;


// class componenet
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hola, Mundo</h1>
//             </div>
//         );
//     }
// }


//Componentes de orden superior o HOOKs

// function ComponentWrapper(wrapperComponent){
//     class Wrapper extends Component {
//         render(){
//             return <wrapperComponent{...this.props} />
//         }
//     }
//     return Wrapper;
// }