import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable } from 'react-native';

const icon = require('./assets/favicon.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* <Image source={icon} style={{ width: 200, height: 200, resizeMode: 'center' }} />
      <Image source={{ uri: "https://static.wikia.nocookie.net/peppapedia/images/c/c3/Pedre.webp/revision/latest?cb=20241118155220&path-prefix=es" }} style={{ width: 215, height: 294 }} /> */}
      {/* <Text style={{ color: 'white' }}>Inicio de app</Text> */}

      <Pressable
        onPress={() => {

        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(255, 1, 1)' : 'red',

          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text style={{
            fontSize: pressed ? 32 : 16,
          }}>{pressed ? 'S.O.S' : 'S.O.S'}</Text>
        )}
      </Pressable>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
