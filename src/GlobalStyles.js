import styled, { createGlobalStyle } from 'styled-components'
import 'modern-normalize'

export const globalColor = {
	colorBlack: '#101828',
	colorOrange: '#FFC531',
	colorRed: '#E44848',
	colorHoverRed: '#d84343',
	colorGrey: '#475467',
	colorLightGrey: '#F2F4F7',
	colorWhite: '#F7F7F7',
}

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Inter", sans-serif;
  color: #101828;
  font-size: 16px;
  line-height: 1.50;

   width: 100%;
   height: 100vh;
   margin: 0;

  overflow: auto;

    
}
.modal-open{overflow: hidden;}

a {
  text-decoration: none;
  cursor: pointer;
  color:${globalColor.colorBlack};
  
}

  ul,li {
    margin: 0;
    padding: 0;
    list-style: none;
    
  }

 h1,
 h2,
 h3,
 h4,
 h5,
 h6,
 p {
   margin: 0;
 }

img, svg {
  display: block;
  width: 100%;
  height: 100%;
  
}

button {
   cursor: pointer;
 }
`

export const Container = styled.div`
	width: 1440px;
	padding: 0 64px;
	margin: 0 auto;
`
