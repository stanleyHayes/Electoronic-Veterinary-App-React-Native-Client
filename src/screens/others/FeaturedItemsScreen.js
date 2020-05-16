import React from 'react';
import {Container, Text, Content, Card, CardItem, Icon} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import FeaturedShopItem from '../../components/shared/FeaturedShopItem';
import FeaturedProductItem from '../../components/shared/FeaturedProductItem';

function FeaturedItemsScreen({shops, products, navigation}) {

    return (
        <Container>
            <Content style={styles.container}>
                <Card>
                    <CardItem bordered={true}>
                        <View style={styles.featuredItemContainer}>
                            <Text>Shops</Text>
                            {
                                (shops.length === 0) ? (
                                    <View style={styles.emptyContainer}>
                                        <Text style={styles.emptyText}>No featured shops</Text>
                                    </View>
                                ) : (
                                    <FlatList
                                        horizontal={true}
                                        data={shops}
                                        keyExtractor={function (item, index) {
                                            return index.toString();
                                        }}
                                        renderItem={function ({item}) {
                                            return (
                                                <FeaturedShopItem item={item} navigation={navigation}/>
                                            );
                                        }}/>
                                )
                            }
                        </View>

                    </CardItem>
                    <CardItem bordered={true}>
                        <View style={styles.seeMoreContainer}>
                            <Text>See All </Text>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </View>
                    </CardItem>
                </Card>

                <Card>
                    <CardItem bordered={true}>
                        <View style={styles.featuredItemContainer}>
                            <Text>Products</Text>
                            {
                                (products.length === 0) ? (
                                    <View style={styles.emptyContainer}>
                                        <Text style={styles.emptyText}>No Featured Products</Text>
                                    </View>
                                ) : (
                                    <FlatList
                                        horizontal={true}
                                        data={products}
                                        keyExtractor={function (item, index) {
                                            return index.toString();
                                        }}
                                        renderItem={function ({item}) {
                                            return (
                                                <FeaturedProductItem item={item} navigation={navigation}/>
                                            );
                                        }}/>
                                )
                            }
                        </View>
                    </CardItem>
                    <CardItem bordered={true}>
                        <View style={styles.seeMoreContainer}>
                            <Text>See All </Text>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </View>
                    </CardItem>
                </Card>

            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
    },
    emptyText: {
        fontWeight: 'bold',
        color: '#aaaaaa',
    },
    featuredItemContainer: {
        flex: 1,
    },
    seeMoreContainer: {
        flexDirection: "row",
        justifyContent: "center",
        flex: 1
    }
});

const mapStateToProps = function (state) {
    return {
        shops: state.shop.shops,
        products: state.product.products,
        productLoading: state.product.loading,
        shopLoading: state.shop.loading,
    };
};

export default connect(mapStateToProps)(FeaturedItemsScreen);
