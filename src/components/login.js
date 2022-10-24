import React, { useState } from "react"
import styled from "styled-components"

const LoginWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const FlexBox = styled.div`
    display: flex;
`
const ColFlexBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column
`
const ColFlexBoxBorder = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: solid 1px #DDDDDD;
`

const StyledInput = styled.input`
    padding: 10px;
    margin: 5px 40px;
    width: 250px;
    border: solid 1px #DDDDDD;
`

const StyledButton = styled.button`
    background-color: #0095f6;
    border: none;
    border-radius: 5px;
    width: 270px;
    font-size: 1rem;
    padding: 5px;
    font-weight: bold;
    color: white;
`

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')

    return (
        <LoginWrap>
            <ColFlexBoxBorder>
            <img src="../img/instagram.png" style={{padding:'40px'}}/>
            {isLogin && <>
                <ColFlexBox>
                <StyledInput placeholder="전화번호, 사용자 이름 또는 이메일"></StyledInput>
                <StyledInput placeholder="비밀번호" type="password"></StyledInput>   
                <StyledButton>로그인</StyledButton>
                </ColFlexBox>
                <FlexBox><hr/><div>또는</div><hr/></FlexBox>
                <div><StyledButton>페이스북으로 로그인</StyledButton></div>
                <a>비밀번호를 잊으셨나요?</a>
            </>}
            {!isLogin && <>
                <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
                <StyledButton>페이스북으로 로그인</StyledButton>
                <FlexBox><hr/><div>또는</div><hr/></FlexBox>
                <StyledInput placeholder="휴대폰 번호 또는 이메일 주소"></StyledInput>
                <StyledInput placeholder="성명"></StyledInput>
                <StyledInput placeholder="사용자 이름"></StyledInput>
                <StyledInput placeholder="비밀번호" type="password"></StyledInput>   

                <div>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <div>더 알아보기</div></div>
                <StyledButton>가입</StyledButton>
                
            </>}
            </ColFlexBoxBorder>
            <ColFlexBoxBorder style={{marginTop:'30px'}}>
                {isLogin && <div>계정이 없으신가요? <span onClick={(e) => {setIsLogin(false)}} style={{fontWeight: 'bold', color:'blue', cursor:'pointer'}}>가입하기</span></div>}
                {!isLogin &&<div>계정이 있으신가요? <span onClick={(e) => {setIsLogin(true)}} style={{fontWeight: 'bold', color:'blue', cursor:'pointer'}}>로그인</span></div>}
            </ColFlexBoxBorder>
        </LoginWrap>
    )
}

export default Login