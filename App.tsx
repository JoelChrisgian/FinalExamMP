import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserList from './screens/UserList'; // Adjust path if needed
import UserMap from './screens/UserMap';   // Adjust path if needed

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} options={{ title: 'User List' }} />
        <Stack.Screen name="UserMap" component={UserMap} options={{ title: 'User Location' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
