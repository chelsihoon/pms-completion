<template>
    <section id="pcs_situation">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="pcs_situation_cnt">
            <cnbSet></cnbSet>
            <section class="pcs_situation_cnt_wrap">
                <div class="cnt_left">
                    <div class="cnt_left_top cnt_wrap">
                        <h4 class="cnt_titl">운행상태</h4>
                        <div>
                            <h5>입력전원공급상태</h5>
                            <p>정상</p>
                        </div>
                        <div>
                            <h5>충ㆍ방전 상태</h5>
                            <p>방전</p>
                        </div>
                        <div>
                            <h5>PCS 운전상태</h5>
                            <p>운전</p>
                        </div>
                        <div>
                            <h5>PCS 고장상태</h5>
                            <p>정상</p>
                        </div>
                    </div>
                    <div class="cnt_left_btm cnt_wrap">
                        <div class="itm_titl_wrap">
                            <h4 class="cnt_titl">알람</h4>
                            <div class="itm_titl_inner">
                                <p>출력상태</p>
                                <img
                                    src="../../assets/img/light_green.png"
                                    alt=""
                                />
                                <img
                                    src="../../assets/img/light_red.png"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div class="itm_left">
                            <h5 class="itm_titl">고장번호</h5>
                            <ul>
                                <li>
                                    <p class="status">정상</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">축전지 이상</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_red.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">방열판 과열</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">과부하</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">
                                        충전 혹은 방전시 과전류
                                    </p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">출력 과전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">출력 저전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">IGBT 이상</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">Off-Grid 운전시 과전류</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">비상정지버튼 눌림</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">입력 역상</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">DC 지락</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="itm_right">
                            <h5 class="itm_titl">상태번호</h5>
                            <ul>
                                <li>
                                    <p class="status">입력 주파수 이상</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">입력 과전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_red.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">입력 저전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">축전지 과전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">축전지 저전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">축전지 테스트 고장</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">BPS 주파수 비동기</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">BPS 과전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                                <li>
                                    <p class="status">BPS 저전압</p>
                                    <div class="light">
                                        <img
                                            src="../../assets/img/light_green.png"
                                            alt=""
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cnt_right cnt_wrap">
                    <div class="cnt_right_top">
                        <h4 class="cnt_titl">계측 정보</h4>
                        <div class="itm_wrap_1 itm_wrap">
                            <h5 class="itm_titl">DC 및 Line 전원</h5>
                            <div class="division_inner itm_inner">
                                <p class="division_itm itm">구분</p>
                                <p class="division_itm itm">A-B</p>
                                <p class="division_itm itm">B-C</p>
                                <p class="division_itm itm">C-A</p>
                            </div>
                            <div class="itm_inner_1 itm_inner">
                                <p class="itm itm_subtitl">측전기 DC 전압[V]</p>
                                <p class="itm">370</p>
                            </div>
                            <div class="itm_inner_2 itm_inner">
                                <p class="itm itm_subtitl">측전기 DC 전류[A]</p>
                                <p class="itm">0</p>
                            </div>
                            <div class="itm_inner_3 itm_inner">
                                <p class="itm itm_subtitl">교류선간 전압[V]</p>
                                <p class="itm">400</p>
                                <p class="itm">399</p>
                                <p class="itm">394</p>
                            </div>
                            <div class="itm_inner_4 itm_inner">
                                <p class="itm itm_subtitl">교류선간 전류[A]</p>
                                <p class="itm">1.4</p>
                                <p class="itm">1.4</p>
                                <p class="itm">1.4</p>
                            </div>
                        </div>
                        <div class="itm_wrap_2 itm_wrap">
                            <h5 class="itm_titl">AC 부하</h5>
                            <div class="division_inner itm_inner">
                                <p class="division_itm itm">구분</p>
                                <p class="division_itm itm">A</p>
                                <p class="division_itm itm">B</p>
                                <p class="division_itm itm">C</p>
                            </div>
                            <div class="itm_inner_1 itm_inner">
                                <p class="itm itm_subtitl">전압[V]</p>
                                <p class="itm">231</p>
                                <p class="itm">230</p>
                                <p class="itm">231</p>
                            </div>
                            <div class="itm_inner_2 itm_inner">
                                <p class="itm itm_subtitl">전류[A]</p>
                                <p class="itm">17.2</p>
                                <p class="itm">17.2</p>
                                <p class="itm">18.6</p>
                            </div>
                            <div class="itm_inner_3 itm_inner">
                                <p class="itm itm_subtitl">주파수[Hz]</p>
                                <p class="itm">60</p>
                            </div>
                        </div>
                        <div class="itm_wrap_3 itm_wrap">
                            <h5 class="itm_titl">전력 및 역률</h5>
                            <div class="division_inner itm_inner">
                                <p class="division_itm itm">구분</p>
                                <p class="division_itm itm">A</p>
                                <p class="division_itm itm">B</p>
                                <p class="division_itm itm">C</p>
                            </div>
                            <div class="itm_inner_1 itm_inner">
                                <p class="itm itm_subtitl">피상전력[KVA]</p>
                                <p class="itm">4</p>
                                <p class="itm">4</p>
                                <p class="itm">4.3</p>
                            </div>
                            <div class="itm_inner_2 itm_inner">
                                <p class="itm itm_subtitl">유효전력[KW]</p>
                                <p class="itm">0</p>
                                <p class="itm">0.3</p>
                                <p class="itm">0.6</p>
                            </div>
                            <div class="itm_inner_3 itm_inner">
                                <p class="itm itm_subtitl">역률</p>
                                <p class="itm">0</p>
                                <p class="itm">0.8</p>
                                <p class="itm">1.4</p>
                            </div>
                        </div>
                        <div class="itm_wrap_4 itm_wrap">
                            <div class="itm_wrap_4_top">
                                <h5 class="itm_titl">누적충전량[KWh]</h5>
                                <h5 class="itm_titl">누적방전량[KWh]</h5>
                            </div>
                            <div class="itm_wrap_4_btm">
                                <p class="itm_wrap_4_itm itm">0</p>
                                <p class="itm_wrap_4_itm itm">0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        <mainFooter> </mainFooter>
    </section>
</template>

<script>
import mainHeader from "../../components/common/main_header.vue";
import gnbSet from "../../components/common/gnb.vue";
import mainFooter from "../../components/common/main_footer.vue";
import cnbSet from "../../components/common/cnb.vue";
import lnbSet from "../../components/common/lnb.vue";

export default {
    name: "pcsSituation",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
    },
};
</script>

<style>
/*
    font weight
    Thin 100
    Light 300
    Regular 400
    Medium 500
    Bold 700
    Black 900
  */
/* pcs_situation */
#pcs_situation {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#pcs_situation #lnbSet .lnb_wrap .depth_2:nth-child(1) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#pcs_situation #cnbSet .cnb_wrap:nth-child(1) {
    display: flex;
}
/* cnb 번호 지정 */
#pcs_situation #cnbSet .cnb_wrap .depth_3_wrap:nth-child(1) {
    display: flex;
}
#pcs_situation #pcs_cnt_top_wrap .cnt_wrap .btn {
    display: none;
}

#pcs_cnt_top_wrap .cnt_top .cnt_date {
    display: none;
}
#pcs_situation_cnt .pcs_situation_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
}
#pcs_situation_cnt .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    border-radius: 5px;
}
#pcs_situation_cnt .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#pcs_situation_cnt .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    padding: 20px 24px;
}
#pcs_situation_cnt .cnt_top select {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border-radius: 2px;
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    color: #444;
    font-size: 14px;
}
#pcs_situation_cnt .cnt_top select option {
    font-size: 14px;
}
#pcs_situation_cnt .cnt_left {
    width: 960px;
    margin-right: 32px;
    position: relative;
}
#pcs_situation_cnt .cnt_left .cnt_left_top {
    margin-bottom: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#pcs_situation_cnt .cnt_left .cnt_left_top .itm_titl {
    width: 100%;
}
#pcs_situation_cnt .cnt_left .cnt_left_top > div {
    width: 450px;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 4px;
}
#pcs_situation_cnt .cnt_left .cnt_left_top > div:nth-child(2) {
    background-color: #519abb;
    border: 1px solid #3189b1;
    margin: 0 4px 4px 0;
}

#pcs_situation_cnt .cnt_left .cnt_left_top > div:nth-child(3) {
    background-color: #44adc2;
    border: 1px solid #2f95aa;
    margin: 0 0px 4px 6px;
}
#pcs_situation_cnt .cnt_left .cnt_left_top > div:nth-child(4) {
    background-color: #bf9961;
    border: 1px solid #a58657;
    margin: 4px 4px 0 0;
}

#pcs_situation_cnt .cnt_left .cnt_left_top > div:nth-child(5) {
    background-color: #bfb661;
    border: 1px solid #aaa259;
    margin: 4px 0 0 4px;
}
#pcs_situation_cnt .cnt_left .cnt_left_top > div h5 {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
#pcs_situation_cnt .cnt_left .cnt_left_top > div p {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm .itm_titl_wrap {
    position: relative;
    width: 100%;
}

#pcs_situation_cnt .cnt_left .cnt_left_btm .itm_titl_wrap .itm_titl_inner {
    position: absolute;
    top: 4px;
    right: 0;
    display: flex;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm .itm_titl_wrap p {
    color: #444444;
    font-size: 14px;
    margin-right: 24px;
    font-weight: 700;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm .itm_titl_wrap img:nth-child(2) {
    margin-right: 8px;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) {
    width: 452px;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) li {
    width: 100%;
    height: 56px;
    display: flex;
    margin-bottom: 8px;
}
#pcs_situation_cnt
    .cnt_left
    .cnt_left_btm
    > div:not(:first-child)
    li:last-child {
    margin-bottom: 0px;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) li > * {
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: flex;
    align-items: center;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) li .status {
    width: 388px;
    margin-right: 8px;
    color: #444444;
    font-weight: 500;
    padding: 16px;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) li .light {
    width: 56px;
    justify-content: center;
}
#pcs_situation_cnt .cnt_left .cnt_left_btm > div:not(:first-child) .itm_titl {
    width: 100%;
    background-color: #313748;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 40px;
    font-weight: 500;
    border-radius: 4px;
    font-size: 16px;
    /* margin-right: 4px; */
    margin-bottom: 8px;
}
#pcs_situation_cnt .cnt_right {
    flex: 1;
    position: relative;
}
#pcs_situation_cnt .cnt_right .cnt_right_top p {
    color: #444;
}
#pcs_situation_cnt .cnt_right .itm_wrap {
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
}
#pcs_situation_cnt .cnt_right .itm_wrap:last-child {
    margin-bottom: 0px;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_titl {
    width: 100%;
    height: 56px;
    background-color: #313748;
    margin-bottom: 8px;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_inner {
    margin-bottom: 4px;
    width: 100%;
    display: flex;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_inner:last-child {
    margin-bottom: 0px;
}

#pcs_situation_cnt .cnt_right .itm_wrap .itm {
    margin-right: 4px;
    background-color: #f5f5f5;
    border-radius: 4px;
    height: 56px;
    font-size: 16px;
    flex: 0.25;
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_inner .division_itm {
    background-color: #ddd;
    height: 40px;
    font-weight: 500;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_inner .itm_subtitl {
    background-color: #eee;
    font-weight: 500;
}
#pcs_situation_cnt .cnt_right .itm_wrap .itm_inner .itm:last-child {
    margin-right: 0px;
}
#pcs_situation_cnt .cnt_right .itm_wrap_1 .itm_inner_1 .itm:nth-child(1),
#pcs_situation_cnt .cnt_right .itm_wrap_1 .itm_inner_2 .itm:nth-child(1) {
    flex: 0.249;
}
#pcs_situation_cnt .cnt_right .itm_wrap_2 .itm_inner_3 .itm:nth-child(1) {
    flex: 0.249;
}
#pcs_situation_cnt .cnt_right .itm_wrap_1 .itm_inner_1 .itm:nth-child(2),
#pcs_situation_cnt .cnt_right .itm_wrap_1 .itm_inner_2 .itm:nth-child(2) {
    flex: 0.751;
}
#pcs_situation_cnt .cnt_right .itm_wrap_2 .itm_inner_3 .itm:nth-child(2) {
    flex: 0.751;
}

#pcs_situation_cnt .cnt_right .itm_wrap_4 {
    display: flex;
    flex-direction: column;
}
#pcs_situation_cnt .cnt_right .itm_wrap_4 > div {
    display: flex;
    justify-content: space-between;
}
#pcs_situation_cnt .cnt_right .itm_wrap_4 .itm_titl {
    flex: 1;
    margin-right: 4px;
    margin-bottom: 4px;
}
#pcs_situation_cnt .cnt_right .itm_wrap_4 .itm_titl:last-child {
    margin-right: 0px;
}
#pcs_situation_cnt .cnt_right .itm_wrap_4 .itm_wrap_4_itm {
    flex: 1;
}
#pcs_situation_cnt .cnt_right .itm_wrap_4 .itm_wrap_4_itm:last-child {
    margin-right: 0px;
}
.pcs_situation_cnt_wrap #pcs_cnt_top_wrap .cnt_top input {
    display: none;
}
</style>
