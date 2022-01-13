import styled from 'styled-components'

export const SectionImage =styled.div`
background: url(${"/imagefig/fondecran.jpg"});
position: relative;
max-width: 100%;
height: 100%;
margin: 0px;
padding: 50%;
background-repeat: no-repeat;

`
export const Card1 =styled.div`
/* border: 2px solid black;
border-radius: 10px; */
color:white;
background-image: url(${props => props.path});
`
export const Placement =styled.div`
margin: 5%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px 30px;
`
export const TopBanner =styled.div`
position: absolute;
top: 0;
left: 0px;
bottom: 400px;
background-color: #305397;
height: 20%;
width: 100%;

`
export const BotBanner =styled.div`
position: absolute;
bottom: 10px;
left: 0px;
background-color: #305397;
height: 20%;
width: 100%;

`
export const Subtitle =styled.div`


`
