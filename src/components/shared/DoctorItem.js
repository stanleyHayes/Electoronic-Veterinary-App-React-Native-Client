import React from 'react';
import {CardItem, Card, Body, H2, Text} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function DoctorItem({item}) {
    return (
        <Card style={styles.card}>
            <CardItem bordered={true}>
                <Image
                    source={{uri: item.image}}
                    borderRadius={8}
                    style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered={true} button={true}>
                <Body>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.aboutText}>{item.description}</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 14,
        color: '#777777',
        width: '100%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    captionContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    card: {
        width: 300,
    },
});

export default DoctorItem;
