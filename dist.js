// no terminal para ezecutar no servidor
const NomeContext = React.createContext('nome');

function MeuComponente1() {
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente3, null)));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("headers", null, props.children), /*#__PURE__*/React.createElement("footer", null, " ")));
}

function MeuComponente3() {
  const [telefone, setTelefone] = React.useState('74999 999 999');
  setTimeout(function () {
    setTelefone('1234567890');
  }, 150);
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, {
    telefone: telefone
  }));
}

function MeuComponente4(props) {
  const [idade, setIdade] = React.useState(28);
  setTimeout(function () {
    setIdade(100);
  }, 1000);
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, "Meu componente 4 ", props.nome, " - ", idade, " - ", props.telefone));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

function MeuComponenteIrmao() {
  return /*#__PURE__*/React.createElement("h1", null, "Componente Irm\xE3o");
}

function AppComponente() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MeuComponente, null), /*#__PURE__*/React.createElement(MeuComponenteIrmao, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(AppComponente, null), document.getElementById('App'));
