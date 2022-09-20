import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
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
