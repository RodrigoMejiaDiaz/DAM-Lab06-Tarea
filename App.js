import 'react-native-gesture-handler';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LaLista from './components/LaLista';
import Details from './components/Details';
import Login from './components/Login';

const Stack = createStackNavigator();

const App = () => {
  const LogoTitle2 = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>Ofertas</Text>
      </View>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#F0F8F'}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Ofertas"
          component={LaLista}
          options={{
            detachPreviousScreen: true,
            header: props => <LogoTitle2 {...props} />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    margin: 10,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: '300',
  },
});
