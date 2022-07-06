import 'react-calendar/dist/Calendar.css';
import Main from '../components/main';


export default function Home() {
  return (
      <Main />
    // </Layout>
  );
}






// NOTE: Acá haria la llamada a la api para traer toda la info y luego pasarsela a main
// o por redux

// export async function getStaticProps() {
  
//   // https://web.archive.org/web/20210122004654/http://bulk.openweathermap.org/sample/
//   // Pasar la url que fetchea las mayor cities, la api tiene esa opcion?
//   // pasandole el id de esta forma hace tres llamadas, quizas deberia hacer solo una
//   const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=e5e2ab54cb1b8ea725a2d58b6beca2ec&units=metric`)
//   console.log(res, 'RES')
  
//   // llamar a todas las ciudades, filtrar con un array .includes() las principales, 
//   // pasarla a las props de abajo

//   return {
//     props: {
//       weatherListProp: [
//         // berlin,
//         // london,
//         // paris,
//         // newYork,
//         // tokyo,
//         // buenosAires,
//         // milan,
//       ],
//     },
//   }
// }

