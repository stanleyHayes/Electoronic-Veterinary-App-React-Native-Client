import React from 'react';
import {CardItem, Card, H2, Text, Body, Left, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function ProductItem({item, navigation, clickable}) {

    return (
        <Card>
            <CardItem
                onPress={() => navigation.navigate('ProductInformationScreen',{product: item})}
                button={clickable}
                bordered={true}>
                <Left>
                    <Thumbnail
                        large={true}
                        circular={true}
                        source={{uri: item.image}}
                    />
                    <Body style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 200,
    },
    price: {
        fontSize: 16,
        color: '#777777',
    },
    infoContainer: {
        alignItems: 'flex-start',
    },
    name: {
        fontWeight: "bold",
        fontSize: 20
    },
    category: {
        fontSize: 12,
        color: "#777777"
    }
});

export default ProductItem;
