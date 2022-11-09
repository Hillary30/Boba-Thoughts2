import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Boba Thoughts | Home</title>
      </Head>
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Your Thoughts on Boba</h1>
            <h2>What did you drink?</h2>
            <Link href="/addRating"><button className="main__btn" id="main__btn">Rate Now!</button></Link>
          </div>
          <div className="main__image"> </div>
        </div>
          
        <div className="services">
            <h1>See what the hype is about</h1>
            <div className="services__container">
                <div className="services__card">
                  <h2>Experience Bliss</h2>
                  <p>Add a rating to your list!</p>
                  <Link href="/addRating"><button>My Ratings</button></Link>
                </div>
                <div className="services__card">
                  <h2>Ready to go?</h2>
                  <p>Bookmark places you want to go next!</p>
                  <Link href="/bookmark"><button>My Bookmarks</button></Link>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

//add button at addRating link
//add image
