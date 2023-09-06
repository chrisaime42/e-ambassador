import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        amount: "",
        telephone: "",
        code: ""
    })
  return (
    <View>
      <Text>Form</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({})