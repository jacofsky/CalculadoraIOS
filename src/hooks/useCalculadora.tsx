import { useRef, useState } from "react";

enum Operadores {
    sumar,
    restar,
    multiplicar,
    dividir,
  }

export const useCalculadora = () => {

  const [numeroAnterior, setNumeroAnterior] = useState('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNuemro = (numeroTexto: string) => {
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const borrarUltimoNumero = () => {
    if (numero.length === 2 && numero.includes('-')) {
      setNumero('0');
    } else if (numero.length === 1) {
      setNumero('0');
    } else {
      setNumero(numero.slice(0, -1));
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1));
    } else {
      setNumeroAnterior(numero);
    }
    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if( num1 === 0 && num2 === 0) {
     return setNumero('0');
    }  

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }

    setNumeroAnterior('0');
  };


  return {
      numeroAnterior,
      numero,
      limpiar,
      positivoNegativo,
      btnSumar,
      btnDividir,
      btnRestar,
      btnMultiplicar,
      calcular,
      armarNuemro, 
      borrarUltimoNumero
  }
}
