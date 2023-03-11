import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

const GetStarted1 = ({navigation}) => {
  const localImage = require('../images/lady.png');

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
          Your Best Life Starts Here
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Smash your goals, control your {'\n'} money and make every day count!
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Get Started 2')}>
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

export default GetStarted1;
