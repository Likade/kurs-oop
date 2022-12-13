import './App.css';
import Buying from './pages/buying/Buying';
import Selling from './pages/selling/Selling';
import Store from './pages/store/Store';
import Analise from './pages/analise/Analise';
import { useState } from 'react';

import { Soap } from './classes/products/Soap';
import {ToothPaste} from "./classes/products/ToothPaste"
import { Candies } from "./classes/products/Candies"
import { Cookie } from "./classes/products/Cookie"
import { Sousage } from "./classes/products/Sousages"
import { Chicken } from "./classes/products/Chicken"

function App() {
  if(localStorage.getItem('sells') == undefined) {
    localStorage.setItem('sells', [])
  }

  let soap = new Soap("Бархатные ручки", 220);
  let paste = new ToothPaste('Colgate', 150);
  let candie = new Candies('Рафаэлло', 300);
  let cookie = new Cookie('Любятово', 45);
  let sousage = new Sousage('Дымкоф', 120);
  let chicken = new Chicken('Петелинка', 250);

  const [buy, setBuy] = useState(true);
  const [sell, setSell] = useState(false);
  const [store, setStore] = useState(false);
  const [analise, setAnalise] = useState(false);
  return (
    <div className="App">
      <div className='buttons'>
        <button className={sell ? 'active' : null} onClick={() => {setBuy(false); setSell(true); setStore(false); setAnalise(false)}}>Продажа</button>
        <button className={buy ? 'active' : null} onClick={() => {setBuy(true); setSell(false); setStore(false); setAnalise(false)}}>Закупка</button>
        <button className={store ? 'active' : null} onClick={() => {setBuy(false); setSell(false); setStore(true); setAnalise(false)}}>Склад</button>
        <button className={analise ? 'active' : null} onClick={() => {setBuy(false); setSell(false); setStore(false); setAnalise(true)}}>Анализ</button>
      </div>

      {buy && <Buying merch = {[soap, paste, candie, cookie, sousage, chicken]}/>}
      {sell && <Selling merch = {[soap, paste, candie, cookie, sousage, chicken]}/>}
      {store && <Store merch = {[soap, paste, candie, cookie, sousage, chicken]}/>}
      {analise && <Analise/>}
    </div>
  );
}

export default App;
