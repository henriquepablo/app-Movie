import { HStack, Image, Box} from "@gluestack-ui/themed";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch} from "react-redux";
import { id_film } from "../Redux/Reducers/idFilme";

type props = {
    pathImage: string
    id: string
}

function ListPopularMovies({pathImage, id}:props):JSX.Element {

    const navigation = useNavigation();

    const dipatch = useDispatch();

    return(
        <Box borderRadius={10} backgroundColor="#00000087" width={160} height={250} ml={20} >
            
            <TouchableOpacity activeOpacity={0.5} onPress={ () => {
                dipatch(id_film(id));
                navigation.navigate('PageSelected' as never);
            }}>
            
                <Image source={{uri: `https://image.tmdb.org/t/p/original${pathImage}`}} alt="image films" height={250} width={160} borderRadius={10}/>
                
            </TouchableOpacity>
        
        </Box>
    );
}

export default ListPopularMovies;