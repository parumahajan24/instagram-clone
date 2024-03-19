import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'

const FeedPost = () => {
  return <>
  <PostHeader/>
  <Box my={2}>
    <Image src="/img1.png" alt="User Profile Photo"/>
  </Box>
  <PostFooter/>
  </>
}

export default FeedPost