import React from 'react';

import {TouchableHighlight, Text} from 'react-native';

const CardComponent = () =>{

    return(
        <TouchableHighlight>
        <Text style={{color:"red"}}>External Component</Text>
        </TouchableHighlight>
    );
}
export default CardComponent;