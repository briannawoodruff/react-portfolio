import './contactme.css';
import Aside from './Aside'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

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
            <Aside />

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
                        <Button type="primary" style={{ background: "#f12d51", borderColor: "rgba(140, 29, 50)" }} htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </section>
    )
}