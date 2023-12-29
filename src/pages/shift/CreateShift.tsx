import { Form, Button, Select } from "antd";
import styles from "./CreateShift.module.css"

type FieldType = {
    shiftType: string
}

const types = [
    {
        value: "OFFICE",
        label: "Office"
    },
    {
        value: "REMOTE",
        label: "Remote"
    }
]

const onFinish = () => {}
const onFinishFailed = () => {}

export function CreateShift(): JSX.Element {
    return (
        <div className={styles.container}>
            <Form
                name="basic"
                className={styles.createShift}
                labelCol={{span: 12}}
                wrapperCol={{span: 16}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <h2 className={styles.separated}>Create Shift</h2>


                <Form.Item<FieldType>
                    label="Shift Type"
                    name="shiftType"
                    rules={[{ required: true, message: "Please input type!" }]}
                >
                    <Select defaultValue={'OFFICE'} options={types}/>
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