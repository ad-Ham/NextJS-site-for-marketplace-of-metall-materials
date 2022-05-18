import Head from 'next/head'
import React from 'react'
import { MainPageHelp } from '../../components/help/MainPageHelp'
import Adbannertop from '/public/adbannertop.svg'
import Link from 'next/link'
import styles from "../../styles/help.module.scss"

export default function Help() {
    return (
        <React.Fragment>
            <div className={styles.adbannertop}>
                <Link href="https://www.example.com"><Adbannertop />
                </Link>
            </div>
                <div className={styles.content}>
                    <div className={styles.rightside}>
                        <MainPageHelp />
                    </div>
                </div>
        </React.Fragment>
            
    )
}