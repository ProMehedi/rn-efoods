import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
  return(
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: Colors.primary}}
        thumbColor={ Platform.OS === 'android' ? Colors.primary : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

const FiltersScreen = props => {
  const { navigation } = props;

  const [isGlutenFree, setIsGluetenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    }
    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictiosn</Text>
      <FilterSwitch
        label='Gluten Free'
        state={isGlutenFree}
        onChange={newValue => setIsGluetenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose Free'
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Filters',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam('save')}
        />
      </HeaderButtons>
    )
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
    marginVertical: 5
  },
  title: {
    fontSize: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});
 
export default FiltersScreen;