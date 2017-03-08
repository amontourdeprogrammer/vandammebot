# vandammebot
Bot sends JCVD quotes to discourse post that use english sounding words

to setup the project do: `$ npm install`


To do :
1. connaitre la doc Discourse : http://docs.discourse.org/
	Est-il possible de créer un robot ? Oui
		Si oui : Peut-il répondre à quelqu'un ? Oui
			Si oui : peut-il avoir sa propre identité de robot (ou il poste pour un utilisateur existant) ? peut lui créer une identité d'humain ? Pour le moment le robot doit avoir un identite de quelqu'un qui a un compte sur la communuate. L'exemple que nous avons trouvé (https://github.com/gwwar/discbot/blob/master/bin/discbot) crée un utilisateur robot ce qui suggere que c'est possible.
			Si non :
				Si oui : Envoyer un message privée ? un mail ?
				Si non : Page avec score de vandamisation, tweet au vandamme de la semaine
		Si non : Robot twitter

2. Lister les citations de Vandamme
3. Lister les triggers
	Possibilité de source: http://www.data.gouv.fr/fr/datasets/base-franceterme-termes-scientiques-et-techniques-1/
4. Créer les tests pour le robot

Roadmap:
V0 : Poster un hello world sur disourse
V0.1 : Poster apres une trigger
V0.2 : Poster une citation de JCVD après trigger
