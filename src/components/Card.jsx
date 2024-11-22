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
   children: PropTypes.oneOfType([
      PropTypes.element, // Single React element
      PropTypes.node, // Any renderable content including strings, numbers, etc.
   ]),
   classes: PropTypes.string,
};
