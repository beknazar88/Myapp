import React, {Component} from 'react';
import './About.css'
import Foot from './Images/1468830003_b_futbol-taktik (1).jpg'
import Gol from  './Images/Footbal_Men_Goalkeeper_(football)_Two_Ball_Glove_542575_300x200.jpg'
import  Loto from './Images/4b1a08ee822f6d082c1a58fd41df3bda550c0387772ef623475890.jpg'


class About extends Component {
    render() {
        return (
            <div id='Section1'>
                <div className='Back_fon'>
                          <div className='Text_new'>

                              <h1>Главные новости</h1>
                          </div>
                    <div className='Text_h'>
                        <div>
                    <img src={Foot} alt="" height='150' width='250'/>
                        </div>
                        <div className='TXT'>
                        <h2>Погба хочет в "Реал".Но Поль не нужен в Мадриде.</h2>
                        <p>Покупка звездного француза станет ошибкой Переса и Зидана.</p>
                        </div>
                    </div>
                    <div className='Text_h'>
                        <div>
                            <img src={Gol} alt="" height='150px' width='250'/>
                        </div>
                        <div className='TXT'>
                            <h2>Возможно,гол Роналду "Атлетико" засчитали неверно.Есть разбор ошибки.</h2>
                            <p>В Испании считают,что система определения гола дала сбой.</p>
                        </div>
                    </div>
                    <div className='Text_h'>
                        <div>
                            <img src={Loto} alt="" height='150px' width='250'/>
                        </div>
                        <div className='TXT'>
                            <h2>Жеребьевка 1/4 финала Лиги чемпионов Европы</h2>
                            <p>Все о раскладах в главных клубных турнирах Европы</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;