/**
 * Centralized Business Configuration for Ashwini Tupe | Aari & Fabric Art
 * 
 * Edit this single file to update your phone number, social links,
 * services, gallery pieces, or branding details.
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: 'aari' | 'painting';
  tagline: string;
  description: string;
  fabric: string;
  technique: string;
  motifs: string;
  timeframe?: string;
  image?: string; // Optional local image path or placeholder
  patternType: 'peacock_zari' | 'lotus_organza' | 'floral_jaal' | 'paisley_kundan' | 'rose_botanical' | 'marigold_silk';
  accentColor: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  marathiTitle: string;
  subtitle: string;
  description: string;
  highlights: string[];
  sampleWorks: string[];
  categoryKey: 'aari' | 'painting';
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  project: string;
  quote: string;
}

export const BUSINESS_CONFIG = {
  // Brand & Artist Information
  artistName: "Ashwini Tupe",
  brandName: "Ashwini Tupe | Aari & Fabric Art",
  shortBrand: "Ashwini Tupe",
  tagline: "Every Thread Tells a Story.",
  taglineMarathi: "प्रत्येक धाग्यात विणलेली एक सुंदर कला.",
  
  // Location
  locationCity: "Pune",
  locationState: "Maharashtra",
  locationCountry: "India",
  locationFull: "Pune, Maharashtra, India",
  googleMapsUrl: "https://www.google.com/maps/place/Pune,+Maharashtra",
  
  // Contact & Social Details (Edit these to your actual details)
  // For WhatsApp: Enter your 10-digit number or with country code, e.g. "+91 98765 43210"
  whatsappNumber: "+91 98765 43210", 
  
  // Set to null or empty string "" if you want to hide Instagram or Email
  instagramHandle: "ashwini_aari_art",
  instagramUrl: "https://instagram.com/ashwini_aari_art",
  emailAddress: "ashwini.tupe.art@gmail.com",
  
  // Demo Mode Banner
  // Explains transparently to users that current gallery photos are curated portfolio concept demonstrations
  isDemoMode: true,
  demoNotice: "Showcase items represent sample artistic design concepts. Each custom order is uniquely handcrafted to your specifications.",

  // Testimonials visibility flag: Keep false until authentic customer reviews are available
  showTestimonials: false,
  testimonials: [] as TestimonialItem[],

  // Process Steps
  processSteps: [
    {
      step: "01",
      title: "Share Your Idea",
      marathiTitle: "तुमची कल्पना सांगा",
      description: "Send us a message on WhatsApp with your blouse, saree, or fabric painting requirements. You can also share any inspiration pictures or sketches.",
    },
    {
      step: "02",
      title: "Discuss Your Design",
      marathiTitle: "डिझाइनवर चर्चा",
      description: "We discuss motifs, threadwork styles (zardozi, beads, silk thread, or hand-painted strokes), color harmonies, and suitable fabrics.",
    },
    {
      step: "03",
      title: "Finalize the Details",
      marathiTitle: "तपशील निश्चित करा",
      description: "We confirm your design draft, measurements, placement, timeline, and material selection before putting needle to fabric.",
    },
    {
      step: "04",
      title: "Begin Your Custom Creation",
      marathiTitle: "कलाकृतीची सुरुवात",
      description: "Ashwini meticulously handcrafts your piece with utmost precision and care, bringing your personalized textile art to life in Pune.",
    },
  ],

  // Core Craft Services
  services: [
    {
      id: "aari-embroidery",
      title: "Aari Hand Embroidery",
      marathiTitle: "आरी हॅन्ड एम्ब्रॉयडरी",
      subtitle: "Intricate traditional needlework with metallic zari, zardozi, and pearls",
      description: "Aari embroidery is a celebrated heritage needlework technique executed using a fine tambour hook needle. From heavy bridal blouses to elegant festive necklines, every stitch is laid by hand with utmost patience, yielding unmatched relief, shimmer, and heirloom durability.",
      categoryKey: "aari",
      highlights: [
        "Bridal Blouse Custom Embroidery",
        "Zardozi, Cutdana, Pearl & Kundan Detailing",
        "Intricate Peacock, Paisley & Floral Jaal Motifs",
        "Custom Neckline, Sleeve & Back Panel Embellishments",
      ],
      sampleWorks: [
        "Bridal Blouses",
        "Saree Borders & Pallus",
        "Festive Kurti Necklines",
        "Personalized Monograms",
      ],
    },
    {
      id: "fabric-painting",
      title: "Bespoke Fabric Painting",
      marathiTitle: "हस्तकला फॅब्रिक पेंटिंग",
      subtitle: "Hand-painted botanical, floral, and contemporary textile art",
      description: "Transform fine fabrics into wearable canvases. Ashwini uses specialized textile pigments on organza, tussar silk, cotton, and linen to hand-paint delicate florals, traditional Indian motifs, and custom modern strokes that remain supple, vibrant, and colorfast.",
      categoryKey: "painting",
      highlights: [
        "Hand-Painted Organza & Silk Sarees",
        "Botanical & Floral Fabric Art",
        "Custom Dupattas & Stoles",
        "Personalized Kurti & Dress Material Art",
      ],
      sampleWorks: [
        "Organza Floral Sarees",
        "Lotus Motif Dupattas",
        "Scenic & Folk Art Stoles",
        "Customized Cushion Art",
      ],
    },
  ] as ServiceDetail[],

  // Portfolio Gallery items (Concept showcase designs with rich craft metadata)
  gallery: [
    {
      id: "gallery-1",
      title: "Royal Peacock Zardozi Bridal Blouse",
      category: "aari",
      tagline: "Heavy Bridal Aari Needlework",
      description: "A magnificent bridal creation featuring intricate peacock motifs worked with antique gold zari, metallic bullion zardozi, micro-pearls, and ruby stones on deep crimson velvet silk.",
      fabric: "Pure Silk Velvet",
      technique: "Aari Tambour Needle & Zardozi Threading",
      motifs: "Regal Peacock & Feather Arabesque",
      timeframe: "Bespoke Crafting",
      patternType: "peacock_zari",
      accentColor: "#572B3A",
    },
    {
      id: "gallery-2",
      title: "Lotus Bloom Hand-Painted Organza Saree",
      category: "painting",
      tagline: "Botanical Textile Art",
      description: "Soft ivory pure organza saree adorned with freehand watercolor-style pink Indian lotuses, shaded emerald leaves, and delicate champagne-gold outlining.",
      fabric: "Pure Tissue Organza",
      technique: "Textile Watercolor & Metallic Hand Lining",
      motifs: "Indian Sacred Lotus & Lilypads",
      timeframe: "Bespoke Crafting",
      patternType: "lotus_organza",
      accentColor: "#C4A572",
    },
    {
      id: "gallery-3",
      title: "Champagne Floral Jaal Saree Blouse",
      category: "aari",
      tagline: "Delicate Festive Embroidery",
      description: "Symmetrical all-over floral trellis worked in champagne gold zari threads, delicate French knots, cutdana beads, and shimmering sequins along the sleeve cuffs.",
      fabric: "Raw Silk / Chanderi",
      technique: "Fine Aari Threadwork & Cutdana Beadwork",
      motifs: "Floral Jaal & Creeper Vines",
      timeframe: "Bespoke Crafting",
      patternType: "floral_jaal",
      accentColor: "#DFCA9B",
    },
    {
      id: "gallery-4",
      title: "Botanical Rose Silk Dupatta",
      category: "painting",
      tagline: "Artistic Saree & Dupatta Art",
      description: "Dusty rose tussar silk dupatta hand-painted with English tea roses, soft sepia botanical stems, and gold dust accents framing the borders.",
      fabric: "Tussar Silk",
      technique: "Multi-layered Acrylic Fabric Glaze",
      motifs: "Vintage Roses & Botanical Sprigs",
      timeframe: "Bespoke Crafting",
      patternType: "rose_botanical",
      accentColor: "#EBCFD0",
    },
    {
      id: "gallery-5",
      title: "Heritage Paisley Kundan Neckline",
      category: "aari",
      tagline: "Timeless Traditional Blouse Art",
      description: "Classic teardrop mango paisley motif embroidered with raised padding, framed by glass kundan stones and delicate golden dabka work on midnight plum silk.",
      fabric: "Matka Silk",
      technique: "Raised Aari Padded Work & Dabka",
      motifs: "Heritage Kalka (Paisley) & Pearl Drops",
      timeframe: "Bespoke Crafting",
      patternType: "paisley_kundan",
      accentColor: "#3F1D29",
    },
    {
      id: "gallery-6",
      title: "Marigold & Gold Leaf Festive Saree",
      category: "painting",
      tagline: "Handcrafted Festive Painting",
      description: "Warm mustard beige chanderi saree featuring hand-painted marigold garlands along the pallu with delicate golden strokes reflecting festive radiance.",
      fabric: "Chanderi Cotton-Silk",
      technique: "Fine Brushwork & Gold Foil Accents",
      motifs: "Festive Genda Phool (Marigold)",
      timeframe: "Bespoke Crafting",
      patternType: "marigold_silk",
      accentColor: "#A58654",
    },
  ] as GalleryItem[],
};

/**
 * Localization translations for English and Marathi
 */
export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      aari: "Aari Work",
      painting: "Fabric Painting",
      creations: "Creations",
      about: "About",
      process: "Process",
      contact: "Contact",
      enquireButton: "Enquire on WhatsApp",
    },
    hero: {
      eyebrow: "HANDCRAFTED IN PUNE, INDIA",
      title: "Artistry Woven Into Every Thread.",
      subtitle: "Discover exquisite Aari embroidery and hand-painted fabric creations, thoughtfully crafted by Ashwini Tupe in Pune.",
      exploreBtn: "Explore Our Creations",
      whatsappBtn: "Enquire on WhatsApp",
    },
    intro: {
      eyebrow: "THE ART OF HANDCRAFTED BEAUTY",
      heading: "Where Tradition Meets Imagination.",
      p1: "In a world of mass-produced garments, handmade textile art carries an irreplaceable warmth. Every stitch of Aari embroidery requires hours of patient hand coordination, while each brushstroke on fabric breathes life into personal memories.",
      p2: "Based in Pune, Ashwini Tupe specializes in bespoke bridal blouse embroidery, traditional motifs, and custom hand-painted sarees. Every piece is an intimate collaboration between your vision and timeless artisan craftsmanship.",
      aboutLink: "Meet the Artist",
    },
    craft: {
      aariTitle: "Aari Hand Embroidery",
      aariDesc: "Intricate needlework with fine tambour hooks, antique zari, zardozi, and pearls.",
      paintingTitle: "Bespoke Fabric Painting",
      paintingDesc: "Delicate watercolor florals and custom botanical artwork on luxury fabrics.",
      exploreCategory: "Explore Designs",
      customOrderTag: "Customizable for your wardrobe",
    },
    gallery: {
      eyebrow: "CURATED PORTFOLIO",
      heading: "Featured Handcrafted Creations",
      subtitle: "Browse sample designs in Aari needlework and fabric painting. Select any piece to view details or enquire about custom creation.",
      filterAll: "All Works",
      filterAari: "Aari Work",
      filterPainting: "Fabric Painting",
      enquireSimilar: "Enquire About Similar Work",
      viewDetails: "View Details",
      demoTag: "Design Concept",
    },
    whyHandmade: {
      eyebrow: "THE ARTISAN DIFFERENCE",
      heading: "Why Choose Handcrafted Art?",
      card1Title: "Thoughtful Handcrafted Details",
      card1Desc: "Every bead, zari knot, and pigment stroke is placed with individual attention that machine embroidery cannot replicate.",
      card2Title: "Personalized Expression",
      card2Desc: "Tailored to your color palette, blouse cut, wedding theme, and sentimental design motifs.",
      card3Title: "Traditional Craftsmanship",
      card3Desc: "Rooted in authentic Indian textile heritage, preserving the delicate art of Aari hook work and fabric painting.",
      card4Title: "Attention to Design & Finishing",
      card4Desc: "From fabric tension to edge finishing, every piece is made with dedication to comfort, longevity, and beauty.",
    },
    about: {
      eyebrow: "THE ARTIST'S STORY",
      heading: "Meet the Artist Behind the Craft",
      p1: "Hello, I am Ashwini Tupe, a textile artist based in Pune, Maharashtra. My passion lies at the intersection of traditional needlecraft and expressive fabric art.",
      p2: "Aari embroidery allows me to sculpt tactile luxury through metallic threads, pearls, and kundan stones. Simultaneously, fabric painting gives me the freedom to translate natural florals and delicate botanical poetry onto flowing silk and organza.",
      p3: "Whether preparing a bridal blouse for your wedding day or personalizing an heirloom saree, I look forward to bringing your dream design to life.",
      locationNote: "Studio based in Pune, Maharashtra",
      whatsappCta: "Message Ashwini directly on WhatsApp",
    },
    process: {
      eyebrow: "HOW IT WORKS",
      heading: "Your Custom Order Journey",
      subtitle: "A smooth, personal experience from initial thought to finished creation.",
    },
    contact: {
      eyebrow: "START YOUR CREATION",
      heading: "Let’s Craft Something Beautiful",
      subtitle: "Have a design idea in mind? Reach out on WhatsApp or submit your enquiry below. We will discuss your vision, fabrics, and custom details.",
      formName: "Your Full Name",
      formPhone: "WhatsApp / Mobile Number",
      formService: "Service Interested In",
      formMessage: "Design Requirements / Idea",
      formPlaceholderMsg: "Share your blouse cut, saree type, occasion date, or any specific design ideas...",
      referenceNotice: "Have reference photos or sketches? You can share them directly in WhatsApp once the chat opens.",
      submitBtn: "Send Enquiry via WhatsApp",
      directWhatsapp: "Direct WhatsApp",
      locationHeading: "Location",
      locationPune: "Pune, Maharashtra, India",
      openInMaps: "View Pune on Google Maps",
      validationName: "Please enter your name.",
      validationPhone: "Please enter a valid 10-digit mobile number.",
    },
    footer: {
      craftedWith: "Handcrafted with devotion in Pune, Maharashtra.",
      rights: "All rights reserved.",
      demoDisclaimer: "Sample portfolio works shown for demonstration purposes. Genuine custom orders crafted uniquely upon request.",
    },
  },
  mr: {
    nav: {
      home: "मुखपृष्ठ",
      aari: "आरी वर्क",
      painting: "फॅब्रिक पेंटिंग",
      creations: "कलाकृती",
      about: "कलाकार",
      process: "प्रक्रिया",
      contact: "संपर्क",
      enquireButton: "व्हॉट्सॲपवर चौकशी करा",
    },
    hero: {
      eyebrow: "पुणे, महाराष्ट्र येथे हस्तनिर्मित",
      title: "प्रत्येक धाग्यात विणलेली एक सुंदर कला.",
      subtitle: "अश्विनी तुपे यांच्याद्वारे प्रेमाने साकारलेली मनमोहक आरी एम्ब्रॉयडरी आणि हॅन्ड-पेंटेड फॅब्रिक कला.",
      exploreBtn: "कलाकृती पहा",
      whatsappBtn: "व्हॉट्सॲपवर संपर्क करा",
    },
    intro: {
      eyebrow: "हस्तकलानिर्मित सौंदर्य",
      heading: "जिथे परंपरा आणि कल्पकता एकत्र येतात.",
      p1: "मशिनच्या युगात हाताने घडवलेल्या कलेला एक विशेष आणि अथांग जिव्हाळा असतो. आरी सुईच्या प्रत्येक टाक्यात आणि कापडावरील प्रत्येक रंगाच्या फटकाऱ्यात आपलेपणा जपला जातो.",
      p2: "पुण्यात स्थित, अश्विनी तुपे यांच्याकडे नवरीच्या ब्लाउजवरील विशेष डिझाइन, पारंपरिक जरी वर्क आणि हॅन्ड-पेंटेड साड्यांचे काम केले जाते. आपल्या आवडीनुसार प्रत्येक डिझाइन सानुकूलित केले जाते.",
      aboutLink: "कलाकाराविषयी अधिक जाणून घ्या",
    },
    craft: {
      aariTitle: "आरी हॅन्ड एम्ब्रॉयडरी",
      aariDesc: "सुईच्या बारीक कामाने घडवलेली जरदोजी, मणी आणि मोत्यांची नक्षी.",
      paintingTitle: "हस्तकला फॅब्रिक पेंटिंग",
      paintingDesc: "ऑर्गॅन्झा, सिल्कवर वॉटरकलर स्टाईल फुले आणि आकर्षक कलाकृती.",
      exploreCategory: "डिझाइन पहा",
      customOrderTag: "आपल्या आवडीनुसार उपलब्ध",
    },
    gallery: {
      eyebrow: "कलादालन",
      heading: "निवडक हस्तकला डिझाइन",
      subtitle: "आरी वर्क आणि फॅब्रिक पेंटिंगमधील सुंदर कलाकृती. अधिक माहितीसाठी किंवा ऑर्डरसाठी व्हॉट्सॲपवर संपर्क करा.",
      filterAll: "सर्व",
      filterAari: "आरी वर्क",
      filterPainting: "फॅब्रिक पेंटिंग",
      enquireSimilar: "अशाच डिझाइनबद्दल विचारा",
      viewDetails: "तपशील पहा",
      demoTag: "डिझाइन संकल्पना",
    },
    whyHandmade: {
      eyebrow: "हस्तकलेचे महत्त्व",
      heading: "हस्तकला कलाकृती का निवडावी?",
      card1Title: "बारीक आणि सविस्तर कलाकाम",
      card1Desc: "प्रत्येक मणी आणि धागा हाताने काळजीपूर्वक विणला जातो, जो मशीनच्या कामात मिळत नाही.",
      card2Title: "वैयक्तिक डिझाइन",
      card2Desc: "तुमच्या आवडीचे रंग, पॅटर्न आणि सण-समारंभाच्या थीमनुसार विशेष रचना.",
      card3Title: "पारंपरिक भारतीय वारसा",
      card3Desc: "पारंपरिक आरी सुईकाम आणि हस्तकलेच्या समृद्ध परंपरेचे जतन.",
      card4Title: "उत्कृष्ट फिनिशिंग व दर्जा",
      card4Desc: "कापडाच्या दर्जापासून ते शिवणापर्यंत प्रत्येक गोष्टीत टिकाऊपणा आणि सुंदरता.",
    },
    about: {
      eyebrow: "कलाकाराची ओळख",
      heading: "कलेच्या मागील कलाकारास भेटा",
      p1: "नमस्कार, मी अश्विनी तुपे, पुणे, महाराष्ट्र येथील वस्त्रकलाकार. आरी एम्ब्रॉयडरी आणि फॅब्रिक पेंटिंगच्या माध्यमातून सुंदर कलाकृती साकारणे ही माझी आवड आहे.",
      p2: "आरी कामामुळे मला सोनेरी जरी, मणी आणि कुंदनच्या साहाय्याने नक्षीदार सौंदर्य घडवता येते. त्याचबरोबर फॅब्रिक पेंटिंगमुळे रेशमी वस्त्रांवर फुलांचे रंग उधळता येतात.",
      p3: "तुमच्या लग्नाचा ब्लाउज असो किंवा खास साडी, तुमची स्वप्नातील डिझाइन प्रत्यक्षात आणण्यासाठी मी उत्सुक आहे.",
      locationNote: "पुणे, महाराष्ट्र",
      whatsappCta: "अश्विनी यांना थेट व्हॉट्सॲपवर मेसेज करा",
    },
    process: {
      eyebrow: "ऑर्डर कशी करावी",
      heading: "आपल्या कस्टमाईज्ड ऑर्डरची प्रक्रिया",
      subtitle: "पहिल्या कल्पनेपासून ते तयार कलाकृतीपर्यंतचा सोपा आणि पारदर्शक प्रवास.",
    },
    contact: {
      eyebrow: "ऑर्डरसाठी संपर्क",
      heading: "एक सुंदर कलाकृती घडवूया",
      subtitle: "आपल्या मनात एखादी डिझाइन आहे का? व्हॉट्सॲपवर संपर्क करा किंवा खाली फॉर्म भरा.",
      formName: "आपले पूर्ण नाव",
      formPhone: "व्हॉट्सॲप / मोबाईल नंबर",
      formService: "कोणत्या कामात रस आहे?",
      formMessage: "डिझाइनची कल्पना / माहिती",
      formPlaceholderMsg: "ब्लाउजचा प्रकार, साडीचे कापड, किंवा कार्यक्रमाची तारीख लिहा...",
      referenceNotice: "तुमच्याकडे डिझाइनचे फोटो असल्यास व्हॉट्सॲप चॅट सुरू झाल्यावर तुम्ही सहज शेअर करू शकता.",
      submitBtn: "व्हॉट्सॲपवर माहिती पाठवा",
      directWhatsapp: "थेट व्हॉट्सॲप",
      locationHeading: "स्थान",
      locationPune: "पुणे, महाराष्ट्र, भारत",
      openInMaps: "गूगल मॅप्सवर पुणे पहा",
      validationName: "कृपया आपले नाव प्रविष्ट करा.",
      validationPhone: "कृपया योग्य १० अंकी मोबाईल नंबर टाका.",
    },
    footer: {
      craftedWith: "पुणे, महाराष्ट्र येथे प्रेमाने आणि भक्तीभावाने हस्तनिर्मित.",
      rights: "सर्व हक्क राखीव.",
      demoDisclaimer: "दर्शविलेली चित्रे नमुना संकल्पना आहेत. प्रत्यक्ष काम आपल्या गरजेनुसार हाताने केले जाते.",
    },
  },
};
