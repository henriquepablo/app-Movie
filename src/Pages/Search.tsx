import React, { useState } from "react";
import { Box, Input, InputField, InputIcon, InputSlot, SearchIcon } from "@gluestack-ui/themed";

function Search():JSX.Element {

    const [nameFilm, setNameFilm] = useState('');

    return(
        <Box flex={1} backgroundColor="#0F111D">
        
            <Box mt={50} justifyContent="center" alignItems="center">
                
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
            
        </Box>
    );
}

export default Search;