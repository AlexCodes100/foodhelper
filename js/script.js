/*---------------------------------------
  Variable declarations       
-----------------------------------------*/
const recipes = [
    {
        "source": "https://www.delish.com/cooking/recipe-ideas/a41498404/air-fryer-beef-and-broccoli-recipe/",
        "recipeName": "BEEF & BROCCOLI",
        "ingredients": [
            "1/2 c. low-sodium chicken broth",
            "3 tbsp. reduced-sodium soy sauce",
            "2 tbsp. packed light brown sugar",
            "1 tbsp. cornstarch",
            "1 tsp. Shaoxing wine or dry sherry",
            "1 tsp. toasted sesame oil",
            "Freshly ground black pepper",
            "1 lb. flank or skirt steak beef",
            "2 cloves garlic, finely chopped",
            "1 tbsp. reduced-sodium soy sauce",
            "2 tsp. cornstarch",
            "2 tsp. finely chopped peeled fresh ginger",
            "2 tsp. Shaoxing wine or dry sherry",
            "12 oz. small broccoli florets (from about 2 heads)",
            "2 tbsp. vegetable oil",
            "Thinly sliced scallions, toasted sesame seeds, and steamed or sticky rice, for serving"
        ],
        "instructions": [
            "In a medium heatproof bowl, whisk broth, soy sauce, brown sugar, cornstarch, and wine. Microwave on high, stirring halfway through, until sauce is thickened, about 2 minutes. Stir in oil and season with a few grinds of black pepper.",
            "In another medium bowl, toss steak with garlic, soy sauce, cornstarch, ginger, and wine. Let sit 5 minutes. Add broccoli and oil and toss to combine.",
            "Arrange half of steak and broccoli mixture in a single layer in an air fryer basket. Cook at 400F until steak is just cooked through and broccoli is tender and golden in spots, 8 to 10 minutes. Scrape cooked steak and broccoli mixture into a bowl with sauce.",
            "Repeat with the remaining steak and broccoli mixture, then toss to coat in the sauce.",
            "Sprinkle with scallions and sesame seeds. Serve over rice."
        ]
    },
    {
        "source": "https://www.beefitswhatsfordinner.com/recipes/recipe/55564/beef-chili",
        "recipeName": "BEEF CHILI",
        "ingredients": [
            "1 pound Ground Beef (96% lean)",
            "1 can (15 ounces) reduced-sodium black beans, rinsed and drained",
            "1 can (14-1/2 ounces) unsalted beef broth",
            "1 can (14-1/2 ounces) unsalted diced tomatoes",
            "1 can (4 ounces) diced green chilies or sliced jalapeno peppers",
            "2 tablespoons chili powder"
        ],
        "instructions": [
            "Heat a large nonstick skillet over medium heat until hot. Add Ground Beef and cook 8 to 10 minutes, breaking into 3/4-inch crumbles and stirring occasionally. Pour off drippings.",
            "Stir in beans, broth, tomatoes, green chilies, and chili powder. Bring to a boil. Reduce heat, cover, and simmer for 20 minutes to develop flavors, stirring occasionally.",
            "Garnish with Toppings, as desired."
        ]
    },
    {
        "source": "https://www.beefitswhatsfordinner.com/recipes/recipe/1344/lazy-beef-lasagna",
        "recipeName": "BEEF LASAGNA",
        "ingredients": [
            "1-1/2 pounds Ground Beef (93% lean or leaner)",
            "1 tablespoon minced garlic",
            "1/2 teaspoon salt",
            "1/4 to 1/2 teaspoon ground nutmeg",
            "1/4 teaspoon pepper",
            "1 jar (26 ounces) prepared pasta or marinara sauce",
            "1-1/2 cups water",
            "1 package (20 to 25 ounces) refrigerated or frozen cheese ravioli",
            "1 cup shredded Italian cheese blend"
        ],
        "instructions": [
            "Heat oven to 400F. Heat a large nonstick skillet over medium heat until hot. Add Ground Beef and garlic; cook 8 to 10 minutes, breaking into 3/4-inch crumbles and stirring occasionally. Remove from skillet with slotted spoon; pour off drippings and return beef to skillet.",
            "Stir in salt, nutmeg, and pepper; mix well. Stir in pasta sauce and water; bring to a boil. Cook 1 to 2 minutes, stirring occasionally.",
            "Coat a 13 x 9-inch glass baking dish with cooking spray. Layer half the ravioli, half the beef mixture, and half the cheese. Repeat with remaining ravioli, beef mixture, and cheese; cover with aluminum foil. Bake in a 400°F oven for 15 minutes (20 minutes if using frozen ravioli). Uncover; continue baking 15 to 20 minutes or until sauce is bubbly and pasta is tender.",
            "Let stand 5 minutes before serving."
        ]
    },
    {
        "source": "https://www.delish.com/cooking/recipe-ideas/a23515497/easy-beef-stew-recipe/",
        "recipeName": "BEEF STEW",
        "ingredients": [
            "1 tbsp. (or more) vegetable oil",
            "2 lb. beef chuck stew meat, cut into 1\" cubes",
            "1 medium yellow onion, chopped",
            "2 carrots, peeled, cut into rounds, carrots",
            "2 stalks celery, chopped",
            "Kosher salt",
            "Freshly ground black pepper",
            "3 cloves garlic, finely chopped",
            "1/4 c. tomato paste",
            "6 c. low-sodium beef broth",
            "1 c. red wine",
            "1 tbsp. Worcestershire sauce",
            "2 fresh thyme sprigs",
            "2 bay leaves",
            "1 lb. baby potatoes, halved",
            "1 c. frozen peas",
            "1/4 c. chopped fresh parsley"
        ],
        "instructions": [
            "In a large Dutch oven or heavy pot over medium heat, heat oil. Add beef and cook, turning occasionally, until seared on all sides, about 10 minutes. Transfer beef to a plate.",
            "Coat the bottom of the pot with oil, if needed, and heat over medium-high heat. Cook onion, carrots, and celery, stirring, until softened, about 7 minutes; season with salt and pepper. Add garlic and tomato paste and cook, stirring, until garlic is fragrant and tomato paste has darkened, about 2 minutes. Return beef to pot.",
            "Add broth, wine, Worcestershire, thyme, and bay leaves. Bring to a boil, then reduce heat to medium-low and bring to a simmer; season with salt and pepper. Cover and simmer, stirring occasionally, until beef is tender, 30 to 45 minutes.",
            "Add potatoes and simmer, covered, until potatoes are tender, about 15 minutes.",
            "Remove bay leaves and thyme. Stir in peas and cook, stirring, until warmed through, about 2 minutes; season with salt and pepper.",
            "Divide stew among bowls. Top with parsley."
        ]
    },
    {
        "source": "https://www.muydelish.com/bistec-ranchero/",
        "recipeName": "BISTEC RANCHERO (RANCH-STYLE STEAK)",
        "ingredients": [
            "1 cup vegetable oil",
            "2 medium russet potatoes or 3 smaller potatoes thinly sliced",
            "1 lb steak beef thinly sliced",
            "1 garlic clove chopped",
            "1/2 medium white or yellow onion thinly sliced",
            "1 chile Anaheim, jalapeno, or serrano peppers (see note 1) remove seeds for a less spicy dish",
            "3 Roma tomatoes",
            "4 oz Tomato sauce",
            "1/2 tsp kosher salt or more to taste",
            "1/4 tsp black ground pepper or more to taste",
            "1 cup water or more if needed while cooking"
        ],
        "instructions": [
            "In a large skillet, add the oil and heat over medium-high heat. Cook the potatoes and spread them on the skillet to cook evenly. Cook for about 5 minutes or until cooked through and golden brown.",
            "Remove from the skillet and place on paper towels to drain oil. Season with salt & pepper to taste.",
            "In the same skillet, remove carefully most of the oil, only leaving about two tablespoons behind.",
            "Over medium heat, cook the beef & garlic until the meat is almost all cooked through, about 4 minutes.",
            "Add the onions and peppers and cook until onions start to soften, about 2 minutes. If this mixture is starting to dry, add about 1 cup of water.",
            "Add the tomatoes, tomato sauce, 1/2 teaspoon kosher salt, and 1/4 teaspoon ground black pepper. Cook for 2 minutes.",
            "Once the tomatoes are soft, add the potatoes and mix well. Cover the skillet with a lid and simmer on low heat for about 5 minutes to blend all of the flavors together.",
            "Taste and add salt & pepper to see if it needs more."
        ]
    },
    {
        "source": "https://www.beefitswhatsfordinner.com/recipes/recipe/55558/classic-beef-meatloaf",
        "recipeName": "MEATLOAF",
        "ingredients": [
            "1-1/2 pounds Ground Beef (93% lean or leaner)",
            "3/4 cup panko bread crumbs",
            "3/4 cup ketchup, divided",
            "1/2 cup minced onion",
            "1 egg",
            "1 tablespoon Worcestershire sauce",
            "2 teaspoons minced garlic",
            "1 teaspoon dried thyme",
            "3/4 teaspoon pepper",
            "1/2 teaspoon salt"
        ],
        "instructions": [
            "Preheat oven to 350F. Combine Ground Beef, bread crumbs, 1/2 cup ketchup, onion, egg, Worcestershire, garlic, thyme, pepper, and salt in a large bowl, mixing lightly but thoroughly. Shape beef into 8 x 4-inch loaf on rack in an aluminum foil-lined broiler pan.",
            "Place on the upper oven rack in a 350F oven. Bake 45 to 55 minutes until an instant-read thermometer inserted into the center registers 160°F. Brush with the remaining 1/4 cup ketchup during the last 10 minutes, if desired.",
            "Let stand for 10 minutes. Cut into slices."
        ]
    },
    {
        "source": "https://www.muydelish.com/milanesa/",
        "recipeName": "MILANESAS DE RES",
        "ingredients": [
            "1 pound thin steaks beef",
            "1 cup all-purpose flour",
            "3 large eggs",
            "2 cups bread crumbs or as needed",
            "2 cups avocado or canola oil or as needed",
            "Salt & pepper"
        ],
        "instructions": [
            "Put the steak between two sheets of plastic wrap. Use a flat meat mallet to pound it to 1/8 inch thick. Repeat with remaining meat.",
            "To begin, season the Milanesa steaks with salt and pepper.",
            "Into a large shallow bowl, add the flour.",
            "Into a large shallow bowl, crack 3 eggs, add 0.5 cup milk and beat with a fork until mixed well.",
            "In another shallow bowl, add the breadcrumbs and season with salt and black pepper.",
            "Dredge one piece of Milanesa steak in flour, coating lightly on all sides. Then put it into the eggs, coating it fully. Use a tong to handle the meat in the egg mixture to prevent your fingers from getting messy.",
            "Place it onto the breadcrumb mixture. Use your fingers to mound breadcrumbs on top of the meat then press down to adhere crumbs to the meat. Flip and repeat. Place meat on a large plate. Repeat with the rest of the meat pieces.",
            "In a large skillet, add enough oil to cover the bottom completely by about 0.5 inch. Heat skillet over medium until very hot and shimmering.",
            "Add two Milanesa steaks in a single layer and cook until brown, about 1-2 minutes. Flip and brown on the other side. Transfer to a paper plate lined with paper towels. Repeat this cooking step with the rest of the beef.",
            "Serve immediately while warm."
        ]
    },
    {
        "source": "https://houseofyumm.com/mexican-picadillo/",
        "recipeName": "PICADILLO",
        "ingredients": [
            "1 lb ground beef",
            "0.5 cup onion, diced",
            "1 green bell pepper, diced",
            "2 cups potato, peeled and diced",
            "4 cloves garlic, minced",
            "8 ounces tomato sauce",
            "1.5 cups beef broth",
            "1 tsp salt",
            "0.25 tsp ground black pepper",
            "1 tsp ground cumin",
            "1 tsp ground coriander",
            "1 bay leaf"
        ],
        "instructions": [
            "Heat a large skillet over medium heat, add ground beef. Cook over medium heat while breaking up the meat. Cook until mostly browned, drain grease, and return to heat.",
            "Add in diced onion, green bell pepper, and potatoes. Continue to cook over medium heat until onion and peppers are softened. Add garlic and cook an additional 30 seconds.",
            "Pour in tomato sauce and beef broth. Add in seasonings: salt, pepper, cumin, and coriander. Stir to combine. Add bay leaf.",
            "Bring the mixture to a simmer, cover, and let cook for 10 minutes.",
            "Remove the lid, stir, and continue cooking with the lid off for an additional 10 minutes or until potatoes are softened and most of the liquid is gone.",
            "Serve warm with flour tortillas and rice."
        ]
    },
    {
        "source": "https://www.tasteofhome.com/recipes/speedy-shepherd-s-pie/",
        "recipeName": "SHEPHERDS PIE",
        "ingredients": [
            "1-1/2 pounds ground beef",
            "1 medium onion, chopped",
            "2 garlic cloves, minced",
            "1/2 cup water",
            "1 envelope taco seasoning",
            "2 cups shredded cheddar cheese, divided",
            "3 cups leftover or refrigerated mashed potatoes, warmed"
        ],
        "instructions": [
            "Preheat broiler. In a large ovenproof skillet, cook beef, onion, and garlic over medium heat until beef is no longer pink, breaking up beef into crumbles; drain. Stir in water and taco seasoning; heat through. Stir in 1 cup cheese. Remove from heat.",
            "In a bowl, mix mashed potatoes and remaining cheese; spread over beef mixture. Broil 4-6 in. from heat 5-6 minutes or until the top is golden brown."
        ]
    },
    {
        "source": "https://addapinch.com/steak-fajitas-recipe/",
        "recipeName": "STEAK FAJITAS",
        "ingredients": [
            "2 pounds skirt, flank, sirloin, or hanger steak beef, sliced into 1/2 inch strips",
            "1 red pepper, deseeded and sliced into thin strips",
            "1 bell pepper, deseeded and sliced into thin strips",
            "1 medium onion, peeled and sliced into thin strips",
            "3 tablespoons olive oil",
            "1 tablespoon lime juice",
            "1/2 teaspoon chili powder",
            "1 teaspoon ground cumin",
            "Pinch cayenne pepper",
            "1/2 teaspoon Kosher salt",
            "1/2 teaspoon ground black pepper",
            "2 cloves garlic, minced",
            "6-8 tortillas, warmed"
        ],
        "instructions": [
            "Place the steak into a sealable bag. Place the peppers and onion into a separate sealable bag. Add the olive oil, lime juice, chili powder, ground cumin, cayenne pepper, salt, black pepper, and garlic to a jar with a screw top or tight-fitting lid. Shake until well combined. Pour 1/3 of the marinade over steak, 1/3 of marinade over vegetables, and reserve the remaining marinade in the jar for using when cooking the steak fajitas. Seal the bags tightly and refrigerate for one hour to overnight.",
            "When ready to cook, heat a large skillet over medium-high heat. Pour the vegetables into the skillet and cook until just tender-crisp, about 5 minutes. Remove the vegetables from the skillet to a plate and add steak strips to the same skillet. When the steak is cooked throughout (about 7-10 minutes), add vegetables back to the skillet along with the reserved marinade.",
            "Serve with warm tortillas and desired optional garnishes."
        ]
    },
    {
        "source": "https://www.recipetineats.com/butter-chicken/",
        "recipeName": "BUTTER CHICKEN",
        "ingredients": [
            "1/2 cup plain yoghurt, full fat",
            "1 tbsp lemon juice",
            "1 tsp turmeric powder",
            "2 tsp garam masala",
            "1/2 tsp chilli powder or cayenne pepper powder",
            "1 tsp ground cumin",
            "1 tbsp ginger, freshly grated",
            "2 cloves garlic, crushed",
            "1.5 lb / 750 g chicken thigh fillets, cut into bite-size pieces",
            "2 tbsp (30 g) ghee or butter OR 1 tbsp vegetable oil",
            "1 cup tomato passata (aka tomato puree)",
            "1 cup heavy / thickened cream",
            "1 tbsp sugar",
            "1 1/4 tsp salt"
        ],
        "instructions": [
            "Combine the Marinade ingredients with the chicken in a bowl. Cover and refrigerate overnight, or up to 24 hours (minimum 3 hrs).",
            "Heat the ghee (butter or oil) over high heat in a large fry pan. Take the chicken out of the Marinade but do not wipe or shake off the marinade from the chicken (but don’t pour the Marinade left in the bowl into the fry pan). Place chicken in the fry pan and cook for around 3 minutes, or until the chicken is white all over (it doesnt really brown because of the Marinade).",
            "Add the tomato passata, cream, sugar and salt. Also add any remaining marinade left in the bowl. Turn down to low and simmer for 20 minutes. Do a taste test to see if it needs more salt. Garnish with coriander/cilantro leaves if using. Serve with basmati rice."
        ]
    },
    {
        "source": "https://pinaenlacocina.com/basic-chicken-enchiladas-enchiladas-de-pollo/",
        "recipeName": "CHICKEN ENCHILADAS",
        "ingredients": [
            "3 boneless chicken breasts or 5 boneless thighs (2 pounds)",
            "5 cups of water",
            "Salt",
            "16 corn tortillas",
            "Avocado or canola oil",
            "8 oz cotija cheese, crumbled fine",
            "Shredded lettuce",
            "Thinly sliced onion",
            "Sliced tomato",
            "Sour Cream",
            "Avocado slices",
            "2 ancho chile peppers, stems and seeds removed",
            "8-9 guajillo chiles, stems and seeds removed",
            "4-6 chile de arbol peppers",
            "1 large Roma tomato, sliced in half",
            "1/2 white onion, quartered",
            "3 large cloves of garlic",
            "1/4 cup avocado or olive oil",
            "1 teaspoon dried oregano",
            "1 tsp cumin seeds",
            "1 tsp peppercorns",
            "3-4 teaspoons chicken bouillon",
            "4 cups chicken broth (from poaching the chicken)",
            "Salt to taste"
        ],
        "instructions": [
            "Add the chicken to a saucepan and cover with 5 cups of water. Season with salt, bring to a boil, reduce heat, and poach for 45 to 50 minutes or until tender and easy to pull apart with a fork. Remove chicken and shred while still warm, cover and set aside. Strain the broth and reserve for making enchilada sauce.",
            "Combine the dried chiles, tomato, onion, and garlic in a medium saucepan. Drizzle with 1 1/2 tablespoons of oil and heat to medium. Saute for 5 minutes, stirring often. Cover with 4 cups of broth. Bring to a boil, reduce heat and cook until tomatoes are tender and peppers are soft and start to turn red. Let sit for 10 minutes. Using tongs, transfer all the solids to a blender first. Carefully pour in all the broth from the pan. Add oregano, cumin, peppercorns, and bouillon. Pour in another 1- 1 1/2 cups of broth (if available). If not, use water. Blend on high until smooth, taste for salt.",
            "In the pan you cooked the peppers in, add 2 tablespoons of oil and preheat on medium for 2 minutes. Strain the sauce through a wire strainer directly into the pot with hot oil. Bring to a boil, reduce to a simmer and continue cooking for 15-20 minutes.",
            "For Family-Style: In a 13x9 pan, spread 1 cup of enchilada sauce evenly to cover the bottom of the pan, set aside. In a skillet, preheat 1/2 cup of oil to medium heat for 3-4 minutes. When oil is hot, fry the tortillas for 30 seconds per side, just to soften them. Stack onto a plate, cover with foil paper.",
            "Now you are ready to start building your enchiladas. Take one tortilla and fill with about 2 tablespoons of chicken, roll shut to resemble a flute. Serve and garnish with queso cotija, onion, avocado, cream, and fresh toppings."
        ]
    },
    {
        "source": "https://www.allrecipes.com/recipe/223042/chicken-parmesan/",
        "recipeName": "CHICKEN PARMESAN",
        "ingredients": [
            "4 skinless, boneless chicken breast halves",
            "Salt and freshly ground black pepper to taste",
            "2 large eggs",
            "1 cup panko bread crumbs, or more as needed",
            "3/4 cup grated Parmesan cheese, divided",
            "2 tablespoons all-purpose flour, or more if needed",
            "1/2 cup olive oil for frying, or as needed",
            "1/2 cup prepared tomato sauce",
            "1/4 cup fresh mozzarella, cut into small cubes",
            "1/4 cup chopped fresh basil",
            "1/2 cup grated provolone cheese",
            "2 teaspoons olive oil"
        ],
        "instructions": [
            "Preheat an oven to 450 degrees F (230 degrees C).",
            "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch.",
            "Season chicken thoroughly with salt and pepper. Using a sifter or strainer, sprinkle flour over chicken breasts, evenly coating both sides.",
            "Beat eggs in a shallow bowl and set aside.",
            "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.",
            "Dip a flour-coated chicken breast in beaten eggs. Transfer breast to the bread crumb mixture, pressing crumbs into both sides. Repeat for each breast. Let chicken rest for 10 to 15 minutes.",
            "Heat 1/2 inch olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken in the hot oil until golden, about 2 minutes per side. The chicken will finish cooking in the oven.",
            "Transfer chicken to a baking dish. Top each breast with 2 tablespoons tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle remaining Parmesan over top and drizzle each with 1/2 teaspoon olive oil.",
            "Bake in the preheated oven until cheese is browned and bubbly and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."
        ]
    },
    {
        "source": "https://www.bonappetit.com/recipe/chicken-piccata-2",
        "recipeName": "CHICKEN PICCATA",
        "ingredients": [
            "2 large skinless, boneless chicken breasts",
            "Kosher salt",
            "1/2 cup all-purpose flour",
            "3 Tbsp. extra-virgin olive oil, divided",
            "4 garlic cloves, smashed",
            "1/3 cup dry white wine",
            "1 Tbsp. drained capers, coarsely chopped",
            "4 Tbsp. unsalted butter, cut into pieces",
            "2 Tbsp. fresh lemon juice",
            "Chopped parsley and lemon wedges (for serving)"
        ],
        "instructions": [
            "Slice chicken breasts in half crosswise into 4 cutlets and lightly pound each piece between sheets of plastic wrap until an even thickness (about 1/2\" thick or less). Season lightly with salt. Place flour in a medium shallow bowl. Working one at a time, place cutlets in the bowl and toss to coat in flour. Knock off excess flour and transfer to a plate.",
            "Heat 2 Tbsp. oil in a large skillet over medium-high. Working in batches if needed to avoid overcrowding, pan-fry the chicken cutlets, without moving them, until deeply browned underneath, about 2 minutes. Turn over and cook on the other side just until the chicken is nearly cooked through, about 30 seconds. Transfer to a clean plate.",
            "Add garlic and the remaining 1 Tbsp. oil to the skillet and cook, stirring often and reducing heat if needed to keep garlic from scorching, until golden brown, about 2 minutes. Add wine and capers and cook, swirling the pan and scraping up any browned bits stuck to the bottom of the skillet, until the liquid is almost completely evaporated, about 3 minutes. Add 1/2 cup water, followed by the butter. Swirl the pan vigorously while the butter melts to help it form an emulsion with water, about 1 minute.",
            "Return chicken to the skillet and simmer until chicken is cooked through and the sauce is thick enough to coat a spoon, about 2 minutes. Remove from heat and stir lemon juice into the sauce; season with salt. Transfer chicken and sauce to a platter and top with parsley; serve with lemon wedges."
        ]
    },
    {
        "source": "https://www.allrecipes.com/recipe/8499/basic-chicken-salad/",
        "recipeName": "CHICKEN SALAD",
        "ingredients": [
            "1/2 cup blanched slivered almonds",
            "1/2 cup mayonnaise",
            "1 tablespoon lemon juice",
            "1/4 teaspoon ground black pepper",
            "2 cups chopped, cooked chicken meat",
            "1 stalk celery, chopped"
        ],
        "instructions": [
            "Place almonds in a frying pan. Toast over medium-high heat, shaking frequently. Watch carefully, as they burn easily.",
            "Mix together mayonnaise, lemon juice, and pepper in a medium bowl.",
            "Toss with chicken, toasted almonds, and celery."
        ]
    },
    {
        "source": "https://www.tasteofhome.com/recipes/crispy-fried-chicken/",
        "recipeName": "FRIED CHICKEN",
        "ingredients": [
            "4 cups all-purpose flour, divided",
            "2 tablespoons garlic salt",
            "1 tablespoon paprika",
            "3 teaspoons pepper, divided",
            "2-1/2 teaspoons poultry seasoning",
            "2 large eggs",
            "1-1/2 cups water",
            "1 teaspoon salt",
            "2 broiler/fryer chickens (3-1/2 to 4 pounds each), cut up",
            "Oil for deep-fat frying"
        ],
        "instructions": [
            "In a large shallow dish, combine 2-2/3 cups flour, garlic salt, paprika, 2-1/2 teaspoons pepper and poultry seasoning.",
            "In another shallow dish, beat eggs and 1-1/2 cups water; add salt and the remaining 1-1/3 cups flour and 1/2 teaspoon pepper.",
            "Dip chicken in egg mixture, then place in flour mixture, a few pieces at a time. Turn to coat.",
            "In a deep-fat fryer, heat oil to 375F. Fry chicken, several pieces at a time, until chicken is golden brown and juices run clear, 7-8 minutes on each side. Drain on paper towels."
        ]
    },
    {
        "source": "https://www.delish.com/cooking/recipe-ideas/a54115/garlicky-greek-chicken-recipe/",
        "recipeName": "GREEK CHICKEN",
        "ingredients": [
            "3 tbsp. extra-virgin olive oil, divided",
            "Juice of 1 lemon",
            "3 cloves garlic, minced",
            "1 tsp. dried oregano",
            "1 lb. chicken thighs",
            "kosher salt",
            "Freshly ground black pepper",
            "1/2 lb. asparagus, ends removed",
            "1 zucchini, sliced into half moons",
            "1 lemon, sliced"
        ],
        "instructions": [
            "In a large bowl, combine 2 tablespoons olive oil, lemon juice, garlic, and oregano. Whisk until combined then add chicken thighs and toss to coat. Cover bowl with plastic wrap and let marinate in the refrigerator for at least 15 minutes and up to 2 hours.",
            "When you re ready to cook the chicken, preheat oven to 425F. In a large ovenproof skillet over medium-high heat, heat remaining tablespoon olive oil. Season both sides of marinated chicken with salt and pepper, then add chicken skin-side down and pour in the remaining marinade.",
            "Sear until the skin becomes golden and crispy, about 10 minutes. Flip chicken and add asparagus, zucchini, and lemons to the skillet.",
            "Transfer pan to oven and cook until the chicken is cooked through and the vegetables are tender, about 15 minutes."
        ]
    },
    {
        "source": "https://www.budgetbytes.com/easy-lemon-pepper-chicken/",
        "recipeName": "LEMON PEPPER CHICKEN",
        "ingredients": [
            "2 boneless skinless chicken breasts",
            "2 Tbsp all-purpose flour",
            "1 Tbsp lemon pepper seasoning",
            "1 Tbsp cooking oil",
            "1 clove garlic, minced",
            "1/2 cup chicken broth",
            "1 Tbsp butter",
            "1 tsp lemon juice",
            "1 Tbsp chopped fresh parsley",
            "1/8 tsp freshly cracked black pepper"
        ],
        "instructions": [
            "Use a sharp knife to carefully fillet the chicken breasts into two thinner pieces (or use thin-cut chicken breasts).",
            "Combine the flour and lemon pepper seasoning in a bowl. Sprinkle the mixture over both sides of the chicken breast pieces and then rub it in until the chicken is fully coated.",
            "Heat the cooking oil in a large skillet over medium. When the skillet and oil are very hot, add the chicken and cook on each side until golden brown (about 5 minutes per side). Remove the cooked chicken to a clean plate and cover to keep warm.",
            "Add the butter and minced garlic to the skillet and sauté for about one minute.",
            "Add the chicken broth to the skillet and whisk to dissolve all the browned bits from the bottom of the skillet. Add the lemon juice and allow the sauce to simmer in the skillet for 3-5 minutes, or until it has reduced slightly. Taste the sauce and add salt if needed.",
            "Finally, return the chicken to the skillet and spoon the sauce over top. Allow the chicken to heat through. Season with a little freshly cracked pepper and fresh chopped parsley (optional), then serve."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/rachael-ray/mac-and-cheddar-cheese-with-chicken-and-broccoli-\nrecipe2-1944272",
        "recipeName": "MAC AND CHEESE WITH CHICKEN AND BROCCOLI",
        "ingredients": [
            "2 tablespoons extra-virgin olive oil",
            "1 pound chicken breast tenders, chopped",
            "Salt and pepper",
            "1 small onion, chopped",
            "1 pound macaroni elbows or cavatapi corkscrew shaped pasta twists",
            "2 1/2 cups raw broccoli florets, available packaged in produce department",
            "3 tablespoons butter",
            "3 tablespoons all-purpose flour",
            "1/2 teaspoon cayenne pepper",
            "1 teaspoon paprika",
            "3 cups whole milk",
            "1 cup chicken stock",
            "3 cups yellow sharp Cheddar",
            "1 tablespoon prepared Dijon mustard"
        ],
        "instructions": [
            "Place a pot of water on to boil for macaroni.",
            "Heat a medium pan over medium to medium high heat. Add extra-virgin olive oil and chicken and season with salt and pepper. Saute a couple of minutes then add onion and cook another 5 to 7 minutes until onions are tender and chicken is cooked through. Turn off heat and reserve.",
            "To boiling pasta water, add pasta and salt to season the cooking water. Cook 5 minutes, then add broccoli and cook 3 minutes more or until pasta is cooked to al dente and florets are just tender.",
            "While pasta cooks, heat a medium sauce pot over medium heat. Add butter and melt, then add flour, cayenne and paprika and whisk together over heat until roux bubbles then cook a minute more. Whisk in milk and stock and raise heat a little to bring sauce to a quick boil. Simmer sauce to thicken about 5 minutes.",
            "Drain macaroni or pasta and broccoli florets. Add back to pot and add chicken to the pasta and broccoli.",
            "Add cheese to milk sauce and stir to melt it in, about a minute or so. Stir in mustard and season sauce with salt and pepper. Pour sauce over chicken and broccoli and cooked pasta and stir to combine. Adjust seasonings, transfer to a large serving platter and serve."
        ]
    },
    {
        "source": "https://www.recipetineats.com/mushroom-stuffed-chicken-breast/",
        "recipeName": "MUSHROOM STUFFED CHICKEN BREAST",
        "ingredients": [
            "2 x 220g / 7oz chicken breast , skinless boneless",
            "3/4 tsp salt",
            "1/4 tsp pepper",
            "30g / 2 tbsp unsalted butter",
            "200g / 7 oz mushrooms , sliced 3mm (1/8in) thick (~2 heaped cups)",
            "2 garlic cloves , finely minced",
            "1/2 tsp thyme leaves",
            "2 cups baby spinach",
            "80 g / 3oz mozzarella , sliced (or other melting cheese)",
            "1 tbsp olive oil"
        ],
        "instructions": [
            "Preheat oven to 200C/390F (180F fan).",
            "Cut pockets into each chicken breast, being sure not to cut all the way through. Cut on the side with the fold in the meat, to keep the smooth side intact.",
            "Season the inside and outside of the chicken with half the salt and pepper.",
            "Mushroom filling: Melt butter in a heavy based oven proof skillet over high heat. Add mushrooms and cook for 3 minutes until they start to turn pretty golden. Then add garlic, thyme, remaining salt and pepper and continue cooking for a further 2 minutes until mushrooms are nice and golden.",
            "Add baby spinach: Add baby spinach and stir until wilted about 30 seconds.",
            "Stuff mushroom mixture into the pocket of each chicken, then top with cheese.",
            "Seal with toothpicks as best you can  it doesnt need to be fully sealed like we do with Chicken Kiev. Just mostly sealed.",
            "Sear chicken: Give the pan a quick wipe with paper towels. Heat oil over medium high heat. Sear each side of the chicken breast for 1 1/2 minutes until golden.",
            "Bake 15 minutes: Transfer the skillet to the oven and bake for 15 minutes, or until the internal temperature of the chicken is 65C/149F (chicken flesh, not the mushroom filling).",
            "Rest 5 minutes: Remove from tray onto a plate, loosely cover with foil and rest for 5 minutes."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/tyler-florence/fish-and-chips-recipe-1947515",
        "recipeName": "FISH AND CHIPS",
        "ingredients": [
            "Vegetable oil, for deep frying",
            "3 large russet potatoes",
            "2 cups rice flour",
            "1 tablespoon baking powder",
            "3 teaspoons salt, plus more for seasoning",
            "1/2 teaspoon freshly ground black pepper, plus more for seasoning",
            "1 (12-ounce) can soda water",
            "1 large egg, lightly beaten",
            "2 (8-ounce) cod fish or haddock fillets, cut in 1/2 on an angle",
            "1/2 cup rice flour, for dredging",
            "Malt vinegar, for serving"
        ],
        "instructions": [
            "Heat 3 inches of the oil in a deep fryer to 325 degrees F. Alternatively, use a deep heavy skillet.",
            "Peel the potatoes and cut them into chips (that is, fries) about the size of your index finger. Put the potatoes in a fryer basket and lower into the oil. Fry the chips for 2 to 3 minutes - they should not be crisp or fully cooked at this point. Remove the chips to a paper towel-lined platter to drain.",
            "Crank the oil temperature up to 375 degrees F. In a large mixing bowl, combine the flour, baking powder, salt and pepper. Combine soda water and egg and pour into the flour mixture. Whisk to a smooth batter. Spread the rice flour on a plate. Dredge the fish pieces in the rice flour and then dip them into the batter, letting the excess drip off.",
            "Put the chips in the bottom of the fryer basket and carefully submerge in the hot oil. Carefully lower the battered fish into the bubbling oil on top of the chips. Fry the fish and chips for 4 to 5 minutes until crispy and brown. Remove the basket and drain the fish and chips on paper towels - season lightly with salt. Serve wrapped in a newspaper cone with malt vinegar and/or tartar sauce."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/alton-brown/fish-taco-recipe-1921022",
        "recipeName": "FISH TACO",
        "ingredients": [
            "3 cloves garlic",
            "1 cup packed cilantro leaves",
            "2 limes, zested",
            "2 teaspoons ground cumin",
            "1 1/2 teaspoons kosher salt",
            "1 teaspoon freshly ground black pepper",
            "1/4 cup tequila",
            "1 pound tilapia fillets fish",
            "1 tablespoon olive oil",
            "8 corn tortillas",
            "Sour Cream",
            "Shredded red cabbage",
            "Lime wedges"
        ],
        "instructions": [
            "Put the garlic, cilantro, lime zest, cumin, salt, and pepper in a small food processor bowl and pulse until combined, approximately 20 seconds. With the processor running, add the tequila. Put the tilapia fillets into a 1 gallon resealable bag, add the garlic mixture and move around to coat each fillet. Set aside at room temperature for 15 to 20 minutes.",
            "Heat an electric nonstick griddle to 375 degrees F.",
            "Brush the griddle with the olive oil. Cook the fillets until just cooked through and opaque about 3 to 4 minutes per side. Cut into strips and serve in warm tortillas with cream, shredded red cabbage and lime wedges."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/ina-garten/herb-roasted-fish-recipe-2120222",
        "recipeName": "HERB-ROASTED FISH",
        "ingredients": [
            "8 ounces boneless fish fillet, such as snapper or cod",
            "1/2 teaspoon kosher salt",
            "1/4 teaspoon freshly ground black pepper",
            "1 tablespoon freshly squeezed lemon juice",
            "1 tablespoon good olive oil",
            "1 large sprig fresh thyme",
            "2 Cerignola or other large green olives with pits",
            "Extra-large egg"
        ],
        "instructions": [
            "Preheat the oven to 400 degrees.",
            "Place the fish fillet on a piece of parchment paper and sprinkle it with the salt and pepper. Drizzle the lemon juice and olive oil over the top of the fillet. Lay the thyme on top and place the olives next to the fillet.",
            "Beat the egg together with 1 tablespoon of water for an egg wash. Brush the egg wash around the edge of the parchment paper and fold it in half. Carefully fold the edge of the parchment paper under and around the fish to make a package. Place the package on a sheet pan and cook for 12 to 15 minutes, until the fish is cooked through. Serve hot in the parchment paper."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/pan-fried-fish-recipe-1910675",
        "recipeName": "PAN FRIED FISH",
        "ingredients": [
            "1 large or two small skin-on fish fillets, about 8 ounces (rainbow trout, small salmon, brown trout)",
            "Kosher salt",
            "Ground black pepper",
            "Flour for dredging",
            "2 tablespoons Canola oil",
            "3 tablespoons butter",
            "1 tablespoon capers, drained",
            "1 lemon, juiced"
        ],
        "instructions": [
            "Heat a heavy pan over medium-high heat.",
            "Season fish on the meat side with salt and pepper. Lightly dredge fish in flour and shake off excess. When the pan is good and hot, add Canola oil followed immediately by 1 tablespoon butter. As soon as foaming subsides, place fish in the pan with the skin side down. Jiggle the pan for the first 10 seconds to keep the fish from sticking. Cook until a golden crust forms on the meat. Carefully turn the fish away from you and again jiggle the pan for the first few seconds. Cook until the skin turns golden brown. Remove to a warm plate.",
            "Pour out the cooking fat, add the remaining butter, and quickly fry the capers. Remove the pan from the heat, add lemon juice to the pan and swirl. Pour the sauce over the fish and serve."
        ]
    },
    {
        "source": "https://www.kiwilimon.com/receta/pescados-y-mariscos/salmon/salmon-empapelado-con-esparragos",
        "recipeName": "SALMON WITH ASPARAGUS",
        "ingredients": [
            "2 bunches of asparagus",
            "6 tablespoons olive oil (2 for the asparagus and 4 for the salmon)",
            "4 salmon fish fillets",
            "1 teaspoon salt (half for the asparagus and half for the salmon)",
            "1/2 teaspoon pepper (half for the asparagus and half for the salmon)",
            "2 tablespoons lemon juice (yellow)",
            "2 cloves garlic, finely chopped",
            "2 tablespoons fresh cilantro, finely chopped",
            "3 yellow lemons, sliced",
            "4 sprigs of dill"
        ],
        "instructions": [
            "Preheat the oven to 200C.",
            "Place the asparagus in a bowl, add two tablespoons of olive oil, a pinch of salt, and a pinch of pepper. Mix well and set aside.",
            "For the salmon, brush each fillet with the remaining olive oil and season with salt and pepper on both sides. Set aside.",
            "In a small bowl, mix together the honey, lime juice, garlic, and cilantro. Set aside.",
            "Place the asparagus on four pieces of aluminum foil, top with the salmon fillets, and glaze each salmon with the cilantro mixture.",
            "Place 3 slices of lemon on top of each fillet and a sprig of dill, close the foil to make 4 little packages to prevent contents from leaking out.",
            "Bake for 25 minutes or until the salmon is cooked. Serve."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/food-network-kitchen/broccoli-and-cheddar-frittata-5486442",
        "recipeName": "BROCCOLI AND CHEDDAR FRITTATA",
        "ingredients": [
            "10 large eggs",
            "1/4 cup milk",
            "Kosher salt and freshly ground black pepper",
            "2 cups chopped cooked broccoli",
            "1 cup shredded Cheddar",
            "1/4 teaspoon cayenne",
            "1 tablespoon extra-virgin olive oil",
            "Snipped fresh chives, for serving"
        ],
        "instructions": [
            "Preheat the oven to 400 degrees F.",
            "Whisk together the eggs, milk, 3/4 teaspoon salt, and a few grinds of pepper in a large bowl. Stir in the broccoli, Cheddar, and cayenne.",
            "Heat the oil in a medium ovenproof nonstick skillet over medium-high heat. Add the egg mixture and cook until the edges start to set, about 2 minutes.",
            "Transfer to the oven and bake until the center is set, 15 to 20 minutes. Let rest for 5 minutes before sliding carefully onto a cutting board.",
            "Cut into wedges and transfer to serving plates. Sprinkle with chives. Serve with lettuce leaves and tomato wedges if using."
        ]
    },
    {
        "source": "https://www.allrecipes.com/chilaquiles-with-homemade-tomato-sauce-recipe-8403873",
        "recipeName": "CHILAQUILES",
        "ingredients": [
            "16 (6-inch) corn tortillas",
            "2 cups oil, or as needed for frying",
            "1 teaspoon kosher salt, plus more to taste",
            "2 cups water",
            "2 guajillo chiles, stems and seeds removed",
            "1 white onion, quartered",
            "3 cloves garlic",
            "4 ripe tomatoes, quartered",
            "2 jalapenos, halved",
            "1 teaspoon ground cumin",
            "1 (14.5 ounce) can fire-roasted diced tomatoes",
            "2 teaspoons red wine vinegar",
            "1 tablespoon olive oil",
            "1/2 cup crumbled queso fresco",
            "1 avocado, sliced",
            "1/4 cup sour cream"
        ],
        "instructions": [
            "Cut each tortilla into 8 wedges. Heat oil to 350 degrees F (180 degrees C) in a large pot over medium-high heat. Add tortillas to fry in batches, taking care not to crowd the pot. Cook, stirring constantly until golden and crispy, 1 to 2 minutes. Remove from oil with a slotted spoon and drain well on paper towels. Sprinkle with salt to taste immediately. Repeat with remaining tortillas.",
            "In a large saucepan, add water and guajillo chiles. Bring mixture to a boil over high heat, reduce temperature, and simmer until chiles soften, about 5 minutes. Return heat to medium-high and add onion, garlic, tomatoes, jalapenos, cumin, and 1 teaspoon salt. Cook, stirring occasionally, until onion has softened, about 10 minutes.",
            "Remove from heat and carefully pour mixture into a blender or food processor. Add canned tomatoes, vinegar, and olive oil. Remove center from the lid to allow steam to escape and blend until smooth, about 1 minute, scraping down the sides as necessary.",
            "In a large skillet over medium heat, add 1 cup of sauce and bring to a simmer, stirring often. Add 1/4 of the chips and cook about 3 minutes, stirring frequently, until the chips are well-coated in sauce and fully heated through. Place chips on a plate."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/ina-garten/garlic-roasted-potatoes-recipe-1913067",
        "recipeName": "GARLIC ROASTED POTATOES",
        "ingredients": [
            "3 pounds small red or white potatoes",
            "1/4 cup good olive oil",
            "1 1/2 teaspoons kosher salt",
            "1 teaspoon freshly ground black pepper",
            "2 tablespoons minced garlic (6 cloves)",
            "2 tablespoons minced fresh parsley"
        ],
        "instructions": [
            "Preheat the oven to 400 degrees F.",
            "Cut the potatoes in half or quarters and place in a bowl with the olive oil, salt, pepper, and garlic; toss until the potatoes are well coated. Transfer the potatoes to a sheet pan and spread out into 1 layer. Roast in the oven for 45 minutes to 1 hour or until browned and crisp. Flip twice with a spatula during cooking in order to ensure even browning.",
            "Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/ina-garten/roasted-tomato-basil-soup-recipe-1940376",
        "recipeName": "ROASTED TOMATO BASIL SOUP",
        "ingredients": [
            "3 pounds ripe plum tomatoes, cut in half lengthwise",
            "1/4 cup plus 2 tablespoons good olive oil",
            "1 tablespoon kosher salt",
            "1 1/2 teaspoons freshly ground black pepper",
            "2 cups chopped yellow onions (2 onions)",
            "6 garlic cloves, minced",
            "2 tablespoons unsalted butter",
            "1/4 teaspoon crushed red pepper flakes",
            "1 (28-ounce) canned plum tomatoes, with their juice",
            "4 cups fresh basil leaves, packed",
            "1 teaspoon fresh thyme leaves",
            "1 quart chicken stock or water"
        ],
        "instructions": [
            "Preheat the oven to 400 degrees F. Toss together the tomatoes, 1/4 cup olive oil, salt, and pepper. Spread the tomatoes in 1 layer on a baking sheet and roast for 45 minutes.",
            "In an 8-quart stockpot over medium heat, saute the onions and garlic with 2 tablespoons of olive oil, the butter, and red pepper flakes for 10 minutes, until the onions start to brown. Add the canned tomatoes, basil, thyme, and chicken stock. Add the oven-roasted tomatoes, including the liquid on the baking sheet. Bring to a boil and simmer uncovered for 40 minutes. Pass through a food mill fitted with the coarsest blade. Taste for seasonings. Serve hot or cold."
        ]
    },
    {
        "source": "https://www.foodnetwork.com/recipes/food-network-kitchen/broccoli-gratin-recipe-1928220",
        "recipeName": "BROCCOLI GRATIN",
        "ingredients": [
            "1/4 cup unsalted butter, plus more for the baking dish",
            "3 tablespoons all-purpose flour",
            "1 1/2 cups whole milk",
            "1 1/2 teaspoons kosher salt, plus more as needed",
            "Pinch freshly grated nutmeg",
            "Freshly ground black pepper",
            "2 pounds broccoli (about 4 heads), cut into small florets (about 8 cups)",
            "1 cup grated sharp Cheddar (about 4 ounces)",
            "1/2 cup fresh bread crumbs"
        ],
        "instructions": [
            "Place a rack in the middle of the oven and preheat to 450 degrees F. Butter an 8-by-8-by-2-inch baking dish or an 8-cup gratin dish.",
            "Melt 3 tablespoons of the butter in a medium saucepan over medium heat. Whisk in the flour until smooth. Cook, stirring, for 1 minute. Add the milk, 1 1/2 teaspoons salt, and nutmeg and bring to a boil while whisking constantly. Lower the heat and simmer, stirring occasionally, until the white sauce is thickened, about 10 minutes. Season with pepper. Remove from the heat.",
            "Meanwhile, bring about 1-inch of water to a boil in a large saucepan and set up a collapsible steamer on top. Put the broccoli in the steamer and season with salt. Cover, and steam until crisp-tender, about 5 minutes. Put the broccoli in the prepared dish, sprinkle with half of the cheese and pour on the sauce. Cover with the remaining cheese.",
            "Melt the remaining 1 tablespoon butter in a medium skillet over medium-high heat. Add the bread crumbs and cook, stirring, until lightly browned, about 2 minutes. Cover the gratin with the bread crumbs. Bake until lightly browned and bubbly, about 20 minutes. Serve immediately."
        ]
    }
];

let selectedIngredients = [];

/*---------------------------------------
  Load function      
-----------------------------------------*/

document.addEventListener("DOMContentLoaded", function() {
    displayRecipeList(recipes);
});

/*---------------------------------------
  Image functionality        
-----------------------------------------*/

document.querySelectorAll('img[alt]').forEach(img => {
    img.addEventListener('click', handleIngredientClick);
});

function handleIngredientClick() {
    const ingredient = this.getAttribute('alt').toLowerCase();
    selectedIngredients.push(ingredient);
    const filteredRecipes = recipes.filter(recipe => 
        selectedIngredients.every(ing => 
            recipe.ingredients.some(i => i.toLowerCase().includes(ing))
        )
    );
    displayRecipeList(filteredRecipes);

    // Turn the clicked image gray
    this.style.filter = 'grayscale(100%)';

    // Remove the first click event listener and add the second one
    this.removeEventListener('click', handleIngredientClick);
    this.addEventListener('click', handleDeselectedIngredientClick);
}

function handleDeselectedIngredientClick() {
    const ingredient = this.getAttribute('alt').toLowerCase();
    selectedIngredients = selectedIngredients.filter(ing => ing !== ingredient);
    const filteredRecipes = recipes.filter(recipe => 
        selectedIngredients.every(ing => 
            recipe.ingredients.some(i => i.toLowerCase().includes(ing))
        )
    );
    displayRecipeList(filteredRecipes);

    // Reset the image style
    this.style.filter = '';

    // Remove the second click event listener and re-add the first one
    this.removeEventListener('click', handleDeselectedIngredientClick);
    this.addEventListener('click', handleIngredientClick);
}

/*---------------------------------------
  List functionality      
-----------------------------------------*/

function displayRecipeList(recipes) {
    const list = document.getElementById('recipeList');
    list.innerHTML = ''; // Clear the list

    recipes.forEach((recipe, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = recipe.recipeName;
        listItem.className = 'list-group-item';
        listItem.setAttribute('data-index', index); // Set a data attribute for identifying the recipe

        // Add click event listener to each list item
        listItem.addEventListener('click', function() {
            displayRecipeDetails(recipe, recipes);
        });

        list.appendChild(listItem);
    });
}

function displayRecipeDetails(recipe) {
    const list = document.getElementById('recipeList');
    list.innerHTML = ''; // Clear the list

    // Create a back button
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to list';
    backButton.addEventListener('click', function() {
        selectedIngredients = []; // Clear the selected ingredients
        displayRecipeList(recipes);

        // Reset image styles and re-add click event listener
        document.querySelectorAll('img[alt]').forEach(img => {
            img.style.filter = '';
            img.addEventListener('click', handleIngredientClick);
        });
    });
    list.appendChild(backButton);

    // Create elements to display recipe details
    const title = document.createElement('h3');
    title.textContent = recipe.recipeName;

    const sourceHeader = document.createElement('h4');
    sourceHeader.textContent = 'Source:';

    const source = document.createElement('a');
    source.href = recipe.source;
    source.innerHTML = '' + recipe.source;
    source.target = '_blank';

    const ingredientsHeader = document.createElement('h4');
    ingredientsHeader.textContent = 'Ingredients:';

    const ingredientsList = document.createElement('ul');
    recipe.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredient;
        ingredientsList.appendChild(ingredientItem);
    });

    const instructionsHeader = document.createElement('h4');
    instructionsHeader.textContent = 'Instructions:';

    const instructionsList = document.createElement('ol');
    recipe.instructions.forEach(instruction => {
        const instructionItem = document.createElement('li');
        instructionItem.textContent = instruction;
        instructionsList.appendChild(instructionItem); 
    });

    // Append the details to the list
    list.appendChild(title);
    list.appendChild(sourceHeader);
    list.appendChild(source);
    list.appendChild(ingredientsHeader);
    list.appendChild(ingredientsList);
    list.appendChild(instructionsHeader);
    list.appendChild(instructionsList);
}

/*---------------------------------------
  Search functionality      
-----------------------------------------*/

let keywords = [];

const keywordInput = document.getElementById('keyword');
keywordInput.addEventListener('input', function() {
    // Remove the old keywords from the selectedIngredients array
    keywords.forEach(kw => {
        selectedIngredients = selectedIngredients.filter(ing => ing !== kw);
    });

    // Add the new keywords to the selectedIngredients array
    keywords = this.value.toLowerCase().split(/[\s,]+/);
    selectedIngredients = [...selectedIngredients, ...keywords];

    const filteredRecipes = recipes.filter(recipe => 
        selectedIngredients.every(ing => 
            recipe.recipeName.toLowerCase().includes(ing) ||
            recipe.ingredients.some(i => i.toLowerCase().includes(ing))
        )
    );
    displayRecipeList(filteredRecipes);
});
