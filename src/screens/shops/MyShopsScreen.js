import React from "react";
import {Container, Text} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import MyShopItem from '../../components/shared/MyShopItem';

function MyShopsScreen({shops, navigation}) {

    return (
        <Container>
            <View style={styles.container}>
                {
                    (shops.length === 0) ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No shops</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={shops}
                            keyExtractor={function (item, index) {
                                return index.toString();
                            }}
                            renderItem={function ({item}) {
                                return (
                                    <MyShopItem item={item} navigation={navigation}/>
                                );
                            }}/>
                    )
                }
            </View>
        </Container>
    )
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

const mapStateToProps = function (state) {
    return {
        shops: state.shop.shops
    }
}

export default connect(mapStateToProps)(MyShopsScreen);
