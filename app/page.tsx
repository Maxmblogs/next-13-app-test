import Image from 'next/image'
import styles from './page.module.css'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {

  // This is for protecting routes if I ever need to
  // const session = await getServerSession()

  // if(!session) {
  //   redirect('/api/auth/signin')
  // }


  return (
    <main className={styles.app}>
      <h1>Welcome to MaxmSpace</h1>
      <p>
       A next-gen social media app to connect with frens inspired by MySpace
      </p>

      <p>
      To get started, sign up for an account
      </p>

    </main>
  )
}
