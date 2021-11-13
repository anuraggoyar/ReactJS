import './home.css'
import Header from '../../Header/Header';
import Posts from '../../Posts/Posts';
import Sidebar from '../../SideBar/sideBar';

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
