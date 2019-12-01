exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("products")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("products").insert([
        {
          name: "#13 Dawgs",
          url: "https://www.cannvas.me/strain-matcher/13dawgs",
          type: "Hybrid",
          helps_with: "Anxiety, Depression",
          tastes_like: "Earthy",
          thc_content: "19.2%",
          cbd_content: "0%"
        },
        {
          name: "#3 Edison (Hash Plant)",
          url: "https://www.cannvas.me/strain-matcher/3edisonhashplant",
          type: "Indica",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Earthy, Harsh, Pungent",
          thc_content: "17.6%",
          cbd_content: "0%"
        },
        {
          name: "#5 Edison",
          url: "https://www.cannvas.me/strain-matcher/5edison",
          type: "Hybrid",
          helps_with: "Anxiety, Back Pain, Depression",
          tastes_like: "Earthy, Spicy, Herbal",
          thc_content: "6.8%",
          cbd_content: "12.4%"
        },
        {
          name: "#7 Edison (Acadia)",
          url: "https://www.cannvas.me/strain-matcher/7edisonacadia",
          type: "Sativa",
          helps_with: "Depression, Migraines, Chronic Pain",
          tastes_like: "Citrusy, Berry, Tangy",
          thc_content: "23.2%",
          cbd_content: "0%"
        },
        {
          name: "#8 Ball Kush",
          url: "https://www.cannvas.me/strain-matcher/8ballkush",
          type: "Indica",
          helps_with: "Anxiety",
          tastes_like: "Earthy, Sweet, Peppery",
          thc_content: "21.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Aarden",
          url: "https://www.cannvas.me/strain-matcher/aarden",
          type: "Indica",
          helps_with: "Migraines, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Sage, Pungent",
          thc_content: "17%",
          cbd_content: "0%"
        },
        {
          name: "Acadia",
          url: "https://www.cannvas.me/strain-matcher/acadia",
          type: "Sativa",
          helps_with: "Depression, Concentration, Fatigue",
          tastes_like: "Earthy, Citrusy, Berry",
          thc_content: "22%",
          cbd_content: "0%"
        },
        {
          name: "Acadia Mini",
          url: "https://www.cannvas.me/strain-matcher/acadiamini",
          type: "Sativa",
          helps_with: "Concentration, Depression, Chronic Pain",
          tastes_like: "Earthy, Herbal, Citrusy",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Acapulco Gold",
          url: "https://www.cannvas.me/strain-matcher/acapulcogold",
          type: "Sativa",
          helps_with: "Anxiety, Back Pain, Insomnia",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Afghan Kush",
          url: "https://www.cannvas.me/strain-matcher/afghankush",
          type: "Indica",
          helps_with: "Chronic Pain, Insomnia, Anxiety",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "22%",
          cbd_content: "6%"
        },
        {
          name: "Afghani",
          url: "https://www.cannvas.me/strain-matcher/afghani",
          type: "Indica",
          helps_with: "Migraines, Insomnia, Depression",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Afghani CBD",
          url: "https://www.cannvas.me/strain-matcher/afghanicbd",
          type: "Indica",
          helps_with: "Insomnia, Stress, Muscle Spasms",
          tastes_like: "Earthy, Flowery, Fruity",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Afghani Kush",
          url: "https://www.cannvas.me/strain-matcher/afghanikush",
          type: "Indica",
          helps_with: "Anxiety, Chronic Pain, Depression",
          tastes_like: "Earthy, Flowery, Sweet",
          thc_content: "22%",
          cbd_content: "0%"
        },
        {
          name: "Afghanica",
          url: "https://www.cannvas.me/strain-matcher/afghanica",
          type: "Hybrid",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Sweet, Flowery, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "After Dinner",
          url: "https://www.cannvas.me/strain-matcher/afterdinner",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Woody, Peppery, Fruity",
          thc_content: "14.6%",
          cbd_content: "0.1%"
        },
        {
          name: "AK-47",
          url: "https://www.cannvas.me/strain-matcher/ak47",
          type: "Hybrid",
          helps_with: "Depression, Stress, Insomnia",
          tastes_like: "Earthy, Woody, Citrusy",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "AK-48",
          url: "https://www.cannvas.me/strain-matcher/ak48",
          type: "Hybrid",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Earthy, Pungent, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Alaska",
          url: "https://www.cannvas.me/strain-matcher/alaska",
          type: "Hybrid",
          helps_with: "Appetite Loss, Depression, Fatigue",
          thc_content: "23.5%",
          cbd_content: "0%"
        },
        {
          name: "Alaskan Ice",
          url: "https://www.cannvas.me/strain-matcher/alaskanice",
          type: "Hybrid",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Earthy, Sweet, Minty",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Alien Dawg",
          url: "https://www.cannvas.me/strain-matcher/aliendawg",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Chronic Pain",
          tastes_like: "Earthy",
          thc_content: "18.9%",
          cbd_content: "0%"
        },
        {
          name: "Ambition (Blue Dream)",
          url: "https://www.cannvas.me/strain-matcher/ambitionbluedream",
          type: "Sativa",
          helps_with: "Insomnia, Stress, Anxiety",
          tastes_like: "Earthy, Berry, Blueberry",
          thc_content: "26%",
          cbd_content: "0.1%"
        },
        {
          name: "Ambrosia",
          url: "https://www.cannvas.me/strain-matcher/ambrosia",
          type: "Hybrid",
          helps_with: "Depression, Migraines, Stress",
          tastes_like: "Flowery, Sweet, Lavender",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Americano",
          url: "https://www.cannvas.me/strain-matcher/americano",
          type: "Indica",
          helps_with: "Migraines, Nauseous, Chronic Pain",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Amnesia",
          url: "https://www.cannvas.me/strain-matcher/amnesia",
          type: "Sativa",
          helps_with: "Depression, Chronic Pain, Stress",
          tastes_like: "Earthy, Pungent, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Amnesia Haze",
          url: "https://www.cannvas.me/strain-matcher/amnesiahaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Lemony",
          thc_content: "17.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Andromeda #1 (EM-Dog No.1)",
          url: "https://www.cannvas.me/strain-matcher/andromeda1emdogno1",
          type: "Sativa",
          helps_with: "Muscle Spasms, Depression, Chronic Pain",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "20%",
          cbd_content: "0.3%"
        },
        {
          name: "Andromeda #2 (EM-Dog No.2)",
          url: "https://www.cannvas.me/strain-matcher/andromeda2emdogno2",
          type: "Sativa",
          helps_with: "Stress, Insomnia, Anxiety",
          tastes_like: "Pungent, Bitter, Woody",
          thc_content: "10%",
          cbd_content: "0.3%"
        },
        {
          name: "Anesthesia",
          url: "https://www.cannvas.me/strain-matcher/anesthesia",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Earthy, Pungent, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Animal Cookies",
          url: "https://www.cannvas.me/strain-matcher/animalcookies",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Anxiety",
          tastes_like: "Earthy, Sweet",
          thc_content: "14.9%",
          cbd_content: "0%"
        },
        {
          name: "Apple Jack",
          url: "https://www.cannvas.me/strain-matcher/applejack",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Apple, Sweet, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Aqua Flora (Shark Shock)",
          url: "https://www.cannvas.me/strain-matcher/aquaflorasharkshock",
          type: "Indica",
          helps_with: "Anxiety, Muscle Spasms, Depression",
          thc_content: "3.8%",
          cbd_content: "8.2%"
        },
        {
          name: "Arctic Sun",
          url: "https://www.cannvas.me/strain-matcher/arcticsun",
          type: "Hybrid",
          helps_with: "Stress",
          tastes_like: "Ammonia, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Argyle",
          url: "https://www.cannvas.me/strain-matcher/argyle",
          type: "Indica",
          helps_with: "Anxiety, Depression, Migraines",
          tastes_like: "Earthy, Sweet, Piney",
          thc_content: "4.7%",
          cbd_content: "5.2%"
        },
        {
          name: "Argyle + (Plus)",
          url: "https://www.cannvas.me/strain-matcher/argyleplus",
          type: "Indica",
          helps_with: "Appetite Loss, Anxiety, Inflammation",
          tastes_like: "Earthy, Pungent, Wild Garlic",
          thc_content: "7.5%",
          cbd_content: "7.5%"
        },
        {
          name: "Artemis Maximus",
          url: "https://www.cannvas.me/strain-matcher/artemismaximus",
          type: "Hybrid",
          helps_with: "Stress, Back Pain, Chronic Pain",
          tastes_like: "Earthy, Diesel, Citrusy",
          thc_content: "20.9%",
          cbd_content: "0%"
        },
        {
          name: "Asgard (AK-47)",
          url: "https://www.cannvas.me/strain-matcher/asgardak47",
          type: "Sativa",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Citrusy, Woody, Earthy",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Atlin #1 (Purple LA No.1)",
          url: "https://www.cannvas.me/strain-matcher/atlin1purplelano1",
          type: "Indica",
          helps_with: "Anxiety, Depression, Chronic Pain",
          tastes_like: "Dill, Pungent",
          thc_content: "20%",
          cbd_content: "0.3%"
        },
        {
          name: "Atlin #2 (Purple LA No.2)",
          url: "https://www.cannvas.me/strain-matcher/atlin2purplelano2",
          type: "Indica",
          helps_with: "Insomnia, Back Pain, Depression",
          tastes_like: "Berry, Smooth, Fruity",
          thc_content: "16%",
          cbd_content: "0.3%"
        },
        {
          name: "Atlin #3 (Purple LA No.3)",
          url: "https://www.cannvas.me/strain-matcher/atlin3purplelano3",
          type: "Indica",
          helps_with: "Chronic Pain",
          tastes_like: "Berry, Earthy, Fruity",
          thc_content: "12%",
          cbd_content: "0.3%"
        },
        {
          name: "Atna #1 (Grape LA No.1)",
          url: "https://www.cannvas.me/strain-matcher/atna1grapelano1",
          type: "Indica",
          helps_with: "Chronic Pain, Insomnia, Anxiety",
          tastes_like: "Grape, Sweet, Fruity",
          thc_content: "20%",
          cbd_content: "0.3%"
        },
        {
          name: "Atna #2 (Grape LA No.2)",
          url: "https://www.cannvas.me/strain-matcher/atna2grapelano2",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Grape, Fruity, Citrusy",
          thc_content: "16%",
          cbd_content: "0.3%"
        },
        {
          name: "Atomical Haze",
          url: "https://www.cannvas.me/strain-matcher/atomicalhaze",
          type: "Hybrid",
          helps_with: "Chronic Pain, Back Pain, Anxiety",
          thc_content: "12%",
          cbd_content: "0%"
        },
        {
          name: "A-Train",
          url: "https://www.cannvas.me/strain-matcher/atrain",
          type: "Hybrid",
          helps_with: "Stress, Appetite Loss, Fatigue",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Augusta (LA Affie)",
          url: "https://www.cannvas.me/strain-matcher/augustalaaffie",
          type: "Indica",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Earthy, Piney, Pungent",
          thc_content: "21%",
          cbd_content: "0.3%"
        },
        {
          name: "Aurora Borealis",
          url: "https://www.cannvas.me/strain-matcher/auroraborealis",
          type: "Hybrid",
          helps_with: "Stress, Depression, Insomnia",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Aurora Indica",
          url: "https://www.cannvas.me/strain-matcher/auroraindica",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Woody, Earthy, Lemony",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Avalon (White Widow)",
          url: "https://www.cannvas.me/strain-matcher/avalonwhitewidow",
          type: "Hybrid",
          thc_content: "17.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Avi",
          url: "https://www.cannvas.me/strain-matcher/avi",
          type: "Sativa",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Piney, Berry, Earthy",
          thc_content: "5%",
          cbd_content: "9%"
        },
        {
          name: "Avidekel",
          url: "https://www.cannvas.me/strain-matcher/avidekel",
          type: "Hybrid",
          helps_with: "Migraines, Anxiety, Stress",
          tastes_like: "Earthy, Sweet, Piney",
          thc_content: "0.5%",
          cbd_content: "16%"
        },
        {
          name: "Azure Haze",
          url: "https://www.cannvas.me/strain-matcher/azurehaze",
          type: "Hybrid",
          helps_with: "Insomnia, Depression, Stress",
          tastes_like: "Sweet, Blueberry, Berry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "B-52",
          url: "https://www.cannvas.me/strain-matcher/b52",
          type: "Hybrid",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Earthy, Sweet, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Babbas Erkles Cookies",
          url: "https://www.cannvas.me/strain-matcher/babbaserklescookies",
          type: "Indica",
          helps_with: "Stress, Mood Swings, Chronic Pain",
          tastes_like: "Earthy, Flowery, Berry",
          thc_content: "9.1%",
          cbd_content: "5.6%"
        },
        {
          name: "Baker (LSD)",
          url: "https://www.cannvas.me/strain-matcher/bakerlsd",
          type: "Indica",
          helps_with: "Appetite Loss, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Lemony, Pungent",
          thc_content: "21%",
          cbd_content: "0.3%"
        },
        {
          name: "Bakerstreet",
          url: "https://www.cannvas.me/strain-matcher/bakerstreet",
          type: "Indica",
          helps_with: "Anxiety, Appetite Loss, Depression",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "17%",
          cbd_content: "0.1%"
        },
        {
          name: "Bakerstreet (Hindu Kush - Milled)",
          url:
            "https://www.cannvas.me/strain-matcher/bakerstreethindukushmilled",
          type: "Indica",
          helps_with: "Depression, Anxiety, Stress",
          tastes_like: "Earthy, Kush, Dank",
          thc_content: "23.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Baleen",
          url: "https://www.cannvas.me/strain-matcher/baleen",
          type: "Hybrid",
          helps_with: "Insomnia, Back Pain, Chronic Pain",
          tastes_like: "Earthy, Herbal, Piney",
          thc_content: "5.9%",
          cbd_content: "10%"
        },
        {
          name: "Balmoral",
          url: "https://www.cannvas.me/strain-matcher/balmoral",
          type: "Hybrid",
          helps_with: "Anxiety, Appetite Loss, Stress",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Banana Kush (DNA Certified)",
          url: "https://www.cannvas.me/strain-matcher/bananakushdnacertified",
          type: "Indica",
          helps_with: "Insomnia, Stress, Appetite Loss",
          tastes_like: "Banana, Fruity, Sweet",
          thc_content: "20%",
          cbd_content: "0.1%"
        },
        {
          name: "Barbara Bud",
          url: "https://www.cannvas.me/strain-matcher/barbarabud",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Appetite Loss",
          tastes_like: "Earthy, Citrusy, Fruity",
          thc_content: "11.5%",
          cbd_content: "0%"
        },
        {
          name: "Baroness (Royal Medic)",
          url: "https://www.cannvas.me/strain-matcher/baronessroyalmedic",
          type: "Hybrid",
          helps_with: "Stress, Inflammation, Muscle Spasms",
          tastes_like: "Fruity, Pungent",
          thc_content: "13.5%",
          cbd_content: "4.5%"
        },
        {
          name: "BC Big Bud",
          url: "https://www.cannvas.me/strain-matcher/bcbigbud",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Muscle Spasms",
          tastes_like: "Earthy, Pungent, Tropical",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "BC Bud",
          url: "https://www.cannvas.me/strain-matcher/bcbud",
          type: "Sativa",
          helps_with: "Anxiety, Depression, Back Pain",
          tastes_like: "Earthy, Herbal, Citrusy",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "BC Rockstar",
          url: "https://www.cannvas.me/strain-matcher/bcrockstar",
          type: "Hybrid",
          thc_content: "22.2%",
          cbd_content: "0.1%"
        },
        {
          name: "BC Sweet Tooth",
          url: "https://www.cannvas.me/strain-matcher/bcsweettooth",
          type: "Indica",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Sweet, Berry, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bedica",
          url: "https://www.cannvas.me/strain-matcher/bedica",
          type: "Indica",
          helps_with: "Stress, Anxiety, Chronic Pain",
          tastes_like: "Earthy, Herbal, Woody",
          thc_content: "15%",
          cbd_content: "0.1%"
        },
        {
          name: "Bediol",
          url: "https://www.cannvas.me/strain-matcher/bediol",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Anxiety",
          tastes_like: "Earthy, Citrusy, Fruity",
          thc_content: "7%",
          cbd_content: "8.5%"
        },
        {
          name: "Bedrobinol",
          url: "https://www.cannvas.me/strain-matcher/bedrobinol",
          type: "Sativa",
          helps_with: "Fatigue, Depression, Stress",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "14%",
          cbd_content: "1%"
        },
        {
          name: "Bedrocan",
          url: "https://www.cannvas.me/strain-matcher/bedrocan",
          type: "Hybrid",
          helps_with: "Mood Swings, Stress, Depression",
          tastes_like: "Earthy, Citrusy, Lemony",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "Bedrocan (Granulated)",
          url: "https://www.cannvas.me/strain-matcher/bedrocangranulated",
          type: "Sativa",
          helps_with: "Depression, Back Pain, Stress",
          tastes_like: "Piney, Earthy, Lemony",
          thc_content: "22%",
          cbd_content: "0.9%"
        },
        {
          name: "Bedrolite",
          url: "https://www.cannvas.me/strain-matcher/bedrolite",
          type: "Sativa",
          helps_with: "Depression, Stress, Inflammation",
          tastes_like: "Earthy, Piney, Chemical",
          thc_content: "0%",
          cbd_content: "9%"
        },
        {
          name: "Bedropuur",
          url: "https://www.cannvas.me/strain-matcher/bedropuur",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "24%",
          cbd_content: "0%"
        },
        {
          name: "Bedtime",
          url: "https://www.cannvas.me/strain-matcher/bedtime",
          type: "Hybrid",
          helps_with: "Muscle Pain, Back Pain, Anxiety",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "19.5%",
          cbd_content: "0%"
        },
        {
          name: "Belladonna",
          url: "https://www.cannvas.me/strain-matcher/belladonna",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Peach, Earthy, Buttery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bellis",
          url: "https://www.cannvas.me/strain-matcher/bellis",
          type: "Hybrid",
          thc_content: "17.5%",
          cbd_content: "0%"
        },
        {
          name: "Berry White",
          url: "https://www.cannvas.me/strain-matcher/berrywhite",
          type: "Indica",
          helps_with: "Mood Swings, Back Pain, Chronic Pain",
          tastes_like: "Berry, Fruity, Earthy",
          thc_content: "13.5%",
          cbd_content: "0%"
        },
        {
          name: "Biddy Early",
          url: "https://www.cannvas.me/strain-matcher/biddyearly",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Fatigue",
          tastes_like: "Flowery, Diesel, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bienville (Jean Guy)",
          url: "https://www.cannvas.me/strain-matcher/bienvillejeanguy",
          type: "Sativa",
          helps_with: "Stress, Depression, Back Pain",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "23%",
          cbd_content: "0.1%"
        },
        {
          name: "Big Band",
          url: "https://www.cannvas.me/strain-matcher/bigband",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Depression",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Big Bang",
          url: "https://www.cannvas.me/strain-matcher/bigbang",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Orange, Sweet, Lemony",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Big Bud",
          url: "https://www.cannvas.me/strain-matcher/bigbud",
          type: "Hybrid",
          helps_with: "Insomnia, Chronic Pain, Appetite Loss",
          tastes_like: "Earthy, Sweet, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Birds Eye (Jack Herer)",
          url: "https://www.cannvas.me/strain-matcher/birdseyejackherer",
          type: "Sativa",
          helps_with: "Anxiety, Nauseous, Stress",
          tastes_like: "Earthy, Piney, Citrusy",
          thc_content: "18.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Bitter Melon",
          url: "https://www.cannvas.me/strain-matcher/bittermelon",
          type: "Indica",
          thc_content: "19.5%",
          cbd_content: "0%"
        },
        {
          name: "Black Domina",
          url: "https://www.cannvas.me/strain-matcher/blackdomina",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Black Tusk (Blackwater)",
          url: "https://www.cannvas.me/strain-matcher/blacktuskblackwater",
          type: "Indica",
          helps_with: "Depression, Anxiety, Stress",
          tastes_like: "Earthy, Coffee, Pungent",
          thc_content: "21%",
          cbd_content: "0.3%"
        },
        {
          name: "Black Widow",
          url: "https://www.cannvas.me/strain-matcher/blackwidow",
          type: "Indica",
          helps_with: "Chronic Pain, Depression, Nauseous",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "20%",
          cbd_content: "5%"
        },
        {
          name: "Blue Balmoral (Blue Cheese)",
          url: "https://www.cannvas.me/strain-matcher/bluebalmoralbluecheese",
          type: "Hybrid",
          helps_with: "Stress, Appetite Loss, Chronic Pain",
          tastes_like: "Cheese, Earthy, Berry",
          thc_content: "14.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Blue Buddha",
          url: "https://www.cannvas.me/strain-matcher/bluebuddha",
          type: "Hybrid",
          helps_with: "Depression, Fatigue, Migraines",
          tastes_like: "Blueberry, Citrusy, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Blue Cheese",
          url: "https://www.cannvas.me/strain-matcher/bluecheese",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Cheese, Berry, Earthy",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Blue Dream",
          url: "https://www.cannvas.me/strain-matcher/bluedream",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Blueberry, Berry, Sweet",
          thc_content: "20.5%",
          cbd_content: "0.2%"
        },
        {
          name: "Blue God",
          url: "https://www.cannvas.me/strain-matcher/bluegod",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Depression",
          tastes_like: "Berry, Blueberry, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Blue Light",
          url: "https://www.cannvas.me/strain-matcher/bluelight",
          type: "Hybrid",
          helps_with: "Insomnia, Depression, Chronic Pain",
          tastes_like: "Earthy, Blueberry, Herbal",
          thc_content: "13.9%",
          cbd_content: "1%"
        },
        {
          name: "Blue Moon",
          url: "https://www.cannvas.me/strain-matcher/bluemoon",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Migraines",
          tastes_like: "Earthy, Berry, Fruity",
          thc_content: "4.1%",
          cbd_content: "8.8%"
        },
        {
          name: "Blue Moonshine",
          url: "https://www.cannvas.me/strain-matcher/bluemoonshine",
          type: "Indica",
          helps_with: "Stress, Depression, Insomnia",
          tastes_like: "Earthy, Berry, Blueberry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Blue N.3",
          url: "https://www.cannvas.me/strain-matcher/bluen3",
          type: "Indica",
          helps_with: "Anxiety, Stress, Back Pain",
          tastes_like: "Earthy, Citrusy, Fruity",
          thc_content: "9.3%",
          cbd_content: "8.5%"
        },
        {
          name: "Blue Velvet",
          url: "https://www.cannvas.me/strain-matcher/bluevelvet",
          type: "Hybrid",
          helps_with: "Appetite Loss, Depression, Muscle Spasms",
          tastes_like: "Sweet, Earthy, Diesel",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Blue Widow",
          url: "https://www.cannvas.me/strain-matcher/bluewidow",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Appetite Loss",
          tastes_like: "Blueberry, Earthy, Berry",
          thc_content: "14%",
          cbd_content: "4.5%"
        },
        {
          name: "Blueberry",
          url: "https://www.cannvas.me/strain-matcher/blueberry",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Blueberry, Berry, Fruity",
          thc_content: "16.6%",
          cbd_content: "0%"
        },
        {
          name: "Blueberry Cheesecake",
          url: "https://www.cannvas.me/strain-matcher/blueberrycheesecake",
          type: "Sativa",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Blueberry, Cheese",
          thc_content: "23%",
          cbd_content: "0%"
        },
        {
          name: "Blueberry Haze",
          url: "https://www.cannvas.me/strain-matcher/blueberryhaze",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Stress",
          tastes_like: "Blueberry, Berry, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Blueberry Kush",
          url: "https://www.cannvas.me/strain-matcher/blueberrykush",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Anxiety",
          tastes_like: "Blueberry, Berry, Fruity",
          thc_content: "24%",
          cbd_content: "0%"
        },
        {
          name: "Blueberry Lambsbread",
          url: "https://www.cannvas.me/strain-matcher/blueberrylambsbread",
          type: "Hybrid",
          helps_with: "Back Pain, Anxiety, Stress",
          tastes_like: "Berry, Sweet, Smooth",
          thc_content: "23.2%",
          cbd_content: "0%"
        },
        {
          name: "Blueberry Seagal",
          url: "https://www.cannvas.me/strain-matcher/blueberryseagal",
          type: "Hybrid",
          helps_with: "Chronic Pain, Insomnia, Back Pain",
          tastes_like: "Blueberry, Berry, Sweet",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Blueberry Sky",
          url: "https://www.cannvas.me/strain-matcher/blueberrysky",
          type: "Hybrid",
          helps_with: "Depression, Anxiety, Migraines",
          tastes_like: "Blueberry, Fruity, Sweet",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Boaty McBoatface (CBD MediHaze)",
          url:
            "https://www.cannvas.me/strain-matcher/boatymcboatfacecbdmedihaze",
          type: "Sativa",
          helps_with: "Stress, Migraines, Depression",
          tastes_like: "Earthy, Citrusy, Herbal",
          thc_content: "2.3%",
          cbd_content: "7.1%"
        },
        {
          name: "Bonanza Borealis Blend",
          url:
            "https://www.cannvas.me/strain-matcher/bonanzaborealisblendindica",
          type: "Hybrid",
          helps_with: "Stress, Migraines, Depression",
          tastes_like: "Earthy, Citrusy, Pungent",
          thc_content: "16%",
          cbd_content: "0.5%"
        },
        {
          name: "Bonavista (Headband)",
          url: "https://www.cannvas.me/strain-matcher/bonavistaheadband",
          type: "Sativa",
          helps_with: "Migraines, Depression, Anxiety",
          tastes_like: "Earthy, Flowery, Sweet",
          thc_content: "24%",
          cbd_content: "0%"
        },
        {
          name: "Bonavista Mini",
          url: "https://www.cannvas.me/strain-matcher/bonavistamini",
          type: "Sativa",
          helps_with: "Appetite Loss, Mood Swings, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Berry",
          thc_content: "17.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Bonfire",
          url: "https://www.cannvas.me/strain-matcher/bonfire",
          type: "Sativa",
          helps_with: "Depression, Stress, Migraines",
          tastes_like: "Earthy, Citrusy, Dank",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Borealis Blend (Indica)",
          url: "https://www.cannvas.me/strain-matcher/borealisblendindica",
          type: "Indica",
          helps_with: "Stress, Insomnia, Anxiety",
          tastes_like: "Earthy, Fruity, Herbal",
          thc_content: "11%",
          cbd_content: "11%"
        },
        {
          name: "Borealis Blend (Sativa)",
          url: "https://www.cannvas.me/strain-matcher/borealisblendsativa",
          type: "Sativa",
          helps_with: "Anxiety, Appetite Loss, Depression",
          tastes_like: "Earthy, Citrusy, Woody",
          thc_content: "11%",
          cbd_content: "10%"
        },
        {
          name: "Brackley Beach Waves (WAPPA)",
          url: "https://www.cannvas.me/strain-matcher/brackleybeachwaveswappa",
          type: "Indica",
          helps_with: "Stress, Appetite Loss, Anxiety",
          tastes_like: "Fruity, Sweet, Smooth",
          thc_content: "14.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Brains Damage",
          url: "https://www.cannvas.me/strain-matcher/brainsdamage",
          type: "Indica",
          helps_with: "Stress, Insomnia, Appetite Loss",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Brainstorm Haze",
          url: "https://www.cannvas.me/strain-matcher/brainstormhaze",
          type: "Sativa",
          helps_with: "Chronic Pain, Muscle Spasms, Stress",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bronze Whaler",
          url: "https://www.cannvas.me/strain-matcher/bronzewhaler",
          type: "Indica",
          helps_with: "Stress",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bubba Kush",
          url: "https://www.cannvas.me/strain-matcher/bubbakush",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "18%",
          cbd_content: "0.1%"
        },
        {
          name: "Bubba Kush #2",
          url: "https://www.cannvas.me/strain-matcher/bubbakush2",
          type: "Hybrid",
          helps_with: "Insomnia, Depression, Appetite Loss",
          tastes_like: "Earthy, Kush, Citrusy",
          thc_content: "16.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Bubble Cheese",
          url: "https://www.cannvas.me/strain-matcher/bubblecheese",
          type: "Indica",
          helps_with: "Chronic Pain, Depression, Inflammation",
          tastes_like: "Blue Cheese, Cheese, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bubble Gum",
          url: "https://www.cannvas.me/strain-matcher/bubblegum",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Sweet, Flowery, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bubbleberry",
          url: "https://www.cannvas.me/strain-matcher/bubbleberry",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Sweet, Berry, Blueberry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Bubblegum",
          url: "https://www.cannvas.me/strain-matcher/bubblegum",
          type: "Hybrid",
          thc_content: "13.7%",
          cbd_content: "0%"
        },
        {
          name: "Buddha Haze",
          url: "https://www.cannvas.me/strain-matcher/buddhahaze",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Depression",
          tastes_like: "Earthy, Herbal",
          thc_content: "17%",
          cbd_content: "0.5%"
        },
        {
          name: "Buddha's Sister",
          url: "https://www.cannvas.me/strain-matcher/buddhassister",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Earthy, Piney, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Burmese Kush",
          url: "https://www.cannvas.me/strain-matcher/burmesekush",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Earthy, Woody, Pine Berry",
          thc_content: "22.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Campania (CBD Kush)",
          url: "https://www.cannvas.me/strain-matcher/campaniacbdkush",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Inflammation",
          tastes_like: "Earthy, Woody, Citrusy",
          thc_content: "9%",
          cbd_content: "12%"
        },
        {
          name: "Canadian Gold",
          url: "https://www.cannvas.me/strain-matcher/canadiangold",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Earthy, Citrusy, Kush",
          thc_content: "20%",
          cbd_content: "0.1%"
        },
        {
          name: "Canna Berry",
          url: "https://www.cannvas.me/strain-matcher/cannaberry",
          type: "Indica",
          helps_with: "Chronic Pain, Muscle Pain, Appetite Loss",
          tastes_like: "Earthy, Berry, Piney",
          thc_content: "18%",
          cbd_content: "4.7%"
        },
        {
          name: "Canna Bliss",
          url: "https://www.cannvas.me/strain-matcher/cannabliss",
          type: "Hybrid",
          helps_with: "Migraines, Chronic Pain, Depression",
          tastes_like: "Earthy, Citrusy, Piney",
          thc_content: "0.9%",
          cbd_content: "20.1%"
        },
        {
          name: "Canna Kief",
          url: "https://www.cannvas.me/strain-matcher/cannakief",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Anxiety",
          tastes_like: "Spicy, Earthy, Citrusy",
          thc_content: "35.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Canna Kush",
          url: "https://www.cannvas.me/strain-matcher/cannakush",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Menstrual Cramps",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "6.8%",
          cbd_content: "6.8%"
        },
        {
          name: "Cannalope Haze",
          url: "https://www.cannvas.me/strain-matcher/cannalopehaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Citrusy, Sweet, Melon",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "CannaSutra",
          url: "https://www.cannvas.me/strain-matcher/cannasutra",
          type: "Hybrid",
          helps_with: "Chronic Pain, Migraines, Insomnia",
          tastes_like: "Earthy, Sweet, Berry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Cannatonic",
          url: "https://www.cannvas.me/strain-matcher/cannatonic",
          type: "Hybrid",
          helps_with: "Anxiety, Muscle Spasms, Inflammation",
          tastes_like: "Earthy, Woody, Citrusy",
          thc_content: "2%",
          cbd_content: "24%"
        },
        {
          name: "Cannatonic Blackberry",
          url: "https://www.cannvas.me/strain-matcher/cannatonicblackberry",
          type: "Hybrid",
          helps_with: "Anxiety, Back Pain, Migraines",
          tastes_like: "Berry, Blueberry, Earthy",
          thc_content: "5.9%",
          cbd_content: "8%"
        },
        {
          name: "CanniMed 15-5",
          url: "https://www.cannvas.me/strain-matcher/cannimed155",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Stress",
          tastes_like: "Earthy, Herbal, Spicy",
          thc_content: "15%",
          cbd_content: "5%"
        },
        {
          name: "CanniMed 17-1",
          url: "https://www.cannvas.me/strain-matcher/cannimed171",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Stress",
          tastes_like: "Earthy",
          thc_content: "17%",
          cbd_content: "1%"
        },
        {
          name: "CanniMed 22-1",
          url: "https://www.cannvas.me/strain-matcher/cannimed221",
          type: "Hybrid",
          helps_with: "Anxiety, Chronic Pain, Stress",
          tastes_like: "Earthy",
          thc_content: "22%",
          cbd_content: "1%"
        },
        {
          name: "CanniMed 4-10",
          url: "https://www.cannvas.me/strain-matcher/cannimed410",
          type: "Hybrid",
          helps_with: "Back Pain, Depression, Anxiety",
          tastes_like: "Earthy, Woody",
          thc_content: "4%",
          cbd_content: "10%"
        },
        {
          name: "CanniMed 9-9",
          url: "https://www.cannvas.me/strain-matcher/cannimed99",
          type: "Hybrid",
          helps_with: "Insomnia, Migraines, Anxiety",
          tastes_like: "Earthy, Herbal, Citrusy",
          thc_content: "9%",
          cbd_content: "9%"
        },
        {
          name: "CannTrust CBD #1",
          url: "https://www.cannvas.me/strain-matcher/canntrustcbd1",
          type: "Hybrid",
          helps_with: "Inflammation, Stress, Chronic Pain",
          tastes_like: "Earthy, Pine, Citrusy",
          thc_content: "0.9%",
          cbd_content: "18%"
        },
        {
          name: "Caramella",
          url: "https://www.cannvas.me/strain-matcher/caramella",
          type: "Indica",
          helps_with: "Eye Pressure, Insomnia, Chronic Pain",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Caribbean Crush",
          url: "https://www.cannvas.me/strain-matcher/caribbeancrush",
          type: "Indica",
          tastes_like: "Flowery, Sweet, Skunky",
          thc_content: "17%",
          cbd_content: "0%"
        },
        {
          name: "Carnival",
          url: "https://www.cannvas.me/strain-matcher/carnival",
          type: "Sativa",
          helps_with: "Depression, Eye Pressure, Fatigue",
          tastes_like: "Earthy, Piney",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Casey Jones",
          url: "https://www.cannvas.me/strain-matcher/caseyjones",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Sweet, Earthy, Piney",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Cataract Kush",
          url: "https://www.cannvas.me/strain-matcher/cataractkush",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Muscle Spasms",
          tastes_like: "Pungent, Citrusy, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Cavendish Dunes (CBD Shark Shock)",
          url:
            "https://www.cannvas.me/strain-matcher/cavendishdunescbdsharkshock",
          type: "Hybrid",
          helps_with: "Mood Swings, Stress, Migraines",
          tastes_like: "Earthy, Herbal, Fruity",
          thc_content: "7.5%",
          cbd_content: "9.3%"
        },
        {
          name: "CBD Critical Mass",
          url: "https://www.cannvas.me/strain-matcher/cbdcriticalmass",
          type: "Hybrid",
          helps_with: "Chronic Pain, Muscle Pain, Back Pain",
          tastes_like: "Earthy, Piney, Citrusy",
          thc_content: "6.8%",
          cbd_content: "8%"
        },
        {
          name: "CBD God Bud",
          url: "https://www.cannvas.me/strain-matcher/cbdgodbud",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Back Pain",
          tastes_like: "Herbal, Lemony, Smooth",
          thc_content: "6.4%",
          cbd_content: "10.8%"
        },
        {
          name: "CBD Kush",
          url: "https://www.cannvas.me/strain-matcher/cbdkush",
          type: "Hybrid",
          helps_with: "Anxiety, Stress, Muscle Spasms",
          tastes_like: "Earthy, Pine, Citrusy",
          thc_content: "7%",
          cbd_content: "7%"
        },
        {
          name: "CBD Mango Haze",
          url: "https://www.cannvas.me/strain-matcher/cbdmangohaze",
          type: "Sativa",
          helps_with: "Migraines, Depression, Anxiety",
          tastes_like: "Mango, Sweet, Fruity",
          thc_content: "3%",
          cbd_content: "5%"
        },
        {
          name: "CBD Shark",
          url: "https://www.cannvas.me/strain-matcher/cbdshark",
          type: "Hybrid",
          helps_with: "Anxiety, Migraines, Menstrual Cramps",
          tastes_like: "Earthy, Sweet, Fruity",
          thc_content: "8.5%",
          cbd_content: "13%"
        },
        {
          name: "CBD Skunk Haze",
          url: "https://www.cannvas.me/strain-matcher/cbdskunkhaze",
          type: "Hybrid",
          helps_with: "Anxiety, Migraines, Stress",
          tastes_like: "Earthy, Skunky, Piney",
          thc_content: "6.1%",
          cbd_content: "7.9%"
        },
        {
          name: "CBD: Med",
          url: "https://www.cannvas.me/strain-matcher/cbdmed",
          type: "Hybrid",
          helps_with: "Chronic Pain, Inflammation, Back Pain",
          tastes_like: "Earthy, Flowery, Citrusy",
          thc_content: "0.5%",
          cbd_content: "17.5%"
        },
        {
          name: "CBG Shiatsu Kush",
          url: "https://www.cannvas.me/strain-matcher/cbgshiatsukush",
          type: "Hybrid",
          helps_with: "Migraines",
          tastes_like: "Earthy, Piney, Berry",
          thc_content: "6.8%",
          cbd_content: "0%"
        },
        {
          name: "Cerebri",
          url: "https://www.cannvas.me/strain-matcher/cerebri",
          type: "Indica",
          helps_with: "Appetite Loss, Insomnia, Stress",
          tastes_like: "Earthy, Citrusy, Pungent",
          thc_content: "25%",
          cbd_content: "0%"
        },
        {
          name: "Charlee Angel",
          url: "https://www.cannvas.me/strain-matcher/charleeangel",
          type: "Hybrid",
          helps_with: "Insomnia, Chronic Pain, Back Pain",
          tastes_like: "Earthy, Dank",
          thc_content: "18.7%",
          cbd_content: "0%"
        },
        {
          name: "Charlottetown Sunrise (AK-47)",
          url: "https://www.cannvas.me/strain-matcher/charlottetownsunriseak47",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Earthy, Citrusy, Woody",
          thc_content: "18.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Cheese",
          url: "https://www.cannvas.me/strain-matcher/cheese",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Stress",
          tastes_like: "Cheese, Earthy, Pungent",
          thc_content: "14%",
          cbd_content: "0%"
        },
        {
          name: "Cheese Quake",
          url: "https://www.cannvas.me/strain-matcher/cheesequake",
          type: "Hybrid",
          helps_with: "Appetite Loss, Insomnia, Depression",
          tastes_like: "Cheese, Earthy, Grape",
          thc_content: "15.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Chemdog",
          url: "https://www.cannvas.me/strain-matcher/chemdog",
          type: "Indica",
          helps_with: "Stress, Back Pain, Chronic Pain",
          tastes_like: "Pungent, Earthy",
          thc_content: "13%",
          cbd_content: "21%"
        },
        {
          name: "Chemo",
          url: "https://www.cannvas.me/strain-matcher/chemo",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "11%",
          cbd_content: "4%"
        },
        {
          name: "Chernobyl",
          url: "https://www.cannvas.me/strain-matcher/chernobyl",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Earthy, Lime, Citrusy",
          thc_content: "11.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Cherry Hill (High Voltage CBD)",
          url: "https://www.cannvas.me/strain-matcher/cherryhillhighvoltagecbd",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Back Pain",
          tastes_like: "Earthy, Cherry, Fruity",
          thc_content: "0.4%",
          cbd_content: "18.2%"
        },
        {
          name: "Cherry OG",
          url: "https://www.cannvas.me/strain-matcher/cherryog",
          type: "Hybrid",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Diesel, Berry, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Cherry Pie",
          url: "https://www.cannvas.me/strain-matcher/cherrypie",
          type: "Indica",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Sweet, Berry, Earthy",
          thc_content: "18%",
          cbd_content: "0.1%"
        },
        {
          name: "Chester (Hurkle)",
          url: "https://www.cannvas.me/strain-matcher/chesterhurkle",
          type: "Indica",
          helps_with: "Depression, Muscle Spasms, Anxiety",
          tastes_like: "Pineapple, Mango, Sweet",
          thc_content: "7%",
          cbd_content: "9%"
        },
        {
          name: "Cheviot",
          url: "https://www.cannvas.me/strain-matcher/cheviot",
          type: "Hybrid",
          helps_with: "Muscle Spasms, Depression, Appetite Loss",
          tastes_like: "Earthy, Pungent, Sweet",
          thc_content: "17.5%",
          cbd_content: "0%"
        },
        {
          name: "Chiesel",
          url: "https://www.cannvas.me/strain-matcher/chiesel",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Migraines",
          tastes_like: "Diesel, Earthy, Cheese",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Chocolate Fondue No. 1 (DNA Certified)",
          url:
            "https://www.cannvas.me/strain-matcher/chocolatefondueno1dnacertified",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Earthy, Cheese, Chocolate",
          thc_content: "23.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Chocolate Fondue No. 2 (DNA Certified)",
          url:
            "https://www.cannvas.me/strain-matcher/chocolatefondueno2dnacertified",
          type: "Hybrid",
          thc_content: "28%",
          cbd_content: "0%"
        },
        {
          name: "Chocolate Fondue No. 3 (DNA Certified)",
          url:
            "https://www.cannvas.me/strain-matcher/chocolatefondueno3dnacertified",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Back Pain",
          tastes_like: "Earthy, Cheese, Dank",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Chocolope",
          url: "https://www.cannvas.me/strain-matcher/chocolope",
          type: "Hybrid",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Coffee, Earthy, Pungent",
          thc_content: "15.4%",
          cbd_content: "0%"
        },
        {
          name: "Chrome",
          url: "https://www.cannvas.me/strain-matcher/chrome",
          type: "Indica",
          helps_with: "Migraines, Chronic Pain, Stress",
          tastes_like: "Earthy, Sage, Pungent",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Chrome Plus",
          url: "https://www.cannvas.me/strain-matcher/chromeplus",
          type: "Indica",
          helps_with: "Anxiety, Migraines, Stress",
          thc_content: "18.5%",
          cbd_content: "0%"
        },
        {
          name: "Chronic",
          url: "https://www.cannvas.me/strain-matcher/chronic",
          type: "Hybrid",
          helps_with: "Back Pain, Anxiety, Stress",
          tastes_like: "Earthy, Smooth, Sweet",
          thc_content: "16%",
          cbd_content: "11%"
        },
        {
          name: "Chronic Thunder",
          url: "https://www.cannvas.me/strain-matcher/chronicthunder",
          type: "Indica",
          helps_with: "Anxiety, Back Pain, Stress",
          tastes_like: "Earthy, Diesel, Pungent",
          thc_content: "8.7%",
          cbd_content: "0%"
        },
        {
          name: "Churchill",
          url: "https://www.cannvas.me/strain-matcher/churchill",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Stress",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "5.5%",
          cbd_content: "8.5%"
        },
        {
          name: "Churchill TC200",
          url: "https://www.cannvas.me/strain-matcher/churchilltc200",
          type: "Hybrid",
          helps_with: "Migraines, Stress, Chronic Pain",
          tastes_like: "Earthy, Herbal, Dank",
          thc_content: "7.3%",
          cbd_content: "10.6%"
        },
        {
          name: "Cinderella 99",
          url: "https://www.cannvas.me/strain-matcher/cinderella99",
          type: "Hybrid",
          helps_with: "Stress, Depression, Appetite Loss",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Citrus Haze",
          url: "https://www.cannvas.me/strain-matcher/citrushaze",
          type: "Sativa",
          helps_with: "Chronic Pain, Stress",
          tastes_like: "Citrusy",
          thc_content: "16%",
          cbd_content: "0.2%"
        },
        {
          name: "Claritas",
          url: "https://www.cannvas.me/strain-matcher/claritas",
          type: "Hybrid",
          thc_content: "15.5%",
          cbd_content: "0%"
        },
        {
          name: "Clearview Kush",
          url: "https://www.cannvas.me/strain-matcher/clearviewkush",
          type: "Sativa",
          helps_with: "Insomnia, Migraines, Stress",
          tastes_like: "Earthy, Lemony, Kush",
          thc_content: "22%",
          cbd_content: "0%"
        },
        {
          name: "Cloudburst",
          url: "https://www.cannvas.me/strain-matcher/cloudburst",
          type: "Hybrid",
          helps_with: "Insomnia, Back Pain, Chronic Pain",
          tastes_like: "Piney, Lemony, Earthy",
          thc_content: "20.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Coastal Blend",
          url: "https://www.cannvas.me/strain-matcher/coastalblend",
          type: "Sativa",
          helps_with: "Depression, Chronic Pain, Anxiety",
          tastes_like: "Earthy, Lemony",
          thc_content: "16.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Coastline",
          url: "https://www.cannvas.me/strain-matcher/coastline",
          type: "Hybrid",
          helps_with: "Mood Swings, Back Pain, Depression",
          tastes_like: "Sweet, Herbal, Flowery",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "Cognitiva",
          url: "https://www.cannvas.me/strain-matcher/cognitiva",
          type: "Hybrid",
          helps_with: "Appetite Loss, Insomnia, Stress",
          tastes_like: "Cheese, Fruity, Sweet",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Cold Creek Kush",
          url: "https://www.cannvas.me/strain-matcher/coldcreekkush",
          type: "Hybrid",
          helps_with: "Inflammation, Anxiety, Back Pain",
          tastes_like: "Kush, Smooth, Earthy",
          thc_content: "19.8%",
          cbd_content: "1.8%"
        },
        {
          name: "Contenti",
          url: "https://www.cannvas.me/strain-matcher/contenti",
          type: "Sativa",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Coral Reef",
          url: "https://www.cannvas.me/strain-matcher/coralreef",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Stress",
          tastes_like: "Earthy, Smooth, Fruity",
          thc_content: "10%",
          cbd_content: "0.4%"
        },
        {
          name: "Cortes (Purple White Lightning)",
          url:
            "https://www.cannvas.me/strain-matcher/cortespurplewhitelightning",
          type: "Indica",
          helps_with: "Appetite Loss, Depression, Stress",
          tastes_like: "Earthy, Sweet, Woody",
          thc_content: "20%",
          cbd_content: "0.1%"
        },
        {
          name: "Covel Sour Diesel",
          url: "https://www.cannvas.me/strain-matcher/covelsourdiesel",
          type: "Hybrid",
          helps_with: "Insomnia, Back Pain, Anxiety",
          tastes_like: "Diesel, Earthy",
          thc_content: "17.6%",
          cbd_content: "0%"
        },
        {
          name: "Critical Jack",
          url: "https://www.cannvas.me/strain-matcher/criticaljack",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Anxiety",
          tastes_like: "Smooth, Sweet, Flowery",
          thc_content: "14%",
          cbd_content: "0.1%"
        },
        {
          name: "Critical Kushmass",
          url: "https://www.cannvas.me/strain-matcher/criticalkushmass",
          type: "Hybrid",
          helps_with: "Back Pain, Insomnia, Mood Swings",
          tastes_like: "Earthy, Kush, Herbal",
          thc_content: "11.6%",
          cbd_content: "4.1%"
        },
        {
          name: "Critical Mass",
          url: "https://www.cannvas.me/strain-matcher/criticalmass",
          type: "Hybrid",
          helps_with: "Anxiety, Stress, Back Pain",
          tastes_like: "Earthy, Citrusy",
          thc_content: "12.7%",
          cbd_content: "0%"
        },
        {
          name: "Critical Super Silver Haze",
          url: "https://www.cannvas.me/strain-matcher/criticalsupersilverhaze",
          type: "Sativa",
          helps_with: "Mood Swings, Fatigue, Depression",
          tastes_like: "Citrusy, Fruity",
          thc_content: "16.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Crystalberry",
          url: "https://www.cannvas.me/strain-matcher/crystalberry",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Stress",
          tastes_like: "Sweet, Berry, Blueberry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Cupid",
          url: "https://www.cannvas.me/strain-matcher/cupid",
          type: "Indica",
          helps_with: "Anxiety, Chronic Pain, Migraines",
          tastes_like: "Sweet, Sour, Lemony",
          thc_content: "17.5%",
          cbd_content: "0%"
        },
        {
          name: "Cypress (Alphadawg)",
          url: "https://www.cannvas.me/strain-matcher/cypressalphadawg",
          type: "Hybrid",
          helps_with: "Insomnia, Arthritis, Anxiety",
          tastes_like: "Pungent, Earthy",
          thc_content: "15%",
          cbd_content: "0.2%"
        },
        {
          name: "Damn Sour",
          url: "https://www.cannvas.me/strain-matcher/damnsour",
          type: "Hybrid",
          tastes_like: "Diesel",
          thc_content: "23%",
          cbd_content: "10%"
        },
        {
          name: "Dancehall",
          url: "https://www.cannvas.me/strain-matcher/dancehall",
          type: "Sativa",
          helps_with: "Stress, Fatigue, Chronic Pain",
          tastes_like: "Earthy, Fruity, Citrusy",
          thc_content: "8.5%",
          cbd_content: "10%"
        },
        {
          name: "Dark Star",
          url: "https://www.cannvas.me/strain-matcher/darkstar",
          type: "Indica",
          helps_with: "Stress, Depression, Chronic Pain",
          thc_content: "21.3%",
          cbd_content: "0%"
        },
        {
          name: "Day Dream (Sour Kush)",
          url: "https://www.cannvas.me/strain-matcher/daydreamsourkush",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Migraines",
          tastes_like: "Earthy, Citrusy, Sour",
          thc_content: "16.1%",
          cbd_content: "0%"
        },
        {
          name: "Daybreak",
          url: "https://www.cannvas.me/strain-matcher/daybreak",
          type: "Hybrid",
          helps_with: "Anxiety, Depression",
          tastes_like: "Musky, Berry, Fruity",
          thc_content: "16.5%",
          cbd_content: "0%"
        },
        {
          name: "DC: Med (Durga Mata)",
          url: "https://www.cannvas.me/strain-matcher/dcmeddurgamata",
          type: "Indica",
          helps_with: "Inflammation, Insomnia, Depression",
          tastes_like: "Earthy, Citrusy",
          thc_content: "5.8%",
          cbd_content: "10.5%"
        },
        {
          name: "Decarb 1:1",
          url: "https://www.cannvas.me/strain-matcher/decarb11",
          type: "Hybrid",
          helps_with: "Insomnia, Chronic Pain, Stress",
          tastes_like: "Herbal, Bitter, Earthy",
          thc_content: "4.4%",
          cbd_content: "8.6%"
        },
        {
          name: "Decarb High CBD",
          url: "https://www.cannvas.me/strain-matcher/decarbhighcbd",
          type: "Hybrid",
          helps_with: "Migraines, Inflammation, Anxiety",
          tastes_like: "Bitter, Herbal",
          thc_content: "1%",
          cbd_content: "15%"
        },
        {
          name: "Decarb High THC",
          url: "https://www.cannvas.me/strain-matcher/decarbhighthc",
          type: "Indica",
          helps_with: "Inflammation, Stress, Depression",
          tastes_like: "Bitter, Herbal",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "Declaro",
          url: "https://www.cannvas.me/strain-matcher/declaro",
          type: "Hybrid",
          thc_content: "11%",
          cbd_content: "0%"
        },
        {
          name: "Deep Purple",
          url: "https://www.cannvas.me/strain-matcher/deeppurple",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Back Pain",
          tastes_like: "Earthy, Fruity, Berry",
          thc_content: "10%",
          cbd_content: "0%"
        },
        {
          name: "DelaHaze",
          url: "https://www.cannvas.me/strain-matcher/delahaze",
          type: "Sativa",
          helps_with: "Insomnia, Eye Pressure, Depression",
          tastes_like: "Citrusy, Mango, Earthy",
          thc_content: "21.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Delta 9 Blue Venom",
          url: "https://www.cannvas.me/strain-matcher/delta9bluevenom",
          type: "Indica",
          helps_with: "Depression, Insomnia, Appetite Loss",
          tastes_like: "Berry, Fruity, Earthy",
          thc_content: "16.3%",
          cbd_content: "0%"
        },
        {
          name: "Delta 9 Cannatonic",
          url: "https://www.cannvas.me/strain-matcher/delta9cannatonic",
          type: "Hybrid",
          helps_with: "Insomnia",
          tastes_like: "Lemony, Berry, Piney",
          thc_content: "7%",
          cbd_content: "11%"
        },
        {
          name: "Delta 9 CBD House Blend",
          url: "https://www.cannvas.me/strain-matcher/delta9cbdhouseblend",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Back Pain",
          thc_content: "13%",
          cbd_content: "2.5%"
        },
        {
          name: "Delta 9 CBD Skunk Haze",
          url: "https://www.cannvas.me/strain-matcher/delta9cbdskunkhaze",
          type: "Hybrid",
          helps_with: "Muscle Pain, Back Pain, Anxiety",
          tastes_like: "Earthy, Piney, Skunky",
          thc_content: "6.1%",
          cbd_content: "9.2%"
        },
        {
          name: 'Delta 9 Con "Kush" ion',
          url: "https://www.cannvas.me/strain-matcher/delta9conkushion",
          type: "Hybrid",
          helps_with: "Chronic Pain",
          tastes_like: "Smooth, Fruity, Herbal",
          thc_content: "16.5%",
          cbd_content: "0%"
        },
        {
          name: "Delta 9 House Blend",
          url: "https://www.cannvas.me/strain-matcher/delta9houseblend",
          type: "Hybrid",
          helps_with: "Mood Swings, Chronic Pain, Depression",
          tastes_like: "Earthy, Citrusy",
          thc_content: "9.8%",
          cbd_content: "0%"
        },
        {
          name: "Delta 9 Jean Guy",
          url: "https://www.cannvas.me/strain-matcher/delta9jeanguy",
          type: "Hybrid",
          helps_with: "Back Pain, Chronic Pain, Insomnia",
          tastes_like: "Diesel, Citrusy, Lemony",
          thc_content: "18.1%",
          cbd_content: "0%"
        },
        {
          name: "Delta 9 Master Kush",
          url: "https://www.cannvas.me/strain-matcher/delta9masterkush",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Mood Swings",
          tastes_like: "Earthy, Kush, Citrusy",
          thc_content: "16.2%",
          cbd_content: "15%"
        },
        {
          name: "Derek Pedro's Wine Gums",
          url: "https://www.cannvas.me/strain-matcher/derekpedroswinegums",
          type: "Sativa",
          helps_with: "Depression, Anxiety, Stress",
          tastes_like: "Smooth, Fruity, Sweet",
          thc_content: "22.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Desert Rose (Durga Mata CBD)",
          url: "https://www.cannvas.me/strain-matcher/desertrosedurgamatacbd",
          type: "Indica",
          helps_with: "Anxiety, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Citrusy, Fruity",
          thc_content: "4%",
          cbd_content: "12%"
        },
        {
          name: "Devil Fruit",
          url: "https://www.cannvas.me/strain-matcher/devilfruit",
          type: "Hybrid",
          helps_with: "Insomnia, Depression, Anxiety",
          tastes_like: "Fruity, Piney, Lemony",
          thc_content: "5%",
          cbd_content: "6%"
        },
        {
          name: "Devon",
          url: "https://www.cannvas.me/strain-matcher/devon",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Inflammation",
          tastes_like: "Earthy, Fruity, Citrusy",
          thc_content: "8%",
          cbd_content: "12%"
        },
        {
          name: "Diamond OG",
          url: "https://www.cannvas.me/strain-matcher/diamondog",
          type: "Indica",
          helps_with: "Depression, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Piney",
          thc_content: "21%",
          cbd_content: "0%"
        },
        {
          name: "Diesel",
          url: "https://www.cannvas.me/strain-matcher/diesel",
          type: "Sativa",
          helps_with: "Depression, Chronic Pain, Stress",
          tastes_like: "Diesel, Earthy, Pungent",
          thc_content: "19%",
          cbd_content: "0.4%"
        },
        {
          name: "DMD CBD (Milled Decarb)",
          url: "https://www.cannvas.me/strain-matcher/dmdcbdmilleddecarb",
          type: "Hybrid",
          helps_with: "Back Pain, Chronic Pain, Depression",
          thc_content: "0.4%",
          cbd_content: "10.2%"
        },
        {
          name: "Donegal",
          url: "https://www.cannvas.me/strain-matcher/donegal",
          type: "Hybrid",
          helps_with: "Anxiety, Appetite Loss, Insomnia",
          tastes_like: "Earthy, Diesel, Pungent",
          thc_content: "22.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Dorit",
          url: "https://www.cannvas.me/strain-matcher/dorit",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Stress",
          tastes_like: "Cheese, Herbal, Minty",
          thc_content: "22%",
          cbd_content: "0%"
        },
        {
          name: "Double Dutch",
          url: "https://www.cannvas.me/strain-matcher/doubledutch",
          type: "Hybrid",
          helps_with: "Stress, Depression, Inflammation",
          tastes_like: "Tar, Earthy, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Dragon Fruit",
          url: "https://www.cannvas.me/strain-matcher/dragonfruit",
          type: "Hybrid",
          thc_content: "10%",
          cbd_content: "0%"
        },
        {
          name: "Dreadlock",
          url: "https://www.cannvas.me/strain-matcher/dreadlock",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Diesel, Sage",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Durban Poison",
          url: "https://www.cannvas.me/strain-matcher/durbanpoison",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Earthy, Sweet, Piney",
          thc_content: "20.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Durga Mata",
          url: "https://www.cannvas.me/strain-matcher/durgamata",
          type: "Indica",
          helps_with: "Stress, Depression, Inflammation",
          tastes_like: "Earthy, Minty, Woody",
          thc_content: "6.4%",
          cbd_content: "9.9%"
        },
        {
          name: "Dutch Dragon",
          url: "https://www.cannvas.me/strain-matcher/dutchdragon",
          type: "Hybrid",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Citrusy, Sweet, Minty",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Dutch Haze",
          url: "https://www.cannvas.me/strain-matcher/dutchhaze",
          type: "Sativa",
          helps_with: "Depression, Stress",
          tastes_like: "Citrusy, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Easy Breeze",
          url: "https://www.cannvas.me/strain-matcher/easybreeze",
          type: "Sativa",
          helps_with: "Back Pain, Anxiety",
          tastes_like: "Chestnut, Fruity",
          thc_content: "14.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Eclipse",
          url: "https://www.cannvas.me/strain-matcher/eclipse",
          type: "Sativa",
          helps_with: "Insomnia, Chronic Pain, Back Pain",
          tastes_like: "Smooth, Earthy, Sweet",
          thc_content: "10.7%",
          cbd_content: "5.9%"
        },
        {
          name: "El Nino",
          url: "https://www.cannvas.me/strain-matcher/elnino",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Chronic Pain",
          tastes_like: "Sweet, Strawberry, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Elevare",
          url: "https://www.cannvas.me/strain-matcher/elevare",
          type: "Hybrid",
          helps_with: "Concentration, Fatigue, Anxiety",
          tastes_like: "Earthy, Piney, Citrusy",
          thc_content: "19.5%",
          cbd_content: "0%"
        },
        {
          name: "Elias (StrawBerry Cough)",
          url: "https://www.cannvas.me/strain-matcher/eliasstrawberrycough",
          type: "Sativa",
          helps_with: "Chronic Pain, Anxiety, Insomnia",
          tastes_like: "Berry, Earthy, Sweet",
          thc_content: "16%",
          cbd_content: "0.2%"
        },
        {
          name: "Elwyn CBD",
          url: "https://www.cannvas.me/strain-matcher/elwyncbd",
          type: "Sativa",
          helps_with: "Stress, Anxiety",
          tastes_like: "Fruity, Woody, Earthy",
          thc_content: "4%",
          cbd_content: "12%"
        },
        {
          name: "Elysium",
          url: "https://www.cannvas.me/strain-matcher/elysium",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Minty, Fruity, Piney",
          thc_content: "7.3%",
          cbd_content: "1.4%"
        },
        {
          name: "Emerald No. 2",
          url: "https://www.cannvas.me/strain-matcher/emeraldno2",
          type: "Hybrid",
          helps_with: "Insomnia, Stress",
          thc_content: "3%",
          cbd_content: "7%"
        },
        {
          name: "Emperor Jack",
          url: "https://www.cannvas.me/strain-matcher/emperorjack",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Piney, Sweet",
          thc_content: "21.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Endless Sky",
          url: "https://www.cannvas.me/strain-matcher/endlesssky",
          type: "Indica",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Berry, Sweet, Buttery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Equinox",
          url: "https://www.cannvas.me/strain-matcher/equinox",
          type: "Hybrid",
          helps_with: "Migraines, Anxiety, Depression",
          tastes_like: "Buttery, Chestnut, Earthy",
          thc_content: "13%",
          cbd_content: "0%"
        },
        {
          name: "Equiposa",
          url: "https://www.cannvas.me/strain-matcher/equiposa",
          type: "Sativa",
          helps_with: "Stress, Concentration, Anxiety",
          tastes_like: "Earthy, Smooth, Fruity",
          thc_content: "7.5%",
          cbd_content: "9%"
        },
        {
          name: "Eran Almog",
          url: "https://www.cannvas.me/strain-matcher/eranalmog",
          type: "Hybrid",
          helps_with: "Chronic Pain, Anxiety, Appetite Loss",
          thc_content: "28%",
          cbd_content: "0%"
        },
        {
          name: "Erez",
          url: "https://www.cannvas.me/strain-matcher/erez",
          type: "Hybrid",
          helps_with: "Stress, Inflammation, Muscle Spasms",
          tastes_like: "Cheese, Woody, Chemical",
          thc_content: "23%",
          cbd_content: "0%"
        },
        {
          name: "Extrema",
          url: "https://www.cannvas.me/strain-matcher/extrema",
          type: "Indica",
          helps_with: "Appetite Loss, Nauseous, Stress",
          tastes_like: "Earthy, Pungent, Sweet",
          thc_content: "20%",
          cbd_content: "0.1%"
        },
        {
          name: "Flo",
          url: "https://www.cannvas.me/strain-matcher/flo",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Sweet, Earthy, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Floating Island",
          url: "https://www.cannvas.me/strain-matcher/floatingisland",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Back Pain",
          thc_content: "11%",
          cbd_content: "0%"
        },
        {
          name: "Forest Life (Sour OG)",
          url: "https://www.cannvas.me/strain-matcher/forestlifesourog",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Migraines",
          tastes_like: "Earthy, Sour, Diesel",
          thc_content: "16.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Frost (Kief - Indica)",
          url: "https://www.cannvas.me/strain-matcher/frostkiefindica",
          type: "Indica",
          helps_with: "Anxiety, Depression, Appetite Loss",
          tastes_like: "Sweet, Smooth, Citrusy",
          thc_content: "38.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Fruit Salad Blend",
          url: "https://www.cannvas.me/strain-matcher/fruitsaladblend",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Back Pain",
          tastes_like: "Fruity, Berry",
          thc_content: "14%",
          cbd_content: "0.1%"
        },
        {
          name: "Gataga (Star Killer)",
          url: "https://www.cannvas.me/strain-matcher/gatagastarkiller",
          type: "Hybrid",
          helps_with: "Insomnia, Back Pain, Inflammation",
          thc_content: "15%",
          cbd_content: "0.1%"
        },
        {
          name: "Ghost Train Haze",
          url: "https://www.cannvas.me/strain-matcher/ghosttrainhaze",
          type: "Hybrid",
          helps_with: "Appetite Loss, Anxiety, Depression",
          thc_content: "25%",
          cbd_content: "0.1%"
        },
        {
          name: "Girl Scout Cookies",
          url: "https://www.cannvas.me/strain-matcher/girlscoutcookies",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Stress",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "21.2%",
          cbd_content: "0.1%"
        },
        {
          name: "God Kush (Lasqueti)",
          url: "https://www.cannvas.me/strain-matcher/godkushlasqueti",
          type: "Indica",
          helps_with: "Insomnia, Migraines, Depression",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "18%",
          cbd_content: "0.1%"
        },
        {
          name: "God's Green Crack",
          url: "https://www.cannvas.me/strain-matcher/godsgreencrack",
          type: "Indica",
          helps_with: "Anxiety, Back Pain, Depression",
          tastes_like: "Earthy, Sweet",
          thc_content: "21.6%",
          cbd_content: "0.1%"
        },
        {
          name: "God's Treat",
          url: "https://www.cannvas.me/strain-matcher/godstreat",
          type: "Hybrid",
          helps_with: "Inflammation, Muscle Spasms, Chronic Pain",
          tastes_like: "Blueberry, Berry, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Golden Lemons (DNA Certified)",
          url: "https://www.cannvas.me/strain-matcher/goldenlemonsdnacertified",
          type: "Indica",
          helps_with: "Insomnia, Stress, Depression",
          tastes_like: "Lemony, Citrusy, Fruity",
          thc_content: "20.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Good Morning",
          url: "https://www.cannvas.me/strain-matcher/goodmorning",
          type: "Indica",
          helps_with: "Anxiety, Chronic Pain, Back Pain",
          tastes_like: "Earthy",
          thc_content: "17%",
          cbd_content: "0%"
        },
        {
          name: "Grand Daddy Purps",
          url: "https://www.cannvas.me/strain-matcher/granddaddypurps",
          type: "Indica",
          helps_with: "Anxiety, Stress, Chronic Pain",
          tastes_like: "Earthy, Berry, Diesel",
          thc_content: "21.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Grape Crush",
          url: "https://www.cannvas.me/strain-matcher/grapecrush",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Grape, Berry, Sweet",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Grapefruit",
          url: "https://www.cannvas.me/strain-matcher/grapefruit",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Grapefruit, Citrusy, Sweet",
          thc_content: "15.3%",
          cbd_content: "0%"
        },
        {
          name: "Great White Shark",
          url: "https://www.cannvas.me/strain-matcher/greatwhiteshark",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Green Chai",
          url: "https://www.cannvas.me/strain-matcher/greenchai",
          type: "Hybrid",
          helps_with: "Depression, Concentration, Anxiety",
          tastes_like: "Earthy, Flowery, Herbal",
          thc_content: "10%",
          cbd_content: "0%"
        },
        {
          name: "Green Crack",
          url: "https://www.cannvas.me/strain-matcher/greencrack",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Smooth, Sweet, Fruity",
          thc_content: "17%",
          cbd_content: "0.1%"
        },
        {
          name: "Green Cush",
          url: "https://www.cannvas.me/strain-matcher/greencush",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Citrusy, Earthy, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Green Cush 15 Gram Pre-Pack",
          url: "https://www.cannvas.me/strain-matcher/greencush15gramprepack",
          type: "Sativa",
          thc_content: "21%",
          cbd_content: "0%"
        },
        {
          name: "Green N.3",
          url: "https://www.cannvas.me/strain-matcher/greenn3",
          type: "Hybrid",
          helps_with: "Chronic Pain, Anxiety, Depression",
          tastes_like: "Earthy, Herbal, Citrusy",
          thc_content: "5%",
          cbd_content: "9%"
        },
        {
          name: "Green N.4",
          url: "https://www.cannvas.me/strain-matcher/greenn4",
          type: "Sativa",
          helps_with: "Fatigue, Concentration",
          tastes_like: "Citrusy, Fruity, Tropical",
          thc_content: "7%",
          cbd_content: "9%"
        },
        {
          name: "Green N.6",
          url: "https://www.cannvas.me/strain-matcher/greenn6",
          type: "Hybrid",
          helps_with: "Stress, Concentration, Depression",
          tastes_like: "Earthy, Berry, Herbal",
          thc_content: "5.5%",
          cbd_content: "7.6%"
        },
        {
          name: "Grower's Blend",
          url: "https://www.cannvas.me/strain-matcher/growersblend",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Piney",
          thc_content: "16%",
          cbd_content: "0.1%"
        },
        {
          name: "Halcyon (Island Honey)",
          url: "https://www.cannvas.me/strain-matcher/halcyonislandhoney",
          type: "Sativa",
          helps_with: "Chronic Pain, Fatigue, Concentration",
          tastes_like: "Honey, Earthy, Sweet",
          thc_content: "22%",
          cbd_content: "0%"
        },
        {
          name: "Happy Feet",
          url: "https://www.cannvas.me/strain-matcher/happyfeet",
          type: "Sativa",
          helps_with: "Mood Swings, Stress, Depression",
          tastes_like: "Fruity, Earthy, Sweet",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Harmony",
          url: "https://www.cannvas.me/strain-matcher/harmony",
          type: "Indica",
          helps_with: "Migraines, Depression, Anxiety",
          tastes_like: "Citrusy, Fruity, Lemony",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Harvest",
          url: "https://www.cannvas.me/strain-matcher/harvest",
          type: "Sativa",
          helps_with: "Concentration, Mood Swings, Depression",
          tastes_like: "Earthy, Citrusy",
          thc_content: "10.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Hash Plant",
          url: "https://www.cannvas.me/strain-matcher/hashplant",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Chronic Pain",
          thc_content: "16.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Hashberry",
          url: "https://www.cannvas.me/strain-matcher/hashberry",
          type: "Indica",
          helps_with: "Chronic Pain, Appetite Loss, Stress",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Hawaiian Haze",
          url: "https://www.cannvas.me/strain-matcher/hawaiianhaze",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Depression",
          tastes_like: "Sweet, Tropical, Pineapple",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Hawaiian Sativa",
          url: "https://www.cannvas.me/strain-matcher/hawaiiansativa",
          type: "Sativa",
          helps_with: "Stress, Nauseous, Depression",
          tastes_like: "Citrusy, Sweet, Tropical",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Hawaiian Snow",
          url: "https://www.cannvas.me/strain-matcher/hawaiiansnow",
          type: "Sativa",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Tropical, Sweet, Piney",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Haze Mist",
          url: "https://www.cannvas.me/strain-matcher/hazemist",
          type: "Sativa",
          helps_with: "Insomnia, Nauseous, Stress",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Headband",
          url: "https://www.cannvas.me/strain-matcher/headband",
          type: "Hybrid",
          helps_with: "Migraines, Depression, Insomnia",
          tastes_like: "Earthy, Diesel, Pungent",
          thc_content: "23.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Heavy Duty Fruity",
          url: "https://www.cannvas.me/strain-matcher/heavydutyfruity",
          type: "Hybrid",
          helps_with: "Insomnia, Appetite Loss, Stress",
          tastes_like: "Sweet, Citrusy, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Henik",
          url: "https://www.cannvas.me/strain-matcher/henik",
          type: "Indica",
          helps_with: "Migraines, Depression, Insomnia",
          tastes_like: "Earthy, Citrusy, Dank",
          thc_content: "26%",
          cbd_content: "0.1%"
        },
        {
          name: "Herringbone No. 1 (Ken's Kush)",
          url: "https://www.cannvas.me/strain-matcher/herringboneno1kenskush",
          type: "Sativa",
          helps_with: "Depression, Stress, Insomnia",
          tastes_like: "Earthy, Kush, Woody",
          thc_content: "20.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Herringbone No. 2 (Ken's Kush)",
          url: "https://www.cannvas.me/strain-matcher/herringboneno2kenskush",
          type: "Sativa",
          helps_with: "Mood Swings, Insomnia, Stress",
          tastes_like: "Earthy, Woody, Kush",
          thc_content: "20.5%",
          cbd_content: "0.1%"
        },
        {
          name: "High Tide",
          url: "https://www.cannvas.me/strain-matcher/hightide",
          type: "Sativa",
          helps_with: "Fatigue, Appetite Loss, Depression",
          tastes_like: "Earthy, Flowery, Herbal",
          thc_content: "15.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Highlands (CBD Critical Mass)",
          url: "https://www.cannvas.me/strain-matcher/highlandscbdcriticalmass",
          type: "Indica",
          helps_with: "Inflammation, Muscle Spasms, Insomnia",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "9%",
          cbd_content: "9%"
        },
        {
          name: "Hilarum",
          url: "https://www.cannvas.me/strain-matcher/hilarum",
          type: "Hybrid",
          helps_with: "Anxiety, Stress, Appetite Loss",
          tastes_like: "Earthy, Sweet, Flowery",
          thc_content: "25.5%",
          cbd_content: "0%"
        },
        {
          name: "Hindu Kush",
          url: "https://www.cannvas.me/strain-matcher/hindukush",
          type: "Indica",
          helps_with: "Anxiety, Depression, Appetite Loss",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "21.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Hindu Skunk",
          url: "https://www.cannvas.me/strain-matcher/hinduskunk",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Earthy, Skunky",
          thc_content: "15.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Hollio (Blue Dream)",
          url: "https://www.cannvas.me/strain-matcher/holliobluedream",
          type: "Hybrid",
          helps_with: "Fatigue, Depression, Stress",
          tastes_like: "Berry, Blueberry, Sweet",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "Honeydew",
          url: "https://www.cannvas.me/strain-matcher/honeydew",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Fruity, Citrusy",
          thc_content: "1.5%",
          cbd_content: "16.5%"
        },
        {
          name: "Houndstooth (Candyland)",
          url: "https://www.cannvas.me/strain-matcher/houndstoothcandyland",
          type: "Hybrid",
          helps_with: "Fatigue, Appetite Loss, Depression",
          tastes_like: "Sweet, Citrusy, Lemony",
          thc_content: "20.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Hunter (Green Kush)",
          url: "https://www.cannvas.me/strain-matcher/huntergreenkush",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Fatigue",
          tastes_like: "Earthy, Fruity, Mango",
          thc_content: "18.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Hunter's Corner (Hash Plant)",
          url: "https://www.cannvas.me/strain-matcher/hunterscornerhashplant",
          type: "Indica",
          helps_with: "Depression, Anxiety, Mood Swings",
          tastes_like: "Earthy, Herbal, Dank",
          thc_content: "17.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Hunter's Corner Mini",
          url: "https://www.cannvas.me/strain-matcher/hunterscornermini",
          type: "Indica",
          helps_with: "Mood Swings, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Dank, Berry",
          thc_content: "15.1%",
          cbd_content: "0%"
        },
        {
          name: "IC: Med",
          url: "https://www.cannvas.me/strain-matcher/icmed",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Back Pain",
          tastes_like: "Sweet, Vanilla, Earthy",
          thc_content: "20.2%",
          cbd_content: "0.1%"
        },
        {
          name: "iCann Forte 141 (San Fernando Valley OG)",
          url:
            "https://www.cannvas.me/strain-matcher/icannforte141sanfernandovalleyog",
          type: "Sativa",
          thc_content: "14.1%",
          cbd_content: "0.1%"
        },
        {
          name: "iCann Forte 89 (God Bud)",
          url: "https://www.cannvas.me/strain-matcher/icannforte89godbud",
          type: "Hybrid",
          helps_with: "Back Pain, Anxiety, Depression",
          tastes_like: "Skunky, Fruity, Earthy",
          thc_content: "16.8%",
          cbd_content: "0%"
        },
        {
          name: "iCann Ultra Forte 36 (Babba's Erkle Cookies)",
          url:
            "https://www.cannvas.me/strain-matcher/icannultraforte36babbaserklecookies",
          type: "Hybrid",
          helps_with: "Depression, Insomnia, Stress",
          tastes_like: "Dank, Bitter, Peppery",
          thc_content: "17.1%",
          cbd_content: "0.1%"
        },
        {
          name: "iCann Ultra Forte No. 17 (Snowman)",
          url:
            "https://www.cannvas.me/strain-matcher/icannultraforteno17snowman",
          type: "Hybrid",
          helps_with: "Migraines, Insomnia, Stress",
          tastes_like: "Pungent, Chemical, Earthy",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "iCann Ultra Forte No. 19 Strawberry Ice",
          url:
            "https://www.cannvas.me/strain-matcher/icannultraforteno19strawberryice",
          type: "Indica",
          helps_with: "Appetite Loss, Depression, Insomnia",
          tastes_like: "Sweet, Berry, Earthy",
          thc_content: "20.5%",
          cbd_content: "0.1%"
        },
        {
          name: "iCann Ultra Forte Plus 5 (Amnesia Haze)",
          url:
            "https://www.cannvas.me/strain-matcher/icannultraforteplus5amnesiahaze",
          type: "Sativa",
          helps_with: "Appetite Loss, Fatigue, Depression",
          tastes_like: "Fruity, Earthy, Sweet",
          thc_content: "17.2%",
          cbd_content: "0%"
        },
        {
          name: "Ice",
          url: "https://www.cannvas.me/strain-matcher/ice",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Minty, Peppery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Ice Cream",
          url: "https://www.cannvas.me/strain-matcher/icecream",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Sweet, Vanilla, Woody",
          thc_content: "20.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Indica Milled",
          url: "https://www.cannvas.me/strain-matcher/indicamilled",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Bitter, Herbal, Fruity",
          thc_content: "16.5%",
          cbd_content: "1%"
        },
        {
          name: "Indica Tips",
          url: "https://www.cannvas.me/strain-matcher/indicatips",
          type: "Indica",
          helps_with: "Depression, Anxiety, Appetite Loss",
          tastes_like: "Earthy, Piney, Sweet",
          thc_content: "10%",
          cbd_content: "0.1%"
        },
        {
          name: "Infiniti",
          url: "https://www.cannvas.me/strain-matcher/infiniti",
          type: "Hybrid",
          helps_with: "Insomnia, Back Pain, Migraines",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "24.5%",
          cbd_content: "0%"
        },
        {
          name: "Iroquois",
          url: "https://www.cannvas.me/strain-matcher/iroquois",
          type: "Indica",
          helps_with: "Stress, Depression, Insomnia",
          tastes_like: "Earthy, Woody, Pungent",
          thc_content: "4%",
          cbd_content: "6%"
        },
        {
          name: "Island Honey",
          url: "https://www.cannvas.me/strain-matcher/islandhoney",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Stress",
          tastes_like: "Honey, Sweet",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Island Mist",
          url: "https://www.cannvas.me/strain-matcher/islandmist",
          type: "Hybrid",
          helps_with: "Back Pain, Depression, Migraines",
          tastes_like: "Lemony, Herbal, Sweet",
          thc_content: "0%",
          cbd_content: "15.9%"
        },
        {
          name: "Island Sweet Skunk",
          url: "https://www.cannvas.me/strain-matcher/islandsweetskunk",
          type: "Hybrid",
          thc_content: "18.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Jack Herer",
          url: "https://www.cannvas.me/strain-matcher/jackherer",
          type: "Hybrid",
          helps_with: "Migraines, Stress, Depression",
          tastes_like: "Earthy, Piney, Citrusy",
          thc_content: "20.5%",
          cbd_content: "0.1%"
        },
        {
          name: "JacKingGun CBD",
          url: "https://www.cannvas.me/strain-matcher/jackingguncbd",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Depression",
          tastes_like: "Earthy, Bitter, Berry",
          thc_content: "6.7%",
          cbd_content: "11.1%"
        },
        {
          name: "Jacky White",
          url: "https://www.cannvas.me/strain-matcher/jackywhite",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Depression",
          tastes_like: "Sweet, Grapefruit, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Jade Sky (MK Ultra)",
          url: "https://www.cannvas.me/strain-matcher/jadeskymkultra",
          type: "Indica",
          helps_with: "Appetite Loss, Back Pain, Insomnia",
          tastes_like: "Earthy, Dank",
          thc_content: "15.8%",
          cbd_content: "0%"
        },
        {
          name: "Jamaican Pearl",
          url: "https://www.cannvas.me/strain-matcher/jamaicanpearl",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Pineapple, Tropical, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Jane Herer",
          url: "https://www.cannvas.me/strain-matcher/janeherer",
          type: "Sativa",
          helps_with: "Depression, Stress, Concentration",
          tastes_like: "Piney, Earthy, Sweet",
          thc_content: "13%",
          cbd_content: "0%"
        },
        {
          name: "Jazz",
          url: "https://www.cannvas.me/strain-matcher/jazz",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Flowery, Sweet, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Jean Guy",
          url: "https://www.cannvas.me/strain-matcher/jeanguy",
          type: "Sativa",
          helps_with: "Back Pain, Fatigue, Depression",
          tastes_like: "Earthy, Citrusy, Sour",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "JH:MED",
          url: "https://www.cannvas.me/strain-matcher/jhmed",
          type: "Sativa",
          helps_with: "Stress, Migraines, Back Pain",
          tastes_like: "Earthy, Piney, Herbal",
          thc_content: "17%",
          cbd_content: "0%"
        },
        {
          name: "Jocelyn",
          url: "https://www.cannvas.me/strain-matcher/jocelyn",
          type: "Sativa",
          helps_with: "Stress, Insomnia, Appetite Loss",
          tastes_like: "Cherry, Skunky, Flowery",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Jock Horror",
          url: "https://www.cannvas.me/strain-matcher/jockhorror",
          type: "Hybrid",
          helps_with: "Depression, Stress, Appetite Loss",
          tastes_like: "Citrusy, Sweet, Berry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Joggins Fossil (Kush)",
          url: "https://www.cannvas.me/strain-matcher/jogginsfossilkush",
          type: "Indica",
          helps_with: "Depression, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Woody, Musky",
          thc_content: "17.5%",
          cbd_content: "0%"
        },
        {
          name: "JT 15",
          url: "https://www.cannvas.me/strain-matcher/jt15",
          type: "Indica",
          helps_with: "Anxiety",
          thc_content: "13%",
          cbd_content: "10%"
        },
        {
          name: "Juniper Berry",
          url: "https://www.cannvas.me/strain-matcher/juniperberry",
          type: "Indica",
          helps_with: "Anxiety, Stress, Appetite Loss",
          tastes_like: "Berry, Fruity, Earthy",
          thc_content: "14.5%",
          cbd_content: "0%"
        },
        {
          name: "Justin Trudope",
          url: "https://www.cannvas.me/strain-matcher/justintrudope",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Depression",
          tastes_like: "Earthy, Herbal",
          thc_content: "19.7%",
          cbd_content: "0.9%"
        },
        {
          name: "Kahuna",
          url: "https://www.cannvas.me/strain-matcher/kahuna",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Sweet, Orange, Tropical",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kaia Kush",
          url: "https://www.cannvas.me/strain-matcher/kaiakush",
          type: "Hybrid",
          helps_with: "Stress, Depression, Migraines",
          tastes_like: "Lemony, Sweet, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kali Mist",
          url: "https://www.cannvas.me/strain-matcher/kalimist",
          type: "Hybrid",
          helps_with: "Stress, Depression, Fatigue",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Kanata",
          url: "https://www.cannvas.me/strain-matcher/kanata",
          type: "Indica",
          helps_with: "Stress, Anxiety, Chronic Pain",
          tastes_like: "Earthy, Sweet, Flowery",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Kanata Mini",
          url: "https://www.cannvas.me/strain-matcher/kanatamini",
          type: "Hybrid",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Kandahar",
          url: "https://www.cannvas.me/strain-matcher/kandahar",
          type: "Indica",
          helps_with: "Insomnia, Stress, Eye Pressure",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kanteris",
          url: "https://www.cannvas.me/strain-matcher/kanteris",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Fatigue",
          tastes_like: "Earthy, Smooth",
          thc_content: "9.5%",
          cbd_content: "0.2%"
        },
        {
          name: "KC 33",
          url: "https://www.cannvas.me/strain-matcher/kc33",
          type: "Hybrid",
          helps_with: "Chronic Pain, Nauseous, Stress",
          tastes_like: "Citrusy, Lemony, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "KC 36",
          url: "https://www.cannvas.me/strain-matcher/kc36",
          type: "Indica",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Sweet, Blueberry, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Keats (White Walker Kush)",
          url: "https://www.cannvas.me/strain-matcher/keatswhitewalkerkush",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Stress",
          tastes_like: "Earthy, Fruity, Sweet",
          thc_content: "21.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Kerala Krush",
          url: "https://www.cannvas.me/strain-matcher/keralakrush",
          type: "Sativa",
          helps_with: "Depression, Fatigue, Menstrual Cramps",
          tastes_like: "Mango, Sweet, Orange",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Killing Fields",
          url: "https://www.cannvas.me/strain-matcher/killingfields",
          type: "Sativa",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Earthy, Lemony, Berry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kiwiskunk",
          url: "https://www.cannvas.me/strain-matcher/kiwiskunk",
          type: "Indica",
          helps_with: "Depression, Insomnia, Stress",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kootenay Star",
          url: "https://www.cannvas.me/strain-matcher/kootenaystar",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Fatigue",
          thc_content: "17.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Kosher Kush",
          url: "https://www.cannvas.me/strain-matcher/kosherkush",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Earthy, Kush, Dank",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "Kusawa",
          url: "https://www.cannvas.me/strain-matcher/kusawa",
          type: "Sativa",
          helps_with: "Fatigue, Anxiety, Stress",
          tastes_like: "Earthy, Diesel, Citrusy",
          thc_content: "22.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Kush",
          url: "https://www.cannvas.me/strain-matcher/kush",
          type: "Hybrid",
          thc_content: "15%",
          cbd_content: "1%"
        },
        {
          name: "Kush Blend",
          url: "https://www.cannvas.me/strain-matcher/kushblend",
          type: "Indica",
          helps_with: "Depression, Appetite Loss, Stress",
          tastes_like: "Earthy, Kush, Fruity",
          thc_content: "14.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Kushadelic",
          url: "https://www.cannvas.me/strain-matcher/kushadelic",
          type: "Hybrid",
          helps_with: "Insomnia, Inflammation, Appetite Loss",
          tastes_like: "Pungent, Piney, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Kushage",
          url: "https://www.cannvas.me/strain-matcher/kushage",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Depression",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "LA Chocolat",
          url: "https://www.cannvas.me/strain-matcher/lachocolat",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Coffee, Earthy, Smooth",
          thc_content: "14.9%",
          cbd_content: "0.9%"
        },
        {
          name: "LA Confidential",
          url: "https://www.cannvas.me/strain-matcher/laconfidential",
          type: "Indica",
          helps_with: "Stress, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Piney, Sweet",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "La Nina",
          url: "https://www.cannvas.me/strain-matcher/lanina",
          type: "Hybrid",
          helps_with: "Migraines, Chronic Pain, Inflammation",
          tastes_like: "Sweet, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Landrace (Sativa)",
          url: "https://www.cannvas.me/strain-matcher/landracesativa",
          type: "Sativa",
          helps_with: "Back Pain, Arthritis",
          tastes_like: "Woody, Flowery, Earthy",
          thc_content: "16.6%",
          cbd_content: "0%"
        },
        {
          name: "Laughing Buddha",
          url: "https://www.cannvas.me/strain-matcher/laughingbuddha",
          type: "Hybrid",
          thc_content: "12.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Lavender",
          url: "https://www.cannvas.me/strain-matcher/lavender",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Lavender, Sweet, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Lemon Drops",
          url: "https://www.cannvas.me/strain-matcher/lemondrops",
          type: "Sativa",
          helps_with: "Concentration, Stress, Mood Swings",
          tastes_like: "Lemony, Citrusy",
          thc_content: "19.2%",
          cbd_content: "0%"
        },
        {
          name: "Lemon Kush",
          url: "https://www.cannvas.me/strain-matcher/lemonkush",
          type: "Indica",
          helps_with: "Stress, Appetite Loss, Anxiety",
          tastes_like: "Lemony, Citrusy",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Lemon Nigerian",
          url: "https://www.cannvas.me/strain-matcher/lemonnigerian",
          type: "Hybrid",
          helps_with: "Anxiety, Mood Swings",
          tastes_like: "Lemony, Citrusy, Herbal",
          thc_content: "14.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Lemon Skunk",
          url: "https://www.cannvas.me/strain-matcher/lemonskunk",
          type: "Hybrid",
          helps_with: "Depression, Appetite Loss, Stress",
          tastes_like: "Lemony, Citrusy, Skunky",
          thc_content: "9.8%",
          cbd_content: "0%"
        },
        {
          name: "Lemon Skunk (DNA Certified)",
          url: "https://www.cannvas.me/strain-matcher/lemonskunkdnacertified",
          type: "Sativa",
          helps_with: "Anxiety, Fatigue, Depression",
          tastes_like: "Lemony, Citrusy, Skunky",
          thc_content: "15.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Lemon Sour Diesel",
          url: "https://www.cannvas.me/strain-matcher/lemonsourdiesel",
          type: "Sativa",
          helps_with: "Insomnia, Mood Swings, Depression",
          tastes_like: "Lemony, Diesel, Citrusy",
          thc_content: "17.9%",
          cbd_content: "0%"
        },
        {
          name: "Lemon Sour Diesel (LSD)",
          url: "https://www.cannvas.me/strain-matcher/lemonsourdiesellsd",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Lemony, Citrusy, Diesel",
          thc_content: "18.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Lethal Purple",
          url: "https://www.cannvas.me/strain-matcher/lethalpurple",
          type: "Hybrid",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Lighthouse (Mongolian)",
          url: "https://www.cannvas.me/strain-matcher/lighthousemongolian",
          type: "Hybrid",
          helps_with: "Stress, Muscle Spasms, Appetite Loss",
          thc_content: "13.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Limerick",
          url: "https://www.cannvas.me/strain-matcher/limerick",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Anxiety",
          tastes_like: "Earthy, Citrusy, Kush",
          thc_content: "15%",
          cbd_content: "0.1%"
        },
        {
          name: "Livingstone",
          url: "https://www.cannvas.me/strain-matcher/livingstone",
          type: "Indica",
          helps_with: "Muscle Spasms, Depression, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "10%",
          cbd_content: "2%"
        },
        {
          name: "Louise (Blueberry)",
          url: "https://www.cannvas.me/strain-matcher/louiseblueberry",
          type: "Hybrid",
          helps_with: "Muscle Pain, Stress, Back Pain",
          tastes_like: "Blueberry, Berry, Fruity",
          thc_content: "16.5%",
          cbd_content: "0%"
        },
        {
          name: "Low Tide",
          url: "https://www.cannvas.me/strain-matcher/lowtide",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Earthy, Fruity, Smooth",
          thc_content: "17.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Lowryder",
          url: "https://www.cannvas.me/strain-matcher/lowryder",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Sweet, Piney, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "LSD",
          url: "https://www.cannvas.me/strain-matcher/lsd",
          type: "Hybrid",
          helps_with: "Chronic Pain, Appetite Loss, Anxiety",
          tastes_like: "Lemony, Sweet, Citrusy",
          thc_content: "18.1%",
          cbd_content: "0%"
        },
        {
          name: "Luminarium",
          url: "https://www.cannvas.me/strain-matcher/luminarium",
          type: "Hybrid",
          helps_with: "Concentration, Fatigue, Depression",
          tastes_like: "Citrusy, Earthy, Mango",
          thc_content: "27.5%",
          cbd_content: "0%"
        },
        {
          name: "Luna (Banana Split)",
          url: "https://www.cannvas.me/strain-matcher/lunabananasplit",
          type: "Hybrid",
          tastes_like: "Banana, Herbal, Sweet",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Maker's Mix (Hybrid Blend)",
          url: "https://www.cannvas.me/strain-matcher/makersmixhybridblend",
          type: "Hybrid",
          helps_with: "Migraines, Anxiety, Stress",
          tastes_like: "Herbal, Earthy",
          thc_content: "14.4%",
          cbd_content: "0%"
        },
        {
          name: "Maker's Mix (Indica Blend)",
          url: "https://www.cannvas.me/strain-matcher/makersmixindicablend",
          type: "Indica",
          helps_with: "Insomnia, Back Pain, Depression",
          tastes_like: "Herbal, Bitter",
          thc_content: "9.1%",
          cbd_content: "0%"
        },
        {
          name: "Maker's Mix (Sativa Blend)",
          url: "https://www.cannvas.me/strain-matcher/makersmixsativablend",
          type: "Sativa",
          helps_with: "Insomnia, Anxiety, Back Pain",
          tastes_like: "Herbal",
          thc_content: "13.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Mako Haze",
          url: "https://www.cannvas.me/strain-matcher/makohaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Appetite Loss",
          tastes_like: "Piney, Lemony, Sage",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Malik (Kosher Kush)",
          url: "https://www.cannvas.me/strain-matcher/malikkosherkush",
          type: "Indica",
          helps_with: "Anxiety, Migraines, Chronic Pain",
          tastes_like: "Earthy, Woody, Chemical",
          thc_content: "18%",
          cbd_content: "0.2%"
        },
        {
          name: "Mango",
          url: "https://www.cannvas.me/strain-matcher/mango",
          type: "Indica",
          helps_with: "Chronic Pain, Insomnia, Anxiety",
          tastes_like: "Mango, Earthy, Tropical",
          thc_content: "23%",
          cbd_content: "0.1%"
        },
        {
          name: "Mango Haze",
          url: "https://www.cannvas.me/strain-matcher/mangohaze",
          type: "Sativa",
          helps_with: "Stress, Mood Swings, Chronic Pain",
          tastes_like: "Mango, Fruity, Citrusy",
          thc_content: "8.9%",
          cbd_content: "14.1%"
        },
        {
          name: "Mango Haze 2",
          url: "https://www.cannvas.me/strain-matcher/mangohaze2",
          type: "Sativa",
          helps_with: "Insomnia, Stress, Back Pain",
          tastes_like: "Mango, Sweet, Fruity",
          thc_content: "6.3%",
          cbd_content: "9.3%"
        },
        {
          name: "Manitoba Poison",
          url: "https://www.cannvas.me/strain-matcher/manitobapoison",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Maple Leaf Indica",
          url: "https://www.cannvas.me/strain-matcher/mapleleafindica",
          type: "Indica",
          helps_with: "Insomnia, Chronic Pain, Stress",
          tastes_like: "Sweet, Buttery, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Marcela",
          url: "https://www.cannvas.me/strain-matcher/marcela",
          type: "Hybrid",
          helps_with: "Appetite Loss, Migraines, Depression",
          tastes_like: "Citrusy, Earthy, Tropical",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Marley's Collie",
          url: "https://www.cannvas.me/strain-matcher/marleyscollie",
          type: "Hybrid",
          helps_with: "Appetite Loss, Stress, Depression",
          tastes_like: "Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Master Kush",
          url: "https://www.cannvas.me/strain-matcher/masterkush",
          type: "Indica",
          helps_with: "Anxiety, Appetite Loss, Stress",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "24.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Maui Wowie",
          url: "https://www.cannvas.me/strain-matcher/mauiwowie",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Pineapple, Tropical, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Medicine Man",
          url: "https://www.cannvas.me/strain-matcher/medicineman",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Muscle Spasms",
          tastes_like: "Berry, Woody, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Midday",
          url: "https://www.cannvas.me/strain-matcher/midday",
          type: "Hybrid",
          helps_with: "Anxiety, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Flowery",
          thc_content: "6.5%",
          cbd_content: "8.5%"
        },
        {
          name: "Midnight",
          url: "https://www.cannvas.me/strain-matcher/midnight",
          type: "Hybrid",
          helps_with: "Migraines, Insomnia, Depression",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "11.5%",
          cbd_content: "15.5%"
        },
        {
          name: "Midnight Kiss (MK Ultra)",
          url: "https://www.cannvas.me/strain-matcher/midnightkissmkultra",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Migraines",
          tastes_like: "Earthy, Woody, Pungent",
          thc_content: "15.7%",
          cbd_content: "0%"
        },
        {
          name: "MK Tonic",
          url: "https://www.cannvas.me/strain-matcher/mktonic",
          type: "Hybrid",
          helps_with: "Nauseous, Stress, Depression",
          thc_content: "3.9%",
          cbd_content: "7.2%"
        },
        {
          name: "MK Ultra",
          url: "https://www.cannvas.me/strain-matcher/mkultra",
          type: "Indica",
          helps_with: "Stress, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Pungent, Woody",
          thc_content: "20.2%",
          cbd_content: "0.1%"
        },
        {
          name: "MK Ultra Haze",
          url: "https://www.cannvas.me/strain-matcher/mkultrahaze",
          type: "Indica",
          helps_with: "Insomnia, Anxiety",
          tastes_like: "Earthy, Woody, Pine",
          thc_content: "17.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Moby Dick",
          url: "https://www.cannvas.me/strain-matcher/mobydick",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Mohawk (Rockstar)",
          url: "https://www.cannvas.me/strain-matcher/mohawkrockstar",
          type: "Indica",
          helps_with: "Depression, Stress, Back Pain",
          tastes_like: "Earthy, Dank, Kush",
          thc_content: "18.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Monarch (Sour OG)",
          url: "https://www.cannvas.me/strain-matcher/monarchsourog",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Back Pain",
          tastes_like: "Sour, Diesel, Citrusy",
          thc_content: "19%",
          cbd_content: "0.5%"
        },
        {
          name: "Moonbeam (Leafs by Snoop)",
          url: "https://www.cannvas.me/strain-matcher/moonbeamleafsbysnoop",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Fruity, Sweet, Earthy",
          thc_content: "20.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Morning Glory",
          url: "https://www.cannvas.me/strain-matcher/morningglory",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Citrusy, Peppery, Lime",
          thc_content: "9.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Morning Star",
          url: "https://www.cannvas.me/strain-matcher/morningstar",
          type: "Hybrid",
          helps_with: "Stress, Nauseous, Depression",
          tastes_like: "Orange, Berry, Blueberry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Morris",
          url: "https://www.cannvas.me/strain-matcher/morris",
          type: "Indica",
          helps_with: "Stress, Insomnia, Appetite Loss",
          tastes_like: "Earthy, Citrusy, Dank",
          thc_content: "12.5%",
          cbd_content: "7%"
        },
        {
          name: "Motavation",
          url: "https://www.cannvas.me/strain-matcher/motavation",
          type: "Hybrid",
          helps_with: "Fatigue, Migraines, Chronic Pain",
          tastes_like: "Pungent, Sweet, Flowery",
          thc_content: "17%",
          cbd_content: "1%"
        },
        {
          name: "Mr. Nice",
          url: "https://www.cannvas.me/strain-matcher/mrnice",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Chronic Pain",
          tastes_like: "Earthy, Skunky, Spicy",
          thc_content: "17%",
          cbd_content: "0%"
        },
        {
          name: "Muskoka",
          url: "https://www.cannvas.me/strain-matcher/muskoka",
          type: "Hybrid",
          helps_with: "Depression, Stress, Migraines",
          thc_content: "12%",
          cbd_content: "0.1%"
        },
        {
          name: "NC: Med (Nebula)",
          url: "https://www.cannvas.me/strain-matcher/ncmednebula",
          type: "Hybrid",
          helps_with: "Anxiety, Chronic Pain, Depression",
          tastes_like: "Earthy, Lemony, Citrusy",
          thc_content: "5.6%",
          cbd_content: "10.3%"
        },
        {
          name: "Nebula",
          url: "https://www.cannvas.me/strain-matcher/nebula",
          type: "Hybrid",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Earthy, Honey, Sweet",
          thc_content: "3.9%",
          cbd_content: "6.8%"
        },
        {
          name: "Nebula II",
          url: "https://www.cannvas.me/strain-matcher/nebulaii",
          type: "Hybrid",
          helps_with: "Chronic Pain, Anxiety, Insomnia",
          tastes_like: "Earthy",
          thc_content: "7%",
          cbd_content: "7%"
        },
        {
          name: "Neville's Haze",
          url: "https://www.cannvas.me/strain-matcher/nevilleshaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Sweet, Diesel, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Newton (Pennywise)",
          url: "https://www.cannvas.me/strain-matcher/newtonpennywise",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Stress",
          tastes_like: "Woody, Earthy, Sweet",
          thc_content: "12%",
          cbd_content: "10%"
        },
        {
          name: "Nina",
          url: "https://www.cannvas.me/strain-matcher/nina",
          type: "Hybrid",
          helps_with: "Insomnia, Fatigue, Stress",
          thc_content: "9%",
          cbd_content: "9%"
        },
        {
          name: "Nollia (Buddha's Sister)",
          url: "https://www.cannvas.me/strain-matcher/nolliabuddhassister",
          type: "Indica",
          helps_with: "Stress, Inflammation, Insomnia",
          tastes_like: "Earthy, Mango, Citrusy",
          thc_content: "4.5%",
          cbd_content: "7.5%"
        },
        {
          name: "Norquay (God Kush)",
          url: "https://www.cannvas.me/strain-matcher/norquaygodkush",
          type: "Hybrid",
          helps_with: "Anxiety, Chronic Pain, Insomnia",
          tastes_like: "Woody, Sweet, Berry",
          thc_content: "12%",
          cbd_content: "0.1%"
        },
        {
          name: "Northern Lights",
          url: "https://www.cannvas.me/strain-matcher/northernlights",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Piney, Sweet",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Northern Lights Haze (Galiano)",
          url:
            "https://www.cannvas.me/strain-matcher/northernlightshazegaliano",
          type: "Sativa",
          helps_with: "Concentration, Fatigue, Depression",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "19.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Northern Lights MOC",
          url: "https://www.cannvas.me/strain-matcher/northernlightsmoc",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Smooth, Lemony, Sweet",
          thc_content: "12.4%",
          cbd_content: "0%"
        },
        {
          name: "Northern Tonic",
          url: "https://www.cannvas.me/strain-matcher/northerntonic",
          type: "Hybrid",
          helps_with: "Inflammation, Stress",
          tastes_like: "Piney, Sweet, Flowery",
          thc_content: "6.9%",
          cbd_content: "11.7%"
        },
        {
          name: "Nuken",
          url: "https://www.cannvas.me/strain-matcher/nuken",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Stress",
          tastes_like: "Sweet, Pungent, Anise",
          thc_content: "21.6%",
          cbd_content: "0%"
        },
        {
          name: "NYC Diesel",
          url: "https://www.cannvas.me/strain-matcher/nycdiesel",
          type: "Hybrid",
          helps_with: "Back Pain, Insomnia, Stress",
          tastes_like: "Diesel, Earthy",
          thc_content: "15%",
          cbd_content: "4%"
        },
        {
          name: "Ocean View",
          url: "https://www.cannvas.me/strain-matcher/oceanview",
          type: "Sativa",
          helps_with: "Migraines, Anxiety, Fatigue",
          tastes_like: "Earthy, Fruity, Sweet",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Odin #2 (Sour Diesel No.2)",
          url: "https://www.cannvas.me/strain-matcher/odin2sourdieselno2",
          type: "Sativa",
          helps_with: "Depression, Appetite Loss, Anxiety",
          tastes_like: "Diesel, Earthy, Sour",
          thc_content: "17%",
          cbd_content: "0.5%"
        },
        {
          name: "Odin #3",
          url: "https://www.cannvas.me/strain-matcher/odin3",
          type: "Sativa",
          helps_with: "Appetite Loss, Fatigue, Chronic Pain",
          tastes_like: "Diesel, Sour, Lemony",
          thc_content: "26%",
          cbd_content: "0.5%"
        },
        {
          name: "Odin (Sour Diesel)",
          url: "https://www.cannvas.me/strain-matcher/odinsourdiesel",
          type: "Sativa",
          helps_with: "Nauseous, Anxiety, Depression",
          tastes_like: "Diesel, Earthy, Sour",
          thc_content: "19%",
          cbd_content: "1%"
        },
        {
          name: "OG",
          url: "https://www.cannvas.me/strain-matcher/og",
          type: "Indica",
          helps_with: "Stress, Anxiety, Insomnia",
          tastes_like: "Diesel, Earthy, Sour",
          thc_content: "18.3%",
          cbd_content: "0.1%"
        },
        {
          name: "OG Diesel",
          url: "https://www.cannvas.me/strain-matcher/ogdiesel",
          type: "Hybrid",
          helps_with: "Stress, Mood Swings, Concentration",
          tastes_like: "Diesel, Earthy, Minty",
          thc_content: "18.6%",
          cbd_content: "0.1%"
        },
        {
          name: "OG Kush",
          url: "https://www.cannvas.me/strain-matcher/ogkush",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "22%",
          cbd_content: "1%"
        },
        {
          name: "OG Kush (CannTrust)",
          url: "https://www.cannvas.me/strain-matcher/ogkushcanntrust",
          type: "Sativa",
          helps_with: "Stress, Depression, Insomnia",
          tastes_like: "Earthy, Kush, Piney",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "OG Kush (Tilray)",
          url: "https://www.cannvas.me/strain-matcher/ogkushtilray",
          type: "Hybrid",
          helps_with: "Appetite Loss, Chronic Pain, Depression",
          tastes_like: "Earthy, Woody, Pungent",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "OG Kush (WeedMD)",
          url: "https://www.cannvas.me/strain-matcher/ogkushweedmd",
          type: "Indica",
          helps_with: "Appetite Loss, Depression, Chronic Pain",
          tastes_like: "Earthy, Pungent, Piney",
          thc_content: "13.5%",
          cbd_content: "0%"
        },
        {
          name: "OG Shark",
          url: "https://www.cannvas.me/strain-matcher/ogshark",
          type: "Hybrid",
          helps_with: "Insomnia, Appetite Loss, Depression",
          thc_content: "20%",
          cbd_content: "0%"
        },
        {
          name: "Old Mother Sativa",
          url: "https://www.cannvas.me/strain-matcher/oldmothersativa",
          type: "Sativa",
          helps_with: "Depression, Fatigue",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Olivine (Space Queen)",
          url: "https://www.cannvas.me/strain-matcher/olivinespacequeen",
          type: "Sativa",
          helps_with: "Chronic Pain, Fatigue, Stress",
          tastes_like: "Earthy, Musky, Sweet",
          thc_content: "20%",
          cbd_content: "0.2%"
        },
        {
          name: "OP: Med",
          url: "https://www.cannvas.me/strain-matcher/opmed",
          type: "Hybrid",
          helps_with: "Depression, Chronic Pain, Muscle Spasms",
          tastes_like: "Earthy, Fruity, Flowery",
          thc_content: "19%",
          cbd_content: "0.1%"
        },
        {
          name: "Opium",
          url: "https://www.cannvas.me/strain-matcher/opium",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Menstrual Cramps",
          tastes_like: "Earthy, Sweet, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Orange Bud",
          url: "https://www.cannvas.me/strain-matcher/orangebud",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Orange, Citrusy, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Orange Jack (Agent Orange)",
          url: "https://www.cannvas.me/strain-matcher/orangejackagentorange",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Stress",
          tastes_like: "Citrusy, Orange, Fruity",
          thc_content: "18.5%",
          cbd_content: "0%"
        },
        {
          name: "Orange N.1",
          url: "https://www.cannvas.me/strain-matcher/orangen1",
          type: "Indica",
          helps_with: "Insomnia, Depression, Appetite Loss",
          tastes_like: "Citrusy, Earthy, Orange",
          thc_content: "12.1%",
          cbd_content: "7%"
        },
        {
          name: "Orange N.2",
          url: "https://www.cannvas.me/strain-matcher/orangen2",
          type: "Sativa",
          helps_with: "Back Pain, Anxiety, Stress",
          tastes_like: "Citrusy, Lemony, Sweet",
          thc_content: "14%",
          cbd_content: "5%"
        },
        {
          name: "Orange N.3",
          url: "https://www.cannvas.me/strain-matcher/orangen3",
          type: "Hybrid",
          helps_with: "Anxiety, Chronic Pain, Insomnia",
          tastes_like: "Earthy, Pine",
          thc_content: "16%",
          cbd_content: "21%"
        },
        {
          name: "Orange N.4",
          url: "https://www.cannvas.me/strain-matcher/orangen4",
          type: "Indica",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Earthy, Citrusy",
          thc_content: "16%",
          cbd_content: "0.1%"
        },
        {
          name: "Orange N.5",
          url: "https://www.cannvas.me/strain-matcher/orangen5",
          type: "Hybrid",
          helps_with: "Chronic Pain, Insomnia",
          tastes_like: "Earthy, Citrusy, Herbal",
          thc_content: "16%",
          cbd_content: "0.1%"
        },
        {
          name: "Orange N.7",
          url: "https://www.cannvas.me/strain-matcher/orangen7",
          type: "Indica",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Earthy, Orange, Citrusy",
          thc_content: "16.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Oregon Pinot Noir",
          url: "https://www.cannvas.me/strain-matcher/oregonpinotnoir",
          type: "Sativa",
          helps_with: "Nauseous, Chronic Pain, Stress",
          tastes_like: "Grape, Sweet, Diesel",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Orellium",
          url: "https://www.cannvas.me/strain-matcher/orellium",
          type: "Sativa",
          helps_with: "Mood Swings, Stress, Social Anxiety",
          thc_content: "7.5%",
          cbd_content: "15.5%"
        },
        {
          name: "Orient Express",
          url: "https://www.cannvas.me/strain-matcher/orientexpress",
          type: "Hybrid",
          helps_with: "Fatigue",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Original Cheese",
          url: "https://www.cannvas.me/strain-matcher/originalcheese",
          type: "Hybrid",
          helps_with: "Muscle Spasms, Chronic Pain, Appetite Loss",
          tastes_like: "Cheese, Earthy, Skunky",
          thc_content: "19%",
          cbd_content: "0.4%"
        },
        {
          name: "Paddington (Sour Tangie)",
          url: "https://www.cannvas.me/strain-matcher/paddingtonsourtangie",
          type: "Sativa",
          helps_with: "Depression, Stress, Concentration",
          tastes_like: "Citrusy, Orange, Sour",
          thc_content: "23.5%",
          cbd_content: "0%"
        },
        {
          name: "Painkiller XL",
          url: "https://www.cannvas.me/strain-matcher/painkillerxl",
          type: "Indica",
          helps_with: "Back Pain, Chronic Pain, Anxiety",
          tastes_like: "Dank, Earthy, Piney",
          thc_content: "1%",
          cbd_content: "12.6%"
        },
        {
          name: "Palm Tree CBD",
          url: "https://www.cannvas.me/strain-matcher/palmtreecbd",
          type: "Indica",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Earthy, Citrusy, Herbal",
          thc_content: "6.2%",
          cbd_content: "8.5%"
        },
        {
          name: "Panache",
          url: "https://www.cannvas.me/strain-matcher/panache",
          type: "Hybrid",
          helps_with: "Chronic Pain, Fatigue, Inflammation",
          tastes_like: "Sweet, Fruity, Earthy",
          thc_content: "14.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Papaya",
          url: "https://www.cannvas.me/strain-matcher/papaya",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Tropical, Sweet, Tree Fruit",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Papaya Grove",
          url: "https://www.cannvas.me/strain-matcher/papayagrove",
          type: "Sativa",
          helps_with: "Appetite Loss, Stress, Concentration",
          tastes_like: "Fruity, Citrusy, Sweet",
          thc_content: "17%",
          cbd_content: "1%"
        },
        {
          name: "Paradise Island (Dela Haze)",
          url: "https://www.cannvas.me/strain-matcher/paradiseislanddelahaze",
          type: "Sativa",
          helps_with: "Anxiety, Fatigue, Depression",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Passion Fruit",
          url: "https://www.cannvas.me/strain-matcher/passionfruit",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Back Pain",
          tastes_like: "Fruity, Earthy",
          thc_content: "5%",
          cbd_content: "10%"
        },
        {
          name: "Peechee (Strawberry Cheesecake)",
          url:
            "https://www.cannvas.me/strain-matcher/peecheestrawberrycheesecake",
          type: "Indica",
          helps_with: "Inflammation, Chronic Pain",
          thc_content: "20%",
          cbd_content: "0.3%"
        },
        {
          name: "Penelope",
          url: "https://www.cannvas.me/strain-matcher/penelope",
          type: "Hybrid",
          helps_with: "Anxiety, Stress, Migraines",
          tastes_like: "Earthy, Skunky, Piney",
          thc_content: "5.9%",
          cbd_content: "8%"
        },
        {
          name: "Pennywise",
          url: "https://www.cannvas.me/strain-matcher/pennywise",
          type: "Indica",
          helps_with: "Depression, Chronic Pain, Back Pain",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "9%",
          cbd_content: "12%"
        },
        {
          name: "Pierre Elliott (Pineapple Express)",
          url:
            "https://www.cannvas.me/strain-matcher/pierreelliottpineappleexpress",
          type: "Sativa",
          helps_with: "Anxiety, Chronic Pain, Insomnia",
          tastes_like: "Sweet, Pineapple, Earthy",
          thc_content: "12%",
          cbd_content: "0.1%"
        },
        {
          name: "Pineapple Punch",
          url: "https://www.cannvas.me/strain-matcher/pineapplepunch",
          type: "Hybrid",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Tropical, Pineapple, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Pink Kush",
          url: "https://www.cannvas.me/strain-matcher/pinkkush",
          type: "Indica",
          helps_with: "Anxiety, Appetite Loss, Depression",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "21.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Pink OG Kush",
          url: "https://www.cannvas.me/strain-matcher/pinkogkush",
          type: "Indica",
          helps_with: "Depression, Insomnia, Stress",
          tastes_like: "Earthy, Kush, Lemony",
          thc_content: "13.5%",
          cbd_content: "1%"
        },
        {
          name: "Pink Rockstar",
          url: "https://www.cannvas.me/strain-matcher/pinkrockstar",
          type: "Indica",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Earthy, Kush, Dank",
          thc_content: "19.6%",
          cbd_content: "0%"
        },
        {
          name: "Pokiok",
          url: "https://www.cannvas.me/strain-matcher/pokiok",
          type: "Indica",
          tastes_like: "Dank, Pungent",
          thc_content: "15.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Pot of Gold",
          url: "https://www.cannvas.me/strain-matcher/potofgold",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Skunky, Apricot, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Power Plant",
          url: "https://www.cannvas.me/strain-matcher/powerplant",
          type: "Hybrid",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Earthy, Woody, Peppery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Provence Jardin (Lavender Kush)",
          url:
            "https://www.cannvas.me/strain-matcher/provencejardinlavenderkush",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Flowery, Lavender, Earthy",
          thc_content: "14.9%",
          cbd_content: "0%"
        },
        {
          name: "Purple Haze",
          url: "https://www.cannvas.me/strain-matcher/purplehaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Sweet, Flowery",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Purple Kush",
          url: "https://www.cannvas.me/strain-matcher/purplekush",
          type: "Indica",
          helps_with: "Appetite Loss, Stress, Anxiety",
          tastes_like: "Earthy, Berry, Grape",
          thc_content: "19.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Purple N.1",
          url: "https://www.cannvas.me/strain-matcher/purplen1",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Fruity",
          thc_content: "11.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Purple N.2",
          url: "https://www.cannvas.me/strain-matcher/purplen2",
          type: "Sativa",
          helps_with: "Anxiety, Stress, Depression",
          tastes_like: "Earthy, Pine",
          thc_content: "8%",
          cbd_content: "2%"
        },
        {
          name: "Purple N.3",
          url: "https://www.cannvas.me/strain-matcher/purplen3",
          type: "Sativa",
          helps_with: "Stress, Concentration, Depression",
          tastes_like: "Earthy, Berry, Citrusy",
          thc_content: "9.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Purple N.5",
          url: "https://www.cannvas.me/strain-matcher/purplen5",
          type: "Hybrid",
          helps_with: "Chronic Pain, Mood Swings, Stress",
          tastes_like: "Earthy, Pungent, Diesel",
          thc_content: "11%",
          cbd_content: "0.3%"
        },
        {
          name: "Purple Power",
          url: "https://www.cannvas.me/strain-matcher/purplepower",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Depression",
          tastes_like: "Pungent, Earthy, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Purple Voodoo",
          url: "https://www.cannvas.me/strain-matcher/purplevoodoo",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Sweet, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Purps (Tilray)",
          url: "https://www.cannvas.me/strain-matcher/purpstilray",
          type: "Hybrid",
          helps_with: "Insomnia, Mood Swings, Stress",
          tastes_like: "Earthy, Berry, Piney",
          thc_content: "21.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Qleaner",
          url: "https://www.cannvas.me/strain-matcher/qleaner",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Migraines",
          tastes_like: "Earthy, Citrusy, Tropical",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Quantum Kush",
          url: "https://www.cannvas.me/strain-matcher/quantumkush",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Earthy, Herbal, Kush",
          thc_content: "24%",
          cbd_content: "0.9%"
        },
        {
          name: "Querkle",
          url: "https://www.cannvas.me/strain-matcher/querkle",
          type: "Hybrid",
          helps_with: "Stress, Depression, Appetite Loss",
          tastes_like: "Sweet, Berry, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Quincy (God Bud)",
          url: "https://www.cannvas.me/strain-matcher/quincygodbud",
          type: "Indica",
          helps_with: "Insomnia, Menstrual Cramps, Depression",
          tastes_like: "Flowery, Lemony",
          thc_content: "16%",
          cbd_content: "0.2%"
        },
        {
          name: "R2",
          url: "https://www.cannvas.me/strain-matcher/r2",
          type: "Sativa",
          helps_with: "Anxiety, ADHD, Back Pain",
          tastes_like: "Earthy, Musky, Sweet",
          thc_content: "14.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Raphael",
          url: "https://www.cannvas.me/strain-matcher/raphael",
          type: "Indica",
          helps_with: "Anxiety, Migraines, Stress",
          tastes_like: "Earthy, Citrusy, Lemony",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "Raspberry Cough",
          url: "https://www.cannvas.me/strain-matcher/raspberrycough",
          type: "Hybrid",
          helps_with: "Fatigue, Stress, Depression",
          tastes_like: "Berry, Sweet, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Reclining Buddha",
          url: "https://www.cannvas.me/strain-matcher/recliningbuddha",
          type: "Indica",
          helps_with: "Migraines, Inflammation, Chronic Pain",
          tastes_like: "Flowery, Pungent, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Red N.1",
          url: "https://www.cannvas.me/strain-matcher/redn1",
          type: "Indica",
          helps_with: "Depression, Stress, Anxiety",
          tastes_like: "Earthy, Citrusy, Berry",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Red N.2",
          url: "https://www.cannvas.me/strain-matcher/redn2",
          type: "Sativa",
          helps_with: "Anxiety, Depression, Fatigue",
          tastes_like: "Lemony, Citrusy, Sweet",
          thc_content: "18%",
          cbd_content: "0.3%"
        },
        {
          name: "Red N.3",
          url: "https://www.cannvas.me/strain-matcher/redn3",
          type: "Hybrid",
          helps_with: "Stress",
          tastes_like: "Fruity, Grape, Berry",
          thc_content: "19%",
          cbd_content: "0.3%"
        },
        {
          name: "Red N.4",
          url: "https://www.cannvas.me/strain-matcher/redn4",
          type: "Sativa",
          helps_with: "Insomnia, Depression, Stress",
          tastes_like: "Earthy, Fruity, Citrusy",
          thc_content: "20%",
          cbd_content: "0.5%"
        },
        {
          name: "Red N.6",
          url: "https://www.cannvas.me/strain-matcher/redn6",
          type: "Hybrid",
          helps_with: "Insomnia, Nauseous, Depression",
          tastes_like: "Earthy, Sweet, Fruity",
          thc_content: "18%",
          cbd_content: "1%"
        },
        {
          name: "RedeCan X",
          url: "https://www.cannvas.me/strain-matcher/redecanx",
          type: "Hybrid",
          tastes_like: "Smooth, Dank, Woody",
          thc_content: "15.1%",
          cbd_content: "0%"
        },
        {
          name: "RedeCan X Popcorn",
          url: "https://www.cannvas.me/strain-matcher/redecanxpopcorn",
          type: "Hybrid",
          thc_content: "15.1%",
          cbd_content: "0%"
        },
        {
          name: "Rene Mist",
          url: "https://www.cannvas.me/strain-matcher/renemist",
          type: "Hybrid",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Earthy, Flowery",
          thc_content: "13%",
          cbd_content: "0%"
        },
        {
          name: "Rhubarb Kush",
          url: "https://www.cannvas.me/strain-matcher/rhubarbkush",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Earthy, Fruity, Kush",
          thc_content: "18.6%",
          cbd_content: "0%"
        },
        {
          name: "Rio",
          url: "https://www.cannvas.me/strain-matcher/rio",
          type: "Hybrid",
          thc_content: "21%",
          cbd_content: "0%"
        },
        {
          name: "Ripple Effect",
          url: "https://www.cannvas.me/strain-matcher/rippleeffect",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Chronic Pain",
          tastes_like: "Smooth, Earthy, Flowery",
          thc_content: "13%",
          cbd_content: "0%"
        },
        {
          name: "Rocklock",
          url: "https://www.cannvas.me/strain-matcher/rocklock",
          type: "Indica",
          helps_with: "Stress, Depression, Muscle Spasms",
          tastes_like: "Earthy, Woody, Sage",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Rockstar",
          url: "https://www.cannvas.me/strain-matcher/rockstar",
          type: "Hybrid",
          helps_with: "Migraines, Stress, Depression",
          tastes_like: "Earthy, Diesel, Pungent",
          thc_content: "23.1%",
          cbd_content: "0.5%"
        },
        {
          name: "Romulan",
          url: "https://www.cannvas.me/strain-matcher/romulan",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Earthy, Piney, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Romulan Diesel",
          url: "https://www.cannvas.me/strain-matcher/romulandiesel",
          type: "Hybrid",
          thc_content: "18.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Rona's Ambrosia",
          url: "https://www.cannvas.me/strain-matcher/ronasambrosia",
          type: "Hybrid",
          helps_with: "Stress, Back Pain, Chronic Pain",
          thc_content: "18%",
          cbd_content: "1%"
        },
        {
          name: "Royal Purple Kush",
          url: "https://www.cannvas.me/strain-matcher/royalpurplekush",
          type: "Indica",
          helps_with: "Anxiety, Depression, Stress",
          tastes_like: "Earthy, Kush, Berry",
          thc_content: "22%",
          cbd_content: "0.4%"
        },
        {
          name: "Ruxton (1) Sour OG",
          url: "https://www.cannvas.me/strain-matcher/ruxton1sourog",
          type: "Hybrid",
          thc_content: "19.5%",
          cbd_content: "0%"
        },
        {
          name: "Ruxton (3) Sour OG",
          url: "https://www.cannvas.me/strain-matcher/ruxton3sourog",
          type: "Sativa",
          helps_with: "Insomnia, Depression, Stress",
          tastes_like: "Diesel, Sour, Earthy",
          thc_content: "19.5%",
          cbd_content: "0%"
        },
        {
          name: "Ruxton (Sour OG)",
          url: "https://www.cannvas.me/strain-matcher/ruxtonsourog",
          type: "Hybrid",
          helps_with: "Depression, Appetite Loss, Concentration",
          tastes_like: "Diesel, Citrusy, Earthy",
          thc_content: "26.5%",
          cbd_content: "0%"
        },
        {
          name: "Sachigo (Sour Kush)",
          url: "https://www.cannvas.me/strain-matcher/sachigosourkush",
          type: "Hybrid",
          helps_with: "Stress, Back Pain, Depression",
          tastes_like: "Sour, Earthy, Fruity",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Salinca",
          url: "https://www.cannvas.me/strain-matcher/salinca",
          type: "Indica",
          helps_with: "Migraines, Appetite Loss, Anxiety",
          tastes_like: "Earthy, Berry, Bitter",
          thc_content: "19.4%",
          cbd_content: "0%"
        },
        {
          name: "San Fernando Valley",
          url: "https://www.cannvas.me/strain-matcher/sanfernandovalley",
          type: "Hybrid",
          helps_with: "Fatigue, Back Pain, Concentration",
          tastes_like: "Berry, Earthy, Fruity",
          thc_content: "16.8%",
          cbd_content: "0%"
        },
        {
          name: "Sapphire Star",
          url: "https://www.cannvas.me/strain-matcher/sapphirestar",
          type: "Hybrid",
          helps_with: "Stress, Migraines, Depression",
          tastes_like: "Sweet, Berry, Strawberry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Sativa Milled",
          url: "https://www.cannvas.me/strain-matcher/sativamilled",
          type: "Sativa",
          helps_with: "ADHD, Anxiety, Chronic Pain",
          tastes_like: "Bitter, Fruity, Earthy",
          thc_content: "16.5%",
          cbd_content: "1%"
        },
        {
          name: "Sativa Tips",
          url: "https://www.cannvas.me/strain-matcher/sativatips",
          type: "Sativa",
          helps_with: "Depression, Anxiety, Stress",
          tastes_like: "Diesel, Earthy, Lemony",
          thc_content: "18.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Satori",
          url: "https://www.cannvas.me/strain-matcher/satori",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Mango, Earthy, Piney",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Savary (Pink Kush)",
          url: "https://www.cannvas.me/strain-matcher/savarypinkkush",
          type: "Indica",
          helps_with: "Insomnia, Appetite Loss, Stress",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "Sedamen",
          url: "https://www.cannvas.me/strain-matcher/sedamen",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Stress",
          tastes_like: "Earthy, Pungent, Kush",
          thc_content: "23.5%",
          cbd_content: "0%"
        },
        {
          name: "Sensi Star",
          url: "https://www.cannvas.me/strain-matcher/sensistar",
          type: "Indica",
          helps_with: "Insomnia, Mood Swings, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Lemony",
          thc_content: "20%",
          cbd_content: "0.4%"
        },
        {
          name: "Sentinel (Cannatonic)",
          url: "https://www.cannvas.me/strain-matcher/sentinelcannatonic",
          type: "Hybrid",
          helps_with: "Depression, Stress, Concentration",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "1.2%",
          cbd_content: "18.5%"
        },
        {
          name: "Serious 6",
          url: "https://www.cannvas.me/strain-matcher/serious6",
          type: "Sativa",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Citrusy, Lemony, Tropical",
          thc_content: "21%",
          cbd_content: "6%"
        },
        {
          name: "Serious Kush",
          url: "https://www.cannvas.me/strain-matcher/seriouskush",
          type: "Hybrid",
          helps_with: "Depression, Stress, Anxiety",
          thc_content: "18.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Shake",
          url: "https://www.cannvas.me/strain-matcher/shake",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Appetite Loss",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "7.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Shark Shock",
          url: "https://www.cannvas.me/strain-matcher/sharkshock",
          type: "Hybrid",
          helps_with: "Insomnia, Anxiety, Appetite Loss",
          tastes_like: "Lemony, Earthy",
          thc_content: "6.5%",
          cbd_content: "4%"
        },
        {
          name: "Shark Shock CBD",
          url: "https://www.cannvas.me/strain-matcher/sharkshockcbd",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Inflammation",
          tastes_like: "Earthy, Herbal, Citrusy",
          thc_content: "6.7%",
          cbd_content: "10.7%"
        },
        {
          name: "Shark Tooth (Shark Shock)",
          url: "https://www.cannvas.me/strain-matcher/sharktoothsharkshock",
          type: "Indica",
          helps_with: "Depression, Stress, Anxiety",
          tastes_like: "Citrusy, Fruity, Herbal",
          thc_content: "5%",
          cbd_content: "9%"
        },
        {
          name: "Shiatsu Kush",
          url: "https://www.cannvas.me/strain-matcher/shiatsukush",
          type: "Hybrid",
          helps_with: "Chronic Pain, Anxiety",
          tastes_like: "Kush, Pungent",
          thc_content: "20.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Shiatsu Kush (Canna Farms Ltd)",
          url: "https://www.cannvas.me/strain-matcher/shiatsukushcannafarms",
          type: "Indica",
          helps_with: "Depression, Stress, Chronic Pain",
          tastes_like: "Kush, Citrusy, Woody",
          thc_content: "14.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Shishkaberry",
          url: "https://www.cannvas.me/strain-matcher/shishkaberry",
          type: "Hybrid",
          helps_with: "Insomnia",
          tastes_like: "Berry, Fruity, Sweet",
          thc_content: "16.1%",
          cbd_content: "0%"
        },
        {
          name: "Shiva Skunk",
          url: "https://www.cannvas.me/strain-matcher/shivaskunk",
          type: "Indica",
          helps_with: "Chronic Pain, Depression, Stress",
          tastes_like: "Skunky, Earthy, Piney",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "SI: Med (Sensi Star)",
          url: "https://www.cannvas.me/strain-matcher/simedsensistar",
          type: "Hybrid",
          helps_with: "Depression, Anxiety, Insomnia",
          tastes_like: "Earthy, Fruity, Citrusy",
          thc_content: "22.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Silver Haze",
          url: "https://www.cannvas.me/strain-matcher/silverhaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Flowery, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Silver Pearl",
          url: "https://www.cannvas.me/strain-matcher/silverpearl",
          type: "Hybrid",
          helps_with: "Stress, Fatigue, Chronic Pain",
          tastes_like: "Skunky, Tropical, Diesel",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Silverthrone (Sensi Star)",
          url: "https://www.cannvas.me/strain-matcher/silverthronesensistar",
          type: "Indica",
          tastes_like: "Earthy, Pungent",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "Sirius (Alien Dawg)",
          url: "https://www.cannvas.me/strain-matcher/siriusaliendawg",
          type: "Hybrid",
          helps_with: "Migraines, Appetite Loss, Insomnia",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Skunk Haze",
          url: "https://www.cannvas.me/strain-matcher/skunkhaze",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Earthy, Woody, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Skydog",
          url: "https://www.cannvas.me/strain-matcher/skydog",
          type: "Indica",
          helps_with: "Stress, Inflammation, Chronic Pain",
          tastes_like: "Lemony, Sweet, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Skywalker",
          url: "https://www.cannvas.me/strain-matcher/skywalker",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          tastes_like: "Earthy, Sweet, Flowery",
          thc_content: "16.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Skywalker Kush No. 1 (DNA Certified)",
          url:
            "https://www.cannvas.me/strain-matcher/skywalkerkushno1dnacertified",
          type: "Indica",
          helps_with: "Insomnia, Mood Swings, Depression",
          tastes_like: "Earthy, Kush, Citrusy",
          thc_content: "22.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Skywalker Kush No. 2 (DNA Certified)",
          url:
            "https://www.cannvas.me/strain-matcher/skywalkerkushno2dnacertified",
          type: "Hybrid",
          helps_with: "Depression, Stress, Back Pain",
          tastes_like: "Earthy, Dank, Kush",
          thc_content: "21.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Skywalker OG",
          url: "https://www.cannvas.me/strain-matcher/skywalkerog",
          type: "Hybrid",
          helps_with: "Migraines, Insomnia, Depression",
          tastes_like: "Earthy, Sweet, Pungent",
          thc_content: "23%",
          cbd_content: "0%"
        },
        {
          name: "SleeStack",
          url: "https://www.cannvas.me/strain-matcher/sleestack",
          type: "Hybrid",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Diesel, Lemony, Skunky",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Small Flower",
          url: "https://www.cannvas.me/strain-matcher/smallflower",
          type: "Indica",
          helps_with: "Chronic Pain, Stress, Nauseous",
          tastes_like: "Herbal, Spicy, Earthy",
          thc_content: "16.4%",
          cbd_content: "0.1%"
        },
        {
          name: "SN: Med (Spoetnik )",
          url: "https://www.cannvas.me/strain-matcher/snmedspoetnik",
          type: "Indica",
          helps_with: "Chronic Pain, Anxiety, Depression",
          tastes_like: "Earthy, Pine, Woody",
          thc_content: "15.4%",
          cbd_content: "0.1%"
        },
        {
          name: "Snow Dome (LA Confidential)",
          url: "https://www.cannvas.me/strain-matcher/snowdomelaconfidential",
          type: "Indica",
          helps_with: "Anxiety, Depression, Chronic Pain",
          tastes_like: "Earthy, Pungent, Pine",
          thc_content: "27%",
          cbd_content: "0.2%"
        },
        {
          name: "Snow White",
          url: "https://www.cannvas.me/strain-matcher/snowwhite",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Insomnia",
          tastes_like: "Citrusy, Earthy, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Solstice",
          url: "https://www.cannvas.me/strain-matcher/solstice",
          type: "Hybrid",
          helps_with: "Mood Swings, Stress, Insomnia",
          tastes_like: "Earthy, Citrusy",
          thc_content: "0.4%",
          cbd_content: "14.2%"
        },
        {
          name: "Solveris",
          url: "https://www.cannvas.me/strain-matcher/solveris",
          type: "Sativa",
          helps_with: "Depression, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Citrusy, Woody",
          thc_content: "9.5%",
          cbd_content: "0%"
        },
        {
          name: "Somango",
          url: "https://www.cannvas.me/strain-matcher/somango",
          type: "Hybrid",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Mango, Earthy, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Sour Amnesia",
          url: "https://www.cannvas.me/strain-matcher/souramnesia",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Sweet, Diesel, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Sour Cream",
          url: "https://www.cannvas.me/strain-matcher/sourcream",
          type: "Hybrid",
          helps_with: "Migraines, Stress, Depression",
          tastes_like: "Earthy, Diesel, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Sour Diesel",
          url: "https://www.cannvas.me/strain-matcher/sourdiesel",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Diesel, Pungent, Earthy",
          thc_content: "18.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Sour Kush",
          url: "https://www.cannvas.me/strain-matcher/sourkush",
          type: "Sativa",
          helps_with: "Insomnia, Migraines, Anxiety",
          tastes_like: "Kush, Sour, Lemony",
          thc_content: "20.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Sour Kush (DNA Certified)",
          url: "https://www.cannvas.me/strain-matcher/sourkushdnacertified",
          type: "Indica",
          helps_with: "Anxiety, Stress, Chronic Pain",
          tastes_like: "Earthy, Sour, Citrusy",
          thc_content: "18.6%",
          cbd_content: "7%"
        },
        {
          name: "Sour OG",
          url: "https://www.cannvas.me/strain-matcher/sourog",
          type: "Hybrid",
          helps_with: "Anxiety, Migraines, Stress",
          tastes_like: "Diesel, Citrusy, Sour",
          thc_content: "25.8%",
          cbd_content: "0.9%"
        },
        {
          name: "Souris Skies (Sensi Star)",
          url: "https://www.cannvas.me/strain-matcher/sourisskiessensistar",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Chronic Pain",
          thc_content: "17.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Special K",
          url: "https://www.cannvas.me/strain-matcher/specialk",
          type: "Hybrid",
          helps_with: "Depression, Stress, Fatigue",
          tastes_like: "Sweet, Citrusy, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Sputnik",
          url: "https://www.cannvas.me/strain-matcher/sputnik",
          type: "Hybrid",
          helps_with: "Depression, Chronic Pain, Stress",
          tastes_like: "Sweet, Flowery, Tea",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Star Gazer",
          url: "https://www.cannvas.me/strain-matcher/stargazer",
          type: "Indica",
          helps_with: "Insomnia",
          tastes_like: "Earthy, Skunky, Berry",
          thc_content: "11.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Star Killer",
          url: "https://www.cannvas.me/strain-matcher/starkiller",
          type: "Indica",
          helps_with: "Stress, Anxiety, Appetite Loss",
          tastes_like: "Earthy, Citrusy, Lemony",
          thc_content: "22.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Starfall",
          url: "https://www.cannvas.me/strain-matcher/starfall",
          type: "Indica",
          helps_with: "Insomnia, Stress, Back Pain",
          tastes_like: "Earthy, Citrusy, Herbal",
          thc_content: "23%",
          cbd_content: "0%"
        },
        {
          name: "Stellio",
          url: "https://www.cannvas.me/strain-matcher/stellio",
          type: "Indica",
          helps_with: "Depression, Anxiety, Migraines",
          tastes_like: "Earthy, Sweet, Woody",
          thc_content: "28.5%",
          cbd_content: "0%"
        },
        {
          name: "Stokes (Querkle)",
          url: "https://www.cannvas.me/strain-matcher/stokesquerkle",
          type: "Indica",
          helps_with: "Insomnia, Muscle Spasms, Appetite Loss",
          tastes_like: "Earthy, Sweet, Harsh",
          thc_content: "25%",
          cbd_content: "0.2%"
        },
        {
          name: "Strawberry Cough",
          url: "https://www.cannvas.me/strain-matcher/strawberrycough",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Strawberry, Sweet, Berry",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Strawberry Short Cookies",
          url: "https://www.cannvas.me/strain-matcher/strawberryshortcookies",
          type: "Hybrid",
          helps_with: "Depression, Fatigue, Concentration",
          tastes_like: "Strawberry, Sweet, Smooth",
          thc_content: "16.5%",
          cbd_content: "0%"
        },
        {
          name: "Sugar Shack",
          url: "https://www.cannvas.me/strain-matcher/sugarshack",
          type: "Sativa",
          helps_with: "Depression, Insomnia, Fatigue",
          tastes_like: "Sweet, Earthy, Citrusy",
          thc_content: "15.9%",
          cbd_content: "0.1%"
        },
        {
          name: "Sugarloaf (Super Lemon Haze)",
          url: "https://www.cannvas.me/strain-matcher/sugarloafsuperlemonhaze",
          type: "Sativa",
          helps_with: "Back Pain, Depression, Chronic Pain",
          tastes_like: "Lemony, Citrusy",
          thc_content: "14%",
          cbd_content: "0.5%"
        },
        {
          name: "Summerside Breeze (Super Silver Haze)",
          url:
            "https://www.cannvas.me/strain-matcher/summersidebreezesupersilverhaze",
          type: "Sativa",
          helps_with: "Chronic Pain, Insomnia, Concentration",
          tastes_like: "Herbal, Smooth, Haze",
          thc_content: "16.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Sundance Borealis Blend (Indica)",
          url:
            "https://www.cannvas.me/strain-matcher/sundanceborealisblendindica",
          type: "Sativa",
          helps_with: "Migraines, Anxiety, Insomnia",
          tastes_like: "Earthy, Bitter, Pungent",
          thc_content: "5%",
          cbd_content: "13%"
        },
        {
          name: "Sundance Borealis Blend (Sativa)",
          url:
            "https://www.cannvas.me/strain-matcher/sundanceborealisblendsativa",
          type: "Indica",
          helps_with: "Anxiety, Chronic Pain, Inflammation",
          tastes_like: "Earthy",
          thc_content: "8%",
          cbd_content: "6%"
        },
        {
          name: "Sun-Grown Boaty McBoatface",
          url:
            "https://www.cannvas.me/strain-matcher/sungrownboatymcboatfacecbdmedihaze",
          type: "Hybrid",
          helps_with: "Concentration, Migraines, Depression",
          tastes_like: "Earthy, Pungent, Citrusy",
          thc_content: "2.3%",
          cbd_content: "7.1%"
        },
        {
          name: "Sun-Grown Orange N.1",
          url: "https://www.cannvas.me/strain-matcher/sungrownorangen1",
          type: "Indica",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Citrusy",
          thc_content: "13.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Sun-Grown Orange N.2",
          url: "https://www.cannvas.me/strain-matcher/sungrownorangen2",
          type: "Sativa",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Citrusy, Orange",
          thc_content: "13%",
          cbd_content: "0.1%"
        },
        {
          name: "Sun-Grown Orange N.4",
          url: "https://www.cannvas.me/strain-matcher/sungrownorangen4",
          type: "Indica",
          helps_with: "Stress, Anxiety, Depression",
          tastes_like: "Earthy, Citrusy, Herbal",
          thc_content: "16.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Sun-Grown Red N.1",
          url: "https://www.cannvas.me/strain-matcher/sungrownredn1",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Earthy, Herbal",
          thc_content: "17%",
          cbd_content: "0.1%"
        },
        {
          name: "Sun-Grown Red No. 4",
          url: "https://www.cannvas.me/strain-matcher/sungrownredno4",
          type: "Indica",
          helps_with: "Insomnia, Stress, Depression",
          tastes_like: "Earthy, Fruity, Berry",
          thc_content: "17.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Sunset (Leafs by Snoop)",
          url: "https://www.cannvas.me/strain-matcher/sunsetleafsbysnoop",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Chronic Pain",
          tastes_like: "Earthy, Dank, Spicy",
          thc_content: "23.7%",
          cbd_content: "0.1%"
        },
        {
          name: "Super Critical (AB Labs)",
          url: "https://www.cannvas.me/strain-matcher/supercriticalablabs",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Depression",
          tastes_like: "Earthy, Herbal, Dank",
          thc_content: "16.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Super Lemon Haze",
          url: "https://www.cannvas.me/strain-matcher/superlemonhaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Lemony, Citrusy, Sweet",
          thc_content: "18.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Super Lemon Haze (By Delta 9)",
          url: "https://www.cannvas.me/strain-matcher/superlemonhazebydelta9",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Back Pain",
          tastes_like: "Lemony, Citrusy, Earthy",
          thc_content: "26.6%",
          cbd_content: "0%"
        },
        {
          name: "Super Lemon Haze (Grower's Pride)",
          url:
            "https://www.cannvas.me/strain-matcher/superlemonhazegrowerspride",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Chronic Pain",
          tastes_like: "Lemony, Citrusy, Smooth",
          thc_content: "26.6%",
          cbd_content: "0%"
        },
        {
          name: "Super Silver Haze",
          url: "https://www.cannvas.me/strain-matcher/supersilverhaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Earthy, Citrusy, Sweet",
          thc_content: "16.3%",
          cbd_content: "0%"
        },
        {
          name: "Super Silver Haze (By WMMC)",
          url: "https://www.cannvas.me/strain-matcher/supersilverhazebywmmc",
          type: "Hybrid",
          helps_with: "Chronic Pain, Concentration, Anxiety",
          tastes_like: "Fruity, Earthy, Sweet",
          thc_content: "18.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Super Skunk",
          url: "https://www.cannvas.me/strain-matcher/superskunk",
          type: "Indica",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Skunky, Sweet, Earthy",
          thc_content: "16.1%",
          cbd_content: "0%"
        },
        {
          name: "Superbud",
          url: "https://www.cannvas.me/strain-matcher/superbud",
          type: "Hybrid",
          helps_with: "Nauseous, Depression, Insomnia",
          tastes_like: "Earthy, Sweet, Fruity",
          thc_content: "20.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Supreme Formula 1:1",
          url: "https://www.cannvas.me/strain-matcher/supremeformula11",
          type: "Hybrid",
          helps_with: "Anxiety, Back Pain, Insomnia",
          tastes_like: "Earthy, Herbal, Bitter",
          thc_content: "9%",
          cbd_content: "11%"
        },
        {
          name: "Sweet Escape (Strawberry Cough)",
          url:
            "https://www.cannvas.me/strain-matcher/sweetescapestrawberrycough",
          type: "Sativa",
          helps_with: "Fatigue, Depression, Chronic Pain",
          tastes_like: "Sweet, Fruity, Berry",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Sweet Skunk CBD",
          url: "https://www.cannvas.me/strain-matcher/sweetskunkcbd",
          type: "Sativa",
          helps_with: "Stress, Fatigue, Inflammation",
          tastes_like: "Citrusy, Earthy, Grapefruit",
          thc_content: "7%",
          cbd_content: "8%"
        },
        {
          name: "Sweet Surrender (Conspiracy Kush)",
          url:
            "https://www.cannvas.me/strain-matcher/sweetsurrenderconspiracykush",
          type: "Hybrid",
          tastes_like: "Sweet, Fruity, Honey",
          thc_content: "15%",
          cbd_content: "0%"
        },
        {
          name: "Swiss Bliss",
          url: "https://www.cannvas.me/strain-matcher/swissbliss",
          type: "Hybrid",
          helps_with: "Stress, Depression, Insomnia",
          tastes_like: "Sweet, Citrusy, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Tamaracouta (Girl Scout Cookies)",
          url:
            "https://www.cannvas.me/strain-matcher/tamaracoutagirlscoutcookies",
          type: "Indica",
          helps_with: "Appetite Loss, Stress, Insomnia",
          tastes_like: "Earthy, Sweet, Citrusy",
          thc_content: "14%",
          cbd_content: "0.1%"
        },
        {
          name: "Tangerine Dream (By WMMC)",
          url: "https://www.cannvas.me/strain-matcher/tangerinedreambywmmc",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Anxiety",
          tastes_like: "Citrusy, Orange, Sweet",
          thc_content: "18.1%",
          cbd_content: "0.1%"
        },
        {
          name: "Tangerine Dream (Canna Farms Ltd)",
          url: "https://www.cannvas.me/strain-matcher/tangerinedreamcannafarms",
          type: "Sativa",
          helps_with: "Depression, Anxiety, Insomnia",
          tastes_like: "Citrusy, Orange, Fruity",
          thc_content: "17.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Tangie (Rex)",
          url: "https://www.cannvas.me/strain-matcher/tangierex",
          type: "Sativa",
          helps_with: "Mood Swings, Depression, Migraines",
          tastes_like: "Citrusy, Fruity, Orange",
          thc_content: "18.5%",
          cbd_content: "0%"
        },
        {
          name: "Tekarra (OG Grape Krypt)",
          url: "https://www.cannvas.me/strain-matcher/tekarraoggrapekrypt",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Anxiety",
          tastes_like: "Earthy, Grape, Sweet",
          thc_content: "21%",
          cbd_content: "0.8%"
        },
        {
          name: "Temple (Cannatonic)",
          url: "https://www.cannvas.me/strain-matcher/templecannatonic",
          type: "Hybrid",
          helps_with: "Muscle Spasms, Inflammation, Stress",
          tastes_like: "Earthy, Piney, Woody",
          thc_content: "0.8%",
          cbd_content: "24.5%"
        },
        {
          name: "Texada (Super Lemon Haze)",
          url: "https://www.cannvas.me/strain-matcher/texadasuperlemonhaze",
          type: "Sativa",
          helps_with: "Anxiety, Fatigue, Depression",
          tastes_like: "Lemony, Citrusy, Sweet",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "Thai",
          url: "https://www.cannvas.me/strain-matcher/thai",
          type: "Sativa",
          helps_with: "Chronic Pain, Depression, Stress",
          tastes_like: "Pungent, Woody, Earthy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Thai Lights",
          url: "https://www.cannvas.me/strain-matcher/thailights",
          type: "Sativa",
          helps_with: "Depression, Fatigue, Migraines",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Thai-Tanic",
          url: "https://www.cannvas.me/strain-matcher/thaitanic",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Sweet, Earthy, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "THC Blend",
          url: "https://www.cannvas.me/strain-matcher/thcblend",
          type: "Hybrid",
          helps_with: "Fatigue, Depression, Stress",
          tastes_like: "Earthy, Fruity, Herbal",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "The Doctor",
          url: "https://www.cannvas.me/strain-matcher/thedoctor",
          type: "Hybrid",
          helps_with: "Stress, Insomnia, Chronic Pain",
          tastes_like: "Citrusy, Earthy, Sweet",
          thc_content: "17.7%",
          cbd_content: "0.2%"
        },
        {
          name: "The Grail",
          url: "https://www.cannvas.me/strain-matcher/thegrail",
          type: "Indica",
          helps_with: "Insomnia, Stress, Appetite Loss",
          tastes_like: "Earthy, Coffee, Woody",
          thc_content: "14%",
          cbd_content: "0%"
        },
        {
          name: "Thin Mint",
          url: "https://www.cannvas.me/strain-matcher/thinmint",
          type: "Sativa",
          helps_with: "Back Pain, Anxiety, Appetite Loss",
          tastes_like: "Earthy, Minty, Sweet",
          thc_content: "12%",
          cbd_content: "0%"
        },
        {
          name: "Thor (Ghost Train Haze)",
          url: "https://www.cannvas.me/strain-matcher/thorghosttrainhaze",
          type: "Hybrid",
          thc_content: "23%",
          cbd_content: "0.5%"
        },
        {
          name: "Thor 2 (Ghost Train Haze)",
          url: "https://www.cannvas.me/strain-matcher/thor2ghosttrainhaze",
          type: "Sativa",
          helps_with: "Mood Swings, Chronic Pain, Fatigue",
          tastes_like: "Citrusy, Earthy",
          thc_content: "17%",
          cbd_content: "0.5%"
        },
        {
          name: "Three Sisters (Dairy Queen)",
          url: "https://www.cannvas.me/strain-matcher/3sistersdairyqueen",
          type: "Sativa",
          helps_with: "Muscle Spasms, Depression, Inflammation",
          tastes_like: "Sweet, Vanilla, Cheese",
          thc_content: "18%",
          cbd_content: "0.5%"
        },
        {
          name: "Tidal Bore (R2)",
          url: "https://www.cannvas.me/strain-matcher/tidalborer2",
          type: "Sativa",
          helps_with: "Chronic Pain, Migraines, Anxiety",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "22%",
          cbd_content: "0.1%"
        },
        {
          name: "Tidal Bore Mini (R2)",
          url: "https://www.cannvas.me/strain-matcher/tidalboreminir2",
          type: "Sativa",
          helps_with: "Chronic Pain, Migraines, Anxiety",
          tastes_like: "Earthy, Woody, Piney",
          thc_content: "17.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Titan's Haze",
          url: "https://www.cannvas.me/strain-matcher/titanshaze",
          type: "Sativa",
          helps_with: "Menstrual Cramps, Depression, Inflammation",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Tora Bora",
          url: "https://www.cannvas.me/strain-matcher/torabora",
          type: "Indica",
          helps_with: "Chronic Pain, Muscle Spasms, Migraines",
          tastes_like: "Earthy, Piney, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Torbay (Critical Kush)",
          url: "https://www.cannvas.me/strain-matcher/torbaycriticalkush",
          type: "Hybrid",
          helps_with: "Insomnia, Migraines, Stress",
          thc_content: "14%",
          cbd_content: "0.1%"
        },
        {
          name: "Torbay Mini (Critical Kush)",
          url: "https://www.cannvas.me/strain-matcher/torbayminicriticalkush",
          type: "Hybrid",
          helps_with: "Insomnia, Migraines, Stress",
          thc_content: "14.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Tower (Cannatonic)",
          url: "https://www.cannvas.me/strain-matcher/towercannatonic",
          type: "Hybrid",
          helps_with: "Back Pain, Anxiety, Inflammation",
          thc_content: "0.8%",
          cbd_content: "15%"
        },
        {
          name: "Train Wreck",
          url: "https://www.cannvas.me/strain-matcher/trainwreck",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          thc_content: "16.5%",
          cbd_content: "0.6%"
        },
        {
          name: "Treasure Island",
          url: "https://www.cannvas.me/strain-matcher/treasureisland",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Fatigue",
          tastes_like: "Earthy, Fruity, Flowery",
          thc_content: "0.1%",
          cbd_content: "15%"
        },
        {
          name: "Trivlio",
          url: "https://www.cannvas.me/strain-matcher/trivlio",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Lemony, Piney, Earthy",
          thc_content: "25.5%",
          cbd_content: "0%"
        },
        {
          name: "Trutiva",
          url: "https://www.cannvas.me/strain-matcher/trutiva",
          type: "Sativa",
          helps_with: "Stress, Back Pain, Inflammation",
          tastes_like: "Smooth, Earthy, Fruity",
          thc_content: "1%",
          cbd_content: "16.5%"
        },
        {
          name: "Tsunami",
          url: "https://www.cannvas.me/strain-matcher/tsunami",
          type: "Indica",
          helps_with: "Stress, Appetite Loss, Chronic Pain",
          tastes_like: "Earthy, Smooth, Herbal",
          thc_content: "18%",
          cbd_content: "0%"
        },
        {
          name: "TWD Lot #1 (Proprietary Strain)",
          url: "https://www.cannvas.me/strain-matcher/twdlot1proprietarystrain",
          type: "Indica",
          helps_with: "Depression, Migraines, Stress",
          tastes_like: "Earthy, Woody, Citrusy",
          thc_content: "0.2%",
          cbd_content: "6.8%"
        },
        {
          name: "Ultra",
          url: "https://www.cannvas.me/strain-matcher/ultra",
          type: "Hybrid",
          helps_with: "Back Pain, Chronic Pain, Anxiety",
          tastes_like: "Earthy, Citrusy",
          thc_content: "16.8%",
          cbd_content: "0%"
        },
        {
          name: "Ultra Sour",
          url: "https://www.cannvas.me/strain-matcher/ultrasour",
          type: "Sativa",
          helps_with: "Chronic Pain, Stress, Insomnia",
          tastes_like: "Sour, Diesel, Citrusy",
          thc_content: "21.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Ursa Minor",
          url: "https://www.cannvas.me/strain-matcher/ursaminor",
          type: "Hybrid",
          helps_with: "Anxiety, Appetite Loss, Chronic Pain",
          thc_content: "15.6%",
          cbd_content: "0.1%"
        },
        {
          name: "Vanilla Kush",
          url: "https://www.cannvas.me/strain-matcher/vanillakush",
          type: "Indica",
          helps_with: "Stress, Chronic Pain, Insomnia",
          tastes_like: "Vanilla, Sweet, Flowery",
          thc_content: "22%",
          cbd_content: "1.2%"
        },
        {
          name: "Vanilluna",
          url: "https://www.cannvas.me/strain-matcher/vanilluna",
          type: "Hybrid",
          helps_with: "Eye Pressure, Migraines, Inflammation",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Very Berry Haze",
          url: "https://www.cannvas.me/strain-matcher/veryberryhaze",
          type: "Sativa",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Berry, Pungent, Sweet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Voluptas",
          url: "https://www.cannvas.me/strain-matcher/voluptas",
          type: "Indica",
          helps_with: "Anxiety, Stress, Fatigue",
          tastes_like: "Sweet, Citrusy, Tropical",
          thc_content: "21.5%",
          cbd_content: "0%"
        },
        {
          name: "Vortex",
          url: "https://www.cannvas.me/strain-matcher/vortex",
          type: "Sativa",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Lemony, Woody",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Wabanaki",
          url: "https://www.cannvas.me/strain-matcher/wabanaki",
          type: "Sativa",
          helps_with: "Mood Swings, Concentration, Depression",
          tastes_like: "Earthy, Piney, Lemony",
          thc_content: "18%",
          cbd_content: "0.1%"
        },
        {
          name: "Wabanaki Mini",
          url: "https://www.cannvas.me/strain-matcher/wabanakimini",
          type: "Sativa",
          helps_with: "Anxiety",
          tastes_like: "Sweet, Earthy, Herbal",
          thc_content: "17.2%",
          cbd_content: "0.1%"
        },
        {
          name: "Waldo",
          url: "https://www.cannvas.me/strain-matcher/waldo",
          type: "Hybrid",
          helps_with: "Nauseous, Chronic Pain, Depression",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Wappa",
          url: "https://www.cannvas.me/strain-matcher/wappa",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Insomnia",
          thc_content: "20%",
          cbd_content: "0.1%"
        },
        {
          name: "Warlock",
          url: "https://www.cannvas.me/strain-matcher/warlock",
          type: "Hybrid",
          helps_with: "Insomnia, Stress, Back Pain",
          tastes_like: "Earthy, Fruity, Sweet",
          thc_content: "19%",
          cbd_content: "0%"
        },
        {
          name: "Warlock CBD",
          url: "https://www.cannvas.me/strain-matcher/warlockcbd",
          type: "Hybrid",
          helps_with: "Anxiety, Inflammation, Depression",
          tastes_like: "Earthy, Sweet, Flowery",
          thc_content: "12.1%",
          cbd_content: "11.3%"
        },
        {
          name: "Warwick 1 ('91 K-OG Melon)",
          url: "https://www.cannvas.me/strain-matcher/warwick191kogmelon",
          type: "Sativa",
          helps_with: "Stress, Appetite Loss, Fatigue",
          tastes_like: "Fruity, Sweet, Tropical",
          thc_content: "19%",
          cbd_content: "0.5%"
        },
        {
          name: "Warwick 2 ('91 K-OG Chemdawg)",
          url: "https://www.cannvas.me/strain-matcher/warwick291kogchemdawg",
          type: "Sativa",
          helps_with: "Back Pain, Stress, Depression",
          tastes_like: "Earthy, Diesel, Chemical",
          thc_content: "18%",
          cbd_content: "0.5%"
        },
        {
          name: "Watermelon",
          url: "https://www.cannvas.me/strain-matcher/watermelon",
          type: "Indica",
          helps_with: "Insomnia, Stress, Appetite Loss",
          tastes_like: "Sweet, Fruity, Berry",
          thc_content: "18%",
          cbd_content: "10%"
        },
        {
          name: "Watson",
          url: "https://www.cannvas.me/strain-matcher/watson",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Earthy, Citrusy, Woody",
          thc_content: "7.1%",
          cbd_content: "6.6%"
        },
        {
          name: "Whitaker Blues",
          url: "https://www.cannvas.me/strain-matcher/whitakerblues",
          type: "Indica",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Sweet, Apple, Pear",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "White Berry",
          url: "https://www.cannvas.me/strain-matcher/whiteberry",
          type: "Hybrid",
          helps_with: "Stress, Migraines, Depression",
          tastes_like: "Berry, Earthy, Sweet",
          thc_content: "12%",
          cbd_content: "0.1%"
        },
        {
          name: "White Crown (White Berry)",
          url: "https://www.cannvas.me/strain-matcher/whitecrownwhiteberry",
          type: "Hybrid",
          helps_with: "Chronic Pain, Mood Swings, Insomnia",
          tastes_like: "Berry, Earthy",
          thc_content: "13%",
          cbd_content: "0.5%"
        },
        {
          name: "White Haze",
          url: "https://www.cannvas.me/strain-matcher/whitehaze",
          type: "Sativa",
          helps_with: "Stress, Depression, Fatigue",
          tastes_like: "Lemony, Piney, Citrusy",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "White OG",
          url: "https://www.cannvas.me/strain-matcher/whiteog",
          type: "Hybrid",
          helps_with: "Anxiety, Insomnia, Back Pain",
          tastes_like: "Earthy, Citrusy, Diesel",
          thc_content: "24.8%",
          cbd_content: "0%"
        },
        {
          name: "White Rhino",
          url: "https://www.cannvas.me/strain-matcher/whiterhino",
          type: "Indica",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Earthy, Sweet, Woody",
          thc_content: "15.7%",
          cbd_content: "0.1%"
        },
        {
          name: "White Russian",
          url: "https://www.cannvas.me/strain-matcher/whiterussian",
          type: "Hybrid",
          helps_with: "Stress, Chronic Pain, Depression",
          tastes_like: "Sweet, Skunky, Earthy",
          thc_content: "23%",
          cbd_content: "11%"
        },
        {
          name: "White Shark",
          url: "https://www.cannvas.me/strain-matcher/whiteshark",
          type: "Sativa",
          helps_with: "Depression, Insomnia, Anxiety",
          tastes_like: "Dank, Berry, Fruity",
          thc_content: "19.1%",
          cbd_content: "0%"
        },
        {
          name: "White Smurf",
          url: "https://www.cannvas.me/strain-matcher/whitesmurf",
          type: "Hybrid",
          helps_with: "Chronic Pain, Inflammation, Depression",
          tastes_like: "Minty, Menthol, Violet",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "White Widow",
          url: "https://www.cannvas.me/strain-matcher/whitewidow",
          type: "Indica",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Earthy, Woody, Pungent",
          thc_content: "16%",
          cbd_content: "5%"
        },
        {
          name: "Whitecap (White Widow)",
          url: "https://www.cannvas.me/strain-matcher/whitecapwhitewidow",
          type: "Hybrid",
          helps_with: "Chronic Pain, Depression, Stress",
          tastes_like: "Earthy, Fruity, Smooth",
          thc_content: "16%",
          cbd_content: "0%"
        },
        {
          name: "Whitehorn",
          url: "https://www.cannvas.me/strain-matcher/whitehorn",
          type: "Indica",
          helps_with: "Anxiety, Insomnia, Back Pain",
          tastes_like: "Sweet",
          thc_content: "15%",
          cbd_content: "0.7%"
        },
        {
          name: "Wilbur",
          url: "https://www.cannvas.me/strain-matcher/wilbur",
          type: "Sativa",
          helps_with: "Inflammation, Migraines, Depression",
          tastes_like: "Earthy, Pine, Woody",
          thc_content: "1.1%",
          cbd_content: "5.5%"
        },
        {
          name: "Wine Gums",
          url: "https://www.cannvas.me/strain-matcher/winegums",
          type: "Sativa",
          helps_with: "Stress, Insomnia, Depression",
          tastes_like: "Fruity, Berry, Citrusy",
          thc_content: "23.8%",
          cbd_content: "0.1%"
        },
        {
          name: "Wiwaxy (Wappa)",
          url: "https://www.cannvas.me/strain-matcher/wiwaxywappa",
          type: "Indica",
          helps_with: "Insomnia, Anxiety, Depression",
          tastes_like: "Earthy, Citrusy, Fruity",
          thc_content: "15%",
          cbd_content: "0.5%"
        },
        {
          name: "Wonder Woman",
          url: "https://www.cannvas.me/strain-matcher/wonderwoman",
          type: "Hybrid",
          helps_with: "Stress, Depression, Chronic Pain",
          tastes_like: "Tropical, Flowery, Pungent",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "WP: Med (Wappa)",
          url: "https://www.cannvas.me/strain-matcher/wpmedwappa",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Citrusy, Earthy, Fruity",
          thc_content: "19.3%",
          cbd_content: "0.1%"
        },
        {
          name: "Yellow N.1",
          url: "https://www.cannvas.me/strain-matcher/yellown1",
          type: "Hybrid",
          helps_with: "Muscle Spasms, Stress, Insomnia",
          tastes_like: "Earthy, Piney, Fruity",
          thc_content: "0.7%",
          cbd_content: "16.5%"
        },
        {
          name: "Yellow Submarine (Larry OG Kush)",
          url:
            "https://www.cannvas.me/strain-matcher/yellowsubmarinelarryogkush",
          type: "Hybrid",
          helps_with: "Anxiety, Depression, Insomnia",
          tastes_like: "Lemony, Citrusy, Earthy",
          thc_content: "16.5%",
          cbd_content: "0%"
        },
        {
          name: "Yorkshire (Headband)",
          url: "https://www.cannvas.me/strain-matcher/yorkshireheadband",
          type: "Hybrid",
          helps_with: "Anxiety, Migraines, Insomnia",
          tastes_like: "Earthy, Citrusy, Pungent",
          thc_content: "17.5%",
          cbd_content: "0.1%"
        },
        {
          name: "Yumboldt",
          url: "https://www.cannvas.me/strain-matcher/yumboldt",
          type: "Indica",
          helps_with: "Stress, Appetite Loss, Insomnia",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Yummy",
          url: "https://www.cannvas.me/strain-matcher/yummy",
          type: "Hybrid",
          helps_with: "Chronic Pain, Nauseous, Menstrual Cramps",
          tastes_like: "Minty, Sweet, Grape",
          thc_content: "--%",
          cbd_content: "--%"
        },
        {
          name: "Zen's Garden (Black Widow CBD)",
          url: "https://www.cannvas.me/strain-matcher/zensgardenblackwidowcbd",
          type: "Indica",
          helps_with: "Inflammation, Anxiety, Muscle Spasms",
          tastes_like: "Earthy, Woody, Sweet",
          thc_content: "6.1%",
          cbd_content: "9.9%"
        }
      ]);
    });
};
