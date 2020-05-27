import React from 'react';
import {Layout, Menu} from 'antd';
import {LoginOutlined} from '@ant-design/icons';
import LogoImg from "../../assets/images/ePlastLogotype.png";
import LogoText from "../../assets/images/logo_PLAST.svg";
import classes from "./Header.module.css";

const HeaderContainer = () => {
    return (
        <Layout.Header className={classes.headerContainer}>
            <Menu mode="horizontal" className={classes.headerMenu}>
                <Menu.Item className={classes.headerItem} key="1">
                    <div className={classes.headerLogo}>
                        <img src={LogoImg} alt="Logo"/>
                        <img src={LogoText} alt="Logo"/>
                    </div>
                </Menu.Item>
            </Menu>
            <Menu mode="horizontal" className={classes.headerMenu}>
                <Menu.Item className={classes.headerItem} key="2">Контакти</Menu.Item>
                <Menu.Item className={classes.headerItem} key="3">Увійти
                    <LoginOutlined className={classes.headerIcon}/></Menu.Item>
            </Menu>
        </Layout.Header>
    )
};
export default HeaderContainer;