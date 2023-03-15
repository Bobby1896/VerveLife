import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View,
} from 'react-native';

const GetStarted3 = ({navigation}) => {
  const localImage = require('../images/guy.png');
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
          The Support System You Always Wished For
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#FFFFFF',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Tips and tricks from professional instructors, {'\n'} connect with
          fitness buddies from across the world
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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

export default GetStarted3;
