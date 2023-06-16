import React, {useContext, useEffect, useState} from 'react';
import AuthContext from '../../../../AuthContext';
import classes from './EditProfile.module.css'
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Buttons/Button";
import {ReactComponent as EditPhoto} from '../../../../../assets/svg/edit_photo.svg';
import { useParams } from 'react-router-dom';
import {children, parent} from "../../../../data";

const EditProfile = ({isParentProfile}) => {
    const {setHeader} = useContext(AuthContext);
    useEffect(() => {
        setHeader(false);
        return () => {
            setHeader(true);
        }
    }, []);

    const {id} = useParams();

    let profile = parent;
    if (!isParentProfile) {
        //чеза хрень получилась
        profile = children.find(child => child.id === Number(id))
    }

    const initialProfileState = isParentProfile ? {
        name: profile.name,
        surname: profile.surname,
        email: profile.email,
    } : {
        name: profile.name,
        surname: profile.surname,
        birthday: profile.birthday,
        startSalary: profile.startSalary,
        maxSalary: profile.maxSalary,
    };

    const [profileState, setProfileState] = useState(initialProfileState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProfileState(prevState => ({ ...prevState, [name]: value }));
    }

    const editProfile = (e) => {
        e.preventDefault();
        profile = {...profile, ...profileState};
        console.log(profile)
    }

    return (
        <main>
            <div className={classes.generalInfo}>
                <div className={classes.editPhoto}>
                    <img src={
                        isParentProfile? `/img/parent_photo${profile.id}.jpg` : `/img/child_photo${profile.id}.jpg`
                    } alt="Parent Photo"/>
                    <EditPhoto/>
                </div>
                <form>
                    <Input
                        value={profileState.name}
                        onChange={handleInputChange}
                        label="Имя"
                        name="name"
                    />
                    <Input
                        value={profileState.surname}
                        onChange={handleInputChange}
                        label="Фамилия"
                        name="surname"
                    />
                    {isParentProfile ?
                        (
                            <>
                                <Input
                                    value={profileState.email}
                                    onChange={handleInputChange}
                                    label="Email"
                                    name="email"
                                />
                            </>
                        ) : (
                            <>
                                <Input
                                    value={profileState.birthday}
                                    onChange={handleInputChange}
                                    label="День рождения"
                                    name="birthday"
                                />
                                <Input
                                    value={profileState.startSalary}
                                    onChange={handleInputChange}
                                    label="Текущий оклад"
                                    name="startSalary"
                                />
                                <Input
                                    value={profileState.maxSalary}
                                    onChange={handleInputChange}
                                    label="Максимальный оклад"
                                    name="maxSalary"
                                />
                            </>
                        )
                    }
                    <Button
                        onClick={editProfile}
                    >
                        Сохранить
                    </Button>
                </form>
            </div>
        </main>
    );
};

export default EditProfile;