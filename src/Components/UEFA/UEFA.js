import React, {Component} from 'react';
import './UEFA.css'
import logo from './images/4722-tottenhem.jpg'
import Mam from  './images/2294-manchester_siti.jpg'
import  Liv from './images/1129-liverpul.jpg'
import Portu from './images/9282-portu.jpg'
import Uv from './images/1236-yuventus.jpg'
import  Ay from './images/1210-ayaks.jpg'
import  Un from './images/un.jpg'
import Barsa from './images/2455-barselona.jpg'




class UEFA extends Component {
    render() {
        return(
            <div id='Section'>
                <div className='Text_UEFA'>
                    <h3>Таблица четвертьфинала UEFA - Матч 1 из 2</h3>
                </div>
                <div className='Flex'>
            <div className='FON'>
                <div className='Line'>
                  <div className='Img'>
                          <img src={logo} alt="" height='51px'/>
                          <p> Тоттенхэм</p>
                   </div>
                <div className='Img'>
                    <img src={Mam} alt="" height='51px'/>
                     <p> Манчестер Сити</p>
                </div>
                </div>
                <div className='Time'>
                    <p>Ср,10.04<br/>
                    01:00</p>
                </div>
            </div>
                <div className='FON'>
                    <div className='Line'>
                        <div className='Img'>
                            <img src={Liv} alt="" height='51px'/>
                            <p> Ливерпуль</p>
                        </div>
                        <div className='Img'>
                            <img src={Portu} alt="" height='51px'/>
                            <p> Порту</p>
                        </div>
                    </div>
                    <div className='Time'>
                        <p>Ср,10.04<br/>
                            01:00</p>
                    </div>
                </div>
                </div>

                <div className='Flex'>
                    <div className='FON'>
                        <div className='Line'>
                            <div className='Img'>
                                <img src={Uv} alt="" height='51px'/>
                                <p> Ювентус</p>
                            </div>
                            <div className='Img'>
                                <img src={Ay} alt="" height='51px'/>
                                <p> Аякс</p>
                            </div>
                        </div>
                        <div className='Time'>
                            <p>Чт,11.04<br/>
                                01:00</p>
                        </div>
                    </div>
                    <div className='FON'>
                        <div className='Line'>
                            <div className='Img'>
                                <img src={Un} alt="" height='51px'/>
                                <p> Манчестер Юнайтед</p>
                            </div>
                            <div className='Img'>
                                <img src={Barsa} alt="" height='51px'/>
                                <p> Барселона</p>
                            </div>
                        </div>
                        <div className='Time'>
                            <p>Чт,11.04<br/>
                                01:00</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UEFA;