import React, {useEffect} from 'react';
import {Container, Content, H2, Text, H3, Button, Icon, Separator} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';


function ProductInformationScreen({navigation, route}) {

    console.log('Dangerously Get State', navigation.dangerouslyGetState());
    // const {product} = route.params;
    // console.log('product', product);
    return (
        <Container>
            <Content style={styles.content}>
                {/*<View style={styles.container}>*/}
                {/*    <View style={styles.imageContainer}>*/}
                {/*        <Image*/}
                {/*            style={styles.image}*/}
                {/*            fadeDuration={300}*/}
                {/*            source={{uri: product.image}}*/}
                {/*        />*/}
                {/*    </View>*/}

                {/*    <View style={styles.productInfoContainer}>*/}
                {/*        <H2 style={styles.name}>{product.name}</H2>*/}
                {/*        <Separator  style={styles.separator} bordered={true}>*/}
                {/*            <View style={styles.item}>*/}
                {/*                <Text style={styles.label}>Category</Text>*/}
                {/*                <Text style={styles.price}>{product.category}</Text>*/}
                {/*            </View>*/}
                {/*        </Separator>*/}

                {/*        <Separator style={styles.separator} bordered={true}>*/}
                {/*            <View style={styles.item}>*/}
                {/*                <Text style={styles.label}>Price</Text>*/}
                {/*                <H3 style={styles.price}>${product.price}</H3>*/}
                {/*            </View>*/}
                {/*        </Separator>*/}

                {/*        <Separator style={styles.separator} bordered={true}>*/}
                {/*            <View style={styles.item}>*/}
                {/*                <Text style={styles.label}>Average Rating</Text>*/}
                {/*                <Text style={styles.price}>{product.rating}</Text>*/}
                {/*            </View>*/}
                {/*        </Separator>*/}

                {/*        <Text style={styles.label}>Product Description</Text>*/}
                {/*        <Text style={styles.description}>{product.description}</Text>*/}
                {/*        <View style={styles.buttonsContainer}>*/}
                {/*            <Button bordered={true} rounded={true}>*/}
                {/*                <Icon name="favorite" type="MaterialIcons"/>*/}
                {/*            </Button>*/}
                {/*            <Button style={styles.addToCartButton} rounded={true} block={true}>*/}
                {/*                <Text>Add to cart</Text>*/}
                {/*            </Button>*/}
                {/*        </View>*/}
                {/*    </View>*/}
                {/*</View>*/}
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
});

export default ProductInformationScreen;
