// no terminal para ezecutar no servidor

// Renderizando mais elementos na pagina
const NomeContext = React.createContext('nome');

function MeuComponente1() {
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

  function clickBotao(){
    console.log('clicouu');
  }

  return (
    <div className="componentes-4">
      <p>Meu componente 4 {props.nome} - {idade} - {props.telefone}</p>
      <button type="bbutton" onClick={clickBotao}>Incrementar</button>
    </div>
  )
}



function MeuComponente() {
  return (
    <div id="componentes">
      <MeuComponente1 />
    </div>
  )
}

function MeuComponenteIrmao(){
  return(
    <h1>Componente Irmão</h1>
  )
}

function AppComponente(){
  return(
    <React.Fragment>
    <MeuComponente />
    <MeuComponenteIrmao />
    </React.Fragment>
  )
}

ReactDOM.render(
  <AppComponente />,
  document.getElementById('App')
)