import { Link } from 'react-router-dom';
import './css/style.css';

function NavBar() {
    return (
        <div id="nav-bar" className="sticky-header">
            <h1><Link to='/'><img src="../images/logo.svg" alt="logo" /></Link></h1>
            <ul className="menu">
                <li><Link to='/search'>演出搜尋</Link></li>
                <li><Link to='/band'>本月樂團推薦</Link></li>
                <li><Link to='/event'>近期活動</Link></li>
                <li><Link to='/chatboard'>樂迷留言板</Link></li>
                <li><Link to='/calendar'>個人行事曆</Link></li>
                <li><Link to='/member'>會員中心</Link></li>
            </ul>

        </div>
    )
}

export default NavBar