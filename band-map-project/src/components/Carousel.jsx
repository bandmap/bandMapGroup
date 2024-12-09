function Carousel({arrCards_1}) {

    return (
        <>
            {
                arrCards_1.map((banner) => {
                    return (
                        <figure className="banner-card" key={banner.key}>
                            <img src={banner.img} alt="" />
                        </figure>
                    )
                })
            }
        </>
    )
}

export default Carousel