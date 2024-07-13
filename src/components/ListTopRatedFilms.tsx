import { Box, Icon, Image, Text, StarIcon, HStack } from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { id_film } from "../Redux/Reducers/idFilme";

type props = {
    pathImage: string,
    name: string
    vote_average: string,
    id: string
}

function ListTopRatedFilms({pathImage, name, vote_average, id}:props):JSX.Element {

    const navigation = useNavigation();

    const dipatch = useDispatch();

    return(
        <Box borderRadius={10} backgroundColor="#292B37" width={200} height={390} ml={20} >
            
            <TouchableOpacity activeOpacity={0.5} onPress={ () => {
                dipatch(id_film(id));
                navigation.navigate('PageSelected' as never);
            }}>
            
                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="image films" height={260} width={200} borderRadius={10} borderBottomLeftRadius={0} borderBottomRightRadius={0}/>

                <Box padding={15} >
            
                    <Text color="#fff" bold fontSize={17} mb={15}>
                        {name}
                    </Text>
            
                    <HStack space="xs" alignItems="center">
                        <Icon as={StarIcon} size="md" color="#FFE500"/>
                        <Text color="#fff" >
                            {vote_average}
                        </Text>
                    </HStack>
                </Box>
            
            </TouchableOpacity>
        
        </Box>
    );
}

export default ListTopRatedFilms