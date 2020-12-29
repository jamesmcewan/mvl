const CoverImg = ({ isVisible, alt, ...rest }) => (
  <img
    alt={alt}
    className={`w-full rounded-lg	transition-all ${
      isVisible ? 'opacity-10' : 'opacity-100'
    }`}
    {...rest}
  />
)

export default CoverImg
