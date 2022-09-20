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
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>1</Text>
            </View>
            <Text style={styles.text}>BTC</Text>
            <AntDesign
              name='caretdown'
              size={15}
              color='green'
              style={{ alignSelf: 'center', marginRight: 3 }}
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
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 3,
  },
  text: {
    color: 'white',
    fontSize: 12,
    marginRight: 5,
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
  rank: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  rankContainer: {
    backgroundColor: '#585858',
    alignSelf: 'center',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 5,
    marginRight: 5,
  },
});
