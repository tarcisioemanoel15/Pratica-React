// no terminal para ezecutar no servidor

const NomeContext = React.createContext('nome');

function MeuComponente1(props) {
  return (
    < div className="componentes-1">
      <MeuComponente2 >
        <MeuComponente3 onClickIncrementar={props.onClickIncrementar}/>
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

function MeuComponente3(props) {
  const [telefone, setTelefone] = React.useState('74999 999 999');
 setTimeout(function(){
  setTelefone('1234567890')
},150)
  return (
    <div id="componentes-3">
      <MeuComponente4 telefone={telefone} onClickIncrementar={props.onClickIncrementar}/>
    </div>
  )
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);

  setTimeout(function() {
    setIdade(30)
  }, 1000)

  return (
    <div className="componentes-4">
      <p>Meu componente 4  {idade} - {props.telefone}</p>
      <button type="bbutton" onClick={props.onClickIncrementar}>Incrementar</button>
    </div>
  )
}

function MeuComponente(props) {
  return (
    <div id="componentes">
      <MeuComponente1 onClickIncrementar={props.onClickIncrementar}/>
    </div>
  )
}

function MeuComponenteIrmao(props){
  return(
   <div id="componente-irmao">
     <MeuComponenteIrmao2 contador={props.contador} />
   </div>
  )
}

function MeuComponenteIrmao2(props){
  React.useEffect(function() {
    // console.log('Criou ou Alterou');
    localStorage.setItem('contador', props.contador)
   });
  return (
    <h2>Contador: { props.contador}</h2>
  )
}

function AppComponente(){
  const [contador, incrementaContador ] = React.useState(parseInt(localStorage.getItem('contador'), 10) || 0);

  const clickIncrementa = function(){
    incrementaContador(contador + 1);
  }

  return(
    <React.Fragment >
    <MeuComponente onClickIncrementar={clickIncrementa}/>
    <MeuComponenteIrmao contador={contador}/>
    </React.Fragment>
  )
}

ReactDOM.render(
  <AppComponente />,
  document.getElementById('App')
)