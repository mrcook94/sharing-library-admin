import React, { Component } from 'react'
import '../index.css';
import {
	Layout, Menu, Icon,
} from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import '../library/styles/menu.css'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SideMenuComponent extends Component {
	state = {
		collapsed: false,
	};

	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}
	render() {
		return (
			<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
			>
				<div className="logo">
					<h2 style={{ color: 'white', textAlign: 'center' }}>HUST</h2>
				</div>
				<Router>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							<span><Link to="/" style={styles.menuItem}>Dashboard</Link></span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="user" /><span>Người dùng</span></span>}
						>
							<Menu.Item key="3">
								<Link to="/admin" style={styles.menuItem}>Danh sách quản trị</Link>
							</Menu.Item>
							<Menu.Item key="4">
								<Link to="/users" style={styles.menuItem}>Danh sách người dùng</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={<span><Icon type="book" /><span>Sách</span></span>}
						>
							<Menu.Item key="6">Quản lý sách</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file" />
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Router>
			</Sider>
		)
	}
}

const styles = {
	menuItem: {
		color: '#fff'
	}
}