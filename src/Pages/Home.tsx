import React, { useEffect, useState } from "react";
import { Box, FlatList, Heading} from "@gluestack-ui/themed";
import api from "../services/api";
import ListPopularMovies from "../components/ListPopularMovies";

function Home():JSX.Element {

    const [listFilmesPopular, setListFilmesPopular] = useState([]);

    async function loadFilmsPopular() {
        const response = await api.get('discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc')
        .then(response => {
            setListFilmesPopular(response.data.results);
        })
        .catch(err => console.log(err));
    }

    useEffect(() => {
        loadFilmsPopular();
    }, [listFilmesPopular]); 

    return(
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
                
            />
            
        </Box>
    );
}

export default Home;