import React from 'react';
import { useLoaderData } from 'react-router';

export default function About() {
  const data = useLoaderData();
  
  return <div>About {JSON.stringify(data)}</div>
}
