import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../src/components/header/header'

const Home: NextPage = () => {

  return (
    <React.Fragment>
      <Head>
        <title>
          OMUNU
        </title>
      </Head>
      <Header avatarInfo={true} searchInput={true}/>
   </React.Fragment>
  )
}

export default Home;

