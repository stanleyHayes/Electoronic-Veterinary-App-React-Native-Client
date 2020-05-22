import React from 'react';
import {Card, CardItem, Thumbnail, Body, H3, Text, Left} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import ProductItem from './ProductItem';

function ShopItem({item, navigation}) {
    return (
        <Card>
            <CardItem
                onPress={() => (navigation.navigate('ShopDetailStackNavigator',
                        {
                            screen: 'ShopInformationScreen',
                            params: {shop: item},
                        })
                )} bordered={true} button={true} header={true}>
                <Left>
                    <Thumbnail
                        borderRadius={8}
                        large={true}
                        circular={true}
                        source={{uri: item.image}}
                    />
                    <Body>
                        <H3>{item.name}</H3>
                        <Text style={styles.descriptionText}>{item.description}</Text>
                    </Body>
                </Left>

            </CardItem>
            <CardItem bordered={true}>

                <View style={styles.container}>
                    {
                        (item.products.length === 0) ? (
                            <View style={styles.emptyContainer}>
                                <Text style={styles.emptyText}>No Products</Text>
                            </View>
                        ) : (
                            <FlatList
                                horizontal={true}
                                data={item.products}
                                keyExtractor={function (item, index) {
                                    return index.toString();
                                }}
                                renderItem={function ({item}) {
                                    return (
                                        <ProductItem clickable={false} item={item} navigation={navigation}/>
                                    );
                                }}/>
                        )
                    }
                </View>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    descriptionText: {
        fontSize: 14,
        color: '#777777',
    },
    image: {
        width: 300,
        flex: 1,
        height: 300,
        borderRadius: 24,
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
    emptyText: {
        fontWeight: 'bold',
        color: '#aaaaaa',
        paddingVertical: 16,
    },
});

export default ShopItem;
