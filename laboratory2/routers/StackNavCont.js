import { createStackNavigator } from "@react-navigation/stack";
import Contact from '../screens/Contact'
import Profile from '../screens/Profile'

const Stack = createStackNavigator()
const StackNavCont = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Contacts' component={Contact} options={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#637aff' }
      }} />
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

export default StackNavCont