import React from 'react';
import {Container, Content, H1, Text} from 'native-base';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import AppointmentItem from '../../components/shared/AppointmentItem';

function UpcomingAppointmentsScreen({appointments, navigation}) {

    return (
        <Container>
            <View style={styles.container}>
                {
                    (appointments.length === 0) ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No upcoming appointments</Text>
                        </View>
                    ) : (
                        <FlatList
                            data={appointments}
                            keyExtractor={function (item, index) {
                                return index.toString();
                            }}
                            renderItem={function ({item}) {
                                return (
                                    <AppointmentItem item={item} navigation={navigation}/>
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
        appointments: state.appointment.appointments,
    };
};

export default connect(mapStateToProps)(UpcomingAppointmentsScreen);
