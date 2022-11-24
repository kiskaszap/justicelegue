import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © justice league ${year}`}</footer>;
  };
  
  export default Footer;