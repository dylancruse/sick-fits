import Link from 'next/link';

const Home = props => (
    <div>
        <p>Home Page</p>
        <Link href="/sell">
            <a>Sell Page</a>
        </Link>
    </div>
);

export default Home;