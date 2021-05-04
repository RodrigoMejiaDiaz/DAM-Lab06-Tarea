import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SettingOption from './SettingOption';

const Settings = () => {
  return (
    <View style={styles.container}>
      <SettingOption name={'Account'} icon={'account'} />
      <SettingOption name={'Notifications'} icon={'bell'} />
      <SettingOption name={'Appearance'} icon={'brush'} />
      <SettingOption name={'Privacy & Security'} icon={'security'} />
      <SettingOption name={'Help & Support'} icon={'help-circle'} />
      <SettingOption name={'About'} icon={'information'} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
