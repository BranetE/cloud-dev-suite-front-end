import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import styles from "./CreateProject.module.css"

type FieldType = {
    title?: string,
    description?: string,
    status?: string,
    startDate?: string
    responsibleEmployee?: {
        id: number,
        firstName: string,
        lastName: string,
    }
}

const onFinish = () => {}
const onFinishFailed = () => {}

export function CreateProject(): JSX.Element {

    const [teamLeads, setteamLeads] = useState();

    return (
        <div className={styles.container}>
            <Form
                name="basic"
                className={styles.createProject}
                labelCol={{span: 10}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className={styles.separated}>Create Project</h2>


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

                <Form.Item<FieldType>
                    label="Status"
                    name="status"
                    rules={[{ required: true, message: "Please input your last name!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Start Date"
                    name="startDate"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Team Lead"
                    name="responsibleEmployee"
                    rules={[{ required: true, message: "Please confirm your password!" }]}
                >
                    <Select options={teamLeads}/>
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