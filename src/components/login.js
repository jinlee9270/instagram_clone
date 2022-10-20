import React, { useState } from "react"
import { StyledInput, StyledButton, LoginContainer_1, LoginContainer_2, Wrap, Greeting } from "./styledComponent"
const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isEmail, setIsEmail] = useState('')
    const [isPassword, setIsPassword] = useState('')

    return (
        <Wrap>
            <LoginContainer_1>
            <img src="../../public/img/instagram.png"/>
            {isLogin && <>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <StyledInput placeholder="전화번호, 사용자 이름 또는 이메일"></StyledInput>
                    <StyledInput placeholder="비밀번호" type="password"></StyledInput>   
                </div>
                <StyledButton>로그인</StyledButton>
                <div style={{display:'flex', justifyContent:'center'}}><hr/><div>또는</div><hr/></div>
                <div>페이스북으로 로그인 a tag로 변경할 것</div>
                <div>비밀번호를 잊으셨나요? a tag로 변경할 것</div>
            </>}
            {!isLogin && <>
                <Greeting>친구들의 사진과 동영상을 보려면 가입하세요.</Greeting>
                <StyledButton>페이스북으로 로그인</StyledButton>
                <div style={{display:'flex', justifyContent:'center'}}><hr/><div>또는</div><hr/></div>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <StyledInput placeholder="휴대폰 번호 또는 이메일 주소"></StyledInput>
                    <StyledInput placeholder="성명"></StyledInput>
                    <StyledInput placeholder="사용자 이름"></StyledInput>
                    <StyledInput placeholder="비밀번호" type="password"></StyledInput>   
                </div>
                <div>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <div>더 알아보기</div></div>
                <button>가입</button>
                
            </>}
            </LoginContainer_1>
            <LoginContainer_2>
                {isLogin && <div>계정이 없으신가요? <span onClick={(e) => {setIsLogin(false)}}>가입하기</span></div>}
                {!isLogin &&<div>계정이 있으신가요? <span onClick={(e) => {setIsLogin(true)}}>로그인</span></div>}
            </LoginContainer_2>
        </Wrap>
    )
}

export default Login