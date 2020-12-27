import Details from '../Details/Details'
import Creators from '../Creators/Creators'
import InfoWrapper from './InfoWrapper'
import InfoContainer from './InfoContainer'
import InfoButton from './InfoButton'

const Info = ({ visible, setVisible, creators, ...rest }) => (
  <InfoWrapper {...{ visible }}>
    <InfoContainer>
      <Details {...rest} />
      <Creators {...{ creators }} />
      <InfoButton onClick={() => setVisible(!visible)}>close</InfoButton>
    </InfoContainer>
  </InfoWrapper>
)

export default Info
