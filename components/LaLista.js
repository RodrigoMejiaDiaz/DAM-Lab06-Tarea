import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

function Item({title, image, sale, price, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.containerText}>
          <Text style={styles.titulo}>{title}</Text>
          <View style={styles.containerPrecios}>
            <Text
              style={
                (styles.precios,
                {textDecorationLine: 'line-through', paddingRight: 9})
              }>
              Precio normal: {price}
            </Text>
            <Text style={styles.precios}>Precio de oferta: {sale} $</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export class LaLista extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      error: null,
    };
  }

  async componentDidMount() {
    await fetch(
      'https://www.cheapshark.com/api/1.0/deals?storeID=3&metacritic=89&lowersPrice=1',
    )
      .then(res => res.json())
      .then(
        result => {
          // console.warn('result:', result);
          this.setState({
            items: result,
          });
        },
        error => {
          this.setState({
            error: error,
          });
        },
      );
  }
  render() {
    return (
      <>
        <FlatList
          data={this.state.items.length > 0 ? this.state.items : []}
          renderItem={({item}) => {
            return (
              <Item
                title={item.title}
                image={item.thumb}
                sale={item.salePrice}
                price={item.normalPrice}
                onPress={() =>
                  this.props.navigation.navigate('Details', {
                    link: item.metacriticLink,
                    title: item.title,
                  })
                }
                // onPress={() => console.log(this.props.navigation)}
              />
            );
          }}
          keyExtractor={item => item.dealID}
        />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 1,
    marginBottom: 5,
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    resizeMode: 'cover',
    height: 50,
    width: 150,
  },
  titulo: {
    fontSize: 20,
  },
  containerPrecios: {
    flexDirection: 'row',
  },
  precios: {
    paddingEnd: 10,
    fontSize: 15,
  },
});

export default LaLista;
