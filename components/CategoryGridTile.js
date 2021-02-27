import React from 'react';
import { StyleSheet, View, Text, Dimensions, Platform } from 'react-native';
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
const CategoryGridTile = props => {
  let TouchAbleCmp = TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version >= 21) {
    TouchAbleCmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <TouchAbleCmp
        style={styles.gridItem}
        onPress={props.onSelect}
      >
        <View style={{...styles.Container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchAbleCmp>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 100,
    width: Dimensions.get("window").width / 2.24,
    borderRadius: 3,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  Container: {
    flex: 1,
    borderRadius: 3,
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: '#333'
  }
});
 
export default CategoryGridTile;