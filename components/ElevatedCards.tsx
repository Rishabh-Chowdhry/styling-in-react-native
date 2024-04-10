import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>ME</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>To</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>More..........</Text>
        </View>
        <View style={[styles.card, styles.elevated]}>
          <Text style={{color: '#000000'}}>😊</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  elevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: '#333',
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  container: {
    padding: 8,
  },
});
