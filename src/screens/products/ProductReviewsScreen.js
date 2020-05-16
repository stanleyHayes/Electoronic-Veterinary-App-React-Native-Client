import React from "react";
import {Container, Content, H1} from 'native-base';
import {StyleSheet} from 'react-native';

function ProductReviewsScreen({route, navigation}) {
    console.log('Dangerously Get State', navigation.dangerouslyGetState());

    return (
        <Container>
            <Content>
                <H1>Product Reviews</H1>
            </Content>
        </Container>
    )
}


const styles = StyleSheet.create({

})

export default ProductReviewsScreen;
