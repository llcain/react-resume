import React from "react";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./Footer.css";
const Footer = () => (
  <div className="footer">
    <h1>Footer</h1>
    <Button variant="contained">Hello World</Button>
    <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    

  </div>
);
export default Footer;