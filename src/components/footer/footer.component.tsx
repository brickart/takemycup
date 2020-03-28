import * as React from "react";

import { IFooter } from "./footer";
import { Nav } from "../nav";

const Footer: React.FunctionComponent<IFooter.IProps> = (
  props
): JSX.Element => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <div className="copyright">
            <span>© 2019 Sportyvniy</span>
          </div>
          <Nav />
        </div>
        <div className="footer-right">
          <a href="#">Py</a>
        </div>
      </div>
    </footer>
  );
};

export { Footer };