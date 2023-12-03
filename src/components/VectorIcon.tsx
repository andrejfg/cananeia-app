import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

type FeatherIconName = React.ComponentProps<typeof Feather>['name']
type MaterialIconsName = React.ComponentProps<typeof MaterialIcons>['name']
type MaterialCommunityIconName = React.ComponentProps<
  typeof MaterialCommunityIcons
>['name']

/**
 * Renders a vector icon based on the provided props.
 * @param {object} props - The props for the vector icon component.
 * @param {string} props.name - The name of the icon from the Feather, MaterialCommunityIcons, or MaterialIcons library.
 * @param {string} props.color - The color of the icon.
 * @param {number} props.size - The size of the icon.
 * @returns The rendered vector icon component.
 */
export default function VectorIcon(props: {
  name: FeatherIconName | MaterialCommunityIconName | MaterialIconsName
  color: string
  size: number
}) {
  const name = props.name as string

  if (Object.keys(Feather.glyphMap).includes(props.name)) {
    return <Feather {...props} name={name as FeatherIconName} />
  }

  if (Object.keys(MaterialCommunityIcons.glyphMap).includes(props.name)) {
    return (
      <MaterialCommunityIcons
        {...props}
        size={props.size + 4}
        name={name as MaterialCommunityIconName}
      />
    )
  }

  if (Object.keys(MaterialIcons.glyphMap).includes(props.name)) {
    return <MaterialIcons {...props} name={name as MaterialIconsName} />
  }
}
