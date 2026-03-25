# Le Val Paisible des Hautes Pyrénées - Élevage Léonberg

Site web statique pour élevage familial de Léonbergs situé à Arrodets-ez-Angles (65).

## 🚀 Déploiement sur GitHub Pages

### Étape 1 : Création du repository
1. Connectez-vous à [GitHub](https://github.com)
2. Cliquez sur "+" (New repository)
3. Nom : `val-paisible-leonberg` (ou votre choix)
4. Cochez "Public"
5. Cochez "Add a README file"
6. Créez le repo

### Étape 2 : Upload des fichiers
**Méthode simple (interface web) :**
1. Dans votre repo, cliquez sur "Add file" → "Upload files"
2. Glissez-déposez TOUS les fichiers HTML, robots.txt, sitemap.xml à la racine
3. Cliquez sur "Commit changes"

**Pour les dossiers (/css, /js, /images) :**
1. Cliquez sur "Add file" → "Create new file"
2. Tapez le nom : `css/style.css` (GitHub créera automatiquement le dossier)
3. Copiez-collez le contenu du fichier CSS
4. Répétez pour `js/main.js`

**Pour les images :**
1. Cliquez sur "Add file" → "Upload files"
2. Créez le dossier `images/` en tapant `images/` dans le champ "File name"
3. Uploadez vos vraies photos en remplaçant les noms des placeholders :
   - `placeholder-future-maman-portrait.jpg` → votre photo
   - `placeholder-paysage-pyrenees.jpg` → votre photo
   - etc.

### Étape 3 : Activation GitHub Pages
1. Allez dans l'onglet "Settings" (en haut du repo)
2. Dans le menu gauche, cliquez sur "Pages"
3. Section "Source" : sélectionnez "Deploy from a branch"
4. Branch : "main", Folder : "/ (root)"
5. Cliquez "Save"
6. Attendez 2-5 minutes, l'URL apparaîtra (ex: https://votrepseudo.github.io/val-paisible-leonberg)

### Étape 4 : Configuration SEO
1. **Modifier sitemap.xml** : Remplacez `val-paisible-leonberg` par votre nom de repo exact
2. **Modifier robots.txt** : Mettre à jour l'URL du sitemap
3. Vérifier que les balises `<title>` et `<meta name="description">` sont remplies dans chaque HTML

## 📝 Checklist avant mise en ligne

- [ ] Photos remplacées dans /images
- [ ] Documents PDF remplacés (pedigree, classifications)
- [ ] Coordonnées exactes dans contact.html
- [ ] Test responsive (mobile)
- [ ] Liens des formulaires (si utilisé Formspree, remplacer l'ID)

## 🛠️ Maintenance

**Pour modifier le site :**
1. Allez sur GitHub
2. Naviguez jusqu'au fichier
3. Cliquez sur l'icône crayon (Edit)
4. Modifiez
5. "Commit changes" en bas

**Mettre à jour la date des portées :**
Modifiez `portees.html` et `sitemap.xml` (balise lastmod) à chaque changement important.

## 📧 Contact technique

Si problème d'affichage : vider le cache navigateur (Ctrl+F5).
