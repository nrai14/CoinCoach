import Tracker from "../components/Tracker";
import OpenAi from '../components/OpenAi';
import CryptoInfo from '../components/CryptoInfo';

function Home() {
    return (
        <>
            <h1>Home</h1>
            {/* <Tracker/> */}
            <OpenAi />
            <CryptoInfo  />
            
        </>
    )
};

export default Home;