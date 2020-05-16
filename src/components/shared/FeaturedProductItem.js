import React from 'react';
import {CardItem, Card, Body, Text} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function FeaturedProductItem({item, navigation}) {

    return (
        <Card>
            <CardItem
                onPress={() => navigation.navigate('ProductDetailsTopTabsNavigator', {product: item})}
                button={true}
                bordered={true}>
                <Image
                    height={150}
                    source={{uri: item.image}}
                    style={styles.image}
                    borderRadius={8}
                    fadeDuration={300}
                />
            </CardItem>
            <CardItem bordered={true}>
                <Body style={styles.infoContainer}>
                    <Text>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        flex: 1,
        height: 300,
    },
    price: {
        fontSize: 16,
        color: '#777777',
    },
    infoContainer: {
        alignItems: 'center',
    },
});

export default FeaturedProductItem;
