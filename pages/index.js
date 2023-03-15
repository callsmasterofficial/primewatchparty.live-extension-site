import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

// import Video_content from '../components/Video_content';

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'text',
        description:
          'Prime Watch Party allow users to watch Prime with your friends online. Install the extension for playback sync and a chatbox for interaction.',
        keywords:
          'Prime Watch Party, Prime Watch Party Extension, Prime Watch Party Chrome Extension, Prime Party, How to use Prime Watch Party',
        pageUrl: 'https://www.primewatchparty.com/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />

      <Text2 />

      <Footer />
      <Fask_ques />
      <Footer />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
