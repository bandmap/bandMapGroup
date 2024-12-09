function SignUpOne() {
    return (
        <div className="login-popup">
            <div className="login-card">
                <h1>註冊隨Band地圖</h1>
                <p>只要註冊即可使用隨Band地圖完整服務<br />
                    立即擇一管道驗證註冊</p>
                <div className="card-content">

                    {/* 登入/註冊表單 */}
                    <form action="">
                        <div className="login-btns">
                            <button className="orange-btn">註冊</button>
                            <button className="orange-btn">使用Google帳號註冊</button>
                            <div className="line"></div>
                            <button className="normal-btn">登入</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpOne