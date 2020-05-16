import React from 'react';
import {Container, Text} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import ClinicListItem from '../../components/shared/ClinicListItem';
import {connect} from 'react-redux';

function NearbyClinicsScreen({clinics, navigation}) {
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
                                    <ClinicListItem navigation={navigation} item={item}/>
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
});

const mapStateToProps = function (state) {
    return {
        clinics: state.clinic.clinics,
    };
};

export default connect(mapStateToProps)(NearbyClinicsScreen);
