import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <profileinfo className ={s.ProfileInfo}>
                <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%BD%D0%BE%D0%BD,_%D0%94%D0%B6%D0%BE%D0%BD" target="_blank">
                    <img
                    src='https://rockcult.ru/wp-content/uploads/2017/05/37526e9b79e14996251d509706ac58593-300x300.jpg'/>
                </a>
                </profileinfo>
                </div>
            <div className={s.descriptionBlock}>
                John lennon

            </div>
            <br/>
        <div className={s.frends}>
           Frends <br/>
            <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BA%D0%BA%D0%B0%D1%80%D1%82%D0%BD%D0%B8,_%D0%9F%D0%BE%D0%BB" target="_blank">
            <img className={s.f1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhc6hzxsNbmySvs6PsqyrlZ2DAxWOvzQq3NXSJjDta-7BQmZyO"/>
            </a>
            <a href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%80%D0%B8%D1%81%D0%BE%D0%BD,_%D0%94%D0%B6%D0%BE%D1%80%D0%B4%D0%B6" target="_blank">
            <img className={s.f2} src="https://www.film.ru/sites/default/files/persones/_imported/0365600.jpg"/>
            </a>
            <a href="https://ru.wikipedia.org/wiki/%D0%A0%D0%B8%D0%BD%D0%B3%D0%BE_%D0%A1%D1%82%D0%B0%D1%80%D1%80" target="_blank">
            <img className={s.f3} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ringo_Starr_NY_1964.png/220px-Ringo_Starr_NY_1964.png"/>
            </a>
        </div>


        </div>


    )
}

export default ProfileInfo;