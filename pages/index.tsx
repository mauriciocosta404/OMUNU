import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Banner from '../src/components/banner'
import Header from '../src/components/header/header'

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <Head>
        <title>
          OMUNU
        </title>
      </Head>
      <Header avatarInfo={false} searchInput={false} bollTop={true}/>
      <Banner/>
   </React.Fragment>
  )
}

export default Home;

