import React from "react";
import {Container, Text} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from "react-redux";
import ProductItem from '../../components/shared/ProductItem';

function ShopProductsScreen({ products, navigation}) {

    return (
        <Container>
            <View style={styles.container}>
                {
                    (products.length === 0) ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No Products</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={products}
                            keyExtractor={function (item, index) {
                                return index.toString();
                            }}
                            renderItem={function ({item}) {
                                return (
                                    <ProductItem item={item} navigation={navigation}/>
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
        products: state.product.products
    }
}

export default connect(mapStateToProps)(ShopProductsScreen);
