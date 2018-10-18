import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = props => (
    <Layout>
        <div>
            <Prices data={props.data}/>
            {props.data.time.updated}
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    
    return {
        data: data
    };
}
    

export default Index;

