import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Modal,
  // CheckBox,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native/Libraries/Components/Button';
// import CheckBox from '@react-native-community/checkbox';

const AccountCreation = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
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
            Create an Account
          </Text>
        </View>

        <Text
          style={{
            marginLeft: 15,
            marginTop: 20,
            color: '#00425F',
            fontSize: 20,
            fontWeight: 600,
          }}>
          Tell us about you.
        </Text>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <View style={{flexDirection: 'row', gap: 10, marginBottom: 10}}>
            <TextInput
              placeholder="First Name"
              style={{
                backgroundColor: '#E8E8E8',
                height: 70,
                paddingLeft: 15,
                width: 180,
              }}
            />
            <TextInput
              placeholder="Last Name"
              style={{
                backgroundColor: '#E8E8E8',
                height: 70,
                paddingLeft: 15,
                width: 180,
              }}
            />
          </View>

          <View>
            <TextInput
              placeholder="Email Address"
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
                height: 70,
              }}
            />
            <TextInput
              placeholder="Phone Number"
              keyboardType="numeric"
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
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
                marginBottom: 10,
                height: 70,
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={true}
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
                height: 70,
              }}
            />
            <TextInput
              placeholder="Gender"
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
                height: 70,
              }}
            />
            <TextInput
              placeholder="Country"
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
                height: 70,
              }}
            />
            <TextInput
              placeholder="Referral Code (Optional)"
              style={{
                backgroundColor: '#E8E8E8',
                width: 370,
                paddingLeft: 15,
                marginBottom: 10,
                height: 70,
              }}
            />

            {/* <View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text>I agree to Terms of Service and Privacy Policy</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={isSelected}
                  onValueChange={setSelection}
                  style={styles.checkbox}
                />
                <Text>I agree I am 13 years old or above</Text>
              </View>
            </View> */}
          </View>

          <View>
            <Text
              onPress={() => {
                setSubmit(true);
              }}
              style={{
                backgroundColor: '#3077BD',
                width: 360,
                textAlign: 'center',
                color: '#FFFFFF',
                padding: 15,
                fontSize: 16,
                marginBottom: 20,
                fontWeight: 600,
                borderRadius: 20,
              }}>
              CREATE ACCOUNT
            </Text>
          </View>

          <Modal transparent={true} visible={submit}>
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  margin: 50,
                  flex: 0.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 20,
                  marginTop: 210,
                }}>
                <Text
                  style={{
                    fontSize: 28,
                    textAlign: 'center',
                    marginBottom: 20,
                    fontWeight: 600,
                  }}>
                  Account Created Successfully
                  <FontAwesome5
                    style={{color: 'green', fontSize: 25}}
                    name={'check-circle'}
                  />
                </Text>

                <Text
                  onPress={() => navigation.navigate('Registration Info')}
                  style={{
                    backgroundColor: '#3077BD',
                    width: 100,
                    textAlign: 'center',
                    color: '#FFFFFF',
                    padding: 15,
                    fontSize: 16,
                    marginBottom: 20,
                    fontWeight: 600,
                    borderRadius: 20,
                  }}>
                  Done
                </Text>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountCreation;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
});
