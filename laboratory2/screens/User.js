import { useEffect, useLayoutEffect, useState } from "react"
import { fetchUserContacts } from "../utility/api"
import { View } from "react-native"
import { ActivityIndicator, Avatar, Button, Text } from "react-native-paper"

const User = ({ navigation }) => {
  const [User, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUserContacts().then(data => {
      console.log(data)
      setUser(data)
      setLoading(false)
    }).catch(e => console.log(e))
  }, [])
  const { name, avatar, phone } = User

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => <Button icon='cog' textColor="#fff" onPress={() => navigation.navigate('Options')} />
    })
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }}>
      {loading && <ActivityIndicator size={40} />}
      <Avatar.Image source={{ uri: avatar }} size={150} />
      <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ fontSize: 24, color: '#fff' }}>{phone}</Text>
    </View>
  )
}

export default User