import type {NextPage} from 'next'
import Head from 'next/head'
import Button from "../components/Atoms/Button/Button";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/pages/Home.module.scss'
import React from 'react';
import ImageContainer from "../components/Atoms/ImageContainer/ImageContainer";
import {Shape, Size} from "../lib/enums";
import colorLogo from '../public/e2eLogoColor.png'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>E2E</title>
                <meta name="description" content="Le peer-to-peer learning à l'école obligatoire"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <div style={{height: 200, width: '100%', position: "relative"}}>
                    <Image src={colorLogo} layout={"fill"} objectFit={"contain"}/>
                </div>
                <div>
                    <p>
                        Bienvenue sur e2e, plateforme d’entraide entre élèves/étudiants.
                    </p>
                    <p>
                        En vous inscrivant ici, vous pourrez accéder à une liste de personnes qui soit peuvent vous
                        aider, soit ont besoin de votre aide.
                    </p>
                    <p>
                        Nous vous invitons à vous inscrire en cliquant sur le lien ci-dessous.
                    </p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button styleClass="btn">Se connecter</Button>
                    <Link href={'#'}>Créer un compte</Link>
                </div>
            </main>
        </div>
    )
}

export default Home
