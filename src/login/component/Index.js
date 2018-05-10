/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Button,
    View,
    Text,
    Image,
    Dimensions,
    TextInput,
    Navigator
} from 'react-native';
import md5 from "md5";
const {height, width} = Dimensions.get('window');

export default class Login extends Component {
    state={
        userName:'',
        password:'',
        userFocus: false,
        passFocus: false,
        passShow: false
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo_bg}>
                    <Image
                        source={{uri: 'bg_pic'}}
                        style={styles.img}
                        resizeMode={'stretch'}
                    />
                    <View style={styles.example}>
                        <Image
                            source={{uri: 'power_station_example'}}
                            style={styles.example_img}
                        />
                        <Text style={styles.blue}>
                            示例电站
                        </Text>
                    </View>
                </View>
                <View style={styles.login_form}>
                    <View style={styles.login_input}>
                        {this.state.userFocus ? <Image
                            style={styles.input_icon}
                            source={{uri: 'account_sel'}}
                            resizeMode={'stretch'}
                        /> : <Image
                            style={styles.input_icon}
                            source={{uri: 'account_nor'}}
                            resizeMode={'stretch'}
                        />}

                        <TextInput
                            style={styles.input_content}
                            placeholder="请输入手机号或邮箱"
                            onChangeText={(userName) => this.setState({userName})}
                            onFocus={()=> this.setState({userFocus:true})}
                            onBlur = {()=> this.setState({userFocus:false})}
                        />
                    </View>
                    <View style={styles.login_input}>
                        {this.state.passFocus ? <Image
                            style={styles.input_icon}
                            source={{uri: 'password_sel'}}
                            resizeMode={'stretch'}
                        /> : <Image
                            style={styles.input_icon}
                            source={{uri: 'password_nor'}}
                            resizeMode={'stretch'}
                        />}
                        <TextInput
                            style={styles.input_content}
                            placeholder="请输入密码"
                            onChangeText={(password) => this.setState({password})}
                            onFocus={()=> this.setState({passFocus:true})}
                            onBlur = {()=> this.setState({passFocus:false})}
                        />
                        <View onClick={()=> Alert.alert('111')} style={{backgroundColor:'#000'}}>
                            {this.state.passShow ? <Image
                                style={styles.pass_icon}
                                source={{uri: 'password_on'}}
                                resizeMode={'stretch'}
                            /> : <Image
                                style={styles.pass_icon}
                                source={{uri: 'password_off'}}
                                resizeMode={'stretch'}
                            />}
                        </View>
                    </View>
                    <View style={styles.login_btn_mar}>
                        <Button
                            onPress={this.Login}
                            title="登录"
                        />
                    </View>
                </View>
            </View>
        );
    }
    Login = () => {
        const formData= new FormData();
        formData.append('user_name', this.state.userName);
        formData.append('password', md5(this.state.password));
        fetch('http://dev.exxdata.com.cn/api/v3/user/guest/login',{
            method:'POST',
            header:{
                Accept:'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
            body:formData
        }).then(res => {
            return res.json()
        }).then(data=> {
            const { navigate } = this.props.navigation;
            if(data.errno===0){
                navigate('Home');
            }else {
                Alert.alert(JSON.stringify(data.data))
            }

        }).catch(err=>{
            Alert.alert(JSON.stringify(err))
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logo_bg:{
        position:'relative',
        paddingTop:100,
        width,
        height:0.31*height,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    img: {
        position:'absolute',
        width,
        height:0.31*height,
    },
    example: {
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        width:136,
        height:36,
        borderWidth:1,
        borderColor:'#039BE5',
        borderRadius:3
    },
    example_img: {
        height:16,
        width:13,
        marginRight:8
    },
    blue:{
        color:'#039BE5'
    },
    login_form: {
        display: 'flex',
        width: width,
        paddingLeft:0.1*width,
        paddingRight:0.1*width
    },
    login_input: {
        marginTop:16,
        display:'flex',
        flexDirection:'row',
        position:'relative'
    },
    login_btn_mar: {
        marginTop: 50
    },
    input_content: {
        height: 44,
        width:0.8*width,
        paddingLeft:44
    },
    input_icon: {
        height:30,
        width:28,
        marginLeft:8,
        position: 'absolute'
    },
    pass_icon: {
        width: 16,
        height: 10
    }
});
