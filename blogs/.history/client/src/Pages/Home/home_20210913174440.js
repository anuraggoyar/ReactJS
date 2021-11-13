import './home.css'
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts/>
            </div>
        </>
    )
}
