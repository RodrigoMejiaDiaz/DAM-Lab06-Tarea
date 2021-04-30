import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LaLista from './components/LaLista';
import Details from './components/Details';
import Login from './components/Login';
import Settings from './components/Settings';
import Video from './components/Video';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const LogoTitle2 = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.textHeader}>Ofertas</Text>
      </View>
    );
  };
  function ListaStack() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          inactiveBackgroundColor: '#f2f2f2',
        }}>
        <Tab.Screen
          name="Listado"
          component={LaLista}
          options={{
            tabBarLabel: 'Listado',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="text-box"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={Video}
          options={{
            tabBarLabel: 'Video',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="video" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: 'Ajustes',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#F0F8F'}}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="Ofertas"
          component={ListaStack}
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
