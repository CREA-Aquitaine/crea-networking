import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import styles from './footer.module.css';

function LegalMentions({ isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Mentions légales</ModalHeader>
      <ModalBody>
        <h6 className={styles.textBold}>
          MENTIONS LÉGALES ET CONDITIONS D&apos;UTILISATION DU SITE
        </h6>
        <p>
          La poursuite de la navigation sur ce site vaut acceptation sans
          réserve des dispositions et conditions d&apos;utilisation qui suivent.
        </p>
        <p>
          <b>Article 1 Informations légales</b>
          <br /> <b>1.1 Site</b> : networking.crea-aquitaine.org
          <br /> <b>1.2 Editeur</b> : Association CREA : &quot;Club des
          Créateurs, et repreneurs d&apos;Entreprises Aquitains&quot;
          Association Loi 1901, dont le siège social est situé 1 rue de DONZAC -
          64100 BAYONNE, numéro INSEE 394 366 140 00025
          <br /> <b>Numéro de téléphone</b> : 05.64.11.52.36
          <br /> <b>Adresse de courrier électronique</b> :
          contact@crea-aquitaine.org
          <br />
          <b>Directeur de publication</b> : Le ou la Président (te) de
          l&apos;Association CREA
          <br /> <b>1.3 Conception et réalisation</b> : WILD CODE SCHOOL
          <br /> <b>1.4 Hébergeur </b>: OVH SAS au capital de 10 069 020 € RCS
          Lille Métropole 424 761 419 00045 Code APE 2620Z N° TVA : FR 22 424
          761 419 Siège social : 2 rue Kellermann - 59100 Roubaix - France
        </p>
        <p>
          <b>Article 2 Accès au site</b>
          <br /> Le site est exclusivement dédié à la mise en relation de
          partenaires entreprises, demandeurs d&apos;emplois, offreurs
          d&apos;emplois, écoles, étudiants en recherche de stages ou
          d&apos;emplois. Les annonces parues sur le site concernent la
          recherche de partenaires inter entreprise, d&apos;emplois ou
          d&apos;offres d&apos;emplois, de communications inter écoles ou de
          recherches de stages par des étudiants.
          <br /> Les utilisateurs du site s&apos;engagent à ne pas utiliser ce
          site et les informations ou données qui y figurent à des fins
          commerciales, politiques, publicitaires et pour toute forme de
          sollicitation commerciale et notamment l&apos;envoi de courriers
          électroniques non sollicités.
        </p>
        <p>
          <b>Article 3 Contenu du site</b>
          <br /> Toutes les marques, photographies, textes, commentaires,
          illustrations, images animées ou non, séquences vidéo, sons, ainsi que
          toutes les applications informatiques qui pourraient être utilisées
          pour faire fonctionner ce site et plus généralement tous les éléments
          reproduits ou utilisés sur le site sont protégés par les lois en
          vigueur au titre de la propriété intellectuelle.
          <br /> Ils sont la propriété pleine et entière de l&apos;éditeur ou de
          ses partenaires. Toute reproduction, représentation, utilisation ou
          adaptation, sous quelque forme que ce soit, de tout ou partie de ces
          éléments, y compris les applications informatiques, sans l&apos;accord
          préalable et écrit de l&apos;éditeur, sont strictement interdites. Le
          fait pour l&apos;éditeur de ne pas engager de procédure dès la prise
          de connaissance de ces utilisations non autorisées ne vaut pas
          acceptation desdites utilisations et renonciation aux poursuites.
        </p>
        <p>
          <b>Article 4 - Gestion du site</b>
          <br /> Pour la bonne gestion du site, l&apos;éditeur pourra à tout
          moment :<br /> - suspendre, interrompre ou de limiter l&apos;accès à
          tout ou partie du site, réserver l&apos;accès au site, ou à certaines
          parties du site, à une catégorie déterminée d&apos;internaute;
          <br /> - supprimer toute information pouvant en perturber le
          fonctionnement ou entrant en contravention avec les lois nationales ou
          internationales, ou avec les règles de la Nétiquette;
          <br /> - suspendre le site afin de procéder à des mises à jour.
        </p>
        <p>
          <b>Article 5 - Responsabilités</b>
          <br /> La responsabilité de l&apos;éditeur ne peut être engagée en cas
          de défaillance, panne, difficulté ou interruption de fonctionnement,
          empêchant l&apos;accès au site ou à une de ses fonctionnalités.
          <br /> Le matériel de connexion au site que vous utilisez est sous
          votre entière responsabilité. Vous devez prendre toutes les mesures
          appropriées pour protéger votre matériel et vos propres données
          notamment d&apos;attaques virales par Internet. Vous êtes par ailleurs
          le seul responsable des sites et données que vous consultez.
          <br />
          L&apos;éditeur ne pourra être tenu responsable en cas de poursuites
          judiciaires à votre encontre :<br /> - du fait de l&apos;usage du site
          ou de tout service accessible via Internet;
          <br /> - du fait du non-respect par vous des présentes conditions
          générales.
          <br /> L&apos;éditeur n&apos;est pas responsable des dommages causés à
          vous-même, à des tiers et/ou à votre équipement du fait de votre
          connexion ou de votre utilisation du site et vous renoncez à toute
          action contre lui de ce fait.
          <br /> Si l&apos;éditeur venait à faire l&apos;objet d&apos;une
          procédure amiable ou judiciaire à raison de votre utilisation du site,
          il pourra se retourner contre vous pour obtenir indemnisation de tous
          les préjudices, sommes, condamnations et frais qui pourraient découler
          de cette procédure.
        </p>
        <p>
          <b>Article 6 - Liens hypertextes</b>
          <br /> La mise en place par vous de tous liens hypertextes vers tout
          ou partie du site est strictement interdite, sauf autorisation
          préalable et écrite de l&apos;éditeur, sollicitée par courriel à
          l&apos;adresse suivante : <i>contact@crea-aquitaine.org.</i>
          <br /> L&apos;éditeur est libre de refuser cette autorisation sans
          avoir à justifier de quelque manière que ce soit sa décision. Dans le
          cas où l&apos;éditeur accorderait son autorisation, celle-ci
          n&apos;est dans tous les cas que temporaire et pourra être retirée à
          tout moment, sans obligation de justification à la charge de
          l&apos;éditeur.
          <br /> Dans tous les cas, tout lien devra être retiré sur simple
          demande de l&apos;éditeur.
          <br /> Toute information accessible via un lien vers d&apos;autres
          sites n&apos;est pas sous le contrôle de l&apos;éditeur qui décline
          toute responsabilité quant à leur contenu.
        </p>
        <p>
          <b>Article 7 - Cookies</b>
          <br /> Le site peut collecter automatiquement des informations
          standards. Toutes les informations collectées indirectement ne seront
          utilisées que pour suivre le volume, le type et la configuration du
          trafic utilisant ce site, pour en développer la conception et
          l&apos;agencement et à d&apos;autres fins administratives et de
          planification et plus généralement pour améliorer le service que nous
          vous offrons.
          <br /> L&apos;utilisateur a la possibilité de désactiver les cookies à
          partir des paramètres de son navigateur.
        </p>
        <p>
          <b>Article 8 - Loi applicable</b>
          <br /> Les présentes conditions d&apos;utilisation du site sont régies
          par la loi française et soumises à la compétence des tribunaux de
          BAYONNE, sous réserve d&apos;une attribution de compétence spécifique
          découlant d&apos;un texte de loi ou réglementaire particulier.
        </p>
        <p>
          <b>Article 9 - Contactez-nous</b>
          <br /> Pour toute question, information sur les services présentés sur
          le site, ou concernant le site lui-même, vous pouvez laisser un
          message à l&apos;adresse suivante : <i>contact@crea-aquitaine.org.</i>
        </p>
      </ModalBody>
    </Modal>
  );
}

LegalMentions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default LegalMentions;
