import { Button, Form, Input, Select } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import logo from 'assets/logo.png'
import styles from './RegisterPage.module.css'
import { authAPI } from 'api/authAPI'
import { EmployeeRegisterType } from 'types/EmployeeTypes'
import { useNavigate } from 'react-router-dom'

const onFinish = (request: EmployeeRegisterType) => {
  authAPI.register(request)
}

const onFinishFailed = () => {
  console.error('Didn`t manage to register employee')
}

const positions = [
  {
    value: 'MANAGER',
    label: 'Manager',
  },
  {
    value: 'DEVELOPER',
    label: 'Developer',
  },
  {
    value: 'DESIGNER',
    label: 'Designer',
  },
]

const experiences = [
  {
    value: 'JUNIOR',
    label: 'Junior',
  },
  {
    value: 'MIDDLE',
    label: 'Middle',
  },
  {
    value: 'SENIOR',
    label: 'Senior',
  },
]
export function RegisterPage(): JSX.Element {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <Form
        name="basic"
        className={styles.registerForm}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FormItem>
          <img className={styles.logo} src={logo} alt="CLOUD DEV SUITE" />
        </FormItem>

        <Form.Item<EmployeeRegisterType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your first name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your last name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="Position"
          name="position"
          rules={[{ required: true, message: 'Please input your position!' }]}
        >
          <Select defaultValue={'MANAGER'} options={positions} />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="experience"
          name="experience"
          rules={[{ required: true, message: 'Please input your position!' }]}
        >
          <Select defaultValue={'JUNIOR'} options={experiences} />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<EmployeeRegisterType>
          label="Confirm password"
          name="confirmPassword"
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(
                  new Error('The new password that you entered do not match!')
                )
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<EmployeeRegisterType> wrapperCol={{ offset: 6, span: 16 }}>
          <a onClick={() => navigate(`/login`)}>Already Have Account? Log In</a>
        </Form.Item>

        <Form.Item style={{ margin: 0 }} wrapperCol={{ offset: 5, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
