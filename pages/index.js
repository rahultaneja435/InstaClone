import Head from 'next/head'
import React from 'react'
import Feed from '../components/Feed'
import Top from '../components/Top'

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
       <Top />
       <Feed/>
    </div>
  )
}
