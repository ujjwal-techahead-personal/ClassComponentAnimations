import React, {Component} from 'react';
import {Animated, Dimensions, Easing, Text, View} from 'react-native';

export class App extends Component {
  state = {spinAnim: new Animated.Value(0), marqueeAnim: new Animated.Value(0)};
  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.marqueeAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    Animated.timing(this.state.spinAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.elastic(3),
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Animated.Text
          style={{
            fontSize: 30,
            width: Dimensions.get('window').width,
            // position: 'absolute',
            // top: 80,
            // right: this.state.marqueeAnim.interpolate({
            //   inputRange: [0, 1],
            //   outputRange: [-260, Dimensions.get('window').width],
            // }),
            alignSelf: 'flex-start',
            transform: [
              {
                translateX: this.state.marqueeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [Dimensions.get('window').width, -260],
                }),
              },
            ],
          }}>
          This too shall pass...
        </Animated.Text>

        <Animated.Image
          source={{
            uri: 'https://cdn.logojoy.com/wp-content/uploads/20210422095037/discord-mascot.png',
          }}
          style={{
            height: 250,
            width: 250,
            transform: [
              {
                rotate: this.state.spinAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

export default App;
