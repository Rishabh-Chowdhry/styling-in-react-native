import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatlistCards from './components/FlatlistCards';
import ElevatedCards from './components/ElevatedCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatlistCards />
        <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
