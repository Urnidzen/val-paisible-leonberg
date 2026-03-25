/**
 * Le Val Paisible - Élevage Léonberg
 * JavaScript principal
 * - Gestion du menu mobile
 * - Switcher de langue (FR/EN/DE/ES/PT)
 * - Animations et interactions
 */

// ========================================
// DONNÉES DE TRADUCTION
// ========================================
const translations = {
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_race: "La Race",
        nav_our_dogs: "Nos Chiens",
        nav_adoption: "Bien-être & Adoption",
        nav_litters: "Portées",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "Élevage Familial",
        hero_title: "Le Val Paisible<br>des Hautes Pyrénées",
        hero_subtitle: "Léonbergs élevés avec amour dans un cadre naturel exceptionnel",
        btn_litters: "Découvrir nos portées",
        btn_contact: "Nous contacter",
        scroll_down: "Découvrir",
        
        // Préparation
        prep_title: "En préparation pour 2025",
        prep_text: "Notre élevage est en cours d'installation dans un cadre idyllique aux Hautes Pyrénées. Nous travaillons avec passion pour vous offrir des chiots Léonberg exceptionnels, élevés dans les meilleures conditions.",
        prep_feature1: "2 hectares de terrain naturel",
        prep_feature2: "Installation familiale",
        prep_feature3: "Socialisation optimale",
        
        // About
        about_label: "Notre Philosophie",
        about_title: "Un élevage à taille humaine",
        about_text1: "Situé à Arrodets-ez-Angles, au cœur des Hautes Pyrénées, notre élevage privilégie la qualité à la quantité. Nous ne produisons qu'une ou deux portées par an, garantissant ainsi une attention personnalisée à chaque chiot.",
        about_text2: "Notre future maman Léonberg vivra en famille, entourée d'amour et de soins. Les chiots seront socialisés dès leur plus jeune âge avec les enfants, les autres animaux et les différents environnements de la vie quotidienne.",
        stat_litters: "portées/an",
        stat_weeks: "semaines minimum",
        stat_love: "avec amour",
        caption_location: "Arrodets-ez-Angles (65)",
        
        // Features
        features_label: "Nos Engagements",
        features_title: "Pourquoi choisir Le Val Paisible ?",
        feature1_title: "Cadre naturel exceptionnel",
        feature1_text: "Nos chiens évoluent dans un environnement montagnard préservé, avec accès direct à la nature et aux espaces verts.",
        feature2_title: "Sélection rigoureuse",
        feature2_text: "Notre future reproductrice est choisie avec soin pour ses qualités physiques, son caractère équilibré et sa santé irréprochable.",
        feature3_title: "Accompagnement personnalisé",
        feature3_text: "Nous restons disponibles pour vous conseiller avant, pendant et après l'adoption de votre compagnon.",
        feature4_title: "Bien-être animal prioritaire",
        feature4_text: "Conditions de vie optimales, alimentation premium, soins vétérinaires réguliers et beaucoup d'amour au quotidien.",
        
        // CTA
        cta_title: "Intéressé par un chiot Léonberg ?",
        cta_text: "Contactez-nous pour être informé de l'arrivée de nos premières portées et réserver votre compagnon de vie.",
        cta_button: "Prendre contact",
        
        // Footer
        footer_tagline: "Élevage familial de Léonbergs aux Hautes Pyrénées",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Informations",
        footer_mentions: "Mentions légales",
        footer_siret: "SIRET : en cours d'immatriculation",
        footer_rights: "Tous droits réservés.",
        
        // Page La Race
        race_title: "Le Léonberg",
        race_subtitle: "Un géant au cœur tendre",
        origins_label: "Histoire",
        origins_title: "Origines de la race",
        origins_text1: "Le Léonberg est une race allemande créée au milieu du XIXe siècle par Heinrich Essig, un éleveur de la ville de Leonberg, dans le Bade-Wurtemberg. Son objectif était de créer un chien imposant ressemblant au lion figurant sur les armoiries de sa ville.",
        origins_text2: "Pour élaborer cette race, il croisa probablement des Saint-Bernard, des Terre-Neuve et des Grandes Pyramides. Le résultat est un chien majestueux, puissant mais d'une douceur infinie.",
        origins_text3: "Très rapidement, le Léonberg devint un chien de compagnie prisé par les cours royales d'Europe. Napoléon III, l'Impératrice Élisabeth d'Autriche (Sissi) et même le Prince de Galles en possédaient.",
        origins_caption: "Un chien de légende depuis plus de 150 ans",
        char_label: "Caractéristiques",
        char_title: "Standards de la race",
        char_size: "Taille",
        char_weight: "Poids",
        char_color: "Robe",
        char_color_desc: "Sable, avec masque noir",
        char_color_note: "Poil long et dense, imperméable",
        char_lifespan: "Espérance de vie",
        char_lifespan_note: "Jusqu'à 10-11 ans avec de bons soins",
        male: "Mâle",
        female: "Femelle",
        temp_label: "Caractère",
        temp_title: "Tempérament et comportement",
        temp_text1: "Le Léonberg est réputé pour son caractère exceptionnel. Malgré sa taille imposante, c'est un chien doux, calme et extrêmement attaché à sa famille. Il est particulièrement patient avec les enfants, ce qui en fait un excellent chien de famille.",
        temp_text2: "Intelligent et observateur, il sait s'adapter à différentes situations. Il n'est ni agressif ni craintif, mais possède une certaine réserve envers les étrangers, ce qui en fait un bon gardien dissuasif.",
        traits_title: "Traits de caractère :",
        trait1: "Doux et patient",
        trait2: "Intelligent et obéissant",
        trait3: "Protecteur de sa famille",
        trait4: "Sociable avec autres animaux",
        trait5: "Calme à l'intérieur",
        trait6: "Joueur et affectueux",
        temp_caption: "Un compagnon fidèle et protecteur",
        care_label: "Entretien",
        care_title: "Soins et besoins",
        care_grooming: "Toilettage",
        care_grooming_text: "Brossage régulier (2-3 fois par semaine) nécessaire pour entretenir son pelage long. Une mue importante a lieu deux fois par an.",
        care_exercise: "Exercice",
        care_exercise_text: "Besoin d'espace et d'exercice quotidien. Promenades régulières et accès à un jardin clôturé sont recommandés.",
        care_training: "Éducation",
        care_training_text: "Éducation douce mais ferme dès le plus jeune âge. Répond très bien au renforcement positif.",
        care_space: "Espace de vie",
        care_space_text: "Nécessite un extérieur spacieux. Peut vivre en appartement uniquement si exercice suffisant.",
        care_climate: "Climat",
        care_climate_text: "Supporte bien le froid grâce à son sous-poil épais. Attention à la chaleur : jamais seul en plein soleil.",
        care_diet: "Alimentation",
        care_diet_text: "Régime alimentaire adapté aux grandes races. Surveillance du poids pour préserver les articulations.",
        health_label: "Santé",
        health_title: "Santé et prévention",
        health_text1: "Comme toutes les grandes races, le Léonberg peut être sujet à certaines pathologies héréditaires. Un élevage responsable effectue des tests sur les reproducteurs pour minimiser ces risques.",
        health_text2: "Notre élevage s'engage à ne reproduire que des chiens testés et indemnes de ces affections, garantissant ainsi la meilleure santé possible à nos chiots.",
        health_tests: "Tests recommandés :",
        test1: "Dysplasie de la hanche et du coude",
        test2: "Polyneuropathie (LPN1, LPN2)",
        test3: "Dilatation-torsion de l'estomac",
        test4: "Cataracte héréditaire",
        test5: "Hypothyroïdie",
        health_caption: "Un chien robuste avec les bons soins",
        race_cta_title: "Le Léonberg est fait pour vous ?",
        race_cta_text: "Découvrez nos conditions d'adoption et nos engagements pour le bien-être de nos chiots.",
        race_cta_button: "Nos conditions d'adoption",
        
        // Page Nos Chiens
        dogs_title: "Nos Chiens",
        dogs_subtitle: "Notre famille à quatre pattes",
        future_mom: "Future Maman",
        mom_name: "[Nom de la chienne]",
        dog_info_title: "Informations",
        detail_birth: "Date de naissance",
        mom_birth: "[À compléter]",
        detail_color: "Robe",
        mom_color: "[À compléter]",
        detail_height: "Taille",
        mom_height: "[À compléter]",
        detail_weight: "Poids",
        mom_weight: "[À compléter]",
        detail_lof: "Numéro LOF",
        mom_lof: "[À compléter]",
        detail_tattoo: "Tatouage/Puce",
        mom_tattoo: "[À compléter]",
        health_hd: "Dysplasie de la hanche : <em>À venir</em>",
        health_ed: "Dysplasie du coude : <em>À venir</em>",
        health_lpn: "Polyneuropathie LPN : <em>À venir</em>",
        health_eyes: "Examen des yeux : <em>À venir</em>",
        documents_title: "Documents",
        doc_pedigree: "Pedigree",
        doc_tests: "Résultats des tests",
        doc_show: "Palmarès expositions",
        documents_note: "Les documents seront disponibles prochainement.",
        character_title: "Caractère",
        mom_character1: "Notre future maman est actuellement en cours de sélection. Nous recherchons une chienne avec un caractère équilibré, douce et affectueuse, issue d'une lignée saine et conforme aux standards de la race.",
        mom_character2: "Elle vivra en famille, entourée d'amour et de soins, et sera socialisée dès son plus jeune âge pour devenir une maman attentive et une compagne de vie exceptionnelle.",
        criteria_label: "Notre Engagement",
        criteria_title: "Critères de sélection",
        criteria1_title: "Santé irréprochable",
        criteria1_text: "Tous les tests de santé obligatoires et recommandés pour la race doivent être satisfaisants. Nous ne faisons aucune concession sur la santé de nos reproducteurs.",
        criteria2_title: "Caractère équilibré",
        criteria2_text: "Nous privilégions les chiens doux, stables, sociables et adaptés à la vie en famille. Le tempérament est aussi important que la beauté physique.",
        criteria3_title: "Conformité au standard",
        criteria3_text: "Morphologie, proportions, robe et allure doivent correspondre au standard FCI du Léonberg pour préserver les caractéristiques de cette magnifique race.",
        criteria4_title: "Origines vérifiées",
        criteria4_text: "Nous étudions attentivement le pedigree et l'arbre généalogique pour éviter la consanguinité et sélectionner les meilleures lignées.",
        dad_title: "Le Futur Papa",
        dad_text: "Le choix du reproducteur mâle sera fait avec le même soin que pour notre femelle. Nous sélectionnerons un étalon correspondant à nos critères de santé, de caractère et de conformité au standard.",
        dad_text2: "Les informations sur le futur papa seront communiquées lors de l'annonce officielle de la portée.",
        dogs_cta_title: "Vous souhaitez en savoir plus ?",
        dogs_cta_text: "Contactez-nous pour toute question sur nos chiens ou nos futures portées.",
        
        // Page Bien-être & Adoption
        adoption_title: "Bien-être & Adoption",
        adoption_subtitle: "Nos engagements pour nos chiots",
        ethics_label: "Notre Philosophie",
        ethics_title: "Un élevage éthique et responsable",
        ethics_text1: "Chez Le Val Paisible, le bien-être de nos chiens est notre priorité absolue. Nous ne sommes pas une usine à chiots : nous produisons uniquement 1 à 2 portées par an, permettant ainsi de consacrer toute notre attention à chaque chiot.",
        ethics_text2: "Notre engagement va au-delà de la simple vente : nous souhaitons que chaque chiot parte dans une famille qui lui correspond et où il sera heureux toute sa vie.",
        ethics1_title: "Élevage familial",
        ethics1_text: "Nos chiots grandissent au sein de notre famille, entourés d'amour et de soins quotidiens. Ils sont socialisés avec les enfants, les autres animaux et les bruits du quotidien.",
        ethics2_title: "Sevrage progressif",
        ethics2_text: "Les chiots restent avec leur mère jusqu'à 8 semaines minimum. Ce sevrage naturel est essentiel pour leur développement physique et comportemental.",
        ethics3_title: "Suivi vétérinaire",
        ethics3_text: "Chaque chiot bénéficie d'un suivi vétérinaire complet : vaccinations, vermifugation, identification et certificat de bonne santé.",
        ethics4_title: "Garanties",
        ethics4_text: "Nous fournissons un certificat de vente, le pedigree LOF, le carnet de santé et une garantie contre les maladies héréditaires.",
        outdoor_title: "Extérieur obligatoire",
        outdoor_text1: "Le Léonberg est un chien de grande taille qui a impérativement besoin d'un extérieur. Nous ne vendons nos chiots qu'à des familles disposant d'un jardin clôturé ou d'un terrain sécurisé.",
        outdoor_why: "Pourquoi cette exigence ?",
        outdoor_reason1: "Espace nécessaire : Un Léonberg adulte mesure jusqu'à 80 cm au garrot et pèse 50 à 70 kg. Il a besoin d'espace pour se déplacer confortablement.",
        outdoor_reason2: "Activité physique : Cette race nécessite de l'exercice quotidien. Un jardin permet des moments de détente et de jeu essentiels à son équilibre.",
        outdoor_reason3: "Bien-être mental : L'accès à l'extérieur réduit le stress et les comportements destructeurs liés à l'ennui.",
        outdoor_reason4: "Besoins naturels : Les grandes races ont des besoins physiologiques fréquents qu'un extérieur facilite grandement.",
        outdoor_min_title: "Minimum requis :",
        outdoor_min_size: "Jardin d'au moins 200 m² clôturé",
        outdoor_min_shade: "Zone d'ombre disponible",
        outdoor_min_water: "Point d'eau fraîche accessible",
        outdoor_note: "Note importante : Vivre en appartement, même grand, n'est pas adapté à un Léonberg. Nous refuserons systématiquement les demandes sans extérieur, pour le bien-être de l'animal.",
        heat_title: "Protection contre la canicule",
        heat_text1: "Le Léonberg est particulièrement sensible à la chaleur. Avec son épais sous-poil et sa taille imposante, il est exposé aux coups de chaleur qui peuvent être mortels.",
        heat_danger_title: "⚠️ Danger vital",
        heat_danger_text: "Un Léonberg ne doit JAMAIS être laissé seul en plein soleil, même à l'ombre. La température corporelle peut monter très rapidement et entraîner la mort en quelques heures.",
        heat_rules_title: "Règles à respecter impérativement :",
        heat_rule1: "Jamais seul dehors : Ne laissez jamais votre Léonberg seul dans le jardin par temps chaud. La surveillance constante est obligatoire.",
        heat_rule2: "Promenades matinales/soirées : Sortez votre chien tôt le matin et tard le soir. Évitez les sorties entre 10h et 19h en période de canicule.",
        heat_rule3: "Eau fraîche en permanence : Changez l'eau régulièrement pour qu'elle reste fraîche. Plusieurs points d'eau sont recommandés.",
        heat_rule4: "Zone ombragée : Assurez-vous que votre jardin dispose d'une zone d'ombre naturelle (arbres) ou artificielle (tonnelle, voile d'ombrage).",
        heat_rule5: "Maison fraîche : En cas de forte chaleur, votre chien doit pouvoir rentrer dans une maison fraîche (climatisation ou ventilation efficace).",
        heat_rule6: "Tonte estivale : Une tonte légère du ventre et des flancs peut aider, mais jamais rasé (le poil protège aussi du soleil).",
        heat_signs_title: "Signes de détresse thermique :",
        heat_sign1: "Haleinement excessif et difficulté à respirer",
        heat_sign2: "Gencives et langue très rouges ou bleutées",
        heat_sign3: "Salivation abondante",
        heat_sign4: "Léthargie, faiblesse, difficulté à se lever",
        heat_sign5: "Vomissements ou diarrhée",
        heat_sign6: "Perte de connaissance",
        heat_emergency: "En cas de symptômes : Refroidissez immédiatement votre chien avec des serviettes humides tièdes (pas froides !) et contactez d'urgence un vétérinaire. C'est une urgence vitale !",
        heat_commitment: "Engagement : En adoptant un chiot chez nous, vous vous engagez à respecter strictement ces consignes. Nous pourrons refuser une adoption si nous estimons que les conditions de protection contre la chaleur ne sont pas réunies.",
        process_label: "Procédure",
        process_title: "Le processus d'adoption",
        step1_title: "Premier contact",
        step1_text: "Contactez-nous par email ou téléphone. Nous échangerons sur votre mode de vie, votre expérience canine et vos attentes.",
        step2_title: "Visite de l'élevage",
        step2_text: "Nous vous invitons à rencontrer nos chiens et à visiter nos installations. C'est aussi l'occasion de discuter plus en détail de la race.",
        step3_title: "Validation",
        step3_text: "Si nous estimons que vous correspondez au profil idéal pour un Léonberg, nous validons votre demande d'adoption.",
        step4_title: "Choix du chiot",
        step4_text: "Vers 6 semaines, nous vous aidons à choisir le chiot dont le caractère correspond le mieux à votre famille.",
        step5_title: "Réservation",
        step5_text: "Un acompte de 30% confirme votre réservation. Le solde est dû au moment du départ du chiot.",
        step6_title: "Départ à 8 semaines",
        step6_text: "Votre chiot part avec son carnet de santé, son pedigree, ses vaccins, sa puce électronique et un kit de démarrage.",
        pricing_title: "Tarif",
        price: "[À définir]",
        price_note: "Prix indicatif - à confirmer",
        includes_title: "Ce prix inclut :",
        include1: "Chiot inscrit au LOF avec pedigree",
        include2: "Vaccinations et vermifugation à jour",
        include3: "Identification par puce électronique",
        include4: "Certificat de bonne santé du vétérinaire",
        include5: "Kit de démarrage (croquettes, jouet, couverture)",
        include6: "Contrat de vente et garanties",
        include7: "Suivi et conseils à vie",
        adoption_cta_title: "Prêt à accueillir un Léonberg ?",
        adoption_cta_text: "Contactez-nous pour démarrer votre démarche d'adoption.",
        
        // Page Portées
        litters_title: "Nos Portées",
        litters_subtitle: "Suivez l'arrivée de nos chiots",
        status_title: "En préparation",
        status_text: "Notre élevage est actuellement en phase d'installation et de sélection de notre future reproductrice. Les premières portées sont prévues pour 2025.",
        status_badge: "Aucune portée en cours",
        timeline_label: "Calendrier",
        timeline_title: "Le cycle d'une portée",
        timeline1_title: "Saillie",
        timeline1_text: "La saillie est planifiée avec soin après validation de tous les tests de santé. Nous choisissons le reproducteur mâle pour compléter au mieux notre femelle.",
        timeline1_note: "À venir",
        timeline2_title: "Gestation",
        timeline2_text: "La gestation dure environ 63 jours. Notre future maman bénéficie d'une surveillance vétérinaire régulière et d'une alimentation adaptée.",
        timeline2_note: "À venir",
        timeline3_title: "Naissance",
        timeline3_text: "Les chiots naissent dans un environnement chaleureux et sécurisé. La mise bas se déroule sous supervision attentive.",
        timeline3_note: "À venir",
        timeline4_title: "0-3 semaines",
        timeline4_text: "Les chiots restent avec leur mère en permanence. Leur développement est surveillé quotidiennement (prise de poids, comportement).",
        timeline4_note: "À venir",
        timeline5_title: "3-6 semaines",
        timeline5_text: "Ouverture des yeux, premiers pas, sevrage progressif. Début de la socialisation avec les bruits, les enfants et les autres animaux.",
        timeline5_note: "À venir",
        timeline6_title: "6-8 semaines",
        timeline6_text: "Vaccinations, identification par puce électronique, choix définitif des adoptants. Les familles peuvent venir rencontrer leur futur compagnon.",
        timeline6_note: "À venir",
        timeline7_title: "8 semaines - Départ",
        timeline7_text: "Les chiots partent dans leur nouvelle famille avec leur kit complet : carnet de santé, pedigree, vaccins, puce, et conseils personnalisés.",
        timeline7_note: "À venir",
        future_label: "Prochainement",
        future_title: "Portées à venir",
        badge_expected: "Prévue",
        litter1_title: "Portée 2025",
        label_mom: "Maman",
        litter1_mom: "[À confirmer]",
        label_dad: "Papa",
        litter1_dad: "[À confirmer]",
        label_date: "Date prévue",
        litter1_date: "[À confirmer]",
        label_puppies: "Chiots attendus",
        litter1_puppies: "[À confirmer]",
        progress_label: "En préparation",
        litter1_note: "Les informations seront communiquées dès que notre reproductrice sera sélectionnée.",
        register_title: "Être informé des portées",
        register_text: "Vous souhaitez être prévenu de l'arrivée de nos premières portées ? Laissez-nous vos coordonnées et nous vous contacterons dès que des informations seront disponibles.",
        register_benefits: "Avantages :",
        benefit1: "Notification prioritaire des naissances",
        benefit2: "Accès aux photos et vidéos des chiots",
        benefit3: "Possibilité de visite avant réservation",
        benefit4: "Conseils personnalisés pour la préparation",
        btn_register: "S'inscrire aux alertes",
        gallery_label: "Galerie",
        gallery_title: "Photos à venir",
        gallery_text: "Les photos de nos premiers chiots seront publiées ici dès la naissance de la première portée.",
        litters_cta_title: "Des questions sur nos portées ?",
        litters_cta_text: "N'hésitez pas à nous contacter pour toute information.",
        
        // Page Contact
        contact_title: "Contact",
        contact_subtitle: "Nous sommes à votre écoute",
        info_title: "Nos coordonnées",
        label_address: "Adresse",
        label_email: "Email",
        label_phone: "Téléphone",
        label_hours: "Horaires",
        hours_text: "Sur rendez-vous uniquement",
        social_title: "Réseaux sociaux",
        form_title: "Envoyez-nous un message",
        label_firstname: "Prénom",
        label_lastname: "Nom",
        label_email_form: "Email",
        label_phone_form: "Téléphone",
        label_subject: "Sujet",
        subject_placeholder: "-- Choisissez un sujet --",
        subject_info: "Demande d'information",
        subject_litter: "Portées / Réservation",
        subject_visit: "Demande de visite",
        subject_other: "Autre",
        label_message: "Message",
        label_privacy: "J'accepte que mes données soient utilisées pour me recontacter. Voir les mentions légales.",
        btn_send: "Envoyer le message",
        form_note: "Note : Pour utiliser ce formulaire, créez un compte sur Formspree et remplacez YOUR_FORM_ID dans le code.",
        location_label: "Localisation",
        location_title: "Où nous trouver",
        map_text: "Carte à intégrer",
        map_instructions: "Remplacez ce bloc par un iframe Google Maps avec votre adresse exacte.",
        access_title: "Accès",
        access_text: "Notre élevage est situé à Arrodets-ez-Angles, dans les Hautes-Pyrénées, à proximité de Lourdes et de Tarbes.",
        access1: "À 20 minutes de Lourdes",
        access2: "À 30 minutes de Tarbes",
        access3: "À 2h de Toulouse",
        access4: "À 2h30 de Bordeaux",
        visit_title: "Visites",
        visit_text: "Les visites se font uniquement sur rendez-vous. Nous serons ravis de vous accueillir et de vous présenter nos installations et nos chiens.",
        visit_note: "Merci de nous contacter préalablement pour convenir d'un créneau.",
        faq_label: "FAQ",
        faq_title: "Questions fréquentes",
        faq1_question: "Quand auront lieu les premières portées ?",
        faq1_answer: "Nous prévoyons nos premières portées pour 2025. Notre élevage est actuellement en phase d'installation et de sélection de notre future reproductrice. Inscrivez-vous à nos alertes pour être informé en priorité.",
        faq2_question: "Quel est le prix d'un chiot ?",
        faq2_answer: "Le prix sera défini prochainement et communiqué sur cette page. Il inclura le pedigree LOF, les vaccins, l'identification, le certificat de santé et un kit de démarrage.",
        faq3_question: "Puis-je réserver un chiot avant la naissance ?",
        faq3_answer: "Nous acceptons les pré-réservations une fois la saillie confirmée. Un acompte de 30% sera demandé pour valider la réservation définitive après la naissance.",
        faq4_question: "Puis-je visiter l'élevage ?",
        faq4_answer: "Oui, les visites sont possibles sur rendez-vous. Nous serons ravis de vous accueillir et de vous présenter nos installations et nos chiens.",
        faq5_question: "Livrez-vous les chiots ?",
        faq5_answer: "Nous privilégions les remises en main propre pour que vous puissiez rencontrer vos futurs compagnons. Des solutions peuvent être envisagées pour les adoptants éloignés.",
        contact_cta_title: "Une autre question ?",
        contact_cta_text: "N'hésitez pas à nous contacter directement par email ou téléphone.",
        btn_email: "Nous écrire"
    },
    
    en: {
        // Navigation
        nav_home: "Home",
        nav_race: "The Breed",
        nav_our_dogs: "Our Dogs",
        nav_adoption: "Welfare & Adoption",
        nav_litters: "Litters",
        nav_contact: "Contact",
        
        // Hero
        hero_badge: "Family Breeding",
        hero_title: "Le Val Paisible<br>des Hautes Pyrénées",
        hero_subtitle: "Leonbergers raised with love in an exceptional natural setting",
        btn_litters: "Discover our litters",
        btn_contact: "Contact us",
        scroll_down: "Discover",
        
        // Préparation
        prep_title: "Preparing for 2025",
        prep_text: "Our breeding facility is currently being set up in an idyllic setting in the Hautes-Pyrénées. We are working with passion to offer you exceptional Leonberger puppies, raised in the best conditions.",
        prep_feature1: "2 hectares of natural land",
        prep_feature2: "Family facility",
        prep_feature3: "Optimal socialization",
        
        // About
        about_label: "Our Philosophy",
        about_title: "Human-scale breeding",
        about_text1: "Located in Arrodets-ez-Angles, in the heart of the Hautes-Pyrénées, our breeding facility prioritizes quality over quantity. We produce only one or two litters per year, thus guaranteeing personalized attention to each puppy.",
        about_text2: "Our future Leonberger mother will live with the family, surrounded by love and care. The puppies will be socialized from an early age with children, other animals, and different everyday environments.",
        stat_litters: "litters/year",
        stat_weeks: "weeks minimum",
        stat_love: "with love",
        caption_location: "Arrodets-ez-Angles (65)",
        
        // Features
        features_label: "Our Commitments",
        features_title: "Why choose Le Val Paisible?",
        feature1_title: "Exceptional natural setting",
        feature1_text: "Our dogs evolve in a preserved mountain environment, with direct access to nature and green spaces.",
        feature2_title: "Rigorous selection",
        feature2_text: "Our future breeding female is carefully chosen for her physical qualities, balanced temperament, and impeccable health.",
        feature3_title: "Personalized support",
        feature3_text: "We remain available to advise you before, during, and after the adoption of your companion.",
        feature4_title: "Animal welfare priority",
        feature4_text: "Optimal living conditions, premium food, regular veterinary care, and lots of love every day.",
        
        // CTA
        cta_title: "Interested in a Leonberger puppy?",
        cta_text: "Contact us to be informed of the arrival of our first litters and reserve your life companion.",
        cta_button: "Get in touch",
        
        // Footer
        footer_tagline: "Family breeding of Leonbergers in the Hautes-Pyrénées",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Information",
        footer_mentions: "Legal notices",
        footer_siret: "SIRET: in registration process",
        footer_rights: "All rights reserved.",
        
        // Page La Race
        race_title: "The Leonberger",
        race_subtitle: "A giant with a tender heart",
        origins_label: "History",
        origins_title: "Origins of the breed",
        origins_text1: "The Leonberger is a German breed created in the mid-19th century by Heinrich Essig, a breeder from the town of Leonberg in Baden-Württemberg. His goal was to create an imposing dog resembling the lion on his town's coat of arms.",
        origins_text2: "To develop this breed, he likely crossed Saint Bernards, Newfoundlands, and Great Pyrenees. The result is a majestic, powerful dog of infinite gentleness.",
        origins_text3: "Very quickly, the Leonberger became a prized companion dog for European royal courts. Napoleon III, Empress Elisabeth of Austria (Sissi), and even the Prince of Wales owned them.",
        origins_caption: "A legendary dog for over 150 years",
        char_label: "Characteristics",
        char_title: "Breed standards",
        char_size: "Height",
        char_weight: "Weight",
        char_color: "Coat",
        char_color_desc: "Fawn with black mask",
        char_color_note: "Long, dense, waterproof coat",
        char_lifespan: "Life expectancy",
        char_lifespan_note: "Up to 10-11 years with good care",
        male: "Male",
        female: "Female",
        temp_label: "Temperament",
        temp_title: "Temperament and behavior",
        temp_text1: "The Leonberger is renowned for its exceptional temperament. Despite its imposing size, it is a gentle, calm dog extremely attached to its family. It is particularly patient with children, making it an excellent family dog.",
        temp_text2: "Intelligent and observant, it knows how to adapt to different situations. It is neither aggressive nor fearful, but has a certain reserve towards strangers, making it a good deterrent guard dog.",
        traits_title: "Character traits:",
        trait1: "Gentle and patient",
        trait2: "Intelligent and obedient",
        trait3: "Protective of its family",
        trait4: "Sociable with other animals",
        trait5: "Calm indoors",
        trait6: "Playful and affectionate",
        temp_caption: "A faithful and protective companion",
        care_label: "Care",
        care_title: "Care and needs",
        care_grooming: "Grooming",
        care_grooming_text: "Regular brushing (2-3 times per week) necessary to maintain its long coat. Heavy shedding occurs twice a year.",
        care_exercise: "Exercise",
        care_exercise_text: "Need for space and daily exercise. Regular walks and access to a fenced garden are recommended.",
        care_training: "Training",
        care_training_text: "Gentle but firm training from an early age. Responds very well to positive reinforcement.",
        care_space: "Living space",
        care_space_text: "Requires spacious outdoor area. Can live in an apartment only with sufficient exercise.",
        care_climate: "Climate",
        care_climate_text: "Tolerates cold well thanks to its thick undercoat. Beware of heat: never alone in full sun.",
        care_diet: "Diet",
        care_diet_text: "Diet adapted to large breeds. Weight monitoring to preserve joints.",
        health_label: "Health",
        health_title: "Health and prevention",
        health_text1: "Like all large breeds, the Leonberger may be prone to certain hereditary pathologies. A responsible breeder performs tests on breeding stock to minimize these risks.",
        health_text2: "Our breeding facility commits to breeding only tested dogs free from these conditions, thus guaranteeing the best possible health for our puppies.",
        health_tests: "Recommended tests:",
        test1: "Hip and elbow dysplasia",
        test2: "Polyneuropathy (LPN1, LPN2)",
        test3: "Gastric dilatation-volvulus",
        test4: "Hereditary cataract",
        test5: "Hypothyroidism",
        health_caption: "A robust dog with proper care",
        race_cta_title: "Is the Leonberger right for you?",
        race_cta_text: "Discover our adoption conditions and commitments for the welfare of our puppies.",
        race_cta_button: "Our adoption conditions",
        
        // Page Nos Chiens
        dogs_title: "Our Dogs",
        dogs_subtitle: "Our four-legged family",
        future_mom: "Future Mom",
        mom_name: "[Dog's name]",
        dog_info_title: "Information",
        detail_birth: "Date of birth",
        mom_birth: "[To be completed]",
        detail_color: "Coat",
        mom_color: "[To be completed]",
        detail_height: "Height",
        mom_height: "[To be completed]",
        detail_weight: "Weight",
        mom_weight: "[To be completed]",
        detail_lof: "LOF Number",
        mom_lof: "[To be completed]",
        detail_tattoo: "Tattoo/Chip",
        mom_tattoo: "[To be completed]",
        health_hd: "Hip dysplasia: <em>Coming soon</em>",
        health_ed: "Elbow dysplasia: <em>Coming soon</em>",
        health_lpn: "LPN Polyneuropathy: <em>Coming soon</em>",
        health_eyes: "Eye examination: <em>Coming soon</em>",
        documents_title: "Documents",
        doc_pedigree: "Pedigree",
        doc_tests: "Test results",
        doc_show: "Show records",
        documents_note: "Documents will be available soon.",
        character_title: "Character",
        mom_character1: "Our future mother is currently being selected. We are looking for a dog with a balanced, gentle, and affectionate character, from a healthy lineage and conforming to breed standards.",
        mom_character2: "She will live with the family, surrounded by love and care, and will be socialized from an early age to become an attentive mother and an exceptional life companion.",
        criteria_label: "Our Commitment",
        criteria_title: "Selection criteria",
        criteria1_title: "Impeccable health",
        criteria1_text: "All mandatory and recommended health tests for the breed must be satisfactory. We make no concessions on the health of our breeding stock.",
        criteria2_title: "Balanced temperament",
        criteria2_text: "We prioritize gentle, stable, sociable dogs adapted to family life. Temperament is as important as physical beauty.",
        criteria3_title: "Conformation to standard",
        criteria3_text: "Morphology, proportions, coat, and gait must correspond to the FCI Leonberger standard to preserve the characteristics of this magnificent breed.",
        criteria4_title: "Verified origins",
        criteria4_text: "We carefully study the pedigree and family tree to avoid inbreeding and select the best bloodlines.",
        dad_title: "The Future Dad",
        dad_text: "The choice of the male breeder will be made with the same care as for our female. We will select a stud dog matching our criteria for health, temperament, and conformation to the standard.",
        dad_text2: "Information about the future dad will be communicated when the litter is officially announced.",
        dogs_cta_title: "Would you like to know more?",
        dogs_cta_text: "Contact us with any questions about our dogs or future litters.",
        
        // Page Bien-être & Adoption
        adoption_title: "Welfare & Adoption",
        adoption_subtitle: "Our commitments to our puppies",
        ethics_label: "Our Philosophy",
        ethics_title: "Ethical and responsible breeding",
        ethics_text1: "At Le Val Paisible, the welfare of our dogs is our absolute priority. We are not a puppy mill: we produce only 1 to 2 litters per year, thus allowing us to devote all our attention to each puppy.",
        ethics_text2: "Our commitment goes beyond the simple sale: we want each puppy to go to a family that suits them and where they will be happy throughout their life.",
        ethics1_title: "Family breeding",
        ethics1_text: "Our puppies grow up within our family, surrounded by love and daily care. They are socialized with children, other animals, and everyday noises.",
        ethics2_title: "Gradual weaning",
        ethics2_text: "Puppies stay with their mother until at least 8 weeks. This natural weaning is essential for their physical and behavioral development.",
        ethics3_title: "Veterinary follow-up",
        ethics3_text: "Each puppy benefits from complete veterinary follow-up: vaccinations, deworming, identification, and health certificate.",
        ethics4_title: "Guarantees",
        ethics4_text: "We provide a sales certificate, LOF pedigree, health record, and guarantee against hereditary diseases.",
        outdoor_title: "Outdoor space required",
        outdoor_text1: "The Leonberger is a large dog that absolutely needs outdoor space. We only sell our puppies to families with a fenced garden or secure land.",
        outdoor_why: "Why this requirement?",
        outdoor_reason1: "Necessary space: An adult Leonberger measures up to 80 cm at the withers and weighs 50 to 70 kg. It needs space to move comfortably.",
        outdoor_reason2: "Physical activity: This breed requires daily exercise. A garden allows essential relaxation and play moments for its balance.",
        outdoor_reason3: "Mental well-being: Access to the outdoors reduces stress and destructive behaviors linked to boredom.",
        outdoor_reason4: "Natural needs: Large breeds have frequent physiological needs that an outdoor space greatly facilitates.",
        outdoor_min_title: "Minimum required:",
        outdoor_min_size: "Garden of at least 200 m² fenced",
        outdoor_min_shade: "Shaded area available",
        outdoor_min_water: "Fresh water point accessible",
        outdoor_note: "Important note: Living in an apartment, even a large one, is not suitable for a Leonberger. We will systematically refuse requests without outdoor space, for the welfare of the animal.",
        heat_title: "Heat wave protection",
        heat_text1: "The Leonberger is particularly sensitive to heat. With its thick undercoat and imposing size, it is exposed to heat stroke which can be fatal.",
        heat_danger_title: "⚠️ Vital danger",
        heat_danger_text: "A Leonberger must NEVER be left alone in full sun, even in the shade. Body temperature can rise very quickly and lead to death within hours.",
        heat_rules_title: "Rules to strictly follow:",
        heat_rule1: "Never alone outside: Never leave your Leonberger alone in the garden in hot weather. Constant supervision is mandatory.",
        heat_rule2: "Morning/evening walks: Take your dog out early in the morning and late in the evening. Avoid outings between 10am and 7pm during heat waves.",
        heat_rule3: "Fresh water at all times: Change water regularly to keep it fresh. Multiple water points are recommended.",
        heat_rule4: "Shaded area: Make sure your garden has a natural (trees) or artificial (pergola, shade sail) shaded area.",
        heat_rule5: "Cool house: In case of high heat, your dog must be able to enter a cool house (air conditioning or effective ventilation).",
        heat_rule6: "Summer trim: A light trim of the belly and flanks can help, but never shaved (the coat also protects from the sun).",
        heat_signs_title: "Signs of heat distress:",
        heat_sign1: "Excessive panting and difficulty breathing",
        heat_sign2: "Very red or bluish gums and tongue",
        heat_sign3: "Abundant salivation",
        heat_sign4: "Lethargy, weakness, difficulty standing",
        heat_sign5: "Vomiting or diarrhea",
        heat_sign6: "Loss of consciousness",
        heat_emergency: "In case of symptoms: Immediately cool your dog with lukewarm (not cold!) wet towels and urgently contact a veterinarian. This is a life-threatening emergency!",
        heat_commitment: "Commitment: By adopting a puppy from us, you commit to strictly following these instructions. We may refuse an adoption if we consider that heat protection conditions are not met.",
        process_label: "Procedure",
        process_title: "The adoption process",
        step1_title: "First contact",
        step1_text: "Contact us by email or phone. We will discuss your lifestyle, dog experience, and expectations.",
        step2_title: "Visit to the breeding facility",
        step2_text: "We invite you to meet our dogs and visit our facilities. It's also an opportunity to discuss the breed in more detail.",
        step3_title: "Validation",
        step3_text: "If we consider that you match the ideal profile for a Leonberger, we validate your adoption request.",
        step4_title: "Choosing the puppy",
        step4_text: "Around 6 weeks, we help you choose the puppy whose character best matches your family.",
        step5_title: "Reservation",
        step5_text: "A 30% deposit confirms your reservation. The balance is due when the puppy leaves.",
        step6_title: "Departure at 8 weeks",
        step6_text: "Your puppy leaves with their health record, pedigree, vaccinations, microchip, and starter kit.",
        pricing_title: "Price",
        price: "[To be defined]",
        price_note: "Indicative price - to be confirmed",
        includes_title: "This price includes:",
        include1: "Puppy registered with LOF with pedigree",
        include2: "Up-to-date vaccinations and deworming",
        include3: "Microchip identification",
        include4: "Veterinary health certificate",
        include5: "Starter kit (kibble, toy, blanket)",
        include6: "Sales contract and guarantees",
        include7: "Lifetime follow-up and advice",
        adoption_cta_title: "Ready to welcome a Leonberger?",
        adoption_cta_text: "Contact us to start your adoption process.",
        
        // Page Portées
        litters_title: "Our Litters",
        litters_subtitle: "Follow the arrival of our puppies",
        status_title: "In preparation",
        status_text: "Our breeding facility is currently in the setup and selection phase of our future breeding female. First litters are planned for 2025.",
        status_badge: "No litter in progress",
        timeline_label: "Timeline",
        timeline_title: "The cycle of a litter",
        timeline1_title: "Mating",
        timeline1_text: "Mating is carefully planned after validation of all health tests. We choose the male breeder to best complement our female.",
        timeline1_note: "Coming soon",
        timeline2_title: "Gestation",
        timeline2_text: "Gestation lasts about 63 days. Our future mother benefits from regular veterinary monitoring and adapted nutrition.",
        timeline2_note: "Coming soon",
        timeline3_title: "Birth",
        timeline3_text: "Puppies are born in a warm and secure environment. Whelping takes place under attentive supervision.",
        timeline3_note: "Coming soon",
        timeline4_title: "0-3 weeks",
        timeline4_text: "Puppies stay with their mother at all times. Their development is monitored daily (weight gain, behavior).",
        timeline4_note: "Coming soon",
        timeline5_title: "3-6 weeks",
        timeline5_text: "Eyes opening, first steps, gradual weaning. Beginning of socialization with noises, children, and other animals.",
        timeline5_note: "Coming soon",
        timeline6_title: "6-8 weeks",
        timeline6_text: "Vaccinations, microchip identification, final choice of adopters. Families can come meet their future companion.",
        timeline6_note: "Coming soon",
        timeline7_title: "8 weeks - Departure",
        timeline7_text: "Puppies leave for their new family with their complete kit: health record, pedigree, vaccinations, chip, and personalized advice.",
        timeline7_note: "Coming soon",
        future_label: "Coming soon",
        future_title: "Upcoming litters",
        badge_expected: "Expected",
        litter1_title: "Litter 2025",
        label_mom: "Mother",
        litter1_mom: "[To be confirmed]",
        label_dad: "Father",
        litter1_dad: "[To be confirmed]",
        label_date: "Expected date",
        litter1_date: "[To be confirmed]",
        label_puppies: "Expected puppies",
        litter1_puppies: "[To be confirmed]",
        progress_label: "In preparation",
        litter1_note: "Information will be communicated as soon as our breeding female is selected.",
        register_title: "Be informed of litters",
        register_text: "Would you like to be notified of the arrival of our first litters? Leave us your contact details and we will contact you as soon as information is available.",
        register_benefits: "Benefits:",
        benefit1: "Priority notification of births",
        benefit2: "Access to photos and videos of puppies",
        benefit3: "Possibility to visit before reservation",
        benefit4: "Personalized advice for preparation",
        btn_register: "Sign up for alerts",
        gallery_label: "Gallery",
        gallery_title: "Photos coming soon",
        gallery_text: "Photos of our first puppies will be published here from the birth of the first litter.",
        litters_cta_title: "Questions about our litters?",
        litters_cta_text: "Feel free to contact us for any information.",
        
        // Page Contact
        contact_title: "Contact",
        contact_subtitle: "We are listening",
        info_title: "Our contact details",
        label_address: "Address",
        label_email: "Email",
        label_phone: "Phone",
        label_hours: "Hours",
        hours_text: "By appointment only",
        social_title: "Social media",
        form_title: "Send us a message",
        label_firstname: "First name",
        label_lastname: "Last name",
        label_email_form: "Email",
        label_phone_form: "Phone",
        label_subject: "Subject",
        subject_placeholder: "-- Choose a subject --",
        subject_info: "Information request",
        subject_litter: "Litters / Reservation",
        subject_visit: "Visit request",
        subject_other: "Other",
        label_message: "Message",
        label_privacy: "I accept that my data be used to contact me. See legal notices.",
        btn_send: "Send message",
        form_note: "Note: To use this form, create an account on Formspree and replace YOUR_FORM_ID in the code.",
        location_label: "Location",
        location_title: "Where to find us",
        map_text: "Map to integrate",
        map_instructions: "Replace this block with a Google Maps iframe with your exact address.",
        access_title: "Access",
        access_text: "Our breeding facility is located in Arrodets-ez-Angles, in the Hautes-Pyrénées, near Lourdes and Tarbes.",
        access1: "20 minutes from Lourdes",
        access2: "30 minutes from Tarbes",
        access3: "2 hours from Toulouse",
        access4: "2h30 from Bordeaux",
        visit_title: "Visits",
        visit_text: "Visits are by appointment only. We will be delighted to welcome you and show you our facilities and dogs.",
        visit_note: "Please contact us in advance to arrange a time slot.",
        faq_label: "FAQ",
        faq_title: "Frequently asked questions",
        faq1_question: "When will the first litters take place?",
        faq1_answer: "We are planning our first litters for 2025. Our breeding facility is currently in the setup and selection phase of our future breeding female. Sign up for our alerts to be informed first.",
        faq2_question: "What is the price of a puppy?",
        faq2_answer: "The price will be defined soon and communicated on this page. It will include the LOF pedigree, vaccinations, identification, health certificate, and starter kit.",
        faq3_question: "Can I reserve a puppy before birth?",
        faq3_answer: "We accept pre-reservations once mating is confirmed. A 30% deposit will be required to validate the final reservation after birth.",
        faq4_question: "Can I visit the breeding facility?",
        faq4_answer: "Yes, visits are possible by appointment. We will be delighted to welcome you and show you our facilities and dogs.",
        faq5_question: "Do you deliver puppies?",
        faq5_answer: "We prefer hand delivery so you can meet your future companions. Solutions can be considered for distant adopters.",
        contact_cta_title: "Another question?",
        contact_cta_text: "Feel free to contact us directly by email or phone.",
        btn_email: "Write to us"
    },
    
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_race: "Die Rasse",
        nav_our_dogs: "Unsere Hunde",
        nav_adoption: "Wohlbefinden & Adoption",
        nav_litters: "Würfe",
        nav_contact: "Kontakt",
        
        // Hero
        hero_badge: "Familienzucht",
        hero_title: "Le Val Paisible<br>des Hautes Pyrénées",
        hero_subtitle: "Leonberger mit Liebe in außergewöhnlicher Natur aufgezogen",
        btn_litters: "Unsere Würfe entdecken",
        btn_contact: "Kontaktieren Sie uns",
        scroll_down: "Entdecken",
        
        // Préparation
        prep_title: "Vorbereitung für 2025",
        prep_text: "Unsere Zucht wird derzeit in einer idyllischen Umgebung in den Hautes-Pyrénées eingerichtet. Wir arbeiten mit Leidenschaft daran, Ihnen außergewöhnliche Leonberger-Welpen in besten Bedingungen anzubieten.",
        prep_feature1: "2 Hektar natürliches Gelände",
        prep_feature2: "Familiäre Einrichtung",
        prep_feature3: "Optimale Sozialisierung",
        
        // Footer
        footer_tagline: "Familienzucht von Leonbergern in den Hautes-Pyrénées",
        footer_nav: "Navigation",
        footer_contact: "Kontakt",
        footer_legal: "Informationen",
        footer_mentions: "Impressum",
        footer_siret: "SIRET: in Registrierung",
        footer_rights: "Alle Rechte vorbehalten."
    },
    
    es: {
        // Navigation
        nav_home: "Inicio",
        nav_race: "La Raza",
        nav_our_dogs: "Nuestros Perros",
        nav_adoption: "Bienestar y Adopción",
        nav_litters: "Camadas",
        nav_contact: "Contacto",
        
        // Hero
        hero_badge: "Cría Familiar",
        hero_title: "Le Val Paisible<br>des Hautes Pyrénées",
        hero_subtitle: "Leonbergers criados con amor en un entorno natural excepcional",
        btn_litters: "Descubrir nuestras camadas",
        btn_contact: "Contactarnos",
        scroll_down: "Descubrir",
        
        // Préparation
        prep_title: "En preparación para 2025",
        prep_text: "Nuestro criadero está actualmente en proceso de instalación en un entorno idílico en los Altos Pirineos. Trabajamos con pasión para ofrecerle cachorros Leonberger excepcionales, criados en las mejores condiciones.",
        prep_feature1: "2 hectáreas de terreno natural",
        prep_feature2: "Instalación familiar",
        prep_feature3: "Socialización óptima",
        
        // Footer
        footer_tagline: "Criadero familiar de Leonbergers en los Altos Pirineos",
        footer_nav: "Navegación",
        footer_contact: "Contacto",
        footer_legal: "Información",
        footer_mentions: "Aviso legal",
        footer_siret: "SIRET: en proceso de inscripción",
        footer_rights: "Todos los derechos reservados."
    },
    
    pt: {
        // Navigation
        nav_home: "Início",
        nav_race: "A Raça",
        nav_our_dogs: "Nossos Cães",
        nav_adoption: "Bem-estar e Adoção",
        nav_litters: "Ninhadas",
        nav_contact: "Contato",
        
        // Hero
        hero_badge: "Criação Familiar",
        hero_title: "Le Val Paisible<br>des Hautes Pyrénées",
        hero_subtitle: "Leonbergers criados com amor em um cenário natural excepcional",
        btn_litters: "Descobrir nossas ninhadas",
        btn_contact: "Entrar em contato",
        scroll_down: "Descobrir",
        
        // Préparation
        prep_title: "Em preparação para 2025",
        prep_text: "Nosso canil está atualmente em processo de instalação em um cenário idílico nos Altos Pirenéus. Trabalhamos com paixão para oferecer filhotes Leonberger excepcionais, criados nas melhores condições.",
        prep_feature1: "2 hectares de terreno natural",
        prep_feature2: "Instalação familiar",
        prep_feature3: "Socialização ótima",
        
        // Footer
        footer_tagline: "Criação familiar de Leonbergers nos Altos Pirenéus",
        footer_nav: "Navegação",
        footer_contact: "Contato",
        footer_legal: "Informações",
        footer_mentions: "Aviso legal",
        footer_siret: "SIRET: em processo de inscrição",
        footer_rights: "Todos os direitos reservados."
    }
};

// ========================================
// GESTION DE LA LANGUE
// ========================================
let currentLang = 'fr';

function initLanguage() {
    // Récupérer la langue sauvegardée ou utiliser le français par défaut
    const savedLang = localStorage.getItem('valpaisible-lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    
    // Appliquer la langue
    applyLanguage(currentLang);
    
    // Mettre à jour les boutons de langue
    updateLangButtons(currentLang);
}

function applyLanguage(lang) {
    if (!translations[lang]) return;
    
    const texts = translations[lang];
    
    // Parcourir tous les éléments avec data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[key]) {
            // Gérer le HTML (pour les balises <br>)
            if (texts[key].includes('<')) {
                element.innerHTML = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });
    
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
}

function updateLangButtons(activeLang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });
}

function changeLanguage(lang) {
    if (!translations[lang] || lang === currentLang) return;
    
    currentLang = lang;
    localStorage.setItem('valpaisible-lang', lang);
    
    applyLanguage(lang);
    updateLangButtons(lang);
}

// ========================================
// MENU MOBILE
// ========================================
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.nav-mobile');
    
    if (!menuBtn || !mobileNav) return;
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Empêcher le défilement du body quand le menu est ouvert
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    });
    
    // Fermer le menu quand on clique sur un lien
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// FAQ ACCORDION
// ========================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fermer les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle l'item actuel
            item.classList.toggle('active');
        });
    });
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Ajouter/retirer la classe scrolled
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observer les éléments à animer
    document.querySelectorAll('.feature-card, .characteristic-card, .care-item, .criteria-card, .ethics-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ========================================
// INITIALISATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser la langue
    initLanguage();
    
    // Écouteurs sur les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    
    // Initialiser le menu mobile
    initMobileMenu();
    
    // Initialiser la FAQ
    initFAQ();
    
    // Initialiser l'effet de scroll sur le header
    initHeaderScroll();
    
    // Initialiser le smooth scroll
    initSmoothScroll();
    
    // Initialiser les animations au scroll
    initScrollAnimations();
});

// ========================================
// UTILITAIRES
// ========================================

// Fonction pour vérifier si l'élément est dans le viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
