import React from 'react'
import './App.css'
import { Layout, Menu, Breadcrumb } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Row, Col, Divider } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const { Meta } = Card
const style = { background: '#F0F2F5', padding: '8px 0' }

function App() {
  function PlusSign() {
    console.log('Panda')
  }
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
              <Divider orientation='left'></Divider>
              <Row gutter={[16, 24]}>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300, height: 300 }}
                      cover={
                        <Button
                          onClick={PlusSign}
                          style={{ height: 300, color: 'green', borderColor: 'green' }}
                          type='dashed'>
                          <PlusOutlined key='plus' style={{ color: 'green', fontSize: 40 }} />
                        </Button>
                      }
                      actions={[]}>
                      <Meta title='' description='' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
                <Col className='gutter-row' span={6}>
                  <div style={style}>
                    {' '}
                    <Card
                      style={{ width: 300 }}
                      cover={
                        <img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />
                      }
                      actions={[
                        <SettingOutlined key='setting' />,
                        <EditOutlined key='edit' />,
                        <EllipsisOutlined key='ellipsis' />
                      ]}>
                      <Meta title='Card title' description='This is the description' />
                    </Card>
                  </div>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
      ,
    </div>
  )
}

export default App
