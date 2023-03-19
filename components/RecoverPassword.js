import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RecoverPassword = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: 70,
          borderBottomWidth: 3,
          borderBottomColor: '#E8E8E8',
          paddingBottom: 20,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <FontAwesome5
          onPress={() => navigation.navigate('Login')}
          style={{color: '#00425F', fontSize: 28, marginRight: 110}}
          name={'chevron-left'}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: 400,
            textAlign: 'center',
            marginRight: 100,
            color: '#4B4B4B',
          }}>
          Reset Password
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 30}}>
        <Image source={require('../images/verveLogo.png')} />
        <Text
          style={{
            marginTop: 20,
            color: '#4B4B4B',
            fontSize: 20,
            fontWeight: 400,
          }}>
          Reset Password
        </Text>
        <Text style={{marginTop: 10, color: '#4B4B4B', fontSize: 14}}>
          Kindly provide available credential
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 40}}>
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
      </View>

      <View style={{alignItems: 'center', marginTop: 40}}>
        <Text
          style={{
            backgroundColor: '#3077BD',
            width: 360,
            textAlign: 'center',
            color: '#FFFFFF',
            padding: 15,
            fontSize: 16,
            // paddingRight: 270,
            fontWeight: 600,
            borderRadius: 5,
          }}>
          Continue
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RecoverPassword;

const styles = StyleSheet.create({});
