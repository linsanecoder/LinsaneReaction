import React from 'react';

type Props = {
  title: string,
  desc: string;
};

class Details extends React.Component<Props> {
  render() {
    return (
      <div>
        <div className="nav-heading">{this.props.title}</div>
        <p>
          {this.props.desc}
        </p>
      </div>
    );
  }
}

export default Details;