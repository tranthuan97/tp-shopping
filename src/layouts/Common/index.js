import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import publicRoutes from '../../routes/publicRoutes';
import { Redirect, Route, Switch } from 'react-router-dom';
import styles from './styles.module.css'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const CommonLayout = ({ props }) => {
    const [state, setState] = React.useState({
        collapsed: false,
    })

    const onCollapse = collapsed => {
        console.log(collapsed);
        setState({ collapsed });
    };

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === '/common') {
                console.log(prop)
                return <Route path={prop.path} component={prop.component} key={key} />;
            } else {
                return null;
            }
        });
    };

    const { collapsed } = state;
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className={styles.logo} />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Tom</Menu.Item>
                        <Menu.Item key="4">Bill</Menu.Item>
                        <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                        <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        Files
                        test
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles.siteLayoutBackgroundHeader} style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className={styles.siteLayoutBackgroundBody} style={{ padding: 24, minHeight: 360 }}>
                        <Switch>
                            {getRoutes(publicRoutes)}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
}
export default CommonLayout