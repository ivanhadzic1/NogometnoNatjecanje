import slika from '../assets/nogomet.jpg'

export default function Pocetna(){
    return(
         <>
         Dobrodošli <hr />
         <img src={slika} style={{maxWidth: 600, border: '2px solid red'}}/>
         </>
    )
}