import React, { useState } from "react"
import styled from "styled-components"
import Modal from 'react-modal'

const FeedWrap = styled.div`
    display: flex;
    width: 450px;
    flex-direction: column;
    position:absolute;
    left: 50%;
    transform: translate(-50%, 0%)
`
const FeedEmoticon = styled.img`
    width: 25px;
    margin : 5px;
`
const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};

const Feed = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const ModalContainer = () => {
        if(isModalOpen){
            setIsModalOpen(false)
        }
        else{
            setIsModalOpen(true)
        }
    }

    return (
        <>
            <FeedWrap>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <div style={{display: 'flex', alignItems: 'center', margin:'10px 0px'}}>
                        <FeedEmoticon src="../img/profile-user.png"/>
                        <div>유저아이디</div>
                    </div>
                    <button style={{background:'none', border:'none', fontWeight:'bold', fontSize: '18px', cursor:'pointer'}} onClick={ModalContainer}>...</button>
                    {console.log(isModalOpen)}
                    {isModalOpen && <Modal style={customStyles}/>}
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
                <div style={{margin: '30px 0px'}}>좋아요 <span>0개</span></div>
                <div style={{display:'flex'}}>
                    <div style={{fontWeight:'bold'}}>유저아이디</div><div style={{margin:'0px 5px'}}>댓글댓글</div>
                </div>
                <div style={{display: 'flex', margin: '30px 0px', justifyContent: 'space-between'}}>
                    <img src="../img/free-icon-happy.png" style={{width:'20px', height:'20px'}}/>
                    <input placeholder="댓글달기..." style={{width:'350px', fontSize:'1rem', border:'none' }}/>
                    <button style={{border:'none', background:'none', color: '#0095f6'}}>게시</button>
                </div>
            </FeedWrap>
        </>
    )
}

export default Feed