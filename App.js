import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image
          source={{
            uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
          }}
          style={{
            height: 35,
            width: 35,
            marginRight: 10,
            alignSelf: 'center',
          }}
        />
        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name='caretdown'
              size={18}
              color='green'
              style={{ alignSelf: 'center' }}
            />
            <Text style={styles.text}>0.83%</Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto' }}>
          <Text style={styles.title}>56265.76</Text>
          <Text style={styles.text}>MCap 1.976 T</Text>
        </View>
      </View>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
});
