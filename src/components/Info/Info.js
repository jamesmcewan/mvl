import styled from 'styled-components';
import Details from '../Details/Details';
import Creators from '../Creators/Creators';

const InfoWrapper = ({ children }) => <div>{children}</div>;

const InfoContainer = ({ children }) => <div>{children}</div>;

const InfoButton = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

const Info = ({ visible, setVisible, creators, ...rest }) => {
  return (
    <InfoWrapper {...{ visible }}>
      <InfoContainer>
        <Details {...rest} />
        <Creators {...{ creators }} />
        <InfoButton onClick={() => setVisible(!visible)}>close</InfoButton>
      </InfoContainer>
    </InfoWrapper>
  );
};

export { InfoWrapper, InfoContainer, InfoButton };
export default Info;
