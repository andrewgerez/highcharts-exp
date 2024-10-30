import { Description, Title, Wrapper } from './styles'
import { CustomChartTitleProps } from './types'

function CustomChartTitle({ title, description }: CustomChartTitleProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

export default CustomChartTitle
