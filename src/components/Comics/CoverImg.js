const CoverImg = ({ visible, alt, ...rest }) => (
  <img
    alt={alt}
    class={`w-full rounded-lg	transition-all ${
      visible ? 'opacity-10' : 'opacity-100'
    }`}
    {...rest}
  />
)

export default CoverImg
