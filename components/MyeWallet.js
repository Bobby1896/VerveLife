import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  HomeSvg,
  WalletSvg,
  ActivitySvg,
  DecalsSvg,
  SettingSvg,
} from '../reuse/svg';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Swiper from 'react-native-swiper';

const MyeWallet = ({navigation}) => {
  const Atm1 = require('../images/atmCard1.png');
  const Atm2 = require('../images/atmCard2.png');
  const Airtel = require('../images/Airtel.png');
  const Glo = require('../images/Glo.png');
  const Mtn = require('../images/Mtn.png');
  const Etisalat = require('../images/9mobile.png');
  const HomeSvg = require('../images/Home.png');
  const DecalSvg = require('../images/Decal.png');
  const SettingSvg = require('../images/Setting.png');
  const ActivateSvg = require('../images/Activate.png');
  const WalletSvg = require('../images/Wallet.png');

  return (
    <SafeAreaView style={{}}>
      <View
        style={{
          marginTop: scale(20),
          borderBottomWidth: scale(3),
          borderBottomColor: '#E8E8E8',
          paddingBottom: scale(20),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          gap: scale(90),
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: scale(10),
          }}>
          <FontAwesome5
            onPress={() => navigation.navigate('')}
            style={{color: '#00425F', fontSize: scale(25)}}
            name={'bars'}
          />
          <Text
            style={{
              fontSize: scale(20),
              fontWeight: 600,
              textAlign: 'center',
              color: '#00425F',
            }}>
            My eWallet
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: scale(7)}}>
          <FontAwesome5
            style={{color: '#3077BD', fontSize: scale(22)}}
            name={'plus'}
          />
          <Text style={{color: '#3077BD', fontWeight: 400, fontSize: 18}}>
            Add Card
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#FFFFFF',
          shadowColor: 'black',
          elevation: 15,
          borderRadius: 4,
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: scale(20),
          padding: moderateScale(20),
        }}>
        <Text style={{fontSize: scale(18), fontWeight: 400}}>eCash bal:</Text>
        <Text style={{fontSize: scale(18), fontWeight: 700, color: '#3077BD'}}>
          N1575.52
        </Text>
      </View>

      <View style={{alignItems: 'center'}}>
        {/* <Swiper> */}
        <Image
          style={{width: scale(320), borderRadius: scale(20)}}
          source={Atm1}
        />
        {/* <Image source={Atm2} /> */}
        {/* </Swiper> */}
      </View>

      <Text
        style={{
          fontSize: scale(18),
          fontWeight: 700,
          textAlign: 'center',
          color: '#00425F',
          marginTop: 20,
        }}>
        Airtime Topup
      </Text>

      <View style={{margin: scale(10), alignItems: 'center'}}>
        <View style={{flexDirection: 'row', gap: scale(10)}}>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width: 75, height: 70}} source={Airtel} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width: 75, height: 70}} source={Etisalat} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width: 75, height: 70}} source={Glo} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <Image style={{width: 75, height: 70}} source={Mtn} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#3077BD',
          borderRadius: 4,
          margin: scale(20),
          padding: moderateScale(15),
        }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate('')}> */}
        <Text
          onPress={() => navigation.navigate('')}
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: scale(18),
            fontWeight: 600,
          }}>
          Make Payment
        </Text>
        {/* </TouchableOpacity> */}
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#FFFFFF',
          marginTop: scale(30),
          borderTopWidth: 3,
          borderTopColor: '#E8E8E8',
          padding: scale(15),
        }}>
        <TouchableOpacity>
          <View>
            <Image
              style={{width: scale(22), height: scale(22), left: 10}}
              source={HomeSvg}
            />
            <Text style={{fontSize: scale(14)}}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image source={WalletSvg} />
            <Text>Wallet</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image source={ActivateSvg} />
            <Text>Launch Activity</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image source={DecalSvg} />
            <Text>Verve Deals</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View>
            <Image source={SettingSvg} />
            <Text>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyeWallet;

const styles = StyleSheet.create({});
