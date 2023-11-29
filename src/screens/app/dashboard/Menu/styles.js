import { StyleSheet } from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    marginRight: 10,
    color: colors.purplelight,
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
  chevronIcon: {
    marginLeft: 10,
    color: colors.purplelight,
  },
});

export default styles