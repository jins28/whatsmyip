import React from 'react'
import ReactCountryFlag from "react-country-flag"
export default function CountryFlag(props){
    return(
        <div>

<ReactCountryFlag
                countryCode={props.location}
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title={props.location}
                style={{
                    fontSize: '20em',
                    lineHeight: '20em',
                    width:'200px'
                }}               
            />
        </div>
    )
}