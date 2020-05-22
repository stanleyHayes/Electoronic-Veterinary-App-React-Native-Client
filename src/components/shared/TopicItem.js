import React from 'react';
import {CardItem, Card, Left, Body, Right, Thumbnail, Text, H3, Icon} from 'native-base';
import {Avatar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

function TopicItem({item, navigation}) {

    function getInitials(name) {
        const names = name.split(' ');
        return `${names[0][0]} ${names[1][0]}`;
    }

    return (
        <Card>
            <CardItem
                onPress={()=> (navigation.navigate("TopicCommentsScreen", {topic: item}))}
                bordered={true} header={true} button={true}>
                <Left>
                    {(item.author.image) ?
                        (<Thumbnail small={true} source={{uri: item.author.image}} circular={true}/>) : (
                            <Avatar.Text size={48} label={getInitials(item.author.name)}/>
                        )}
                    <Body>
                        <Text style={styles.authorName}>{item.author.name}</Text>
                        <Text style={styles.createdAt}>{new Date(item.createdAt).toDateString()}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem bordered={true}>
                <Body>
                    <Text style={styles.subject}>{item.subject}</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </Body>
            </CardItem>
            <CardItem bordered={true}>
                <Left>
                    <Text style={styles.replyText}>{item.replies.length} {item.replies.length === 1 ? "reply": "replies"}</Text>
                </Left>
                <Body>
                    <Text style={styles.replyText}>{item.favorites.length} favorites</Text>
                </Body>
                <Right>
                    {
                        item.replies.includes(item.author.id) ? (
                            <Icon name="favorite" type="MaterialIcons" color={"red"}/>
                        ) : (
                            <Icon name="favorite-border" type="MaterialIcons"/>
                        )
                    }
                </Right>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    createdAt: {
        fontSize: 12,
        color: '#aaaaaa',
    },
    replyText: {
        fontSize: 14,
        color: '#888888',
        fontWeight: "bold"
    },
    descriptionText: {
        color: "#888888",
        fontSize: 14
    },
    authorName: {
        fontWeight: "bold",
        fontSize: 20
    },
    subject: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#777777"
    }
});
export default TopicItem;
