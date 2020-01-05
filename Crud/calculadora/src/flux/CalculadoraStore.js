import EventEmmiter from 'events'
import Action from './Constants'
import { appDispatcher } from './AppDispatcher'

const change = 'change'

let _store = {
  valorDoDisplay: '0',
  resultadoUltimaOperacao: 0,
  limparVisor: false,
  operacaoAritmetica: undefined,
  modoDeEntradaDecimal: false,
}

class CalculadoraStore extends EventEmmiter {

  getValorDoDisplay() {
    return _store.valorDoDisplay;
  }

  setValorDoDisplay(valor) {
    _store.valorDoDisplay = valor;
    this.emit(change);
  }

  getResultadoUltimaOperacao() {
    return _store.resultadoUltimaOperacao;
  }

  setResultadoUltimaOperacao(valor) {
    _store.resultadoUltimaOperacao = valor;
    this.emit(change);
  }

  getLimparVisor() {
    return _store.limparVisor;
  }

  setLimparVisor(valor) {
    _store.limparVisor = valor;
    this.emit(change);
  }

  getOperacaoAritmetica() {
    return _store.limparVisor;
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

  handleActions(action) {
    switch (action.type) {
      case Action.ATUALIZA_VISOR:
        this.setValorDoDisplay(action.value);
        break;
      case Action.ENTRAR_COM_DIGITOS_DECIMAIS:
        this.setModoDeEntradaDecimal(action.value);
        break;
      case Action.GUARDA_VALOR:
        this.setResultadoUltimaOperacao(action.value);
        break;
      case Action.LIMPA_OPERACAO:
        this.setOperacaoAritmetica(undefined);
        break;
      case Action.LIMPA_VISOR:
        this.setValorDoDisplay('')
        break;
      case Action.LIMPA_VISOR_NA_PROXIMA_OPERACAO:
        this.setLimparVisor(action.value);
        break;
      case Action.SETA_OPERACAO:
        this.setOperacaoAritmetica(action.value);
        break;
    }
  }
}

let calculadoraStore = new CalculadoraStore();
appDispatcher.register(calculadoraStore.handleActions.bind(calculadoraStore))
export default calculadoraStore
