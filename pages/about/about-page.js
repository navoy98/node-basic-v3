import React from 'react';
import { View} from 'react-native';
import CardComponent from '../../components/CardComponent'
import aboutStyles from './about-page-styles'

function AboutPage(navigation){
    return(
        <View style={aboutStyles.container}>
           <CardComponent></CardComponent>
           <CardComponent></CardComponent>
        </View>
    );
}

export default AboutPage;