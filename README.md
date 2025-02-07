

# AutoLoginTSP

Un script Tampermonkey simple pour s'enregistrer plus vite sur les outils en ligne du campus TSP


![alt text](logo.png)  ![alt text](logo_TSP.png)

## Recent Update

- Passage à la 2.0
- Prise en charge de GitlabENSE
- Prise en charge du Moodle IP Paris
- Prise en charge de l'ancien Moodle IMTBS-TSP version 2023
- Prise en charge du sites des Impresssions


## Qu'est ce que AutoLoginTSP ?

AutoLoginTSP est un script conçut pour le plugin [Tampermonkey](https://www.tampermonkey.net/) pour se logger facilement sur Ecampus, Moodle ou le SI Etudiant sans devoir cliquer sur les liens et pages différents pour chaques services et sans avoir besoin d'un gros bagage technique.

Je l'ai écrit en vitesse en ayant marre de cliquer cinq fois pour acceder à un service, il permet en moyenne d'économiser 4 secondes par rapport à un login manuel 🤓. 

## Sur quels sites fonctionne AutoLoginTSP ?
Pour l'instant, les sites pris en charge nativement sont :
- [eCampus](https://ecampus.imtbs-tsp.eu/)
- [Moodle IP Paris](https://moodle.ip-paris.fr)
- [Moodle IMTBS-TSP 2023](https://moodle2023.imtbs-tsp.eu/)
- [SI Etudiant](https://si-etudiants.imtbs-tsp.eu/)
- [Gitlabens](https://gitlabens.imtbs-tsp.eu/)
- [Gitlabense](https://gitlabense.imtbs-tsp.eu/)
- [Messagerie Zimbra](https://z.imt.fr/)
- [Impressions](https://followme.imtbs-tsp.eu)


## Comment installer AutoLoginTSP ?
### Installer Tampermonkey 
Tampermonkey est une extension web qui permet d'exécuter des scripts utilisateur sur des pages web, pour en modifier le contenu et le comportement. 

- Installation pour [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

- Installation pour [Google Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr) (passe à Firefox vrmt)

- Installation pour [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) (pareil)

### Télécharger le script
Récupérer la dernière mise à jour du script ( *AutoLoginTSP-2.X.Y.user.js* ) en clonant le repo ou en téléchargeant directement le fichier en cliquant sur le fichier puis sur *raw*.

### Installer le script
Ouvrir le *Tableau de bord* en cliquant sur le logo de l'extension puis drag and drop le fichier .js . Le script est alors ajouté ou mis à jour. 

## Comment paramétrer le script ?
Pour l'instant, une seule configuration est possible concernant l'autoremplissage des identifiants avec un gestionnaire de mots de passe.

- Si idAutocomplete est set sur `false`, le script ne fera rien sur la page du CAS ou de Zimbra où l'on doit rentrer ses identifiants. Il faudra alors les taper manuellement et taper sur la touche entrée ou cliquer sur le bouton de connexion pour continuer le login. C'est pour l'instant le comportement par défaut.
- Si idAutocomplete est set sur `true`, le script attendra 200 millsecondes qu'un gestionnaire de mot de passe remplisse automatiquement les identifiants du CAS puis cliquera sur valider.

## Comment ça fonctionne ?
Le script s'active uniquement si l'URL courante contient les mots clés indiqués avec les balises @include. 

Quand le script est activé, il détermine ensuite parmis les différentes site d'activation sur lequel il se situe, puis met en place la stratégie d'autologin adaptée (une fonction spécifique à chaque site).

## Comment ajouter un site de login ? (dev)

1. Ajouterl'URL du service en début de script avec la balise @include
2. Ajouter un objet dans SERVICES avec :
      - name                : nom du service (pour le logging)
      - urlPatterns         : liste des URLs du service
      - urlExclude          : liste de string dans l'URL qui bloquent le login automatique
      - strategy            : Fonction à exécuter pour login
      - contentCheck        : Texte requis dans la page pour login
      - needsAutocomplete   : Si le login nécessite l'autocomplétion des identifiants


N'hésitez pas à partager votre fork s'il peut servir à d'autres !

## Infos utiles

- AutoLoginTSP fonctionne pour moodle en français et en anglais;
- Le comportement par défaut suppose qu'il y a ***un gestionnaire de mot de passe actif***. Modifier la section SETTINGS pour changer ce comportement;
- Le script peut exceptionnellement reload certaines pages Moodle (certains quizz par exemple) qui ont certaines target string dans leur code source ("Connexion" par exemple). Si c'est le cas, le meilleur est de désactiver le script ou Tampermonkey le temps de la visite du site et de faire remonter le problème;


## Remarques

- Oui le script est probablement très peu optimisé, bodgé et pas écrit dans les rêgles de l'art mais l'idée est d'avoir un système qui fonctionne sans tout réapprendre (merci GPT et Gemini). Si vous avez des idées ou repéré des bugs/erreurs flagrantes n'hésitez pas à le faire circuler !
- Oui le README est plus long que le script, je fais ce que je veux c'est mon repo 💅
