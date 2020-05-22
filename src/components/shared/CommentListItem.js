import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Thumbnail, Text} from 'native-base';

function CommentListItem({item}) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Thumbnail
                    source={{uri: item.author.image || `https://vectorified.com/images/icon-png-transparent-10.jpg`}}
                />
            </View>
            <View style={styles.commentContainer}>

                <Text>{item.author.name}</Text>
                <Text>{item.comment}</Text>

                <View>
                    <Text>{new Date(item.dateCreated).toDateString()}</Text>
                </View>

                <View>
                    <Text>View Replies ({item.replies.length})</Text>
                    <View>

                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    imageContainer: {

    },
    commentContainer: {
        flex: 1
    }

});

export default CommentListItem;
