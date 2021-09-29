
import React from 'react';
import data from './store/db.json'
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList

} from 'react-native';
import Card from './components/Card'

function App() {
  const renderItem = ({ item }) => <Card item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKSTORE</Text>
      <Text style={styles.title}>PATIKSTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      <View style={styles.cards}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    color:'#cc0099',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10
  },
  search: {
    height: 40,
    margin: 10, 
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#EDF0F2' 
  },
  cards: {
    marginLeft: 5,
    marginRight: 5
  }
});

export default App;
