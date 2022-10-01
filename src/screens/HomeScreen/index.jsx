import { View, FlatList } from 'react-native';

import CoinItem from '../../components/CoinItem';
import cryptoCurrencies from '../../assets/data/cryptocurrencies.json';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={cryptoCurrencies}
        keyExtractor={(coinData) => coinData.id}
        renderItem={({ item }) => <CoinItem {...item} />}
      />
    </View>
  );
};

export default HomeScreen;
