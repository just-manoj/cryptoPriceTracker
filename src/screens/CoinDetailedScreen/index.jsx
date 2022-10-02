import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import coin from '../../assets/data/crypto.json';

const CoinDetailedScreen = () => {
  return (
    <View>
      <Ionicons name='chevron-back-sharp' size={30} color='white' />
      <Image source={{ uri: coin.image.thumb }} style={{}} />
      <Text>CoinDetailedScreen</Text>
    </View>
  );
};

export default CoinDetailedScreen;
