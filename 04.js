// no terminal para ezecutar no servidor
// npx babel main.js -o dist.js


//fazer sem ter que passar de um em um

// OBS este é createContext
const NomeContext = React.createContext('nome');

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

function MeuComponente1() {
  const meuNome = 'Tarcisio Emanoel';
  return (
    <NomeContext.Provider value= {meuNome} >
      < div className= "componentes-1">
        <MeuComponente2 />
      </div>
    </NomeContext.Provider>
  )
}
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


function MeuComponente2() {
  return (
    <div id="componentes-2">
      <MeuComponente3 />
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
          <p>{nomeContext}</p>
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