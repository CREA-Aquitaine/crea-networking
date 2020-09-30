import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

function LegalMentions({ isOpen, toggle }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Mentions légales</ModalHeader>
      <ModalBody>
        Le présent site NETWORKING TRANSFRONTALIER, n&#39;est pas marchand.
        Aucune vente, aucune transaction ne peut passer par lui. Ce site est
        dédié uniquement à la mise en relation de partenaires : entreprises,
        demandeurs d&#39;emplois, offreurs d&#39;emplois, écoles et étudiants en
        recherche de stages ou d&#39;emplois. Les informations recueillies sur
        ce formulaire sont enregistrées dans un fichier informatisé par
        l&#39;association loi 1901 CREA : &quot;club des créateurs, et
        repreneurs d&#39;entreprises aquitains&quot; - sis 1 rue de DONZAC -
        64100 BAYONNE, numéro INSEE 394 366 140 00025 pour faire paraître les
        annonces utiles aux relations transfrontalières et plus généralement les
        informations nécessaires à son fonctionnement. Ces annonces concernent
        la recherche de partenaires inter entreprise, d&#39;emploi ou
        d&#39;offre d&#39;emploi, de communication inter école ou de recherche
        de stages par des étudiants. Aucune utilisation commerciale des données
        et des fichiers n&#39;est autorisée. La base légale du traitement est
        gérée par l&#39;administrateur ci- dessus désigné. Les données
        collectées ne seront communiquées qu&#39;aux seuls destinataires définis
        par l&#39;annonceur lui-même et ne pourront être consultés par des tiers
        qu&#39;avec le consentement éclairé de l&#39;annonceur. Les données sont
        conservées pendant d&#39;une année et seront an suite détruites après ce
        délai. Vous pouvez accéder aux données vous concernant, les rectifier,
        demander leur effacement ou exercer votre droit à la limitation du
        traitement de vos données. Vous pouvez retirer à tout moment votre
        consentement au traitement de vos données ; Vous pouvez également vous
        opposer au traitement de vos données ; Vous pouvez également exercer
        votre droit à la portabilité de vos données ; Vous pouvez consulter le
        site cnil.fr pour plus d’informations sur vos droits. Pour exercer ces
        droits ou pour toute question sur le traitement de vos données dans ce
        dispositif, vous pouvez contacter le service du CREA à l&#39;adresse
        sus-indiquée, ou par courriel : contact@crea-aquitaine.org, ou par
        téléphone au : (33) 05 64 11 52 36. L&#39;administrateur se réserve le
        droit de supprimer toute annonce non-conforme à son éthique, à teneur :
        politique, religieuse ou confessionnelle et plus généralement toutes
        celles contraire ou bonnes mœurs. Si vous estimez, après nous avoir
        contactés, que vos droits « Informatique et Libertés » ne sont pas
        respectés, vous pouvez adresser une réclamation à la CNIL. Notre
        formulaire de collecte renseigne via des astérisques, les données dont
        la fourniture est obligatoire de celles dont la fourniture est
        facultative et précisez les conséquences éventuelles en cas de
        non-fourniture des données.
      </ModalBody>
    </Modal>
  );
}

LegalMentions.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default LegalMentions;
