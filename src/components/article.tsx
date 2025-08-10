'use client'
import {motion} from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from './grid-item'
import { ReactNode } from 'react'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20},
    enter: { opacity: 1, x: 0, y: 0},
    exit: { opacity: 0, x: -0, y: 20}
}

interface LayoutProps {
    children: ReactNode,
    title: string
}

export const Layout: React.FC<LayoutProps> = ({children, title}) => {
    const t = `${title} - arcanidev`
    return(
         <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
      style={{ position: 'relative' }}
    >
            {title && (
                <Head>
                    <title>{t}</title>
                    <meta name="twitter:title" content={t} />
                    <meta property="og:title" content={t} />
                </Head>
            )}
            {children}
            <GridItemStyle />
        </motion.article>
    )
}
export default Layout