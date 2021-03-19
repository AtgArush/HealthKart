// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import colors from '../../styles/colors';
// import imagePath from '../../constants/imagePath';
// import styles from './styles';
// import navigationStrings from '../../constants/navigationStrings';

// export default function OuterScreen({navigation}) {
//   return (
//     // <View style={styles.outerBox}>
//     //   <View
//     //     style={{flex: 0.65, justifyContent: 'center', alignItems: 'center'}}>
//     //     <Text style={{paddingVertical: 20, fontSize: 35, color: colors.white}}>
//     //       HEALT
//     //       <Text
//     //         style={{
//     //           paddingVertical: 20,
//     //           backgroundColor: colors.white,
//     //           fontSize: 38,
//     //           color: colors.themeColor,
//     //         }}>
//     //         HK
//     //       </Text>
//     //       ART
//     //     </Text>
//     //   </View>
//     //   <View style={{flex: 0.3, justifyContent: 'flex-end'}}>
//     //     <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//     //       <TouchableOpacity style={styles.bottomButton}>
//     //         <Text>Sign Up</Text>
//     //       </TouchableOpacity>
//     //       <TouchableOpacity style={styles.bottomButton}>
//     //         <Text>Sign Up</Text>
//     //       </TouchableOpacity>
//     //     </View>
//     //   </View>
//     // </View>
//     <View style={{flex: 1}}>
//       <View style={styles.topBar}>
//         <View>

//         </View>
//         <View style={{paddingLeft: 15}}>
//           <Text style={styles.subhead}>Medics at Door</Text>
//         </View>
//       </View>
//       <View style={{height: 580}}>
//         {/* <Text style={styles.bodyHead}>Hello there user</Text> */}
//         <View style={styles.buttonBox}>
//           <TouchableOpacity
//             style={{alignItems: 'center'}}
//             // onPress={() =>
//             //   navigation.navigate(navigationStrings.LOGINUSERNAME)
//             // }
//           >
//             <Text style={styles.buttonText}>LOGIN</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={{alignItems: 'center', marginTop: 30}}>
//           <View style={styles.orSection}>
//             <View style={styles.horizontalLines}></View>
//             <Text style={{marginHorizontal: 25}}>OR</Text>
//             <View style={styles.horizontalLines}></View>
//           </View>
//         </View>
//         <View style={styles.buttonBox}>
//           <TouchableOpacity
//             style={{alignItems: 'center'}}
//             // onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
//           >
//             <Text style={styles.buttonText}>SIGN UP</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }


import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.topBar}>
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
          <View style={{paddingLeft: 15}}>
            <Text style={styles.subhead}>Medics on Doorstep</Text>
          </View>
        </View>
        <View style={{height: 580}}>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() =>
                navigation.navigate(navigationStrings.LOGIN)
              }>
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={styles.orSection}>
              <View style={styles.horizontalLines}></View>
              <Text style={{marginHorizontal: 25}}>OR</Text>
              <View style={styles.horizontalLines}></View>
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.buttonBox, {marginTop: 125, backgroundColor: "black"}]}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigation.navigate(navigationStrings.SIGN_UP)}>
              <Text style={styles.buttonText}>Having trouble signing in?</Text>
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
    backgroundColor: colors.whiteBtnText,
    borderBottomRightRadius: 80,
  },
  heading: {
    marginTop: 90,
    color: colors.white,
    fontSize: 65,
    alignSelf: 'center',
    fontFamily: "Lato-Black"
  },
  subhead: {
    color: colors.backgroundColor,
    fontSize: 40,
    marginBottom: 30,
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: "Roboto-Bold"
  },
  bodyHead: {
    color: colors.themeMain,
    fontSize: 35,
    marginTop: 40,
    marginLeft: 15,
    fontFamily: "Roboto-Bold"
  },
  buttonBox: {
    backgroundColor: colors.whiteBtnText,
    marginTop: 50,
    marginHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
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
    marginTop: 25,
    alignItems: 'center',
  },
});
