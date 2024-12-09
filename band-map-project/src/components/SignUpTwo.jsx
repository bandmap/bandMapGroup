function SignUpTwo() {
    return (
        <div className="login-popup">
            <div className="flow">
                <div className="done">1</div>
                <div className="line"></div>
                <div className="undo">2</div>
                <div className="line"></div>
                <div className="undo">3</div>
            </div>
            <div className="login-card">
                <h1>帳號密碼設定</h1>
                <div className="card-content">

                    {/* 登入/註冊表單 */}
                    <form action="">
                        <label htmlFor="email"></label>
                        <input className="user-data" type="email" name="email" id="email" title="電子郵件" placeholder="電子郵件" required />
                        <label htmlFor="user-id"></label>
                        <input className="user-data" type="text" name="user-id" id="user-id" title="帳號" placeholder="帳號" required />
                        <label htmlFor="password"></label>
                        <input className="user-data" type="password" name="password" id="password" title="密碼" placeholder="密碼" required />

                        <div className="remember-me">
                            <div>
                                <input type="checkbox" id="isChecked" />
                                <label htmlFor="isChecked">顯示密碼</label>
                            </div>
                        </div>

                        <div className="login-btns">
                            <input type="submit" className="orange-btn" name="submit-btn" id="submit-btn" value="下一步" />
                            <input type="submit" className="normal-btn" name="submit-btn" id="submit-btn" value="上一步" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpTwo