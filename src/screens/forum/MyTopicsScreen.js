import React from 'react';
import {Container} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import TopicItem from '../../components/shared/TopicItem';
import {Text} from "native-base";

function MyTopicsScreen({topics, navigation}) {

    return (
        <Container>
            <View style={styles.container}>
                {
                    (topics.length === 0) ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No authored topics</Text>
                        </View>
                    ): (
                        <FlatList
                            data={topics}
                            keyExtractor={function (item, index) {
                                return index.toString();
                            }}
                            renderItem={function ({item}) {
                                return <TopicItem navigation={navigation} item={item} />
                            }} />
                    )
                }
            </View>
        </Container>
    );
}


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        backgroundColor: "#eeeeee",
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#dddddd"

    },
    emptyText: {
        fontWeight: "bold",
        color: "#aaaaaa"
    }
});

function mapStateToProps(state) {
    return {
        topics: state.forum.myTopics,
    };
}

export default connect(mapStateToProps)(MyTopicsScreen);
