import React from 'react';
import {CardItem, Card, Body, H2} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

function FeaturedClinicItem({item, navigation}) {

    return (
        <Card>
            <CardItem
                onPress={()=> (navigation.navigate("ClinicDetailStackNavigator", {clinic: item}))}
                button={true} bordered={true}>
                <Image
                    source={{uri: item.image}}
                    borderRadius={8}
                    style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered={true} button={true}>
                <Body>
                    <H2>{item.name}</H2>
                </Body>
            </CardItem>
            <CardItem bordered={true}>
                <Body>
                    <Rating
                        ratingCount={5}
                        minValue={0}
                        type="heart"
                        startingValue={item.rating}
                        fractions={1}
                        imageSize={28}
                        readonly={true}
                    />
                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    aboutText: {
        fontSize: 14,
        color: "#777777"
    }
})

export default FeaturedClinicItem;
