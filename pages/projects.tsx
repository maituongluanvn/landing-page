import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@mui/styles';
// @material-ui/icons
import { Camera, Palette, Favorite } from '@mui/icons-material';
// core components
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Button from '@components/CustomButtons/Button';
import GridContainer from '@components/Grid/GridContainer';
import GridItem from '@components/Grid/GridItem';
import HeaderLinks from '@components/Header/HeaderLinks';
import NavPills from '@components/NavPills/NavPills';
import Parallax from '@components/Parallax/Parallax';

import styles from '@styles/jss/nextjs-material-kit/pages/profilePage';

const useStyles = makeStyles(styles as any);

export default function ProfilePage(props: any) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white',
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center" spacing={0} alignItems="center" justifyContent="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src="/img/faces/christian.jpg" alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Your project name here</h3>
                    <h6>Your project name here</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-twitter'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-instagram'} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={'fab fa-facebook'} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick
                Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid
                groove structure.{' '}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <GridContainer justify="center" alignItems="center" justifyContent="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <img alt="..." src="/img/examples/clem-onojegaw.jpg" className={navImageClasses} />
                    <img alt="..." src="/img/examples/clem-onojeghuo.jpg" className={navImageClasses} />
                    <img alt="..." src="/img/examples/cynthia-del-rio.jpg" className={navImageClasses} />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <img alt="..." src="/img/examples/mariya-georgieva.jpg" className={navImageClasses} />
                    <img alt="..." src="/img/examples/clem-onojegaw.jpg" className={navImageClasses} />
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
