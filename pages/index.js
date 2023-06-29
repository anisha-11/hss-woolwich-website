import Head from 'next/head'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div className='bg-white'>
      <Head>
        <title>Woolwich Pannabai Shakha | HSS UK</title>
        <meta name="description" content="Generated by Nextjs" />
        <link rel='stylesheet' href='favicon.ico' />
      </Head>
      <div>
        <Navbar />
        <h1>Woolwich Pannabai Shakha</h1>
      </div>
    </div>
  )
}

export default Home;
