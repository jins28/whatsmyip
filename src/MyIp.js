import React, {useState,useEffect} from "react"
import CountryFlag from './CountryFlag'
import CurrentLocation from './CurrentLocation'
import Card from 'react-bootstrap/Card';



export default function MyIp(){
    const[myIp,setMyIp] = useState('');
    const[location,setLocation] = useState('');
    const[countryCode,setcountryCode] = useState('');
    const [city,setCity]=useState('');
    const[state,setState]=useState('');    
    const[latitude,setLatitude]=useState('')
    const[longitude,setLongitude]=useState('')
    const[date,setDate]=useState('')


    async function getMyIp(){
        try{
          const response = await fetch('https://geolocation-db.com/json/')
          const myIp = await response.json()
          setMyIp(myIp.IPv4)
          setLocation(myIp.country_name)
          setcountryCode(myIp.country_code)
          setCity(myIp.city)
          setState(myIp.state)
          setLatitude(myIp.latitude)
          setLongitude(myIp.longitude)

        }catch(error){
          console.error(error)
        }
    }
    
    
    useEffect(()=>{
        getMyIp() 
        setDate(Date()); 
    },[])
   
return(
  <Card style={{ width: '70rem', margin:'50px'}}>
    
  <CurrentLocation latitude={latitude} longitude={longitude} city={city} state={state} />  
  <Card.Body>
  <p>Your IP address is {myIp} </p>
  <p>You are currently located in {city},{state},{location}</p>
  <p>{date}</p>
  <CountryFlag location={countryCode} />
  </Card.Body>
  </Card>   
);
}