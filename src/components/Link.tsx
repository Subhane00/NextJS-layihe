'use client'
import NextLink from 'next/link'
import NProgress from 'nprogress'
import { ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink>

export default function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href} onClick={() => NProgress.start()} {...props}>
      {children}
    </NextLink>
  )
}