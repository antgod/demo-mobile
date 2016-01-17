/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} = React;

var Test = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
		<TextInput
			style={{height: 40, borderColor: 'gray', borderWidth: 1}}
			value={'123'}
		  />
			  <Image source={require('./check.png')}
       style={{width: 400, height: 400}} />
        <Text style={styles.welcome}>
          Welcome to React Native111!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'	
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
	padding:15
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Test', () => Test);
