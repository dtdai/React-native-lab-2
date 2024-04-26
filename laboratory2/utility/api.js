import 'react-native-get-random-values'
import { v4 } from 'uuid'

const mapContact = contact => {
  const { name, picture, phone, cell, email, } = contact
  return {
    id: v4(),
    name: name.first + " " + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favourite: Math.random() >= .5,
  } 
}

const fetchContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?results=100&seed=fullstackio')
  const Data = await response.json()
  return Data.results.map(mapContact)
}

const fetchUserContacts = async () => {
  const response = await fetch('https://randomuser.me/api/?seed=fullstackio')
  const Data = await response.json()
  return mapContact(Data.results[0])
}

const fetchRandomContacts = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const Data = await response.json()
  return mapContact(Data.results[0])
}

export {fetchContacts, fetchUserContacts, fetchRandomContacts}