import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // headerText: {
  //   fontSize: 15,
  //   color: '#737380',
  // },

  // headerTextBold: {
  //   fontWeight: 'bold'
  // },



  // incidentsList: {
  //   marginTop: 32,
  // },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
    marginTop: 48,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    marginTop: 24,
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  heroTitle: {
    fontSize: 20,
    lineHeight: 30,
    color: '#13131a',
    fontWeight: 'bold',
  },

  heroDescription: {
    fontSize: 15,
    marginTop: 16,
    color: '#737380'
  }, 

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold',
  }

});
