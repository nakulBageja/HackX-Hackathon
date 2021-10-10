import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  headerMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  headerHeading: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subheading: {fontSize: 16},
  flatlistContainer: {
    alignItems: 'center',
    marginTop: 12,
    maxWidth: '100%',
  },
  screenContainer: {flex: 1, paddingHorizontal: 20},
});
