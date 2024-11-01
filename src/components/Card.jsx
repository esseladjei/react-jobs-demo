import PropTypes from 'prop-types';
import clsx from 'clsx';
export const Card = ({ children, classes='' }) => {
   return (
      <div className={clsx(`${classes} p-6 rounded-lg shadow-md`)}>
         {children}
      </div>
   );
};
Card.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.string
}
