import React from 'react'
import Layout from './src/components/layout'
// import { Provider } from "react-redux";
// import store from "./src/store";

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
