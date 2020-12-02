import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import styles from './footer.module.css';

function PersonalData({ isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Protection des données</ModalHeader>
      <ModalBody>
        <h6 className={styles.textBold}>
          PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL
        </h6>
        <p>
          <b>1. Collecte des données personnelles</b>
          <br />
          Les données à caractère personnel collectées sur la Plateforme sont
          les suivantes :<br />
          <b>Ouverture de compte</b>
          <br />
          Lors de la création du compte de l&apos;utilisateur, ses nom, prénom,
          adresse électronique et date de naissance.
          <br />
          <b> Connexion </b>
          <br />
          Lors de la connexion de l&apos;utilisateur à la Plateforme, celle-ci
          enregistre notamment ses nom, prénom, données de connexion,
          d&apos;utilisation de localisation et des données relatives au
          paiement.
          <br />
          <b> Profil</b>
          <br />
          L&apos;utilisation des prestations prévues sur la Plateforme permet de
          renseigner un profil, pouvant comprendre une adresse et un numéro de
          téléphone.
          <br />
          <b> Communication</b>
          <br />
          Lorsque la Plateforme est utilisée pou communiquer avec d&apos;autres
          membres, les données concernant les communications de
          l&apos;utilisateur font l&apos;objet d&apos;une conservation
          temporaire.
          <br />
          <b> Cookies</b>
          <br />
          Les cookies sont utilisés dans le cadre de l&apos;utilisation du site.
          L&apos;utilisateur a la possibilité de désactiver les cookies à partir
          des paramètres de son navigateur.
        </p>
        <p>
          <b>2. Utilisation des données personnelles</b>
          <br /> Les données personnelles collectées auprès des utilisateurs ont
          pour objectif la mise à disposition des services de la Plateforme,
          leur amélioration et le maintien d&apos;un environnement sécurisé.
          <br />
          Plus précisément, les utilisations sont les suivantes :<br />- accès
          et utilisation de la Plateforme par l&apos;utilisateur;
          <br />- gestion du fonctionnement et optimisation de la Plateforme;
          <br />
          - organisation des conditions d&apos;utilisation des Services de
          paiement;
          <br />- vérification, identification et authentification des données
          transmises par l&apos;utilisateur;
          <br />- proposition à l&apos;utilisateur de la possibilité de
          communiquer avec d&apos;autres utilisateurs de la Plateforme;
          <br />- mise en oeuvre d&apos;une assistance utilisateurs; -
          personnalisation des services en affichant des publicités en fonction
          de l&apos;historique de navigation de l&apos;utilisateur, selon ses
          préférences;
          <br />- prévention et détection des fraudes, malwares (malicious
          softwares ou logiciels malveillants) et gestion des incidents de
          sécurité;
          <br />- gestion des éventuels litiges avec les utilisateurs;
          <br />- envoi d&apos;informations commerciales et publicitaires, en
          fonction des préférences de l&apos;utilisateur.
        </p>
        <p>
          <b>3. Partage des données personnelles avec des tiers</b>
          <br /> Les données personnelles peuvent être partagées avec des
          sociétés tierces, dans les cas suivants :<br />- quand
          l&apos;utilisateur utilise les services de paiement, pour la mise en
          oeuvre de ces services, la Plateforme est en relation avec des
          sociétés bancaires et financières tierces avec lesquelles elle a passé
          des contrats;
          <br /> - lorsque l&apos;utilisateur publie, dans les zones de
          commentaires libres de la Plateforme, des informations accessibles au
          public;
          <br /> - quand l&apos;utilisateur autorise le site web d&apos;un tiers
          à accéder à ses données;
          <br /> - quand la Plateforme recourt aux services de prestataires pour
          fournir l&apos;assistance utilisateurs, la publicité et les services
          de paiement. Ces prestataires disposent d&apos;un accès limité aux
          données de l&apos;utilisateur, dans le cadre de l&apos;exécution de
          ces prestations, et ont une obligation contractuelle de les utiliser
          en conformité avec les dispositions de la réglementation applicable en
          matière protection des données à caractère personnel;
          <br /> - si la loi l&apos;exige, la Plateforme peut effectuer la
          transmission de données pour donner suite aux réclamations présentées
          contre la Plateforme et se conformer aux procédures administratives et
          judiciaires;
          <br /> - si la Plateforme est impliquée dans une opération de fusion,
          acquisition, cession d&apos;actifs ou procédure de redressement
          judiciaire, elle pourra être amenée à céder ou partager tout ou partie
          de ses actifs, y compris les données à caractère personnel. Dans ce
          cas, les utilisateurs seraient informés, avant que les données à
          caractère personnel ne soient transférées à une tierce partie.
        </p>
        <p>
          <b>4. Sécurité et confidentialité</b>
          <br /> La Plateforme met en œuvre des mesures organisationnelles,
          techniques, logicielles et physiques en matière de sécurité du
          numérique pour protéger les données personnelles contre les
          altérations, destructions et accès non autorisés. Toutefois, il est à
          signaler qu&apos;internet n&apos;est pas un environnement complètement
          sécurisé et la Plateforme ne peut pas garantir la sécurité de la
          transmission ou du stockage des informations sur internet.
        </p>
        <p>
          <b>5. Mise en oeuvre des droits des utilisateurs</b>
          <br />
          En application de la réglementation applicable aux données à caractère
          personnel, les utilisateurs disposent des droits suivants :<br />- ils
          peuvent mettre à jour ou supprimer les données qui les concernent en
          se connectant à leur compte et en configurant les paramètres de ce
          compte;
          <br /> - ils peuvent supprimer leur compte, en écrivant à
          l&apos;adresse électronique suivante :
          <i>contact@crea-aquitaine.org</i> Il est à noter que les informations
          partagées avec d&apos;autres utilisateurs, comme les publications sur
          les forums, peuvent rester visibles du public sur la Plateforme, même
          après la suppression de leur compte;
          <br /> - ils peuvent exercer leur droit d&apos;accès, pour connaître
          les données personnelles les concernant, en écrivant à l&apos;adresse
          électronique suivante : <i>contact@crea-aquitaine.org</i>. Dans ce
          cas, avant la mise en oeuvre de ce droit, le site peut demander une
          preuve de l&apos;identité de l&apos;utilisateur afin d&apos;en
          vérifier l&apos;exactitude;
          <br /> - si les données à caractère personnel détenues par le site
          sont inexactes, ils peuvent demander la mise à jour des informations,
          en écrivant à l&apos;adresse électronique suivante :
          <i>contact@crea-aquitaine.org</i>;
          <br /> - les utilisateurs peuvent demander la suppression de leurs
          données à caractère personnel, conformément aux lois applicables en
          matière de protection des données, en écrivant à l&apos;adresse
          électronique suivante : <i>contact@crea-aquitaine.org</i>.
        </p>
        <p>
          <b>6. Évolution de la présente clause</b>
          <br /> La Plateforme se réserve le droit d&apos;apporter toute
          modification à la présente clause relative à la protection des données
          à caractère personnel à tout moment. Si une modification est apportée
          à la présente clause de protection des données à caractère personnel,
          la Plateforme s&apos;engage à publier la nouvelle version sur son
          site. La Plateforme informera également les utilisateurs de la
          modification par messagerie électronique, dans un délai minimum de 15
          jours avant la date d&apos;effet. Si l&apos;utilisateur n&apos;est pas
          d&apos;accord avec les termes de la nouvelle rédaction de la clause de
          protection des données à caractère personnel, il a la possibilité de
          supprimer son compte.
        </p>
      </ModalBody>
    </Modal>
  );
}

PersonalData.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default PersonalData;
