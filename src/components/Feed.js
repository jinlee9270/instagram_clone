import React from "react"
import styled from "styled-components"

const FeedWrap = styled.div`
    display: flex;
    width: 450px;
    flex-direction: column;
    position:absolute;
    left: 50%;
    transform: translate(-50%, 0%)
`
const FeedEmoticon = styled.img`
    width: 20px;
    margin : 5px;
`

const Feed = () => {
    
    
    return (
        <>
            <FeedWrap>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center', margin:'10px 0px'}}>
                        <FeedEmoticon src="../img/profile-user.png"/>
                        <div>유저아이디</div>
                    </div>
                    <button>...</button>
                </div>
                <div>
                    <img src="../img/sample.png" style={{width:'450px', height:'450px'}}/>
                </div>
                <div style={{display:'flex' , justifyContent: 'space-between'}}>
                    <div>
                        <FeedEmoticon src="../img/heart.png"/>
                        <FeedEmoticon src="../img/chat.png" />
                        <FeedEmoticon src="../img/paper_plane.png" />
                    </div>
                    <div>
                        <FeedEmoticon src="../img/bookmark-white.png" />
                    </div>
                </div>
                <div>좋아요 <span>0개</span></div>
                <div style={{display:'flex'}}>
                    <div>유저아이디</div><div style={{margin:'0px 5px'}}>댓글댓글</div>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src="../img/free-icon-happy.png" style={{width:'20px', marginRight:'20px'}}/>
                    <input placeholder="댓글달기..." style={{width:'350px', fontSize:'1rem', }}/>
                    <button>게시</button>
                </div>
            </FeedWrap>
        </>
    )
}

export default Feed