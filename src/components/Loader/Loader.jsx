import { Dna } from 'react-loader-spinner';
function Loader({ visible }) {
  return (
    <Dna
      visible={visible}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      wrapperClass="dna-wrapper"
    />
  );
}

export default Loader;
