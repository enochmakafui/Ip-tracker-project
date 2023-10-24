import React,{useState,useEffect} from 'react'
// import dotenv from 'dotenv';
// dotenv.config();
// api key at_Q6s219tOUIiwkdZ4D5NkyJrlWGrKA
const Details = (props) => {
    const [data, setData] = useState([]);
    const apiKey=import.meta.env.VITE_API_KEY;

    useEffect(() => {
      if(props.call===true){
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${props.IpAddress}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          props.handleData(data)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });}
    }, [props.call]);
    console.log(data);


  return (
    <div className="flex flex-col mx-6 w-5/6 h-70 sm:grid sm:grid-cols-4 sm:divide-x z-20 bg-white absolute top-40 sm:mx-20 sm:h-28 sm:w-10/12 rounded-lg">
    <div className="pl-5 py-1 sm:py-2" >
       <h1  className="text-center sm:text-left text-gray-500 text-xs font-medium uppercase">ip address</h1>
       <h1 className="pt-4  text-center sm:text-left  font-bold text-xl sm:text-2xl">{data.length===0?" ":data.ip}</h1>
    </div>
    <div className="pl-5 py-1 sm:py-2">
        <h1 className="text-center sm:text-left text-gray-500 text-xs font-medium uppercase">location</h1>
        <h1 className="pt-4  text-center sm:text-left font-bold text-xl sm:text-2xl">{data.length===0?" ":`${data.location.country},${data.location.city}`}</h1>
        
    </div>
    <div className="pl-5 py-1 sm:py-2">
        <h1 className="text-center sm:text-left text-gray-500 text-xs font-medium uppercase">TimeZone</h1> 
        <h1 className="pt-4  text-center sm:text-left font-bold text-xl sm:text-2xl">{data.length===0?" ": `UTC ${data.location.timezone}`}</h1>
    </div>
    <div className="pl-2 py-1 sm:py-2 ">
        <h1 className="text-center sm:text-left text-gray-500 text-xs font-medium uppercase">Isp</h1>
        <h1 className="pt-2 text-center sm:text-left font-bold text-xl">{data.length===0?" " :data.isp}</h1>
    </div>

    </div>
  )
}

export default Details