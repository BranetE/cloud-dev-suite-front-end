import { Form, Input, Button, DatePicker } from "antd";
import styles from "./CreateSprint.module.css"

type FieldType = {
    title: string,
    finishDate: string
}

const onFinish = () => {}
const onFinishFailed = () => {}
const onChange = () => {}

export function CreateSprint() {
    return (
        <div className={styles.container}>
            <Form
                name="basic"
                className={styles.createSprint}
                labelCol={{span: 10}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className={styles.separated}>Create Sprint</h2>


                <Form.Item<FieldType>
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Please input title!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Finish Date"
                    name="finishDate"
                    rules={[{ required: true, message: "Please input finish date!" }]}
                >
                    <DatePicker onChange={onChange} />
                </Form.Item>

                <Form.Item
                        style={{margin: 0}} 
                        wrapperCol={{ offset: 4, span: 16 }}
                    >
                        <Button className={styles.separated} type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
            </Form>
        </div>
    )
}