import React, { useEffect, useState } from "react";
import { Box, FlatList, Heading} from "@gluestack-ui/themed";
import api from "../services/api";
import ListPopularMovies from "../components/ListPopularMovies";
import ListTopRatedFilms from "../components/ListTopRatedFilms";
import { ScrollView } from "react-native";

function Home():JSX.Element {

    const [listFilmesPopular, setListFilmesPopular] = useState([]);
    const [listFilmsRated, setListFilmsRated] = useState([]);

    async function loadFilmsPopular() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc')
        .then(response => {
            setListFilmesPopular(response.data.results);
        })
        .catch(err => console.log(err));
    }

    async function loadFilmsRated() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200')
        .then(response => {
            setListFilmsRated(response.data.results)
        })
        .catch(err => console.log(err))
        
    }

    useEffect(() => {
        loadFilmsPopular();
        loadFilmsRated();
    }, []); 

    return(
        <ScrollView style={{flex: 1, backgroundColor: '#0F111D'}}>
        <Box flex={1} bg="#0F111D">
            <Box mt={50} ml={20} mb={20}>
                <Heading color="#fff" size="xl" fontFamily="$heading">
                    Filmes Populares
                </Heading>
            </Box>

            <FlatList 
                data={listFilmesPopular}
                keyExtractor={(item:any) => item.id}
                renderItem={({item}:any) => <ListPopularMovies pathImage={item.poster_path} id={item.id} />}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                maxHeight={250}
                mr={20}
            />

            <Box mt={30} ml={20} mb={20}>
                <Heading color="#fff" size="xl" fontFamily="$heading">
                    Mais Votados
                </Heading>
            </Box>

            <FlatList 
                data={listFilmsRated}
                keyExtractor={(item:any) => item.id}
                renderItem={({item}:any) => <ListTopRatedFilms pathImage={item.poster_path} name={item.title} vote_average={item.vote_average} id={item.id}/>}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                maxHeight={370}
                mr={20}
            />
            
        </Box>
        </ScrollView>
    );
}

export default Home;