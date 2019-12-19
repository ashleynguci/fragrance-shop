const SHOP_DATA = {
  bestsellers: {
    id: 1,
    title: "Bestsellers",
    routeName: "bestsellers",
    items: [
      {
        id: 1,
        name: "Versace pour homme",
        imageUrl: require("../../image/bestsellers/versace-75.jpg"),
        price: 75
      },
      {
        id: 2,
        name: "Chanel No.5",
        imageUrl: require("../../image/bestsellers/chanel-no5-120.jpg"),
        price: 120
      },
      {
        id: 3,
        name: "DavidOff Cool water",
        imageUrl: require("../../image/bestsellers/Davidoff-Coolwater.jpg"),
        price: 68
      },
      {
        id: 4,
        name:
          "Lancome La vie est belle",
        imageUrl: require("../../image/bestsellers/lancome-lavie.png"),
        price: 110
      },
      {
        id: 5,
        name: "Acqua di GIO",
        imageUrl: require("../../image/bestsellers/aquadi-gio.jpg"),
        price: 65
      },
      {
        id: 6,
        name: "YSL Black Opium",
        imageUrl: require("../../image/bestsellers/ysl-blackopium.jpg"),
        price: 85
      },
      {
        id: 7,
        name: "Jean Paul Gaultier EDT",
        imageUrl: require("../../image/bestsellers/jean-paul-60.jpg"),
        price: 60
      },
      {
        id: 8,
        name: "D&G Light Blue",
        imageUrl: require("../../image/bestsellers/d&g-lightblue.jpg"),
        price: 95
      },
      {
        id: 9,
        name: "1Million Parco Rabanne",
        imageUrl: require("../../image/bestsellers/parco-rabanne.jpg"),
        price: 74
      },
    ]
  },
  luxury: {
    id: 2,
    title: "Luxury",
    routeName: "luxury",
    items: [
      {
        id: 10,
        name: "Delina Exclusif",
        imageUrl: require("../../image/luxury/delina-exclusif-230.jpg"),
        price: 235
      },
      {
        id: 11,
        name: "Giorgio Armani",
        imageUrl: require("../../image/luxury/giorgio-armani-398.jpg"),
        price: 398
      },
      {
        id: 12,
        name: "Gris Dior",
        imageUrl: require("../../image/luxury/gris-dior-307.jpg"),
        price: 307
      },
      {
        id: 13,
        name: "Guerlains les Exclusifs",
        imageUrl: require("../../image/luxury/guerlains-205.jpg"),
        price: 205
      },
      {
        id: 14,
        name: "Oud Maison",
        imageUrl: require("../../image/luxury/oud-maison-290.jpg"),
        price: 290
      },
    ]
  },
  budget: {
    id: 3,
    title: "Budget",
    routeName: "budget",
    items: [
      {
        id: 16,
        name: "Midnight Fantasy",
        imageUrl: require("../../image/budget/britney-14.5.jpg"),
        price: 14.5
      },
      {
        id: 17,
        name: "Reb'l Fleur Rihanna ",
        imageUrl: require("../../image/budget/rihana-18.jpg"),
        price: 18
      },
      {
        id: 18,
        name: "Lolita Lempicka",
        imageUrl: require("../../image/budget/lolita-25.jpg"),
        price: 25
      },
      {
        id: 19,
        name: "Someday by J.Bieber",
        imageUrl: require("../../image/budget/jbsd-18.9.jpg"),
        price: 19
      },
      {
        id: 15,
        name: "TruthOrDare By Madonna",
        imageUrl: require("../../image/budget/truth-dare-40.jpeg"),
        price: 30
      },
      {
        id: 40,
        name: "Pink Sugar",
        imageUrl: require("../../image/budget/pink-sugar-20.jpg"),
        price: 20
      },
      {
        id: 41,
        name: "Moschino",
        imageUrl: require("../../image/budget/moschino-20.jpg"),
        price: 20
      },
      {
        id: 42,
        name: "Ferragamo",
        imageUrl: require("../../image/budget/ferragamo-35.jpg"),
        price: 35
      },
    ]
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 21,
        name: "Good Girl",
        imageUrl: require("../../image/womens/good-girl-95.jpg"),
        price: 95
      },
      {
        id: 20,
        name: "Le Labo",
        imageUrl: require("../../image/womens/lelabo-100.jpg"),
        price: 110
      },
      {
        id: 23,
        name: "Lancome Tresor",
        imageUrl: require("../../image/womens/lancome-tresor-50.jpg"),
        price: 65
      },
      {
        id: 22,
        name: "Viva la Juicy",
        imageUrl: require("../../image/womens/viva-lajuicy-45.jpg"),
        price: 80
      },
      {
        id: 24,
        name: "Miss Dior",
        imageUrl: require("../../image/womens/missdior-100.jpeg"),
        price: 100
      },
      {
        id: 25,
        name: "Chanel Chance",
        imageUrl: require("../../image/womens/chanel-chance.jpg"),
        price: 120
      },
      {
        id: 26,
        name: "Coco Chanel",
        imageUrl: require("../../image/womens/coco-chanel.jpg"),
        price: 20
      },
      {
        id: 43,
        name: "Poison Girl Dior",
        imageUrl: require("../../image/womens/dior-poison-100.jpg"),
        price: 100
      },
      {
        id: 44,
        name: "YSL Black Opium",
        imageUrl: require("../../image/bestsellers/ysl-blackopium.jpg"),
        price: 85
      },
      {
        id: 45,
        name: "Chanel No.5",
        imageUrl: require("../../image/bestsellers/chanel-no5-120.jpg"),
        price: 120
      },
      {
        id: 46,
        name:
          "Lancome La vie est belle",
        imageUrl: require("../../image/bestsellers/lancome-lavie.png"),
        price: 110
      },
    ]
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 27,
        name: "Dior Sauvage",
        imageUrl: require("../../image/mens/dior-sauvage.jpg"),
        price: 87
      },
      {
        id: 28,
        name: "Tomford Tobacco",
        imageUrl: require("../../image/mens/tomford-tabaco-152.jpg"),
        price: 152
      },
      {
        id: 29,
        name:
          "Invictus",
        imageUrl: require("../../image/mens/invictus-52.jpg"),
        price: 52
      },
      {
        id: 30,
        name: "CoSTUME National Homme",
        imageUrl: require("../../image/mens/custume-45.jpg"),
        price: 45
      },
      {
        id: 31,
        name: "Versace Homme",
        imageUrl: require("../../image/mens/versace-75.jpg"),
        price: 75
      },
      {
        id: 32,
        name: "Jean Paul",
        imageUrl: require("../../image/mens/jean-paul-60.jpg"),
        price: 60
      },
      {
        id: 52,
        name: "CK be",
        imageUrl: require("../../image/mens/ck-35.jpg"),
        price: 55
      },
      {
        id: 53,
        name: "Lanuit de l'homme YSL",
        imageUrl: require("../../image/mens/ysl-lanuit-70.jpeg"),
        price: 70
      },
      {
        id: 54,
        name: "DavidOff Cool water",
        imageUrl: require("../../image/bestsellers/Davidoff-Coolwater.jpg"),
        price: 68
      },
    ]
  }
};
export default SHOP_DATA;