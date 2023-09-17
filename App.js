import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNav from './src/navigation/mainnav';

export default function App() {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
}


