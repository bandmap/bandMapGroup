function SignUpThree() {
    return (
        <div className="login-popup">
            <div className="flow">
                <div className="done">1</div>
                <div className="line done"></div>
                <div className="done">2</div>
                <div className="line"></div>
                <div className="undo">3</div>
            </div>
            <div className="login-card">
                <h1>接收認證碼</h1>
                <div className="card-content">

                    {/* 登入/註冊表單 */}
                    <form action="">
                        <label htmlFor="code"></label>
                        <input className="user-data" type="email" name="code" id="code" title="輸入驗證碼" placeholder="輸入驗證碼" required />

                        <div className="remember-me">
                            <div>
                                <p>重新發送驗證碼</p>
                            </div>
                        </div>

                        <div className="login-btns">
                            <input type="submit" className="orange-btn" name="submit-btn" id="submit-btn" value="進行驗證" />
                            <input type="submit" className="normal-btn" name="submit-btn" id="submit-btn" value="上一步" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpThree