function SignUpFour() {
    return (
        <div className="login-popup">
            <div className="flow">
                <div className="done">1</div>
                <div className="line done"></div>
                <div className="done">2</div>
                <div className="line done"></div>
                <div className="done">3</div>
            </div>
            <div className="login-card">
                <h1>完成註冊</h1>
                <p>開始你的隨Band地圖規劃吧!</p>
                <div className="card-content">
                    <div className="login-btns">
                        <input type="submit" className="orange-btn" name="submit-btn" id="submit-btn" value="前往會員中心" />
                        <input type="submit" className="normal-btn" name="submit-btn" id="submit-btn" value="返回首頁" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpFour