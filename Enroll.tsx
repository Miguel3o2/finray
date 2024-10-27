import React from "react";
import familyHouse from "./images/family-house.jpg"

const Enroll: React.FC = () => {
    return (
        <div className="familycontainer">
            <div className="firsthalf"><div>
                  <h1 className="headercom">Community Solar is for everyone.</h1>
                  <p className="enrolltext">Community solar makes renewable energy accessible to everyone, regardless of property ownership or roof suitability. Participants share the benefits of a single solar array, often located off-site, allowing them to enjoy reduced electricity costs and support green energy. This inclusive approach helps expand access to solar power, making it a practical option for renters and those who can’t install panels at home.

</p>
        <div className="butcontainer"><button className="enrollbutton">Enroll Now!</button> </div>
            </div>
            </div>

            <div className="sechalf">
                <img src={familyHouse} className="familyhouse"
                alt="Family House" />
            </div>
        </div>
    )
}

export default Enroll
