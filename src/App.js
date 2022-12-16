import {useCallback, useEffect, useState} from "react";
import Calendar from "react-calendar";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap';
import mainImg from "./assets/img/logo512.png";
import mapImg from "./assets/img/map-celebnassem.jpg";
import phoneIcon from "./assets/svg/phone.svg";

import './App.scss';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    //웨딩 날짜
    const [weddingDay] = useState(new Date(2023, 1, 4));

    //남은 일수
    const [remainingDays, setRemainingDays] = useState();

    const [open, setOpen] = useState('0');

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

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

    const getDateGapContent = useCallback(() => {
        if (remainingDays > 0) {
            return <>결혼식이 <span style={{color: "#4374D9"}}> {remainingDays}</span>일 남았습니다.</>;
        } else if (remainingDays === 0) {
            return <>결혼을 축복해 주세요.</>;
        } else {
            return <>축하해 주셔서 감사합니다.</>;
        }
    }, [remainingDays]);

    useEffect(() => {
            if (remainingDays === undefined) {
                const dateGap = Math.ceil((weddingDay.getTime() - new Date().getTime()) / (1000 * 3600 * 24));

                setRemainingDays(dateGap);
            }
        }
        , []);

    return (
        <div id="main" className="App">
            <div className="front-area">
                {renderSnow()}

                {/*슬라이드 사진 영역*/}
                <img src={mainImg} width="70%" height="auto" alt=""/>

                {/*결혼식 시간 영역*/}
                <div className={"neonText"}>
                    <div style={{marginTop: "10px", fontSize: "2rem"}}>
                        백 도 형 , 유 선 희
                    </div>

                    <div style={{marginTop: "20px", fontSize: "1.2rem"}}>
                        DOHYUNG AND SUNHEE
                    </div>

                    <div style={{marginTop: "20px", fontSize: "1.5rem"}}>
                        2023년 2월 4일 토요일 pm 5:00
                    </div>

                    <div style={{paddingTop: "20px", paddingBottom: "100px", fontSize: "1.7rem"}}>
                        겨울 밤, 결혼합니다.
                    </div>
                </div>
            </div>

            {/*문구 영역*/}
            <div style={{padding: "15px 30px", fontSize: "1.1rem", marginTop: "70px"}}>
                <div style={{marginTop: "15px", color: "#4374D9", fontSize: "1.9rem", alignContent: "left"}}>
                    ❅
                </div>

                <div style={{marginTop: "70px", fontSize: "1.3rem"}}>
                    저희 두 사람, 뽀얀 눈송이 같은 순수한 사랑 모아 인생의 반려자가 되려 합니다.
                </div>

                <div style={{marginTop: "30px", fontSize: "1.3rem"}}>
                    바쁘신 가운데 찾아주시어 새로운 시작을 축복해 주시면 더 없는 기쁨으로 간직하겠습니다.
                </div>
            </div>

            <div style={{marginTop: "50px"}}>
                <span style={{fontSize: "1.3rem", fontWeight: "700"}}>백기운 · 이경미</span>
                <span style={{fontSize: "1rem"}}> 의 장남</span>
                <span style={{fontSize: "1.3rem", color: "#4374D9", fontWeight: "700", marginLeft: "5px"}}>도형</span>
                <span style={{fontSize: "1.3rem", fontWeight: "700", marginLeft: "20px"}}>
                    <a href="tel:010-7237-1525">
                        <img src={phoneIcon} width={"2%"} height={"2%"}/>
                    </a>
                </span>
            </div>

            <div>
                <span style={{fontSize: "1.3rem", fontWeight: "700"}}>유순근 · 강향순</span>
                <span style={{fontSize: "1rem"}}> 의 장녀</span>
                <span style={{fontSize: "1.3rem", color: "#4374D9", fontWeight: "700", marginLeft: "5px"}}>선희</span>
                <span style={{fontSize: "1.3rem", fontWeight: "700", marginLeft: "20px"}}>
                    <a href="tel:010-6354-8110">
                        <img src={phoneIcon} width={"2%"} height={"2%"}/>
                    </a>
                </span>
            </div>

            <div style={{marginTop: "15px", padding: "0 30px"}}>
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1">신랑측 계좌번호</AccordionHeader>
                        <AccordionBody accordionId="1">
                            <div>국민 502901-01-159031 <button>복사</button></div>
                            <div>백도형</div>
                        </AccordionBody>
                        <AccordionBody accordionId="1">
                            <div>국민 502901-01-159031 <button>복사</button></div>
                            <div>백기운</div>
                        </AccordionBody>
                        <AccordionBody accordionId="1">
                            <div>국민 502901-01-159031 <button>복사</button></div>
                            <div>이경미</div>
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="2">신부측 계좌번호</AccordionHeader>
                        <AccordionBody accordionId="2">
                            <div>국민 502901-01-159031 <button>복사</button></div>
                            <div>유선희</div>
                        </AccordionBody>
                        <AccordionBody accordionId="2">
                            <div>국민 502901-01-159031 <button>복사</button></div>
                            <div>강향순</div>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </div>

            {/*달력*/}
            <div>
                <div style={{margin: "70px 0 15px 0", color: "#4374D9", fontSize: "1.9rem"}}>
                    2월 4일
                </div>

                <div style={{textAlign: "-webkit-center"}}>
                    <Calendar
                        value={weddingDay}
                        calendarType={"US"}
                        formatDay={(locale, date) =>
                            date.toLocaleString('en', {day: 'numeric'})
                        }
                        showNeighboringMonth={false}
                        prev2Label={null}
                        prevLabel={null}
                        nextLabel={null}
                        next2Label={null}/>
                </div>

                <div style={{marginTop: "20px"}}>{getDateGapContent()}</div>
            </div>

            {/*오시는길*/}
            <div style={{margin: "70px 0 15px 0", color: "#4374D9", fontSize: "1.9rem"}}>
                오시는 길
            </div>

            <div>
                <img src={mapImg} width="90%" height="auto" alt=""/>
            </div>

            <div style={{margin: "70px 0 15px 0", color: "#4374D9", fontSize: "1.9rem"}}>
                방명록
            </div>
            <div>페이지 게시판</div>
        </div>
    );
}

export default App;
