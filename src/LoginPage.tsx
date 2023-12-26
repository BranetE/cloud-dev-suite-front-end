import { Button, Form, Input} from "antd";
import "./LoginPage.css";
import FormItem from "antd/es/form/FormItem";
import logo from "./assets/logo.png";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  email?: string;
  password?: string;
  registerLink?: string;
};

export function LoginPage(): JSX.Element {
  return (
    <Form
      name="basic"
      className="loginForm"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <FormItem>
        <img className="logo" src={logo} alt="CLOUD DEV SUITE" />
      </FormItem>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item<FieldType>
        wrapperCol={{ offset: 7, span: 16 }}
        >
        <a>Got no account? Register</a>
      </Form.Item>

      <Form.Item
        style={{margin: 0}} 
        wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
