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
    outline: solid 1px ${props=>(props.outline? 'blue' : 'red')};
`

const StyledButton = styled.button`
    background-color: #0095f6;
    border: none;
    border-radius: 5px;
    width: 272px;
    font-size: 1rem;
    padding: 6px;
    margin: 5px;
    font-weight: bold;
    color: white;
`

const Login = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isName, setIsName] = useState(false)
    const [isUserName, setIsUserName] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')

    const onchangeEmail = (e) => {
        const at = /@/
        const period = /\./ 
        const curemail = e.target.value
        if(at.test(curemail) && period.test(curemail)){
            setIsEmail(true)
        }
        else{
            setIsEmail(false)
        }
        setEmail(curemail)
    }

    const onChangePassword = (e) => {
        const curpassword = e.target.value
        if(curpassword.length >= 8){
            setIsPassword(true)
        }
        else{
            setIsPassword(false)
        }
        setPassword(curpassword)
    }

    const onChangeName = (e) => {
        const regex = /./
        const curName = e.target.value
        if(regex.test(curName)){
            setIsName(true)
        }
        else {
            setIsName(false)
        }
        setName(curName)
        console.log(regex.test(curName))
    }

    const onChangeUserName = (e) => {
        const regex = /./
        const curUserName = e.target.value
        if(regex.test(curUserName)){
            setIsUserName(true)
        }
        else {
            setIsUserName(false)
        }
        setUserName(curUserName)
    }

    return (
        <LoginWrap>
            <ColFlexBoxBorder>
            <img src="../img/instagram.png" style={{padding:'40px'}}/>
            {isLogin && <>
                <ColFlexBox>
                <StyledInput placeholder="????????????, ????????? ?????? ?????? ?????????" onChange={onchangeEmail} outline={isEmail}/>
                <StyledInput placeholder="????????????" type="password" onChange={onChangePassword} outline={isPassword}/> 
                <StyledButton>?????????</StyledButton>
                </ColFlexBox>
                <FlexBox style={{margin:'10px 0px'}}><div/><div>??????</div><div/></FlexBox>
                <FlexBox style={{padding:'10px'}}>
                    <img src="../img/facebook.png" style={{width:'14px', paddingRight:'5px'}}/><span style={{color:'#385185', fontSize:"14px", fontWeight:'bolder', cursor: 'pointer'}}>Facebook?????? ?????????</span>
                </FlexBox>
                <a style={{color:'#385185', fontSize:'13px', padding:'10px 0px 20px 0px'}}>??????????????? ????????????????</a>
            </>}
            {!isLogin && <>
                <div style={{color:'#AAAAAA', fontWeight:'bold', fontSize:'17px', width:'272px', textAlign:'center'}}>???????????? ????????? ???????????? ????????? ???????????????.</div>
                <StyledButton style={{padding:'10px'}}>
                    <img src="../img/facebook.png" style={{color :'white', width:'14px', paddingRight:'5px'}}/><span style={{color:'white', fontSize:"14px", fontWeight:'bolder', cursor: 'pointer'}}>Facebook?????? ?????????</span>
                </StyledButton>
                <FlexBox style={{margin:'10px 0px'}}><div/><div>??????</div><div/></FlexBox>
                <StyledInput placeholder="????????? ?????? ?????? ????????? ??????" onChange={onchangeEmail} outline={isEmail}></StyledInput>
                <StyledInput placeholder="??????" onChange={onChangeName} outline={isName}></StyledInput>
                <StyledInput placeholder="????????? ??????" onChange={onChangeUserName} outline={isUserName}></StyledInput>
                <StyledInput placeholder="????????????" type="password" onChange={onChangePassword} outline={isPassword}></StyledInput>
                <div style={{fontSize:'0.8rem', fontWeight:'bolder', margin:'10px 0px', color:'#AAAAAA'}}>  
                    <div>?????? ???????????? ???????????? ????????? ???????????? ????????? ?????????</div>
                    <div>Instagram??? ??????????????? ?????? ????????????.<span style={{fontWeight:'bolder'}}> ??? ????????????</span></div>
                </div>
                <StyledButton style={{margin:'10px 0px 40px 0px'}}>??????</StyledButton>
                
            </>}
            </ColFlexBoxBorder>
            <ColFlexBoxBorder style={{marginTop:'10px', padding:'20px', fontSize:'14px'}}>
                {isLogin && <div>????????? ???????????????? <span onClick={(e) => {setIsLogin(false)}} style={{fontWeight: 'bold', color:'blue', cursor:'pointer'}}>????????????</span></div>}
                {!isLogin &&<div>????????? ???????????????? <span onClick={(e) => {setIsLogin(true)}} style={{fontWeight: 'bold', color:'blue', cursor:'pointer'}}>?????????</span></div>}
            </ColFlexBoxBorder>
        </LoginWrap>
    )
}

export default Login