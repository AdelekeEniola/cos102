import { useState } from "react";
import Bag from "./assets/images.jpg";
import laptop from "./assets/images (1).jpg";
import glass from "./assets/images (3).jpg";
import eheat from "./assets/eheat.jpg";
import pouch from "./assets/pouch.jpg";




export default Message
function Message(){
    const [val,valset] = useState("Select an item above");
    const [par,part] = useState(0)
    
    return( 
        <div style={{backgroundColor: "lightgray", height: "100vh", padding: "20px"}}>
            <div style={{color: "yellow", fontSize:"40px"}}>
                <strong>
                ITEM PRICE GENERATOR AND SELECTION INTERFACE
                </strong>
            </div>
            <hr />
            <div style={{tabSize: "20px", color: "white",fontSize:"27px", backgroundColor:"beige",display:"flex",justifyContent:"flex-end",gap:"10px"}}>
                <button onClick={() => valset(
                    <div> <img src= {Bag} alt="bag" style={{width: "200px"}}/> <p>"BAG: Engineered from high-density 1680D ballistic nylon, this bag features reinforced double-stitching and ergonomic padded straps. It includes a dedicated 15-inch felt-lined laptop compartment and weather-resistant zippers to ensure your gear stays bone-dry in any climate"
                        <br />
                        <strong style={{color: "green", fontSize: "30px"}}>PRICE: #5700</strong></p></div>,)}>BAG</button>
                        
                <br />
                <button onClick={() => valset(
                    <div><img src={laptop} alt="" /> <p>"LAPTOP:A productivity powerhouse featuring the latest silicon architecture. Beyond the water-resistant chassis, it boasts a 60Wh high-capacity battery designed for 14 hours of continuous 4K video playback. Experience peak cooling efficiency with our proprietary dual-fan vapor chamber system "
                       <br />
                        <strong style={{color: "green", fontSize:"30px"}}>PRICE: #450,000</strong></p></div>
                    ) }>LAPTOP</button>
                <br />
                <button  onClick={() => valset(
                    
                    <div><img src={pouch} alt="" /><p> "PHONE POUCH: Measuring 90mm x 180mm, this pouch utilizes UV-reflective fabric to prevent thermal throttling from sunlight exposure. Features precision-molded silicone gaskets for charging ports and headphone jacks, allowing full connectivity without compromising the IP67 dust -proof seal"
                        <br /> 
                        <strong style={{color:"green", fontSize:"30px"}}>PRICE: #35000</strong></p></div>,
                  )}>Phone pouch</button>

                <br />

                <button onClick={() => valset(
                    
                <div><img src={eheat} alt="" /><p>"ELECTRIC HEATER: A versatile rapid-boil solution equipped with Intelligent Voltage Sensing. Whether you're on a standard AC home outlet or a DC portable power station, the 1500W heating element brings 1L of water to a rolling boil in under 3 minutes. Includes an auto-shutoff safety thermal fuse"
                    <br />
                    <strong style={{color: "green", fontSize: "30px"}}>PRICE: #62000</strong></p></div>

                    )}>Electric heater</button>

                <br />

                <button onClick={() => valset(
                    <div>
                        <img src={glass} alt="" />
                        <p>"GLASSES:spectacles for reading during anytime of the day also protects eyes from blue light emittd from devices comes  with case and a wiping cloth"
                           <br />
                            <strong style={{color: "green",fontSize:"30px"}}>PRICE: #250.00</strong>

                        </p>
                    </div>

                    )}>Glasses</button>
            </div>
            <hr />
            
            <aside>
            <div style={{padding:"10px",border: "10px",backgroundColor:"aqua",color:"black",fontSize:"20px", position:"relative"}}>
                <p>
                    <strong>CURRENTLY VIEWING:</strong>
                    <br />
                    <div>
                    <button onClick={()=>part(par +1)}>add+ 1</button>
                    <button onClick={()=>part(par -1)}>remove -1</button>

                    </div>
                    <br />
                    <strong>{val}</strong>
                </p>
            </div>
            </aside>
            <div><p>
                <strong style={{fontSize:"20px"}}>
                {par} items added to cart
                </strong>
                </p>
                </div>
        </div>
    );

    

    

}