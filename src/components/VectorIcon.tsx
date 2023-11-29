import Icon from '@expo/vector-icons/Feather'

export default function VectorIcon(props: {
  name: React.ComponentProps<typeof Icon>['name']
  color: string
  size: number
}) {
  return <Icon style={{ marginBottom: -3 }} {...props} />
}
