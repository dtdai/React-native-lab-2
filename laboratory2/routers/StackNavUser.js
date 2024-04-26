import { createStackNavigator } from "@react-navigation/stack";
import User from '../screens/User';
import Options from '../screens/Options'

const Stack = createStackNavigator()
const StackNavUser = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='User' component={User} options={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#8f06e4' },
      }} />
      <Stack.Screen name='Options' component={Options} />
    </Stack.Navigator>
  )
}

export default StackNavUser