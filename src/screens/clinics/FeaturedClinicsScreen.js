import React from 'react';
import {Container, Text} from 'native-base';
import {Animated, FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import FeaturedClinicItem from '../../components/shared/FeaturedClinicItem';

function FeaturedClinicsScreen({clinics, navigation}) {

    Animated.timing({
        useNativeDriver: true
    });

    return (
        <Container>
            <View style={styles.container}>
                {
                    (clinics.length === 0) ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No clinics</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={clinics}
                            keyExtractor={function (item, index) {
                                return index.toString();
                            }}
                            renderItem={function ({item}) {
                                return (
                                    <FeaturedClinicItem navigation={navigation} item={item}/>
                                );
                            }}/>
                    )
                }
            </View>
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
    carouselContainer: {

    },
    instructionText: {},
    deckerContainer: {
        flex: 1
    },
    instructionContainer: {
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignItems: 'center'
    }
});

const mapStateToProps = function (state) {
    return {
        clinics: state.clinic.clinics,
    };
};


export default connect(mapStateToProps)(FeaturedClinicsScreen);
