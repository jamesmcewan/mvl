import Details from '../Details/Details';
import Creators from '../Creators/Creators';

const InfoWrapper = ({ children }) => <div>{children}</div>;

const InfoContainer = ({ children }) => <div>{children}</div>;

const InfoButton = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
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
