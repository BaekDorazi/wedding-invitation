import './App.css';
import mainImg from "../src/assets/logo512.png";
import mapImg from "../src/assets/map-celebnassem.jpg";
import {useCallback} from "react";

function App() {
    const randomPosition = useCallback(() => {
        return Math.floor(Math.random() * window.innerWidth);
    }, []);

    const createSnow = useCallback(() => {
        const el = document.createElement("div");
        el.classList.add('snow');
        el.style.marginLeft = randomPosition() + 'px';
        document.body.appendChild(el);
    }, []);

    const renderSnow = useCallback(() => {
        for (let i = 0; i < 100; i++) {
            createSnow();
        }
    }, []);

    return (
        <div id="main" className="App">
            {renderSnow()}

            <div>
                2023년 2월 4일 오후 5시
            </div>
            <div>
                백도형 ♥ 유선희
            </div>

            <img src={mainImg} width="70%" height="auto" alt=""/>

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
