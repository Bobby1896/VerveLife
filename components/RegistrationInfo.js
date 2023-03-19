import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const RegistrationInfo = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
          borderBottomWidth: 3,
          borderBottomColor: '#E8E8E8',
          paddingBottom: 20,
        }}>
        <FontAwesome5
          style={{color: '#00425F', fontSize: 28, marginLeft: -22}}
          name={'chevron-left'}
          onPress={() => navigation.navigate('Account Creation')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 400,
            marginTop: 5,
          }}>
          Create an Account
        </Text>
        <FontAwesome5
          style={{color: '#828282', fontSize: 28, marginRight: -20}}
          name={'question-circle'}
        />
      </View>

      <View>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 20,
            fontWeight: 600,
            color: '#00425F',
          }}>
          How should we address you?
        </Text>
      </View>

      <View style={styles.input}>
        <Text
          style={{
            marginRight: 270,
            color: '#00425F',
            fontSize: 14,
            fontWeight: 400,
            marginBottom: 10,
          }}>
          Activity Name{' '}
          <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
        </Text>
        <TextInput
          placeholder="(E.g Saturday run)"
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            height: 70,
            marginBottom: 10,
          }}
        />

        <Text
          style={{
            marginRight: 250,
            color: '#00425F',
            fontSize: 14,
            fontWeight: 400,
            marginBottom: 10,
          }}>
          Select an Activity{' '}
          <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
        </Text>

        <TextInput
          placeholder="(E.g Walk)"
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            marginBottom: 10,
            height: 70,
          }}
        />
        <FontAwesome5
          style={{
            marginLeft: 300,
            fontSize: 22,
            position: 'relative',
            marginTop: -65,
            marginBottom: 50,
          }}
          name={'caret-down'}
        />

        <Text
          style={{
            marginRight: 270,
            color: '#00425F',
            fontSize: 14,
            fontWeight: 400,
            marginBottom: 10,
          }}>
          Activity Name{' '}
          <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
        </Text>
        <TextInput
          placeholder="(E.g Saturday run)"
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            height: 70,
            marginBottom: 10,
          }}
        />

        <Text
          style={{
            marginRight: 250,
            color: '#00425F',
            fontSize: 14,
            fontWeight: 400,
            marginBottom: 10,
          }}>
          Select an Activity{' '}
          <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
        </Text>

        <TextInput
          placeholder="(E.g Walk)"
          style={{
            backgroundColor: '#E8E8E8',
            width: 370,
            paddingLeft: 15,
            marginBottom: 10,
            height: 70,
          }}
        />
        <FontAwesome5
          style={{
            marginLeft: 300,
            fontSize: 22,
            position: 'relative',
            marginTop: -65,
            marginBottom: 50,
          }}
          name={'caret-down'}
        />

        <View style={{flexDirection: 'row', gap: 10}}>
          <View>
            <Text
              style={{
                color: '#00425F',
                fontSize: 14,
                fontWeight: 400,
                marginBottom: 10,
              }}>
              Measure <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
            </Text>

            <TextInput
              placeholder="Distance"
              style={{
                backgroundColor: '#E8E8E8',
                width: 180,
                paddingLeft: 15,
                height: 70,
              }}
            />
            <FontAwesome5
              style={{
                marginLeft: 150,
                fontSize: 22,
                position: 'absolute',
                marginTop: 50,
              }}
              name={'caret-down'}
            />
          </View>

          <View>
            <Text
              style={{
                color: '#00425F',
                fontSize: 14,
                fontWeight: 400,
                marginBottom: 10,
              }}>
              Set Measure{' '}
              <Text style={{color: '#DC4437', fontWeight: 700}}>*</Text>
            </Text>
            <TextInput
              placeholder="12.0 km"
              style={{
                backgroundColor: '#E8E8E8',
                width: 180,
                paddingLeft: 50,
                height: 70,
                fontSize: 21,
                color: '#7f8A99',
              }}
            />
            <FontAwesome5
              style={{
                marginLeft: 10,
                fontSize: 18,
                position: 'absolute',
                marginTop: 50,
              }}
              name={'minus'}
            />
            <FontAwesome5
              style={{
                marginLeft: 150,
                fontSize: 18,
                position: 'absolute',
                marginTop: 50,
              }}
              name={'plus'}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 400,
            color: '#3077BD',
          }}>
          Next Step
        </Text>
        <FontAwesome5
          style={{fontSize: 18, color: '#3077BD', marginTop: 5}}
          name={'chevron-right'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default RegistrationInfo;
