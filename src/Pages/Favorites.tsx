import React from "react";
import { Box, Center, FlatList, Heading, ScrollView, Text } from "@gluestack-ui/themed";
import ListFavorites from "../components/ListFavorites";
import { useSelector } from "react-redux";

function Favorites():JSX.Element {

    const list: any[] = useSelector((state:any) => state.SelectedFavorites)

    if (list.length == 0) {
        return(
            <Center flex={1} backgroundColor="#0F111d">
                <Heading color="#fff" fontSize={20}>
                    Não há filmes ou séries favoritados
                </Heading>
            </Center>
        );
    }
    else {
        return(
                <Box flex={1} backgroundColor="#0F111D">
                    <Center mt={45} >
                        <FlatList 
                        data={list}
                        keyExtractor={(item:any) => item.name}
                        renderItem={({item}:any) => <ListFavorites name={item.name} pathImage={item.pathImage}/>}
                        showsVerticalScrollIndicator={false}
                        
                        />
                    </Center>
                </Box>
        );
    }

}

export default Favorites;