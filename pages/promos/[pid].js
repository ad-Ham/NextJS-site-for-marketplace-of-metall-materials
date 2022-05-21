import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/Layout/MainLayout'
import { MainPromos } from '../../components/mainpage/MainPromos'
import { MainPageNews } from '../../components/mainpage/MainPageNews'
import { PromoBlock } from '../../components/promos/singlePromos/PromoBlock'
import { MorePromosCard } from '../../components/promopage/MorePromosCard'
import { Adbannertop } from '../../components/Adbannertop'
import Adbannerside from '../../public/adbannerside.svg'
import Link from 'next/link'
import styles from '../../styles/promopage.module.scss'

const Index = () => {
	return (<>
		<div>
			<PromoBlock />
		</div>
	</>)
}

export default Index
