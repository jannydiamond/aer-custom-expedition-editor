import styled from 'styled-components/macro'

const Wrapper = styled('div')`
  display: flex;

  @media all and (max-width: 920px) {
    flex-direction: column;
  }
`

export default Wrapper
