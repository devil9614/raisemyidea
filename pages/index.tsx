import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "./Login/Login";

const Home: NextPage = () => {
  return (
    <div>
      Testing the next js
      <Login />
    </div>
  );
};

export default Home;
