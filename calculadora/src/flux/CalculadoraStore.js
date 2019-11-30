import EventEmmiter from 'events'

const change = 'change'

let _store = {
  valorDoDisplay: '0',
  resultadoUltimaOperacao: 0,
  limparVisor: false,
  operacaoAritmetica: undefined,
  modoDeEntradaDecimal: false
}

class CalculadoraStore extends EventEmmiter {

  getValorDoDisplay() {
    return _store.valorDoDisplay
  }

  setValorDoDisplay(valor) {
    _store.valorDoDisplay = valor
    this.emit(change)
  }

  getResultadoUltimaOperacao() {
    return _store.resultadoUltimaOperacao
  }

  setResultadoUltimaOperacao(valor) {
    _store.resultadoUltimaOperacao = valor
    this.emit(change)
  }

  getLimparVisor() {
    return _store.limparVisor;
  }
  setLimparVisor(valor) {
    _store.limparVisor = valor;
    this.emit(change);
  }
  getOperacaoAritmetica() {
    return _store.operacaoAritmetica;
  }
  setOperacaoAritmetica(valor) {
    _store.operacaoAritmetica = valor;
    this.emit(change);
  }
  getModoDeEntradaDecimal() {
    return _store.modoDeEntradaDecimal;
  }
  setModoDeEntradaDecimal(valor) {
    return _store.modoDeEntradaDecimal = valor;
    this.emit(change);
  }


  getState() {
    return _store
  }

}

let calculadoraStore = new CalculadoraStore();
export default calculadoraStore
window.calculadoraStore = calculadoraStore