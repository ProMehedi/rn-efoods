import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import CustomHeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';

const FavoriteScreen = props => {
  const favMeals = useSelector(state => state.meals.favoriteMeals)

  return (
    <MealList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
}

FavoriteScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favoirites',
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
 
export default FavoriteScreen;