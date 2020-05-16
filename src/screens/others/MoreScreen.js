import React from 'react';
import {Container, Content, List, ListItem, Left, Body, Right, H2, Icon, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

function MoreScreen({navigation}) {
    return (
        <Container>
            <Content>
                <List>
                    <ListItem
                        thumbnail={true}
                        button={true}
                        onPress={() => (navigation.navigate('ProfileStackNavigator'))}>
                        <Left>
                            <Avatar.Text label="SH"/>
                        </Left>
                        <Body>
                            <H2
                                ellipsizeMode="tail"
                                numberOfLines={1}>
                                Stanley Hayford
                            </H2>
                            <Text
                                style={styles.visitProfileText}>Visit
                                Profile</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('MyShopsStackNavigator'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="shop" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Shops</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('PetsStackNavigator'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="pets" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Pets</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('SettingsScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="settings" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Settings</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('ChangePasswordScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="lock" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Change Password</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('TermsAndConditionsScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="book" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Terms and Policies</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        thumbnail={true}>
                        <Left>
                            <Icon name="share" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Invite Friends</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('AboutScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="info" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>About e-Vet</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('HelpAndSupportScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="help" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Help & Support</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        button={true}
                        onPress={()=> (navigation.navigate('ProfileScreen'))}
                        thumbnail={true}>
                        <Left>
                            <Icon name="exit-to-app" type="MaterialIcons"/>
                        </Left>
                        <Body>
                            <Text>Logout</Text>
                        </Body>
                        <Right>
                            <Icon name="chevron-right" type="MaterialIcons"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}


const styles = StyleSheet.create({
    visitProfileText: {
        color: '#bbbbbb',
        fontSize: 14,
    },
});

export default MoreScreen;
