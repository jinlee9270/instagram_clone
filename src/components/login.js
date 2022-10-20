import React, { useState } from "react"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')

    return (
        <div>
            <div>
            <img src="../../public/img/instagram.png"/>
            {isLogin && <>
                <input placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                <input placeholder="비밀번호" type="password"></input>   
                <button>로그인</button>
                <div style={{display:'flex', justifyContent:'center'}}><hr/><div>또는</div><hr/></div>
                <div><button>페이스북으로 로그인</button></div>
                <a>비밀번호를 잊으셨나요?</a>
            </>}
            {!isLogin && <>
                <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                <button>페이스북으로 로그인</button>
                <div style={{display:'flex', justifyContent:'center'}}><hr/><div>또는</div><hr/></div>
                <input placeholder="휴대폰 번호 또는 이메일 주소"></input>
                <input placeholder="성명"></input>
                <input placeholder="사용자 이름"></input>
                <input placeholder="비밀번호" type="password"></input>   

                <div>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <div>더 알아보기</div></div>
                <button>가입</button>
                
            </>}
            </div>
            <div>
                {isLogin && <div>계정이 없으신가요? <span onClick={(e) => {setIsLogin(false)}}>가입하기</span></div>}
                {!isLogin &&<div>계정이 있으신가요? <span onClick={(e) => {setIsLogin(true)}}>로그인</span></div>}
            </div>
        </div>
    )
}

export default Login