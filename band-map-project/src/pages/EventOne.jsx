import NavBar from "../components/NavBar"

function EventOne() {
    return (
        <>
        <NavBar />
        <main>
            <div className="event-banner">
                <div className="cover"><img src="../images/event-cover.svg" alt="" /></div>
                <figure className="eventpic"><img src="../images/活動/活動頁-刑男大主廚-橫式.jpg" alt="活動頁-刑男大主廚" /></figure>
                <h1>旺福2024旺聖節<br/>《刑男大主廚》演唱會</h1>
            </div>
        </main>
        </>
    )
}

export default EventOne