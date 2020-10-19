import React, {useState, useEffect} from 'react';
import $ from 'jquery';
import CopyToClipboard from 'react-copy-to-clipboard';
import ReactTooltip from "react-tooltip";
import { Container, Row, Col } from 'react-bootstrap'

import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload  } from "react-icons/fa";


const Footer = () => {
    
    const [copiedSuccess, setCopiedSuccess] = useState('')
    const [value, setValue] = useState('gsdias22@gmail.com');
   
   
    const onCopy = (value, e) => {       
        setCopiedSuccess('Copied test!');       
        $(document).ready(function() {
            $('#hideEmailMsg').show().delay(2000).fadeOut();
        });
    };
  
    return (
        <>
        <Container fluid>
          <Row>
            <Col>
            <footer className="footer">
            <div  className="copy-toClipboard" id="hideEmailMsg">

                {copiedSuccess ? <span id="hideEmailMsg" >email copied to clipboard</span>  : null  } 
            </div>
            
            <div className="footer-socialmedia">
                <a href="https://www.linkedin.com/in/gabriel-sciacca-dias-149a84b4/" data-tip data-for="tipLinkedin"><FaLinkedin /></a>
                <a href="#" data-tip data-for="tipGithub"><FaGithub /></a>
                <div>                
                    <CopyToClipboard                    
                    onCopy={onCopy}
                    options={{message: 'Whoa!'}}
                    
                    text={value}>
                        <a                        
                        onClick={onCopy} data-tip data-for="tipEmail"><FaEnvelope /></a>
                    </CopyToClipboard>
                </div>
        
                <a href="#" download data-tip data-for="tipDownload"><FaFileDownload /></a>
  
                <ReactTooltip id="tipLinkedin" place="top" effect="solid">
                  Linkedin
                </ReactTooltip>
                <ReactTooltip id="tipGithub" place="top" effect="solid">
                  Github
                </ReactTooltip>
                <ReactTooltip id="tipEmail" place="top" effect="solid">
                  Click to copy email to clipboard
                </ReactTooltip>
                <ReactTooltip id="tipDownload" place="top" effect="solid">
                  Download resume
                </ReactTooltip>
            </div>
  
            <div className="footer-text">
              © {new Date().getFullYear()}, Built by Gabriel Dias
            </div>
          </footer>            
            </Col>        
          </Row>
          </Container>
        </>

        






       
    );
}

export default Footer;

