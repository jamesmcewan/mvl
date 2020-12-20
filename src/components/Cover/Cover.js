import ProgressiveImage from 'react-progressive-image';
import placeHolder from '../../images/placeholder.jpg';
import getCover from '../../functions/getCover';

const CoverButton = ({ children }) => (
  <button class="p-0 m-0 bg-transparent border-none block w-full">
    {children}
  </button>
);

const Img = ({ visible, alt, ...rest }) => (
  <img
    alt={alt}
    class={`w-full rounded-lg	transition-all ${
      visible ? 'opacity-10' : 'opacity-100'
    }`}
    {...rest}
  />
);

const Cover = ({ thumbnail, title, visible, setVisible }) => {
  return (
    <CoverButton onClick={() => setVisible(!visible)}>
      <ProgressiveImage src={getCover(thumbnail)} placeholder={placeHolder}>
        {(src) => <Img src={src} alt={title} visible={visible} />}
      </ProgressiveImage>
    </CoverButton>
  );
};

export { CoverButton, Img };
export default Cover;
