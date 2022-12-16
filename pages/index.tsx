import Head from 'next/head';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Header from '@components/Header/Header';
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          This is title
        </Typography>
        <Divider />
        content
      </Grid>
    </>
  );
}
