import { AppBar } from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ProductCard from "../components/product/product"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Sell to Go!</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
      
			<main className={styles.main}>
      <AppBar>MENU</AppBar>
      <div>
        <ProductCard></ProductCard>
      </div>
			</main>
		</div>
	);
}
