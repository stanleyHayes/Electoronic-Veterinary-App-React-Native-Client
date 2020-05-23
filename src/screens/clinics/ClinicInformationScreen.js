import React from 'react';
import {Card, CardItem, Container, Content, H1, H2, Icon, Separator, Text} from 'native-base';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import ProductItem from '../../components/shared/ProductItem';
import ReviewItem from '../../components/shared/ReviewItem';
import GalleryItem from '../../components/shared/GalleryItem';
import DoctorItem from '../../components/shared/DoctorItem';
import FacilityItem from '../../components/shared/FacilityItem';
import ServiceItem from '../../components/shared/ServiceItem';
import {Rating} from 'react-native-ratings';
import HorizontalReviewItem from '../../components/shared/HorizontalReviewItem';

function ClinicInformationScreen({route, navigation}) {
    const {clinic} = route.params;

    return (
        <Container>
            <Content style={styles.content}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image}
                            fadeDuration={300}
                            source={{uri: clinic.image}}
                        />
                    </View>

                    <View style={styles.productInfoContainer}>
                        <H2 style={styles.name}>{clinic.name}</H2>

                        <Rating
                            style={styles.rating}
                            ratingCount={5}
                            minValue={0}
                            startingValue={clinic.rating}
                            type="heart"
                            imageSize={32}
                            fractions={1}
                            readonly={true}
                            ratingBackgroundColor="white"
                            ratingColor="red"
                            tintColor="white"
                        />

                        <Separator bordered={true}/>

                        <Text style={styles.label}>About Clinic</Text>
                        <Text style={styles.description}>{clinic.about}</Text>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Location</Text>
                        <Text style={styles.description}>{clinic.location.address}</Text>
                        <Text style={styles.description}>{clinic.location.city}</Text>
                        <Text style={styles.description}>{clinic.location.state}</Text>
                        <Text style={styles.description}>{clinic.location.country}</Text>

                        <Separator bordered={true}/>

                        <Text style={styles.label}>Contact</Text>
                        <Text style={styles.description} dataDetectorType="phoneNumber">{clinic.contact}</Text>
                        <Text style={styles.description} dataDetectorType="email">{clinic.email}</Text>
                        <Text style={styles.description} dataDetectionType="link">{clinic.website}</Text>
                    </View>

                    <View style={styles.resource}>
                        <Card>
                            <CardItem>
                                <Text style={styles.label}>Services</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (clinic.services.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Services</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={clinic.services}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <ServiceItem
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
                        </Card>
                    </View>

                    <View style={styles.resource}>
                        <Card>
                            <CardItem>
                                <Text style={styles.label}>Facilities</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (!clinic.facilities) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Facilities</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={clinic.facilities}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <FacilityItem
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
                        </Card>
                    </View>

                    <View style={styles.resource}>
                        <Card>
                            <CardItem>
                                <Text style={styles.label}>Doctors</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (clinic.doctors.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Doctors</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={clinic.products}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <DoctorItem
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
                                <Text onPress={() => (navigation.navigate(''))} style={styles.viewAll}>View all
                                    doctors</Text>
                                <Icon
                                    name="chevron-right"
                                    type="MaterialIcons"/>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.resource}>
                        <Card>
                            <CardItem>
                                <Text style={styles.label}>Gallery</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (clinic.gallery.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Images</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={clinic.gallery}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <GalleryItem
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
                                <Text onPress={() => (navigation.navigate(''))} style={styles.viewAll}>View all
                                    pictures</Text>
                                <Icon
                                    name="chevron-right"
                                    type="MaterialIcons"/>
                            </CardItem>
                        </Card>
                    </View>

                    <View style={styles.resource}>
                        <Card>
                            <CardItem bordered={true}>
                                <Text>Top Reviews</Text>
                            </CardItem>
                            <CardItem bordered={true}>
                                <View style={styles.container}>
                                    {
                                        (clinic.reviews.length === 0) ? (
                                            <View style={styles.emptyContainer}>
                                                <Text style={styles.emptyText}>No Reviews</Text>
                                            </View>
                                        ) : (
                                            <FlatList
                                                horizontal={true}
                                                data={clinic.reviews}
                                                keyExtractor={function (item, index) {
                                                    return index.toString();
                                                }}
                                                renderItem={function ({item}) {
                                                    return (
                                                        <HorizontalReviewItem
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
        backgroundColor: '#eee',
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
        backgroundColor: 'white',
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
        marginVertical: 4,
    },
    viewAll: {},
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

    resource: {
        marginVertical: 2,
    },
    rating: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        marginVertical: 4,
        flex: 1,
    },
});

export default ClinicInformationScreen;
