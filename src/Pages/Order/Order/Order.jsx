import { useState } from 'react';
import orderPageImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hooks/UseMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
  const categories=['salad','pizza','soup','dessert','drinks'];
  const {category}=useParams();
  const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)
    const [menu]=UseMenu();
   
    const soup=menu.filter(item=>item.category === "soup")
    const pizza=menu.filter(item=>item.category === "pizza")
    const dessert=menu.filter(item=>item.category === "dessert")
    
    const salad=menu.filter(item=>item.category === "salad")
    const drinks=menu.filter(item=>item.category === "drinks")
    return (
        <div className=''>
          <Helmet>
    <title>Nourish | Order Food</title>
   
  </Helmet>
            <Cover img={orderPageImg} title='OUR SHOP' details='Would you like to try a dish?'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex (index)}>
  <TabList className=''>
    <Tab>Salad</Tab>
    <Tab>pizza</Tab>
    <Tab>soups</Tab>
    <Tab>desserts</Tab>
    <Tab>drinks</Tab>
  </TabList>
  <TabPanel>
    <OrderTab items={salad}></OrderTab>
  </TabPanel>
  <TabPanel> <OrderTab items={pizza}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={soup}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={dessert}></OrderTab></TabPanel>
  <TabPanel> <OrderTab items={drinks}></OrderTab></TabPanel>
</Tabs>

        </div>
    );
};

export default Order;