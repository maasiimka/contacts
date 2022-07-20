import React from "react";
import { NavLink } from "react-router-dom";
import preview from "../../icons/preview.png";
import example from "../../icons/example.jpg";
import routes from "../../routes";
import styles from "./homepage.module.css";
import { ReactComponent as DeleteIcon } from "../../icons/deleteIcon.svg";
import { ReactComponent as ChangeIcon } from "../../icons/changeIcon.svg";
import { ReactComponent as AddIcon } from "../../icons/addIcon.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as Logo } from "../../icons/logo.svg";

const loremIpsum = [
  {
    subtitle: "Interoperable",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate egestas turpis, sit amet cursus eros aliquet vehicula. Sed sollicitudin tempor diam, in blandit erat aliquam id. ",
  },
  {
    subtitle: "Lightning fast",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate egestas turpis, sit amet cursus eros aliquet vehicula. Sed sollicitudin tempor diam, in blandit erat aliquam id. ",
  },
  {
    subtitle: "Dependable",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate egestas turpis, sit amet cursus eros aliquet vehicula. Sed sollicitudin tempor diam, in blandit erat aliquam id. ",
  },
];

const IntroductionPage = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Store contacts in your phonebook</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vulputate egestas turpis, sit amet cursus eros aliquet vehicula.
          </p>
          <p>Sed sollicitudin tempor diam, in blandit erat aliquam id. </p>
          <NavLink
            exact
            to={routes.registration}
            className={styles.signupButton}
          >
            Sign up
          </NavLink>
        </div>
        <img src={preview} alt="prewiew" className={styles.heroImage} />
      </section>

      <section className={styles.descriptionSection}>
        <ul className={styles.descriptionList}>
          {loremIpsum.map(({ subtitle, text }) => (
            <li key={subtitle} className={styles.descriptionItem}>
              <h2>{subtitle}</h2>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.featuresSection}>
        <div>
          <h2 className={styles.featuresTitle}>Easy to manage your Contacts</h2>
          <ul className={styles.featuresList}>
            <li className={styles.featuresItem}>
              <span className={styles.featuresText}>Create</span>
              <AddIcon width="25" height="25" fill="#24B47E" />
            </li>
            <li className={styles.featuresItem}>
              <span className={styles.featuresText}>Change</span>
              <ChangeIcon width="25" height="25" fill="#24B47E" />
            </li>
            <li className={styles.featuresItem}>
              <span className={styles.featuresText}>Filter</span>
              <SearchIcon width="25" height="25" fill="#24B47E" />
            </li>
            <li className={styles.featuresItem}>
              <span className={styles.featuresText}>Delete</span>
              <DeleteIcon width="25" height="25" fill="#24B47E" />
            </li>
          </ul>
        </div>
        <img
          src={example}
          alt="example of app"
          className={styles.featuresImage}
        />
      </section>

      <section className={styles.footerSection}>
        <div className={styles.logo}>
          <Logo width="30" height="30" fill="#24B47E" />
          <span>PHONEBOOK</span>
        </div>
        <ul className={styles.authnav}>
          <li>
            <NavLink
              exact
              to={routes.registration}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Sign up
            </NavLink>
          </li>
          <li>or</li>
          <li>
            <NavLink
              exact
              to={routes.login}
              className={styles.link}
              activeClassName={styles.activeLink}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default IntroductionPage;
