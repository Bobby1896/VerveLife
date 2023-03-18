import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const Sliders = ({navigation}) => {
  const Image1 = require('../images/lady.png');
  const Image2 = require('../images/vegetables.png');
  const Image3 = require('../images/guy.png');
  return (
    <Swiper
      style={styles.wrapper}
      dotColor="grey"
      activeDotColor="#FFFFFF"
      dotStyle={{marginBottom: 85}}
      autoplay={true}
      autoplayInterval={5000}>
      <ImageBackground source={Image1} style={styles.slide1}>
        <StatusBar backgroundColor={'black'} hidden={false} />

        <View style={{alignItems: 'center', top: 565}}>
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
              marginTop: 15,
            }}>
            Smash your goals, control your {'\n'} money and make every day
            count!
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ImageBackground source={Image2} style={styles.slide2}>
        <StatusBar backgroundColor={'black'} hidden={false} />

        <View style={{alignItems: 'center', top: 560}}>
          <Text
            style={{
              fontSize: 28,
              color: '#FFFFFF',
              fontWeight: 600,
              letterSpacing: 0.5,
            }}>
            Eat Right, Eat Healthy
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <ImageBackground source={Image3} style={styles.slide3}>
        <StatusBar backgroundColor={'black'} hidden={false} />

        <View style={{alignItems: 'center', top: 525}}>
          <Text
            style={{
              fontSize: 28,
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 600,
              letterSpacing: 0.5,
            }}>
            The Support System {'\n'}You Always Wished For
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: '#FFFFFF',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Tips and tricks from professional instructors, {'\n'} connect with
            fitness buddies from across the {'\n'} world
          </Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btn3}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },

  btn: {
    backgroundColor: '#FFFFFF',
    color: '#4B4B4B',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 6,
    width: 210,
    top: 630,
    alignItems: 'center',
  },

  btn3: {
    backgroundColor: '#FFFFFF',
    color: '#4B4B4B',
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    fontWeight: 600,
    borderRadius: 6,
    width: 210,
    top: 630,
    alignItems: 'center',
    marginTop: -45,
  },
});

export default Sliders;
