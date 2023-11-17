import './Gaurdian.css'
import Button from "react-bootstrap/Button";
import React from "react";
export default function GaurdianVerify(){
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
        <span>Welcome To Verify Page</span>
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
                <div className='container'>
                    <div className='Map_Border'>
                    <div className='map'>
                        map
                    </div>
                    </div>
                   
    
                    <div className='d-flex flex-column'>
                    <div className='d-flex Box_Class'>
                        <div className='p-2'>
                            <img src='' alt='IMG' className=''/>
                            <span className='m-2'>TREE 1</span>
                        </div>
                        <div className='p-2'>
                            <span className='p-2'>Checked</span>
                            <span className='p-2'>Delete</span>
                        </div>
                    </div>
                    <div className='d-flex Box_Class'>
                        <div className='p-2'>
                            <img src='' alt='IMG' className=''/>
                            <span className='m-2'>TREE 1</span>
                        </div>
                        <div className='p-2'>
                            <span className='p-2'>Checked</span>
                            <span className='p-2'>Delete</span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
