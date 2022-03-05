import React, { useState } from 'react';
import { send } from 'emailjs-com';

import './contactme.css';
import Aside from './Aside'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

export default function Project() {
    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
    });

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const handleInput = (name, value) => {
        setToSend({ ...toSend, [name]: value });
        console.log(toSend)
    };

    const sendEmail = (e) => {
        send(
            'gmail',
            'template_9q9ripo',
            toSend,
            'H1n96WJh1ZD8qa-Wi'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }


    return (
        <section id="Contact-Me" className="card Contact-Me">
            <Aside />

            <div className="form-container">
                <p>Send me an email:</p>
                <Form id="form" {...layout} name="nest-messages" onFinish={sendEmail} >
                    <Form.Item
                        name="name"
                        label="Name"
                        value={toSend.name}
                        onChange={(event) => handleInput("name", event.target.value)}
                        rules={[
                            {
                                required: true,
                                message: "Name is required!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        value={toSend.email}
                        onChange={(event) => handleInput("email", event.target.value)}
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: "Invalid email!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Message"
                        value={toSend.message}
                        onChange={(event) => handleInput("message", event.target.value)}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" style={{ background: "#f12d51", borderColor: "rgba(140, 29, 50)" }} >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}