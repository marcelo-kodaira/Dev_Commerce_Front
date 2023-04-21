import React from 'react'
import { Blur, Circle, StyledSection } from './styles'

interface IllustrationProps {
    color: string;
  }

const Illustration = (props:IllustrationProps) => {
  return (
    <>
    <StyledSection>
        <Circle color={props.color}>
        </Circle>
    <Blur>

    </Blur>
    </StyledSection>
    </>
  )
}

export default Illustration