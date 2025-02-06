// ==UserScript==
// @name         AutoLoginTSP
// @namespace    https://github.com/NoLilypad/AutoLoginTSP/
// @version      2.0
// @description  Autologin sur les services TSP
// @author       NoLilypad

// @include      https://moodle.imtbs-tsp.eu/*
// @include      *moodle.imtbs-tsp.eu/local/login/index.php*
// @include      *SAML2*
// @include      *OpDotNet/Noyau/Login.aspx*
// @include      *cas6*
// @include      https://gitlabens.imtbs-tsp.eu/users/sign_in
// @include      https://gitlabense.imtbs-tsp.eu/users/sign_in
// @include      https://shibds.tem-tsp.eu*
// @include      *z.imt.fr*
// @include      *zimbra.imtbs-tsp.eu*
// @include      *moodle.ip-paris.fr*
// @include      *moodle2023.imtbs-tsp.eu*
// @include      *followme.imtbs-tsp.eu/user
// @include      *declic.minet.net*

// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAAE82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CiAgICAgICAgPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogICAgICAgIDxkYzp0aXRsZT4KICAgICAgICA8cmRmOkFsdD4KICAgICAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPkRlc2lnbiBzYW5zIHRpdHJlIC0gMTwvcmRmOmxpPgogICAgICAgIDwvcmRmOkFsdD4KICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgICAgICAgPEF0dHJpYjpBZHM+CiAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjQtMDQtMDI8L0F0dHJpYjpDcmVhdGVkPgogICAgICAgIDxBdHRyaWI6RXh0SWQ+YmExODUzODMtZDc4ZS00ZWUzLTkzYjYtZGYzOTI1YjNkZGM2PC9BdHRyaWI6RXh0SWQ+CiAgICAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgICAgICA8L3JkZjpsaT4KICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgPC9BdHRyaWI6QWRzPgogICAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgoKICAgICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogICAgICAgIHhtbG5zOnBkZj0naHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyc+CiAgICAgICAgPHBkZjpBdXRob3I+UnViZW5zIFRvcnJlc0xhY2F6ZTwvcGRmOkF1dGhvcj4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgICAKICAgICAgICA8L3JkZjpSREY+CiAgICAgICAgPC94OnhtcG1ldGE+3hU+wAAAADt0RVh0Q29tbWVudAB4cjpkOkRBR0JSYldmTDkwOjIsajoxODE1Mzc0MjYxMTQ0ODIxMjA1LHQ6MjQwNDAyMTO+nvUiAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEpUlEQVQ4y1WVW2xUVRSG/7X3OTPTaTudTstMC0yLI1AohTTcCsUSQUMIWEloFIkYTUr0yReD8cVE3ohGExNfSDCGiJKgSEJShBCqpAaoKK0XaAtMmZbepi2dzq1zP3v5sAeQ87Bfzpe19r/3/69NDAbAzCAADBARMxhgAgFEAEAwGAAAxQQArAQIYFYCALPGACYDxToiM5cyq0slAwwSajppussNBTAxATAAMEPN9vaMpMyaxi2rygkc++Pq/YRZtbK1yS0B3VwBSqnQyW7fanfq4QOx8y0/Zk51lTV6M+PDha2HVksICCYDYPCj47cOtUbG0oFdweDEkoXvz+99OT6ZXr73Qd9Qg9TbNABA9VzvbP32GtlSlbs/qMM/Xft2/NgrZMbd/uESQ6uBARDnwxvbLv+2f5vzwblv4p08W7+ru/vNVkfo7NfxwwQQWFck2yuFsttr365KjXD4xNKOllXVQ2vecS+M08Rx7xt2YiLWrUU9IgKwBj/rL6iT65pqkpKhBo71W+J0S4OSACAAQBA5A2OzPDmRU9z3SwHOuqkZMREqsPX3rxmAH4MkhWNtZED52wIuI9U7b5hrk0OqfkfAJaM981q1PAoQEWD2pLfWbllf8jAht/uVeSO7tbZ1g3M0Qdv9IAKJonp4N9yetFWVpzKYCTJ8mwemDU9ZIoPwqHaDKNoD9ubEIN06ejZK2QklStZH7xb+/PinGOKTmhAo3qUIOEcwH0wyrIRFos42bMVGUwwVf1xRf0SeyohVbgBAToFcZRF22QFCnp+qBgCYMqMEASCbYDLsBRgEMNnBAJ4YF0RCsWESQ1ZLBkkFIQCYHu3oJxXZtBV48UoD7HpOEITMKt8yg7AoIFC8ayYGwGZJKu/vzA1OL28kBcOxkF/6Lg9NNzyv/8tPAChmZnHzTk3YXFMSPrCTwLL/fgtUJc207zCZmUQxCkiP3+y7f0wYzqmSFZaSkCvOf0rTCwnudbzQVK6jwLCQuHRmvL7RX54Zu3OvpmOfW907fmnxuhXVam7gHu85WCulARCDRs+7O5urTMH52GDX9c2udPfw+y/V2XM5oUau/Nvik8VwITpc66Xp/imjeskilal1WiMpbyIUHI16XmwVM9UVQhRBKBbDX16Mi8Vel6/WUyaSjx6Gso5Hw7zsyGt2IiIDABEYpC6ciZO9eVPvOZ8nOltVkwi/1372i+zd020BBdI2E0IaMhfMQlnxikWlHZ/vMTu+2m+LD/2VUzw1R1IUw6WP3iWAfPfNbPrn8O3o1cjvYye+m8+DPBXaX6yUUsoq5PNn/ABIEAlTkrQJbT/HRzHLYqUe5xtE23afyjJsFWWmlY3H83p2ydZ9JSwAGMXGBHgPhy/bNrU1+BxWLNR3PZQHYG48skZJAARmZqWYlSokbxwKHOwaiaUy6djYhQPlkN7XL8dSOUuxKjpHG03x+A8Xs6ua/G6bWohcu6ga2l/1E0sBPSw0pd2WDPb2j2UZBKpY3rze79ChegYEGMhTIT4XiedlaUVlRakgUFH8MyDAFgswKRAVxzkRAf9vrcmni34KmADBAAhPQE3oyc4EMEi/KHrW4z88cjwv4JlWXAAAAABJRU5ErkJggg==
// @grant        none
// ==/UserScript==

// #######################################################
// #                CONFIGURATION PRINCIPALE             #
// #######################################################




// Active/désactive les fonctionnalités
const SETTINGS = {
  ID_AUTOCOMPLETE: true,        // Permet aux gestionnaires de mots de passe de remplir les identifiants
  GO_TO_MOODLE_COURSES: true,   // Redirige vers "Mes cours" sur la page d'accueil Moodle
  TIMEOUT_DURATION:  50        // Temps de chargement laissé à l'autocomplétion, en millisecondes
};




// #######################################################
// #                SERVICES CONFIGURABLES               #
// #######################################################




/*
   Pour ajouter un service :
   1. Ajouterl'URL du service en début de script avec la balise @include
   2. Ajouter un objet dans SERVICES avec :
      - name                : nom du service (pour le logging)
      - urlPatterns         : liste des URLs du service
      - urlExclude          : liste de string dans l'URL qui bloquent le login automatique
      - strategy            : Fonction à exécuter pour login
      - contentCheck        : Texte requis dans la page pour login
      - needsAutocomplete   : Si le login nécessite l'autocomplétion des identifiants

*/




const SERVICES = [

  { // Exemple
    name: "Exemple",
    urlPatterns: ["https://exemple.com/login"],
    urlExclude: ["nePasPrendreEnCompteCetteURL"],
    contentCheck: "La page doit contenir cette string",
    needsAutocomplete: false,
    strategy: () => {
      try {
        // Exemple de fonction d'autologin-
        document.querySelector('input[type="submit"][value="Bouton à cliquer"]').click();
      }
      catch(e) {}
    }
  },

  { // SI Étudiant
    name: "SI Étudiant",
    urlPatterns: ["https://si-etudiants.imtbs-tsp.eu/OpDotNet/Noyau/Login.aspx?"],
    urlExclude: ["SAML"],
    contentCheck: "",
    needsAutocomplete: false,
    strategy: () => {
      try {
        GetProvidersUri("SAMLv2ProviderConfiguration");
      }
      catch(e) {}
    }
  },

  { // Partage d'information
    name: "Partage d'information",
    urlPatterns: ["SAML2"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: false,
    strategy: () => {
      try {
          document.querySelector('input[type="submit"][value="Accepter"], input[type="submit"][value="Accept"]').click();
      }
      catch(e) {}
    }
  },

  { // Moodle Legacy
    name: "Moodle Legacy",
    urlPatterns: ["https://moodle2023.imtbs-tsp.eu"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: false,
    strategy: () => {
      try {
          // String pour la détection de la page
          const connectionFr = "Connexion";
          const connectionEn = "Log in";
          const localAccountFr = "Compte local";
          const localAccountEn = "Local account";

          // Détection bilingue des strings dans la page
          const foundConnection = document.body.textContent.includes(connectionFr) || document.body.textContent.includes(connectionEn);
          const foundLocalAccount = document.body.textContent.includes(localAccountFr) || document.body.textContent.includes(localAccountEn);

          // Suivant la position dans la page effectue l'action indiquée
          if (foundConnection){
              // Va sur la page de connexion de Moodle
              window.location.href = 'https://moodle2023.imtbs-tsp.eu/login/index.php';

          }

          if (foundLocalAccount){
              // Va sur la page du CAS de TSP
              try{ document.querySelector('a[href*="https://idpr4.imtbs-tsp.eu/idp/shibboleth"]').click();} catch(e) {}
          }
      }
      catch(e){}
    }
  },

  { // Moodle IP Paris (Nouveau)
    name: "Moodle IP Paris",
    urlPatterns: ["https://moodle.ip-paris.fr/"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: false,
    strategy: () => {
      try {
        // String pour la détection de la page
        const connectionFr = "Connexion";
        const connectionEn = "Log in";
        const localAccountFr = "Compte local";
        const localAccountEn = "Local account";
        // Détection bilingue des strings dans la page
        const foundConnection = document.body.textContent.includes(connectionFr) || document.body.textContent.includes(connectionEn);
        const foundLocalAccount = document.body.textContent.includes(localAccountFr) || document.body.textContent.includes(localAccountEn);
        // Suivant la position dans la page effectue l'action indiquée
        if (foundConnection){
            // Va sur la page de connexion de Moodle
            window.location.href = 'https://moodle.ip-paris.fr/login/index.php';
            window.location.href = 'https://moodle.ip-paris.fr/auth/saml2/login.php?wants=https%3A%2F%2Fmoodle.ip-paris.fr%2F%3Flang%3Dfr&idp=f6cd7c522e0ec99db1b2748b89ba1617&passive=off';
        }
        if (foundLocalAccount){
            // Va sur la page du CAS de TSP
            try{ document.querySelector('a[href*="https://idpr4.imtbs-tsp.eu/idp/shibboleth"]').click();} catch(e) {}
        }
      }
      catch(e) {}
    }
  },

  { // CAS
    name: "CAS",
    urlPatterns: ["https://cas6.imtbs-tsp.eu/cas/login"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: true,
    strategy: () => {
        try {
          setTimeout(() => {
              // Clique sur le bouton SE CONNECTER
              document.querySelector('button[type="submit"] span.mdc-button__label').click();
          }, SETTINGS.TIMEOUT_DURATION);
        }
        catch(e) {}
    }
  },

  { // GitLab ENS
    name: "GitLab ENS",
    urlPatterns: ["https://gitlabens.imtbs-tsp.eu/users/sign_in"],
    urlExclude: [],
    contentCheck: "Shibboleth",
    needsAutocomplete: false,
    strategy: () => {
      try {
        document.querySelector('button[type="submit"] img[alt="Shibboleth"]').click();
      }
      catch(e) {}
    }
  },

  { // GitLab ENSE
    name: "GitLab ENSE",
    urlPatterns: ["https://gitlabense.imtbs-tsp.eu/users/sign_in"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: false,
    strategy: () => {
      try {
        document.querySelector('button[data-testid="saml-login-button"]').click();
      }
      catch(e) {}
    }
  },

  { // Shibboleth
    name: "Shibboleth",
    urlPatterns: ["https://shibds.tem-tsp.eu"],
    urlExclude: [],
    contentCheck: "Télécom SudParis",
    needsAutocomplete: false,
    strategy: () => {
      try {
        INT_goToProvider('https://idpmt3.tem-tsp.eu/idp/shibboleth');
      }
      catch(e) {}
    }
  },

  { // Zimbra
    name: "Zimbra",
    urlPatterns: ["https://z.imt.fr/", "https://zimbra.imtbs-tsp.eu"],
    urlExclude: [],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: true,
    strategy: () => {
      try {
        setTimeout(() => {
              document.getElementById('loginButton').click();
          }, SETTINGS.TIMEOUT_DURATION);
      }
      catch(e) {}
    }
  },

  { // Impressions
    name: "Impressions",
    urlPatterns: ["https://followme.imtbs-tsp.eu/user"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: true,
    strategy: () => {
        try {
          setTimeout(() => {
              // Clique sur le bouton "Connexion"
              document.querySelector('input[name="$Submit$0"]').click();
          }, SETTINGS.TIMEOUT_DURATION);
        }
        catch(e){}
    }
<<<<<<< HEAD
  },

  { // Déclic Minet
    name: "Déclic Minet",
    urlPatterns: ["declic.minet.net"],
    urlExclude: [],
    contentCheck: "",
    needsAutocomplete: true,
    strategy: () => {
      try {
        setTimeout(() => {
          document.querySelector('input[type="submit"][value="Se connecter"]').click();
        }, SETTINGS.TIMEOUT_DURATION + 100);
      }
      catch(e) {}
    }
=======
>>>>>>> 203948376f366c554fc389544f91653145c436f1
  }

 
];

// #######################################################
// #                  CORE FUNCTIONALITY                 #
// #######################################################

(function() {
  'use strict';

  // Détection du service actuel
  const currentUrl = window.location.href;
  const pageContent = document.body.textContent;

  // Parcours tous les services configurés
  for (const service of SERVICES) {

    const urlMatch = service.urlPatterns.some(pattern =>
      currentUrl.includes(pattern)
    );

    const urlExcludeCheck = !service.urlExclude.some(pattern =>
      currentUrl.includes(pattern)
    );

    const contentMatch = pageContent.includes(service.contentCheck);
    const autocompleteCheck = SETTINGS.ID_AUTOCOMPLETE;
    //const n = !currentUrl.includes(service.urlExclude);

    if (urlMatch && contentMatch && autocompleteCheck && urlExcludeCheck) {
      console.log(`[AutoLoginTSP] Déclenchement pour ${service.name}`);
      service.strategy(currentUrl, pageContent);
      break; // Un seul service par exécution
    }
  }

  // Redirection spéciale pour Moodle
  if (SETTINGS.GO_TO_MOODLE_COURSES && currentUrl === "https://moodle.imtbs-tsp.eu/" && pageContent.includes("Mes cours")) {
    window.location.href = 'https://moodle.imtbs-tsp.eu/my/courses.php';
  }

})();
