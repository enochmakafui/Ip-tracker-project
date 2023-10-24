import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Details from './details';
const Header = (props) => {
  const [IpAddress,setIpAddress] = useState("");
  // const [call,setCall] = useState(false);  
  function handleChange(event){
    setIpAddress(event.target.value);

  }
  function handleClick(event){
    // setCall(!call);
    props.callApi(IpAddress);

    event.preventDefault();
    setIpAddress("");


  }


  return (
    <div className="bg-[url('assets/pattern-bg-desktop.png')] h-48 z-0 py-4 text-center">
        <h1 className=" font-medium text-white text-lg">IP Address Tracker</h1>
        <form className="flex justify-between mx-auto rounded-lg bg-white text-center w-80 mt-5 z-10 " onSubmit={handleClick}>
            <input name="ip" type="text" placeholder="Search for any IP adress or domain " className='px-8 w-11/12 rounded text-sm ml-1 py-1 border-none outline-none' onChange={handleChange}  value={IpAddress}/>
            <button type="submit" className="bg-black rounded-r-lg text-white text-sm h-10">
                <KeyboardArrowRightIcon />
            </button>

        </form>
    </div>
  )
}

export default Header;