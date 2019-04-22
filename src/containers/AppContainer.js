
import React from 'react';
import '../index.css';
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';
import SideMenuComponent from '../components/SideMenuComponent'

import strings from '../library/utils/strings'

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class AppContainer extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SideMenuComponent />
                {/* <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        {strings.footerTitle}
                    </Footer>
                </Layout> */}
            </Layout>
        );
    }
}

export default AppContainer
