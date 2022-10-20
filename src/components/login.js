import React, { useState } from "react"

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    
    return (
        <div style={{display:'flex', flexDirection: 'column'}}>
            <div style={{borderStyle:'solid'}}>
            <div>이거 이미지 태그로 바꾸고 그림 넣기</div>
            <div>친구들의 사진과 동영상을 보려면 가입하세요.</div>
            {isLogin && <>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <input placeholder="전화번호, 사용자 이름 또는 이메일"></input>
                    <input placeholder="비밀번호" type="password"></input>   
                </div>
                <button>로그인</button>
                <div style={{display:'flex', justifyContent:'center'}}><div>------</div><div>또는</div><div>------</div></div>
                <div>페이스북으로 로그인 a tag로 변경할 것</div>
                <div>비밀번호를 잊으셨나요? a tag로 변경할 것</div>
            </>}
            {!isLogin && <>
                <button>페이스북으로 로그인</button>
                <div style={{display:'flex', justifyContent:'center'}}><div>------</div><div>또는</div><div>------</div></div>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <input placeholder="휴대폰 번호 또는 이메일 주소"></input>
                    <input placeholder="성명"></input>
                    <input placeholder="사용자 이름"></input>
                    <input placeholder="비밀번호" type="password"></input>   
                </div>
                <div>저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <div>더 알아보기</div></div>
                <button>가입</button>
                
            </>}
            </div>
            <div style={{borderStyle:'solid'}}>
                {isLogin && <div>계정이 없으신가요? <button>가입하기</button></div>}
                {!isLogin &&<div>계정이 있으신가요? <button>로그인</button></div>}
            </div>
        </div>
    )
}

export default Login