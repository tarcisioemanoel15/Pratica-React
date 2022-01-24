// no terminal para ezecutar no servidor
const NomeContext = React.createContext('nome');

function MeuComponente1() {
  const meuNome = 'Tarcisio Emanoel';
  return /*#__PURE__*/React.createElement("div", {
    className: "componentes-1"
  }, /*#__PURE__*/React.createElement(MeuComponente2, null, /*#__PURE__*/React.createElement(MeuComponente4, null)));
}

function MeuComponente2(props) {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-2"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("headers", null, props.children), /*#__PURE__*/React.createElement("footer", null, " ")));
}

function MeuComponente3() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes-3"
  }, /*#__PURE__*/React.createElement(MeuComponente4, null));
}

function MeuComponente4() {
  return /*#__PURE__*/React.createElement(NomeContext.Consumer, null, nomeContext => /*#__PURE__*/React.createElement("div", {
    className: "componentes-4"
  }, /*#__PURE__*/React.createElement("p", null, "Meu componente 4")));
}

function MeuComponente() {
  return /*#__PURE__*/React.createElement("div", {
    id: "componentes"
  }, /*#__PURE__*/React.createElement(MeuComponente1, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponente, null), document.getElementById('App'));
