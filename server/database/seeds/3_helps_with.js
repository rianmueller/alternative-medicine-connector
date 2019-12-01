exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("helps_with")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("helps_with").insert([
        { product_name: "#13 Dawgs", condition_name: "Anxiety" },
        { product_name: "#13 Dawgs", condition_name: "Depression" },
        { product_name: "#3 Edison (Hash Plant)", condition_name: "Insomnia" },
        { product_name: "#3 Edison (Hash Plant)", condition_name: "Stress" },
        {
          product_name: "#3 Edison (Hash Plant)",
          condition_name: "Chronic Pain"
        },
        { product_name: "#5 Edison", condition_name: "Anxiety" },
        { product_name: "#5 Edison", condition_name: "Back Pain" },
        { product_name: "#5 Edison", condition_name: "Depression" },
        { product_name: "#7 Edison (Acadia)", condition_name: "Depression" },
        { product_name: "#7 Edison (Acadia)", condition_name: "Migraines" },
        { product_name: "#7 Edison (Acadia)", condition_name: "Chronic Pain" },
        { product_name: "#8 Ball Kush", condition_name: "Anxiety" },
        { product_name: "Aarden", condition_name: "Migraines" },
        { product_name: "Aarden", condition_name: "Chronic Pain" },
        { product_name: "Aarden", condition_name: "Insomnia" },
        { product_name: "Acadia", condition_name: "Depression" },
        { product_name: "Acadia", condition_name: "Concentration" },
        { product_name: "Acadia", condition_name: "Fatigue" },
        { product_name: "Acadia Mini", condition_name: "Concentration" },
        { product_name: "Acadia Mini", condition_name: "Depression" },
        { product_name: "Acadia Mini", condition_name: "Chronic Pain" },
        { product_name: "Acapulco Gold", condition_name: "Anxiety" },
        { product_name: "Acapulco Gold", condition_name: "Back Pain" },
        { product_name: "Acapulco Gold", condition_name: "Insomnia" },
        { product_name: "Afghan Kush", condition_name: "Chronic Pain" },
        { product_name: "Afghan Kush", condition_name: "Insomnia" },
        { product_name: "Afghan Kush", condition_name: "Anxiety" },
        { product_name: "Afghani", condition_name: "Migraines" },
        { product_name: "Afghani", condition_name: "Insomnia" },
        { product_name: "Afghani", condition_name: "Depression" },
        { product_name: "Afghani CBD", condition_name: "Insomnia" },
        { product_name: "Afghani CBD", condition_name: "Stress" },
        { product_name: "Afghani CBD", condition_name: "Muscle Spasms" },
        { product_name: "Afghani Kush", condition_name: "Anxiety" },
        { product_name: "Afghani Kush", condition_name: "Chronic Pain" },
        { product_name: "Afghani Kush", condition_name: "Depression" },
        { product_name: "Afghanica", condition_name: "Depression" },
        { product_name: "Afghanica", condition_name: "Stress" },
        { product_name: "Afghanica", condition_name: "Chronic Pain" },
        { product_name: "After Dinner", condition_name: "Anxiety" },
        { product_name: "After Dinner", condition_name: "Depression" },
        { product_name: "After Dinner", condition_name: "Insomnia" },
        { product_name: "AK-47", condition_name: "Depression" },
        { product_name: "AK-47", condition_name: "Stress" },
        { product_name: "AK-47", condition_name: "Insomnia" },
        { product_name: "AK-48", condition_name: "Stress" },
        { product_name: "AK-48", condition_name: "Depression" },
        { product_name: "AK-48", condition_name: "Migraines" },
        { product_name: "Alaska", condition_name: "Appetite Loss" },
        { product_name: "Alaska", condition_name: "Depression" },
        { product_name: "Alaska", condition_name: "Fatigue" },
        { product_name: "Alaskan Ice", condition_name: "Depression" },
        { product_name: "Alaskan Ice", condition_name: "Stress" },
        { product_name: "Alaskan Ice", condition_name: "Chronic Pain" },
        { product_name: "Alien Dawg", condition_name: "Anxiety" },
        { product_name: "Alien Dawg", condition_name: "Depression" },
        { product_name: "Alien Dawg", condition_name: "Chronic Pain" },
        { product_name: "Ambition (Blue Dream)", condition_name: "Insomnia" },
        { product_name: "Ambition (Blue Dream)", condition_name: "Stress" },
        { product_name: "Ambition (Blue Dream)", condition_name: "Anxiety" },
        { product_name: "Ambrosia", condition_name: "Depression" },
        { product_name: "Ambrosia", condition_name: "Migraines" },
        { product_name: "Ambrosia", condition_name: "Stress" },
        { product_name: "Americano", condition_name: "Migraines" },
        { product_name: "Americano", condition_name: "Nauseous" },
        { product_name: "Americano", condition_name: "Chronic Pain" },
        { product_name: "Amnesia", condition_name: "Depression" },
        { product_name: "Amnesia", condition_name: "Chronic Pain" },
        { product_name: "Amnesia", condition_name: "Stress" },
        { product_name: "Amnesia Haze", condition_name: "Stress" },
        { product_name: "Amnesia Haze", condition_name: "Depression" },
        { product_name: "Amnesia Haze", condition_name: "Chronic Pain" },
        {
          product_name: "Andromeda #1 (EM-Dog No.1)",
          condition_name: "Muscle Spasms"
        },
        {
          product_name: "Andromeda #1 (EM-Dog No.1)",
          condition_name: "Depression"
        },
        {
          product_name: "Andromeda #1 (EM-Dog No.1)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Andromeda #2 (EM-Dog No.2)",
          condition_name: "Stress"
        },
        {
          product_name: "Andromeda #2 (EM-Dog No.2)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Andromeda #2 (EM-Dog No.2)",
          condition_name: "Anxiety"
        },
        { product_name: "Anesthesia", condition_name: "Chronic Pain" },
        { product_name: "Anesthesia", condition_name: "Stress" },
        { product_name: "Anesthesia", condition_name: "Insomnia" },
        { product_name: "Animal Cookies", condition_name: "Chronic Pain" },
        { product_name: "Animal Cookies", condition_name: "Stress" },
        { product_name: "Animal Cookies", condition_name: "Anxiety" },
        { product_name: "Apple Jack", condition_name: "Stress" },
        { product_name: "Apple Jack", condition_name: "Chronic Pain" },
        { product_name: "Apple Jack", condition_name: "Depression" },
        { product_name: "Aqua Flora (Shark Shock)", condition_name: "Anxiety" },
        {
          product_name: "Aqua Flora (Shark Shock)",
          condition_name: "Muscle Spasms"
        },
        {
          product_name: "Aqua Flora (Shark Shock)",
          condition_name: "Depression"
        },
        { product_name: "Arctic Sun", condition_name: "Stress" },
        { product_name: "Argyle", condition_name: "Anxiety" },
        { product_name: "Argyle", condition_name: "Depression" },
        { product_name: "Argyle", condition_name: "Migraines" },
        { product_name: "Argyle + (Plus)", condition_name: "Appetite Loss" },
        { product_name: "Argyle + (Plus)", condition_name: "Anxiety" },
        { product_name: "Argyle + (Plus)", condition_name: "Inflammation" },
        { product_name: "Artemis Maximus", condition_name: "Stress" },
        { product_name: "Artemis Maximus", condition_name: "Back Pain" },
        { product_name: "Artemis Maximus", condition_name: "Chronic Pain" },
        { product_name: "Asgard (AK-47)", condition_name: "Insomnia" },
        { product_name: "Asgard (AK-47)", condition_name: "Anxiety" },
        { product_name: "Asgard (AK-47)", condition_name: "Chronic Pain" },
        {
          product_name: "Atlin #1 (Purple LA No.1)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Atlin #1 (Purple LA No.1)",
          condition_name: "Depression"
        },
        {
          product_name: "Atlin #1 (Purple LA No.1)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Atlin #2 (Purple LA No.2)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Atlin #2 (Purple LA No.2)",
          condition_name: "Back Pain"
        },
        {
          product_name: "Atlin #2 (Purple LA No.2)",
          condition_name: "Depression"
        },
        {
          product_name: "Atlin #3 (Purple LA No.3)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Atna #1 (Grape LA No.1)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Atna #1 (Grape LA No.1)", condition_name: "Insomnia" },
        { product_name: "Atna #1 (Grape LA No.1)", condition_name: "Anxiety" },
        { product_name: "Atna #2 (Grape LA No.2)", condition_name: "Insomnia" },
        { product_name: "Atna #2 (Grape LA No.2)", condition_name: "Anxiety" },
        {
          product_name: "Atna #2 (Grape LA No.2)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Atomical Haze", condition_name: "Chronic Pain" },
        { product_name: "Atomical Haze", condition_name: "Back Pain" },
        { product_name: "Atomical Haze", condition_name: "Anxiety" },
        { product_name: "A-Train", condition_name: "Stress" },
        { product_name: "A-Train", condition_name: "Appetite Loss" },
        { product_name: "A-Train", condition_name: "Fatigue" },
        { product_name: "Augusta (LA Affie)", condition_name: "Stress" },
        { product_name: "Augusta (LA Affie)", condition_name: "Depression" },
        { product_name: "Augusta (LA Affie)", condition_name: "Migraines" },
        { product_name: "Aurora Borealis", condition_name: "Stress" },
        { product_name: "Aurora Borealis", condition_name: "Depression" },
        { product_name: "Aurora Borealis", condition_name: "Insomnia" },
        { product_name: "Aurora Indica", condition_name: "Stress" },
        { product_name: "Aurora Indica", condition_name: "Chronic Pain" },
        { product_name: "Aurora Indica", condition_name: "Depression" },
        { product_name: "Avi", condition_name: "Anxiety" },
        { product_name: "Avi", condition_name: "Depression" },
        { product_name: "Avi", condition_name: "Insomnia" },
        { product_name: "Avidekel", condition_name: "Migraines" },
        { product_name: "Avidekel", condition_name: "Anxiety" },
        { product_name: "Avidekel", condition_name: "Stress" },
        { product_name: "Azure Haze", condition_name: "Insomnia" },
        { product_name: "Azure Haze", condition_name: "Depression" },
        { product_name: "Azure Haze", condition_name: "Stress" },
        { product_name: "B-52", condition_name: "Stress" },
        { product_name: "B-52", condition_name: "Depression" },
        { product_name: "B-52", condition_name: "Migraines" },
        { product_name: "Babbas Erkles Cookies", condition_name: "Stress" },
        {
          product_name: "Babbas Erkles Cookies",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Babbas Erkles Cookies",
          condition_name: "Chronic Pain"
        },
        { product_name: "Baker (LSD)", condition_name: "Appetite Loss" },
        { product_name: "Baker (LSD)", condition_name: "Chronic Pain" },
        { product_name: "Baker (LSD)", condition_name: "Insomnia" },
        { product_name: "Bakerstreet", condition_name: "Anxiety" },
        { product_name: "Bakerstreet", condition_name: "Appetite Loss" },
        { product_name: "Bakerstreet", condition_name: "Depression" },
        {
          product_name: "Bakerstreet (Hindu Kush - Milled)",
          condition_name: "Depression"
        },
        {
          product_name: "Bakerstreet (Hindu Kush - Milled)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Bakerstreet (Hindu Kush - Milled)",
          condition_name: "Stress"
        },
        { product_name: "Baleen", condition_name: "Insomnia" },
        { product_name: "Baleen", condition_name: "Back Pain" },
        { product_name: "Baleen", condition_name: "Chronic Pain" },
        { product_name: "Balmoral", condition_name: "Anxiety" },
        { product_name: "Balmoral", condition_name: "Appetite Loss" },
        { product_name: "Balmoral", condition_name: "Stress" },
        {
          product_name: "Banana Kush (DNA Certified)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Banana Kush (DNA Certified)",
          condition_name: "Stress"
        },
        {
          product_name: "Banana Kush (DNA Certified)",
          condition_name: "Appetite Loss"
        },
        { product_name: "Barbara Bud", condition_name: "Insomnia" },
        { product_name: "Barbara Bud", condition_name: "Chronic Pain" },
        { product_name: "Barbara Bud", condition_name: "Appetite Loss" },
        { product_name: "Baroness (Royal Medic)", condition_name: "Stress" },
        {
          product_name: "Baroness (Royal Medic)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Baroness (Royal Medic)",
          condition_name: "Muscle Spasms"
        },
        { product_name: "BC Big Bud", condition_name: "Stress" },
        { product_name: "BC Big Bud", condition_name: "Chronic Pain" },
        { product_name: "BC Big Bud", condition_name: "Muscle Spasms" },
        { product_name: "BC Bud", condition_name: "Anxiety" },
        { product_name: "BC Bud", condition_name: "Depression" },
        { product_name: "BC Bud", condition_name: "Back Pain" },
        { product_name: "BC Sweet Tooth", condition_name: "Stress" },
        { product_name: "BC Sweet Tooth", condition_name: "Insomnia" },
        { product_name: "BC Sweet Tooth", condition_name: "Depression" },
        { product_name: "Bedica", condition_name: "Stress" },
        { product_name: "Bedica", condition_name: "Anxiety" },
        { product_name: "Bedica", condition_name: "Chronic Pain" },
        { product_name: "Bediol", condition_name: "Stress" },
        { product_name: "Bediol", condition_name: "Appetite Loss" },
        { product_name: "Bediol", condition_name: "Anxiety" },
        { product_name: "Bedrobinol", condition_name: "Fatigue" },
        { product_name: "Bedrobinol", condition_name: "Depression" },
        { product_name: "Bedrobinol", condition_name: "Stress" },
        { product_name: "Bedrocan", condition_name: "Mood Swings" },
        { product_name: "Bedrocan", condition_name: "Stress" },
        { product_name: "Bedrocan", condition_name: "Depression" },
        { product_name: "Bedrocan (Granulated)", condition_name: "Depression" },
        { product_name: "Bedrocan (Granulated)", condition_name: "Back Pain" },
        { product_name: "Bedrocan (Granulated)", condition_name: "Stress" },
        { product_name: "Bedrolite", condition_name: "Depression" },
        { product_name: "Bedrolite", condition_name: "Stress" },
        { product_name: "Bedrolite", condition_name: "Inflammation" },
        { product_name: "Bedropuur", condition_name: "Insomnia" },
        { product_name: "Bedropuur", condition_name: "Anxiety" },
        { product_name: "Bedropuur", condition_name: "Depression" },
        { product_name: "Bedtime", condition_name: "Muscle Pain" },
        { product_name: "Bedtime", condition_name: "Back Pain" },
        { product_name: "Bedtime", condition_name: "Anxiety" },
        { product_name: "Belladonna", condition_name: "Stress" },
        { product_name: "Belladonna", condition_name: "Depression" },
        { product_name: "Belladonna", condition_name: "Chronic Pain" },
        { product_name: "Berry White", condition_name: "Mood Swings" },
        { product_name: "Berry White", condition_name: "Back Pain" },
        { product_name: "Berry White", condition_name: "Chronic Pain" },
        { product_name: "Biddy Early", condition_name: "Chronic Pain" },
        { product_name: "Biddy Early", condition_name: "Depression" },
        { product_name: "Biddy Early", condition_name: "Fatigue" },
        { product_name: "Bienville (Jean Guy)", condition_name: "Stress" },
        { product_name: "Bienville (Jean Guy)", condition_name: "Depression" },
        { product_name: "Bienville (Jean Guy)", condition_name: "Back Pain" },
        { product_name: "Big Band", condition_name: "Stress" },
        { product_name: "Big Band", condition_name: "Insomnia" },
        { product_name: "Big Band", condition_name: "Depression" },
        { product_name: "Big Bang", condition_name: "Chronic Pain" },
        { product_name: "Big Bang", condition_name: "Stress" },
        { product_name: "Big Bang", condition_name: "Insomnia" },
        { product_name: "Big Bud", condition_name: "Insomnia" },
        { product_name: "Big Bud", condition_name: "Chronic Pain" },
        { product_name: "Big Bud", condition_name: "Appetite Loss" },
        { product_name: "Birds Eye (Jack Herer)", condition_name: "Anxiety" },
        { product_name: "Birds Eye (Jack Herer)", condition_name: "Nauseous" },
        { product_name: "Birds Eye (Jack Herer)", condition_name: "Stress" },
        { product_name: "Black Domina", condition_name: "Stress" },
        { product_name: "Black Domina", condition_name: "Depression" },
        { product_name: "Black Domina", condition_name: "Chronic Pain" },
        {
          product_name: "Black Tusk (Blackwater)",
          condition_name: "Depression"
        },
        { product_name: "Black Tusk (Blackwater)", condition_name: "Anxiety" },
        { product_name: "Black Tusk (Blackwater)", condition_name: "Stress" },
        { product_name: "Black Widow", condition_name: "Chronic Pain" },
        { product_name: "Black Widow", condition_name: "Depression" },
        { product_name: "Black Widow", condition_name: "Nauseous" },
        {
          product_name: "Blue Balmoral (Blue Cheese)",
          condition_name: "Stress"
        },
        {
          product_name: "Blue Balmoral (Blue Cheese)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Blue Balmoral (Blue Cheese)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Blue Buddha", condition_name: "Depression" },
        { product_name: "Blue Buddha", condition_name: "Fatigue" },
        { product_name: "Blue Buddha", condition_name: "Migraines" },
        { product_name: "Blue Cheese", condition_name: "Stress" },
        { product_name: "Blue Cheese", condition_name: "Chronic Pain" },
        { product_name: "Blue Cheese", condition_name: "Insomnia" },
        { product_name: "Blue Dream", condition_name: "Stress" },
        { product_name: "Blue Dream", condition_name: "Depression" },
        { product_name: "Blue Dream", condition_name: "Chronic Pain" },
        { product_name: "Blue God", condition_name: "Chronic Pain" },
        { product_name: "Blue God", condition_name: "Stress" },
        { product_name: "Blue God", condition_name: "Depression" },
        { product_name: "Blue Light", condition_name: "Insomnia" },
        { product_name: "Blue Light", condition_name: "Depression" },
        { product_name: "Blue Light", condition_name: "Chronic Pain" },
        { product_name: "Blue Moon", condition_name: "Anxiety" },
        { product_name: "Blue Moon", condition_name: "Depression" },
        { product_name: "Blue Moon", condition_name: "Migraines" },
        { product_name: "Blue Moonshine", condition_name: "Stress" },
        { product_name: "Blue Moonshine", condition_name: "Depression" },
        { product_name: "Blue Moonshine", condition_name: "Insomnia" },
        { product_name: "Blue N.3", condition_name: "Anxiety" },
        { product_name: "Blue N.3", condition_name: "Stress" },
        { product_name: "Blue N.3", condition_name: "Back Pain" },
        { product_name: "Blue Velvet", condition_name: "Appetite Loss" },
        { product_name: "Blue Velvet", condition_name: "Depression" },
        { product_name: "Blue Velvet", condition_name: "Muscle Spasms" },
        { product_name: "Blue Widow", condition_name: "Insomnia" },
        { product_name: "Blue Widow", condition_name: "Anxiety" },
        { product_name: "Blue Widow", condition_name: "Appetite Loss" },
        { product_name: "Blueberry", condition_name: "Stress" },
        { product_name: "Blueberry", condition_name: "Chronic Pain" },
        { product_name: "Blueberry", condition_name: "Depression" },
        { product_name: "Blueberry Cheesecake", condition_name: "Insomnia" },
        { product_name: "Blueberry Cheesecake", condition_name: "Anxiety" },
        { product_name: "Blueberry Cheesecake", condition_name: "Depression" },
        { product_name: "Blueberry Haze", condition_name: "Chronic Pain" },
        { product_name: "Blueberry Haze", condition_name: "Depression" },
        { product_name: "Blueberry Haze", condition_name: "Stress" },
        { product_name: "Blueberry Kush", condition_name: "Stress" },
        { product_name: "Blueberry Kush", condition_name: "Insomnia" },
        { product_name: "Blueberry Kush", condition_name: "Anxiety" },
        { product_name: "Blueberry Lambsbread", condition_name: "Back Pain" },
        { product_name: "Blueberry Lambsbread", condition_name: "Anxiety" },
        { product_name: "Blueberry Lambsbread", condition_name: "Stress" },
        { product_name: "Blueberry Seagal", condition_name: "Chronic Pain" },
        { product_name: "Blueberry Seagal", condition_name: "Insomnia" },
        { product_name: "Blueberry Seagal", condition_name: "Back Pain" },
        { product_name: "Blueberry Sky", condition_name: "Depression" },
        { product_name: "Blueberry Sky", condition_name: "Anxiety" },
        { product_name: "Blueberry Sky", condition_name: "Migraines" },
        {
          product_name: "Boaty McBoatface (CBD MediHaze)",
          condition_name: "Stress"
        },
        {
          product_name: "Boaty McBoatface (CBD MediHaze)",
          condition_name: "Migraines"
        },
        {
          product_name: "Boaty McBoatface (CBD MediHaze)",
          condition_name: "Depression"
        },
        { product_name: "Bonanza Borealis Blend", condition_name: "Stress" },
        { product_name: "Bonanza Borealis Blend", condition_name: "Migraines" },
        {
          product_name: "Bonanza Borealis Blend",
          condition_name: "Depression"
        },
        { product_name: "Bonavista (Headband)", condition_name: "Migraines" },
        { product_name: "Bonavista (Headband)", condition_name: "Depression" },
        { product_name: "Bonavista (Headband)", condition_name: "Anxiety" },
        { product_name: "Bonavista Mini", condition_name: "Appetite Loss" },
        { product_name: "Bonavista Mini", condition_name: "Mood Swings" },
        { product_name: "Bonavista Mini", condition_name: "Chronic Pain" },
        { product_name: "Bonfire", condition_name: "Depression" },
        { product_name: "Bonfire", condition_name: "Stress" },
        { product_name: "Bonfire", condition_name: "Migraines" },
        { product_name: "Borealis Blend (Indica)", condition_name: "Stress" },
        { product_name: "Borealis Blend (Indica)", condition_name: "Insomnia" },
        { product_name: "Borealis Blend (Indica)", condition_name: "Anxiety" },
        { product_name: "Borealis Blend (Sativa)", condition_name: "Anxiety" },
        {
          product_name: "Borealis Blend (Sativa)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Borealis Blend (Sativa)",
          condition_name: "Depression"
        },
        {
          product_name: "Brackley Beach Waves (WAPPA)",
          condition_name: "Stress"
        },
        {
          product_name: "Brackley Beach Waves (WAPPA)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Brackley Beach Waves (WAPPA)",
          condition_name: "Anxiety"
        },
        { product_name: "Brains Damage", condition_name: "Stress" },
        { product_name: "Brains Damage", condition_name: "Insomnia" },
        { product_name: "Brains Damage", condition_name: "Appetite Loss" },
        { product_name: "Brainstorm Haze", condition_name: "Chronic Pain" },
        { product_name: "Brainstorm Haze", condition_name: "Muscle Spasms" },
        { product_name: "Brainstorm Haze", condition_name: "Stress" },
        { product_name: "Bronze Whaler", condition_name: "Stress" },
        { product_name: "Bubba Kush", condition_name: "Stress" },
        { product_name: "Bubba Kush", condition_name: "Insomnia" },
        { product_name: "Bubba Kush", condition_name: "Chronic Pain" },
        { product_name: "Bubba Kush #2", condition_name: "Insomnia" },
        { product_name: "Bubba Kush #2", condition_name: "Depression" },
        { product_name: "Bubba Kush #2", condition_name: "Appetite Loss" },
        { product_name: "Bubble Cheese", condition_name: "Chronic Pain" },
        { product_name: "Bubble Cheese", condition_name: "Depression" },
        { product_name: "Bubble Cheese", condition_name: "Inflammation" },
        { product_name: "Bubble Gum", condition_name: "Stress" },
        { product_name: "Bubble Gum", condition_name: "Depression" },
        { product_name: "Bubble Gum", condition_name: "Chronic Pain" },
        { product_name: "Bubbleberry", condition_name: "Stress" },
        { product_name: "Bubbleberry", condition_name: "Depression" },
        { product_name: "Bubbleberry", condition_name: "Chronic Pain" },
        { product_name: "Buddha Haze", condition_name: "Stress" },
        { product_name: "Buddha Haze", condition_name: "Appetite Loss" },
        { product_name: "Buddha Haze", condition_name: "Depression" },
        { product_name: "Buddha's Sister", condition_name: "Chronic Pain" },
        { product_name: "Buddha's Sister", condition_name: "Stress" },
        { product_name: "Buddha's Sister", condition_name: "Insomnia" },
        { product_name: "Burmese Kush", condition_name: "Anxiety" },
        { product_name: "Burmese Kush", condition_name: "Depression" },
        { product_name: "Burmese Kush", condition_name: "Insomnia" },
        { product_name: "Campania (CBD Kush)", condition_name: "Anxiety" },
        { product_name: "Campania (CBD Kush)", condition_name: "Insomnia" },
        { product_name: "Campania (CBD Kush)", condition_name: "Inflammation" },
        { product_name: "Canadian Gold", condition_name: "Insomnia" },
        { product_name: "Canadian Gold", condition_name: "Anxiety" },
        { product_name: "Canadian Gold", condition_name: "Depression" },
        { product_name: "Canna Berry", condition_name: "Chronic Pain" },
        { product_name: "Canna Berry", condition_name: "Muscle Pain" },
        { product_name: "Canna Berry", condition_name: "Appetite Loss" },
        { product_name: "Canna Bliss", condition_name: "Migraines" },
        { product_name: "Canna Bliss", condition_name: "Chronic Pain" },
        { product_name: "Canna Bliss", condition_name: "Depression" },
        { product_name: "Canna Kief", condition_name: "Stress" },
        { product_name: "Canna Kief", condition_name: "Insomnia" },
        { product_name: "Canna Kief", condition_name: "Anxiety" },
        { product_name: "Canna Kush", condition_name: "Stress" },
        { product_name: "Canna Kush", condition_name: "Appetite Loss" },
        { product_name: "Canna Kush", condition_name: "Menstrual Cramps" },
        { product_name: "Cannalope Haze", condition_name: "Stress" },
        { product_name: "Cannalope Haze", condition_name: "Depression" },
        { product_name: "Cannalope Haze", condition_name: "Migraines" },
        { product_name: "CannaSutra", condition_name: "Chronic Pain" },
        { product_name: "CannaSutra", condition_name: "Migraines" },
        { product_name: "CannaSutra", condition_name: "Insomnia" },
        { product_name: "Cannatonic", condition_name: "Anxiety" },
        { product_name: "Cannatonic", condition_name: "Muscle Spasms" },
        { product_name: "Cannatonic", condition_name: "Inflammation" },
        { product_name: "Cannatonic Blackberry", condition_name: "Anxiety" },
        { product_name: "Cannatonic Blackberry", condition_name: "Back Pain" },
        { product_name: "Cannatonic Blackberry", condition_name: "Migraines" },
        { product_name: "CanniMed 15-5", condition_name: "Anxiety" },
        { product_name: "CanniMed 15-5", condition_name: "Depression" },
        { product_name: "CanniMed 15-5", condition_name: "Stress" },
        { product_name: "CanniMed 17-1", condition_name: "Anxiety" },
        { product_name: "CanniMed 17-1", condition_name: "Depression" },
        { product_name: "CanniMed 17-1", condition_name: "Stress" },
        { product_name: "CanniMed 22-1", condition_name: "Anxiety" },
        { product_name: "CanniMed 22-1", condition_name: "Chronic Pain" },
        { product_name: "CanniMed 22-1", condition_name: "Stress" },
        { product_name: "CanniMed 4-10", condition_name: "Back Pain" },
        { product_name: "CanniMed 4-10", condition_name: "Depression" },
        { product_name: "CanniMed 4-10", condition_name: "Anxiety" },
        { product_name: "CanniMed 9-9", condition_name: "Insomnia" },
        { product_name: "CanniMed 9-9", condition_name: "Migraines" },
        { product_name: "CanniMed 9-9", condition_name: "Anxiety" },
        { product_name: "CannTrust CBD #1", condition_name: "Inflammation" },
        { product_name: "CannTrust CBD #1", condition_name: "Stress" },
        { product_name: "CannTrust CBD #1", condition_name: "Chronic Pain" },
        { product_name: "Caramella", condition_name: "Eye Pressure" },
        { product_name: "Caramella", condition_name: "Insomnia" },
        { product_name: "Caramella", condition_name: "Chronic Pain" },
        { product_name: "Carnival", condition_name: "Depression" },
        { product_name: "Carnival", condition_name: "Eye Pressure" },
        { product_name: "Carnival", condition_name: "Fatigue" },
        { product_name: "Casey Jones", condition_name: "Stress" },
        { product_name: "Casey Jones", condition_name: "Depression" },
        { product_name: "Casey Jones", condition_name: "Chronic Pain" },
        { product_name: "Cataract Kush", condition_name: "Stress" },
        { product_name: "Cataract Kush", condition_name: "Chronic Pain" },
        { product_name: "Cataract Kush", condition_name: "Muscle Spasms" },
        {
          product_name: "Cavendish Dunes (CBD Shark Shock)",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Cavendish Dunes (CBD Shark Shock)",
          condition_name: "Stress"
        },
        {
          product_name: "Cavendish Dunes (CBD Shark Shock)",
          condition_name: "Migraines"
        },
        { product_name: "CBD Critical Mass", condition_name: "Chronic Pain" },
        { product_name: "CBD Critical Mass", condition_name: "Muscle Pain" },
        { product_name: "CBD Critical Mass", condition_name: "Back Pain" },
        { product_name: "CBD God Bud", condition_name: "Anxiety" },
        { product_name: "CBD God Bud", condition_name: "Depression" },
        { product_name: "CBD God Bud", condition_name: "Back Pain" },
        { product_name: "CBD Kush", condition_name: "Anxiety" },
        { product_name: "CBD Kush", condition_name: "Stress" },
        { product_name: "CBD Kush", condition_name: "Muscle Spasms" },
        { product_name: "CBD Mango Haze", condition_name: "Migraines" },
        { product_name: "CBD Mango Haze", condition_name: "Depression" },
        { product_name: "CBD Mango Haze", condition_name: "Anxiety" },
        { product_name: "CBD Shark", condition_name: "Anxiety" },
        { product_name: "CBD Shark", condition_name: "Migraines" },
        { product_name: "CBD Shark", condition_name: "Menstrual Cramps" },
        { product_name: "CBD Skunk Haze", condition_name: "Anxiety" },
        { product_name: "CBD Skunk Haze", condition_name: "Migraines" },
        { product_name: "CBD Skunk Haze", condition_name: "Stress" },
        { product_name: "CBD: Med", condition_name: "Chronic Pain" },
        { product_name: "CBD: Med", condition_name: "Inflammation" },
        { product_name: "CBD: Med", condition_name: "Back Pain" },
        { product_name: "CBG Shiatsu Kush", condition_name: "Migraines" },
        { product_name: "Cerebri", condition_name: "Appetite Loss" },
        { product_name: "Cerebri", condition_name: "Insomnia" },
        { product_name: "Cerebri", condition_name: "Stress" },
        { product_name: "Charlee Angel", condition_name: "Insomnia" },
        { product_name: "Charlee Angel", condition_name: "Chronic Pain" },
        { product_name: "Charlee Angel", condition_name: "Back Pain" },
        {
          product_name: "Charlottetown Sunrise (AK-47)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Charlottetown Sunrise (AK-47)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Charlottetown Sunrise (AK-47)",
          condition_name: "Depression"
        },
        { product_name: "Cheese", condition_name: "Anxiety" },
        { product_name: "Cheese", condition_name: "Insomnia" },
        { product_name: "Cheese", condition_name: "Stress" },
        { product_name: "Cheese Quake", condition_name: "Appetite Loss" },
        { product_name: "Cheese Quake", condition_name: "Insomnia" },
        { product_name: "Cheese Quake", condition_name: "Depression" },
        { product_name: "Chemdog", condition_name: "Stress" },
        { product_name: "Chemdog", condition_name: "Back Pain" },
        { product_name: "Chemdog", condition_name: "Chronic Pain" },
        { product_name: "Chemo", condition_name: "Insomnia" },
        { product_name: "Chemo", condition_name: "Anxiety" },
        { product_name: "Chemo", condition_name: "Chronic Pain" },
        { product_name: "Chernobyl", condition_name: "Insomnia" },
        { product_name: "Chernobyl", condition_name: "Anxiety" },
        { product_name: "Chernobyl", condition_name: "Chronic Pain" },
        {
          product_name: "Cherry Hill (High Voltage CBD)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Cherry Hill (High Voltage CBD)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Cherry Hill (High Voltage CBD)",
          condition_name: "Back Pain"
        },
        { product_name: "Cherry OG", condition_name: "Depression" },
        { product_name: "Cherry OG", condition_name: "Stress" },
        { product_name: "Cherry OG", condition_name: "Chronic Pain" },
        { product_name: "Cherry Pie", condition_name: "Stress" },
        { product_name: "Cherry Pie", condition_name: "Depression" },
        { product_name: "Cherry Pie", condition_name: "Chronic Pain" },
        { product_name: "Chester (Hurkle)", condition_name: "Depression" },
        { product_name: "Chester (Hurkle)", condition_name: "Muscle Spasms" },
        { product_name: "Chester (Hurkle)", condition_name: "Anxiety" },
        { product_name: "Cheviot", condition_name: "Muscle Spasms" },
        { product_name: "Cheviot", condition_name: "Depression" },
        { product_name: "Cheviot", condition_name: "Appetite Loss" },
        { product_name: "Chiesel", condition_name: "Stress" },
        { product_name: "Chiesel", condition_name: "Chronic Pain" },
        { product_name: "Chiesel", condition_name: "Migraines" },
        {
          product_name: "Chocolate Fondue No. 1 (DNA Certified)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Chocolate Fondue No. 1 (DNA Certified)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Chocolate Fondue No. 1 (DNA Certified)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Chocolate Fondue No. 3 (DNA Certified)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Chocolate Fondue No. 3 (DNA Certified)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Chocolate Fondue No. 3 (DNA Certified)",
          condition_name: "Back Pain"
        },
        { product_name: "Chocolope", condition_name: "Stress" },
        { product_name: "Chocolope", condition_name: "Depression" },
        { product_name: "Chocolope", condition_name: "Fatigue" },
        { product_name: "Chrome", condition_name: "Migraines" },
        { product_name: "Chrome", condition_name: "Chronic Pain" },
        { product_name: "Chrome", condition_name: "Stress" },
        { product_name: "Chrome Plus", condition_name: "Anxiety" },
        { product_name: "Chrome Plus", condition_name: "Migraines" },
        { product_name: "Chrome Plus", condition_name: "Stress" },
        { product_name: "Chronic", condition_name: "Back Pain" },
        { product_name: "Chronic", condition_name: "Anxiety" },
        { product_name: "Chronic", condition_name: "Stress" },
        { product_name: "Chronic Thunder", condition_name: "Anxiety" },
        { product_name: "Chronic Thunder", condition_name: "Back Pain" },
        { product_name: "Chronic Thunder", condition_name: "Stress" },
        { product_name: "Churchill", condition_name: "Insomnia" },
        { product_name: "Churchill", condition_name: "Chronic Pain" },
        { product_name: "Churchill", condition_name: "Stress" },
        { product_name: "Churchill TC200", condition_name: "Migraines" },
        { product_name: "Churchill TC200", condition_name: "Stress" },
        { product_name: "Churchill TC200", condition_name: "Chronic Pain" },
        { product_name: "Cinderella 99", condition_name: "Stress" },
        { product_name: "Cinderella 99", condition_name: "Depression" },
        { product_name: "Cinderella 99", condition_name: "Appetite Loss" },
        { product_name: "Citrus Haze", condition_name: "Chronic Pain" },
        { product_name: "Citrus Haze", condition_name: "Stress" },
        { product_name: "Clearview Kush", condition_name: "Insomnia" },
        { product_name: "Clearview Kush", condition_name: "Migraines" },
        { product_name: "Clearview Kush", condition_name: "Stress" },
        { product_name: "Cloudburst", condition_name: "Insomnia" },
        { product_name: "Cloudburst", condition_name: "Back Pain" },
        { product_name: "Cloudburst", condition_name: "Chronic Pain" },
        { product_name: "Coastal Blend", condition_name: "Depression" },
        { product_name: "Coastal Blend", condition_name: "Chronic Pain" },
        { product_name: "Coastal Blend", condition_name: "Anxiety" },
        { product_name: "Coastline", condition_name: "Mood Swings" },
        { product_name: "Coastline", condition_name: "Back Pain" },
        { product_name: "Coastline", condition_name: "Depression" },
        { product_name: "Cognitiva", condition_name: "Appetite Loss" },
        { product_name: "Cognitiva", condition_name: "Insomnia" },
        { product_name: "Cognitiva", condition_name: "Stress" },
        { product_name: "Cold Creek Kush", condition_name: "Inflammation" },
        { product_name: "Cold Creek Kush", condition_name: "Anxiety" },
        { product_name: "Cold Creek Kush", condition_name: "Back Pain" },
        { product_name: "Coral Reef", condition_name: "Insomnia" },
        { product_name: "Coral Reef", condition_name: "Anxiety" },
        { product_name: "Coral Reef", condition_name: "Stress" },
        {
          product_name: "Cortes (Purple White Lightning)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Cortes (Purple White Lightning)",
          condition_name: "Depression"
        },
        {
          product_name: "Cortes (Purple White Lightning)",
          condition_name: "Stress"
        },
        { product_name: "Covel Sour Diesel", condition_name: "Insomnia" },
        { product_name: "Covel Sour Diesel", condition_name: "Back Pain" },
        { product_name: "Covel Sour Diesel", condition_name: "Anxiety" },
        { product_name: "Critical Jack", condition_name: "Stress" },
        { product_name: "Critical Jack", condition_name: "Insomnia" },
        { product_name: "Critical Jack", condition_name: "Anxiety" },
        { product_name: "Critical Kushmass", condition_name: "Back Pain" },
        { product_name: "Critical Kushmass", condition_name: "Insomnia" },
        { product_name: "Critical Kushmass", condition_name: "Mood Swings" },
        { product_name: "Critical Mass", condition_name: "Anxiety" },
        { product_name: "Critical Mass", condition_name: "Stress" },
        { product_name: "Critical Mass", condition_name: "Back Pain" },
        {
          product_name: "Critical Super Silver Haze",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Critical Super Silver Haze",
          condition_name: "Fatigue"
        },
        {
          product_name: "Critical Super Silver Haze",
          condition_name: "Depression"
        },
        { product_name: "Crystalberry", condition_name: "Insomnia" },
        { product_name: "Crystalberry", condition_name: "Chronic Pain" },
        { product_name: "Crystalberry", condition_name: "Stress" },
        { product_name: "Cupid", condition_name: "Anxiety" },
        { product_name: "Cupid", condition_name: "Chronic Pain" },
        { product_name: "Cupid", condition_name: "Migraines" },
        { product_name: "Cypress (Alphadawg)", condition_name: "Insomnia" },
        { product_name: "Cypress (Alphadawg)", condition_name: "Arthritis" },
        { product_name: "Cypress (Alphadawg)", condition_name: "Anxiety" },
        { product_name: "Dancehall", condition_name: "Stress" },
        { product_name: "Dancehall", condition_name: "Fatigue" },
        { product_name: "Dancehall", condition_name: "Chronic Pain" },
        { product_name: "Dark Star", condition_name: "Stress" },
        { product_name: "Dark Star", condition_name: "Depression" },
        { product_name: "Dark Star", condition_name: "Chronic Pain" },
        { product_name: "Day Dream (Sour Kush)", condition_name: "Anxiety" },
        { product_name: "Day Dream (Sour Kush)", condition_name: "Insomnia" },
        { product_name: "Day Dream (Sour Kush)", condition_name: "Migraines" },
        { product_name: "Daybreak", condition_name: "Anxiety" },
        { product_name: "Daybreak", condition_name: "Depression" },
        {
          product_name: "DC: Med (Durga Mata)",
          condition_name: "Inflammation"
        },
        { product_name: "DC: Med (Durga Mata)", condition_name: "Insomnia" },
        { product_name: "DC: Med (Durga Mata)", condition_name: "Depression" },
        { product_name: "Decarb 1:1", condition_name: "Insomnia" },
        { product_name: "Decarb 1:1", condition_name: "Chronic Pain" },
        { product_name: "Decarb 1:1", condition_name: "Stress" },
        { product_name: "Decarb High CBD", condition_name: "Migraines" },
        { product_name: "Decarb High CBD", condition_name: "Inflammation" },
        { product_name: "Decarb High CBD", condition_name: "Anxiety" },
        { product_name: "Decarb High THC", condition_name: "Inflammation" },
        { product_name: "Decarb High THC", condition_name: "Stress" },
        { product_name: "Decarb High THC", condition_name: "Depression" },
        { product_name: "Deep Purple", condition_name: "Anxiety" },
        { product_name: "Deep Purple", condition_name: "Insomnia" },
        { product_name: "Deep Purple", condition_name: "Back Pain" },
        { product_name: "DelaHaze", condition_name: "Insomnia" },
        { product_name: "DelaHaze", condition_name: "Eye Pressure" },
        { product_name: "DelaHaze", condition_name: "Depression" },
        { product_name: "Delta 9 Blue Venom", condition_name: "Depression" },
        { product_name: "Delta 9 Blue Venom", condition_name: "Insomnia" },
        { product_name: "Delta 9 Blue Venom", condition_name: "Appetite Loss" },
        { product_name: "Delta 9 Cannatonic", condition_name: "Insomnia" },
        {
          product_name: "Delta 9 CBD House Blend",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Delta 9 CBD House Blend",
          condition_name: "Depression"
        },
        {
          product_name: "Delta 9 CBD House Blend",
          condition_name: "Back Pain"
        },
        {
          product_name: "Delta 9 CBD Skunk Haze",
          condition_name: "Muscle Pain"
        },
        { product_name: "Delta 9 CBD Skunk Haze", condition_name: "Back Pain" },
        { product_name: "Delta 9 CBD Skunk Haze", condition_name: "Anxiety" },
        {
          product_name: 'Delta 9 Con "Kush" ion',
          condition_name: "Chronic Pain"
        },
        { product_name: "Delta 9 House Blend", condition_name: "Mood Swings" },
        { product_name: "Delta 9 House Blend", condition_name: "Chronic Pain" },
        { product_name: "Delta 9 House Blend", condition_name: "Depression" },
        { product_name: "Delta 9 Jean Guy", condition_name: "Back Pain" },
        { product_name: "Delta 9 Jean Guy", condition_name: "Chronic Pain" },
        { product_name: "Delta 9 Jean Guy", condition_name: "Insomnia" },
        { product_name: "Delta 9 Master Kush", condition_name: "Stress" },
        { product_name: "Delta 9 Master Kush", condition_name: "Chronic Pain" },
        { product_name: "Delta 9 Master Kush", condition_name: "Mood Swings" },
        {
          product_name: "Derek Pedro's Wine Gums",
          condition_name: "Depression"
        },
        { product_name: "Derek Pedro's Wine Gums", condition_name: "Anxiety" },
        { product_name: "Derek Pedro's Wine Gums", condition_name: "Stress" },
        {
          product_name: "Desert Rose (Durga Mata CBD)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Desert Rose (Durga Mata CBD)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Desert Rose (Durga Mata CBD)",
          condition_name: "Insomnia"
        },
        { product_name: "Devil Fruit", condition_name: "Insomnia" },
        { product_name: "Devil Fruit", condition_name: "Depression" },
        { product_name: "Devil Fruit", condition_name: "Anxiety" },
        { product_name: "Devon", condition_name: "Anxiety" },
        { product_name: "Devon", condition_name: "Depression" },
        { product_name: "Devon", condition_name: "Inflammation" },
        { product_name: "Diamond OG", condition_name: "Depression" },
        { product_name: "Diamond OG", condition_name: "Chronic Pain" },
        { product_name: "Diesel", condition_name: "Depression" },
        { product_name: "Diesel", condition_name: "Chronic Pain" },
        { product_name: "Diesel", condition_name: "Stress" },
        {
          product_name: "DMD CBD (Milled Decarb)",
          condition_name: "Back Pain"
        },
        {
          product_name: "DMD CBD (Milled Decarb)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "DMD CBD (Milled Decarb)",
          condition_name: "Depression"
        },
        { product_name: "Donegal", condition_name: "Anxiety" },
        { product_name: "Donegal", condition_name: "Appetite Loss" },
        { product_name: "Donegal", condition_name: "Insomnia" },
        { product_name: "Dorit", condition_name: "Insomnia" },
        { product_name: "Dorit", condition_name: "Anxiety" },
        { product_name: "Dorit", condition_name: "Stress" },
        { product_name: "Double Dutch", condition_name: "Stress" },
        { product_name: "Double Dutch", condition_name: "Depression" },
        { product_name: "Double Dutch", condition_name: "Inflammation" },
        { product_name: "Dreadlock", condition_name: "Stress" },
        { product_name: "Dreadlock", condition_name: "Depression" },
        { product_name: "Dreadlock", condition_name: "Chronic Pain" },
        { product_name: "Durban Poison", condition_name: "Stress" },
        { product_name: "Durban Poison", condition_name: "Depression" },
        { product_name: "Durban Poison", condition_name: "Fatigue" },
        { product_name: "Durga Mata", condition_name: "Stress" },
        { product_name: "Durga Mata", condition_name: "Depression" },
        { product_name: "Durga Mata", condition_name: "Inflammation" },
        { product_name: "Dutch Dragon", condition_name: "Depression" },
        { product_name: "Dutch Dragon", condition_name: "Stress" },
        { product_name: "Dutch Dragon", condition_name: "Chronic Pain" },
        { product_name: "Dutch Haze", condition_name: "Depression" },
        { product_name: "Dutch Haze", condition_name: "Stress" },
        { product_name: "Easy Breeze", condition_name: "Back Pain" },
        { product_name: "Easy Breeze", condition_name: "Anxiety" },
        { product_name: "Eclipse", condition_name: "Insomnia" },
        { product_name: "Eclipse", condition_name: "Chronic Pain" },
        { product_name: "Eclipse", condition_name: "Back Pain" },
        { product_name: "El Nino", condition_name: "Stress" },
        { product_name: "El Nino", condition_name: "Insomnia" },
        { product_name: "El Nino", condition_name: "Chronic Pain" },
        { product_name: "Elevare", condition_name: "Concentration" },
        { product_name: "Elevare", condition_name: "Fatigue" },
        { product_name: "Elevare", condition_name: "Anxiety" },
        {
          product_name: "Elias (StrawBerry Cough)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Elias (StrawBerry Cough)", condition_name: "Anxiety" },
        {
          product_name: "Elias (StrawBerry Cough)",
          condition_name: "Insomnia"
        },
        { product_name: "Elwyn CBD", condition_name: "Stress" },
        { product_name: "Elwyn CBD", condition_name: "Anxiety" },
        { product_name: "Elysium", condition_name: "Stress" },
        { product_name: "Elysium", condition_name: "Chronic Pain" },
        { product_name: "Elysium", condition_name: "Depression" },
        { product_name: "Emerald No. 2", condition_name: "Insomnia" },
        { product_name: "Emerald No. 2", condition_name: "Stress" },
        { product_name: "Emperor Jack", condition_name: "Anxiety" },
        { product_name: "Emperor Jack", condition_name: "Insomnia" },
        { product_name: "Emperor Jack", condition_name: "Chronic Pain" },
        { product_name: "Endless Sky", condition_name: "Stress" },
        { product_name: "Endless Sky", condition_name: "Depression" },
        { product_name: "Endless Sky", condition_name: "Migraines" },
        { product_name: "Equinox", condition_name: "Migraines" },
        { product_name: "Equinox", condition_name: "Anxiety" },
        { product_name: "Equinox", condition_name: "Depression" },
        { product_name: "Equiposa", condition_name: "Stress" },
        { product_name: "Equiposa", condition_name: "Concentration" },
        { product_name: "Equiposa", condition_name: "Anxiety" },
        { product_name: "Eran Almog", condition_name: "Chronic Pain" },
        { product_name: "Eran Almog", condition_name: "Anxiety" },
        { product_name: "Eran Almog", condition_name: "Appetite Loss" },
        { product_name: "Erez", condition_name: "Stress" },
        { product_name: "Erez", condition_name: "Inflammation" },
        { product_name: "Erez", condition_name: "Muscle Spasms" },
        { product_name: "Extrema", condition_name: "Appetite Loss" },
        { product_name: "Extrema", condition_name: "Nauseous" },
        { product_name: "Extrema", condition_name: "Stress" },
        { product_name: "Flo", condition_name: "Stress" },
        { product_name: "Flo", condition_name: "Chronic Pain" },
        { product_name: "Flo", condition_name: "Depression" },
        { product_name: "Floating Island", condition_name: "Anxiety" },
        { product_name: "Floating Island", condition_name: "Insomnia" },
        { product_name: "Floating Island", condition_name: "Back Pain" },
        { product_name: "Forest Life (Sour OG)", condition_name: "Anxiety" },
        { product_name: "Forest Life (Sour OG)", condition_name: "Insomnia" },
        { product_name: "Forest Life (Sour OG)", condition_name: "Migraines" },
        { product_name: "Frost (Kief - Indica)", condition_name: "Anxiety" },
        { product_name: "Frost (Kief - Indica)", condition_name: "Depression" },
        {
          product_name: "Frost (Kief - Indica)",
          condition_name: "Appetite Loss"
        },
        { product_name: "Fruit Salad Blend", condition_name: "Insomnia" },
        { product_name: "Fruit Salad Blend", condition_name: "Anxiety" },
        { product_name: "Fruit Salad Blend", condition_name: "Back Pain" },
        { product_name: "Gataga (Star Killer)", condition_name: "Insomnia" },
        { product_name: "Gataga (Star Killer)", condition_name: "Back Pain" },
        {
          product_name: "Gataga (Star Killer)",
          condition_name: "Inflammation"
        },
        { product_name: "Ghost Train Haze", condition_name: "Appetite Loss" },
        { product_name: "Ghost Train Haze", condition_name: "Anxiety" },
        { product_name: "Ghost Train Haze", condition_name: "Depression" },
        { product_name: "Girl Scout Cookies", condition_name: "Insomnia" },
        { product_name: "Girl Scout Cookies", condition_name: "Anxiety" },
        { product_name: "Girl Scout Cookies", condition_name: "Stress" },
        { product_name: "God Kush (Lasqueti)", condition_name: "Insomnia" },
        { product_name: "God Kush (Lasqueti)", condition_name: "Migraines" },
        { product_name: "God Kush (Lasqueti)", condition_name: "Depression" },
        { product_name: "God's Green Crack", condition_name: "Anxiety" },
        { product_name: "God's Green Crack", condition_name: "Back Pain" },
        { product_name: "God's Green Crack", condition_name: "Depression" },
        { product_name: "God's Treat", condition_name: "Inflammation" },
        { product_name: "God's Treat", condition_name: "Muscle Spasms" },
        { product_name: "God's Treat", condition_name: "Chronic Pain" },
        {
          product_name: "Golden Lemons (DNA Certified)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Golden Lemons (DNA Certified)",
          condition_name: "Stress"
        },
        {
          product_name: "Golden Lemons (DNA Certified)",
          condition_name: "Depression"
        },
        { product_name: "Good Morning", condition_name: "Anxiety" },
        { product_name: "Good Morning", condition_name: "Chronic Pain" },
        { product_name: "Good Morning", condition_name: "Back Pain" },
        { product_name: "Grand Daddy Purps", condition_name: "Anxiety" },
        { product_name: "Grand Daddy Purps", condition_name: "Stress" },
        { product_name: "Grand Daddy Purps", condition_name: "Chronic Pain" },
        { product_name: "Grape Crush", condition_name: "Stress" },
        { product_name: "Grape Crush", condition_name: "Chronic Pain" },
        { product_name: "Grape Crush", condition_name: "Insomnia" },
        { product_name: "Grapefruit", condition_name: "Stress" },
        { product_name: "Grapefruit", condition_name: "Depression" },
        { product_name: "Grapefruit", condition_name: "Fatigue" },
        { product_name: "Great White Shark", condition_name: "Stress" },
        { product_name: "Great White Shark", condition_name: "Depression" },
        { product_name: "Great White Shark", condition_name: "Chronic Pain" },
        { product_name: "Green Chai", condition_name: "Depression" },
        { product_name: "Green Chai", condition_name: "Concentration" },
        { product_name: "Green Chai", condition_name: "Anxiety" },
        { product_name: "Green Crack", condition_name: "Anxiety" },
        { product_name: "Green Crack", condition_name: "Insomnia" },
        { product_name: "Green Crack", condition_name: "Chronic Pain" },
        { product_name: "Green Cush", condition_name: "Anxiety" },
        { product_name: "Green Cush", condition_name: "Insomnia" },
        { product_name: "Green Cush", condition_name: "Chronic Pain" },
        { product_name: "Green N.3", condition_name: "Chronic Pain" },
        { product_name: "Green N.3", condition_name: "Anxiety" },
        { product_name: "Green N.3", condition_name: "Depression" },
        { product_name: "Green N.4", condition_name: "Fatigue" },
        { product_name: "Green N.4", condition_name: "Concentration" },
        { product_name: "Green N.6", condition_name: "Stress" },
        { product_name: "Green N.6", condition_name: "Concentration" },
        { product_name: "Green N.6", condition_name: "Depression" },
        { product_name: "Grower's Blend", condition_name: "Insomnia" },
        { product_name: "Grower's Blend", condition_name: "Stress" },
        { product_name: "Grower's Blend", condition_name: "Chronic Pain" },
        {
          product_name: "Halcyon (Island Honey)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Halcyon (Island Honey)", condition_name: "Fatigue" },
        {
          product_name: "Halcyon (Island Honey)",
          condition_name: "Concentration"
        },
        { product_name: "Happy Feet", condition_name: "Mood Swings" },
        { product_name: "Happy Feet", condition_name: "Stress" },
        { product_name: "Happy Feet", condition_name: "Depression" },
        { product_name: "Harmony", condition_name: "Migraines" },
        { product_name: "Harmony", condition_name: "Depression" },
        { product_name: "Harmony", condition_name: "Anxiety" },
        { product_name: "Harvest", condition_name: "Concentration" },
        { product_name: "Harvest", condition_name: "Mood Swings" },
        { product_name: "Harvest", condition_name: "Depression" },
        { product_name: "Hash Plant", condition_name: "Stress" },
        { product_name: "Hash Plant", condition_name: "Insomnia" },
        { product_name: "Hash Plant", condition_name: "Chronic Pain" },
        { product_name: "Hashberry", condition_name: "Chronic Pain" },
        { product_name: "Hashberry", condition_name: "Appetite Loss" },
        { product_name: "Hashberry", condition_name: "Stress" },
        { product_name: "Hawaiian Haze", condition_name: "Stress" },
        { product_name: "Hawaiian Haze", condition_name: "Appetite Loss" },
        { product_name: "Hawaiian Haze", condition_name: "Depression" },
        { product_name: "Hawaiian Sativa", condition_name: "Stress" },
        { product_name: "Hawaiian Sativa", condition_name: "Nauseous" },
        { product_name: "Hawaiian Sativa", condition_name: "Depression" },
        { product_name: "Hawaiian Snow", condition_name: "Depression" },
        { product_name: "Hawaiian Snow", condition_name: "Stress" },
        { product_name: "Hawaiian Snow", condition_name: "Fatigue" },
        { product_name: "Haze Mist", condition_name: "Insomnia" },
        { product_name: "Haze Mist", condition_name: "Nauseous" },
        { product_name: "Haze Mist", condition_name: "Stress" },
        { product_name: "Headband", condition_name: "Migraines" },
        { product_name: "Headband", condition_name: "Depression" },
        { product_name: "Headband", condition_name: "Insomnia" },
        { product_name: "Heavy Duty Fruity", condition_name: "Insomnia" },
        { product_name: "Heavy Duty Fruity", condition_name: "Appetite Loss" },
        { product_name: "Heavy Duty Fruity", condition_name: "Stress" },
        { product_name: "Henik", condition_name: "Migraines" },
        { product_name: "Henik", condition_name: "Depression" },
        { product_name: "Henik", condition_name: "Insomnia" },
        {
          product_name: "Herringbone No. 1 (Ken's Kush)",
          condition_name: "Depression"
        },
        {
          product_name: "Herringbone No. 1 (Ken's Kush)",
          condition_name: "Stress"
        },
        {
          product_name: "Herringbone No. 1 (Ken's Kush)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Herringbone No. 2 (Ken's Kush)",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Herringbone No. 2 (Ken's Kush)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Herringbone No. 2 (Ken's Kush)",
          condition_name: "Stress"
        },
        { product_name: "High Tide", condition_name: "Fatigue" },
        { product_name: "High Tide", condition_name: "Appetite Loss" },
        { product_name: "High Tide", condition_name: "Depression" },
        {
          product_name: "Highlands (CBD Critical Mass)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Highlands (CBD Critical Mass)",
          condition_name: "Muscle Spasms"
        },
        {
          product_name: "Highlands (CBD Critical Mass)",
          condition_name: "Insomnia"
        },
        { product_name: "Hilarum", condition_name: "Anxiety" },
        { product_name: "Hilarum", condition_name: "Stress" },
        { product_name: "Hilarum", condition_name: "Appetite Loss" },
        { product_name: "Hindu Kush", condition_name: "Anxiety" },
        { product_name: "Hindu Kush", condition_name: "Depression" },
        { product_name: "Hindu Kush", condition_name: "Appetite Loss" },
        { product_name: "Hindu Skunk", condition_name: "Insomnia" },
        { product_name: "Hindu Skunk", condition_name: "Stress" },
        { product_name: "Hindu Skunk", condition_name: "Chronic Pain" },
        { product_name: "Hollio (Blue Dream)", condition_name: "Fatigue" },
        { product_name: "Hollio (Blue Dream)", condition_name: "Depression" },
        { product_name: "Hollio (Blue Dream)", condition_name: "Stress" },
        { product_name: "Honeydew", condition_name: "Stress" },
        { product_name: "Honeydew", condition_name: "Depression" },
        { product_name: "Honeydew", condition_name: "Chronic Pain" },
        { product_name: "Houndstooth (Candyland)", condition_name: "Fatigue" },
        {
          product_name: "Houndstooth (Candyland)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Houndstooth (Candyland)",
          condition_name: "Depression"
        },
        { product_name: "Hunter (Green Kush)", condition_name: "Chronic Pain" },
        { product_name: "Hunter (Green Kush)", condition_name: "Depression" },
        { product_name: "Hunter (Green Kush)", condition_name: "Fatigue" },
        {
          product_name: "Hunter's Corner (Hash Plant)",
          condition_name: "Depression"
        },
        {
          product_name: "Hunter's Corner (Hash Plant)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Hunter's Corner (Hash Plant)",
          condition_name: "Mood Swings"
        },
        { product_name: "Hunter's Corner Mini", condition_name: "Mood Swings" },
        { product_name: "Hunter's Corner Mini", condition_name: "Insomnia" },
        {
          product_name: "Hunter's Corner Mini",
          condition_name: "Chronic Pain"
        },
        { product_name: "IC: Med", condition_name: "Stress" },
        { product_name: "IC: Med", condition_name: "Chronic Pain" },
        { product_name: "IC: Med", condition_name: "Back Pain" },
        {
          product_name: "iCann Forte 89 (God Bud)",
          condition_name: "Back Pain"
        },
        { product_name: "iCann Forte 89 (God Bud)", condition_name: "Anxiety" },
        {
          product_name: "iCann Forte 89 (God Bud)",
          condition_name: "Depression"
        },
        {
          product_name: "iCann Ultra Forte 36 (Babba's Erkle Cookies)",
          condition_name: "Depression"
        },
        {
          product_name: "iCann Ultra Forte 36 (Babba's Erkle Cookies)",
          condition_name: "Insomnia"
        },
        {
          product_name: "iCann Ultra Forte 36 (Babba's Erkle Cookies)",
          condition_name: "Stress"
        },
        {
          product_name: "iCann Ultra Forte No. 17 (Snowman)",
          condition_name: "Migraines"
        },
        {
          product_name: "iCann Ultra Forte No. 17 (Snowman)",
          condition_name: "Insomnia"
        },
        {
          product_name: "iCann Ultra Forte No. 17 (Snowman)",
          condition_name: "Stress"
        },
        {
          product_name: "iCann Ultra Forte No. 19 Strawberry Ice",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "iCann Ultra Forte No. 19 Strawberry Ice",
          condition_name: "Depression"
        },
        {
          product_name: "iCann Ultra Forte No. 19 Strawberry Ice",
          condition_name: "Insomnia"
        },
        {
          product_name: "iCann Ultra Forte Plus 5 (Amnesia Haze)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "iCann Ultra Forte Plus 5 (Amnesia Haze)",
          condition_name: "Fatigue"
        },
        {
          product_name: "iCann Ultra Forte Plus 5 (Amnesia Haze)",
          condition_name: "Depression"
        },
        { product_name: "Ice", condition_name: "Stress" },
        { product_name: "Ice", condition_name: "Chronic Pain" },
        { product_name: "Ice", condition_name: "Depression" },
        { product_name: "Ice Cream", condition_name: "Stress" },
        { product_name: "Ice Cream", condition_name: "Depression" },
        { product_name: "Ice Cream", condition_name: "Chronic Pain" },
        { product_name: "Indica Milled", condition_name: "Insomnia" },
        { product_name: "Indica Milled", condition_name: "Anxiety" },
        { product_name: "Indica Milled", condition_name: "Depression" },
        { product_name: "Indica Tips", condition_name: "Depression" },
        { product_name: "Indica Tips", condition_name: "Anxiety" },
        { product_name: "Indica Tips", condition_name: "Appetite Loss" },
        { product_name: "Infiniti", condition_name: "Insomnia" },
        { product_name: "Infiniti", condition_name: "Back Pain" },
        { product_name: "Infiniti", condition_name: "Migraines" },
        { product_name: "Iroquois", condition_name: "Stress" },
        { product_name: "Iroquois", condition_name: "Depression" },
        { product_name: "Iroquois", condition_name: "Insomnia" },
        { product_name: "Island Honey", condition_name: "Anxiety" },
        { product_name: "Island Honey", condition_name: "Insomnia" },
        { product_name: "Island Honey", condition_name: "Stress" },
        { product_name: "Island Mist", condition_name: "Back Pain" },
        { product_name: "Island Mist", condition_name: "Depression" },
        { product_name: "Island Mist", condition_name: "Migraines" },
        { product_name: "Jack Herer", condition_name: "Migraines" },
        { product_name: "Jack Herer", condition_name: "Stress" },
        { product_name: "Jack Herer", condition_name: "Depression" },
        { product_name: "JacKingGun CBD", condition_name: "Insomnia" },
        { product_name: "JacKingGun CBD", condition_name: "Chronic Pain" },
        { product_name: "JacKingGun CBD", condition_name: "Depression" },
        { product_name: "Jacky White", condition_name: "Chronic Pain" },
        { product_name: "Jacky White", condition_name: "Stress" },
        { product_name: "Jacky White", condition_name: "Depression" },
        {
          product_name: "Jade Sky (MK Ultra)",
          condition_name: "Appetite Loss"
        },
        { product_name: "Jade Sky (MK Ultra)", condition_name: "Back Pain" },
        { product_name: "Jade Sky (MK Ultra)", condition_name: "Insomnia" },
        { product_name: "Jamaican Pearl", condition_name: "Stress" },
        { product_name: "Jamaican Pearl", condition_name: "Depression" },
        { product_name: "Jamaican Pearl", condition_name: "Chronic Pain" },
        { product_name: "Jane Herer", condition_name: "Depression" },
        { product_name: "Jane Herer", condition_name: "Stress" },
        { product_name: "Jane Herer", condition_name: "Concentration" },
        { product_name: "Jazz", condition_name: "Stress" },
        { product_name: "Jazz", condition_name: "Chronic Pain" },
        { product_name: "Jazz", condition_name: "Depression" },
        { product_name: "Jean Guy", condition_name: "Back Pain" },
        { product_name: "Jean Guy", condition_name: "Fatigue" },
        { product_name: "Jean Guy", condition_name: "Depression" },
        { product_name: "JH:MED", condition_name: "Stress" },
        { product_name: "JH:MED", condition_name: "Migraines" },
        { product_name: "JH:MED", condition_name: "Back Pain" },
        { product_name: "Jocelyn", condition_name: "Stress" },
        { product_name: "Jocelyn", condition_name: "Insomnia" },
        { product_name: "Jocelyn", condition_name: "Appetite Loss" },
        { product_name: "Jock Horror", condition_name: "Depression" },
        { product_name: "Jock Horror", condition_name: "Stress" },
        { product_name: "Jock Horror", condition_name: "Appetite Loss" },
        { product_name: "Joggins Fossil (Kush)", condition_name: "Depression" },
        { product_name: "Joggins Fossil (Kush)", condition_name: "Insomnia" },
        {
          product_name: "Joggins Fossil (Kush)",
          condition_name: "Chronic Pain"
        },
        { product_name: "JT 15", condition_name: "Anxiety" },
        { product_name: "Juniper Berry", condition_name: "Anxiety" },
        { product_name: "Juniper Berry", condition_name: "Stress" },
        { product_name: "Juniper Berry", condition_name: "Appetite Loss" },
        { product_name: "Justin Trudope", condition_name: "Insomnia" },
        { product_name: "Justin Trudope", condition_name: "Chronic Pain" },
        { product_name: "Justin Trudope", condition_name: "Depression" },
        { product_name: "Kahuna", condition_name: "Stress" },
        { product_name: "Kahuna", condition_name: "Chronic Pain" },
        { product_name: "Kahuna", condition_name: "Depression" },
        { product_name: "Kaia Kush", condition_name: "Stress" },
        { product_name: "Kaia Kush", condition_name: "Depression" },
        { product_name: "Kaia Kush", condition_name: "Migraines" },
        { product_name: "Kali Mist", condition_name: "Stress" },
        { product_name: "Kali Mist", condition_name: "Depression" },
        { product_name: "Kali Mist", condition_name: "Fatigue" },
        { product_name: "Kanata", condition_name: "Stress" },
        { product_name: "Kanata", condition_name: "Anxiety" },
        { product_name: "Kanata", condition_name: "Chronic Pain" },
        { product_name: "Kandahar", condition_name: "Insomnia" },
        { product_name: "Kandahar", condition_name: "Stress" },
        { product_name: "Kandahar", condition_name: "Eye Pressure" },
        { product_name: "Kanteris", condition_name: "Anxiety" },
        { product_name: "Kanteris", condition_name: "Insomnia" },
        { product_name: "Kanteris", condition_name: "Fatigue" },
        { product_name: "KC 33", condition_name: "Chronic Pain" },
        { product_name: "KC 33", condition_name: "Nauseous" },
        { product_name: "KC 33", condition_name: "Stress" },
        { product_name: "KC 36", condition_name: "Depression" },
        { product_name: "KC 36", condition_name: "Stress" },
        { product_name: "KC 36", condition_name: "Fatigue" },
        {
          product_name: "Keats (White Walker Kush)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Keats (White Walker Kush)",
          condition_name: "Anxiety"
        },
        { product_name: "Keats (White Walker Kush)", condition_name: "Stress" },
        { product_name: "Kerala Krush", condition_name: "Depression" },
        { product_name: "Kerala Krush", condition_name: "Fatigue" },
        { product_name: "Kerala Krush", condition_name: "Menstrual Cramps" },
        { product_name: "Killing Fields", condition_name: "Depression" },
        { product_name: "Killing Fields", condition_name: "Stress" },
        { product_name: "Killing Fields", condition_name: "Chronic Pain" },
        { product_name: "Kiwiskunk", condition_name: "Depression" },
        { product_name: "Kiwiskunk", condition_name: "Insomnia" },
        { product_name: "Kiwiskunk", condition_name: "Stress" },
        { product_name: "Kootenay Star", condition_name: "Anxiety" },
        { product_name: "Kootenay Star", condition_name: "Depression" },
        { product_name: "Kootenay Star", condition_name: "Fatigue" },
        { product_name: "Kosher Kush", condition_name: "Anxiety" },
        { product_name: "Kosher Kush", condition_name: "Insomnia" },
        { product_name: "Kosher Kush", condition_name: "Depression" },
        { product_name: "Kusawa", condition_name: "Fatigue" },
        { product_name: "Kusawa", condition_name: "Anxiety" },
        { product_name: "Kusawa", condition_name: "Stress" },
        { product_name: "Kush Blend", condition_name: "Depression" },
        { product_name: "Kush Blend", condition_name: "Appetite Loss" },
        { product_name: "Kush Blend", condition_name: "Stress" },
        { product_name: "Kushadelic", condition_name: "Insomnia" },
        { product_name: "Kushadelic", condition_name: "Inflammation" },
        { product_name: "Kushadelic", condition_name: "Appetite Loss" },
        { product_name: "Kushage", condition_name: "Chronic Pain" },
        { product_name: "Kushage", condition_name: "Stress" },
        { product_name: "Kushage", condition_name: "Depression" },
        { product_name: "LA Chocolat", condition_name: "Stress" },
        { product_name: "LA Chocolat", condition_name: "Chronic Pain" },
        { product_name: "LA Chocolat", condition_name: "Insomnia" },
        { product_name: "LA Confidential", condition_name: "Stress" },
        { product_name: "LA Confidential", condition_name: "Insomnia" },
        { product_name: "LA Confidential", condition_name: "Chronic Pain" },
        { product_name: "La Nina", condition_name: "Migraines" },
        { product_name: "La Nina", condition_name: "Chronic Pain" },
        { product_name: "La Nina", condition_name: "Inflammation" },
        { product_name: "Landrace (Sativa)", condition_name: "Back Pain" },
        { product_name: "Landrace (Sativa)", condition_name: "Arthritis" },
        { product_name: "Lavender", condition_name: "Chronic Pain" },
        { product_name: "Lavender", condition_name: "Stress" },
        { product_name: "Lavender", condition_name: "Insomnia" },
        { product_name: "Lemon Drops", condition_name: "Concentration" },
        { product_name: "Lemon Drops", condition_name: "Stress" },
        { product_name: "Lemon Drops", condition_name: "Mood Swings" },
        { product_name: "Lemon Kush", condition_name: "Stress" },
        { product_name: "Lemon Kush", condition_name: "Appetite Loss" },
        { product_name: "Lemon Kush", condition_name: "Anxiety" },
        { product_name: "Lemon Nigerian", condition_name: "Anxiety" },
        { product_name: "Lemon Nigerian", condition_name: "Mood Swings" },
        { product_name: "Lemon Skunk", condition_name: "Depression" },
        { product_name: "Lemon Skunk", condition_name: "Appetite Loss" },
        { product_name: "Lemon Skunk", condition_name: "Stress" },
        {
          product_name: "Lemon Skunk (DNA Certified)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Lemon Skunk (DNA Certified)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Lemon Skunk (DNA Certified)",
          condition_name: "Depression"
        },
        { product_name: "Lemon Sour Diesel", condition_name: "Insomnia" },
        { product_name: "Lemon Sour Diesel", condition_name: "Mood Swings" },
        { product_name: "Lemon Sour Diesel", condition_name: "Depression" },
        { product_name: "Lemon Sour Diesel (LSD)", condition_name: "Insomnia" },
        { product_name: "Lemon Sour Diesel (LSD)", condition_name: "Anxiety" },
        {
          product_name: "Lemon Sour Diesel (LSD)",
          condition_name: "Depression"
        },
        { product_name: "Lighthouse (Mongolian)", condition_name: "Stress" },
        {
          product_name: "Lighthouse (Mongolian)",
          condition_name: "Muscle Spasms"
        },
        {
          product_name: "Lighthouse (Mongolian)",
          condition_name: "Appetite Loss"
        },
        { product_name: "Limerick", condition_name: "Stress" },
        { product_name: "Limerick", condition_name: "Chronic Pain" },
        { product_name: "Limerick", condition_name: "Anxiety" },
        { product_name: "Livingstone", condition_name: "Muscle Spasms" },
        { product_name: "Livingstone", condition_name: "Depression" },
        { product_name: "Livingstone", condition_name: "Chronic Pain" },
        { product_name: "Louise (Blueberry)", condition_name: "Muscle Pain" },
        { product_name: "Louise (Blueberry)", condition_name: "Stress" },
        { product_name: "Louise (Blueberry)", condition_name: "Back Pain" },
        { product_name: "Low Tide", condition_name: "Chronic Pain" },
        { product_name: "Low Tide", condition_name: "Stress" },
        { product_name: "Low Tide", condition_name: "Insomnia" },
        { product_name: "Lowryder", condition_name: "Insomnia" },
        { product_name: "Lowryder", condition_name: "Stress" },
        { product_name: "Lowryder", condition_name: "Chronic Pain" },
        { product_name: "LSD", condition_name: "Chronic Pain" },
        { product_name: "LSD", condition_name: "Appetite Loss" },
        { product_name: "LSD", condition_name: "Anxiety" },
        { product_name: "Luminarium", condition_name: "Concentration" },
        { product_name: "Luminarium", condition_name: "Fatigue" },
        { product_name: "Luminarium", condition_name: "Depression" },
        {
          product_name: "Maker's Mix (Hybrid Blend)",
          condition_name: "Migraines"
        },
        {
          product_name: "Maker's Mix (Hybrid Blend)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Maker's Mix (Hybrid Blend)",
          condition_name: "Stress"
        },
        {
          product_name: "Maker's Mix (Indica Blend)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Maker's Mix (Indica Blend)",
          condition_name: "Back Pain"
        },
        {
          product_name: "Maker's Mix (Indica Blend)",
          condition_name: "Depression"
        },
        {
          product_name: "Maker's Mix (Sativa Blend)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Maker's Mix (Sativa Blend)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Maker's Mix (Sativa Blend)",
          condition_name: "Back Pain"
        },
        { product_name: "Mako Haze", condition_name: "Stress" },
        { product_name: "Mako Haze", condition_name: "Depression" },
        { product_name: "Mako Haze", condition_name: "Appetite Loss" },
        { product_name: "Malik (Kosher Kush)", condition_name: "Anxiety" },
        { product_name: "Malik (Kosher Kush)", condition_name: "Migraines" },
        { product_name: "Malik (Kosher Kush)", condition_name: "Chronic Pain" },
        { product_name: "Mango", condition_name: "Chronic Pain" },
        { product_name: "Mango", condition_name: "Insomnia" },
        { product_name: "Mango", condition_name: "Anxiety" },
        { product_name: "Mango Haze", condition_name: "Stress" },
        { product_name: "Mango Haze", condition_name: "Mood Swings" },
        { product_name: "Mango Haze", condition_name: "Chronic Pain" },
        { product_name: "Mango Haze 2", condition_name: "Insomnia" },
        { product_name: "Mango Haze 2", condition_name: "Stress" },
        { product_name: "Mango Haze 2", condition_name: "Back Pain" },
        { product_name: "Manitoba Poison", condition_name: "Stress" },
        { product_name: "Manitoba Poison", condition_name: "Chronic Pain" },
        { product_name: "Manitoba Poison", condition_name: "Depression" },
        { product_name: "Maple Leaf Indica", condition_name: "Insomnia" },
        { product_name: "Maple Leaf Indica", condition_name: "Chronic Pain" },
        { product_name: "Maple Leaf Indica", condition_name: "Stress" },
        { product_name: "Marcela", condition_name: "Appetite Loss" },
        { product_name: "Marcela", condition_name: "Migraines" },
        { product_name: "Marcela", condition_name: "Depression" },
        { product_name: "Marley's Collie", condition_name: "Appetite Loss" },
        { product_name: "Marley's Collie", condition_name: "Stress" },
        { product_name: "Marley's Collie", condition_name: "Depression" },
        { product_name: "Master Kush", condition_name: "Anxiety" },
        { product_name: "Master Kush", condition_name: "Appetite Loss" },
        { product_name: "Master Kush", condition_name: "Stress" },
        { product_name: "Maui Wowie", condition_name: "Stress" },
        { product_name: "Maui Wowie", condition_name: "Depression" },
        { product_name: "Maui Wowie", condition_name: "Chronic Pain" },
        { product_name: "Medicine Man", condition_name: "Chronic Pain" },
        { product_name: "Medicine Man", condition_name: "Stress" },
        { product_name: "Medicine Man", condition_name: "Muscle Spasms" },
        { product_name: "Midday", condition_name: "Anxiety" },
        { product_name: "Midday", condition_name: "Chronic Pain" },
        { product_name: "Midday", condition_name: "Insomnia" },
        { product_name: "Midnight", condition_name: "Migraines" },
        { product_name: "Midnight", condition_name: "Insomnia" },
        { product_name: "Midnight", condition_name: "Depression" },
        { product_name: "Midnight Kiss (MK Ultra)", condition_name: "Anxiety" },
        {
          product_name: "Midnight Kiss (MK Ultra)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Midnight Kiss (MK Ultra)",
          condition_name: "Migraines"
        },
        { product_name: "MK Tonic", condition_name: "Nauseous" },
        { product_name: "MK Tonic", condition_name: "Stress" },
        { product_name: "MK Tonic", condition_name: "Depression" },
        { product_name: "MK Ultra", condition_name: "Stress" },
        { product_name: "MK Ultra", condition_name: "Insomnia" },
        { product_name: "MK Ultra", condition_name: "Chronic Pain" },
        { product_name: "MK Ultra Haze", condition_name: "Insomnia" },
        { product_name: "MK Ultra Haze", condition_name: "Anxiety" },
        { product_name: "Moby Dick", condition_name: "Stress" },
        { product_name: "Moby Dick", condition_name: "Depression" },
        { product_name: "Moby Dick", condition_name: "Fatigue" },
        { product_name: "Mohawk (Rockstar)", condition_name: "Depression" },
        { product_name: "Mohawk (Rockstar)", condition_name: "Stress" },
        { product_name: "Mohawk (Rockstar)", condition_name: "Back Pain" },
        { product_name: "Monarch (Sour OG)", condition_name: "Stress" },
        { product_name: "Monarch (Sour OG)", condition_name: "Chronic Pain" },
        { product_name: "Monarch (Sour OG)", condition_name: "Back Pain" },
        { product_name: "Moonbeam (Leafs by Snoop)", condition_name: "Stress" },
        {
          product_name: "Moonbeam (Leafs by Snoop)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Moonbeam (Leafs by Snoop)",
          condition_name: "Depression"
        },
        { product_name: "Morning Glory", condition_name: "Stress" },
        { product_name: "Morning Glory", condition_name: "Depression" },
        { product_name: "Morning Glory", condition_name: "Chronic Pain" },
        { product_name: "Morning Star", condition_name: "Stress" },
        { product_name: "Morning Star", condition_name: "Nauseous" },
        { product_name: "Morning Star", condition_name: "Depression" },
        { product_name: "Morris", condition_name: "Stress" },
        { product_name: "Morris", condition_name: "Insomnia" },
        { product_name: "Morris", condition_name: "Appetite Loss" },
        { product_name: "Motavation", condition_name: "Fatigue" },
        { product_name: "Motavation", condition_name: "Migraines" },
        { product_name: "Motavation", condition_name: "Chronic Pain" },
        { product_name: "Mr. Nice", condition_name: "Anxiety" },
        { product_name: "Mr. Nice", condition_name: "Depression" },
        { product_name: "Mr. Nice", condition_name: "Chronic Pain" },
        { product_name: "Muskoka", condition_name: "Depression" },
        { product_name: "Muskoka", condition_name: "Stress" },
        { product_name: "Muskoka", condition_name: "Migraines" },
        { product_name: "NC: Med (Nebula)", condition_name: "Anxiety" },
        { product_name: "NC: Med (Nebula)", condition_name: "Chronic Pain" },
        { product_name: "NC: Med (Nebula)", condition_name: "Depression" },
        { product_name: "Nebula", condition_name: "Depression" },
        { product_name: "Nebula", condition_name: "Stress" },
        { product_name: "Nebula", condition_name: "Fatigue" },
        { product_name: "Nebula II", condition_name: "Chronic Pain" },
        { product_name: "Nebula II", condition_name: "Anxiety" },
        { product_name: "Nebula II", condition_name: "Insomnia" },
        { product_name: "Neville's Haze", condition_name: "Stress" },
        { product_name: "Neville's Haze", condition_name: "Depression" },
        { product_name: "Neville's Haze", condition_name: "Fatigue" },
        { product_name: "Newton (Pennywise)", condition_name: "Anxiety" },
        { product_name: "Newton (Pennywise)", condition_name: "Insomnia" },
        { product_name: "Newton (Pennywise)", condition_name: "Stress" },
        { product_name: "Nina", condition_name: "Insomnia" },
        { product_name: "Nina", condition_name: "Fatigue" },
        { product_name: "Nina", condition_name: "Stress" },
        { product_name: "Nollia (Buddha's Sister)", condition_name: "Stress" },
        {
          product_name: "Nollia (Buddha's Sister)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Nollia (Buddha's Sister)",
          condition_name: "Insomnia"
        },
        { product_name: "Norquay (God Kush)", condition_name: "Anxiety" },
        { product_name: "Norquay (God Kush)", condition_name: "Chronic Pain" },
        { product_name: "Norquay (God Kush)", condition_name: "Insomnia" },
        { product_name: "Northern Lights", condition_name: "Stress" },
        { product_name: "Northern Lights", condition_name: "Chronic Pain" },
        { product_name: "Northern Lights", condition_name: "Insomnia" },
        {
          product_name: "Northern Lights Haze (Galiano)",
          condition_name: "Concentration"
        },
        {
          product_name: "Northern Lights Haze (Galiano)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Northern Lights Haze (Galiano)",
          condition_name: "Depression"
        },
        { product_name: "Northern Lights MOC", condition_name: "Anxiety" },
        { product_name: "Northern Lights MOC", condition_name: "Insomnia" },
        { product_name: "Northern Lights MOC", condition_name: "Chronic Pain" },
        { product_name: "Northern Tonic", condition_name: "Inflammation" },
        { product_name: "Northern Tonic", condition_name: "Stress" },
        { product_name: "Nuken", condition_name: "Anxiety" },
        { product_name: "Nuken", condition_name: "Insomnia" },
        { product_name: "Nuken", condition_name: "Stress" },
        { product_name: "NYC Diesel", condition_name: "Back Pain" },
        { product_name: "NYC Diesel", condition_name: "Insomnia" },
        { product_name: "NYC Diesel", condition_name: "Stress" },
        { product_name: "Ocean View", condition_name: "Migraines" },
        { product_name: "Ocean View", condition_name: "Anxiety" },
        { product_name: "Ocean View", condition_name: "Fatigue" },
        {
          product_name: "Odin #2 (Sour Diesel No.2)",
          condition_name: "Depression"
        },
        {
          product_name: "Odin #2 (Sour Diesel No.2)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Odin #2 (Sour Diesel No.2)",
          condition_name: "Anxiety"
        },
        { product_name: "Odin #3", condition_name: "Appetite Loss" },
        { product_name: "Odin #3", condition_name: "Fatigue" },
        { product_name: "Odin #3", condition_name: "Chronic Pain" },
        { product_name: "Odin (Sour Diesel)", condition_name: "Nauseous" },
        { product_name: "Odin (Sour Diesel)", condition_name: "Anxiety" },
        { product_name: "Odin (Sour Diesel)", condition_name: "Depression" },
        { product_name: "OG", condition_name: "Stress" },
        { product_name: "OG", condition_name: "Anxiety" },
        { product_name: "OG", condition_name: "Insomnia" },
        { product_name: "OG Diesel", condition_name: "Stress" },
        { product_name: "OG Diesel", condition_name: "Mood Swings" },
        { product_name: "OG Diesel", condition_name: "Concentration" },
        { product_name: "OG Kush", condition_name: "Stress" },
        { product_name: "OG Kush", condition_name: "Chronic Pain" },
        { product_name: "OG Kush", condition_name: "Depression" },
        { product_name: "OG Kush (CannTrust)", condition_name: "Stress" },
        { product_name: "OG Kush (CannTrust)", condition_name: "Depression" },
        { product_name: "OG Kush (CannTrust)", condition_name: "Insomnia" },
        { product_name: "OG Kush (Tilray)", condition_name: "Appetite Loss" },
        { product_name: "OG Kush (Tilray)", condition_name: "Chronic Pain" },
        { product_name: "OG Kush (Tilray)", condition_name: "Depression" },
        { product_name: "OG Kush (WeedMD)", condition_name: "Appetite Loss" },
        { product_name: "OG Kush (WeedMD)", condition_name: "Depression" },
        { product_name: "OG Kush (WeedMD)", condition_name: "Chronic Pain" },
        { product_name: "OG Shark", condition_name: "Insomnia" },
        { product_name: "OG Shark", condition_name: "Appetite Loss" },
        { product_name: "OG Shark", condition_name: "Depression" },
        { product_name: "Old Mother Sativa", condition_name: "Depression" },
        { product_name: "Old Mother Sativa", condition_name: "Fatigue" },
        {
          product_name: "Olivine (Space Queen)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Olivine (Space Queen)", condition_name: "Fatigue" },
        { product_name: "Olivine (Space Queen)", condition_name: "Stress" },
        { product_name: "OP: Med", condition_name: "Depression" },
        { product_name: "OP: Med", condition_name: "Chronic Pain" },
        { product_name: "OP: Med", condition_name: "Muscle Spasms" },
        { product_name: "Opium", condition_name: "Chronic Pain" },
        { product_name: "Opium", condition_name: "Stress" },
        { product_name: "Opium", condition_name: "Menstrual Cramps" },
        { product_name: "Orange Bud", condition_name: "Stress" },
        { product_name: "Orange Bud", condition_name: "Chronic Pain" },
        { product_name: "Orange Bud", condition_name: "Depression" },
        {
          product_name: "Orange Jack (Agent Orange)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Orange Jack (Agent Orange)",
          condition_name: "Depression"
        },
        {
          product_name: "Orange Jack (Agent Orange)",
          condition_name: "Stress"
        },
        { product_name: "Orange N.1", condition_name: "Insomnia" },
        { product_name: "Orange N.1", condition_name: "Depression" },
        { product_name: "Orange N.1", condition_name: "Appetite Loss" },
        { product_name: "Orange N.2", condition_name: "Back Pain" },
        { product_name: "Orange N.2", condition_name: "Anxiety" },
        { product_name: "Orange N.2", condition_name: "Stress" },
        { product_name: "Orange N.3", condition_name: "Anxiety" },
        { product_name: "Orange N.3", condition_name: "Chronic Pain" },
        { product_name: "Orange N.3", condition_name: "Insomnia" },
        { product_name: "Orange N.4", condition_name: "Anxiety" },
        { product_name: "Orange N.4", condition_name: "Depression" },
        { product_name: "Orange N.4", condition_name: "Insomnia" },
        { product_name: "Orange N.5", condition_name: "Chronic Pain" },
        { product_name: "Orange N.5", condition_name: "Insomnia" },
        { product_name: "Orange N.7", condition_name: "Anxiety" },
        { product_name: "Orange N.7", condition_name: "Depression" },
        { product_name: "Orange N.7", condition_name: "Insomnia" },
        { product_name: "Oregon Pinot Noir", condition_name: "Nauseous" },
        { product_name: "Oregon Pinot Noir", condition_name: "Chronic Pain" },
        { product_name: "Oregon Pinot Noir", condition_name: "Stress" },
        { product_name: "Orellium", condition_name: "Mood Swings" },
        { product_name: "Orellium", condition_name: "Stress" },
        { product_name: "Orellium", condition_name: "Social Anxiety" },
        { product_name: "Orient Express", condition_name: "Fatigue" },
        { product_name: "Original Cheese", condition_name: "Muscle Spasms" },
        { product_name: "Original Cheese", condition_name: "Chronic Pain" },
        { product_name: "Original Cheese", condition_name: "Appetite Loss" },
        {
          product_name: "Paddington (Sour Tangie)",
          condition_name: "Depression"
        },
        { product_name: "Paddington (Sour Tangie)", condition_name: "Stress" },
        {
          product_name: "Paddington (Sour Tangie)",
          condition_name: "Concentration"
        },
        { product_name: "Painkiller XL", condition_name: "Back Pain" },
        { product_name: "Painkiller XL", condition_name: "Chronic Pain" },
        { product_name: "Painkiller XL", condition_name: "Anxiety" },
        { product_name: "Palm Tree CBD", condition_name: "Stress" },
        { product_name: "Palm Tree CBD", condition_name: "Insomnia" },
        { product_name: "Palm Tree CBD", condition_name: "Depression" },
        { product_name: "Panache", condition_name: "Chronic Pain" },
        { product_name: "Panache", condition_name: "Fatigue" },
        { product_name: "Panache", condition_name: "Inflammation" },
        { product_name: "Papaya", condition_name: "Insomnia" },
        { product_name: "Papaya", condition_name: "Stress" },
        { product_name: "Papaya", condition_name: "Chronic Pain" },
        { product_name: "Papaya Grove", condition_name: "Appetite Loss" },
        { product_name: "Papaya Grove", condition_name: "Stress" },
        { product_name: "Papaya Grove", condition_name: "Concentration" },
        {
          product_name: "Paradise Island (Dela Haze)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Paradise Island (Dela Haze)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Paradise Island (Dela Haze)",
          condition_name: "Depression"
        },
        { product_name: "Passion Fruit", condition_name: "Insomnia" },
        { product_name: "Passion Fruit", condition_name: "Anxiety" },
        { product_name: "Passion Fruit", condition_name: "Back Pain" },
        {
          product_name: "Peechee (Strawberry Cheesecake)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Peechee (Strawberry Cheesecake)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Penelope", condition_name: "Anxiety" },
        { product_name: "Penelope", condition_name: "Stress" },
        { product_name: "Penelope", condition_name: "Migraines" },
        { product_name: "Pennywise", condition_name: "Depression" },
        { product_name: "Pennywise", condition_name: "Chronic Pain" },
        { product_name: "Pennywise", condition_name: "Back Pain" },
        {
          product_name: "Pierre Elliott (Pineapple Express)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Pierre Elliott (Pineapple Express)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Pierre Elliott (Pineapple Express)",
          condition_name: "Insomnia"
        },
        { product_name: "Pineapple Punch", condition_name: "Depression" },
        { product_name: "Pineapple Punch", condition_name: "Stress" },
        { product_name: "Pineapple Punch", condition_name: "Fatigue" },
        { product_name: "Pink Kush", condition_name: "Anxiety" },
        { product_name: "Pink Kush", condition_name: "Appetite Loss" },
        { product_name: "Pink Kush", condition_name: "Depression" },
        { product_name: "Pink OG Kush", condition_name: "Depression" },
        { product_name: "Pink OG Kush", condition_name: "Insomnia" },
        { product_name: "Pink OG Kush", condition_name: "Stress" },
        { product_name: "Pink Rockstar", condition_name: "Stress" },
        { product_name: "Pink Rockstar", condition_name: "Insomnia" },
        { product_name: "Pink Rockstar", condition_name: "Depression" },
        { product_name: "Pot of Gold", condition_name: "Chronic Pain" },
        { product_name: "Pot of Gold", condition_name: "Stress" },
        { product_name: "Pot of Gold", condition_name: "Insomnia" },
        { product_name: "Power Plant", condition_name: "Stress" },
        { product_name: "Power Plant", condition_name: "Depression" },
        { product_name: "Power Plant", condition_name: "Fatigue" },
        {
          product_name: "Provence Jardin (Lavender Kush)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Provence Jardin (Lavender Kush)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Provence Jardin (Lavender Kush)",
          condition_name: "Depression"
        },
        { product_name: "Purple Haze", condition_name: "Stress" },
        { product_name: "Purple Haze", condition_name: "Depression" },
        { product_name: "Purple Haze", condition_name: "Chronic Pain" },
        { product_name: "Purple Kush", condition_name: "Appetite Loss" },
        { product_name: "Purple Kush", condition_name: "Stress" },
        { product_name: "Purple Kush", condition_name: "Anxiety" },
        { product_name: "Purple N.1", condition_name: "Anxiety" },
        { product_name: "Purple N.1", condition_name: "Insomnia" },
        { product_name: "Purple N.1", condition_name: "Chronic Pain" },
        { product_name: "Purple N.2", condition_name: "Anxiety" },
        { product_name: "Purple N.2", condition_name: "Stress" },
        { product_name: "Purple N.2", condition_name: "Depression" },
        { product_name: "Purple N.3", condition_name: "Stress" },
        { product_name: "Purple N.3", condition_name: "Concentration" },
        { product_name: "Purple N.3", condition_name: "Depression" },
        { product_name: "Purple N.5", condition_name: "Chronic Pain" },
        { product_name: "Purple N.5", condition_name: "Mood Swings" },
        { product_name: "Purple N.5", condition_name: "Stress" },
        { product_name: "Purple Power", condition_name: "Stress" },
        { product_name: "Purple Power", condition_name: "Appetite Loss" },
        { product_name: "Purple Power", condition_name: "Depression" },
        { product_name: "Purple Voodoo", condition_name: "Stress" },
        { product_name: "Purple Voodoo", condition_name: "Depression" },
        { product_name: "Purple Voodoo", condition_name: "Chronic Pain" },
        { product_name: "Purps (Tilray)", condition_name: "Insomnia" },
        { product_name: "Purps (Tilray)", condition_name: "Mood Swings" },
        { product_name: "Purps (Tilray)", condition_name: "Stress" },
        { product_name: "Qleaner", condition_name: "Chronic Pain" },
        { product_name: "Qleaner", condition_name: "Stress" },
        { product_name: "Qleaner", condition_name: "Migraines" },
        { product_name: "Quantum Kush", condition_name: "Stress" },
        { product_name: "Quantum Kush", condition_name: "Chronic Pain" },
        { product_name: "Quantum Kush", condition_name: "Depression" },
        { product_name: "Querkle", condition_name: "Stress" },
        { product_name: "Querkle", condition_name: "Depression" },
        { product_name: "Querkle", condition_name: "Appetite Loss" },
        { product_name: "Quincy (God Bud)", condition_name: "Insomnia" },
        {
          product_name: "Quincy (God Bud)",
          condition_name: "Menstrual Cramps"
        },
        { product_name: "Quincy (God Bud)", condition_name: "Depression" },
        { product_name: "R2", condition_name: "Anxiety" },
        { product_name: "R2", condition_name: "ADHD" },
        { product_name: "R2", condition_name: "Back Pain" },
        { product_name: "Raphael", condition_name: "Anxiety" },
        { product_name: "Raphael", condition_name: "Migraines" },
        { product_name: "Raphael", condition_name: "Stress" },
        { product_name: "Raspberry Cough", condition_name: "Fatigue" },
        { product_name: "Raspberry Cough", condition_name: "Stress" },
        { product_name: "Raspberry Cough", condition_name: "Depression" },
        { product_name: "Reclining Buddha", condition_name: "Migraines" },
        { product_name: "Reclining Buddha", condition_name: "Inflammation" },
        { product_name: "Reclining Buddha", condition_name: "Chronic Pain" },
        { product_name: "Red N.1", condition_name: "Depression" },
        { product_name: "Red N.1", condition_name: "Stress" },
        { product_name: "Red N.1", condition_name: "Anxiety" },
        { product_name: "Red N.2", condition_name: "Anxiety" },
        { product_name: "Red N.2", condition_name: "Depression" },
        { product_name: "Red N.2", condition_name: "Fatigue" },
        { product_name: "Red N.3", condition_name: "Stress" },
        { product_name: "Red N.4", condition_name: "Insomnia" },
        { product_name: "Red N.4", condition_name: "Depression" },
        { product_name: "Red N.4", condition_name: "Stress" },
        { product_name: "Red N.6", condition_name: "Insomnia" },
        { product_name: "Red N.6", condition_name: "Nauseous" },
        { product_name: "Red N.6", condition_name: "Depression" },
        { product_name: "Rene Mist", condition_name: "Depression" },
        { product_name: "Rene Mist", condition_name: "Stress" },
        { product_name: "Rene Mist", condition_name: "Chronic Pain" },
        { product_name: "Rhubarb Kush", condition_name: "Stress" },
        { product_name: "Rhubarb Kush", condition_name: "Insomnia" },
        { product_name: "Rhubarb Kush", condition_name: "Depression" },
        { product_name: "Ripple Effect", condition_name: "Insomnia" },
        { product_name: "Ripple Effect", condition_name: "Anxiety" },
        { product_name: "Ripple Effect", condition_name: "Chronic Pain" },
        { product_name: "Rocklock", condition_name: "Stress" },
        { product_name: "Rocklock", condition_name: "Depression" },
        { product_name: "Rocklock", condition_name: "Muscle Spasms" },
        { product_name: "Rockstar", condition_name: "Migraines" },
        { product_name: "Rockstar", condition_name: "Stress" },
        { product_name: "Rockstar", condition_name: "Depression" },
        { product_name: "Romulan", condition_name: "Chronic Pain" },
        { product_name: "Romulan", condition_name: "Stress" },
        { product_name: "Romulan", condition_name: "Insomnia" },
        { product_name: "Rona's Ambrosia", condition_name: "Stress" },
        { product_name: "Rona's Ambrosia", condition_name: "Back Pain" },
        { product_name: "Rona's Ambrosia", condition_name: "Chronic Pain" },
        { product_name: "Royal Purple Kush", condition_name: "Anxiety" },
        { product_name: "Royal Purple Kush", condition_name: "Depression" },
        { product_name: "Royal Purple Kush", condition_name: "Stress" },
        { product_name: "Ruxton (3) Sour OG", condition_name: "Insomnia" },
        { product_name: "Ruxton (3) Sour OG", condition_name: "Depression" },
        { product_name: "Ruxton (3) Sour OG", condition_name: "Stress" },
        { product_name: "Ruxton (Sour OG)", condition_name: "Depression" },
        { product_name: "Ruxton (Sour OG)", condition_name: "Appetite Loss" },
        { product_name: "Ruxton (Sour OG)", condition_name: "Concentration" },
        { product_name: "Sachigo (Sour Kush)", condition_name: "Stress" },
        { product_name: "Sachigo (Sour Kush)", condition_name: "Back Pain" },
        { product_name: "Sachigo (Sour Kush)", condition_name: "Depression" },
        { product_name: "Salinca", condition_name: "Migraines" },
        { product_name: "Salinca", condition_name: "Appetite Loss" },
        { product_name: "Salinca", condition_name: "Anxiety" },
        { product_name: "San Fernando Valley", condition_name: "Fatigue" },
        { product_name: "San Fernando Valley", condition_name: "Back Pain" },
        {
          product_name: "San Fernando Valley",
          condition_name: "Concentration"
        },
        { product_name: "Sapphire Star", condition_name: "Stress" },
        { product_name: "Sapphire Star", condition_name: "Migraines" },
        { product_name: "Sapphire Star", condition_name: "Depression" },
        { product_name: "Sativa Milled", condition_name: "ADHD" },
        { product_name: "Sativa Milled", condition_name: "Anxiety" },
        { product_name: "Sativa Milled", condition_name: "Chronic Pain" },
        { product_name: "Sativa Tips", condition_name: "Depression" },
        { product_name: "Sativa Tips", condition_name: "Anxiety" },
        { product_name: "Sativa Tips", condition_name: "Stress" },
        { product_name: "Satori", condition_name: "Stress" },
        { product_name: "Satori", condition_name: "Depression" },
        { product_name: "Satori", condition_name: "Chronic Pain" },
        { product_name: "Savary (Pink Kush)", condition_name: "Insomnia" },
        { product_name: "Savary (Pink Kush)", condition_name: "Appetite Loss" },
        { product_name: "Savary (Pink Kush)", condition_name: "Stress" },
        { product_name: "Sedamen", condition_name: "Anxiety" },
        { product_name: "Sedamen", condition_name: "Depression" },
        { product_name: "Sedamen", condition_name: "Stress" },
        { product_name: "Sensi Star", condition_name: "Insomnia" },
        { product_name: "Sensi Star", condition_name: "Mood Swings" },
        { product_name: "Sensi Star", condition_name: "Chronic Pain" },
        { product_name: "Sentinel (Cannatonic)", condition_name: "Depression" },
        { product_name: "Sentinel (Cannatonic)", condition_name: "Stress" },
        {
          product_name: "Sentinel (Cannatonic)",
          condition_name: "Concentration"
        },
        { product_name: "Serious 6", condition_name: "Depression" },
        { product_name: "Serious 6", condition_name: "Stress" },
        { product_name: "Serious 6", condition_name: "Fatigue" },
        { product_name: "Serious Kush", condition_name: "Depression" },
        { product_name: "Serious Kush", condition_name: "Stress" },
        { product_name: "Serious Kush", condition_name: "Anxiety" },
        { product_name: "Shake", condition_name: "Insomnia" },
        { product_name: "Shake", condition_name: "Anxiety" },
        { product_name: "Shake", condition_name: "Appetite Loss" },
        { product_name: "Shark Shock", condition_name: "Insomnia" },
        { product_name: "Shark Shock", condition_name: "Anxiety" },
        { product_name: "Shark Shock", condition_name: "Appetite Loss" },
        { product_name: "Shark Shock CBD", condition_name: "Stress" },
        { product_name: "Shark Shock CBD", condition_name: "Chronic Pain" },
        { product_name: "Shark Shock CBD", condition_name: "Inflammation" },
        {
          product_name: "Shark Tooth (Shark Shock)",
          condition_name: "Depression"
        },
        { product_name: "Shark Tooth (Shark Shock)", condition_name: "Stress" },
        {
          product_name: "Shark Tooth (Shark Shock)",
          condition_name: "Anxiety"
        },
        { product_name: "Shiatsu Kush", condition_name: "Chronic Pain" },
        { product_name: "Shiatsu Kush", condition_name: "Anxiety" },
        {
          product_name: "Shiatsu Kush (Canna Farms Ltd)",
          condition_name: "Depression"
        },
        {
          product_name: "Shiatsu Kush (Canna Farms Ltd)",
          condition_name: "Stress"
        },
        {
          product_name: "Shiatsu Kush (Canna Farms Ltd)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Shishkaberry", condition_name: "Insomnia" },
        { product_name: "Shiva Skunk", condition_name: "Chronic Pain" },
        { product_name: "Shiva Skunk", condition_name: "Depression" },
        { product_name: "Shiva Skunk", condition_name: "Stress" },
        { product_name: "SI: Med (Sensi Star)", condition_name: "Depression" },
        { product_name: "SI: Med (Sensi Star)", condition_name: "Anxiety" },
        { product_name: "SI: Med (Sensi Star)", condition_name: "Insomnia" },
        { product_name: "Silver Haze", condition_name: "Stress" },
        { product_name: "Silver Haze", condition_name: "Depression" },
        { product_name: "Silver Haze", condition_name: "Chronic Pain" },
        { product_name: "Silver Pearl", condition_name: "Stress" },
        { product_name: "Silver Pearl", condition_name: "Fatigue" },
        { product_name: "Silver Pearl", condition_name: "Chronic Pain" },
        { product_name: "Sirius (Alien Dawg)", condition_name: "Migraines" },
        {
          product_name: "Sirius (Alien Dawg)",
          condition_name: "Appetite Loss"
        },
        { product_name: "Sirius (Alien Dawg)", condition_name: "Insomnia" },
        { product_name: "Skunk Haze", condition_name: "Stress" },
        { product_name: "Skunk Haze", condition_name: "Chronic Pain" },
        { product_name: "Skunk Haze", condition_name: "Depression" },
        { product_name: "Skydog", condition_name: "Stress" },
        { product_name: "Skydog", condition_name: "Inflammation" },
        { product_name: "Skydog", condition_name: "Chronic Pain" },
        { product_name: "Skywalker", condition_name: "Insomnia" },
        { product_name: "Skywalker", condition_name: "Stress" },
        { product_name: "Skywalker", condition_name: "Chronic Pain" },
        {
          product_name: "Skywalker Kush No. 1 (DNA Certified)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Skywalker Kush No. 1 (DNA Certified)",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Skywalker Kush No. 1 (DNA Certified)",
          condition_name: "Depression"
        },
        {
          product_name: "Skywalker Kush No. 2 (DNA Certified)",
          condition_name: "Depression"
        },
        {
          product_name: "Skywalker Kush No. 2 (DNA Certified)",
          condition_name: "Stress"
        },
        {
          product_name: "Skywalker Kush No. 2 (DNA Certified)",
          condition_name: "Back Pain"
        },
        { product_name: "Skywalker OG", condition_name: "Migraines" },
        { product_name: "Skywalker OG", condition_name: "Insomnia" },
        { product_name: "Skywalker OG", condition_name: "Depression" },
        { product_name: "SleeStack", condition_name: "Depression" },
        { product_name: "SleeStack", condition_name: "Stress" },
        { product_name: "SleeStack", condition_name: "Fatigue" },
        { product_name: "Small Flower", condition_name: "Chronic Pain" },
        { product_name: "Small Flower", condition_name: "Stress" },
        { product_name: "Small Flower", condition_name: "Nauseous" },
        { product_name: "SN: Med (Spoetnik )", condition_name: "Chronic Pain" },
        { product_name: "SN: Med (Spoetnik )", condition_name: "Anxiety" },
        { product_name: "SN: Med (Spoetnik )", condition_name: "Depression" },
        {
          product_name: "Snow Dome (LA Confidential)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Snow Dome (LA Confidential)",
          condition_name: "Depression"
        },
        {
          product_name: "Snow Dome (LA Confidential)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Snow White", condition_name: "Chronic Pain" },
        { product_name: "Snow White", condition_name: "Depression" },
        { product_name: "Snow White", condition_name: "Insomnia" },
        { product_name: "Solstice", condition_name: "Mood Swings" },
        { product_name: "Solstice", condition_name: "Stress" },
        { product_name: "Solstice", condition_name: "Insomnia" },
        { product_name: "Solveris", condition_name: "Depression" },
        { product_name: "Solveris", condition_name: "Insomnia" },
        { product_name: "Solveris", condition_name: "Chronic Pain" },
        { product_name: "Somango", condition_name: "Chronic Pain" },
        { product_name: "Somango", condition_name: "Stress" },
        { product_name: "Somango", condition_name: "Insomnia" },
        { product_name: "Sour Amnesia", condition_name: "Stress" },
        { product_name: "Sour Amnesia", condition_name: "Depression" },
        { product_name: "Sour Amnesia", condition_name: "Fatigue" },
        { product_name: "Sour Cream", condition_name: "Migraines" },
        { product_name: "Sour Cream", condition_name: "Stress" },
        { product_name: "Sour Cream", condition_name: "Depression" },
        { product_name: "Sour Diesel", condition_name: "Stress" },
        { product_name: "Sour Diesel", condition_name: "Depression" },
        { product_name: "Sour Diesel", condition_name: "Chronic Pain" },
        { product_name: "Sour Kush", condition_name: "Insomnia" },
        { product_name: "Sour Kush", condition_name: "Migraines" },
        { product_name: "Sour Kush", condition_name: "Anxiety" },
        {
          product_name: "Sour Kush (DNA Certified)",
          condition_name: "Anxiety"
        },
        { product_name: "Sour Kush (DNA Certified)", condition_name: "Stress" },
        {
          product_name: "Sour Kush (DNA Certified)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Sour OG", condition_name: "Anxiety" },
        { product_name: "Sour OG", condition_name: "Migraines" },
        { product_name: "Sour OG", condition_name: "Stress" },
        {
          product_name: "Souris Skies (Sensi Star)",
          condition_name: "Insomnia"
        },
        { product_name: "Souris Skies (Sensi Star)", condition_name: "Stress" },
        {
          product_name: "Souris Skies (Sensi Star)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Special K", condition_name: "Depression" },
        { product_name: "Special K", condition_name: "Stress" },
        { product_name: "Special K", condition_name: "Fatigue" },
        { product_name: "Sputnik", condition_name: "Depression" },
        { product_name: "Sputnik", condition_name: "Chronic Pain" },
        { product_name: "Sputnik", condition_name: "Stress" },
        { product_name: "Star Gazer", condition_name: "Insomnia" },
        { product_name: "Star Killer", condition_name: "Stress" },
        { product_name: "Star Killer", condition_name: "Anxiety" },
        { product_name: "Star Killer", condition_name: "Appetite Loss" },
        { product_name: "Starfall", condition_name: "Insomnia" },
        { product_name: "Starfall", condition_name: "Stress" },
        { product_name: "Starfall", condition_name: "Back Pain" },
        { product_name: "Stellio", condition_name: "Depression" },
        { product_name: "Stellio", condition_name: "Anxiety" },
        { product_name: "Stellio", condition_name: "Migraines" },
        { product_name: "Stokes (Querkle)", condition_name: "Insomnia" },
        { product_name: "Stokes (Querkle)", condition_name: "Muscle Spasms" },
        { product_name: "Stokes (Querkle)", condition_name: "Appetite Loss" },
        { product_name: "Strawberry Cough", condition_name: "Stress" },
        { product_name: "Strawberry Cough", condition_name: "Depression" },
        { product_name: "Strawberry Cough", condition_name: "Chronic Pain" },
        {
          product_name: "Strawberry Short Cookies",
          condition_name: "Depression"
        },
        { product_name: "Strawberry Short Cookies", condition_name: "Fatigue" },
        {
          product_name: "Strawberry Short Cookies",
          condition_name: "Concentration"
        },
        { product_name: "Sugar Shack", condition_name: "Depression" },
        { product_name: "Sugar Shack", condition_name: "Insomnia" },
        { product_name: "Sugar Shack", condition_name: "Fatigue" },
        {
          product_name: "Sugarloaf (Super Lemon Haze)",
          condition_name: "Back Pain"
        },
        {
          product_name: "Sugarloaf (Super Lemon Haze)",
          condition_name: "Depression"
        },
        {
          product_name: "Sugarloaf (Super Lemon Haze)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Summerside Breeze (Super Silver Haze)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Summerside Breeze (Super Silver Haze)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Summerside Breeze (Super Silver Haze)",
          condition_name: "Concentration"
        },
        {
          product_name: "Sundance Borealis Blend (Indica)",
          condition_name: "Migraines"
        },
        {
          product_name: "Sundance Borealis Blend (Indica)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Sundance Borealis Blend (Indica)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Sundance Borealis Blend (Sativa)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Sundance Borealis Blend (Sativa)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Sundance Borealis Blend (Sativa)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Sun-Grown Boaty McBoatface",
          condition_name: "Concentration"
        },
        {
          product_name: "Sun-Grown Boaty McBoatface",
          condition_name: "Migraines"
        },
        {
          product_name: "Sun-Grown Boaty McBoatface",
          condition_name: "Depression"
        },
        { product_name: "Sun-Grown Orange N.1", condition_name: "Stress" },
        { product_name: "Sun-Grown Orange N.1", condition_name: "Depression" },
        {
          product_name: "Sun-Grown Orange N.1",
          condition_name: "Chronic Pain"
        },
        { product_name: "Sun-Grown Orange N.2", condition_name: "Anxiety" },
        { product_name: "Sun-Grown Orange N.2", condition_name: "Insomnia" },
        { product_name: "Sun-Grown Orange N.2", condition_name: "Depression" },
        { product_name: "Sun-Grown Orange N.4", condition_name: "Stress" },
        { product_name: "Sun-Grown Orange N.4", condition_name: "Anxiety" },
        { product_name: "Sun-Grown Orange N.4", condition_name: "Depression" },
        { product_name: "Sun-Grown Red N.1", condition_name: "Anxiety" },
        { product_name: "Sun-Grown Red N.1", condition_name: "Insomnia" },
        { product_name: "Sun-Grown Red N.1", condition_name: "Depression" },
        { product_name: "Sun-Grown Red No. 4", condition_name: "Insomnia" },
        { product_name: "Sun-Grown Red No. 4", condition_name: "Stress" },
        { product_name: "Sun-Grown Red No. 4", condition_name: "Depression" },
        { product_name: "Sunset (Leafs by Snoop)", condition_name: "Anxiety" },
        { product_name: "Sunset (Leafs by Snoop)", condition_name: "Insomnia" },
        {
          product_name: "Sunset (Leafs by Snoop)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Super Critical (AB Labs)", condition_name: "Anxiety" },
        {
          product_name: "Super Critical (AB Labs)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Super Critical (AB Labs)",
          condition_name: "Depression"
        },
        { product_name: "Super Lemon Haze", condition_name: "Stress" },
        { product_name: "Super Lemon Haze", condition_name: "Depression" },
        { product_name: "Super Lemon Haze", condition_name: "Fatigue" },
        {
          product_name: "Super Lemon Haze (By Delta 9)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Super Lemon Haze (By Delta 9)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Super Lemon Haze (By Delta 9)",
          condition_name: "Back Pain"
        },
        {
          product_name: "Super Lemon Haze (Grower's Pride)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Super Lemon Haze (Grower's Pride)",
          condition_name: "Depression"
        },
        {
          product_name: "Super Lemon Haze (Grower's Pride)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Super Silver Haze", condition_name: "Stress" },
        { product_name: "Super Silver Haze", condition_name: "Depression" },
        { product_name: "Super Silver Haze", condition_name: "Fatigue" },
        {
          product_name: "Super Silver Haze (By WMMC)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Super Silver Haze (By WMMC)",
          condition_name: "Concentration"
        },
        {
          product_name: "Super Silver Haze (By WMMC)",
          condition_name: "Anxiety"
        },
        { product_name: "Super Skunk", condition_name: "Stress" },
        { product_name: "Super Skunk", condition_name: "Depression" },
        { product_name: "Super Skunk", condition_name: "Chronic Pain" },
        { product_name: "Superbud", condition_name: "Nauseous" },
        { product_name: "Superbud", condition_name: "Depression" },
        { product_name: "Superbud", condition_name: "Insomnia" },
        { product_name: "Supreme Formula 1:1", condition_name: "Anxiety" },
        { product_name: "Supreme Formula 1:1", condition_name: "Back Pain" },
        { product_name: "Supreme Formula 1:1", condition_name: "Insomnia" },
        {
          product_name: "Sweet Escape (Strawberry Cough)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Sweet Escape (Strawberry Cough)",
          condition_name: "Depression"
        },
        {
          product_name: "Sweet Escape (Strawberry Cough)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Sweet Skunk CBD", condition_name: "Stress" },
        { product_name: "Sweet Skunk CBD", condition_name: "Fatigue" },
        { product_name: "Sweet Skunk CBD", condition_name: "Inflammation" },
        { product_name: "Swiss Bliss", condition_name: "Stress" },
        { product_name: "Swiss Bliss", condition_name: "Depression" },
        { product_name: "Swiss Bliss", condition_name: "Insomnia" },
        {
          product_name: "Tamaracouta (Girl Scout Cookies)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Tamaracouta (Girl Scout Cookies)",
          condition_name: "Stress"
        },
        {
          product_name: "Tamaracouta (Girl Scout Cookies)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Tangerine Dream (By WMMC)",
          condition_name: "Insomnia"
        },
        { product_name: "Tangerine Dream (By WMMC)", condition_name: "Stress" },
        {
          product_name: "Tangerine Dream (By WMMC)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Tangerine Dream (Canna Farms Ltd)",
          condition_name: "Depression"
        },
        {
          product_name: "Tangerine Dream (Canna Farms Ltd)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Tangerine Dream (Canna Farms Ltd)",
          condition_name: "Insomnia"
        },
        { product_name: "Tangie (Rex)", condition_name: "Mood Swings" },
        { product_name: "Tangie (Rex)", condition_name: "Depression" },
        { product_name: "Tangie (Rex)", condition_name: "Migraines" },
        { product_name: "Tekarra (OG Grape Krypt)", condition_name: "Stress" },
        {
          product_name: "Tekarra (OG Grape Krypt)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Tekarra (OG Grape Krypt)", condition_name: "Anxiety" },
        {
          product_name: "Temple (Cannatonic)",
          condition_name: "Muscle Spasms"
        },
        { product_name: "Temple (Cannatonic)", condition_name: "Inflammation" },
        { product_name: "Temple (Cannatonic)", condition_name: "Stress" },
        {
          product_name: "Texada (Super Lemon Haze)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Texada (Super Lemon Haze)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Texada (Super Lemon Haze)",
          condition_name: "Depression"
        },
        { product_name: "Thai", condition_name: "Chronic Pain" },
        { product_name: "Thai", condition_name: "Depression" },
        { product_name: "Thai", condition_name: "Stress" },
        { product_name: "Thai Lights", condition_name: "Depression" },
        { product_name: "Thai Lights", condition_name: "Fatigue" },
        { product_name: "Thai Lights", condition_name: "Migraines" },
        { product_name: "Thai-Tanic", condition_name: "Stress" },
        { product_name: "Thai-Tanic", condition_name: "Chronic Pain" },
        { product_name: "Thai-Tanic", condition_name: "Insomnia" },
        { product_name: "THC Blend", condition_name: "Fatigue" },
        { product_name: "THC Blend", condition_name: "Depression" },
        { product_name: "THC Blend", condition_name: "Stress" },
        { product_name: "The Doctor", condition_name: "Stress" },
        { product_name: "The Doctor", condition_name: "Insomnia" },
        { product_name: "The Doctor", condition_name: "Chronic Pain" },
        { product_name: "The Grail", condition_name: "Insomnia" },
        { product_name: "The Grail", condition_name: "Stress" },
        { product_name: "The Grail", condition_name: "Appetite Loss" },
        { product_name: "Thin Mint", condition_name: "Back Pain" },
        { product_name: "Thin Mint", condition_name: "Anxiety" },
        { product_name: "Thin Mint", condition_name: "Appetite Loss" },
        {
          product_name: "Thor 2 (Ghost Train Haze)",
          condition_name: "Mood Swings"
        },
        {
          product_name: "Thor 2 (Ghost Train Haze)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Thor 2 (Ghost Train Haze)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Three Sisters (Dairy Queen)",
          condition_name: "Muscle Spasms"
        },
        {
          product_name: "Three Sisters (Dairy Queen)",
          condition_name: "Depression"
        },
        {
          product_name: "Three Sisters (Dairy Queen)",
          condition_name: "Inflammation"
        },
        { product_name: "Tidal Bore (R2)", condition_name: "Chronic Pain" },
        { product_name: "Tidal Bore (R2)", condition_name: "Migraines" },
        { product_name: "Tidal Bore (R2)", condition_name: "Anxiety" },
        {
          product_name: "Tidal Bore Mini (R2)",
          condition_name: "Chronic Pain"
        },
        { product_name: "Tidal Bore Mini (R2)", condition_name: "Migraines" },
        { product_name: "Tidal Bore Mini (R2)", condition_name: "Anxiety" },
        { product_name: "Titan's Haze", condition_name: "Menstrual Cramps" },
        { product_name: "Titan's Haze", condition_name: "Depression" },
        { product_name: "Titan's Haze", condition_name: "Inflammation" },
        { product_name: "Tora Bora", condition_name: "Chronic Pain" },
        { product_name: "Tora Bora", condition_name: "Muscle Spasms" },
        { product_name: "Tora Bora", condition_name: "Migraines" },
        { product_name: "Torbay (Critical Kush)", condition_name: "Insomnia" },
        { product_name: "Torbay (Critical Kush)", condition_name: "Migraines" },
        { product_name: "Torbay (Critical Kush)", condition_name: "Stress" },
        {
          product_name: "Torbay Mini (Critical Kush)",
          condition_name: "Insomnia"
        },
        {
          product_name: "Torbay Mini (Critical Kush)",
          condition_name: "Migraines"
        },
        {
          product_name: "Torbay Mini (Critical Kush)",
          condition_name: "Stress"
        },
        { product_name: "Tower (Cannatonic)", condition_name: "Back Pain" },
        { product_name: "Tower (Cannatonic)", condition_name: "Anxiety" },
        { product_name: "Tower (Cannatonic)", condition_name: "Inflammation" },
        { product_name: "Train Wreck", condition_name: "Stress" },
        { product_name: "Train Wreck", condition_name: "Depression" },
        { product_name: "Train Wreck", condition_name: "Chronic Pain" },
        { product_name: "Treasure Island", condition_name: "Stress" },
        { product_name: "Treasure Island", condition_name: "Chronic Pain" },
        { product_name: "Treasure Island", condition_name: "Fatigue" },
        { product_name: "Trivlio", condition_name: "Stress" },
        { product_name: "Trivlio", condition_name: "Depression" },
        { product_name: "Trivlio", condition_name: "Chronic Pain" },
        { product_name: "Trutiva", condition_name: "Stress" },
        { product_name: "Trutiva", condition_name: "Back Pain" },
        { product_name: "Trutiva", condition_name: "Inflammation" },
        { product_name: "Tsunami", condition_name: "Stress" },
        { product_name: "Tsunami", condition_name: "Appetite Loss" },
        { product_name: "Tsunami", condition_name: "Chronic Pain" },
        {
          product_name: "TWD Lot #1 (Proprietary Strain)",
          condition_name: "Depression"
        },
        {
          product_name: "TWD Lot #1 (Proprietary Strain)",
          condition_name: "Migraines"
        },
        {
          product_name: "TWD Lot #1 (Proprietary Strain)",
          condition_name: "Stress"
        },
        { product_name: "Ultra", condition_name: "Back Pain" },
        { product_name: "Ultra", condition_name: "Chronic Pain" },
        { product_name: "Ultra", condition_name: "Anxiety" },
        { product_name: "Ultra Sour", condition_name: "Chronic Pain" },
        { product_name: "Ultra Sour", condition_name: "Stress" },
        { product_name: "Ultra Sour", condition_name: "Insomnia" },
        { product_name: "Ursa Minor", condition_name: "Anxiety" },
        { product_name: "Ursa Minor", condition_name: "Appetite Loss" },
        { product_name: "Ursa Minor", condition_name: "Chronic Pain" },
        { product_name: "Vanilla Kush", condition_name: "Stress" },
        { product_name: "Vanilla Kush", condition_name: "Chronic Pain" },
        { product_name: "Vanilla Kush", condition_name: "Insomnia" },
        { product_name: "Vanilluna", condition_name: "Eye Pressure" },
        { product_name: "Vanilluna", condition_name: "Migraines" },
        { product_name: "Vanilluna", condition_name: "Inflammation" },
        { product_name: "Very Berry Haze", condition_name: "Stress" },
        { product_name: "Very Berry Haze", condition_name: "Chronic Pain" },
        { product_name: "Very Berry Haze", condition_name: "Depression" },
        { product_name: "Voluptas", condition_name: "Anxiety" },
        { product_name: "Voluptas", condition_name: "Stress" },
        { product_name: "Voluptas", condition_name: "Fatigue" },
        { product_name: "Vortex", condition_name: "Stress" },
        { product_name: "Vortex", condition_name: "Depression" },
        { product_name: "Vortex", condition_name: "Chronic Pain" },
        { product_name: "Wabanaki", condition_name: "Mood Swings" },
        { product_name: "Wabanaki", condition_name: "Concentration" },
        { product_name: "Wabanaki", condition_name: "Depression" },
        { product_name: "Wabanaki Mini", condition_name: "Anxiety" },
        { product_name: "Waldo", condition_name: "Nauseous" },
        { product_name: "Waldo", condition_name: "Chronic Pain" },
        { product_name: "Waldo", condition_name: "Depression" },
        { product_name: "Wappa", condition_name: "Stress" },
        { product_name: "Wappa", condition_name: "Chronic Pain" },
        { product_name: "Wappa", condition_name: "Insomnia" },
        { product_name: "Warlock", condition_name: "Insomnia" },
        { product_name: "Warlock", condition_name: "Stress" },
        { product_name: "Warlock", condition_name: "Back Pain" },
        { product_name: "Warlock CBD", condition_name: "Anxiety" },
        { product_name: "Warlock CBD", condition_name: "Inflammation" },
        { product_name: "Warlock CBD", condition_name: "Depression" },
        {
          product_name: "Warwick 1 ('91 K-OG Melon)",
          condition_name: "Stress"
        },
        {
          product_name: "Warwick 1 ('91 K-OG Melon)",
          condition_name: "Appetite Loss"
        },
        {
          product_name: "Warwick 1 ('91 K-OG Melon)",
          condition_name: "Fatigue"
        },
        {
          product_name: "Warwick 2 ('91 K-OG Chemdawg)",
          condition_name: "Back Pain"
        },
        {
          product_name: "Warwick 2 ('91 K-OG Chemdawg)",
          condition_name: "Stress"
        },
        {
          product_name: "Warwick 2 ('91 K-OG Chemdawg)",
          condition_name: "Depression"
        },
        { product_name: "Watermelon", condition_name: "Insomnia" },
        { product_name: "Watermelon", condition_name: "Stress" },
        { product_name: "Watermelon", condition_name: "Appetite Loss" },
        { product_name: "Watson", condition_name: "Anxiety" },
        { product_name: "Watson", condition_name: "Depression" },
        { product_name: "Watson", condition_name: "Insomnia" },
        { product_name: "Whitaker Blues", condition_name: "Stress" },
        { product_name: "Whitaker Blues", condition_name: "Insomnia" },
        { product_name: "Whitaker Blues", condition_name: "Depression" },
        { product_name: "White Berry", condition_name: "Stress" },
        { product_name: "White Berry", condition_name: "Migraines" },
        { product_name: "White Berry", condition_name: "Depression" },
        {
          product_name: "White Crown (White Berry)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "White Crown (White Berry)",
          condition_name: "Mood Swings"
        },
        {
          product_name: "White Crown (White Berry)",
          condition_name: "Insomnia"
        },
        { product_name: "White Haze", condition_name: "Stress" },
        { product_name: "White Haze", condition_name: "Depression" },
        { product_name: "White Haze", condition_name: "Fatigue" },
        { product_name: "White OG", condition_name: "Anxiety" },
        { product_name: "White OG", condition_name: "Insomnia" },
        { product_name: "White OG", condition_name: "Back Pain" },
        { product_name: "White Rhino", condition_name: "Stress" },
        { product_name: "White Rhino", condition_name: "Insomnia" },
        { product_name: "White Rhino", condition_name: "Depression" },
        { product_name: "White Russian", condition_name: "Stress" },
        { product_name: "White Russian", condition_name: "Chronic Pain" },
        { product_name: "White Russian", condition_name: "Depression" },
        { product_name: "White Shark", condition_name: "Depression" },
        { product_name: "White Shark", condition_name: "Insomnia" },
        { product_name: "White Shark", condition_name: "Anxiety" },
        { product_name: "White Smurf", condition_name: "Chronic Pain" },
        { product_name: "White Smurf", condition_name: "Inflammation" },
        { product_name: "White Smurf", condition_name: "Depression" },
        { product_name: "White Widow", condition_name: "Stress" },
        { product_name: "White Widow", condition_name: "Depression" },
        { product_name: "White Widow", condition_name: "Chronic Pain" },
        {
          product_name: "Whitecap (White Widow)",
          condition_name: "Chronic Pain"
        },
        {
          product_name: "Whitecap (White Widow)",
          condition_name: "Depression"
        },
        { product_name: "Whitecap (White Widow)", condition_name: "Stress" },
        { product_name: "Whitehorn", condition_name: "Anxiety" },
        { product_name: "Whitehorn", condition_name: "Insomnia" },
        { product_name: "Whitehorn", condition_name: "Back Pain" },
        { product_name: "Wilbur", condition_name: "Inflammation" },
        { product_name: "Wilbur", condition_name: "Migraines" },
        { product_name: "Wilbur", condition_name: "Depression" },
        { product_name: "Wine Gums", condition_name: "Stress" },
        { product_name: "Wine Gums", condition_name: "Insomnia" },
        { product_name: "Wine Gums", condition_name: "Depression" },
        { product_name: "Wiwaxy (Wappa)", condition_name: "Insomnia" },
        { product_name: "Wiwaxy (Wappa)", condition_name: "Anxiety" },
        { product_name: "Wiwaxy (Wappa)", condition_name: "Depression" },
        { product_name: "Wonder Woman", condition_name: "Stress" },
        { product_name: "Wonder Woman", condition_name: "Depression" },
        { product_name: "Wonder Woman", condition_name: "Chronic Pain" },
        { product_name: "WP: Med (Wappa)", condition_name: "Anxiety" },
        { product_name: "WP: Med (Wappa)", condition_name: "Depression" },
        { product_name: "WP: Med (Wappa)", condition_name: "Insomnia" },
        { product_name: "Yellow N.1", condition_name: "Muscle Spasms" },
        { product_name: "Yellow N.1", condition_name: "Stress" },
        { product_name: "Yellow N.1", condition_name: "Insomnia" },
        {
          product_name: "Yellow Submarine (Larry OG Kush)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Yellow Submarine (Larry OG Kush)",
          condition_name: "Depression"
        },
        {
          product_name: "Yellow Submarine (Larry OG Kush)",
          condition_name: "Insomnia"
        },
        { product_name: "Yorkshire (Headband)", condition_name: "Anxiety" },
        { product_name: "Yorkshire (Headband)", condition_name: "Migraines" },
        { product_name: "Yorkshire (Headband)", condition_name: "Insomnia" },
        { product_name: "Yumboldt", condition_name: "Stress" },
        { product_name: "Yumboldt", condition_name: "Appetite Loss" },
        { product_name: "Yumboldt", condition_name: "Insomnia" },
        { product_name: "Yummy", condition_name: "Chronic Pain" },
        { product_name: "Yummy", condition_name: "Nauseous" },
        { product_name: "Yummy", condition_name: "Menstrual Cramps" },
        {
          product_name: "Zen's Garden (Black Widow CBD)",
          condition_name: "Inflammation"
        },
        {
          product_name: "Zen's Garden (Black Widow CBD)",
          condition_name: "Anxiety"
        },
        {
          product_name: "Zen's Garden (Black Widow CBD)",
          condition_name: "Muscle Spasms"
        }
      ]);
    });
};
