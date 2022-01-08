import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

export default function App() {

  ButtonClickLiestener_Bluetooth = () =>{
    //XDDDDDDD
  }

  ButtonClickLiestener_A = () =>{
    //tutaj funkcja wysylajaca 'a'
    //dla testu
    alert("a");
  }

  ButtonClickLiestener_B = () =>{
    //tutaj funkcja wysylajaca 'b'
    //dla testu
    alert("b");
  }


  return (
    <View style={styles.container}>

      <View style={styles.buttonContianer}>
        <Button 
          //onPress={this.ButtonClickLiestener_Bluetooth}
          title='Bluetooth'
          color='#0000ff'
        /> 
      </View>

      <View style={styles.buttonContianer}>
        <Button 
          onPress={this.ButtonClickLiestener_A}
          title='Wyślij A'
          color='#00ff00'
        /> 
    </View>

    <View style={styles.buttonContianer}>
      <Button 
        onPress={this.ButtonClickLiestener_B}
        title='Wyślij B'
        color='#ff0000'
      /> 
    </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContianer: {
    margin: 20,
    width: '75%',
  }
});
