import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Sliders');
    }, 4000);
  });

  return (
    <ImageBackground
      source={require('../images/gradients.png')}
      style={[styles.container]}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        hidden={false}
      />
      <Image source={require('../images/verveBigLogo.png')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03435F',
  },
});
export default SplashScreen;
