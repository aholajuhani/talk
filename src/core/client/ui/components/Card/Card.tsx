import cn from "classnames";
import { withStyles } from "coral-ui/hocs";
import React from "react";
import { FunctionComponent, ReactNode } from "react";

import styles from "./Card.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the component.
   */
  children: ReactNode;
  /**
   * Convenient prop to override the root styling.
   */
  className?: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes: typeof styles;
}

const Card: FunctionComponent<CardProps> = props => {
  const { className, classes, children, ...rest } = props;

  const rootClassName = cn(classes.root, className);

  return (
    <div className={rootClassName} {...rest}>
      {children}
    </div>
  );
};

const enhanced = withStyles(styles)(Card);
export default enhanced;
