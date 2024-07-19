import './index.scss'
import Hoc_login from '../../utils/Hoc_login'
import React, { useState } from 'react';
import { Button,Input,Dropdown, Space } from 'antd';
import {
   MenuOutlined,LikeOutlined,
   SearchOutlined,HomeOutlined,
   DesktopOutlined,DownOutlined,
   SettingOutlined,SmileOutlined,
   BellOutlined,DeleteOutlined,
   ProductOutlined,XOutlined,
   SoundOutlined,
   LayoutOutlined,
   InsertRowRightOutlined 
  } from '@ant-design/icons';
import { Tabs } from 'react-vant'
import {  Modal } from 'antd';
import { SwipeCell, Cell, Toast } from 'react-vant';



function Index() {
   const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
 //点击关闭左侧菜单
  const showDrawer = () => {
    // setOpen(true);
    const left =document.querySelector('.left');
//点击切换
    if(left.style.display=='none'){
      left.style.display='block';
      
    }else{
      left.style.display='none';
    }
    // 
  };
// 设置对话框加载状态
const showLoading = () => {
    setOpen(true);
    setLoading(true);

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  //鼠标滑过显示case标签


  //创建设计
  const Cdn=()=>{
    window.location.href='/design'
  }
  const app=()=>{
    window.location.href='https://www.canva.cn/download/'
  }
  const ai=()=>{
      window.location.href='https://www.canva.cn/magic/'
  }
  //鼠标滑过事件监听

  return (
    <div className='box'>
        <div className='header'>
            <div><Button type="text" icon={<MenuOutlined className='MenuOutlined' />}  onClick={showDrawer}></Button></div>
             {/* <a href='https://www.canva.cn/'><img className='img' src='https://static.canva.cn/web/images/e1787d84651689b6f20de2ebd8d86baf.svg'/></a> */}
             <div className='img'><img  src='https://static.canva.cn/web/images/e1787d84651689b6f20de2ebd8d86baf.svg'/></div>
              <div id='title' >
                <div >模版素材<DownOutlined /></div>
                <div>设计场景<DownOutlined /></div>
                <div>资源教程<DownOutlined /></div>
                <div>订阅方案<DownOutlined /></div>
                <div onClick={ai}>可画AI</div>
                <div onClick={app}>客户端</div>
              </div>
              <div className='sez'>
                  <div><DesktopOutlined style={{fontSize:"25px"}}/></div>
                  <div><SettingOutlined style={{fontSize:"25px"}}/></div>
                  <div><BellOutlined style={{fontSize:"25px"}}/></div>
                  <div> <Button type="primary" style={{background:"#7731d8"}} onClick={Cdn}>创建设计</Button></div>
                  <div >  <img  className='avatar' src='https://www.dmoe.cc/random.php'></img>  </div>
              </div>
             
              {/* 头像 */}
              {/*  */}
             
              
        </div>
        <div className='main'>
          <div className='case' >
           1212121212121
          </div>

          <div className='left'>
            <div className='left_box'>
              <img className='leftImg'  src='https://www.dmoe.cc/random.php'/>
              <span className='brand'>个人品牌<br/><span className='mian_f'>免费版</span></span>
            </div>
      <Button type="primary" onClick={showLoading}  block icon={<LikeOutlined style={{color:"yellow"}}/>} style={{background:"#f2f3f5",color:"#000",border:"1px solid #cdd1d6",fontSize:"16px",fontWeight:"bold"}}>
        新人半价
      </Button>
       <Modal
       
        loading={loading}
        open={open}
        // 点击
        onCancel={() => setOpen(false)}
      >
       这是广告
      </Modal>
      <Cell title="首页"   icon={<HomeOutlined />} className='Cell'/>
      <Cell title="项目"   icon={<InsertRowRightOutlined />} className='Cell'/>
      <Cell title="模版中心"   icon={<LayoutOutlined />}value=">" className='Cell'/>
      <Cell title="品牌"   icon={<SoundOutlined />}value=">" className='Cell'/>
      <Cell title="应用"   icon={<ProductOutlined />}value=">" className='Cell'/>
      <div className='left_bottom'>
      <Cell title="创建团队"   icon={<XOutlined />}value=">" className='Cell_bom'/>
      <Cell title="回收站"   icon={<DeleteOutlined />}value=">"/>
      </div>
          </div>
          <div className='right'>
            <div className='right_title'>
                <div className='seji'>
                  <h1>今天你想设计什么?</h1>
                  <div className='btn_text'>
                  <Button type="text">自定义大小</Button>
                  <Button type="text">上传</Button>
                  </div>
                </div>
            <div className='right_main'>
                 <div className='searchDiv'>
                  <div className='searchIcon'><SearchOutlined  style={{fontSize:"20px",color:"#000"}}/></div>
                  <div className='search'><Input placeholder="搜索模版或你的设计"  size='large' className='aaa' /></div>
                </div>
            

            </div>
                  <div className='demo-tabs'>
                    <Tabs active={0} >
                      <Tabs.TabPane title='精选推荐'>
                        <h3>你可能想尝试...</h3>
                      </Tabs.TabPane>
                      <Tabs.TabPane title='文档'>文档</Tabs.TabPane>
                      <Tabs.TabPane title='演示文稿'>演示文稿</Tabs.TabPane>
                      <Tabs.TabPane title='社交媒体'>社交媒体</Tabs.TabPane>
                      <Tabs.TabPane title='视频'>视频</Tabs.TabPane>
                      <Tabs.TabPane title='平面物料'>平面物料</Tabs.TabPane>
                      <Tabs.TabPane title='网站'>网站</Tabs.TabPane>
                      <Tabs.TabPane title='更多'>更多</Tabs.TabPane>
                    </Tabs>
                  </div>
               </div>
           </div>
        </div>
    </div>
  )
}

export default Hoc_login(Index)
