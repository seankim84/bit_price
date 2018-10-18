import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
    <div>
        <Head>
            <title>Currency Price</title>
            <link href="https://bootswatch.com/4/cerulean/bootstrap.min.css" rel="stylesheet"/>
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;