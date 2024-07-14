import { Box, FavouriteIcon, Heading, HStack, Icon, Image } from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { removeInList } from "../Redux/Reducers/favorites";

type props = {
    pathImage: string,
    name: string
}

function ListFavorites({pathImage, name}:props):JSX.Element {

    const dispatch = useDispatch();

    return (
        <Box backgroundColor="#292B37" width={280} height={305} borderRadius={20} mb={20}>
            <Box width="$full" height={200} backgroundColor="#000" borderTopLeftRadius={20} borderTopRightRadius={20}>
                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="imagem filme" w="$full" height={200} borderTopLeftRadius={20} borderTopRightRadius={20}/>
            </Box>
            <Box m={20}>
                <HStack justifyContent="space-between" alignItems="center" space="md">
                    <Heading color="#fff" bold fontSize={17}>
                        {name}
                    </Heading>
                    <TouchableOpacity onPress={() => dispatch(removeInList(name))}>
                        <Icon as={FavouriteIcon} color="#ff024e" size="xl"/>
                    </TouchableOpacity>
                </HStack>
            </Box>
        </Box>
    );
}

export default ListFavorites;