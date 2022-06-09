import { MainLayout } from '../../../components/Layout/MainLayout'
import { Adbannertop } from '../../../components/Adbannertop'
import { useState } from 'react';
const axios = require('axios').default;
import styles from '../../../components/promopage/PromoBlock.module.scss'
import { Card, Input,Grid, Select,  Image, Text, Badge, Button, Group, useMantineTheme, Textarea } from '@mantine/core';
import { PromosMultiSelect } from '../../../components/promos/PromosMultiSelect'
import { PromosAdd } from '../../../components/promos/PromosAdd'


const AddPromo = ({ user }) => {
	return (<>
		<PromosAdd user={user}/>
	</>)
}

export default AddPromo;