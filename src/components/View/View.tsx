import React from 'react';
// import PropTypes from 'prop-types';
import cn from 'classnames';



interface ViewProps {
  className?: string
  root?: boolean
  vertical?: boolean,
  fill?: boolean,
  scrollable?: boolean,
  // onEndReached: Function
  children: React.ReactNode
}

const View = React.forwardRef<HTMLDivElement, ViewProps>(({
  className,
  root = false,
  vertical = false,
  fill = false,
  scrollable = false,
  children
}: ViewProps, ref) => {
  return <div
    ref={ref}
    className={cn('view', className, root && 'view--root', vertical && 'view--vertical', fill && 'view--fill', scrollable && 'view--scrollable')}
  >
    {children}
  </div>;
});

// View.propTypes = {
//   root: PropTypes.bool,
//   vertical: PropTypes.bool,
//   fill: PropTypes.bool,
//   scrollable: PropTypes.bool,
//   onEndReached: PropTypes.func,
//   children: PropTypes.node
// };

export default View;
