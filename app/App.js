// Exportacion por defecto
import React from 'react';
//
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const App = () => {




  return (
    <>
    <StatusBar animated={true} backgroundColor="#142950" barStyle="light-content"

      />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </>
  );

};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'salmon',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: 'white',
    fontSize: 30,
  }
})



export default App;
