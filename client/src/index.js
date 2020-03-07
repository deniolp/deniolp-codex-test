import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

let data;

const request = async (url, method = `GET`, body = null, headers = {}) => {
  try {
    const response = await fetch(url, {method, body, headers});

    if (!response.ok) {
      throw new Error(`Something wrong`);
    }
    return response.json();
  } catch (error) {}
};

const getData = async () => {
  data = await request(`http://localhost:5000`);
  ReactDOM.render(<App data={data}/>, document.getElementById('root'));
}

getData();
