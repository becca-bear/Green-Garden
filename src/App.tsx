import React from 'react'
import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { HeartOutlined } from '@ant-design/icons'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header> </Header>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SubMenu key='sub1' icon={<HeartOutlined />} title='subnav 1'>
                <Menu.Item key='1'>option1</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' icon={<HeartOutlined />} title='subnav 2'>
                <Menu.Item key='2'>option2</Menu.Item>
              </SubMenu>
              <SubMenu key='sub3' icon={<HeartOutlined />} title='subnav 3'>
                <Menu.Item key='3'>option3</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              The Green Garden
            </Content>
          </Layout>
        </Layout>
      </Layout>
      ,
    </div>
  )
}

export default App
