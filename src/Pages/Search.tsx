import React, { useEffect, useState } from "react";
import { Box, Center, FlatList, Input, InputField, InputIcon, InputSlot, ScrollView, SearchIcon } from "@gluestack-ui/themed";
import api from "../services/api";
import ListTopRatedFilms from "../components/ListTopRatedFilms";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

function Search():JSX.Element {

    const [nameFilm, setNameFilm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        async function search() {
            const response = await api.get(`search/movie?query=${nameFilm}&language=pt-BR`)
            .then(response => {
                setResults(response.data.results);
                
            })
            .catch(err => console.log(err))
        }
        
        search();
    }, [nameFilm]);


    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box flex={1} backgroundColor="#0F111D" justifyContent="center" alignItems="center">
            
                <Box mt={50} mb={120}>
                
                    <Input w="90%" borderRadius={10} h={55} backgroundColor="#fff" $focus-borderColor="#000">
                    
                        <InputSlot>
                            <InputIcon as={SearchIcon} ml={10} size="md" color="#000"/>
                        </InputSlot>
                    
                        <InputField 
                            placeholder="Pesquisar filme ou série" color="#000" 
                            placeholderTextColor="#000"
                            onChangeText={(text) => setNameFilm(text)}
                            fontSize={17}
                            fontWeight="$medium"
                        />
                    </Input>

                </Box>
                
                <FlatList 
                    data={results}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}:any) => <ListTopRatedFilms pathImage={item.poster_path} name={item.title} vote_average={item.vote_average} id={item.id}/>}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                />
                    
                
            </Box>
        </TouchableWithoutFeedback>
    );
}

export default Search;