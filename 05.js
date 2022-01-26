// no terminal para ezecutar no servidor

const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const meuNome = 'Tarcisio Emanoel';
  return (
    
      < div className= "componentes-1">
        <MeuComponente2 >
          <MeuComponente4 />
        </MeuComponente2>
      </div>
    
  )
}

function MeuComponente2(props) {
  return (
    <div id="componentes-2">
      <div>
        <headers>{ props.children}</headers>
        <footer> </footer>
      </div>
      
    </div>
  )
}

function MeuComponente3() {
  return (
    <div id="componentes-3">
      <MeuComponente4 />
    </div>
  )
}

function MeuComponente4() {
  return (
    <NomeContext.Consumer>
      {(nomeContext) => (
        <div className="componentes-4">
          <p>Meu componente 4</p>
        </div>
      )}
    </NomeContext.Consumer>
  )
}


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