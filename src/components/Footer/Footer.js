const { Typography } = require("@mui/material")

import styles from '../../../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Typography color="secondary" variant="h5">Developed by:</Typography>
        </footer>
    )
}


export default Footer
