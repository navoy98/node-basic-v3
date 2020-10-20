import React from 'react';
import {TouchableHighlight, Text, StyleSheet, Dimensions, Image} from 'react-native';

const CardComponent = (props) =>{
    const notFoundImage = "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
    console.log(props);

    return(
        <TouchableHighlight style={cardStyles.card}>
            {/* <Text>Hola</Text> */}
        <Image style={cardStyles.imageStyle} source={{uri: notFoundImage}}></Image>
        </TouchableHighlight>
    );
}

const cardStyles = StyleSheet.create({
    card:{
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('screen').width*0.9,
        height: 350,
        // backgroundColor: '#80cbc4',
        margin: 5,
        borderRadius: 5
    },
    imageStyle:{
        width: Dimensions.get('screen').width*0.9,
        height: 250
    }
})

export default CardComponent;