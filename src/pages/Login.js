import React from 'react'
import { Row, Col, Form, Input } from 'antd'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from  'react-redux'
import {userLogin} from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';


import 'aos/dist/aos.css'; 
// ..
AOS.init();
function Login() {
   const  dispatch = useDispatch()
   const stateAlerts= useSelector(state=>state.alertsReducer) 
   console.log(stateAlerts)
    function onFinish (values){
        dispatch(userLogin(values))
   console.log(values)

    }
    return ( 
        <div className='login'>
            {/*loading== true &&  (<Spinner/>)*/} 

            <Row gutter={16} className='d-flex align-items-center'>
                <Col lg={16} style={{position:'relative'}} >
                    <img data-aos='slide-right'
                        data-aos-duration='1400'
                     src='https://images.unsplash.com/photo-1577152685445-ca48bed1b0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80 '/>

                    <h1 className='login-logo'>MyCars</h1>
                </Col>
                <Col lg={8} className='text-left'> 
<Form layout='vertical' className='login-from-p-5' onFinish={onFinish} >
                        <h1>Login</h1>
                        <hr />
                        <Form.Item name='username' label='Username' rules={[{ require: true }]}>
                            <Input />


                        </Form.Item>


                        <Form.Item name='password' label='Password' rules={[{ require: true }]}>
                            <Input />


                        </Form.Item>
                        <button claasName='btn1 mt-2 mb-2'> Login</button>
                       <hr/>

                       <Link to='/register'>Click Here to Register</Link>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}

export default Login 