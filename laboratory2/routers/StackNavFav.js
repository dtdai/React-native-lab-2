import { createStackNavigator } from "@react-navigation/stack";
import Favourites from "../screens/Favourites";
import Profile from '../screens/Profile'

const Stack = createStackNavigator()
const StackNavFav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Favourites' component={Favourites} options={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#60c5a8' }
      }} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNavFav