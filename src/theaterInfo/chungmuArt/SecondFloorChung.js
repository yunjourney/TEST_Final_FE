import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import '../seats.css';


function prevAll(element) { // element 이전의 모든 형제노드의 갯수를 구하는 함수
    let result = []; //빈 배열을 만들어서 앞에있는 모든 형제노드를 넣어줄 예정 
    
        while (element = element.previousElementSibling){ // 이전의 모든 형제노드를 구하는 previousElementSibling  
            result.push(element);
        }
           
    return result.length + 1; // 충무는 샤롯데랑 다르게 앞에 구역태그 (A,B,C)가 없어서 1을 더해야 맞다 
}

const onClickSeat = (event) => {

    let tmp = event.currentTarget.getAttribute("pk");
    let seatNum = event.currentTarget.innerText; // 현재 currentTarget의 innerText (태그 안의 텍스트)를 불러온다 

    // 코드를 잘 보면, 부모자식 관계의 className을 보면 row > seats > seat 이다
    // 내가 지금 몇번째 row인지 확인하려고 이전의 row의 갯수를 세는 (이전 모든 형제노드 갯수) 함수를 만들어 놓았으니
    // row 까지 두번 올라간 후 형제노드를 찾아야 한다
    // parentNode를 두번 사용해 두번 올라간다 
    let parentNode = prevAll(event.currentTarget.parentNode.parentNode);

    alert(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + tmp);
    console.log(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + tmp);
}

const SecondFloorChung = () => {
    return (
        <>
        
        <h1>충무아트 SecondFloor 입장 성공</h1>
        <Link to = "/"> Home으로 돌아가기</Link> <br></br>
        <Link to = "/FirstFloorChung">1층보기</Link><br></br>
        <Link to = "/SecondFloorChung">2층보기</Link><br></br>
        <Link to = "/ThirdFloorChung">3층보기</Link><br></br>
        <div className="grid-containder modal-background" id="modal-background">  
        </div>


        <div className="floor">

        
        <div className="seating_table_container">
            
            <div className="seattable_floor">2층</div>
            
        </div>        
        
        
        <div className="floor_container">


            
            <div id="chungmu_grand" className="AA2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10243">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10244">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10245">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10246">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10247">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10248">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10249">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10250">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10251">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10252">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10253">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10254">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10255">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10256">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10257">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10258">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10259">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10260">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10261">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10262">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10263">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10264">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10265">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10266">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10267">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10268">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10269">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10270">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10271">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10272">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10273">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10274">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10275">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10276">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10277">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10278">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10279">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10280">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10281">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10282">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10283">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10284">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10285">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10286">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10287">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10288">
                                    <p>2</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10289">
                                    <p>3</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10290">
                                    <p>4</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10291">
                                    <p>5</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10292">
                                    <p>6</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10293">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10294">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10295">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10296">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10302">
                                    <p>7</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10303">
                                    <p>8</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10304">
                                    <p>9</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10305">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="AB2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    9
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    10
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    11
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="BB2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10317">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10318">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10319">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10320">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10321">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10322">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10323">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10324">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10325">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10326">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10327">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10328">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10329">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10330">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10331">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10332">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10333">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10334">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10335">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10336">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10337">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10338">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10339">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10340">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10341">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10342">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10343">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10344">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10345">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10346">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10347">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10348">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10349">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10350">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10351">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10352">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10353">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10354">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10355">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10356">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10357">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10358">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10359">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10360">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10361">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10362">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10363">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10364">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10365">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10366">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10367">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10368">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10369">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10370">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10371">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10372">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10373">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10374">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10375">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10376">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10377">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10378">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10379">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10380">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10381">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10382">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10383">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10384">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10385">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10386">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10387">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10388">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10389">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10390">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10391">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10392">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10393">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10394">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10395">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10396">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10397">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10398">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10399">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10400">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10401">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10402">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10403">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10404">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10405">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10406">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10407">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10408">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10409">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10410">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10411">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10412">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10413">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10414">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10415">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10416">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10417">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10418">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10419">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10420">
                                    <p>21</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10421">
                                    <p>22</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10422">
                                    <p>23</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10423">
                                    <p>24</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10424">
                                    <p>25</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10425">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10426">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10427">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10428">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10429">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10430">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10431">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10432">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10433">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10434">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10435">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10436">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10438">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10439">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10440">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10441">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10442">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10443">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10444">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10445">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10446">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10447">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10448">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10449">
                                    <p>10</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10450">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10451">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10452">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10453">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10454">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10455">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10456">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10457">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10458">
                                    <p>19</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10459">
                                    <p>20</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10460">
                                    <p>11</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10461">
                                    <p>12</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10462">
                                    <p>13</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10463">
                                    <p>14</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10464">
                                    <p>15</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10465">
                                    <p>16</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10466">
                                    <p>17</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10467">
                                    <p>18</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="BC2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    9
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    10
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    11
                                </p>
                            </div>
                

                
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            
            <div id="chungmu_grand" className="CC2">

    
                
                
    
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10479">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10480">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10481">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10482">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10483">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10484">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10485">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10486">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10487">
                                    <p>35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10488">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10489">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10490">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10491">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10492">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10493">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10494">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10495">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10496">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10497">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10498">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10499">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10500">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10501">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10502">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10503">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10504">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10505">
                                    <p>35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10506">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10507">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10508">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10509">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10510">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10511">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10512">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10513">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10514">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10515">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10516">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10517">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10518">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10519">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10520">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10521">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10522">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10523">
                                    <p>35</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10524">
                                    <p>26</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10525">
                                    <p>27</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10526">
                                    <p>28</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10527">
                                    <p>29</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10528">
                                    <p>30</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10529">
                                    <p>31</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10530">
                                    <p>32</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10531">
                                    <p>33</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10532">
                                    <p>34</p>
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
                <div className="row">

    
                
    
                    
                        
                            <div id="seat" onClick={onClickSeat} ></div>
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10534">
                                     <p>1</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10535">
                                     <p>2</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10536">
                                     <p>3</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10537">
                                     <p>4</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10538">
                                     <p>5</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                        
                
                            
                            <div className="seats">
                                
                    
                                <div id="seat" onClick={onClickSeat}  className="real disabled no_review" pk="10539">
                                     <p>6</p> 
                                </div>
                                
                            </div>
                            
                

            
                        
            

                    
                
    

                </div>
                
    

            </div>
            


        </div>
    </div>
    
        </>
    );
}

export default SecondFloorChung;