import { Image, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

const CoinItem = (props) => {
  const {
    name,
    image,
    market_cap_rank,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = props;

  const priceChangeColor =
    price_change_percentage_24h >= 1 ? '#16c784' : '#ea3943';

  const normalizeMarketCap = () => {
    if (market_cap >= 1000000000000) {
      return `${Math.floor(market_cap / 1000000000000)}T`;
    }
    if (market_cap >= 1000000000) {
      return `${Math.floor(market_cap / 1000000000)}B`;
    }
    if (market_cap >= 1000000) {
      return `${Math.floor(market_cap / 1000000)}M`;
    }
    if (market_cap >= 1000) {
      return `${Math.floor(market_cap / 1000)}K`;
    }
    return market_cap;
  };
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 35,
          width: 35,
          marginRight: 10,
          alignSelf: 'center',
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h >= 1 ? 'caretup' : 'caretdown'}
            size={15}
            color={priceChangeColor}
            style={{ alignSelf: 'center', marginRight: 3 }}
          />
          <Text style={[styles.text, { color: priceChangeColor }]}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>${current_price}</Text>
        <Text style={{ color: 'white', fontSize: 13 }}>
          MCap {normalizeMarketCap()}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
