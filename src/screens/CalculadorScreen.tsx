import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';


const CalculadorScreen = () => {

  const {numeroAnterior, numero, armarNuemro, limpiar, positivoNegativo, borrarUltimoNumero, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular} = useCalculadora()
  
  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
      )}
      <Text
        style={styles.resultado}
        ellipsizeMode="middle"
        numberOfLines={1}
        adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc
          texto="C"
          colorTexto="black"
          bgColor="#9B9B9B"
          accion={limpiar}
        />
        <BotonCalc
          texto="+/-"
          colorTexto="black"
          bgColor="#9B9B9B"
          accion={positivoNegativo}
        />
        <BotonCalc
          texto="del"
          colorTexto="black"
          bgColor="#9B9B9B"
          accion={borrarUltimoNumero}
        />
        <BotonCalc texto="/" bgColor="#FF9427" accion={btnDividir} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNuemro} />
        <BotonCalc texto="8" accion={armarNuemro} />
        <BotonCalc texto="9" accion={armarNuemro} />
        <BotonCalc texto="x" bgColor="#FF9427" accion={btnMultiplicar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNuemro} />
        <BotonCalc texto="5" accion={armarNuemro} />
        <BotonCalc texto="6" accion={armarNuemro} />
        <BotonCalc texto="-" bgColor="#FF9427" accion={btnRestar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNuemro} />
        <BotonCalc texto="2" accion={armarNuemro} />
        <BotonCalc texto="3" accion={armarNuemro} />
        <BotonCalc texto="+" bgColor="#FF9427" accion={btnSumar} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNuemro} />
        <BotonCalc texto="." accion={armarNuemro} />
        <BotonCalc texto="=" bgColor="#FF9427" accion={calcular} />
      </View>
    </View>
  );
};

export default CalculadorScreen;
