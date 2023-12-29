import { Form, Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import styles from "./CreateTask.module.css"

type FieldType = {
    title: string,
    description: string,
}

const onFinish = () => {}
const onFinishFailed = () => {}

export function CreateTask(): JSX.Element {
    return(
        <div className={styles.container}>
            <Form
                name="basic"
                className={styles.createTask}
                labelCol={{span: 10}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className={styles.separated}>Create Task</h2>


                <Form.Item<FieldType>
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: "Please input your email!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: "Please input your first name!" }]}
                >
                    <TextArea rows={4} placeholder="maxLength is 500" maxLength={500} />
                </Form.Item>

                <Form.Item
                    style={{margin: 0}} 
                    wrapperCol={{ offset: 5, span: 16 }}
                >
                    <Button className={styles.separated} type="primary" htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}