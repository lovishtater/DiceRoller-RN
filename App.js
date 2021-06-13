import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';
const App = () => {
  var [roll, onRoll] = useState(dice1);

  const rollDice = () => {
    const random = Math.floor(Math.random() * 6 + 1);
    switch (random) {
      case 1:
        roll = dice1;
        break;
      case 2:
        roll = dice2;
        break;
      case 3:
        roll = dice3;
        break;
      case 4:
        roll = dice4;
        break;
      case 5:
        roll = dice5;
        break;
      case 6:
        roll = dice6;
        break;

      default:
        break;
    }
    onRoll(roll);
  };

  return (
    <>
    <StatusBar backgroundColor={'#194350'} />
      <View style={styles.view}>
        <Image style={styles.image} source={roll} />
        <TouchableOpacity onPress={rollDice}>
          <Text style={styles.text}>Lets play</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#194350',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height:200,
  },
  text: {
    fontSize: 20,
    marginTop:30,
    paddingHorizontal:30,
    paddingVertical:10,
    borderColor:'#ff8882',
    color:'#194350',
    backgroundColor:'#ffc2b4',
    borderWidth: 2,
    borderRadius:20,
  },
});

export default App;
