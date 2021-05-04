import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      textValue2: '',
      login: false,
    };
  }

  handlerLogin = () => {
    if (this.state.textValue == 'user' && this.state.textValue2 == '123') {
      // console.log(this.props.navigation);
      this.props.navigation.navigate('Ofertas');
    } else {
      Alert.alert('Error', 'Credenciales incorrectas');
    }
  };

  changeTextInput = (text, name) => {
    this.setState({[name]: text});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.iniciar}>Iniciar Sesión</Text>

        <Image
          style={styles.image}
          source={require('../img/This_is_fine.png')}
        />

        <Text style={styles.user}>Usuario:</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.changeTextInput(text, 'textValue')}
          value={this.state.textValue}
        />

        <Text style={styles.user}>Contraseña:</Text>

        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          onChangeText={text => this.changeTextInput(text, 'textValue2')}
          value={this.state.textValue2}
        />

        <View style={[styles.container2]}>
          <TouchableOpacity style={styles.button} onPress={this.handlerLogin}>
            <Text> Iniciar sesión </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text> Registrarse </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container2: {
    // backgroundColor: 'red',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iniciar: {
    // backgroundColor: 'red',
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
  },
  user: {
    // backgroundColor: 'white',
    padding: 20,
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 300 / 2,
  },
  button: {
    top: 20,
    backgroundColor: '#DDDDDD',
    flexGrow: 0.2,
    alignItems: 'center',
    padding: 10,
  },

  textInput: {
    backgroundColor: 'white',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginLeft: 40,
    marginRight: 40,
  },
});
