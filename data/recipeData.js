const recipes = [
  {
    recipeName: "Garden Salad",
    image:
      " https://static.toiimg.com/thumb/84546568.cms?imgsize=207429&width=800&height=800",
    type: "Salad",
    ingredients: [
      "Mixed salad greens (e.g., lettuce, spinach, arugula)",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Balsamic vinaigrette dressing (or dressing of your choice)",
      "Salt and pepper to taste",
    ],
    procedure:
      "Wash and thoroughly dry the salad greens. Place them in a large mixing bowl. Cut the cherry tomatoes in half and add them to the bowl. Slice the cucumber and thinly slice the red onion, then add them to the bowl. Drizzle the balsamic vinaigrette dressing over the salad. Use more or less to suit your taste preference. Toss all the ingredients gently until they are evenly coated with the dressing. Season with salt and pepper to taste. Serve immediately and enjoy!",
  },
  {
    recipeName: "Fruit Salad",
    image:
      "https://static01.nyt.com/images/2023/07/11/multimedia/as-fruit-salad-bjcv/as-fruit-salad-bjcv-mediumSquareAt3X-v2.jpg",
    type: "Salad",
    ingredients: [
      "Assorted fruits (such as apples, bananas, oranges, grapes, berries, pineapple, etc.)",
      "Optional additions (honey, yogurt, mint leaves, etc.)",
      "Fresh lemon juice (optional, for preventing browning of fruits like apples and bananas)",
    ],
    procedure:
      "Wash and prepare the fruits: Peel, core, and chop or slice the fruits as needed. If using fruits like apples or bananas that tend to brown quickly, you can toss them in a little lemon juice to prevent discoloration. Combine the fruits: Place the prepared fruits in a large mixing bowl. Sweeten (optional): If you'd like to add sweetness to your fruit salad, you can drizzle honey or another sweetener of your choice over the fruits. Keep in mind that some fruits are naturally sweet, so taste as you go to avoid making it overly sweet. Gently toss: Use a large spoon or spatula to gently toss the fruits together, ensuring they are evenly mixed. Serve: Scoop the fruit salad into individual bowls or serve it in a larger dish. Variations: You can get creative with your fruit salad by adding other ingredients like nuts, seeds, coconut flakes, or even a drizzle of yogurt or whipped cream for added texture and flavor. Some people like to add a splash of citrus juice (like orange juice) for extra flavor and to help keep the fruits fresh.",
  },
  {
    recipeName: "Avacado Chicken Salad",
    image:
      "https://saltandbaker.com/wp-content/uploads/2022/02/avocado-chicken-salad-recipe-square.jpg",
    type: "Salad",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "2 ripe avocados",
      "1/4 cup red onion, finely chopped",
      "1/4 cup celery, finely chopped",
      "2 tablespoons fresh cilantro, chopped",
      "Juice of 1 lime",
      "Salt and pepper to taste",
    ],
    procedure:
      "1. Cook the chicken: Season the chicken breasts with salt and pepper. Grill or cook in a skillet over medium heat until fully cooked (about 6-8 minutes per side or until internal temperature reaches 165°F). Allow to cool, then dice into bite-sized pieces. 2. Prepare the avocados: Cut in half, remove pit, and dice the flesh. 3. Combine ingredients: In a large bowl, combine diced chicken, diced avocados, red onion, celery, cilantro, and any optional additions. 4. Add lime juice and season: Squeeze lime juice over mixture. Season with additional salt and pepper to taste. 5. Mix gently: Toss ingredients together gently, being careful not to mash avocados. 6. Serve: Serve on its own, with lettuce, as a sandwich filling, or in a wrap.",
  },
  {
    recipeName: "Masala Dosa",
    image: " https://static.toiimg.com/photo/65164556.cms",
    type: "Breakfast",
    ingredients: [
      "1 cup rice (preferably parboiled rice)",
      "1/4 cup urad dal (black gram)",
      "1/2 teaspoon fenugreek seeds (optional)",
      "Water for soaking and grinding",
      "Salt to taste",
      "Oil or ghee for cooking the dosas",
    ],
    procedure:
      "1. Cook the chicken: Season the chicken breasts with salt and pepper. Grill or cook in a skillet over medium heat until fully cooked (about 6-8 minutes per side or until internal temperature reaches 165°F). Allow to cool, then dice into bite-sized pieces. 2. Prepare the avocados: Cut in half, remove pit, and dice the flesh. 3. Combine ingredients: In a large bowl, combine diced chicken, diced avocados, red onion, celery, cilantro, and any optional additions. 4. Add lime juice and season: Squeeze lime juice over mixture. Season with additional salt and pepper to taste. 5. Mix gently: Toss ingredients together gently, being careful not to mash avocados. 6. Serve: Serve on its own, with lettuce, as a sandwich filling, or in a wrap.",
  },
  {
    recipeName: "Avacado Toast",
    image:
      " https://www.eatingwell.com/thmb/CTSAuY2CRbo0Ivw4wbfIydhy7Qw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1807w-avocado-toast-recipe-8029771-2000-aefaa92c11e74e80b0bfc15788a61465.jpg",
    type: "Breakfast",
    ingredients: [
      "1 ripe avocado",
      "2 slices of bread (common choices include whole wheat, sourdough, or multigrain)",
      "Salt and pepper to taste",
      "Optional toppings (e.g., cherry tomatoes, red pepper flakes, poached or fried egg, feta cheese, arugula, radishes, lime juice, etc.)",
    ],
    procedure:
      "1. Cook the chicken: Season the chicken breasts with salt and pepper. Grill or cook in a skillet over medium heat until fully cooked (about 6-8 minutes per side or until internal temperature reaches 165°F). Allow to cool, then dice into bite-sized pieces. 2. Prepare the avocados: Cut in half, remove pit, and dice the flesh. 3. Combine ingredients: In a large bowl, combine diced chicken, diced avocados, red onion, celery, cilantro, and any optional additions. 4. Add lime juice and season: Squeeze lime juice over mixture. Season with additional salt and pepper to taste. 5. Mix gently: Toss ingredients together gently, being careful not to mash avocados. 6. Serve: Serve on its own, with lettuce, as a sandwich filling, or in a wrap.",
  },
  {
    recipeName: "Omelette",
    image:
      " https://media.istockphoto.com/id/155377745/photo/a-folded-egg-omelets-filled-with-chopped-ham-and-vegetables.jpg?s=612x612&w=0&k=20&c=whRkpdk4GE2QLNPas2Sa3477DvWeWAjagLfxGZXh_Ck=",
    type: "Breakfast",
    ingredients: [
      "Eggs (usually 2-3 per omelette)",
      "Salt and pepper to taste",
      "Fillings of your choice (e.g., cheese, vegetables, ham, etc.)",
      "Butter or oil for cooking",
    ],
    procedure:
      "1. Prepare Fillings: Chop or prepare any fillings you'd like to add to your omelette (e.g., diced vegetables, grated cheese, cooked meats, etc.). Whisk Eggs: Crack the eggs into a bowl and whisk them until the yolks and whites are well combined. Add a pinch of salt and pepper to taste. Preheat Pan: Heat a non-stick skillet over medium heat. Add a small amount of butter or oil to coat the bottom of the pan. Pour and Cook Eggs: Pour the whisked eggs into the pan. Let them cook for about a minute without stirring. Add Fillings: Add your chosen fillings to one half of the omelette. Fold and Serve: Once the eggs are mostly set but still slightly runny on top, use a spatula to carefully fold the omelette in half. Cook for another minute or so until it reaches your desired level of doneness. Slide Onto Plate: Carefully slide the omelette out of the pan onto a plate. Serve: Garnish with any additional toppings you like, such as herbs or salsa, and serve hot. Remember, omelettes are highly customizable, so feel free to experiment with different fillings and seasonings to create your perfect breakfast!",
  },
  {
    recipeName: "Butter Chicken",
    image:
      " https://static.toiimg.com/thumb/53205522.cms?imgsize=302803&width=800&height=800",
    type: "Main Course (Veg & NonVeg)",
    ingredients: [
      "For the Chicken Marinade:",
      "500 grams boneless chicken, cut into bite-sized pieces",
      "1 cup yogurt",
      "1 tablespoon ginger garlic paste",
      "1 tablespoon red chili powder",
      "1 teaspoon turmeric powder",
      "Salt to taste",

      "For the Sauce:",
      "2 tablespoons butter",
      "1 tablespoon oil",
      "1 onion, finely chopped",
      "1 tablespoon ginger garlic paste",
      "1 teaspoon red chili powder (adjust to taste)",
      "1 teaspoon garam masala",
      "1 teaspoon coriander powder",
      "1 teaspoon cumin powder",
      "1 cup tomato puree",
      "1/2 cup heavy cream",
      "Salt to taste",
      "Sugar (optional, to balance flavors)",
    ],
    procedure:
      "Marinate the Chicken: In a bowl, mix together yogurt, ginger garlic paste, red chili powder, turmeric powder, and salt. Add the chicken pieces and marinate for at least 2 hours (overnight for best results). Cook the Chicken: Preheat the oven to 200°C (400°F). Thread the marinated chicken onto skewers and place them on a baking tray. Bake for about 20-25 minutes or until cooked through. You can also grill the chicken. Prepare the Sauce: Heat butter and oil in a large pan over medium heat. Add chopped onions and cook until they turn golden brown. Add ginger garlic paste and sauté for another 2 minutes until the raw smell disappears. Add red chili powder, garam masala, coriander powder, and cumin powder. Cook for a minute to toast the spices. Add tomato puree and cook for about 5-7 minutes until the oil starts to separate from the sauce. Reduce the heat and add heavy cream. Stir well and let it simmer for a few more minutes. Add the cooked chicken pieces and let them simmer in the sauce for another 5 minutes. Adjust Seasoning: Taste and adjust salt and spice levels. If the sauce is too tangy, you can add a pinch of sugar to balance the flavors. Serve: Garnish with a drizzle of cream and fresh coriander leaves. Serve hot with naan or steamed rice. Enjoy your homemade butter chicken!",
  },
  {
    recipeName: "Mix Veg",
    image:
      " https://vegecravings.com/wp-content/uploads/2018/02/Mix-Veg-Recipe-Step-By-Step-Instructions.jpg",
    type: "Main Course (Veg & NonVeg)",
    ingredients: [
      "For the Vegetables:",
      "1 cup cauliflower florets",
      "1 cup chopped carrots",
      "1 cup green peas",
      "1 cup diced potatoes",
      "1/2 cup chopped beans",
      "1/2 cup diced bell peppers (optional)",
      "1/2 cup chopped spinach (optional)",

      "For the Gravy:",
      "2 tablespoons oil or ghee",
      "1 teaspoon cumin seeds",
      "1 large onion, finely chopped",
      "1 tablespoon ginger garlic paste",
      "2 large tomatoes, pureed",
      "1/2 cup yogurt (optional)",
      "1 teaspoon red chili powder (adjust to taste)",
      "1 teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "1 teaspoon coriander powder",
      "Salt to taste",
      "Fresh coriander leaves for garnish",
    ],
    procedure:
      "Prepare the Vegetables: Wash, peel (if needed), and chop all the vegetables into bite-sized pieces. Blanch the Vegetables (optional): You can blanch the cauliflower, carrots, and peas in hot water for a few minutes to partially cook them. This helps retain their color and nutrients. Drain and set aside. Cook the Vegetables: Heat oil or ghee in a large pan. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until golden brown. Add ginger garlic paste and cook for another 2 minutes until the raw smell disappears. Add tomato puree and cook until the oil starts to separate from the masala. If using yogurt, add it now and mix well. Add red chili powder, turmeric powder, garam masala, and coriander powder. Cook for a few more minutes until the spices are aromatic. Add the chopped vegetables and mix well to coat them with the masala. If not blanching, add a little water, cover, and let the vegetables cook on medium heat until they are tender but still have a slight crunch. If blanching, just cook for a few more minutes until the vegetables are heated through. Adjust Seasoning: Taste and adjust salt and spice levels as needed. Garnish and Serve: Garnish with fresh coriander leaves. Serve hot with roti, naan, or rice. Mix Veg is a versatile dish, and you can customize the vegetables and spices according to your preference. Enjoy!",
  },
  {
    recipeName: "Palak Paneer",
    image:
      " https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg",
    type: "Main Course (Veg & NonVeg)",
    ingredients: [
      " For the Spinach Puree:",
      "250 grams fresh spinach leaves, washed and blanched",
      "1 green chili (adjust to taste)",
      "1-inch piece of ginger",
      "3 cloves of garlic",

      "For the Paneer:",
      "250 grams paneer, cut into cubes",
      "Water for soaking paneer (optional)",

      "For the Gravy:",
      "2 tablespoons oil or ghee",
      "1 large onion, finely chopped",
      "1 teaspoon cumin seeds",
      "1 teaspoon garam masala",
      "1 teaspoon coriander powder",
      "1/2 teaspoon turmeric powder",
      "1/2 teaspoon red chili powder (adjust to taste)",
      "Salt to taste",
      "1/2 cup tomato puree",
      "1/4 cup cream (optional)",
      "1 tablespoon kasuri methi (dried fenugreek leaves)",
    ],
    procedure:
      "Prepare Spinach Puree: Blanch the spinach leaves in boiling water for 2-3 minutes. Drain and immediately transfer to a bowl of ice water to stop the cooking process. This helps retain the vibrant green color. In a blender, combine blanched spinach, green chili, ginger, and garlic. Blend into a smooth puree. Set aside. Soak Paneer (Optional): If using store-bought paneer, you can soak it in warm water for 15-20 minutes to make it soft and fresh. Cook Paneer: Heat a little oil or ghee in a pan and lightly fry the paneer cubes until they turn golden brown. This step is optional but adds extra flavor to the paneer. Set aside. Prepare Gravy: In the same pan, add oil or ghee. Add cumin seeds and let them splutter. Add finely chopped onions and sauté until they turn golden brown. Add garam masala, coriander powder, turmeric powder, red chili powder, and salt. Cook for a few minutes until the spices are aromatic. Add tomato puree and cook until the oil starts to separate from the masala. Pour in the spinach puree and mix well. Let it simmer for a few minutes. Add Paneer: Add the fried or soaked paneer cubes to the spinach gravy. Let it cook for another 5-7 minutes. Add Cream (Optional): If using cream, add it at this stage and mix well. It adds richness to the dish. Finish with Kasuri Methi: Crush the kasuri methi between your palms and sprinkle it over the palak paneer. This adds a wonderful aroma and flavor. Serve: Serve hot with roti, naan, or rice. Enjoy your homemade palak paneer!",
  },

  {
    recipeName: "Whipped Coffee",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWYuRHzVuAA9BbzB52_V77Er4jtVTChRUQw&usqp=CAU",
    type: "Drinks",
    ingredients: [
      "2 tablespoons instant coffee",
      "2 tablespoons sugar",
      "2 tablespoons hot water",
      "Milk (any kind you prefer)",
      "Ice cubes (optional)",
    ],
    procedure:
      "In a mixing bowl, combine instant coffee, sugar, and hot water. Using a hand whisk, electric mixer, or frother, vigorously whisk or whip until light and fluffy. This may take a few minutes. Fill a glass with milk (hot or cold) and add ice cubes if desired. Spoon the whipped coffee mixture over the milk using a spoon or straw. You can swirl it in or leave it layered for aesthetics. Stir the whipped coffee into the milk before drinking for full flavor. Enjoy your whipped coffee!",
  },
  {
    recipeName: "Banana Oat Smoothie",
    image:
      "https://images.eatthismuch.com/img/906806_Shamarie84_8044f206-6827-47a6-a130-c31894992272.png",
    type: "Drinks",
    ingredients: [
      "1 ripe banana",
      "1/4 cup rolled oats (you can use quick oats if you prefer)",
      "1/2 cup Greek yogurt (or any yogurt of your choice)",
      "1/2 cup milk (you can use dairy or a plant-based alternative)",
      "1-2 tablespoons honey or maple syrup (optional, for added sweetness)",
      "Ice cubes (optional, for a colder smoothie)",
      "Optional add-ins: a handful of berries, a tablespoon of chia seeds, a scoop of protein powder, a handful of spinach (for extra nutrients)",
    ],
    procedure:
      "Peel and chop 1 ripe banana. Add banana chunks, 1/4 cup rolled oats, 1/2 cup Greek yogurt, 1/2 cup milk, 1-2 tbsp honey/maple syrup (optional), and ice cubes (optional) to a blender. Optionally add 1 handful of berries, 1 tbsp chia seeds, 1 scoop of protein powder, or a handful of spinach. Blend until smooth. Adjust consistency with more milk if needed. Taste and adjust sweetness/thickness. Pour into a glass and enjoy!",
  },
  {
    recipeName: "Hot Chocolate",
    image:
      "https://homecookingcollective.com/wp-content/uploads/2023/03/Oat-Milk-Hot-Chocolate-13-scaled.jpg",
    type: "Drinks",
    ingredients: [
      "2 cups milk (whole milk or any plant-based alternative)",
      "2 tablespoons unsweetened cocoa powder",
      "2 tablespoons granulated sugar (adjust to taste)",
      "1/4 teaspoon vanilla extract",
      "Whipped cream, chocolate shavings, or marshmallows (optional, for garnish)",
    ],
    procedure:
      "In a small saucepan, whisk together the cocoa powder and sugar. Gradually add the milk while whisking continuously to ensure the cocoa and sugar dissolve evenly. Place the saucepan over medium heat and continue to whisk until the mixture is heated through. Be careful not to let it boil. Remove the saucepan from the heat and stir in the vanilla extract. Pour the hot chocolate into mugs. If desired, top with whipped cream, chocolate shavings, or marshmallows. Serve hot and enjoy!",
  },
  {
    recipeName: "Gulab Jamun",
    image:
      " https://www.milkmaid.in/sites/default/files/2022-03/Gulab-Jamun-590x436.jpg",
    type: "Dessert",
    ingredients: [
      "For the Gulab Jamun Balls:",
      "1 cup milk powder",
      "1/4 cup all-purpose flour",
      "1/4 tsp baking soda",
      "2 tbsp ghee (clarified butter)",
      "2-3 tbsp milk (approximately)",
      "Oil or ghee for frying",

      "For the Sugar Syrup: ",
      "1 cup granulated sugar",
      "1 cup water",
      "1/2 tsp cardamom powder",
      "A few saffron strands (optional)",
    ],
    procedure:
      "In a mixing bowl, combine the milk powder, all-purpose flour, and baking soda. Add ghee to the dry mixture and rub it in with your fingers until it resembles breadcrumbs. Gradually add milk, a tablespoon at a time, and knead the mixture into a smooth, soft dough. The dough should be slightly sticky but manageable. Divide the dough into small portions and roll them into smooth balls, making sure there are no cracks. Heat oil or ghee in a deep pan on medium heat. To test if it's hot enough, drop a small piece of dough into the oil. It should rise to the surface slowly. Carefully add the gulab jamun balls to the hot oil, ensuring not to overcrowd the pan. Fry them on low to medium heat until they turn golden brown. This will take about 5-7 minutes. While the jamuns are frying, prepare the sugar syrup. In a separate saucepan, combine sugar, water, cardamom powder, and saffron strands (if using). Bring it to a boil, then let it simmer for about 5-7 minutes until it reaches a slightly sticky consistency. Once the jamuns are golden brown, remove them from the oil and drain excess oil by placing them on a paper towel. Immediately transfer the hot jamuns into the warm sugar syrup. Let them soak for at least 2 hours to allow the syrup to permeate. Gulab jamuns are ready to be served! They can be enjoyed warm or at room temperature. Enjoy your homemade gulab jamuns!",
  },
  {
    recipeName: "Cheescake",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2022/03/best-cheesecake-recipe-6.jpg",
    type: "Dessert",
    ingredients: [
      "For the Crust:",
      "1 1/2 cups graham cracker crumbs",
      "1/4 cup granulated sugar",
      "1/2 cup unsalted butter, melted",

      "For the Cheesecake Filling:  ",
      "4 packages (8 ounces each) cream cheese, softened",
      "1 1/4 cups granulated sugar",
      "1 teaspoon vanilla extract",
      "4 large eggs",

      "For the Topping (optional):",
      "Fruit compote, fresh berries, chocolate ganache, or whipped cream",
    ],
    procedure:
      "Preheat your oven to 325°F (160°C). In a medium bowl, combine graham cracker crumbs, sugar, and melted butter. Mix until the crumbs are evenly coated. Press the mixture into the bottom of a 9-inch (23 cm) springform pan, creating an even layer. Bake the crust in the preheated oven for about 10 minutes. Remove it from the oven and set it aside to cool. In a large mixing bowl, beat the softened cream cheese until smooth. Add the sugar and vanilla extract to the cream cheese and mix until well combined. Add the eggs, one at a time, mixing well after each addition. Pour the cream cheese mixture over the cooled crust in the springform pan. Tap the pan gently on the counter to remove any air bubbles. Place the springform pan in a larger baking dish and add hot water to the larger dish to create a water bath for the cheesecake. This helps prevent cracking. Bake in the preheated oven for about 1 hour or until the edges are set and the center jiggles slightly. Turn off the oven and crack the oven door, allowing the cheesecake to cool gradually for about an hour. Remove the cheesecake from the oven and let it cool to room temperature. Refrigerate the cheesecake for at least 4 hours or overnight to allow it to set. Once chilled and set, remove the cheesecake from the springform pan. If desired, add your choice of topping, such as fruit compote, fresh berries, chocolate ganache, or whipped cream. Slice and serve.",
  },
  {
    recipeName: "Chocolate Cookies",
    image:
      "https://visitsouthernspain.com/wp-content/uploads/2021/04/Spanish-Chocolate-Chip-Cookie.jpg.webp",
    type: "Dessert",
    ingredients: [
      "1 cup (2 sticks) unsalted butter, softened",
      "1 cup granulated sugar",
      "1 cup brown sugar, packed",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "2 1/4 cups all-purpose flour",
      "1/2 cup unsweetened cocoa powder",
      "1 teaspoon baking soda",
      "1/2 teaspoon baking powder",
      "1/2 teaspoon salt",
      "2 cups chocolate chips",
    ],
    procedure:
      "Preheat your oven to 350°F (175°C). In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until the mixture is light and fluffy. Add the eggs one at a time, beating well after each addition. Stir in the vanilla extract. In a separate bowl, whisk together the flour, cocoa powder, baking soda, baking powder, and salt. Gradually add the dry ingredients to the butter and sugar mixture, mixing until well combined. Fold in the chocolate chips. Drop rounded tablespoons of cookie dough onto ungreased baking sheets, spacing them about 2 inches apart. Bake in the preheated oven for 10-12 minutes or until the edges are set but the centers are still slightly soft. Allow the cookies to cool on the baking sheets for a few minutes before transferring them to wire racks to cool completely. Enjoy your delicious chocolate cookies!",
  },
];

module.exports = recipes;
