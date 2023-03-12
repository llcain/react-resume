import React from "react";
import Button from "@mui/material/Button";



import "./Footer.css";
const Footer = () => (
  <div className="footer">
    <h1>Footer</h1>
    
    <Button variant="contained" >LinkedIn</Button>
    <Button variant="contained" >Instagram</Button>
    <Button variant="contained">Twitter</Button>
    <Button variant="contained">Facebook</Button>
    <Button variant="contained">Github</Button>

    <section>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <ul className="list-inline">
          <a href="/facebook.com" title="Like us!">
            <i class="fa fa-facebook fa-2x"></i>
          </a>
          <a href="/twitter" title="Tweet us!">
            <i class="fa fa-twitter fa-2x"></i>
          </a>
          <a href="/linkedin" title="Connect wih us!">
            <i class="fa fa-linkedin fa-2x"></i>
          </a>
          <a href="/git" title="Code with us!">
            <i class="fa fa-git fa-2x"></i>
          </a>
          <a href="mailto:xx@xx.com" title="Mail us!">
            <i class="fa fa-envelope-o fa-2x"></i>
          </a>
        </ul>      
      </div>
    </div>
	</div>
</section>

<p class="p">Demo by George Martsoukos. <a href="http://www.sitepoint.com/introduction-icon-fonts-font-awesome-icomoon" target="_blank">See article</a>.</p>

    
    

  </div>
);
export default Footer;