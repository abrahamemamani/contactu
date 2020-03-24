import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Alert } from 'react-native';
import { contacts } from './assets/config/data';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  handleDelete = (item) => {
    Alert.alert(
      "Delete contact", 
      `Do you sure to want to delete ${item.name} ${item.lastname}?`,
      [
        {
          text: 'Delete',
          onPress: () => console.log('Delete press')
        },
        {
          text: 'Cancel'
        }
      ],
      {cancelable: false}
    )
  }
  listItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View>
          <Text style={styles.itemName}>{ `${item.name} ${item.lastname}` }</Text>
          <Text style={styles.itemCountry}>{ item.country }</Text>
        </View>
        <View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>
            <TouchableOpacity style={{marginRight: 15}}>
              <Icon name="edit" size={23} color="#444"></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.handleDelete(item)}>
              <Icon name="trash" size={23} color="#444" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#E5E5E5"}}>
      <View style={styles.appWrapper}>
        <View style={styles.appMain}>
          <View>
            <FlatList 
              data={contacts}
              renderItem={(item) => listItem(item)}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
        <View style={{position: "absolute", left: 0, bottom: 0, width: "100%"}}>
          <Button title="Press me" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    marginTop: 50
  },
  appMain: {
    paddingLeft: 10,
    paddingRight: 10
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15
  },
  itemName: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#444',
  },
  itemCountry: {
    color: "#989898"
  }
});
