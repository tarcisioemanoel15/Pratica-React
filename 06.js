// no terminal para ezecutar no servidor

const NomeContext = React.createContext('nome');

function MeuComponente1() {
 // const meuNome = 'Tarcisio Emanoel';
  return (

    < div className="componentes-1">
      <MeuComponente2 >
        <MeuComponente3 />
      </MeuComponente2>
    </div>

  )
}

function MeuComponente2(props) {
  return (
    <div id="componentes-2">
      <div>
        <headers>{props.children}</headers>
        <footer> </footer>
      </div>

    </div>
  )
}

function MeuComponente3() {
  const [telefone, setTelefone] = React.useState('74999 999 999');
 setTimeout(function(){
  setTelefone('1234567890')
},150)


  return (
    <div id="componentes-3">
      <MeuComponente4 telefone={telefone}/>
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);

  setTimeout(function() {
    setIdade(100)
  }, 1000)
  return (
    <div className="componentes-4">
      <p>Meu componente 4 {props.nome} - {idade} - {props.telefone}</p>
    </div>
  )
}
//    <NomeContext.Consumer> </NomeContext.Consumer>
//  {(nomeContext) => ()}


function MeuComponente() {
  return (
    <div id="componentes">
      <MeuComponente1 />
    </div>
  )
}

ReactDOM.render(
  <MeuComponente />,
  document.getElementById('App')
)