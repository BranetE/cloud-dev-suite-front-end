import { Button, Form, Input } from 'antd'
import styles from './LoginPage.module.css'
import FormItem from 'antd/es/form/FormItem'
import logo from 'assets/logo.png'
import { authAPI } from 'api/authAPI'
import { useAuth } from 'provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

type FieldType = {
  email: string
  password: string
}

export function LoginPage(): JSX.Element {
  const { login } = useAuth()
  const navigate = useNavigate()

  const onFinish = (values: FieldType) => {
    authAPI.login(values).then((res) => {
      login(res.data.accessToken)
    })
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        className={styles.loginForm}
        labelCol={{ span: 7 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem>
          <img className={styles.logo} src={logo} alt="CLOUD DEV SUITE" />
        </FormItem>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> wrapperCol={{ offset: 5, span: 16 }}>
          <a onClick={() => navigate(`/register`)}>Got no account? Register</a>
        </Form.Item>

        <Form.Item style={{ margin: 0 }} wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
