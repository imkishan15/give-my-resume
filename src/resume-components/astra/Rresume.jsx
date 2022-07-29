import React from 'react'
import './style.css'
function Rresume() {
  return (
    <div>
    <div className='resume'>
            <div className="res">
        <div className="top">
            <div className="name">
               <div className="nm">
                <center>
                    <h1 className="nam">
                        Kishan Patel
                    </h1> <hr/>
                    <h3 className="namw">
                        Web developer
                    </h3>
                </center>
               </div>
            </div>
            <div className="img">
                <center>
                <img src="/pic.jfif" alt=""/>
                </center>
            </div>
        </div>
        <div className="bot">
            <div className="left">
                
            </div>
            <div className="mid">
                <div className="lhead">
                    Contact
                </div>
                <h4 className="con">
                        Email:  
                    kishan@gmail.com <br/>

                    
                        Mobile no.: 
                    123-456-789 <br/>
                        Website: 
                    kishan15heroku.com <br/>

                    
                        Linked in.: 
                        in.linkedin.com <br/> <br/>

                   
                </h4>
                <div className="lhead">
                    Skills
                </div>
                <h3>
                    <u>Hard Skills</u>
                </h3>
                    <div className="bul">
                        <ol>
                            <li>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet.
                            </li>
                        </ol>
                    </div>
                <h3> 
                    <u>Soft Skills</u>
                </h3>
                <div className="bul">
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet.
                        </li>
                    </ol>
                </div> <br/>
                <div className="lhead">
                    Achievements
                </div>
                <div className="bul">
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet.
                        </li>                    
                    </ol>
                </div>
            </div>
            <div className="right">
                <div className="rhead">
                    Education
                </div>
                <h4 className="cone">
                    CGPA: 9.28
                <br/>
                    Degree name: Btech IT
               <br/> 
                    University name: Charusat
                </h4>
                <div className="rhead">
                    Work Experience
                </div>
                    <div className="wk">
                        <h3 className="whead">
                            Company name 2016-18
                        </h3>
                   
                            <h3 className="namw">
                                Designation
                            </h3>
                        
                            <div className="workcon">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus. Lorem ipsum dolor sit. <br/>
                            </div> 
                        </div>
                    <div className="wk">
                        <h3 className="whead">
                            Company name 2018-20
                        </h3>
                   
                            <h3 className="namw">
                                Designation
                            </h3>
                        
                            <div className="workcon">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus. Lorem ipsum dolor sit.
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Rresume