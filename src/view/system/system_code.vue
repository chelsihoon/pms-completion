<template>
    <section id="system_code">
        <mainHeader></mainHeader>
        <gnbSet></gnbSet>
        <lnbSet></lnbSet>
        <section id="system_code_cnt">
            <div class="cnb_wrap wrap list_system">
                <div class="depth_3_wrap">
                    <h3 class="depth_2_titl">코드 관리</h3>
                    <input
                        type="button"
                        name=""
                        id=""
                        value="코드 등록"
                        @click="handle_toggle_1"
                    />
                </div>
            </div>
            <section class="system_code_cnt_wrap">
                <div class="cnt_top cnt_wrap">
                    <button class="btn" @click="handle_toggle_3">
                        코드 카테고리 등록
                    </button>
                    <button class="btn" @click="handle_toggle_4">
                        코드 카테고리 수정
                    </button>
                </div>
                <div class="cnt_table cnt_wrap">
                    <ul class="itm_titl_list list">
                        <li class="itm_titl">기기 종류</li>
                        <li class="itm_titl">기기명</li>
                        <li class="itm_titl">설치 위치</li>
                        <li class="itm_titl">채널</li>
                        <li class="itm_titl">수동 제어</li>
                        <li class="itm_titl">수정/삭제</li>
                    </ul>
                    <ul class="list">
                        <li class="itm">기타 기기 종류</li>
                        <li class="itm">AIR_CON 1</li>
                        <li class="itm">냉난방기</li>
                        <li class="itm">1</li>
                        <li class="itm">사용 중</li>
                        <li class="itm">
                            <input
                                type="button"
                                value="수정"
                                @click="handle_toggle_2"
                            />
                            <input type="button" value="삭제" />
                        </li>
                    </ul>
                    <ul class="list selected_list">
                        <li class="itm">기타 기기 종류</li>
                        <li class="itm">FIRE_ALARM</li>
                        <li class="itm">화재경보기</li>
                        <li class="itm">2</li>
                        <li class="itm">사용 중</li>
                        <li class="itm">
                            <input
                                type="button"
                                value="수정"
                                @click="handle_toggle_2"
                            />
                            <input type="button" value="삭제" />
                        </li>
                    </ul>
                    <ul class="page_ctrl">
                        <li class="prev_btn">
                            <a href=""></a>
                        </li>
                        <li>
                            <ul class="page_number">
                                <li class="selected_page">
                                    <a href=""><p>1</p></a>
                                </li>
                            </ul>
                        </li>
                        <li class="next_btn">
                            <a href=""></a>
                        </li>
                    </ul>
                </div>
            </section>
            <div class="light_box" v-show="modal_1">
                <div class="inner_box light_box_1">
                    <h4 class="cnt_titl">코드 등록</h4>
                    <ul class="list">
                        <li class="itm">
                            <h5>코드 카테고리</h5>
                            <select name="" id="" class="rack_select">
                                <option value="">코드 카테고리 선택</option>
                                <option value="">냉방기</option>
                                <option value="">Rack</option>
                            </select>
                        </li>
                        <li class="itm">
                            <h5>코드</h5>
                            <input type="text" value="" />
                        </li>
                        <li class="itm">
                            <h5>코드명</h5>
                            <input type="text" value="" />
                        </li>
                        <li class="itm toggle_box">
                            <h5>사용 여부</h5>
                            <div>
                                <input type="checkbox" id="toggle_box_1" />
                                <label for="toggle_box_1">
                                    <span class="toggle_btn"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_1"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
            <div class="light_box" v-show="modal_2">
                <div class="inner_box light_box_2">
                    <h4 class="cnt_titl">코드 수정</h4>
                    <ul class="list">
                        <li class="itm">
                            <h5>코드 카테고리</h5>
                            <select name="" id="" class="rack_select">
                                <option value="">기타 기기 종류</option>
                                <option value="">냉방기</option>
                                <option value="">화재경보기</option>
                            </select>
                        </li>
                        <li class="itm">
                            <h5>코드</h5>
                            <input type="text" value="FIRE_ALARM" />
                        </li>
                        <li class="itm">
                            <h5>코드명</h5>
                            <input type="text" value="화재경보기" />
                        </li>
                        <li class="itm toggle_box">
                            <h5>사용 여부</h5>
                            <div>
                                <input type="checkbox" id="toggle_box_2" />
                                <label for="toggle_box_2">
                                    <span class="toggle_btn"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_2"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
            <div class="light_box" v-show="modal_3">
                <div class="inner_box light_box_3">
                    <h4 class="cnt_titl">코드 카테고리 등록</h4>
                    <ul class="list">
                        <li class="itm">
                            <h5>코드 카테고리</h5>
                            <input type="text" value="" />
                        </li>
                        <li class="itm">
                            <h5>코드 카테고리명</h5>
                            <input type="text" value="" />
                        </li>
                        <li class="itm toggle_box">
                            <h5>사용 여부</h5>
                            <div>
                                <input type="checkbox" id="toggle_box_3" />
                                <label for="toggle_box_3">
                                    <span class="toggle_btn"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_3"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
            <div class="light_box" v-show="modal_4">
                <div class="inner_box light_box_4">
                    <h4 class="cnt_titl">코드 카테고리 수정</h4>
                    <ul class="list">
                        <li class="itm">
                            <h5>코드 카테고리</h5>
                            <input type="text" value="ETC_DEVICE_TYPE" />
                        </li>
                        <li class="itm">
                            <h5>코드 카테고리명</h5>
                            <input type="text" value="기타 기기 종류" />
                        </li>
                        <li class="itm toggle_box">
                            <h5>사용 여부</h5>
                            <div>
                                <input type="checkbox" id="toggle_box_4" />
                                <label for="toggle_box_4">
                                    <span class="toggle_btn"></span>
                                </label>
                            </div>
                        </li>
                    </ul>
                    <div class="btn">
                        <input
                            type="button"
                            value="취소"
                            @click="handle_toggle_4"
                        />
                        <input type="button" value="저장" />
                    </div>
                </div>
            </div>
        </section>
        <mainFooter></mainFooter>
    </section>
</template>

<script>
import mainHeader from "../../components/common/main_header.vue";
import gnbSet from "../../components/common/gnb.vue";
import mainFooter from "../../components/common/main_footer.vue";
import lnbSet from "../../components/common/lnb.vue";
export default {
    name: "systemCode",
    components: {
        mainHeader,
        gnbSet,
        mainFooter,
        lnbSet,
    },
    data() {
        return {
            modal_1: false,
            modal_2: false,
            modal_3: false,
            modal_4: false,
        };
    },
    methods: {
        handle_toggle_1: function () {
            this.modal_1 = !this.modal_1;
        },
        handle_toggle_2: function () {
            this.modal_2 = !this.modal_2;
        },
        handle_toggle_3: function () {
            this.modal_3 = !this.modal_3;
        },
        handle_toggle_4: function () {
            this.modal_4 = !this.modal_4;
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
/* #system_code */
input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}

#system_code {
    background-color: #f4f7fc;
}
/* lnb 번호 지정 1 ~ 4 */
#system_code #lnbSet .lnb_wrap .depth_2:nth-child(4) {
    display: flex;
}

#system_code #system_cnt_top_wrap .cnt_top .month_wrap {
    display: none;
}
#system_code .system_code_cnt_wrap {
    display: flex;
    padding: 24px 32px;
    flex-direction: column;
}
#system_code .list_system .depth_3_wrap .depth_2_titl::before {
    content: "";
    background: url(../../assets/img/icon_setup.png) no-repeat center;
    width: 40px;
    height: 40px;
    position: relative;
    top: 0%;
    left: 0%;
    margin-right: 15px;
    display: block;
}
#system_code .list_system > div:last-child {
    justify-content: space-between;
    width: 100%;
}
#system_code .list_system > div:last-child input {
    width: 136px;
    height: 48px;
    border-radius: 4px;
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500;
    margin-right: 32px;
    cursor: pointer;
}
#system_code .system_code_cnt_wrap .cnt_table {
    margin-bottom: 0px;
    width: 100%;
    height: 546px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 16px;
}
#system_code .system_code_cnt_wrap .cnt_table p {
    color: #444;
    font-size: 14px;
}
#system_code .system_code_cnt_wrap .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#system_code .system_code_cnt_wrap .cnt_table .list li {
    min-width: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#system_code .system_code_cnt_wrap .cnt_table .list.selected_list {
    background-color: #f4f7fc;
}

#system_code .system_code_cnt_wrap .cnt_table .list:not(.itm_titl_list) li {
    border-right: 1px solid #ddd;
}
#system_code
    .system_code_cnt_wrap
    .cnt_table
    .list:not(:nth-child(1))
    li:last-child {
    border-right: none;
}
#system_code .system_code_cnt_wrap .cnt_table .itm_titl_list {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#system_code .system_code_cnt_wrap .cnt_table .itm_titl_list .itm_titl {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#system_code .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    padding: 20px 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    justify-content: flex-end;
}
#system_code .cnt_top .btn {
    width: 160px;
    height: 48px;
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 8px;
}
#system_code .cnt_top .btn:last-child {
    margin-right: 0px;
}
#system_code .system_code_cnt_wrap .page_ctrl {
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}
#system_code .system_code_cnt_wrap .page_ctrl li a {
    width: 100%;
    height: 100%;
}
#system_code .system_code_cnt_wrap .page_ctrl li p {
    color: #444444;
    font-size: 14px;
}
#system_code .system_code_cnt_wrap .page_ctrl > li:not(:nth-child(2)) {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
    margin: 0 12px;
}
#system_code .system_code_cnt_wrap .page_ctrl > li:not(:nth-child(2)):hover {
    background-color: #2a58ae;
}
#system_code
    .system_code_cnt_wrap
    .page_ctrl
    > li:not(:nth-child(2)):hover
    a::after {
    border-color: #fff;
}

#system_code .system_code_cnt_wrap .page_ctrl > li:not(:nth-child(2)) a {
    position: relative;
}
#system_code .system_code_cnt_wrap .page_ctrl > li:not(:nth-child(2)) a:after {
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
#system_code .system_code_cnt_wrap .page_ctrl > li:nth-child(1) a:after {
    transform: translate(-30%, -50%) rotate(225deg);
}
#system_code .system_code_cnt_wrap .page_ctrl > li:nth-child(3) a:after {
    transform: translate(-80%, -50%) rotate(45deg);
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number {
    display: flex;
    justify-content: center;
    align-items: center;
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number li {
    width: 40px;
    height: 40px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 0 4px;
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number li a {
    display: flex;
    justify-content: center;
    align-items: center;
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number li:hover a {
    background-color: #2a58ae;
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number li:hover a p {
    color: #fff;
    text-decoration: underline;
    text-underline-position: under;
}
#system_code .system_code_cnt_wrap .page_ctrl .page_number li.selected_page a,
#system_code
    .system_code_cnt_wrap
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
#system_code .system_code_cnt_wrap .list .itm input {
    width: 80px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
}
#system_code .system_code_cnt_wrap .list .itm input:nth-child(1) {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
    color: #fff;
}
#system_code .system_code_cnt_wrap .list .itm input:nth-child(2) {
    background-color: #ffffff;
    border: 1px solid #dddddd;
}

#system_code .light_box {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
}
#system_code .light_box .inner_box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 488px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 24px 32px 32px;
    border-radius: 4px;
}
#system_code .light_box .inner_box .cnt_titl {
    color: #313748;
    font-weight: 400;
    height: 48px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
    margin-bottom: 16px;
    font-size: 28px;
}
#system_code .light_box .inner_box .list select {
    width: 240px;
    height: 48px;
    border-radius: 2px;
    border: 1px solid #dddddd;
    font-size: 14px;
    padding: 14px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    margin-right: 40px;
}
#system_code .light_box .inner_box .list select option {
    color: #444444;
}
#system_code .light_box .inner_box .list select option:first-child {
    color: #999;
}
#system_code .light_box .inner_box .list .itm:first-child {
    margin-bottom: 20px;
}
#system_code .light_box .inner_box .list .itm:nth-child(3) {
    margin-bottom: 32px;
}
#system_code .light_box .inner_box .list .itm {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
}
#system_code .light_box .inner_box .list .itm h5 {
    font-weight: 500;
    color: #222222;
    font-size: 16px;
    width: 144px;
    display: flex;
    align-items: center;
}
#system_code .light_box .inner_box .list .itm input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid #dddddd;
}
#system_code .light_box .inner_box .btn {
    display: flex;
    justify-content: center;
    height: 48px;
    margin-top: 52px;
}
#system_code .light_box .inner_box .btn input {
    width: 136px;
    height: 100%;
    border-radius: 4px;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
#system_code .light_box .inner_box .btn input:first-child {
    background-color: #313748;
    border: 1px solid #171a24;
    margin-right: 8px;
}
#system_code .light_box .inner_box .btn input:last-child {
    background-color: #2a58ae;
    border: 1px solid #0f3884;
}

#system_code .light_box .inner_box .list .toggle_box > div {
    margin-right: auto;
    margin-left: 62px;
}
#system_code .light_box .inner_box .list .toggle_box input[type="checkbox"] {
    display: none;
}
#system_code .light_box .inner_box .list .toggle_box .toggle_btn {
    display: block;
    position: relative;
    width: 48px;
    height: 24px;
    border-radius: 50px;
    background: #2a58ae;
}
#system_code .light_box .inner_box .list .toggle_box .toggle_btn:before {
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
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]
    + label {
    position: relative;
    cursor: pointer;
}
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]
    + label:after {
    content: "사용함";
    display: block;
    position: absolute;
    color: #2a58ae;
    font-weight: 500;
    right: -96px;
    top: 0;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
}
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
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
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:before {
    left: 2px;
}
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn {
    background-color: #becce7;
}
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label
    .toggle_btn:after {
    color: #2a58ae;
    font-weight: 500;
}
#system_code
    .light_box
    .inner_box
    .list
    .toggle_box
    input[type="checkbox"]:checked
    + label:after {
    color: #444;
    font-weight: 400;
}
</style>
