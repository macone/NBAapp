import React, {Component} from 'react';
import { Platform, StyleSheet, ScrollView, View, Text } from 'react-native';


class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Hello world</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff',
	},
});

export default App;
