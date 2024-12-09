import { Link } from 'react-router-dom';
import './css/style.css';

function NavBar() {
    return (
        <div id="nav-bar" className="sticky-header">
            <h1><Link to='/'><img src="../images/logo.svg" alt="logo" /></Link></h1>
            <ul className="menu">
                <li><Link to='/search'><p>演出搜尋</p></Link></li>
                <li><Link to='/band'><p>本月樂團推薦</p></Link></li>
                <li><Link to='/event'><p>近期活動</p></Link></li>
                <li><Link to='/chatboard'><p>樂迷留言板</p></Link></li>
                <li><Link to='/calendar'><p>個人行事曆</p></Link></li>
                <li><Link to='/member'><p>會員中心</p></Link></li>
            </ul>

        </div>
    )
}

export default NavBar