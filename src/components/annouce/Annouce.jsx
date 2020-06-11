import React from 'react';
// import styles from './Annouce.module.css';

class Annouce extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <p>ID:</p>
          <p>Ville:</p>
          <p>Secteur d&#39;activité:</p>
        </div>

        <div>
          <h3>TITRE ANNONCE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            laborum mollitia atque reiciendis repellat saepe harum nam amet,
            odio vel unde nulla perspiciatis doloremque magnam fugiat. Non
            adipisci provident in.
          </p>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          rem repudiandae voluptate animi eligendi veniam sequi. Consequuntur
          libero reiciendis quisquam ipsum soluta nemo, earum repellat quibusdam
          beatae! Doloremque, ullam inventore.
        </div>
        <button type="button">Postuler</button>
      </div>
    );
  }
}

export default Annouce;
