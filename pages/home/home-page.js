import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList} from 'react-native';
import CardComponent from '../../components/CardComponent';
import homeStyles from './home-page-styles';

function HomePage({navigation}){

    const apiEndPoint = "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=942cf2a4ed2e45f1b1da2996b35af5eb";

    const [news, setNews] = useState([]);
    const fetchNewsApi = async () => {
        const response = await fetch(apiEndPoint);
        const newData = await response.json();
        setNews(newData.articles);
    }

    useEffect(() =>{
        fetchNewsApi();
    },[]);

    return(
        <View style={homeStyles.container}>
            <FlatList data ={news}
                renderItem={({item}) => <CardComponent data={item.urlToImage}></CardComponent>}
                keyExtractor={item => item.publishedAt}>   
            </FlatList>
        </View>
    );
}

export default HomePage;