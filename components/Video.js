import React from 'react';
import {StyleSheet, Text, View, Dimensions, useState} from 'react-native';
import Video from 'react-native-video';
import videoFile from '../video/1.mp4';

const VideoComp = () => {
  const {width} = Dimensions.get('window');
  const [ispaused, setIsPaused] = React.useState(true);
  return (
    // <View style={styles.container}>
    //   <Video
    //     source={require('../video/1.mp4')} // Can be a URL or a local file.
    //     ref={ref => {
    //       this.player = ref;
    //     }} // Store reference
    //   />
    // </View>
    <View style={styles.container}>
      <Text style={styles.titulo}>El video</Text>
      <View style={{backgroundColor: 'red'}}>
        <Video
          source={videoFile}
          paused={ispaused}
          controls={true}
          style={{width: width, height: 300}}
          playInBackground={false}
        />
      </View>
    </View>
  );
};

export default VideoComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  titulo: {
    fontSize: 30,
    alignSelf: 'center',
    marginVertical: 10,
  },
});
