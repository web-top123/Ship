import React, { useState } from 'react';
import { CardHeader, TabPane } from "reactstrap";

import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
import avatar11 from "../../../../assets/images/users/avatar-11.jpg";
import avatar12 from "../../../../assets/images/users/avatar-12.jpg";
import avatar13 from "../../../../assets/images/users/avatar-13.jpg";
import avatar14 from "../../../../assets/images/users/avatar-14.jpg";
import avatar15 from "../../../../assets/images/users/avatar-15.jpg";
import ImgSelect  from './ImgSelect';
import Select  from'react-select';
const Mine = () => {
    function tog_large(e) {
        document.querySelectorAll(".my-img-select img").forEach(img => {
            if (img.src != e.currentTarget.src) {
                img.classList.remove("img-buy")
                img.classList.add("img-no-buy")
                img.classList.add("img-no-buy-x")
            } else {
                img.classList.toggle("img-buy")
            }
        })
    }

    return (
        <React.Fragment>
            <TabPane tabId="6" id="v-pill-image-icon">
                <div className="mb-2">
                    <div className="ps-0">
                        <h4 className="card-title flex-grow-1">Image Icon Selection</h4>
                    </div>
                </div>
                <div>
                    <div className="mt-4 md-0 px-5 my-img-select">
                        <div className='d-flex justify-content-between pb-3' >

                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar1} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar2} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar3} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar4} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar5} onClick={(e)=> tog_large(e)} /> 
                            
                        </div>
                        <div className='d-flex justify-content-between pb-3' >
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar6} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar7} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar8} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar9} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar10} onClick={(e)=> tog_large(e)} /> 
                        </div>
                        <div className='d-flex justify-content-between pb-3' >
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar11} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar12} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar13} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar14} onClick={(e)=> tog_large(e)} />
                                <img className={"img-thumbnail rounded-circle avatar-xl "} alt="200x200" src={avatar15} onClick={(e)=> tog_large(e)} /> 
                        </div>
                                
                    </div>
                    <div className="text-end pt-5">
                        <button type="submit" className="btn btn-primary">Purchase</button>
                    </div>
                </div>
            </TabPane>
        </React.Fragment>
    )
}

export default Mine;