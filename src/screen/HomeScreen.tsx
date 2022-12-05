import { View, Text, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import swapiApi from '../api/swapiApi'
import { PeopelePaginated, Result } from '../interface/InterfacePeople'
import { useNavigation} from '@react-navigation/native'


const HomeScreen = () => {
    const navigation = useNavigation()
const [swappi, setSwappi] = useState<Result[]>([])
  const getSwapi = async() => {
    try {
      const swapiResp = await swapiApi.get<PeopelePaginated>("people")
      setSwappi(swapiResp.data.results)
    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    getSwapi()
  }, [])
  

  return (
    <View>
      <FlatList
        keyExtractor={ (item) => item.url}
        data= {swappi}
        renderItem = { (item) => (
          <>
            <Text> {item.item.name} </Text>
            <Text> {item.item.films} </Text>
            <Text> { (item.item.url).split("/").slice(5) } 
            <Button
                title='Ir a ' 
                onPress={ () => {
                    let id = (item.item.url).split("/").slice(5)
                    navigation.navigate("PruebaScreen", {id: id} )
                }}>

            </Button>
          </Text></>
        )}
      >

      </FlatList>
    </View>
  )
}

export default HomeScreen