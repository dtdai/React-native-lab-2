import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Icon } from 'react-native-paper'
import StackNavCont from './StackNavCont'
import StackNavFav from './StackNavFav'
import StackNavUser from './StackNavUser'

const Tab = createMaterialBottomTabNavigator()
const BottomTabNav = () => {
  return (
    <Tab.Navigator shifting='true'>
      <Tab.Screen name='Contacts' component={StackNavCont} options={{ tabBarColor: '#637aff', tabBarIcon: () => <Icon source='format-list-bulleted' size={30} color='#fff' /> }} />
      <Tab.Screen name='Favourites' component={StackNavFav} options={{ tabBarColor: '#60c5a8', tabBarIcon: () => <Icon source='star' size={30} color='#fff' /> }} />
      <Tab.Screen name='User' component={StackNavUser} options={{ tabBarColor: '#8f06e4', tabBarIcon: () => <Icon source='account' size={30} color='#fff' /> }} />
    </Tab.Navigator>
  )
}

export default BottomTabNav