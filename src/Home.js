import { SectionImage, Card1, Placement, TopBanner } from "./style.js";
const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }
    return ( 
        <SectionImage>
            <TopBanner>
                <h1>NFT WORLD</h1>
            </TopBanner>
            <h2>CREATE YOUR OWN</h2>
            
<Placement>
<Card1>
        <p>yop</p>
        <img src="/imagefig/cryptopunks_9_p.1bf0c123710.original.jpg" alt="logocrypto" width="20%"/>
</Card1>        
<Card1>
    <p>yop</p>
    <img src="/imagefig/logo-music.jpg" alt="music logo" width="20%"/>
</Card1>
<Card1>
    <p>yop</p>
    <img src="/imagefig/computer-icon_44089.png" alt="icon computer" width="20%"/>
        
</Card1>
    
</Placement>
        </SectionImage>


    );
}

export default Home;