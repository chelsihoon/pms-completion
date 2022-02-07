<template>
    <section id="pcs_setup_cnt_schedule">
        <div class="cnt_center cnt_wrap">
            <div class="cnt_table">
                <ul class="list">
                    <li class="sub_titl"><p>No</p></li>
                    <li class="itm"><p>장비</p></li>
                    <li class="itm"><p>작업</p></li>
                    <li class="itm"><p>태양광연동</p></li>
                    <li class="itm"><p>설정값</p></li>
                    <li class="itm"><p>기간</p></li>
                    <li class="itm"><p>요일</p></li>
                    <li class="itm"><p>시작시각</p></li>
                    <li class="itm"><p>종료시각</p></li>
                    <li class="itm"><p>수정/삭제</p></li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list selected_list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
                <ul class="list">
                    <li class="itm"><p>37526</p></li>
                    <li class="itm"><p>PCS #1</p></li>
                    <li class="itm"><p>충전</p></li>
                    <li class="itm"><p>ON</p></li>
                    <li class="itm"><p>5kW</p></li>
                    <li class="itm"><p>2020-07-01 ~ 2020-12-31</p></li>
                    <li class="itm"><p>일월화수목금토</p></li>
                    <li class="itm"><p>00:00</p></li>
                    <li class="itm"><p>23:59</p></li>
                    <li class="itm">
                        <input
                            type="button"
                            value="수정"
                            @click="handle_toggle"
                        />
                        <input type="button" value="삭제" />
                    </li>
                </ul>
            </div>
            <ul class="page_ctrl">
                <li class="prev_btn">
                    <a href=""></a>
                </li>
                <li>
                    <ul class="page_number">
                        <li class="selected_page">
                            <a href=""><p>1</p></a>
                        </li>
                        <li>
                            <a href=""><p>2</p></a>
                        </li>

                        <li>
                            <a href=""><p>3</p></a>
                        </li>

                        <li>
                            <a href=""><p>4</p></a>
                        </li>

                        <li>
                            <a href=""><p>5</p></a>
                        </li>
                    </ul>
                </li>
                <li class="next_btn">
                    <a href=""></a>
                </li>
            </ul>
        </div>
        <div class="light_box" v-show="modal">
            <ul class="cnt_box_wrap">
                <li><h4 class="cnt_titl">스케줄 설정</h4></li>
                <li class="choose">
                    <h5>PCS명</h5>
                    <select name="" id="">
                        <option>PCS 선택</option>
                        <option>PCS 선택</option>
                        <option>PCS 선택</option>
                    </select>
                </li>
                <li class="mode">
                    <h5>작동 모드</h5>
                    <input
                        type="radio"
                        value="selected"
                        id="charger"
                        name="state"
                        checked
                    />
                    <label for="charger">충전</label>

                    <input type="radio" value="" id="discharger" name="state" />
                    <label for="discharger"> 방전</label>
                </li>
                <li class="dater">
                    <h5>기간</h5>
                    <input
                        type="date"
                        name=""
                        value="2020-08-15"
                        class="start_date"
                    />
                    <div class="wave">~</div>
                    <input
                        type="date"
                        name=""
                        value="2020-08-20"
                        class="end_date"
                    />
                </li>
                <li class="timer">
                    <div class="inner">
                        <h5>시간</h5>
                        <input
                            type="time"
                            name=""
                            value="01:01:01"
                            class="start_time"
                        />
                        <div class="wave">~</div>
                        <input
                            type="time"
                            name=""
                            value="23:59:59"
                            class="end_time"
                        />
                    </div>
                    <label for="all_day" class="inner">
                        <input type="checkbox" id="all_day" />
                        하루종일
                    </label>
                </li>
                <li class="solar">
                    <h5>태양열 연동</h5>
                    <label for="solar_interlock">
                        <input type="checkbox" id="solar_interlock" />
                        태양열 연동
                    </label>
                </li>
                <li class="target">
                    <h5>목표전력량 [kW]</h5>
                    <input type="number" value="0" />
                </li>
                <li class="days">
                    <h5>요일</h5>
                    <div class="inner_wrap">
                        <div class="inner_top">
                            <label for="all">
                                <input type="checkbox" id="all" />
                                전체
                            </label>
                            <label for="sun">
                                <input type="checkbox" id="sun" />
                                일요일
                            </label>
                            <label for="mon">
                                <input type="checkbox" id="mon" />
                                월요일
                            </label>
                            <label for="tue">
                                <input type="checkbox" id="tue" />
                                화요일
                            </label>
                        </div>
                        <div class="inner_btm">
                            <label for="wed">
                                <input type="checkbox" id="wed" />
                                수요일
                            </label>
                            <label for="thu">
                                <input type="checkbox" id="thu" />
                                목요일
                            </label>
                            <label for="fri">
                                <input type="checkbox" id="fri" />
                                금요일
                            </label>
                            <label for="sat">
                                <input type="checkbox" id="sat" />
                                토요일
                            </label>
                        </div>
                    </div>
                </li>
                <li class="toggle">
                    <h5>사용여부</h5>
                    <input type="checkbox" id="toggle_box" />
                    <label for="toggle_box">
                        <span class="toggle_btn"></span>
                    </label>
                </li>
                <li class="set_btn">
                    <input type="button" value="취소" @click="handle_toggle" />
                    <input type="button" value="저장" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "pcssetupCntSchedule",
    components: {},
    data: () => {
        return {
            modal: false,
        };
    },
    methods: {
        handle_toggle: function () {
            this.modal = !this.modal;
        },
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

input[type="time"]::-webkit-clear-button,
input[type="time"]::-webkit-inner-spin-button {
    display: none;
}

input[type="time"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: 2px;
    width: 20px;
    height: 20px;
    z-index: 1;
}

#pcs_setup_cnt_schedule {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
#pcs_setup_cnt_schedule .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    border-radius: 5px;
}
#pcs_setup_cnt_schedule .cnt_center {
    margin-top: 16px;
    flex-direction: column;
    width: 100%;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table {
    width: 100%;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table p {
    color: #444;
    font-size: 14px;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list.selected_list li {
    background-color: #f4f7fc;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list li:nth-child(1) {
    flex: 0.5;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list li:nth-child(6) {
    flex: 1.5;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list:not(:nth-child(1)) li {
    border-right: 1px solid #ddd;
}
#pcs_setup_cnt_schedule
    .cnt_center
    .cnt_table
    .list:not(:nth-child(1))
    li:last-child {
    border-right: none;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list:nth-child(1) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list:nth-child(1) p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list:nth-child(1) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#pcs_setup_cnt_schedule .cnt_center .cnt_table .list li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
}
#pcs_setup_cnt_schedule
    .cnt_center
    .cnt_table
    .list
    li:last-child
    input:first-child {
    width: 80px;
    height: 32px;
    margin-right: 8px;
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
}
#pcs_setup_cnt_schedule
    .cnt_center
    .cnt_table
    .list
    li:last-child
    input:last-child {
    width: 80px;
    height: 32px;
    background-color: #fff;
    border: 1px solid #dddddd;
    border-radius: 4px;
    color: #444;
    cursor: pointer;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl {
    width: 100%;
    margin: 32px 0 16px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl li a {
    width: 100%;
    height: 100%;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl li p {
    color: #444444;
    font-size: 14px;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:not(:nth-child(2)) {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    margin: 0 12px;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:not(:nth-child(2)):hover {
    background-color: #2a58ae;
}
#pcs_setup_cnt_schedule
    .cnt_center
    .page_ctrl
    > li:not(:nth-child(2)):hover
    a::after {
    border-color: #fff;
}

#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:not(:nth-child(2)) a {
    position: relative;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:not(:nth-child(2)) a:after {
    content: "";
    width: 8px;
    height: 8px;
    border-top: 2px solid #1a1818;
    border-right: 2px solid #1a1818;
    display: inline-block;
    transform: rotate(135deg);
    position: absolute;
    border-radius: 2px;
    top: 50%;
    left: 50%;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:nth-child(1) a:after {
    transform: translate(-30%, -50%) rotate(225deg);
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl > li:nth-child(3) a:after {
    transform: translate(-80%, -50%) rotate(45deg);
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number {
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number li {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 0 4px;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number li a {
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number li:hover a {
    background-color: #2a58ae;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number li:hover a p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
}
#pcs_setup_cnt_schedule .cnt_center .page_ctrl .page_number li.selected_page a,
#pcs_setup_cnt_schedule
    .cnt_center
    .page_ctrl
    .page_number
    li.selected_page
    a
    p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
    background-color: #2a58ae;
}
#pcs_setup_cnt_schedule .light_box {
    z-index: 999;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    /* display: none; */
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap {
    position: absolute;
    min-width: 712px;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    padding: 24px 32px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .cnt_titl {
    color: #313748;
    font-weight: 400;
    font-size: 28px;
    height: 58px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap label {
    color: #777;
    display: flex;
    align-items: center;
    cursor: pointer;
}

#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li {
    display: flex;
    align-items: center;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li .wave {
    color: #777777;
    margin: 0 7px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li input[type="date"],
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li input[type="time"],
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li select {
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border: 1px solid #dddddd;
    border-radius: 2px;
    color: #444444;
    font-size: 14px;
    position: relative;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .choose select {
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    cursor: pointer;
}

#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li input:focus,
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li select:focus {
    outline: 2px solid #2a58ae;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li option {
    color: #444444;
    font-size: 14px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap li h5 {
    min-width: 144px;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    color: #222;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .choose {
    margin-bottom: 28px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .mode {
    margin-bottom: 28px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .mode label {
    color: #777777;
    margin-left: 8px;
    margin-right: 32px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .mode input:checked + label {
    color: #2a58ae;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .dater {
    color: #2a58ae;
    margin-bottom: 16px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .dater input[type="date"],
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .timer input[type="time"] {
    padding-left: 40px;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .dater
    input[type="date"]::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_calendar.png) no-repeat;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .timer {
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 28px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .timer .inner {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .timer .inner:last-child {
    width: calc(100% - 144px);
    margin-bottom: 0px;
    margin-left: auto;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap label input {
    margin-right: 8px;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .timer
    input[type="time"]::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_clock.png) no-repeat;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .solar {
    flex-wrap: wrap;
    display: flex;
    margin-bottom: 32px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .target {
    margin-bottom: 32px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .target input {
    width: 280px;
    height: 40px;
    padding: 10px 16px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    color: #444444;
    font-size: 14px;
    position: relative;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .days {
    margin-bottom: 28px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .days .inner_wrap {
    display: flex;
    flex-direction: column;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .days .inner_wrap > div {
    display: flex;
    justify-content: space-between;
    width: 460px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .days .inner_wrap > div label {
    width: 67px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .toggle {
    margin-bottom: 52px;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"] {
    display: none;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .toggle .toggle_btn {
    display: block;
    position: relative;
    width: 48px;
    height: 24px;
    border-radius: 50px;
    background: #2a58ae;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .toggle .toggle_btn:before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 26px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 100%;
    transition: left 0.3s;
    color: #444444;
    cursor: pointer;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]
    + label {
    position: relative;
    cursor: pointer;
    margin-left: 60px;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]
    + label:after {
    content: "사용함";
    display: block;
    position: absolute;
    color: #2a58ae;
    font-weight: 500;
    right: -48px;
    top: 0;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]
    + label
    .toggle_btn:after {
    content: "사용안함";
    display: block;
    position: absolute;
    color: #444444;
    left: -64px;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 400;
}

#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]:checked
    + label
    .toggle_btn:before {
    left: 2px;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]:checked
    + label
    .toggle_btn {
    background-color: #becce7;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]:checked
    + label
    .toggle_btn:after {
    color: #2a58ae;
    font-weight: 500;
}
#pcs_setup_cnt_schedule
    .light_box
    .cnt_box_wrap
    .toggle
    input[type="checkbox"]:checked
    + label:after {
    color: #444;
    font-weight: 400;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .set_btn {
    justify-content: center;
    margin-bottom: 8px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .set_btn input {
    width: 136px;
    height: 48px;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .set_btn input:first-child {
    background-color: #313748;
    border: 1px solid #171a24;
    margin-right: 8px;
}
#pcs_setup_cnt_schedule .light_box .cnt_box_wrap .set_btn input:last-child {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
}
</style>
