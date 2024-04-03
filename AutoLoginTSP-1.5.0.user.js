// ==UserScript==
// @name         AutoLoginTSP
// @namespace    https://github.com/NoLilypad/AutoLoginTSP/
// @version      1.5.0
// @description  Autologin les services TSP
// @author       NoLilypad

// @include      https://moodle.imtbs-tsp.eu/*
// @include      *moodle.imtbs-tsp.eu/local/login/index.php*
// @include      *SAML2*
// @include      *OpDotNet/Noyau/Login.aspx*
// @include      *cas6*
// @include      https://gitlabens.imtbs-tsp.eu/users/sign_in
// @include      https://shibds.tem-tsp.eu*

// @icon          data:image/png;base64,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
// @grant        none
// ==/UserScript==






//     ==========================
//     ========Variables=========
//     ==========================

// Réglages
const idAutocomplete = true; // Pour utiliser un gestionnaire de mot de passe tiers

// Target strings pour la détection du site
const targetSI = "https://si-etudiants.imtbs-tsp.eu/OpDotNet/Noyau/Login.aspx?"; // SI Etudiant
const targetPartage = "SAML2";                                                   // Partage d'information
const targetMoodle = "https://moodle.imtbs-tsp.eu/";                             // Moodle
const targetCAS = "https://cas6.imtbs-tsp.eu/cas/login";                         // CAS
const targetGitlab = "https://gitlabens.imtbs-tsp.eu/users/sign_in";             // GitLab
const targetShibboleth = "https://shibds.tem-tsp.eu"                             // Shibboleth



//     ==========================
//     ==Stratégies d'autologin==
//     ==========================

// Stratégie d'autologin du SI
function stratSI(){
    // Fonction appellée normalement lors du clic sur le bouton
    try{ GetProvidersUri("SAMLv2ProviderConfiguration");} catch(e) {}
}

// Stratégie d'autologin du Partage d'Information
function stratPartage(){
    // Tentative avec le bouton en français
    try{ document.querySelector('input[type="submit"][value="Accepter"]').click();} catch(e) {}
    // Tentative avec le bouton en anglais
    try{ document.querySelector('input[type="submit"][value="Accept"]').click();} catch(e) {}
}

// Stratégie d'autologin de Moodle
function stratMoodle(){
    // String pour la détection de la page
    const connectionFr = "Connexion";
    const connectionEn = "Log in";
    const federatedFr = "Compte fédéré";
    const federatedEn = "Federated account";

    // Détection bilingue des strings dans la page
    const foundConnection = document.body.textContent.includes(connectionFr) || document.body.textContent.includes(connectionEn);
    const foundFederatedAccount = document.body.textContent.includes(federatedFr) || document.body.textContent.includes(federatedEn);

    // Suivant la position dans la page effectue l'action indiquée
    if (foundConnection){
        // Va sur la page de connexion de Moodle
        window.location.href = 'https://moodle.imtbs-tsp.eu/login/index.php';
    }
    if (foundFederatedAccount){
        // Va sur la page du CAS de TSP
        try{ window.location.href = 'https://moodle.imtbs-tsp.eu/Shibboleth.sso/Login?target=/auth/shibboleth/index.php&providerId=https://idpr4.imtbs-tsp.eu/idp/shibboleth';} catch(e) {}
    }
}

// Stratégie d'autologin du CAS
function stratCAS(){
    // Attend  500 millisecondes avant de cliquer sur le bouton SE CONNECTER pour laisser le temps à Firefox de préremplir les identifiants
    setTimeout(() => {
        // Clique sur le bouton SE CONNECTER
        try{ document.querySelector('button[type="submit"] span.mdc-button__label').click();} catch(e) {}
    }, 200);
}

// Stratégie d'autologin de Gitlab
function stratGitlab(){
    try{ document.querySelector('button[type="submit"] img[alt="Shibboleth"]').click();} catch(e) {}
}

// Stratégie d'autologin de Shibboleth
function stratShibboleth(){
    // Fonction appelée normalement lors du click du lien Télécom SudParis
    try{ INT_goToProvider('https://idpmt3.tem-tsp.eu/idp/shibboleth');return false;} catch(e) {}
}






//     ==========================
//     ===========Main===========
//     ==========================


(function() {
    'use strict';

    // ==Récupère l'URL==
    const currentURL = window.location.href;

    // Récupère le contenu du body de la page
    const siteHTML = document.body.textContent;


    // ==Suivant l'URL effectue la stratégie d'autologin==

    // SI Etudiant
    if (currentURL.includes(targetSI) && !currentURL.includes("SAML")){
        console.log("[AutoLoginTSP] Connexion au SI");

        // Applique la stratégie d'autologin du SI
        stratSI();

        console.log("[AutoLoginTSP] Stratégie du SI appliquée");
    }

    // Partage d'information
    else if (currentURL.includes(targetPartage)){
        console.log("[AutoLoginTSP] Connexion au Partage");

        // Applique la stratégie d'autologin du Partage d'Information
        stratPartage();

        console.log("[AutoLoginTSP] Stratégie du Partage appliquée");
    }

    // Moodle
    else if (currentURL.includes(targetMoodle)){
        console.log("[AutoLoginTSP] Connexion à Moodle");

        // Applique la stratégie d'autologin de Moodle
        stratMoodle();

        console.log("[AutoLoginTSP] Stratégie de Moodle appliquée");
    }

    // CAS
    else if (currentURL.includes(targetCAS) && idAutocomplete){
        console.log("[AutoLoginTSP] Connexion au CAS");

        // Applique la stratégie d'autologin du CAS
        stratCAS();

        console.log("[AutoLoginTSP] Stratégie du CAS appliquée");
    }

    // Gitlab
    else if (currentURL == targetGitlab && siteHTML.includes("Shibboleth")) {
        console.log("[AutoLoginTSP] Connexion à Gitlab");

        // Applique la stratégie d'autologin de Gitlab
        stratGitlab();

        console.log("[AutoLoginTSP] Stratégie de Gitlab appliquée");
    }

    // Shibboleth
    else if (currentURL.includes(targetShibboleth) && siteHTML.includes("Télécom SudParis")){
        console.log("[AutoLoginTSP] Connexion à Shibboleth");

        // Applique la stratégie d'autologin de Shibboleth
        stratShibboleth();

        console.log("[AutoLoginTSP] Stratégie de Shibboleth appliquée");
    }





})();