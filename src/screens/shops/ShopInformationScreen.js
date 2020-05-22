import React from 'react';
import {Container, Content, H2, Text, Icon, Separator, Card, CardItem} from 'native-base';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/shared/ProductItem';
import ReviewItem from '../../components/shared/ReviewItem';


function ShopInformationScreen({route, navigation}) {

    const {shop} = route.params;

    return (
        <Container>
            <Content style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            fadeDuration={300}
                            source={{uri: shop.image}}
                        />
                    </View>

                    <View style={styles.productInfoContainer}>
                        <H2 style={styles.name}>{shop.name}</H2>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Shop Description</Text>
                        <Text style={styles.description}>{shop.description}</Text>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Location</Text>
                        <Text style={styles.description}>{shop.location.address}</Text>
                        <Text style={styles.description}>{shop.location.city}</Text>
                        <Text style={styles.description}>{shop.location.state}</Text>
                        <Text style={styles.description}>{shop.location.country}</Text>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Owner Information</Text>
                        <Text style={styles.description}>{shop.owner.name}</Text>
                        <Text style={styles.description} dataDetectorType="phoneNumber">{shop.owner.contact}</Text>
                        <Text style={styles.description} dataDetectorType="email">{shop.owner.email}</Text>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Website</Text>
                        <Text style={styles.description}>{shop.website}</Text>
                    </View>

                    <View>
                        <Card>
                            <CardItem>
                                <Text style={styles.label}>Products</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (shop.products.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Products</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={shop.products}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <ProductItem
                                                            clickable={false}
                                                            item={item}
                                                            navigation={navigation}
                                                        />
                                                    );
                                                }}/>
                                        )
                                    }
                                </View>
                            </CardItem>
                            <CardItem bordered={true} style={styles.viewAllContainer}>
                                <Text onPress={()=>(navigation.navigate(''))} style={styles.viewAll}>View all products</Text>
                                <Icon
                                    name="chevron-right"
                                    type="MaterialIcons"/>
                            </CardItem>
                        </Card>
                    </View>

                    <View>
                        <Card>
                            <CardItem bordered={true}>
                                <Text>Top Reviews</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (shop.reviews.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Reviews</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={shop.reviews}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <ReviewItem
                                                            item={item}
                                                        />
                                                    );
                                                }}/>
                                        )
                                    }
                                </View>
                            </CardItem>
                            <CardItem
                                bordered={true}
                                style={styles.viewAllContainer}>
                                <Text style={styles.viewAll}>View all reviews </Text>
                                <Icon name="chevron-right" type="MaterialIcons"/>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    content: {
        backgroundColor: '#eeeeee',
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: null,
        height: 300,
    },
    productInfoContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
        paddingBottom: 8,
        backgroundColor: '#eeeeee',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        marginTop: -50,
    },
    container: {
        backgroundColor: '#eeeeee',
        flex: 1,
    },
    label: {
        marginTop: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 4,
    },
    category: {
        fontSize: 16,
        color: '#777777',
        marginVertical: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    description: {
        color: '#777777',
        marginVertical: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 28,
    },
    addToCartButton: {
        flex: 1,
        marginHorizontal: 4,
    },
    item: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 8,
        alignItems: 'center',
    }, ratingIcon: {
        color: 'orange',
    },
    ratingText: {
        marginHorizontal: 8,
        fontSize: 20,
    },
    separator: {
        paddingVertical: 16,
        marginVertical: 8,
    },
    viewAll: {
    },
    viewAllContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    emptyContainer: {
        flex: 1,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 32,
    },
    emptyText: {
        fontWeight: 'bold',
        color: '#aaaaaa',
    },
});


export default ShopInformationScreen;
