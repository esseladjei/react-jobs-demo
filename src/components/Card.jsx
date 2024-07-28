import React from 'react';
import clsx from 'clsx';
export const Card = ({ children, classes }) => {
   return (
      <div className={clsx(`${classes} p-6 rounded-lg shadow-md`)}>
         {children}
      </div>
   );
};
