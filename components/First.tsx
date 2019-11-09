import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>First components</Text>
        </View>
        /*<View>
          <TextInput>enter text</TextInput>
        </View>*/
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
