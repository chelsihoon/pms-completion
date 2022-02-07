<template>
    <section id="pcs_usage_topcnt_day">
        <div class="cnt_top cnt_wrap">
            <select name="" id="">
                <option value="">새 PCS #0</option>
                <option value="">새 PCS #1</option>
                <option value="">새 PCS #2</option>
                <option value="">새 PCS #3</option>
                <option value="">새 PCS #4</option>
            </select>
            <input type="date" name="" value="2020-08-15" class="cnt_date" />
            <button class="search btn">조회</button>
        </div>
    </section>
    <section id="pcs_usage_cnt_day_wrap">
        <div class="cnt_center cnt_wrap">
            <h3 class="cnt_titl">시간별 충·방전량</h3>
            <div class="graph_wrap">
                <!-- <ul class="y_axis">
                    <li class="y_itm">
                        <p>6</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>5</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>4</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>3</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>2</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>1</p>
                        <p class="y_bar"></p>
                    </li>
                    <li class="y_itm">
                        <p>0</p>
                        <p class="y_bar"></p>
                    </li>
                </ul>
                <ul class="x_axis">
                    <li>
                        <p>01</p>
                    </li>
                    <li>
                        <p>02</p>
                    </li>
                    <li>
                        <p>03</p>
                    </li>
                    <li>
                        <p>04</p>
                    </li>
                    <li>
                        <p>05</p>
                    </li>
                    <li>
                        <div class="graph_bar_wrap">
                            <div class="graph_bar discharger"></div>
                            <div class="graph_bar charger"></div>
                        </div>
                        <p>06</p>
                    </li>
                    <li>
                        <p>07</p>
                    </li>
                    <li>
                        <p>08</p>
                    </li>
                    <li>
                        <p>09</p>
                    </li>
                    <li>
                        <p>10</p>
                    </li>
                    <li>
                        <p>11</p>
                    </li>
                    <li>
                        <p>12</p>
                    </li>
                    <li>
                        <p>13</p>
                    </li>
                    <li>
                        <p>14</p>
                    </li>
                    <li>
                        <p>15</p>
                    </li>
                    <li>
                        <p>16</p>
                    </li>
                    <li>
                        <p>17</p>
                    </li>
                    <li>
                        <p>18</p>
                    </li>
                    <li>
                        <p>19</p>
                    </li>
                    <li>
                        <p>20</p>
                    </li>
                    <li>
                        <p>21</p>
                    </li>
                    <li>
                        <div class="graph_bar_wrap">
                            <div class="graph_bar discharger"></div>
                            <div class="graph_bar charger"></div>
                        </div>
                        <p>22</p>
                    </li>
                    <li>
                        <p>23</p>
                    </li>
                    <li>
                        <p>24</p>
                    </li>
                    <li>
                        <p>25</p>
                    </li>
                    <li>
                        <p>26</p>
                    </li>
                    <li>
                        <p>27</p>
                    </li>

                    <li>
                        <p>28</p>
                    </li>
                    <li>
                        <p>29</p>
                    </li>
                    <li>
                        <p>30</p>
                    </li>
                    <li>
                        <p>31</p>
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
            <div class="cnt_table">
                <p class="unit">[단위 : 일]</p>
                <ul class="list">
                    <li class="sub_titl"><p>구분</p></li>
                    <li class="itm"><p>01</p></li>
                    <li class="itm"><p>02</p></li>
                    <li class="itm"><p>03</p></li>
                    <li class="itm"><p>04</p></li>
                    <li class="itm"><p>05</p></li>
                    <li class="itm"><p>06</p></li>
                    <li class="itm"><p>07</p></li>
                    <li class="itm"><p>08</p></li>
                    <li class="itm"><p>09</p></li>
                    <li class="itm"><p>10</p></li>
                    <li class="itm"><p>11</p></li>
                    <li class="itm"><p>12</p></li>
                    <li class="itm"><p>13</p></li>
                    <li class="itm"><p>14</p></li>
                    <li class="itm"><p>15</p></li>
                    <li class="itm"><p>16</p></li>
                    <li class="itm"><p>17</p></li>
                    <li class="itm"><p>18</p></li>
                    <li class="itm"><p>19</p></li>
                    <li class="itm"><p>20</p></li>
                    <li class="itm"><p>21</p></li>
                    <li class="itm"><p>22</p></li>
                    <li class="itm"><p>23</p></li>
                    <li class="itm"><p>24</p></li>
                    <li class="itm"><p>25</p></li>
                    <li class="itm"><p>26</p></li>
                    <li class="itm"><p>27</p></li>
                    <li class="itm"><p>28</p></li>
                    <li class="itm"><p>29</p></li>
                    <li class="itm"><p>30</p></li>
                    <li class="itm"><p>31</p></li>
                </ul>
                <ul class="list">
                    <li class="sub_titl"><p>충전량 [kW]</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>5.7</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                </ul>
                <ul class="list">
                    <li class="sub_titl"><p>방전량 [kW]</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>5.4</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>0</p></li>
                    <li class="itm"><p>3.8</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                    <li class="itm"><p>-</p></li>
                </ul>
                <div class="reference">
                    <p>
                        ※ 참고용 데이터 입니다. 정확한 수치는 해당 장비 ( PCS /
                        BAT / AMI ) 를 확인하시기 바랍니다.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "pcsUsageCntDay",
    components: {},
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
#pcs_usage_cnt_day_wrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
#pcs_usage_cnt_day_wrap .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 24px;
    border-radius: 5px;
}
#pcs_usage_cnt_day_wrap .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_usage_cnt_day_wrap .cnt_center {
    margin-top: 16px;
    flex-direction: column;
    width: 100%;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    min-height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap {
    padding: 48px 23px 0;
    margin-bottom: 52px;
    height: 507px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap p {
    color: #777777;
    font-size: 14px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .y_axis {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .y_axis .y_itm {
    display: flex;
    align-items: center;
    margin-bottom: 37px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .y_axis .y_itm p {
    text-align: right;
    min-width: 19px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .y_axis .y_itm:last-child {
    margin-bottom: 0px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .y_axis .y_itm .y_bar {
    width: 100%;
    height: 1px;
    background-color: #dddddd;
    margin-left: 24px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis {
    display: flex;
    position: relative;
    justify-content: flex-end;
    margin-left: 43px;
    top: -10px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis li {
    width: 55.4px;
    text-align: center;
    position: relative;
    flex: 1;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis li p {
    margin-top: 6.5px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis li:last-child::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 50%;
    background-color: #dddddd;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis li .graph_bar_wrap {
    position: absolute;
    bottom: 27px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: flex-end;
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li
    .graph_bar_wrap
    > div {
    margin: 0 2px;
    width: 22px;
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li:nth-child(22)
    .charger {
    height: 207px;
    background-color: #ffbc3a;
    left: 50%;
    /* transform: translateX(-50%); */
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li:nth-child(6)
    .charger {
    height: 310px;
    background-color: #ffbc3a;
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .graph_wrap
    .x_axis
    li:nth-child(6)
    .discharger {
    height: 319px;
    background-color: #32a1ff;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .legend {
    position: relative;
    display: flex;
    justify-content: center;
    margin: 24px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .legend > div {
    width: 128px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .legend .charger_amount .bar {
    width: 24px;
    height: 4px;
    background-color: #32a1ff;
    border-radius: 50px;
    margin-right: 16px;
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .graph_wrap
    .legend
    .discharger_amount
    .bar {
    width: 24px;
    height: 4px;
    background-color: #ffbc3a;
    border-radius: 50px;
    margin-right: 16px;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .legend > div:last-child {
    margin-right: 0;
}
#pcs_usage_cnt_day_wrap .cnt_center .graph_wrap .x_axis p {
    width: 100%;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table {
    width: 100%;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table p {
    color: #444;
    font-size: 14px;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .unit {
    color: #2a58ae;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    text-align: right;
    margin-bottom: 8px;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list {
    height: 65px;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #ddd;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list li {
    min-width: 53px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list:not(:nth-child(2)) li {
    border-right: 1px solid #ddd;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list li.sub_titl {
    /* width: 165px; */
    flex: 3;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list li.sub_titl p {
    font-weight: 500;
}
#pcs_usage_cnt_day_wrap
    .cnt_center
    .cnt_table
    .list:not(:nth-child(2))
    li.sub_titl {
    background-color: #f4f7fc;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list:nth-child(2) {
    height: 56px;
    background-color: #313748;
    border: none;
    border-radius: 4px;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .list:nth-child(2) p {
    font-weight: 500;
    color: #fff;
    font-size: 16px;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .reference {
    margin-top: 16px;
}
#pcs_usage_cnt_day_wrap .cnt_center .cnt_table .reference p {
    color: #777777;
    font-size: 14px;
}
#pcs_usage_topcnt_day input:focus,
#pcs_usage_topcnt_day select:focus {
    outline: 2px solid #2a58ae;
}
input[type="date"]::-webkit-clear-button,
input[type="date"]::-webkit-inner-spin-button {
    display: none;
}
input[type="date"]::-webkit-calendar-picker-indicator,
input[type="month"]::-webkit-calendar-picker-indicator {
    background: transparent;
    position: absolute;
    left: -12px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
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
#pcs_usage_topcnt_day {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
#pcs_usage_topcnt_day .cnt_wrap {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
}
#pcs_usage_topcnt_day .cnt_wrap .cnt_titl {
    color: #313748;
    font-weight: 500;
    font-size: 18px;
    height: 36px;
    border-bottom: 1px solid #dddddd;
    width: 100%;
    position: relative;
}
#pcs_usage_topcnt_day .cnt_top {
    width: 100%;
    height: 88px;
    display: flex;
    align-items: center;
    padding: 20px 24px;
}
#pcs_usage_topcnt_day .cnt_top select {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border-radius: 2px;
    appearance: none;
    background: url(../../assets/img/select_arr.png) no-repeat 90% 50%;
    color: #444444;
    font-size: 14px;
    margin-right: 8px;
}
#pcs_usage_topcnt_day .cnt_top select option {
    color: #444444;
    font-size: 14px;
}
#pcs_usage_topcnt_day .cnt_top input {
    border: 1px solid #ddd;
    width: 240px;
    height: 48px;
    padding: 14px 40px;
    border-radius: 2px;
    color: #444;
    background: transparent;
    position: relative;
    margin-right: 8px;
    font-size: 14px;
}
#pcs_usage_topcnt_day .cnt_top .month_wrap {
    display: flex;
}
#pcs_usage_topcnt_day .cnt_top .month_wrap .cnt_month:first-child {
    margin: 0px;
}
#pcs_usage_topcnt_day .cnt_top .month_wrap .month_wave {
    margin: 0 7px;
    color: #777;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
}
#pcs_usage_topcnt_day .cnt_top .month_wrap input::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_calendar.png) no-repeat;
    cursor: pointer;
}
#pcs_usage_topcnt_day .cnt_wrap .btn {
    width: 136px;
    height: 48px;
    background-color: #1d3e7a;
    border: 1px solid #173161;
    color: #fff;
    font-weight: 500;
    border-radius: 4px;
    margin-left: auto;
    cursor: pointer;
}
#pcs_usage_topcnt_day .cnt_top input[type="time"] {
    width: 240px;
    height: 48px;
    padding: 14px 16px;
    border: 1px solid #dddddd;
    border-radius: 2px;
    color: #444444;
    font-size: 14px;
    padding-left: 40px;
    position: relative;
}
#pcs_usage_topcnt_day .cnt_top input[type="date"]::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_calendar.png) no-repeat;
    cursor: pointer;
}
#pcs_usage_topcnt_day .cnt_top input[type="time"]::after {
    position: absolute;
    left: 16px;
    content: "";
    width: 16px;
    height: 16px;
    background: url(../../assets/img/ico_clock.png) no-repeat;
    cursor: pointer;
}
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
</style>
