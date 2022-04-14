import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface Props {
    texto: string;
    bgColor?: string;
    colorTexto?: string;
    ancho?: boolean;
    accion: (numeroTexto: string) => void;
}

const BotonCalc = ({texto, bgColor = '#2D2D2D', colorTexto = 'white', ancho = false, accion }: Props) => {
  return (

    <TouchableOpacity onPress={() => accion(texto)}>    
        <View style={{...styles.boton, backgroundColor: bgColor, width: (ancho) ? 180 : 80 }}>
        <Text style={{...styles.botonTexto,color: colorTexto, right: (ancho) ? 50 : 0 }}>{texto}</Text>
        </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;
