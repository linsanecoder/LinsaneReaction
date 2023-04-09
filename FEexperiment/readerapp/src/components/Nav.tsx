import React from 'react';
import './Nav.css';

type Props = {
  title: string,
  children?: JSX.Element | JSX.Element[];
};

class Nav extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="nav-heading">{this.props.title}</div><br/>
        <div className="flex-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Nav;