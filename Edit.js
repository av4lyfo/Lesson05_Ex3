import React, { useState } from 'react';
import { datasource } from './Data.js';
import { TextInput, View, Text, Button, Alert } from 'react-native';

const Edit = ({ navigation, route }) => {
    const { name: initialName, image: initialImage, type, index } = route.params;
    const [name, setName] = useState(initialName);
    const [image, setImage] = useState(initialImage);

    return (
        <View style={{ padding: 10 }}>
            {/* Input for Name */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Name:</Text>
                <TextInput
                    value={name}
                    maxLength={50}
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setName(text)}
                />
            </View>

            {/* Input for Image URL */}
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    value={image}
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setImage(text)}
                />
            </View>

            {/* Buttons */}
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let indexNum = datasource.findIndex((section) => section.title === type);

                            if (indexNum !== -1 && datasource[indexNum].data[index]) {
                                datasource[indexNum].data[index] = { name, image };
                                navigation.navigate('Home');
                            } else {
                                alert('Error saving changes');
                            }
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 10 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            let indexNum = datasource.findIndex((section) => section.title === type);

                            if (indexNum !== -1) {
                                Alert.alert('Are you sure?', '', [
                                    {
                                        text: 'Yes',
                                        onPress: () => {
                                            datasource[indexNum].data.splice(index, 1);
                                            navigation.navigate('Home');
                                        },
                                    },
                                    { text: 'No' },
                                ]);
                            }
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
