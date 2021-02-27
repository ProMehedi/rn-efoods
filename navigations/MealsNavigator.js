import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Colors from '../constants/Colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: Platform.OS == 'android' ? Colors.primary : ''
    },
    headerTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS == 'android' ? '#fff' : Colors.primary
  }

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerTitle: 'Meal Categories'
    }
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
  Favorites: FavoriteScreen,
  MealDetail: MealDetailScreen
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
  Meals: {screen: MealsNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons
        name='ios-restaurant'
        size={25}
        color={tabInfo.tintColor}
      />
    },
    tabBarColor: Colors.primary,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>MEALS!</Text> : 'MEALS!'
  }},
  Favorites: {screen: FavNavigator, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return <Ionicons
        name='ios-star'
        size={25}
        color={tabInfo.tintColor}
      />
    },
    tabBarColor: Colors.accent,
    tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>MEALS!</Text> : 'FAVOIRITES!'
  }}
}

const MealsFavTabNavigator = Platform.OS === 'android' 
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primary
    }
  }) 
  : createBottomTabNavigator( tabScreenConfig, {
  tabBarOptions: {
    labelStyle: {
      fontFamily: 'open-sans'
    },
    activeTintColor: Colors.accent
  }
});

const filterNavigator = createStackNavigator({
  Filters: FiltersScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
});

const mainNavigator = createDrawerNavigator({
  MealFavs: {screen: MealsFavTabNavigator, navigationOptions: {
    drawerLabel: 'Meals',
    drawerIcon: (tabInfo) => {
      return <Ionicons
        name='ios-restaurant'
        size={25}
        color={tabInfo.tintColor}
      />
    }
  }},
  Filter: {screen: filterNavigator, navigationOptions: {
    drawerIcon: (tabInfo) => {
      return <Ionicons
        name='ios-options-outline'
        size={25}
        color={tabInfo.tintColor}
      />
    }
  }}
}, {
  contentOptions: {
    activeTintColor: Colors.accent,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(mainNavigator);