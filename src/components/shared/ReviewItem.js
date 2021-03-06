import React from 'react';
import {CardItem, Card, Thumbnail, Left, Body, Text} from 'native-base';
import {Rating} from 'react-native-ratings';
import {StyleSheet} from 'react-native';

function ReviewItem({item}) {
    return (
        <Card>
            <CardItem bordered={true}>
                <Left>
                    <Thumbnail
                        source={{uri: item.author.image}}
                        circular={true}
                        small={true}
                    />

                    <Body>
                        <Text style={styles.name}>{item.author.name}</Text>
                        <Text style={styles.date}>{new Date(item.createdAt).toDateString()}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem bordered={true}>
                <Text style={styles.review}>{item.review}</Text>
            </CardItem>
            <CardItem>
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
    image: {
        width: 300,
        flex: 1,
        height: 300,
        borderRadius: 24,
    },
    card: {
        maxWidth: '100%',
    },
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    date: {
        fontSize: 12,
        color: '#777777',
    },
    review: {
        width: '100%',
        color: '#777777',
    },
});

export default ReviewItem;
