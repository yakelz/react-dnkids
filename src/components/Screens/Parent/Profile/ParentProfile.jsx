import React from 'react';
import { useNavigate } from 'react-router-dom';

import classes from './ParentProfile.module.css'
import ChildList from "./ChildList/ChildList";
import Button from "../../../UI/Buttons/Button";
import SettingsMenu from "../../../UI/Settings/SettingsMenu/SettingsMenu";
import SettingsItem from "../../../UI/Settings/SettingsItem/SettingsItem";

import {ReactComponent as editProfile} from '../../../../assets/svg/edit_profile.svg';
import {ReactComponent as settings} from '../../../../assets/svg/settings.svg';
import {ReactComponent as info} from '../../../../assets/svg/info.svg';
import {ReactComponent as support} from '../../../../assets/svg/support.svg';
import {ReactComponent as management} from '../../../../assets/svg/management.svg';

import {parent, children} from "../../../data";

const ParentProfile = () => {
    const navigate = useNavigate();

    return (
        <main>
            <div className={ classes.generalInfo }>
                <div className={ classes.parentInfo }>
                    <img src={`/img/parent_photo${parent.id}.jpg`} alt="Parent Photo"/>
                    <span className="button-label" >{parent.name + " " + parent.surname}</span>
                    <span className="info-label" >{parent.email}</span>
                </div>
                <ChildList children={children}/>
                <Button outline
                        style={{height: "45px", borderRadius: "16px"}}
                >Добавить ребенка</Button>
            </div>
            <h4>Профиль</h4>
            <SettingsMenu>
                <SettingsItem
                    Icon= {editProfile}
                    OptionName= {"Редактировать профиль"}
                    onClick ={() => {
                        navigate('/parent/profile/edit')
                    }}
                />
                <SettingsItem
                    Icon= {management}
                    OptionName= {"Управление подпиской"}
                    onClick ={() => {
                        navigate('/parent/profile/subscription')
                    }}
                />
            </SettingsMenu>
            <h4>Приложение</h4>
            <SettingsMenu>
                <SettingsItem
                    Icon= {support}
                    OptionName= {"Поддержка"}
                    onClick={() => {
                        console.log("Поддержка")
                    }}
                />
                <SettingsItem
                    Icon= {settings}
                    OptionName= {"Настройки"}
                />
                <SettingsItem
                    Icon= {info}
                    OptionName= {"О приложении"}
                />
            </SettingsMenu>
            <span
                onClick={() => {
                    console.log("Выйти из аккаунта")
                }}
                className={ classes.signOut + " button-label"}
            >
                Выйти из аккаунта
            </span>
        </main>
    );
};

export default ParentProfile;