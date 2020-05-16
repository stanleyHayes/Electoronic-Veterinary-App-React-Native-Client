import React from 'react';
import {Card, CardItem, Left, Body, H2, Text} from 'native-base';
import {Image, StyleSheet} from 'react-native';

function ShopItem({item, navigation}) {
    return (
        <Card>
            <CardItem
                onPress={()=> (navigation.navigate("ShopDetailsTopTabsNavigator", {shop: item}))}
                bordered={true} button={true} header={true}>
                <Image
                    source={{uri: item.image}}
                    style={styles.image}
                    borderRadius={8}
                    fadeDuration={300}
                />
            </CardItem>
            <CardItem button={true} bordered={true}>
                <Body>
                    <H2>{item.name}</H2>
                    <Text style={styles.descriptionText}>{item.description}</Text>
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
    descriptionText: {
        fontSize: 14,
        color: '#777777',
    },
});

export default ShopItem;
