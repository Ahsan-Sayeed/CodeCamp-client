import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import React, { useState } from "react";

// React icons 
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Avatar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [settings,setSettings] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // setIsLoggedIn(!isLoggedIn);
    navigate('/login');
  };
  
  const handleSetting = (e) =>{
    setSettings(!settings);
  }

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <OverlayTrigger
            placement="bottom"
            overlay={
              <Popover id="popover-basic">
                <Popover.Header as="h3">Popover right</Popover.Header>
                <Popover.Body>
                  And here's some <strong>amazing</strong> content. It's very
                  engaging. right?
                </Popover.Body>
              </Popover>
            }
          >
            {({ ref, ...triggerHandler }) => (
              <Button
                variant="light"
                {...triggerHandler}
                className="d-inline-flex justify-content-center align-items-center border rounded-circle bg-transparent ms-3"
                style={{
                  height: "35px",
                  width: "35px",
                  background:
                    "url('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png') no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <Image
                  ref={ref}
                  roundedCircle
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                />
              </Button>
            )}
          </OverlayTrigger>
          <div
            className={`position-fixed ${settings?'d-flex':'d-none'} row align-items-center justify-content-center`}
            style={{ bottom: "130px", right: "3%", width: "100px" }}
            
          >
            <button className="mb-4 d-flex align-items-center border-0 bg-transparent">
              <small className="me-2">Security</small>
              <div className="border rounded-circle p-2 d-flex align-items-center justify-content-center">
                <SiGnuprivacyguard />
              </div>
            </button>
            <button className="mb-4 d-flex align-items-center border-0 bg-transparent">
              <small className="me-2">Privacy</small>
              <div className="border rounded-circle p-2 d-flex align-items-center justify-content-center">
                <MdOutlineSecurity />
              </div>
            </button>
            <button className="d-flex align-items-center border-0 bg-transparent">
              <small className="me-2">LogOut</small>
              <div className="border rounded-circle p-2 d-flex align-items-center justify-content-center">
                <RiLogoutCircleLine />
              </div>
            </button>
          </div>
          <button
            className="position-fixed bg-transparent rounded-circle p-2 shadow-sm"
            style={{ bottom: "65px", right: "2%" }}
            onClick={handleSetting}
          >
            <IoSettingsOutline size="25px" />
          </button>
        </div>
      ) : (
        <Button onClick={handleLogin} className="ms-3" variant="outline-dark">
          Login
        </Button>
      )}
    </div>
  );
}

export default Avatar;
