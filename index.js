import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class ExampleComponent extends React.PureComponent {
  render() {
    const contents = this.props.records.map(record => (
      <Text key={record.name}>
        {record.name}: {record.value}
        {'\n'}
      </Text>
    ));
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>Congratulation!</Text>
        <Text>This page is rendered using React Native!</Text>
        <Text>Here are all the data from native code:</Text>
        <Text style={styles.scores}>{contents}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});

AppRegistry.registerComponent('native-connected', () => ExampleComponent);
