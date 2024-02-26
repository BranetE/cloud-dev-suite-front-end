import { TaskType } from 'types/TaskTypes'
import { ProgressIcon } from './ProgressIcon'
import { Divider, Flex, Select, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { taskApi } from 'api/taskAPI'

const { Title } = Typography

const statuses = [
  {
    label: 'Open',
    value: 'OPEN',
  },
  {
    label: 'In Progress',
    value: 'IN_PROGRESS',
  },
  {
    label: 'Done',
    value: 'DONE',
  },
]

interface ITask {
  task: TaskType
}

export function Task(props: ITask): JSX.Element {
  const [taskStatus, setTaskStatus] = useState<string>()

  useEffect(() => {
    setTaskStatus(props.task.status)
  }, [props.task.status])

  function StatusDropdown({ status }: { status?: string }): JSX.Element {
    return (
      <Select
        onChange={(option) => {
          setTaskStatus(option)
          taskApi.changeStatus(props.task.id.toString(), option)
        }}
        style={{ marginLeft: 10, minWidth: '150px' }}
        options={statuses}
        defaultValue={status}
      />
    )
  }

  return (
    <Flex justify="space-between">
      <Flex vertical style={{ alignItems: 'center', width: '40%' }}>
        <div>
          <Divider>Title</Divider>
          <Title level={4}>{props.task.title}</Title>
        </div>
        {props.task.finishTime ? (
          <div>
            <Divider>Finish Date</Divider>
            <Title level={4}>
              {new Date(props.task.finishTime).toLocaleDateString()}
            </Title>
          </div>
        ) : (
          <></>
        )}
        <Divider>Status</Divider>
        <div style={{ display: 'inline' }}>
          <ProgressIcon status={taskStatus} />
          <StatusDropdown status={taskStatus} />
        </div>
        <Divider />
      </Flex>
      <Flex
        vertical
        style={{ alignItems: 'center', marginLeft: 50, marginRight: 50 }}
      >
        <div>
          <Divider>Description</Divider>
          <Title level={5}>{props.task.description}</Title>
        </div>
        <div>
          <Divider>Comments</Divider>
        </div>
      </Flex>
    </Flex>
  )
}
