import React from 'react'
import { Box } from 'native-base'
import Colors from '../colors'
import HomeProduct from '../Component/HomeProduct'
import TopNav from '../Navigation/TopNav'

function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop >
      <TopNav/>
      <HomeProduct />
   
    </Box>
  )
}

export default HomeScreen
