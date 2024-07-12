/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,} from 'react-native';
import {config} from '@gluestack-ui/config';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import AppRoutes from './src/routes/AppRoutes';

function App(): JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
      
      <GluestackUIProvider config={config}>
        <AppRoutes />
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
