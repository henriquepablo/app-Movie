// @ts-nocheck
import { ArrowLeftIcon, Box, Center, Heading, HStack, Icon, Image, Text, ScrollView, StarIcon, PlayIcon, StatusBar, Actionsheet, ActionsheetContent, ActionsheetDragIndicator, FlatList} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, TouchableOpacity } from "react-native";
import { useNavigation} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import api from "../services/api";
import { FavouriteIcon } from "@gluestack-ui/themed";
import { WebView } from 'react-native-webview';
import { CloseCircleIcon } from "@gluestack-ui/themed";
import { addInList, isFavorited } from "../Redux/Reducers/favorites";
import ListTopRatedFilms from "./ListTopRatedFilms";


function PageSelected():JSX.Element {

    const film = useSelector((state:any) => state.Id_Film.value);
    const list: any[] = useSelector((state:any) => state.SelectedFavorites);

    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState(null);
    const [favorite, setFavorite] = useState(false);
    const [genres, setGenres] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [linkVideos, setLinkVideos] = useState();
    const [Recomendations, setRecomendations] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        async function loadDetails() {
            const reponseVideo = await api.get(`movie/${film}/videos`)
            .then(responseVideo => {
                setLinkVideos(responseVideo.data.results[0].key);
            });

            const response = await api.get(`movie/${film}?language=pt-BR`)
            .then(response => {
                setDetails(response.data);
                setGenres(response.data.genres);
                setLoading(false);
                list.forEach((item) => {
                    if(item.name === response.data.title) setFavorite(true);
                });
            })  
            .catch(err => console.log(err));
        }

        async function loadRecommendationsFilm() {
            const response = await api.get(`movie/${film}/recommendations?language=pt-BR`)
            .then(response => {
                setRecomendations(response.data.results);
            })
            .catch(err => console.log(err));
        }

        loadDetails();
        loadRecommendationsFilm();
        

    }, [film]);

    if (loading) {
        return(
            <Center flex={1} backgroundColor="#0F111D">
                <ActivityIndicator color="#fff" size="large" />
            </Center>
        );
    } 
    else {
        
        return(
            <ScrollView showsVerticalScrollIndicator={false}>
                <Box flex={1} backgroundColor="#0F111D">
                    <Box>
                        <Image source={{uri: `https://image.tmdb.org/t/p/original${details.poster_path}`}} alt="image film" height={600} size="full"/>
                        
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{position: "absolute"}}>
                            <Box borderRadius={50} width={50} height={50} backgroundColor="#292B37" justifyContent="center" ml={20} mt={50}>
                                <Icon as={ArrowLeftIcon} size="xl" alignSelf="center" color="#fff"/>
                            </Box>
                        </TouchableOpacity>
                    
                    </Box >
                    
                    <Box ml={20} mt={20}>
                        <HStack alignItems="center" justifyContent="space-between" mr={20}>
                            <Heading color="#fff" fontSize={23}>
                                {details.title}
                            </Heading>

                            <TouchableOpacity onPress={()=> {
                                setFavorite(!favorite)
                                dispatch(isFavorited(!favorite));
                                dispatch(addInList(details.poster_path, details.title));
                            }}>
                                <Icon as={FavouriteIcon} color={favorite ? "#ff024e" : "#fff"} size="xl" />
                            </TouchableOpacity>
                        </HStack>
                        
                        <Text mt={5} color="#979797" bold>
                            {genres.map(item => item.name + "  ")}
                        </Text>
                    </Box>

                    <Box ml={20} mr={20}>
                        <Text textAlign="justify" color="#fff" mt={10} fontSize={17}>
                            {details.overview}
                        </Text>

                        
                    </Box>
                
                    <TouchableOpacity onPress={() => setOpenModal(true)}>
                        <Center>
                            <Box width={330} borderRadius={20} bg="#292B37" h={60} mt={15} mb={15} alignItems="center" justifyContent="center">
                                <HStack alignItems="center" space="md">
                                    <Icon as={PlayIcon} color="#fff" size="xl"/>
                                        <Text color="#fff" bold fontSize={19}>
                                            Ver Trailer
                                        </Text>
                                </HStack>
                            </Box>
                        </Center>
                    </TouchableOpacity>
                </Box>

                <Actionsheet isOpen={openModal} onClose={() => setOpenModal(false)}>
                    <ActionsheetContent backgroundColor="#0F111D" >
                        
                        <ActionsheetDragIndicator />
                        
                        <Box h={480} width="$full" >
                            <WebView source={{uri: `https://www.youtube.com/embed/${linkVideos}`}}  />
                        </Box>

                        <TouchableOpacity onPress={() => setOpenModal(false)} >
                            <Box mt={20} mb={10} >
                                <Icon as={CloseCircleIcon} size="xl" color="#fff" w={400}/>
                            </Box>
                        </TouchableOpacity>
                    </ActionsheetContent>
                </Actionsheet>

                <Box ml={20} mt={20} height="$full">
                    <Heading color="#fff" fontSize={23}>
                        Filmes Recomendados
                    </Heading>
                    
                    <Box mt={20} mb={20}>
                        <FlatList 
                            data={Recomendations}
                            keyExtractor={(item:any) => item.id}
                            renderItem={({item}:any) => <ListTopRatedFilms pathImage={item.poster_path} name={item.title} vote_average={item.vote_average} id={item.id}/>}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            mr={20}
                        />
                    </Box>
                </Box>
            </ScrollView>
        );

    }

}

export default PageSelected;