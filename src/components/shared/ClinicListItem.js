import React from 'react';
import {CardItem, Card, Body, H2, Text} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';

function ClinicListItem({item, navigation}) {

    return (
        <Card>
            <CardItem
                onPress={()=> (navigation.navigate("ClinicDetailsTopTabsNavigator", {clinic: item}))}
                button={true} bordered={true}>
                <Image
                    source={{uri: item.image}}
                    borderRadius={8}
                    style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered={true} button={true}>
                <Body>
                    <H2>{item.name}</H2>
                    <Text style={styles.aboutText}>{item.about}</Text>
                </Body>
            </CardItem>
            <CardItem bordered={true}>
                <Body>
                    <Rating
                        ratingCount={5}
                        minValue={0}
                        startingValue={item.rating}
                        type="star"
                        imageSize={28}
                        fractions={1}
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

export default ClinicListItem;
