import BandIntro from "../components/BandIntro"
import Footer from "../components/Footer"
import ImageGallery from "../components/ImageGallery"
import NavBar from "../components/NavBar"

function BandDiscoverPage() {
    return (
        <>
            <NavBar />
            <main>
                <div id="banddiscover-main">
                    {/* 背景區 */}
                    <div className="linear-bg">
                        <img src="../images/texture.png" alt="" />
                    </div>
                    {/* 頁面topbar */}
                    <div className="topbar">
                        <div className="left-part">
                            <div className="title">
                                <h2>BAND利商店</h2>
                                <p>本月樂團推薦</p>
                            </div>
                        </div>
                        <div className="right-part"></div>
                    </div>
                </div>
                {/* <ImageGallery /> */}
            </main>
            <footer>
                {/* <Footer /> */}
            </footer>
        </>
    )
}

export default BandDiscoverPage