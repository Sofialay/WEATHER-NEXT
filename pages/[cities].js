import React from 'react'
import axios from 'axios';
import { wrapper } from './_app';
import { CITIES } from '../utils/constants';

export default function cities() {
  return <div>Hola</div>
}

export const getStaticPaths = async () => {
	const urls = CITIES.map((city) => city.url)
    console.log(urls)
	const paths = urls.map((url) => ({
		params: { cities: url }
	}))
	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = wrapper.getStaticProps(store => async() => {
    //traer del state el NAME de la ciudad y con eso hacer la llamada
    console.log(store.getState(), 'GET STATE')
  
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=e5e2ab54cb1b8ea725a2d58b6beca2ec&units=metric`)
    console.log(res, 'RES')
  
     return {
      props: {
        weatherListProp: 'Hola',
      },
    }
    
});