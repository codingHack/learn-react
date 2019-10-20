import React from 'react';

const data={
    codingHack:{
        name:'윤성재',
        description:'코딩을 사랑하는 개발자'
    },
    weeyeungjung:{
        name:'위연정',
        description: '코딩을 싫어하는 승무원'
    }
};

const Profile = ({match}) =>{
    const {username} = match.params;
    const profile=data[username];

    if(!profile){
        return <div>존재하지 않는 사용자 입니다.</div>
    }

    return(
        <div>
            <h3>{username}(profile.name)</h3>
            <p>{profile.description}</p>

        </div>
    );
};

export default Profile;
