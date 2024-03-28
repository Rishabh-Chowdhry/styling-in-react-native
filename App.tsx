import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatlistCards from './components/FlatlistCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatlistCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
