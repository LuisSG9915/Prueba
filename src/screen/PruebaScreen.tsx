import { View, Text } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RotationGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture'
interface Props extends StackScreenProps<any, any>{}
const PruebaScreen = ({route}: Props) => {
    
    const { id } = route.params

  return (
    <View>
      <Text>{id}</Text>
      <Text>hoa</Text>
    </View>
  )
}

export default PruebaScreen