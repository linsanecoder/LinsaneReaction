import React from 'react';
import './Collapse.css';

type Props = {
  id: string,
  label: string,
  children: JSX.Element;
};

class Collapse extends React.Component<Props> {
  render() {
    return (
      <div>
        <div id={"c" + this.props.id} className="collapsible"
          onClick={() => this.handleToggleCollapse("c" + this.props.id)}>{this.props.label}
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }

  handleToggleCollapse = (id: string) => {
    var toggle = document.getElementById(id);
    var content = document.getElementById(id)?.nextElementSibling;

    if (content != null) {
      toggle?.classList.toggle("active");

      if (content.className == "content") {
        content.className = "content_show";
      }
      else {
        content.className = "content";
      }
    }
  }
}



export default Collapse;