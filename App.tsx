import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component<{}, { active: boolean }> {

  constructor(props: {}) {
    super(props);
    this.state = { active: true };
  }

  render() {
    console.log(`App.tsx:12 should match ====>`)
    return (
      <View style={styles.container}>
        <Text>React Native & TypeScript</Text>
        <Text>Active {this.state.active ? 'YES' : 'NO'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
