import React from "react";
import {Link} from "react-router";

// HIRE ME LINK
import ContactLink from "../ContactLink.js";

export default class Header extends React.Component {
  render(){
    return(
      <header>
    		<nav class="wrap">
    			<ul>
    				<li class="ga-logo-wrap">
    					<Link class="ga-logo" to="/" title="Goto Homepage | GeebArt Logo">GA</Link>
    				</li>
    				<li class="title-card">
    					<Link to="/" title="">Chris <span>&ldquo;Geeb&rdquo; </span>Smith</Link>
    					<small>Director, Creative Technology</small>
    				</li>
    				<li class="right">
    					<ContactLink classes="button ghost dark scroll" title="Contact Me" text="Hire Me" icon="" open="true"/>
    				</li>
    				<li class="right">
              <Link to="resume" class="resume-link" title="See my Resume">Resume</Link>
    				</li>
    			</ul>
    		</nav>
    	</header>
    );
  }
}
