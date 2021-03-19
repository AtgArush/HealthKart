import * as React from 'react';
//import NavigationService from './navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useSelector} from 'react-redux';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

function Routes(props) {
  // console.log(props);
  const userData = useSelector(state => state.auth.userData);
  // console.log(userData);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userData && AuthStack(Stack)}
        {MainStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  data: state,
});

export default connect(mapStateToProps)(Routes);