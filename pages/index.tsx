import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@mui/styles';

// @material-ui/icons

// core components
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import GridContainer from '@components/Grid/GridContainer';
import GridItem from '@components/Grid/GridItem';
import Button from '@components/CustomButtons/Button';
import HeaderLinks from '@components/Header/HeaderLinks';
import Parallax from '@components/Parallax/Parallax';

import styles from '@styles/jss/nextjs-material-kit/pages/landingPage';

// Sections for this page
import ProductSection from '../pages-sections/LandingPage-Sections/ProductSection';
import TeamSection from '../pages-sections/LandingPage-Sections/TeamSection';
import WorkSection from '../pages-sections/LandingPage-Sections/WorkSection';

const dashboardRoutes: any = [];

const useStyles = makeStyles(styles as any);

export default function LandingPage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Your logo here"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold title, that{"'"}s why we added this text
                here. Add here all the information that can make you or your product create the first impression.
              </h4>
              <br />
              <Button color="danger" size="lg" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
