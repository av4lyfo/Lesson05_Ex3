import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SectionList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const datasource = [
  {
    title: 'ELECTRIC',
    bgColor: '#f6d934',
    headerColor: '#ebfb0d',
    icon: 'bolt',
    data: [
      { name: 'Pikachu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png' },
      { name: 'Raichu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_26-2x.png' }
    ]
  },
  {
    title: 'FIRE',
    bgColor: 'orange',
    icon: 'fire',
    headerColor: '#e65b0e',
    data: [
      { name: 'Charmeleon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_5-2x.png' },
      { name: 'Charizard', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6-2x.png' },
    ]
  }
];

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.items}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="ADD POKEMON"  onPress={() => alert('Pokemon Added!')} />
        </View>

        <StatusBar hidden={true} />
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgColor, icon, headerColor } }) => (
                <View style={[styles.headerContainer, { backgroundColor: bgColor }]} >
                  <Icon name={icon} size={30} color={headerColor} style={styles.icons} />
                  <Text style={styles.headerText}>{title}</Text>
                  <Icon name={icon} size={30} color={headerColor} style={styles.icons} />
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
  },
  image:{
    flex: 1,
    height: 300,
    width: '100%',
    marginRight:10
  },
  container:{
    flex: 1,
    margin:10,
    marginBottom:40,
    marginTop:40,
    backgroundColor:'#a195d6'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
  },
  headerText: {
    flex:1,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  items:{
    flexDirection: 'row',
  },
  icons: {
    margin: 10,
  },

})

export default App;
