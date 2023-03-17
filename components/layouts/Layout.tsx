import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import { Navbar } from '../ui';

interface Props{
    children:  JSX.Element|JSX.Element[],
    title?: string
}

const origin = (typeof window === 'undefined') ? '': window.location.origin;

export const Layout : FC<Props> = ({children,title}) => {

   

  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Diego Gutierrez" />
            <meta  name="decription" content={`info sobre el pokemon ${title}`} />
            <meta name="keywords" content="XX, pokemon, pokedex" />

            <meta property="og:title" content={`Informacion sobre ${title}`} />
            <meta property="og:description" content="Los pokemones de pokemonos." />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar/>

        <main style={{
            padding:'0px 20px'
        }}>
            {children}
        </main>

    </>
  )
}
