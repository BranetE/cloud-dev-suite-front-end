import { Progress, ProgressProps } from 'antd'

export function ProgressIcon({ status }: { status?: string }): JSX.Element {
  const progressProps: ProgressProps = {
    type: 'circle',
    trailColor: '#a4a5a6',
    strokeWidth: 20,
    size: 14,
    showInfo: false,
  }
  if (status == 'OPEN') progressProps.percent = 0
  else if (status == 'DONE') progressProps.percent = 100
  else progressProps.percent = 50

  return <Progress {...progressProps} />
}
