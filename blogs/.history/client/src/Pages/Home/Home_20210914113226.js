import './home.css'
import Header from '../../components/Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../Sidebar/Sidebar';

export default function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    )
}
