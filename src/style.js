import styled from 'styled-components'

export const SectionImage =styled.div`
background: url(${"/imagefig/fondecran.jpg"});
width: 100%;
height: 100%;
margin: 0px;

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
margin: 0;
padding: 0;
background-color: #305397;
height: 10%;
width: 100%;

`
export const BotBanner =styled.div`



`