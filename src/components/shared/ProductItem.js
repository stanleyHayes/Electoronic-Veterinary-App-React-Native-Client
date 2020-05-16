import React from 'react';
import {CardItem, Card, H2, Text, Body} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function ProductItem({item, navigation}) {
    return (
        <Card>
            <CardItem
                onPress={() => navigation.navigate('ProductsTopTabsNavigator',
                    {
                        screen: 'ProductInformationScreen',
                        params: {product: item},
                    }, {
                        screen: 'ProductReviewsScreen',
                        params: {product: item},
                    },
                )}
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
                    <H2>{item.name}</H2>
                    <Text style={styles.price}>${item.price}</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    image: {
        width: null,
        flex: 1,
        height: 300,
    },
    price: {
        fontSize: 20,
        color: '#777777',
    },
    infoContainer: {
        alignItems: 'center',
    },
});

export default ProductItem;
