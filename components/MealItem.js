import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DefaultText from './DefaultText';
const MealItem = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={styles.titleContainer}>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground
              source={{uri: props.image}}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <DefaultText>{props.duration}m</DefaultText>
            <DefaultText>{props.complexity}</DefaultText>
            <DefaultText>{props.affordability}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: '100%',
    backgroundColor: '#fcfcfc',
    marginVertical: 10,
    borderRadius: 4,
    overflow: 'hidden'
  },
  titleContainer: {

  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontSize: 'open-sans-bold',
    fontSize: 20,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    textAlign: "center"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    alignItems: 'center'
  }
});
 
export default MealItem;