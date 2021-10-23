// Exportacion por defecto
import React, {useState, useEffect} from 'react';
//
import { View, Text, StyleSheet, StatusBar, Image, Animated } from 'react-native';
import Rocket from './assets/img/rocket.png';

const App = () => {

  // variable de estado, show es una instancia de Animated
const [show]= useState(new Animated.Value(0));

  // variable para la posicion del rocket
const [position]= useState(new Animated.Value(700));

  // variable para animar el texto 'welcome'
const [font]= useState(new Animated.Value(0));

// variable de estado para saber cuando finaliza la animacion
const [animated, setAnimated]= useState(false);


useEffect(() => {

  Animated.parallel([

    Animated.timing(show, {
    toValue: 1,
    duration: 2500,
    delay: 1000,
    useNativeDriver: false,
  }),
    Animated.timing(position, {
    toValue: -700,
    duration: 6000,
    useNativeDriver: false,
  })


  ]).start(()=>{

    Animated.timing(font, {
    toValue: 200,
    duration: 1000,
    useNativeDriver: false,
  }).start(()=> setAnimated(true));

  });

  // console.log('iniciar')
}, [])

if(!animated)
  return (
    <>
    <StatusBar animated={true} backgroundColor="#142950" barStyle="light-content"

      />
      <View style={styles.container}>
        <Animated.Image style={[styles.image, {top:position}]} source={Rocket}

        />
        <Animated.Text style={[styles.text, {opacity:show, transform:[{scale:font}]} ]}>Welcome
        </Animated.Text>
      </View>
    </>
  );
  return (<Text>Inicio la aplicacion</Text>)

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#142950',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text:{
    color: 'rgb(242, 242,242)',
    fontSize: 50,
    fontWeight: 'bold',
  },
  image:{
    width: 100,
    height: 100,
    resizeMode: 'contain'
  }
})



export default App;
