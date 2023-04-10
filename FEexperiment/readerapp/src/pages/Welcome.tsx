import React from "react";
import { useParams } from "react-router";
import { Link } from 'react-router-dom';

export default function Welcome() {
    const { name = 'world'} = useParams();

    return (
      <>
      <div>hello {name}</div>
      <Link to="/">Home</Link>
      </>
    );
}
