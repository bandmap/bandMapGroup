import CardOne from "../components/CardOne"
import EventInfoCard from "../components/EventInfoCard"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

function EventOne() {

    // 箭頭button變數
    let arrow_button = <svg width="32" height="25" viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0153 0.567141C14.0152 0.566093 14.015 0.565065 16.5 0.291167C18.985 0.0172684 18.9848 0.0162815 18.9847 0.0153151L18.9845 0.0134799L18.9842 0.0101627L18.9836 0.00493076L18.983 0L18.9845 0.0116533C18.9869 0.028776 18.992 0.0641574 19.0007 0.116075C19.0181 0.220106 19.0497 0.389202 19.102 0.609783C19.207 1.05296 19.3923 1.69136 19.7059 2.42136C20.3347 3.88467 21.4484 5.64917 23.4108 7.00451L23.4142 7.0069C26.0193 8.81257 28.7945 9.73324 31.553 9.79173L31.5 12.2912L31.553 14.7906C28.7945 14.8491 26.0193 15.7698 23.4142 17.5754L23.4108 17.5778C21.4484 18.9332 20.3347 20.6977 19.7059 22.161C19.3923 22.891 19.207 23.5294 19.102 23.9725C19.0497 24.1931 19.0181 24.3622 19.0007 24.4663C18.992 24.5182 18.9869 24.5536 18.9845 24.5707L18.983 24.5823L18.9836 24.5774L18.9842 24.5722L18.9845 24.5689L18.9847 24.567C18.9848 24.5661 18.985 24.5651 16.5 24.2912C14.015 24.0173 14.0152 24.0162 14.0153 24.0152L14.0155 24.013L14.0161 24.0082L14.0173 23.9971L14.0207 23.9689C14.0234 23.9474 14.0268 23.9207 14.0312 23.889C14.0399 23.8255 14.0524 23.7418 14.0695 23.6398C14.1036 23.4359 14.1567 23.1575 14.2366 22.8201C14.396 22.1472 14.6652 21.227 15.1121 20.1871C15.8192 18.5413 16.9906 16.5537 18.9067 14.7912H0V9.79117H18.9067C16.9906 8.02865 15.8192 6.04104 15.1121 4.39527C14.6652 3.35535 14.396 2.43518 14.2366 1.76226C14.1567 1.42479 14.1036 1.14646 14.0695 0.942578C14.0524 0.840537 14.0399 0.756839 14.0312 0.693371C14.0268 0.661627 14.0234 0.634911 14.0207 0.613457L14.0173 0.58524L14.0161 0.574137L14.0155 0.569346L14.0153 0.567141Z" fill="white" />
    </svg>

    let sparkle_blue = <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M48.5087 22.5592C44.5605 22.9046 35.7104 26.613 37.9081 27.0011C35.7104 26.613 42.7602 33.1234 46.3523 34.7993C42.7602 33.1234 33.2397 31.9006 34.9487 33.3346C33.2397 31.9006 36.0971 41.0641 38.3712 44.3106C36.0971 41.0641 28.4615 35.2518 29.2253 37.3487C28.4615 35.2518 26.3463 44.6114 26.6918 48.5596C26.3463 44.6114 22.638 35.7613 22.2499 37.959C22.638 35.7613 16.1275 42.8111 14.4517 46.4032C16.1275 42.8111 17.3503 33.2906 15.9163 34.9996C17.3503 33.2906 8.18686 36.148 4.9403 38.4221C8.18686 36.148 13.9991 28.5124 11.9022 29.2762C13.9991 28.5124 4.63957 26.3972 0.691346 26.7426C4.63957 26.3972 13.4896 22.6889 11.292 22.3008C13.4896 22.6889 6.43987 16.1784 2.84776 14.5026C6.43987 16.1784 15.9603 17.4012 14.2514 15.9672C15.9603 17.4012 13.103 8.23775 10.8288 4.99119C13.103 8.23775 20.7386 14.05 19.9748 11.9531C20.7386 14.05 22.8537 4.69045 22.5083 0.742247C22.8537 4.69047 26.5621 13.5405 26.9502 11.3429C26.5621 13.5405 33.0725 6.49077 34.7484 2.89866C33.0725 6.49077 31.8497 16.0112 33.2837 14.3022C31.8497 16.0112 41.0132 13.1539 44.2597 10.8797C41.0132 13.1539 35.2009 20.7895 37.2978 20.0257C35.2009 20.7894 44.5605 22.9046 48.5087 22.5592Z" fill="#0099FF" />
    </svg>

    let arrCards_1 = [
        { img: '../images/活動/近期活動-揪音秘.jpg', key: '1', date: '2024/11/10（日）14:00', event: '揪音秘', location: 'Legacy Taipei 音樂展演空間', nametag: ['阿橘Ahh G', '粗大Band', 'Who Cares胡凱兒'] },
        { img: '../images/活動/近期活動-刑男大主廚.jpg', key: '2', date: '2024/11/24 (日）18:30 ', event: '旺福2024旺聖節《刑男大主廚》演唱會', location: 'Legacy Taipei 音樂展演空間', nametag: ['WONFU旺福'] },
        { img: '../images/活動/近期活動-開往天堂的海盜船.jpg', key: '3', date: '2024/11/29 (五）20:00 ', event: '無妄合作社《開往天堂的海盜船》2024專場巡演-台北場(一)', location: 'Legacy Taipei 音樂展演空間', nametag: ['無妄合作社'] },
        { img: '../images/活動/近期活動-生祥樂隊.jpg', key: '4', date: '2024/12/06 (五）20:00', event: '生祥樂隊《種樹與野生》15+3週年紀念演唱會', location: 'Legacy Taipei 音樂展演空間', nametag: ['生祥樂隊'] },
        { img: '../images/活動/近期活動-橋.jpg', key: '5', date: '2024/12/08 (日）20:00', event: '步行者 2024新專輯《橋》發片暨十週年專場', location: 'Legacy Taipei 音樂展演空間', nametag: ['步行者'] },
        { img: '../images/活動/近期活動-巴大雄-雄心未泯_1.jpg', key: '6', date: '2024/12/11 (三）19:00', event: '【2024 Forest Night 】巴大雄－雄心未泯', location: 'Legacy Taipei 音樂展演空間', nametag: ['巴大雄'] },
        { img: '../images/活動/近期活動-都市女生-洪佩瑜.jpg', key: '7', date: '2024/12/14 (六）20:00', event: '【2024都市女聲】：洪佩瑜-台北場(加場)', location: 'Legacy Taipei 音樂展演空間', nametag: ['洪佩瑜'] },
        { img: '../images/活動/近期活動-宋德鶴10周年音樂會.png', key: '8', date: '2024/12/19 (四）19:30', event: '宋德鶴IRONHORN十週年紀念專場－台北場', location: 'Legacy Taipei 音樂展演空間', nametag: ['宋德鶴IRONHORN'] },
        { img: '../images/活動/近期活動-柯泯薰-好好的專輯發片演唱會.jpg', key: '9', date: '2024/12/26 (四）19:30', event: '柯泯薰 misi Ke《好好的 BE GOOD》專輯發片專場', location: 'Legacy Taipei 音樂展演空間', nametag: ['柯泯薰 misi Ke'] },
    ]

    return (
        <>
            <NavBar />
            <main className="event-page">
                <div className="event-banner">
                    <figure className="eventpic"><img src="../images/活動/活動頁-揪音秘-橫式.jpg" alt="活動頁-刑男大主廚" /></figure>
                    {/* <h1>挺音樂｜揪音秘</h1> */}
                </div>
                <div className="content-bg-up">
                    <img src="../images/資訊頁-bg圖形.svg" alt="" />
                </div>
                <div className="content-down">
                    <div className="left-part">
                        <figure><img src="../images/活動/近期活動-揪音秘.jpg" alt="" /></figure>
                        <div className="content-words">
                            <h2>挺音樂｜揪音秘</h2>
                            <p>這次音樂派對將為你帶來5組獨具特色的音樂人，共同呈現音樂的多元樣貌！
                                <br /><br />
                                【阿橘】14:00-14:30
                                <br />
                                阿橘受復古浪潮影響，創作融合R&B與Neo Soul的獨特風格，且擅長詞曲創作與和聲編寫，其作品充滿標誌性復古魅力。
                                <br /><br />
                                【粗大Band】15:30-16:00
                                <br />
                                粗大Band以美式流行龐克為基，十年不變地保持青春與龐克態度。推出《難道我是一隻怪獸》專輯大獲好評，登上多個指標音樂舞台。
                                <br /><br />
                                【Who Cares胡凱兒】17:00-17:30
                                <br />
                                以真摯細膩的文字為基，胡凱兒的音樂編織出深刻情感與不為人知的心事。融合多元風格，展現獨樹一幟的另類搖滾魅力。
                                <br /><br />
                                【林潔心】18:30-19:00
                                <br />
                                透過作品展現自我成長的省思，結合多元曲風創作獨特音樂風貌。以《等我回家》一曲嶄露頭角，憑其真誠衝擊成為嘻哈圈最強黑馬。
                                <br /><br />
                                【FEniX】20:00-20:20
                                <br />
                                以團結力量為基，FEniX從小火苗化為烈焰鳳凰。 成員各自擅長歌舞、創作、戲劇，展現無限潛力與魅力。
                                <br /><br />
                                #揪音秘最挺的就是ME #我挺的 #挺有意思的</p>
                        </div>
                    </div>
                    <div className="right-part">
                        <EventInfoCard/>
                    </div>
                </div>

                {/* 近期活動跑馬燈 */}
                <div className="newsTicker">
                    <div className='bandmap-wrapper'>
                        <span>CURRENTEVENT</span><span>{sparkle_blue}</span><span>CURRENTEVENT</span><span>{sparkle_blue}</span><span>CURRENTEVENT</span><span>{sparkle_blue}</span>
                    </div>
                    <div className='bandmap-wrapper'>
                        <span>CURRENTEVENT</span><span>{sparkle_blue}</span><span>CURRENTEVENT</span><span>{sparkle_blue}</span><span>CURRENTEVENT</span><span>{sparkle_blue}</span>
                    </div>
                </div>
                <div className="cards-bottom">
                    {/* 下一張按鈕 */}
                    <div className="buttons">
                        <button className="cta-btn left">{arrow_button}</button>
                        <button className="cta-btn right">{arrow_button}</button>
                    </div>
                    {
                        arrCards_1.map((searchcard) => {
                            return <CardOne searchcard={searchcard} />
                        })
                    }
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default EventOne