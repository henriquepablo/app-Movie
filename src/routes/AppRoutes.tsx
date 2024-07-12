import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Favorites from '../Pages/Favorites';
import { NavigationContainer } from '@react-navigation/native';
import { Icon, FavouriteIcon } from '@gluestack-ui/themed';
import {HomeIcon, SearchIcon} from 'lucide-react-native';

const Tab = createBottomTabNavigator();

function AppRoutes(): JSX.Element {
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={
                {
                    headerShown: false,
                    
                    tabBarStyle: {
                        backgroundColor: '#292B37',
                        width: 330,
                        height: 60,
                        borderRadius: 20,
                        alignSelf: 'center',
                        marginBottom: 15,
                        paddingBottom: 5,
                        position: 'absolute',
                        left: 'auto',
                        right: 'auto',
                        elevation: 8, 
                        shadowColor: '#000', 
                        shadowOffset: { width: 0, height: 2 }, 
                        shadowOpacity: 0.25, 
                        shadowRadius: 3.84
                    },

                    tabBarLabelStyle: {
                        fontSize: 13
                    },

                    tabBarShowLabel: false
                }
                    
            }>
                <Tab.Screen name='Home' component={Home} 
                    options={{
                        tabBarIcon: ({color, size}) => {
                            return <Icon as={HomeIcon} size='xl' color={color}/>;
                        }
                    }}
                
                />
                <Tab.Screen name='Search' component={Search} 
                    options={{
                        tabBarIcon: ({color, size}) => {
                            return <Icon as={SearchIcon} size='xl' color={color}/>;
                        }
                    }}
                />
                <Tab.Screen name='Favorites' component={Favorites}
                    options={{
                        tabBarIcon: ({color, size}) => {
                            return <Icon as={FavouriteIcon} size='xl' color={color}/>;
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;