// Tu powinny się znaleźć odpowiednie importy

import {createStore} from "redux";
import {withdrawMoney, depositMoney}  from  './redux/actions/bank';
import bankReducer from  './redux/reducers/bank'
const bankApp = {

  start(rootElement) {
    this.createUI(rootElement);
    this.createStore();
    this.collectRefs();
    this.applyHandlers();
  },

  // Tej metody nie powinniśmy ruszać :)
  // Tworzymy tu szablon UI
  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div>
        <h1>Saldo:<span>0</span></h1>
        <div>
          $: <input type="number" id="money" />
          <button id="withdraw">Wypłać</button>
          <button id="deposit">Wpłać</button>
        </div>
      </div>
    `;
  },

  // Tutaj zbieramy referencje do odpowiednich elementów
  // Tej metody też nie trzeba zmieniać ;)
  collectRefs() {
    this.depositEl = this.rootElement.querySelector("#deposit");
    this.withdrawEl = this.rootElement.querySelector("#withdraw");
    this.saldoEl = this.rootElement.querySelector("h1 span");
    this.inputEl = this.rootElement.querySelector("input");
  },

  // W tej metodzie należy utworzyć nowy store
  // Następnie zapisać się na zmiany i na każdą z nich
  // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
  // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
  createStore() {
    this.store = createStore(bankReducer);
    this.store.subscribe(() =>{ this.saldoEl.innerText = `${this.store.getState()} pln`})

  },

  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers() {
    this.withdrawEl.addEventListener('click', ()=> {
      this.store.dispatch(withdrawMoney(parseInt(this.inputEl.value)))
    })

    this.depositEl.addEventListener('click', ()=> {
      this.store.dispatch(depositMoney(parseInt(this.inputEl.value)))
    })

  }
};

export default bankApp;