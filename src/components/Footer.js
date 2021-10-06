import React, { useState } from "react";
import { Row } from "react-grid-system";

//import css
import "../components/assets/css/Footer.css"

const styles = {
  grid: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
  },
  col: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

function Footer() {
  return (
    <>
      <Row style={styles.row}>
        <footer className="footer_">
          <p>&copy; 2021 - Todos os direitos reservados à Vitória Pinho</p>
        </footer>
      </Row>
    </>
  );
}

export default Footer;
