function CardLong({ searchcard }) {
    return (
        <div className="card-long" key={searchcard.key}>
            <figure><img src={searchcard.img} alt={searchcard.event} /></figure>

            <div className="card-right">
                <div className="content">
                    <p className="date">{searchcard.date}</p>
                    <p className="event">{searchcard.event}</p>
                    <div className="location">
                        <figure><img src="../images/icon/icon-地點.svg" alt="icon-地點" /></figure>
                        <p>{searchcard.location}</p>
                    </div>
                </div>
                <div className="bottom-line">
                    <div className="name-tags">
                        {searchcard.nametag.map((band, i) => {
                            return <p key={i} className="nametag">{band}</p>
                        })}
                    </div>
                    <div className="btns">
                        <figure className="like"><img src="../images/icon/icon-like.svg" alt="icon-like" /></figure>
                        <div className="collect-btn">
                            <figure><img src="../images/icon/icon-plus.svg" alt="" /></figure>
                            <p>行事曆</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardLong