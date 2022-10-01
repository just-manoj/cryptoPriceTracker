import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';

import CoinItem from './src/components/CoinItem';
import coinDetails from './src/assets/data/cryptocurrencies.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={coinDetails}
        keyExtractor={(coinData) => coinData.id}
        renderItem={({ item }) => <CoinItem {...item} />}
      />
      {/* <CoinItem /> */}
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 30,
    paddingHorizontal: 5,
  },
});
