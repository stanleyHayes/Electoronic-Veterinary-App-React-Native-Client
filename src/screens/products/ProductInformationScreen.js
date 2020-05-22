import React, {useEffect} from 'react';
import {
    Container,
    Content,
    H2,
    Text,
    H3,
    Button,
    Icon,
    Separator,
    Card,
    CardItem,
    Item,
    Input,
    Body,
} from 'native-base';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import ReviewItem from '../../components/shared/ReviewItem';


function ProductInformationScreen({route}) {

    const {product} = route.params;

    return (
        <Container>
            <Content style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            fadeDuration={300}
                            source={{uri: product.image}}
                        />
                    </View>

                    <View style={styles.productInfoContainer}>
                        <H2 style={styles.name}>{product.name}</H2>

                        <Text style={styles.label}>Category</Text>
                        <Text style={styles.category}>{product.category}</Text>


                        <Separator style={styles.separator} bordered={true}/>


                        <Text style={styles.label}>Price</Text>
                        <H3 style={styles.price}>${product.price}</H3>

                        <Separator style={styles.separator} bordered={true}/>

                        <Text style={styles.label}>Average Rating</Text>

                        <Rating
                            style={styles.rating}
                            ratingCount={5}
                            minValue={0}
                            startingValue={product.rating}
                            type="heart"
                            imageSize={32}
                            fractions={1}
                            readonly={true}
                            ratingBackgroundColor="white"
                            ratingColor="red"
                            tintColor="white"
                        />

                        <Separator style={styles.separator} bordered={true}/>

                        <Text style={styles.label}>Product Description</Text>
                        <Text style={styles.description}>{product.description}</Text>

                        <Separator style={styles.separator} bordered={true}/>

                        <Text style={styles.label}>Location</Text>
                        <Text style={styles.description}>{product.location.address}</Text>
                        <Text style={styles.description}>{product.location.city}</Text>
                        <Text style={styles.description}>{product.location.state}</Text>
                        <Text style={styles.description}>{product.location.country}</Text>

                        <Separator style={styles.separator} bordered={true}/>

                        <Text style={styles.label}>Owner Information</Text>
                        <View style={styles.item}>
                            <Icon style={styles.icon} name="person" type="MaterialIcons" />
                            <Text style={styles.description}>{product.owner.name}</Text>
                        </View>

                        <View style={styles.item}>
                            <Icon style={styles.icon} name="phone" type="MaterialIcons" />
                            <Text style={styles.description} dataDetectorType="phoneNumber">{product.owner.contact}</Text>
                        </View>

                        <View style={styles.item}>
                            <Icon style={styles.icon} name="mail" type="MaterialIcons" />
                            <Text style={styles.description} dataDetectorType="email">{product.owner.email}</Text>
                        </View>


                        <Separator style={styles.separator} bordered={true}/>

                        <View style={styles.buttonsContainer}>
                            <Button bordered={true} rounded={true}>
                                <Icon name="favorite" type="MaterialIcons"/>
                            </Button>
                            <Button style={styles.addToCartButton} rounded={true} block={true}>
                                <Text>Add to cart</Text>
                            </Button>
                        </View>

                        <Separator style={styles.separator} bordered={true}/>

                        <View style={styles.reviewsContainer}>

                            <Text style={styles.label}>Reviews</Text>

                            <View style={styles.reviewsContainer}>
                                <View style={styles.newReviewContainer}>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                                <Item rounded={true} bordered={true} style={styles.inputItem}>
                                                    <Input
                                                        scrollEnabled={true}
                                                        multiline={true}
                                                        maxLength={100}
                                                        label={'review'}
                                                        textContentType="none"
                                                        placeholder="Enter review"/>
                                                </Item>
                                                <Rating
                                                    style={styles.rating}
                                                    ratingCount={5}
                                                    minValue={0}
                                                    startingValue={product.rating}
                                                    type="star"
                                                    imageSize={28}
                                                    fractions={1}
                                                    ratingBackgroundColor="red"
                                                    ratingColor="red"
                                                    tintColor="white"
                                                />
                                                <Button full={true} rounded={true} small={true}>
                                                    <Text>Review</Text>
                                                </Button>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                {
                                    (product.reviews.length === 0) ? (
                                        <View style={styles.emptyContainer}>
                                            <Text style={styles.emptyText}>No Reviews</Text>
                                        </View>
                                    ) : (
                                        <FlatList
                                            data={product.reviews}
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
                        </View>
                    </View>
                </View>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff',
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
        backgroundColor: 'white',
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
        marginVertical: 16,
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 4,
    },
    category: {
        fontSize: 12,
        color: '#777777',
        marginVertical: 4,
        textTransform: 'uppercase',
    },
    price: {
        color: '#777777',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 4,
    },
    description: {
        color: '#777777',
        marginVertical: 4
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
        justifyContent: 'flex-start',
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
        marginVertical: 4,
    },
    rating: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginVertical: 4,
        flex: 1
    }, emptyContainer: {
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
    reviewsContainer: {
        marginVertical: 16,
    },
    newReviewContainer: {},
    inputItem: {
        marginVertical: 8,
    },
    icon: {
        marginRight: 16
    }
});

export default ProductInformationScreen;
