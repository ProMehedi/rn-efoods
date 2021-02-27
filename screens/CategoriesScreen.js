import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';
 
const CategoriesScreen = props => {
  const renderGrindItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
        props.navigation.navigate({routeName: 'CategoryMeals', params: {
          categoryId: itemData.item.id
        }});
      }} />
    );
  }

  return (
    <FlatList
      style={{width: '100%'}}
      data={CATEGORIES}
      renderItem={renderGrindItem}
      numColumns={2}
    />
  );
}

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer()
        }}
      />
    </HeaderButtons>
  }
};
 
export default CategoriesScreen;