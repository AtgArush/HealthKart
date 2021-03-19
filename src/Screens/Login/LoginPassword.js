import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {login} from '../../apis/auth';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      login: false,
    };
  }
  getInputValue = value => {
    this.setState({password: value}, () => {
      console.log(this.state);
    });
  };

  loginClicked = () => {
    let loginDetail = this.state.password;
    if (loginDetail == '') {
      alert('You forgot to enter your password');
    } else {
      // this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION);
      login({
        email: this.props.route.params.name,
        password: this.state.password,
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      // AsyncStorage.setItem('loggedIn', 'true')
      //   .then(res => {
      //     this.props.navigation.navigate(navigationStrings.OTP_VERIFICATION);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  };

  render() {
    let username = this.props.route.params.name;
    return (
      <View style={{flex: 1}}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.heading}>
              <Text
                style={{
                  paddingVertical: 20,
                  fontSize: 42,
                  color: colors.white,
                }}>
                HEALT
                <Text
                  style={{
                    paddingVertical: 20,
                    backgroundColor: colors.white,
                    fontSize: 45,
                    color: colors.themeColor,
                  }}>
                  HK
                </Text>
                ART
              </Text>
            </Text>
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={styles.headerText}>Hi, {username}</Text>
            <Text style={[styles.headerText, {marginBottom: 70}]}>
              Welcome back!!
            </Text>
          </View>
        </View>
        <View style={{height: 580}}>
          <TextInput
            onChangeText={value => this.getInputValue(value)}
            style={styles.inputField}
            placeholder="Password"
          />
          <View style={styles.forgotPasswordButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </View>
          <View style={styles.login}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => this.loginClicked()}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={styles.orSection}>
              <View style={styles.horizontalLines}></View>
              <Text style={{marginHorizontal: 25}}>OR</Text>
              <View style={styles.horizontalLines}></View>
            </View>
          </View>
          <View style={styles.login}>
            <TouchableOpacity style={{alignItems: 'center'}}>
              <Text style={styles.loginText}>Use OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topBar: {
    height: 350,
    backgroundColor: colors.themeColor,
    justifyContent: 'space-between',
    borderBottomRightRadius: 80,
  },
  heading: {
    marginTop: 70,
    color: colors.white,
    fontSize: 55,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  headerText: {
    color: colors.subHeadingText,
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputField: {
    marginHorizontal: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#555',
    marginTop: 45,
    color: colors.inputTextColor,
    fontSize: 22,
    paddingLeft: 10,
  },
  forgotPasswordButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 25,
    marginRight: 25,
  },
  login: {
    backgroundColor: colors.themeColor,
    marginTop: 30,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
  },
  loginText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalLines: {
    flex: 0.44,
    height: 2,
    backgroundColor: '#555',
  },
  orSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotText: {
    color: colors.themeMain,
    fontSize: 20,
  },
});
