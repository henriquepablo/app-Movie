import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Search from '../Pages/Search';
import Favorites from '../Pages/Favorites';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function AppRoutes(): JSX.Element {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Search' component={Search}/>
                <Tab.Screen name='Favorites' component={Favorites}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;