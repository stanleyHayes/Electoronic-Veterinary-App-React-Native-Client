import React from 'react';
import {CardItem, Card, Body, Text, Left, Thumbnail} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function FeaturedProductItem({item, navigation, clickable}) {

    return (
        <Card>
            <CardItem
                onPress={() => navigation.navigate('ProductDetailStackNavigator',
                    {
                        screen: 'ProductInformationScreen',
                        params: {product: item},
                    },
                )}
                button={clickable}
                bordered={true}>
                <Left>
                    <Thumbnail
                        large={true}
                        square={true}
                        source={{uri: item.image}}
                    />
                    <Body style={styles.infoContainer}>
                        <Text>{item.name}</Text>
                        <Text>{item.category}</Text>
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
        alignItems: 'center',
    },
});

export default FeaturedProductItem;
