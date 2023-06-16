import React, {useState} from 'react';
import TotalBalance from "./TotalBalance/TotalBalance";
import SettingsItem from "../../../UI/Settings/SettingsItem/SettingsItem";
import SettingsMenu from "../../../UI/Settings/SettingsMenu/SettingsMenu";
import ChildBalance from "./ChildBalance/ChildBalance";
import {children} from "../../../data";
import RequestSwitcher from "../../../UI/RequestSwitcher/RequestSwitcher";

const ParentBank = () => {
    const [isActive, setIsActive] = useState(true);
    return (
        <main>
            <TotalBalance/>
            <h4 style={{marginTop: "4px"}}>Мои дети</h4>
            {children.map((child) => (
                <ChildBalance key={child.id} child={child} />
            ))}
            <h4>Запросы</h4>
            <RequestSwitcher isActive={isActive} setIsActive={setIsActive}></RequestSwitcher>
            {children.map((child) => (
                <ChildBalance key={child.id} child={child} />
            ))}
            <h4>Управление банком</h4>
            <SettingsMenu>
                <SettingsItem
                    OptionName= {"Изменение условий по вкладам"}
                    onClick ={() => {
                    }}
                />
                <SettingsItem
                    OptionName= {"Изменение условий по кредитам"}
                    onClick ={() => {
                    }}
                />
                <SettingsItem
                    OptionName= {"Изменение условий тарифа"}
                    onClick ={() => {
                    }}
                />
                <SettingsItem
                    OptionName= {"Создание пользовательской акции"}
                    onClick ={() => {
                    }}
                />
            </SettingsMenu>
        </main>
    );
};

export default ParentBank;