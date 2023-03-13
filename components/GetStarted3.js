import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';

const GetStarted2 = ({navigation}) => {
  const localImage = require('../images/vegetables.png');
  return (
    <ImageBackground source={localImage} style={styles.container}>
      <StatusBar backgroundColor={'black'} hidden={false} />

      <View style={{alignItems: 'center', top: 525}}>
        <Text
          style={{
            fontSize: 28,
            color: '#FFFFFF',
            fontWeight: 600,
            letterSpacing: 0.5,
          }}>
          Eat Right, East Healthy
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Get meal tips that give you the right start {'\n'} to a healthy
          lifestyle
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Text style={styles.btn}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    backgroundColor: '#FFFFFF',
    color: '#4B4B4B',
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 6,
    width: 188.42,
    top: 581,
    alignItems: 'center',
  },
});

export default GetStarted2;
