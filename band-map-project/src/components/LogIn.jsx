function LogIn() {
    return (
        <div id="login-page">
            <div className="login-left">
                <h3>隨Band看 隨Band聽 隨Band聊</h3>
                <p>不再錯過任何一場表演!</p>
            </div>
            <div className="login-right">
                <div className="login-card">
                    <figure><img src="../images/logo-black.svg" alt="" /></figure>
                    <p>打造屬於你的專屬音樂行事曆！</p>
                    <div className="login-btns">
                        <button className="orange-btn">註冊享完整功能</button>
                        <button className="normal-btn">登入</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn