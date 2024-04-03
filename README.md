

# AutoLoginTSP

Un script Tampermonkey simple pour s'enregistrer plus vite sur les outils en ligne du campus TSP


![alt text](logo.png)  ![alt text](logo_TSP.png)


## Qu'est ce que AutoLoginTSP ?

AutoLoginTSP est un script conçut pour le plugin [Tampermonkey](https://www.tampermonkey.net/) pour se logger facilement sur Ecampus, Moodle ou le SI Etudiant sans devoir cliquer sur les liens et pages différents pour chaques services et sans avoir besoin d'un gros bagage technique.

Je l'ai écrit en vitesse en ayant marre de cliquer cinq fois pour acceder à un service, il permet en moyenne d'économiser 4 secondes par rapport à un login manuel 🤓. 


## Comment installer AutoLoginTSP ?
### Installer Tampermonkey 
Tampermonkey est une extension web qui permet d'exécuter des scripts utilisateur sur des pages web, pour en modifier le contenu et le comportement. 

- Installation pour [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

- Installation pour [Google Chrome](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=fr) (passe à Firefox vrmt)

- Installation pour [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd) (pareil)

### Télécharger le script
Récupérer la dernière mise à jour du script ( *AutoLoginTSP-1.X.user.js* ) en clonant le repo ou en téléchargeant directement le fichier en cliquant sur le fichier puis sur *raw*.

### Installer le script
Ouvrir le *Tableau de bord* en cliquant sur le logo de l'extension puis drag and drop le fichier .js . Le script est alors ajouté ou mis à jour. 

## Comment paramétrer le script ?
Pour l'instant, une seule configuration est possible concernant l'autoremplissage des identifiants avec un gestionnaire de mots de passe.

- Si idAutocomplete est set sur `false`, le script ne fera rien sur la page du CAS où l'on doit rentrer ses identifiants. Il faudra alors les taper manuellement et taper sur la touche entrée ou cliquer sur *SE CONNECTER* pour continuer le login.
- Si idAutocomplete est set sur `true`, le script attendra 200 millsecondes qu'un gestionnaire de mot de passe remplisse automatiquement les identifiants du CAS puis cliquera sur valider.

## Comment ça fonctionne ?
Le script s'active uniquement si l'URL courante contient les mots clés indiqués avec les balises @include. 

Quand le script est activé, il détermine ensuite parmis les différentes site d'activation sur lequel il se situe (zone main), puis met en place la stratégie d'autologin adaptée (une fonction spécifique à chaque site).

## Comment ajouter un site de login ? (dev)

- Ajouter une balise `// @include` avec l'URL de site pour que le script s'active sur le site donné. Utiliser `*` comme wildcard pour plusieurs sites ou si l'URL change. 
- Ajouter dans la section main la détection du site avec un `else if`, et ajouter une target string pour la détection du site.
- Créer un stratégie de login en cliquant sur un bouton ou en redirigeant directement. ChatGPT ou  Gemini sont des bons outils pour déterminer quel bouton cliquer en fournissant le code source de la page. Garder la structure`try {} catch{}` .

N'hésitez pas à partager votre fork s'il peut servir à d'autres !

## Infos utiles

- AutoLoginTSP fonctionne pour les sites en français et en anglais
- Le comportement par défaut suppose qu'il n'y a ***pas de gestionnaire de mot de passe actif***. Voir **Comment installer AutoLoginTSP** pour le modifier.

## Remarques

- Oui le script est probablement très peu optimisé, bodgé et pas écrit dans les rêgles de l'art mais l'idée est d'avoir un système qui fonctionne sans tout réapprendre (merci GPT et Gemini). Si vous avez des idées ou repéré des bugs/erreurs flagrantes n'hésitez pas à le faire circuler !
- Oui le README est plus long que le script, je fais ce que je veux c'est mon repo 💅
