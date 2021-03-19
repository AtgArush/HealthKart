import React from 'react';
import {
  LandingPage,
  Login,
  LoginPassword,
  OtpVerification,
  OuterScreen,
  Signup,
} from '../Screens';
import navigationStrings from '../constants/navigationStrings';


export default function (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LANDING_PAGE}
        component={LandingPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OUTER_SCREEN}
        component={OuterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.SIGN_UP}
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.LOGINPASSWORD}
        component={LoginPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{headerShown: false}}
      />
    </>
  );
}
