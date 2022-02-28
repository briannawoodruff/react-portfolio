import './contactme.css';
import ProfileImg from '../../assets/images/headshot2022.jpg'
import Resume from '../../assets/files/Brianna-Woodruff_Resume-2022.pdf'
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';

export default function Project() {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const onFinish = (values) => {
        console.log(values);
    }


    return (
        <section id="Contact-Me" className="card Contact-Me">
            <aside>
                <div className="avatar">
                    <img src={ProfileImg} height={300} width={300} className="profile-img" alt="profileimg" />
                </div>
                <div className="aboutlinks">
                    <a href={Resume} download> Resume
                    </a>
                    <a target="_blank" href="https://github.com/briannawoodruff"> GitHub</a>
                    <a target="_blank" href="https://linkedin.com/in/briannaewoodruff/"> LinkedIn</a>
                    <a target="_blank" href="https://vimeo.com/294283512/"> Vimeo Reel</a>
                </div>
            </aside>

            <div className="form">
                <p>Send me an email:</p>
                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
                    <Form.Item
                        name={['user', 'name']}
                        label="Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'message']} label="Message">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" style={{ background: "#f12d51", borderColor: "rgba(140, 29, 50)"}} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}