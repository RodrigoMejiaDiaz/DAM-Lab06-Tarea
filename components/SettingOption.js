import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SettingOption = props => {
  return (
    <TouchableOpacity style={{flex: 1}}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name={props.icon}
          style={styles.iconVertical}
          size={20}
        />
        <Text style={styles.text}>{props.name}</Text>
        {/* <View style={{justifyContent: 'flex-end'}}> */}
        <MaterialCommunityIcons
          name={'chevron-right'}
          style={[styles.iconVertical, {paddingEnd: 10}]}
          size={20}
        />
        {/* </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default SettingOption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    // paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 15,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
    // justifyContent: 'center,
    paddingLeft: 10,
  },
  iconVertical: {
    // flex: 1,
    // paddingTop: 4,
  },
});
