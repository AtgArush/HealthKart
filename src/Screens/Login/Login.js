// import React, {useEffect, useState} from 'react';
// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import BorderTextInput from '../../Components/BorderTextInput';
// import ButtonWithLoader from '../../Components/ButtonWithLoader';
// import GradientButton from '../../Components/GradientButton';
// import WrapperContainer from '../../Components/WrapperContainer';
// import strings from '../../constants/lang';
// import {
//   moderateScaleVertical,
//   moderateScale,
// } from '../../styles/responsiveSize';
// import styles from './styles';
// import {otpTimerCounter} from '../../utils/helperFunctions';
// import colors from '../../styles/colors';
// import fontFamily from '../../styles/fontFamily';
// import imagePath from '../../constants/imagePath';
// import navigationStrings from '../../constants/navigationStrings';
// import TextInputWithLabel from '../../Components/TextInputWithLabel';
// import actions from '../../redux/actions/index';

// export default function OtpVerification({navigation}) {
//   const [state, setState] = useState({
//     email: '',
//     password: '',
//   });
//   const updateState = data => setState(state => ({...state, ...data}));

//   const moveToNewScreen = (screenName, data) => () => {
//     navigation.navigate(screenName, {});
//   };

//   const _onLogin = () => {
//     // actions.login({
//     //   email:"ha@hyp.com",
//     //   pwd:'122132'
//     // }).then(res=>{

//     // })
//     navigation.navigate(navigationStrings.OTP_VERIFICATION);
//   };
//   const {timer} = state;
//   return (
//     <WrapperContainer>
//       <View
//         style={{
//           height: moderateScaleVertical(80),
//           borderBottomColor: colors.borderLight,
//           paddingHorizontal: moderateScale(24),
//           justifyContent: 'center',
//           borderBottomWidth: 2,
//         }}>
//         <TouchableOpacity
//           onPress={() => navigation.goBack(null)}
//           style={{alignSelf: 'flex-start'}}>
//           <Image source={imagePath.back} />
//         </TouchableOpacity>
//       </View>
//       <KeyboardAwareScrollView
//         showsVerticalScrollIndicator={false}
//         style={{
//           flex: 1,

//           marginHorizontal: moderateScale(24),
//         }}>
//         <View style={{height: moderateScaleVertical(48)}} />
//         <Text style={styles.header}>{strings.LOGIN_YOUR_ACCOUNT}</Text>
//         <Text style={styles.txtSmall}>{strings.ENTE_REGISTERED_EMAIL}</Text>
//         <View style={{height: moderateScaleVertical(50)}} />
//         <BorderTextInput placeholder={strings.YOUR_EMAIL} />
//         <BorderTextInput placeholder={strings.ENTER_PASSWORD} />

//         <TextInputWithLabel label="Email" placeholder="Enter your email" />

//         <GradientButton
//           containerStyle={{marginTop: moderateScaleVertical(10)}}
//           onPress={_onLogin}
//           btnText={strings.LOGIN_ACCOUNT}
//         />

//         <ButtonWithLoader
//           containerStyle={{marginTop: moderateScaleVertical(10)}}
//           onPress={_onLogin}
//           btnText={strings.LOGIN_ACCOUNT}
//         />
//         <View style={{marginTop: moderateScaleVertical(50)}}>
//           <View style={styles.socialRow}>
//             <View style={styles.hyphen} />
//             <Text style={styles.orText}>{strings.OR_LOGIN_WITH}</Text>
//             <View style={styles.hyphen} />
//           </View>
//           <View style={styles.socialRowBtn}>
//             <TouchableOpacity>
//               <Image source={imagePath.google} />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image source={imagePath.fb} />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image source={imagePath.insta} />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Image source={imagePath.apple} />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={styles.bottomContainer}>
//           <Text style={{...styles.txtSmall, color: colors.textGreyLight}}>
//             {strings.ALREADY_HAVE_AN_ACCOUNT}
//             <Text
//               onPress={moveToNewScreen(navigationStrings.SIGN_UP)}
//               style={{
//                 color: colors.themeColor,
//                 fontFamily: fontFamily.futuraBtHeavy,
//               }}>
//               {' '}
//               {strings.SIGN_UP}
//             </Text>
//           </Text>
//         </View>
//       </KeyboardAwareScrollView>
//     </WrapperContainer>
//   );
// }
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, StyleSheet} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      login: false,
    };
  }

  getInputValue = (value) => {
    this.setState({username: value}, ()=>{
      console.log(this.state)
    })
  };

  loginClicked = () => {
    let loginDetail = this.state.username;
    if(loginDetail == ""){
      alert("Too excited? You forgot to enter username!")
    }else{
      this.props.navigation.navigate(navigationStrings.LOGINPASSWORD, {name: loginDetail})
    }
  };

  render() {
    let {navigation} = this.props;

    return (
      <View style = {{flex: 1}}>
        <View style = {styles.topBar}>
          <View>
          <Text style={styles.heading}>
            <Text
            style={{paddingVertical: 20, fontSize: 42, color: colors.white}}>
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
          <View style = {{paddingLeft: 15}}>
          <Text style = {styles.headerText}>Good morning,</Text>
          <Text style = {[styles.headerText, {marginBottom: 70}]}>Login to start shopping</Text>
          </View>

        </View>
        <View style = {{height: 580}}>
        <TextInput onChangeText = {(value)=> this.getInputValue(value) } style = {styles.input} 
        placeholder = "Username"
        />
        <View style = {styles.forgotButton}>
          <Text style = {styles.forgotText}>Forgot Username?</Text>
        </View>
        <View style = {styles.loginButton}>
          <TouchableOpacity style = {{alignItems: "center"}}
          onPress={() => this.loginClicked()}
          >
            <Text style = {styles.loginText}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.signUpButton}>
          <Text style = {{marginBottom: 15}}>Dont have an account yet? Create one</Text>
          <TouchableOpacity style = {styles.signup} onPress={() => navigation.navigate(navigationStrings.SIGNUP)}>
            <Text style = {styles.signupText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  topBar:{
    height: 350, backgroundColor: colors.whiteBtnText, justifyContent: "space-between", borderBottomRightRadius: 80
  },
  header:{
    marginTop: 70, color: "white", fontSize: 55, fontWeight: "bold", alignSelf: "center"
  },
  headerText:{
    color: "#eee", fontSize: 30, fontWeight: "bold"
  },
  input:{
    marginHorizontal: 25, borderBottomWidth: 2, borderBottomColor: "#555", marginTop: 45, color: "#777", fontSize: 22, paddingLeft: 10
  },
  forgotButton:{
    display: "flex", justifyContent: "flex-end", flexDirection: "row", marginTop: 25, marginRight: 25
  },
  forgotText:{
    color: colors.whiteBtnText, fontSize: 18
  },
  loginButton:{
    backgroundColor: colors.whiteBtnText, marginTop: 30, marginHorizontal: 30, paddingVertical: 16, borderRadius: 10
  },
  loginText:{
    color: "white", fontSize: 20, fontWeight: "bold"
  },
  signUpButton:{
    alignItems: "center", marginTop:120
  },
  signup:{
    marginHorizontal: 100, backgroundColor: 'black', borderRadius: 10
  },
  signupText:{
    fontWeight: "bold", color: "white", paddingHorizontal: 50, paddingVertical: 15
  }
}
)
