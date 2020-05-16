import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Left, Body, Thumbnail, H3, Text} from 'native-base';


function AppointmentItem({item, navigation}) {

    return (
        <Card>
            <CardItem
                onPress={()=> (navigation.navigate("AppointmentDetailScreen", {appointment: item}))}
                button={true}
                bordered={true}
                header={true}>
                <Left>
                    <Thumbnail
                        source={{uri: item.clinic.image}}
                        circular={true}
                    />
                    <Body>
                        <Text style={styles.clinic}>{item.clinic.name}</Text>
                        <Text style={styles.location}>{item.clinic.location}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem bordered={true}>
                <Body>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </Body>
            </CardItem>
            <CardItem bordered={true}>
                <Left>
                    <Thumbnail
                        source={{uri: item.pet.image}}
                        circular={true}
                    />
                    <Body>
                        <H3>{item.pet.name}</H3>
                    </Body>
                </Left>
            </CardItem>
            <CardItem bordered={true}>
                <Body>
                    <Text>
                        <Text style={styles.date}>{new Date(item.appointmentDate).toDateString()}</Text>
                        {' '}at{' '}
                        <Text style={styles.time}>{item.appointmentTime} </Text> AM</Text>
                </Body>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    location: {
        color: '#aaaaaa',
        fontSize: 12,
    },
    clinic: {
        fontSize: 18,
    },
    date: {
        fontSize: 20,
    },
    time: {
        fontSize: 20,
    },
    descriptionText: {
        fontSize: 14,
        color: '#777777',
    },
});


export default AppointmentItem;
