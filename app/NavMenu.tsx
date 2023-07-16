'use client'

import Link from "next/link";
import  Style  from "./nav-menu.module.css"
import Image from "next/image";
import { SignInButton, SignOutButton } from "@/components/buttons";
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={Style.nav}>  
      <Link href={'/'}>
        <Image 
          src="/home.svg"
          width={200}
          height={40}
          alt="Logo"
          content="Home"
          />
      </Link>
      <ul className={Style.navlist}>
        <li>
          <Link className={Style.foo} href={'/about'}>About</Link>
        </li>
        <li>
          <Link className={Style.bar} href={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link className={Style.baz} href={'/users'}>User</Link>
        </li>
        <li>
          <SignInButton/>
        </li>
        <li>
          <AuthCheck>
            <SignOutButton/>
          </AuthCheck>
        </li>
      </ul>
    </nav>
  
  )
}
