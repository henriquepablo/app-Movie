import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Favorites from '../Pages/Favorites';
import { NavigationContainer } from '@react-navigation/native';
import { Icon, FavouriteIcon } from '@gluestack-ui/themed';
import {HomeIcon, SearchIcon} from 'lucide-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PageSelected from '../components/PageSelected';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
    return (
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
                    paddingTop: 5,
                    paddingBottom: 5,
                    marginTop: 10,
                    elevation: 0,
                    borderTopColor: '#292B37' 
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
    );
}


function AppRoutes(): JSX.Element {
    return(
        <NavigationContainer >
            <Stack.Navigator
                
                screenOptions={
                    {
                        headerShown: false,
                        cardStyle: {
                            backgroundColor: '#0F111D',
                            
                        }
                    }
                }
            >
                <Stack.Screen name='Home' component={HomeTabs} />
                <Stack.Screen name='PageSelected' component={PageSelected} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;