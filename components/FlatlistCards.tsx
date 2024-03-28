import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatlistCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.cardContainer, styles.redCard]}>
          <Text>Red(❁´◡`❁)</Text>
        </View>
        <View style={[styles.cardContainer, styles.blueCard]}>
          <Text>Blue☆*: .｡. o(≧▽≦)o .｡.:*☆</Text>
        </View>
        <View style={[styles.cardContainer, styles.greenCard]}>
          <Text>Green(*/ω＼*)</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatlistCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    overflow: 'scroll', // to make the cards scrollable
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  redCard: {
    backgroundColor: '#FF5733',
  },
  blueCard: {
    backgroundColor: '#50DBB4',
  },
  greenCard: {
    backgroundColor: '#50A31A',
  },
});
