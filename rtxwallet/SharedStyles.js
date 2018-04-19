import { StyleSheet } from 'react-native';
import { LOGO_COLOR } from './Colors.js';

const shared = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  flexOne: {
    flex: 1,
  },
  flexZero: {
    flex: 0,
  },
  noPadding: {
    padding: 0,
  },
  inCardButton: {
    padding: 4,
    margin: 4,
    color: LOGO_COLOR,
    fontSize: 16,
  },
  accountHeader: {
    fontSize: 16,
    color: LOGO_COLOR,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    flex: 1,
    padding: 10,
  },
  selectableText: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: LOGO_COLOR,
    margin: 10,
    padding: 10,
    fontSize: 14,
  },
  baseText: {
    fontSize: 14,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#BDBDBD',
    margin: 5,
    marginLeft: -10,
    marginRight: -10,
  },
  cancelButton: {
    color: 'red',
  },
  boldText: {
    fontWeight: 'bold',
  },
  greenButton: {
    color: 'green',
  },
});

export default shared;