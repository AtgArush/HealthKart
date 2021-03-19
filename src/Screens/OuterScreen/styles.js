import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';

// export default StyleSheet.create({
//   outerBox: {
//     flex: 1,
//     backgroundColor: colors.themeColor,
//   },
//   bottomButton: {
//     flex: 0.4,
//     backgroundColor: "white",
//     alignItems: "center",
//     paddingVertical: 10,
    
//   }
// });

const styles = StyleSheet.create({
  topBar: {
    height: 350,
    backgroundColor: colors.themeColor,
    borderBottomRightRadius: 80,
  },
  heading: {
    marginTop: 90,
    color: "blue",
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
    backgroundColor: colors.themeMain,
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
    outerBox: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
  bottomButton: {
    flex: 0.4,
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 10,
    
  }
});