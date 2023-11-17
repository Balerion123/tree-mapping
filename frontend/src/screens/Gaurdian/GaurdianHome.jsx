import './Gaurdian.css'
import Button from "react-bootstrap/Button";
import React from "react";
export default function GaurdianHome(){
    const RedirectToHome = () =>{
        console.log("Hello1")
        window.location.href = "/gaurdianhome";
    }
    const RedirectToVerify = () =>{
        console.log("Hello12")
        window.location.href = "/gaurdianverify";

    }
    return(
        <>
        <span>Welcome To HOME PAge</span>
            <div className='Parant_Panal d-flex w-100'>
                <div className="Left_Panel left">
                   <div className='Context d-flex flex-column pt-5 m-2 '>
                       <Button variant="primary" className='mb-2 center flow' onClick={RedirectToHome}>
                           Home
                       </Button>
                       <Button variant="primary" className='mt-3 center flow' onClick={RedirectToVerify}>
                           Verify
                       </Button>
                   </div>
                </div>
                <div className='Right_Panel d-flex flex-column right'>
                    <div className='Top'>
                        <div className='Tabs_Calls'>
                            <span>Number Of Trees Verified</span>
                            <span>Your ICON HERE</span>
                        </div>

                        <div className='Tabs_Calls'>
                            <span>Number Of Trees To Be Verified</span>
                            
                        </div>
                    </div>
                    <div className='d-flex' style={{justifyContent :'center'}}>
                    <div className='Bottom_Map_Area'>
                      <span>MAPS</span>
                  </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}
