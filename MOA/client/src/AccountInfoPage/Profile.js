import React, { useState, useEffect } from 'react';

function Profile() {
    //state
    const [editing, setEditing] = useState(false)       //프로필 변경 상태인지 알리는 변수
    const [imageFile, setImageFile] = useState("")      //이미지 파일
    const [src, setSrc] = useState("")   //이미지 소스
    const [nickName, setNickName] = useState("")    //닉네임
    const [id, setId] = useState("")          //아이디
    const [content, setContent] = useState("")    //자기소개

    //미리보기
    let profile_preview = ""

    useEffect(() => {
        getMyProfile()
    }, [])

    //서버에서 계정주 프로필 가져오기
    const getMyProfile = () => {}

    //변경사항 저장
    const changeEditing = () => {}

    //취소버튼
    const notChange = () => {
        setEditing(false)
    }

    //프로필 사진 변경
    const isSelectedImg = (event) => {}

    //프로필 사진이 변경될때
    if (imageFile !== null) {}

    //프로필 변경 화면
    if (editing === true) {
        return (
            <Container sytle={{ width: "100%" }}>
                <Row justify="center" align="middle">
                    <Col style={{ margin: "0 50px" }}>
                        <Row>
                            {profile_preview}
                        </Row>
                        <Row>
                            <Input
                                type="file"
                                accept="image/jpeg, image/jpg, image/png"
                                onChange={isSelectedImg}
                            />
                        </Row>
                    </Col>
                    
                    <Col style={{ width: "500px", }}>
                        <Row>
                            <Input
                                type="text"
                                name="name"
                                value={nickName}
                                placeholder="이름"
                                onChange={function (e) {
                                    setNickName(e.target.value)
                                }.bind(this)}
                            />
                        </Row>
                        <Row>
                            <p>@{id}</p>
                        </Row>
                        <Row style={{ margin: "0 0 30px 0" }}>
                            <TextArea
                                showCount maxLength={250}
                                rows={5}
                                cols="100"
                                value={content}
                                placeholder="소개문구"
                                onChange={function (e) {
                                    setContent(e.target.value)
                                }.bind(this)}
                            />
                        </Row>
                        <Row>
                            <Col style={{ margin: "0 10px 0 0" }}>
                                <Button type="primary" onClick={changeEditing}>적용</Button>
                            </Col>
                            <Col>
                                <Button type="default" onClick={notChange}>취소</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        );
    }

    return (
        <Container sytle={{ width: "100%" }}>
            <Row justify="center" align="middle">
                <Col style={{ margin: "0 50px" }}>
                    <img
                        src={src}
                        class="Profile"
                    />
                </Col>
                <Col style={{ width: "500px", }}>
                    <Row justify="space-between">
                        <Col>
                            <h2>{nickName}</h2>
                        </Col>
                        <Col>
                            <Button type="primary" onClick={changeEditing}>프로필 수정</Button>
                        </Col>
                    </Row>
                    <Row style={{ padding: "0 0 20px 0" }}>
                        <p>{id}</p>
                    </Row>
                    <Row>
                        <pre style={{ width: "500px", whiteSpace: "pre-wrap" }}>{content}</pre>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;