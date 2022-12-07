import './App.scss';
import mainImg from "../src/assets/logo512.png";
import mapImg from "../src/assets/map-celebnassem.jpg";
import {useCallback, useState} from "react";

const App = () => {
    //눈송이 위치 랜덤 지정
    const randomPosition = useCallback(() => {
        return Math.floor(Math.random() * window.innerWidth);
    }, []);

    //눈송이 만들기
    const createSnow = useCallback(() => {
        const el = document.createElement("div");
        el.classList.add('snow');
        el.style.marginLeft = randomPosition() + 'px';
        document.body.appendChild(el);
    }, []);

    //눈송이 반복하면서 뿌려주기
    const renderSnow = useCallback(() => {
        for (let i = 0; i < 50; i++) {
            createSnow();
        }
    }, []);

    return (
        <div id="main" className="App">
            {renderSnow()}

            {/*슬라이드 사진 영역*/}
            {/*<img src={mainImg} width="70%" height="auto" alt=""/>*/}

            {/*결혼식 시간 영역*/}
            <div className={"neonText"}>
                <div>
                    백도형, 유선희
                </div>
                <div>
                    DOHYUNG AND SUNHEE
                </div>
                <div>
                    2023년 2월 4일 토요일 pm 5:00
                </div>
                <div>
                    겨울 밤, 결혼합니다.
                </div>
            </div>

            {/*문구 영역*/}
            <div>
                저희 두 사람, 뽀얀 눈송이 같은 순수한 사랑 모아 인생의 반려자가 되려 합니다.

                바쁘신 가운데 찾아주시어 새로운 시작을 축복해 주시면 더 없는 기쁨으로 간직하겠습니다.
            </div>

            <div>
                백기운 · 이경미 의 장남 도형
            </div>
            <div>
                유순근 · 강향순 의 장녀 선희
            </div>

            <div>
                오시는 길
            </div>

            <div>
                <img src={mapImg} width="80%" height="auto" alt=""/>
            </div>

            <div>축하 문구</div>
            <div>페이지 게시판</div>
        </div>
    );
}

export default App;
