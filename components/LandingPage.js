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

const LandingPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Get Started');
    }, 4000);
  });

  return (
    // <SafeAreaView style={[styles.container]}>
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
    // </SafeAreaView>
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
export default LandingPage;
