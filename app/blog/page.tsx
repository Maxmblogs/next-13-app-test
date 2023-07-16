import Link from 'next/link'
import React from 'react'

export default async function page() {
    const posts = await fetch(`http://localhost:3000/api/content`).then(
        (res) => res.json()
    )
  return (
    <div>
        <h1>Welcome to our Blog</h1>
        <ul>
            {posts.map((post: any) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.content}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
