import PropTypes from 'prop-types';
import css from "./Section.module.css"; 
// import css from "@/components/Section/Section.module.css"; 


function Section({ title, children }) {
  return (
    <section>
      {title
        &&
        <h2
        // className={`${css.title} ${css.lugrasimoBold}`}
        className={css.titleLugrasimoBold}
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