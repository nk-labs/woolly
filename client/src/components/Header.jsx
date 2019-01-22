import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';

// const woollyGiffyIframe = '<div style="width:20%;height:0;padding-bottom:20%;position:relative;"><iframe src="https://giphy.com/embed/ElqTrzFLekJhe" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/stickers/blog-official-zoo-ElqTrzFLekJhe">via GIPHY</a></p>';

function Header(props) {
  return (
  <AppBar position='static'>
    <Toolbar>
      <SvgIcon  > 
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </Toolbar>
  </AppBar>
  )
}

export default Header;