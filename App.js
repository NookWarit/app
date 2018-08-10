import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { StackNavigator } from 'react-navigation'

// class ImportUsers extends Component{

// }
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hey</Text>
        <Text>My Project</Text>
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
