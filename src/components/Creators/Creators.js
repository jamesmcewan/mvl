import Creator from 'Creator';

const Creators = ({ creators }) => {
  return <ul class="p-0">{creators?.items?.map(Creator)}</ul>;
};

export default Creators;
