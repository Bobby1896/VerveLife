import React from 'react';
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
  return (
    <SafeAreaView style={[styles.container]}>
      <TouchableOpacity onPress={() => navigation.navigate('Get Started')}>
        <StatusBar backgroundColor={'#03435F'} hidden={false} />
        <Image source={require('../images/verveBigLogo.png')} />
      </TouchableOpacity>
    </SafeAreaView>
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
