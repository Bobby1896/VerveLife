import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  Text,
  View,
  StatusBar,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Link} from '@react-navigation/native';

const LoginRegister = ({navigation}) => {
  //   const localImage = require('../images/verveLogo.png');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'black'} hidden={false} />
      <View style={{alignItems: 'center'}}>
        <Image style={styles.img} source={require('../images/verveLogo.png')} />
        <Text
          style={{
            color: '#00425F',
            fontWeight: 600,
            fontSize: 20,
            marginTop: 15,
          }}>
          All your favourite things in one place
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          marginBottom: 15,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#0973AA',
            lineHeight: 20,
            fontSize: 12,
            fontWeight: 400,
          }}>
          Click here to login with your
          <Text style={{fontWeight: 600}}> Quickteller</Text> Account
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 400,
            color: '#4B4B4B',
            top: 15,
          }}>
          or log in with
        </Text>
      </View>

      <View style={styles.socialMedia}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#475993',
            paddingTop: 15,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 30,
            gap: 5,
            fontWeight: 600,
            fontSize: 14,
            borderRadius: 3,
          }}>
          <FontAwesome5 name={'facebook-square'} style={styles.mediaIcons} />
          <Text
            onPress={() => navigation.navigate('https://www.facebook.com/')}
            style={{color: '#ffffff', marginTop: 3}}>
            Facebook account
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            backgroundColor: '#DF4930',
            paddingTop: 15,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 30,
            color: '#ffffff',
            fontWeight: 400,
            fontSize: 14,
            color: '#ffffff',
            borderRadius: 3,
          }}>
          <FontAwesome5 name={'google'} style={styles.mediaIcons} />
          <Text
            onPress={() => navigation.navigate('https://www.google.com/')}
            style={{color: '#ffffff', marginTop: 3}}>
            Google account
          </Text>
        </View>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder="Email or Mobile No."
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            marginBottom: 20,
            height: 70,
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            height: 70,
          }}
        />
      </View>

      <View style={styles.forgot}>
        <Text
          onPress={() => navigation.navigate('')}
          style={{fontSize: 14, fontWeight: 400, color: '#4B4B4B'}}>
          Forgot Password?
        </Text>
        <Text
          onPress={() => navigation.navigate('Recover Password')}
          style={{fontSize: 14, fontWeight: 400, color: '#3077BD'}}>
          Recover
        </Text>
      </View>

      <View style={styles.login}>
        <Text
          onPress={() => navigation.navigate('My eWallet')}
          style={{
            backgroundColor: '#3077BD',
            width: 360,
            textAlign: 'center',
            color: '#FFFFFF',
            padding: 15,
            fontSize: 16,
            borderRadius: 5,
            fontWeight: 600,
          }}>
          LOG IN
        </Text>
        <Text
          onPress={() => navigation.navigate('Account Creation')}
          style={{
            color: '#3077BD',
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: 0.49,
            top: 30,
          }}>
          REGISTER
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 80,
  },
  img: {
    alignItems: 'center',
  },
  mediaIcons: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  socialMedia: {
    alignItems: 'center',
    flexDirection: 'row',
    left: 10,
    gap: 10,
    top: 20,
  },
  input: {
    marginTop: 50,
    alignItems: 'center',
  },
  forgot: {
    left: 15,
    flexDirection: 'row',
    marginTop: 20,
    gap: 5,
  },
  login: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default LoginRegister;
