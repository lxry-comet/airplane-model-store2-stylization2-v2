import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <section>
      {title
        &&
        <h2
        className='titleLugrasimoBold'
          // style={{
          //   marginBottom: 24,
          //   fontSize: 48,
          //   textAlign: 'center',
          //   color: "darkred",
          // }}
        >
          {title}
        </h2>} 
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;