import React, { useState } from 'react';
import { datasource } from './Data.js';
import { TextInput, View, Text, Button } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('FIRE');

    return (
        <View style={{ padding: 10 }}>
            {/* Input for Name */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Name:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setName(text)}
                    placeholder="Enter Pokémon name"
                />
            </View>

            {/* Input for Image URL */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setImage(text)}
                    placeholder="Enter image URL"
                />
            </View>

            {/* Dropdown for Type */}
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: 'Fire', value: 'FIRE' },
                        { label: 'Electric', value: 'ELECTRIC' },
                    ]}
                />
            </View>


            <Button
                title="SUBMIT"
                onPress={() => {
                    let item = { name, image };
                    let indexNum = datasource.findIndex((section) => section.title === type);

                    if (indexNum !== -1 && name && image) {
                        datasource[indexNum].data.push(item);
                        navigation.navigate('Home');
                    } else {
                        alert('Please fill in all fields');
                    }
                }}
            />
        </View>
    );
};

export default Add;
