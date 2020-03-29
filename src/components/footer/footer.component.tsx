import * as React from "react";

import { IFooter } from "./footer";
import { Nav } from "../nav";

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Footer: React.FunctionComponent<IFooter.IProps> = (
  props
): JSX.Element => {
  return (
    <footer className="footer">
      <div className="safe-area footer__container">
        <div className="footer__left row">
          <div className="footer__text">
            <span>© 2020 Take my cup</span>
          </div>
          <Nav />
        </div>
        <div className="footer__right row">
          <span className="footer__text">Language</span>
          <TextField
              fullWidth
              variant="outlined"
              type="text"
              value="ru-RU"
              select
              onChange={console.log}
            >
              <MenuItem selected key="0" value="ru-RU">Ru</MenuItem>
              <MenuItem key="1" value="ua-UA">Ua</MenuItem>
              <MenuItem key="2" value="en-EN">En</MenuItem>
            </TextField>
        </div>
      </div>
    </footer>
  );
};

export { Footer };