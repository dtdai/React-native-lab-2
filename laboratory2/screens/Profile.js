import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Avatar, Icon, Text } from 'react-native-paper'
import { fetchRandomContacts } from '../utility/api'
import DetailListItem from '../components/DetailListItem'

const Profile = ({ route }) => {
  const [contacts, setContacts] = useState({})
  // useEffect(() => {
  //   fetchRandomContacts().then(data => {
  //     console.log(data)
  //     setContacts(data)
  //   }).catch(e => console.log(e))
  // }, [])
  // const { name, avatar, phone, cell, email } = contacts
  const { name, avatar, phone, cell, email } = route.params.contact

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'aqua' }}>
        <Avatar.Image source={{ uri: avatar }} size={100} />
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff', marginTop: 10 }}>{name}</Text>
        <Text style={{ fontSize: 20, color: '#fff', marginTop: 10 }}>
          <Icon source={'phone'} size={20} /> {phone}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <DetailListItem icon='email' label='Email' value={email} />
        <DetailListItem icon='phone' label='Work' value={phone} />
        <DetailListItem icon='cellphone' label='Personal' value={cell} />
      </View>
    </View>
  )
}

export default Profile