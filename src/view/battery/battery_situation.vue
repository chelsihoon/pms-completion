<template>
    <section id="battery_situation">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="battery_situation_cnt">
            <cnbSet></cnbSet>
            <section class="battery_situation_cnt_wrap">
                <batteryCntTop></batteryCntTop>
                <div class="cnt_left">
                    <div class="cnt_left_top cnt_wrap">
                        <h4 class="cnt_titl">Battery System Status</h4>
                        <div>
                            <h5>배터리 상태</h5>
                            <p>준비</p>
                        </div>
                        <div>
                            <h5>배터리 전압[V]</h5>
                            <p>540.6</p>
                        </div>
                        <div>
                            <h5>배터리 전류 ((-)방전, (+)충전)</h5>
                            <p>0</p>
                        </div>
                        <div>
                            <h5>SOC(%)</h5>
                            <p>53.3</p>
                        </div>
                        <div>
                            <h5>배터리 CELL MAX[V]</h5>
                            <p>3.766</p>
                        </div>
                        <div>
                            <h5>배터리 CELL MIN[V]</h5>
                            <p>3.734</p>
                        </div>
                        <div>
                            <h5>배터리 모듈 MAX 온도[°C]</h5>
                            <p>25</p>
                        </div>
                        <div>
                            <h5>배터리 모듈 MIN 온도[°C]</h5>
                            <p>25</p>
                        </div>
                    </div>
                    <div class="cnt_left_btm cnt_wrap">
                        <h4 class="cnt_titl">Information</h4>
                        <div class="itm_inner">
                            <ul>
                                <li>
                                    <h5 class="itm_titl">BMS S/W Ver</h5>
                                    <p class="status">32</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">통신 Counter</h5>
                                    <p class="status">44236</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 Pack In 평균 전압[V]
                                    </h5>
                                    <p class="status">540.5</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 셀 합산 평균 전압[V]
                                    </h5>
                                    <p class="status">540.5</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 정격 전압[V]
                                    </h5>
                                    <p class="status">589.5</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 정격 전류[A]
                                    </h5>
                                    <p class="status">355,2</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 최대 전압[V]
                                    </h5>
                                    <p class="status">654.3</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 최소 전압[V]
                                    </h5>
                                    <p class="status">419.4</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 최대 충전 C-Rate
                                    </h5>
                                    <p class="status">0.5</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">
                                        배터리 시스템 최대 방전 C-Rate
                                    </h5>
                                    <p class="status">0.5</p>
                                </li>
                                <li>
                                    <h5 class="itm_titl">평균 SOH(참고용)</h5>
                                    <p class="status">99.9</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="cnt_center cnt_wrap">
                    <div class="itm_titl_wrap">
                        <h4 class="cnt_titl">Battery System Fault Status</h4>
                        <div class="itm_titl_inner">
                            <p>출력상태</p>
                            <img
                                src="../../assets/img/light_green.png"
                                alt=""
                            />
                            <img src="../../assets/img/light_red.png" alt="" />
                        </div>
                    </div>
                    <div class="itm_wrap">
                        <ul>
                            <li>
                                <p class="status">Over Voltage of Cell (OVC)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Voltage of Cell (UVC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Over Temperature of Cell (OTC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Temperature of Cell (UTC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Over Charge Current (OCC)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Over Discharge Current (ODC, UCC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Can Time Out (CTO)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Over Voltage of Pack (OVP)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Voltage of Pack (UVP)
                                </p>
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
                <div class="cnt_right cnt_wrap">
                    <div class="itm_titl_wrap">
                        <h4 class="cnt_titl">Battery System Warning Status</h4>
                        <div class="itm_titl_inner">
                            <p>출력상태</p>
                            <img
                                src="../../assets/img/light_green.png"
                                alt=""
                            />
                            <img src="../../assets/img/light_red.png" alt="" />
                        </div>
                    </div>
                    <div class="itm_wrap">
                        <ul>
                            <li>
                                <p class="status">Over Voltage of Cell (OVC)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Voltage of Cell (UVC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Over Temperature of Cell (OTC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Temperature of Cell (UTC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Over Charge Current (OCC)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Over Discharge Current (ODC, UCC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Can Time Out (CTO)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Over Voltage of Pack (OVP)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Voltage of Pack (UVP)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Under SOC (USOC)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Cell Temperature Charge (UCTC)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Under Cell Temperature Discharge (UCTD)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">
                                    Monitoring IDC Err or (MIE)
                                </p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
                            </li>
                            <li>
                                <p class="status">Over Cell Unbalance (OCU)</p>
                                <div class="light">
                                    <img
                                        src="../../assets/img/light_green.png"
                                        alt=""
                                    />
                                </div>
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
import batteryCntTop from "../../components/battery_contents/battery_cnt_top.vue";

export default {
    name: "batterySituation",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        cnbSet,
        lnbSet,
        batteryCntTop,
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
#battery_situation {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#battery_situation #lnbSet .lnb_wrap .depth_2:nth-child(2) {
    display: flex;
}
/* cnb : lnb title 번호 지정 1 ~ 4 */
#battery_situation #cnbSet .cnb_wrap:nth-child(2) {
    display: flex;
}
/* cnb 번호 지정 */
#battery_situation #cnbSet .cnb_wrap .depth_3_wrap:nth-child(1) {
    display: flex;
}

#battery_situation_cnt .battery_cnt_top_wrap .cnt_top .pcs {
    display: block;
}
#battery_situation_cnt .battery_situation_cnt_wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 24px 32px;
    justify-content: center;
}
#battery_situation_cnt .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    border-radius: 5px;
}
#battery_situation_cnt .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#battery_situation_cnt .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    padding: 20px 24px;
}

#battery_situation_cnt .cnt_left {
    width: 664px;
    margin-right: 32px;
    position: relative;
    margin-bottom: 32px;
}
#battery_situation_cnt .cnt_left .cnt_left_top {
    margin-bottom: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}
#battery_situation_cnt .cnt_left .cnt_left_top .itm_titl {
    width: 100%;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div {
    width: 304px;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    border-radius: 4px;
    margin-bottom: 8px;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div:last-child {
    margin-bottom: 0px;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(2),
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(3) {
    background-color: #519abb;
    border: 1px solid #3189b1;
}

#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(4),
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(5) {
    background-color: #44adc2;
    border: 1px solid #2f95aa;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(6),
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(7) {
    background-color: #bf9961;
    border: 1px solid #a58657;
}

#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(8),
#battery_situation_cnt .cnt_left .cnt_left_top > div:nth-child(9) {
    background-color: #bfb661;
    border: 1px solid #aaa259;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div h5 {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
#battery_situation_cnt .cnt_left .cnt_left_top > div p {
    color: #fff;
    font-weight: 500;
    font-size: 18px;
}
#battery_situation_cnt .cnt_left .cnt_left_btm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
#battery_situation_cnt .itm_titl_wrap {
    position: relative;
    width: 100%;
}

#battery_situation_cnt .itm_titl_wrap .itm_titl_inner {
    position: absolute;
    top: 4px;
    right: 0;
    display: flex;
}
#battery_situation_cnt .itm_titl_wrap p {
    color: #444444;
    font-size: 14px;
    margin-right: 24px;
    font-weight: 700;
}
#battery_situation_cnt .cnt_left .cnt_left_btm li {
    width: 100%;
    height: 48px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
}
#battery_situation_cnt .cnt_left .cnt_left_btm li:last-child {
    margin-bottom: 0px;
}
#battery_situation_cnt .cnt_left .cnt_left_btm li .status {
    width: 292px;
    height: 48px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    font-weight: 400;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 4px;
}
#battery_situation_cnt .cnt_left .cnt_left_btm .itm_titl {
    width: 320px;
    height: 48px;
    background-color: #313748;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 4px;
    margin-right: 4px;
}

#battery_situation_cnt li {
    display: flex;
    align-items: center;
    height: 56px;
    justify-content: space-between;
    margin-bottom: 8px;
}
#battery_situation_cnt li > * {
    height: 100%;
    width: 56px;
    background-color: #f5f5f5;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
}
#battery_situation_cnt li > *:last-child {
    margin-right: 0px;
}
#battery_situation_cnt .cnt_center {
    width: 564px;
    position: relative;
    margin-right: 32px;
    margin-bottom: 32px;
}
#battery_situation_cnt .cnt_center li > *:first-child {
    width: 452px;
    color: #444;
    font-weight: 500;
    font-size: 16px;
    justify-content: flex-start;
    padding: 16px;
}
#battery_situation_cnt .cnt_right {
    width: 564px;
    position: relative;
}
#battery_situation_cnt .cnt_right li > *:first-child {
    width: 388px;
    color: #444;
    font-weight: 500;
    font-size: 16px;
    justify-content: flex-start;
    padding: 16px;
}
</style>
