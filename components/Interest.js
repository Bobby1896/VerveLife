import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Interest = () => {
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
          justifyContent: 'space-around',
        }}>
        <FontAwesome5
          onPress={() => navigation.navigate('Login')}
          style={{color: '#00425F', fontSize: 28}}
          name={'chevron-left'}
        />
        <Image source={require('../images/verveLogo.png')} />
      </View>
    </SafeAreaView>
  );
};

export default Interest;

const styles = StyleSheet.create({});
