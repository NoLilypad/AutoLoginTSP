

# AutoLoginTSP

Un script Tampermonkey pour s'enregistrer plus vite sur les outils en ligne du campus TSP


![alt text](logo.png)


## Qu'est ce que AutoLoginTSP ?

AutoLoginTSP est un script conçut pour le plugin [Tampermonkey](https://www.tampermonkey.net/) pour se logger facilement sur Ecampus, Moodle ou le SI Etudiant sans devoir cliquer sur les liens et pages différents pour chaques services.


## Comment installer AutologinTSP ?
### Installer Tampermonkey 
Tampermonkey est une extension web qui permet d'exécuter des scripts utilisateur sur des pages web, pour en modifier le contenu et le comportement. 

Installation pour [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

Installation pour [Google Chrome](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

### Télécharger le script
Récupérer la dernière mise à jour du script ( *AutoLoginTSP-1.X.user.js* ) en clonantl le repo ou en téléchargeant directement le fichier.

### Installer le script
Ouvrir le *Tableau de bord* en cliquant sur le logo de l'extension puis drag and drop le fichier .js . Le script est alors ajouté ou mis à jour. 

## Comment paramétrer le script ?
Pour l'instant, une seule configuration est possible concernant l'autoremplissage des identifiants avec un gestionnaire de mots de passe.

- Si idAutocomplete est set sur **false**, le script ne fera rien sur la page du CAS où l'on doit rentrer ses identifiants. Il faudra alors les taper manuellement et taper sur la touche entrée ou cliquer sur *SE CONNECTER* pour continuer le login.
- Si idAutocomplete est set sur **true**, le script attendra 200 millsecondes qu'un gestionnaire de mot de passe remplisse automatiquement les identifiants du CAS puis cliquera sur valider.

## Comment ça fonctionne ?
Le script s'active uniquement si l'URL courante contient les mots clés indiqués avec les balises @include. 

Quand le script est activé, il détermine ensuite parmis les différentes site d'activation sur lequel il se situe (zone main), puis met en place la stratégie d'autologin adaptée (une fonction spécifique à chaque site).

## Infos utiles

- AutoLoginTSP fonctionne en français et en anglais
- Le comportement par défaut suppose qu'un gestionnaire de mots de passe est actif. Voir **Comment installer AutologinTSP ?**
  
