<template>
    <section id="dash_board">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <section id="dash_board_cnt">
            <div class="cnt_left">
                <div class="cnt_1 cnt">
                    <div class="bg_img">
                        <h3>그리드</h3>
                    </div>
                    <div class="itm_wrap">
                        <div class="itm_top itm_list">
                            <div class="itm_1 itm">
                                <div class="itm_inner">
                                    <div class="icn_box">
                                        <div class="icn_img">
                                            <img
                                                src="../assets/img/ico-태양광.png"
                                                alt="태양광 아이콘"
                                            />
                                        </div>
                                        <h4 class="icn_text">태양광</h4>
                                    </div>
                                    <div class="itm_value">
                                        <p><span>9.3</span>kW</p>
                                    </div>
                                </div>
                            </div>
                            <div class="itm_2 itm">
                                <div class="itm_inner">
                                    <div class="icn_box">
                                        <div class="icn_img">
                                            <img
                                                src="../assets/img/ico-전력변환장치.png"
                                                alt="전력변환장치 아이콘"
                                            />
                                        </div>
                                        <h4 class="icn_text">전력변환장치</h4>
                                    </div>
                                    <div class="itm_value">
                                        <p><span>7</span>kW</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line">
                            <div class="center_line"></div>
                            <div class="column_line_1"></div>
                            <div class="column_line_2"></div>
                            <img
                                src="../assets/img/ico-arr.png"
                                alt=""
                                class="arr_line"
                            />
                        </div>
                        <div class="itm_btm itm_list">
                            <div class="itm_1 itm">
                                <div class="itm_inner">
                                    <div class="icn_box">
                                        <div class="icn_img">
                                            <img
                                                src="../assets/img/ico-전기차충전기.png"
                                                alt="전기차충전기 아이콘"
                                            />
                                        </div>
                                        <h4 class="icn_text">전기차충전기</h4>
                                    </div>
                                    <div class="itm_value">
                                        <p><span>0.0</span>kW</p>
                                    </div>
                                </div>
                            </div>
                            <div class="itm_2 itm">
                                <div class="itm_inner">
                                    <div class="icn_box">
                                        <div class="icn_img">
                                            <img
                                                src="../assets/img/ico-전력저장장치.png"
                                                alt="전력저장장치 아이콘"
                                            />
                                        </div>
                                        <h4 class="icn_text">전력저장장치</h4>
                                    </div>
                                    <div class="itm_value">
                                        <p><span>41.6</span>%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cnt_2 cnt">
                    <h3 class="cnt_titl">실시간 소비전력</h3>
                    <div class="graph_wrap">
                        <!-- <ul class="y_axis">
                            <li class="y_itm">
                                <p>10</p>
                                <p class="y_bar"></p>
                            </li>
                            <li class="y_itm">
                                <p>7.5</p>
                                <p class="y_bar"></p>
                            </li>
                            <li class="y_itm">
                                <p>5</p>
                                <p class="y_bar"></p>
                            </li>
                            <li class="y_itm">
                                <p>2.5</p>
                                <p class="y_bar"></p>
                            </li>
                            <li class="y_itm">
                                <p>0</p>
                                <p class="y_bar"></p>
                            </li>
                        </ul>
                        <ul class="x_axis">
                            <li>
                                <p>00시</p>
                            </li>
                            <li>
                                <p>01시</p>
                            </li>
                            <li>
                                <p>02시</p>
                            </li>
                            <li>
                                <p>03시</p>
                            </li>
                            <li>
                                <p>04시</p>
                            </li>
                            <li>
                                <p>05시</p>
                            </li>
                            <li>
                                <p>06시</p>
                            </li>
                            <li>
                                <p>07시</p>
                            </li>
                            <li>
                                <p>08시</p>
                            </li>
                            <li>
                                <p>09시</p>
                            </li>
                            <li>
                                <p>10시</p>
                            </li>
                            <li>
                                <p>11시</p>
                            </li>
                            <li>
                                <p>12시</p>
                            </li>
                            <li>
                                <div class="graph_bar_wrap">
                                    <div class="graph_bar discharger"></div>
                                    <div class="graph_bar charger"></div>
                                </div>
                                <p>13시</p>
                            </li>
                            <li>
                                <div class="graph_bar_wrap">
                                    <div class="graph_bar discharger"></div>
                                    <div class="graph_bar charger"></div>
                                </div>
                                <p>14시</p>
                            </li>
                            <li>
                                <p>15시</p>
                            </li>
                            <li>
                                <p>16시</p>
                            </li>
                            <li>
                                <p>17시</p>
                            </li>
                            <li>
                                <p>18시</p>
                            </li>
                            <li>
                                <p>19시</p>
                            </li>
                            <li>
                                <p>20시</p>
                            </li>
                            <li>
                                <p>21시</p>
                            </li>
                            <li>
                                <p>22시</p>
                            </li>
                            <li>
                                <p>23시</p>
                            </li>
                        </ul>
                        <div class="legend">
                            <div class="charger_amount">
                                <div class="bar"></div>
                                <p>충전량</p>
                            </div>
                            <div class="discharger_amount">
                                <div class="bar"></div>
                                <p>방전량</p>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="cnt_3 cnt cnt_right">
                <div class="cnt_top">
                    <h3 class="cnt_titl">안전 장비 정보</h3>
                    <ul class="itm_list">
                        <li class="itm">
                            <h4 class="itm_titl">화재감시</h4>
                            <p>정상</p>
                        </li>
                        <li class="itm">
                            <h4 class="itm_titl">PCS실 환풍기</h4>
                            <p>ON</p>
                        </li>
                        <li class="itm">
                            <h4 class="itm_titl">PCS실 온·습도</h4>
                            <div class="itm_value">
                                <p class="degree">온도 : ℃</p>
                                <p class="degree">습도 : %</p>
                            </div>
                        </li>
                        <li class="itm">
                            <h4 class="itm_titl">BAT실 냉난방기 #1<br />ON</h4>
                            <div class="itm_value">
                                <p>설정 온도 : 23.0℃</p>
                                <p>운전 온도 : 23.0℃</p>
                            </div>
                        </li>
                        <li class="itm">
                            <h4 class="itm_titl">BAT실 냉난방기 #2<br />ON</h4>
                            <div class="itm_value">
                                <p>설정 온도 : 23.0℃</p>
                                <p>운전 온도 : 23.0℃</p>
                            </div>
                        </li>
                        <li class="itm">
                            <h4 class="itm_titl">BAT실 온·습도</h4>
                            <div class="itm_value">
                                <p>온도 : 23.5℃</p>
                                <p>습도 : 33.2%</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="cont_btm">
                    <h3 class="cnt_titl">현황판</h3>
                    <ul class="itm_list">
                        <li class="itm">
                            <p></p>
                            <p>금월</p>
                            <p>금일</p>
                        </li>
                        <li class="itm">
                            <h4>태양광 발전량</h4>
                            <p><span>- </span>kWh</p>
                            <p><span>- </span>kWh</p>
                        </li>
                        <li class="itm">
                            <h4>ESS 충전량</h4>
                            <p><span>134.6 </span>kWh</p>
                            <p><span>1.2 </span>kWh</p>
                        </li>
                        <li class="itm">
                            <h4>ESS 방전량</h4>
                            <p><span>134.1 </span>kWh</p>
                            <p><span>134.1 </span>kWh</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <mainFooter></mainFooter>
    </section>
</template>

<script>
import mainHeader from "../components/common/main_header.vue";
import gnbSet from "../components/common/gnb.vue";
import mainFooter from "../components/common/main_footer.vue";
export default {
    name: "dashBoard",
    components: { mainHeader, gnbSet, mainFooter },
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

#dash_board {
    background-color: #f4f7fc;
    display: block;
}
#dash_board * {
    color: #fff;
}
#dash_board_cnt {
    display: flex;
    margin: 32px;
    justify-content: space-between;
}
#dash_board_cnt .cnt_left {
    display: flex;
    flex-direction: column;
}
#dash_board_cnt .cnt {
    display: flex;
    background-color: #fff;
    border: 1px solid #dddddd;
    padding: 24px;
    border-radius: 5px;
}

#dash_board_cnt .cnt_left .cnt_1 .bg_img {
    margin-right: 48px;
    width: 360px;
    height: 476px;
    border-radius: 5px;
    background: url(../assets/img/gird_img.png) no-repeat center/101% 101%;
    position: relative;
}
#dash_board_cnt .cnt_left .cnt_1 .bg_img h3 {
    position: absolute;
    left: 32px;
    top: 24px;
    font-weight: 500;
    font-size: 20px;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap {
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    position: relative;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list {
    display: flex;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_1 {
    display: flex;
    background-color: #5172b0;
    border: 1px solid #3f609e;
    border-radius: 5px;
    width: 428px;
    height: 174px;
    padding: 24px;
    margin-right: 48px;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_2 {
    display: flex;
    background-color: #394e75;
    border: 1px solid #273c63;
    border-radius: 5px;
    width: 428px;
    height: 174px;
    padding: 24px;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_inner {
    display: flex;
    align-items: center;
    justify-content: center;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_inner .icn_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 24px;
}
#dash_board_cnt
    .cnt_left
    .cnt
    .itm_wrap
    .itm_list
    .itm_inner
    .icn_box
    .icn_img {
    width: 90px;
    height: 90px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
#dash_board_cnt
    .cnt_left
    .cnt
    .itm_wrap
    .itm_list
    .itm_inner
    .icn_box
    .icn_text {
    font-weight: 500;
    margin-top: 12px;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_inner .itm_value {
    background: rgba(255, 255, 255, 0.1);
    width: 266px;
    height: 126px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .itm_list .itm_inner .itm_value span {
    font-size: 32px;
    color: #ffbc3a;
    font-weight: 500;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .line {
    height: 80px;
    position: relative;
    width: 738px;
    left: -48px;
    border-right: 2px solid #394e75;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .line .center_line {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 738px;
    height: 2px;
    background-color: #394e75;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .line .column_line_1 {
    position: absolute;
    top: 0;
    left: 127px;
    width: 2px;
    height: 40px;
    background-color: #394e75;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .line .column_line_2 {
    position: absolute;
    bottom: 0;
    left: 235px;
    width: 2px;
    height: 40px;
    background-color: #394e75;
}
#dash_board_cnt .cnt_left .cnt .itm_wrap .line .arr_line {
    position: absolute;
    left: 137px;
    top: 5px;
}
#dash_board_cnt .cnt_left .cnt_2 {
    height: 460px;
    width: 1360px;
    margin-top: 32px;
    flex-direction: column;
}
#dash_board_cnt .cnt_left .cnt_2 .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    min-height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap {
    padding: 32px 21.5px 0;
    height: 460px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap p {
    color: #777777;
    font-size: 14px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .y_axis {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .y_axis .y_itm {
    display: flex;
    align-items: center;
    margin-bottom: 37px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .y_axis .y_itm p {
    text-align: right;
    min-width: 19px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .y_axis .y_itm:last-child {
    margin-bottom: 0px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .y_axis .y_itm .y_bar {
    width: 100%;
    height: 1px;
    background-color: #dddddd;
    margin-left: 24px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis {
    display: flex;
    position: relative;
    width: calc(100% - 19px);
    /* align-items: center; */
    justify-content: flex-end;
    margin-left: auto;
    top: -10px;
    /* transform: translateY(-50%); */
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li {
    width: 51px;
    text-align: center;
    position: relative;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li p {
    margin-top: 6.5px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li:last-child::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li .graph_bar_wrap {
    position: absolute;
    bottom: 27px;
    display: flex;
    align-items: flex-end;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li .graph_bar_wrap > div {
    margin: 0 2px 0 4px;
    width: 19px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li:nth-child(14) .charger {
    height: 115px;
    background-color: #ffbc3a;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis li:nth-child(15) .charger {
    height: 72px;
    background-color: #ffbc3a;
}
#dash_board_cnt
    .cnt_left
    .cnt_2
    .graph_wrap
    .x_axis
    li:nth-child(15)
    .discharger {
    height: 28px;
    background-color: #32a1ff;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .legend {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 24px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .legend > div {
    width: 128px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .legend .charger_amount .bar {
    width: 24px;
    height: 4px;
    background-color: #32a1ff;
    border-radius: 50px;
    margin-right: 16px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .legend .discharger_amount .bar {
    width: 24px;
    height: 4px;
    background-color: #ffbc3a;
    border-radius: 50px;
    margin-right: 16px;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .legend > div:last-child {
    margin-right: 0;
}
#dash_board_cnt .cnt_left .cnt_2 .graph_wrap .x_axis p {
    width: 100%;
}
#dash_board_cnt .cnt_right {
    height: 1016px;
    width: 464px;
    margin-left: 32px;
    flex-direction: column;
}
#dash_board_cnt .cnt_right .cnt_top {
    margin-bottom: 32px;
}
#dash_board_cnt .cnt_right .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#dash_board_cnt .cnt_right .cnt_top .itm_list {
    position: relative;
    margin-top: 16px;
}
#dash_board_cnt .cnt_right .cnt_top .itm_list .itm {
    position: relative;
    display: flex;
    margin-bottom: 4px;
}
#dash_board_cnt .cnt_right .cnt_top .itm_list .itm_titl {
    width: 180px;
    height: 48px;
    background-color: #313748;
    border-radius: 5px;
    text-align: center;
    margin-right: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#dash_board_cnt
    .cnt_right
    .cnt_top
    .itm_list
    .itm:nth-child(n + 3):nth-child(-n + 6)
    .itm_titl {
    width: 180px;
    height: 100px;
}
#dash_board_cnt .cnt_right .cnt_top .itm_list .itm p {
    background-color: #f5f5f5;
    width: 232px;
    height: 48px;
    color: #444444;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}
#dash_board_cnt .cnt_right .cnt_top .itm_list .itm .degree {
    color: #ff7d3a;
}
#dash_board_cnt
    .cnt_right
    .cnt_top
    .itm_list
    .itm:nth-child(n + 3):nth-child(-n + 6)
    p:first-child {
    margin-bottom: 4px;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list {
    position: relative;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm {
    position: relative;
    display: flex;
    margin: 8px 0;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    align-items: center;
    text-align: center;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm > * {
    flex: 1;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:first-child {
    width: 416px;
    height: 36px;
    background-color: #f5f5f5;
    border: 1px solid #e9e9e9;
    padding: 8px;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm h4 {
    font-weight: 500;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:first-child p {
    color: #444444;
    font-size: 14px;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:not(:first-child) {
    width: 416px;
    height: 88px;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:not(:first-child) p {
    font-size: 14px;
    position: relative;
}
#dash_board_cnt
    .cnt_right
    .cont_btm
    .itm_list
    .itm:not(:first-child)
    p:nth-child(2):after {
    content: "";
    position: absolute;
    right: 0;
    width: 1px;
    height: 18px;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.5);
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm span {
    font-size: 24px;
    font-weight: 500;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:nth-child(2) {
    background-color: #519abb;
    border: 1px solid #3189b1;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:nth-child(3) {
    background-color: #44adc2;
    border: 1px solid #2f95aa;
}
#dash_board_cnt .cnt_right .cont_btm .itm_list .itm:nth-child(4) {
    background-color: #bfb661;
    border: 1px solid #aaa259;
    margin-bottom: 0px;
}
</style>
