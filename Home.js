import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, SectionList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {datasource} from './Data.js'

const renderItem = ({ item, section, index, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {

                navigation.navigate('Edit', {
                    name: item.name,
                    image: item.image,
                    type: section.title,
                    index: index,
                });
            }}
        >
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

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="ADD POKEMON" onPress={() => navigation.navigate('Add')} />
            </View>

            <StatusBar hidden={true} />
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, section, index }) => renderItem({ item, section, index, navigation })}
                renderSectionHeader={({ section: { title, bgColor, icon, headerColor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
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

export default Home;
