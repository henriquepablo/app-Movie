/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider, StatusBar} from '@gluestack-ui/themed';
import AppRoutes from './src/routes/AppRoutes';
import { Provider } from 'react-redux';
import Store from './src/Redux/Store';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0F111D'}}>
      <Provider store={Store}>
          <GluestackUIProvider config={config}>
            <AppRoutes />
          </GluestackUIProvider>
       </Provider>
    </SafeAreaView>
  );
}

export default App;
