import React, { Component } from 'react';
import {
    StyleSheet,
    Image
} from 'react-native';
import { TabNavigator } from 'react-navigation'
import Basic from './basic/component/Index'
import Help from './help/component/Index'
import List from './list/component/Index'
import Map from './map/component/Index'
import Mine from './mine/component/Index'

const TabNav = TabNavigator({
    Basic: {
        screen: Basic,
        navigationOptions:{
            tabBarLabel: '概况',
            // tabBarIcon: ({focused}) => (
            //     focused ? <Image
            //         source={{uri : 'home_nor'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     /> : <Image
            //         source={{uri : 'home_sel'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    List: {
        screen: List,
        navigationOptions:{
            tabBarLabel: '列表',
            // tabBarIcon: ({tintColor}) => (
            //     <Image
            //         source={{uri : '识兔'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    Map: {
        screen: Map,
        navigationOptions:{
            tabBarLabel: '地图',
            // tabBarIcon: ({tintColor}) => (
            //     <Image
            //         source={{uri : '识兔'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    Mine: {
        screen: Mine,
        navigationOptions:{
            tabBarLabel: '用户',
            // tabBarIcon: ({tintColor}) => (
            //     <Image
            //         source={{uri : '识兔'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
    Help: {
        screen: Help,
        navigationOptions:{
            tabBarLabel: '帮助',
            // tabBarIcon: ({tintColor}) => (
            //     <Image
            //         source={{uri : '识兔'}}
            //         style={[tabBarIcon, {tintColor: tintColor}]}
            //     />
            // ),
        }
    },
},{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    lazy: true,
    tabBarOptions: {
        inactiveTintColor: '#79909B', //导航字体颜色
        activeTintColor: '#039BE5', //激活导航字体颜色
        style: {
            backgroundColor: '#FFFFFF',//控制导航背景颜色
        },
        pressColor: '#e5e5e5',
        pressOpacity: 0.3,
        indicatorStyle: {// 激活导航下面的黄线
            height: 0,
        },
        showIcon: true  // 显示导航图标
    }
})

export default class Home extends Component {
    render() {
        return (
            <TabNav />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});