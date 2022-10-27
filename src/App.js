import React, { Fragment, useEffect } from 'react'

import { Box, Flex, Center, Spinner } from '@chakra-ui/react'

const App = () => {
  useEffect(() => {
    window.location.replace('https://www.utopiahomes.us/')
  })

  return (
    <Fragment>
      <Center w="100%" h="100vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Fragment>
  )
}

export default App
