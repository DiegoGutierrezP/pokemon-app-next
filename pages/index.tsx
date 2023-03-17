import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import type { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/layouts'
import { PokemonCard } from '../components/pokemon';
import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props{
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({pokemons}) => {

  return (
    <Layout title='Lista Pokemons' >


      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(poke => (
           <PokemonCard key={poke.id} pokemon={poke} />
          ))
        }
      </Grid.Container>

    </Layout>
  )
}

//solo se puede usar en paginas (pages), 
//solo se ejecuta en el lado del servidor, 
//esta funcion se llama en tiempo de build https://nextjs.org/docs/basic-features/data-fetching/get-static-props
//lo usamos siempre y cuando sepamos que estos son los parametros que la pagina necesita
export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons:SmallPokemon[] =  data.results.map(poke => {
    const idPoke = Number(poke.url.split('/').filter(el => el.trim()).pop());
    poke.id = idPoke;
    poke.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPoke}.svg`
    return poke;
  });

  return {
    props: {
      pokemons
    }, // will be passed to the page component as props
  }
}

export default Home
