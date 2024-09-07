export class mockMethods {
  async deleteRestaurent(token, khID, id) {
    return { id: id }
  }

  async updateRestaurent(auth, state, id) {
    return { id: id }
  }

  async getRestraurants(token, body, options, pageParam) {
    return [
      {
        "id": 1,
        "restaurantName": "The Gourmet Kitchen",
        "restaurantEmail": "contact@gourmetkitchen.com",
        "phoneNumber": "(123) 456-7890",
        "address": "123 Main Street, Anytown, USA",
        "description": "A fine dining experience offering a fusion of international cuisines."
      },
      {
        "id": 2,
        "restaurantName": "Pasta Palace",
        "restaurantEmail": "info@pastapalace.com",
        "phoneNumber": "(234) 567-8901",
        "address": "456 Elm Street, Springfield, USA",
        "description": "Authentic Italian pasta dishes made from fresh ingredients."
      },
      {
        "id": 3,
        "restaurantName": "Sushi World",
        "restaurantEmail": "hello@sushiworld.com",
        "phoneNumber": "(345) 678-9012",
        "address": "789 Oak Avenue, Metropolis, USA",
        "description": "Fresh and creative sushi rolls crafted by expert chefs."
      },
      {
        "id": 4,
        "restaurantName": "Burger Haven",
        "restaurantEmail": "support@burgerhaven.com",
        "phoneNumber": "(456) 789-0123",
        "address": "321 Pine Road, Gotham, USA",
        "description": "Juicy gourmet burgers with a variety of toppings and sides."
      },
      {
        "id": 5,
        "restaurantName": "Taco Fiesta",
        "restaurantEmail": "contact@tacofiesta.com",
        "phoneNumber": "(567) 890-1234",
        "address": "654 Maple Street, Star City, USA",
        "description": "Vibrant Mexican flavors with a wide selection of tacos and margaritas."
      },
      {
        "id": 6,
        "restaurantName": "Vegan Delights",
        "restaurantEmail": "info@vegandelights.com",
        "phoneNumber": "(678) 901-2345",
        "address": "987 Cedar Avenue, Central City, USA",
        "description": "Delicious plant-based meals that are both healthy and flavorful."
      },
      {
        "id": 7,
        "restaurantName": "Sea Breeze Seafood",
        "restaurantEmail": "hello@seabreezeseafood.com",
        "phoneNumber": "(789) 012-3456",
        "address": "159 Ocean Drive, Coast City, USA",
        "description": "Fresh seafood dishes with stunning ocean views."
      },
      {
        "id": 8,
        "restaurantName": "Steakhouse Supreme",
        "restaurantEmail": "support@steakhousesupreme.com",
        "phoneNumber": "(890) 123-4567",
        "address": "753 Birch Road, Smallville, USA",
        "description": "Premium steaks cooked to perfection in a classic setting."
      },
      {
        "id": 9,
        "restaurantName": "Curry Corner",
        "restaurantEmail": "contact@currycorner.com",
        "phoneNumber": "(901) 234-5678",
        "address": "852 Walnut Street, Blüdhaven, USA",
        "description": "A variety of authentic Indian and Thai curries with rich flavors."
      },
      {
        "id": 10,
        "restaurantName": "Pizza Paradise",
        "restaurantEmail": "info@pizzaparadise.com",
        "phoneNumber": "(012) 345-6789",
        "address": "147 Cherry Avenue, Riverdale, USA",
        "description": "Stone-baked pizzas with a wide range of toppings and crust options."
      },
      {
        "id": 11,
        "restaurantName": "Fusion Feast",
        "restaurantEmail": "hello@fusionfeast.com",
        "phoneNumber": "(123) 456-7891",
        "address": "258 Aspen Road, Emerald City, USA",
        "description": "Innovative dishes that blend culinary traditions from around the world."
      },
      {
        "id": 12,
        "restaurantName": "BBQ Barn",
        "restaurantEmail": "support@bbqbarn.com",
        "phoneNumber": "(234) 567-8902",
        "address": "369 Poplar Street, Hill Valley, USA",
        "description": "Smoky and tender barbecue specialties in a rustic atmosphere."
      },
      {
        "id": 13,
        "restaurantName": "Dim Sum Delight",
        "restaurantEmail": "contact@dimsumdelight.com",
        "phoneNumber": "(345) 678-9013",
        "address": "480 Willow Avenue, Twin Peaks, USA",
        "description": "Traditional Chinese dim sum with a modern twist."
      },
      {
        "id": 14,
        "restaurantName": "Mediterraneo",
        "restaurantEmail": "info@mediterraneo.com",
        "phoneNumber": "(456) 789-0124",
        "address": "591 Cypress Road, Sunnydale, USA",
        "description": "Mediterranean-inspired dishes featuring fresh herbs and olive oil."
      },
      {
        "id": 15,
        "restaurantName": "Breakfast Bistro",
        "restaurantEmail": "hello@breakfastbistro.com",
        "phoneNumber": "(567) 890-1235",
        "address": "602 Magnolia Street, Springfield, USA",
        "description": "Delicious breakfast and brunch options served all day."
      },
      {
        "id": 16,
        "restaurantName": "Tapas Terrace",
        "restaurantEmail": "support@tapesterrace.com",
        "phoneNumber": "(678) 901-2346",
        "address": "713 Dogwood Avenue, Riverdale, USA",
        "description": "A variety of Spanish tapas perfect for sharing."
      },
      {
        "id": 17,
        "restaurantName": "Green Garden",
        "restaurantEmail": "contact@greengarden.com",
        "phoneNumber": "(789) 012-3457",
        "address": "824 Fir Road, Gotham, USA",
        "description": "Farm-to-table restaurant offering fresh and sustainable meals."
      },
      {
        "id": 18,
        "restaurantName": "Kebab Kingdom",
        "restaurantEmail": "info@kebabkingdom.com",
        "phoneNumber": "(890) 123-4568",
        "address": "935 Pine Street, Metropolis, USA",
        "description": "Delicious Middle Eastern kebabs and wraps."
      },
      {
        "id": 19,
        "restaurantName": "Brunch & Brew",
        "restaurantEmail": "hello@brunchandbrew.com",
        "phoneNumber": "(901) 234-5679",
        "address": "046 Oak Avenue, Star City, USA",
        "description": "Perfect spot for brunch lovers and craft beer enthusiasts."
      },
      {
        "id": 20,
        "restaurantName": "Noodle Nirvana",
        "restaurantEmail": "support@noodlenirvana.com",
        "phoneNumber": "(012) 345-6790",
        "address": "157 Maple Road, Central City, USA",
        "description": "A wide selection of Asian noodle dishes in a cozy environment."
      },
      {
        "id": 21,
        "restaurantName": "Sweet Tooth Bakery",
        "restaurantEmail": "contact@sweettoothbakery.com",
        "phoneNumber": "(123) 456-7892",
        "address": "268 Birch Street, Smallville, USA",
        "description": "Freshly baked pastries, cakes, and desserts daily."
      },
      {
        "id": 22,
        "restaurantName": "Taproom Tavern",
        "restaurantEmail": "info@taproomtavern.com",
        "phoneNumber": "(234) 567-8903",
        "address": "379 Cedar Avenue, Blüdhaven, USA",
        "description": "Local craft beers and hearty pub fare in a lively setting."
      },
      {
        "id": 23,
        "restaurantName": "The Green Fork",
        "restaurantEmail": "hello@thegreenfork.com",
        "phoneNumber": "(345) 678-9014",
        "address": "480 Walnut Road, Riverdale, USA",
        "description": "Healthy and organic meals with a focus on sustainability."
      },
      {
        "id": 24,
        "restaurantName": "Pho Perfect",
        "restaurantEmail": "support@phoperfect.com",
        "phoneNumber": "(456) 789-0125",
        "address": "591 Cherry Street, Gotham, USA",
        "description": "Authentic Vietnamese pho and other traditional dishes."
      },
      {
        "id": 25,
        "restaurantName": "Crepe Café",
        "restaurantEmail": "contact@crepecafe.com",
        "phoneNumber": "(567) 890-1236",
        "address": "602 Aspen Avenue, Metropolis, USA",
        "description": "Delicious sweet and savory crepes in a charming café setting."
      },
      {
        "id": 26,
        "restaurantName": "Steamy Dumplings",
        "restaurantEmail": "info@steamedumplings.com",
        "phoneNumber": "(678) 901-2347",
        "address": "713 Poplar Road, Sunnydale, USA",
        "description": "A variety of steamed and fried dumplings with flavorful fillings."
      },
      {
        "id": 27,
        "restaurantName": "Olive Branch",
        "restaurantEmail": "hello@olivebranch.com",
        "phoneNumber": "(789) 012-3458",
        "address": "824 Willow Street, Central City, USA",
        "description": "Mediterranean dishes highlighting olives, fresh vegetables, and herbs."
      },
      {
        "id": 28,
        "restaurantName": "Waffle Wonderland",
        "restaurantEmail": "support@wafflewonderland.com",
        "phoneNumber": "(890) 123-4569",
        "address": "935 Cypress Avenue, Hill Valley, USA",
        "description": "Creative waffle creations for breakfast and dessert lovers."
      },
      {
        "id": 29,
        "restaurantName": "Saffron Spice",
        "restaurantEmail": "contact@saffronspice.com",
        "phoneNumber": "(901) 234-5680",
        "address": "046 Magnolia Road, Twin Peaks, USA",
        "description": "Exquisite Indian and Middle Eastern spices in every dish."
      },
      {
        "id": 30,
        "restaurantName": "Burger Bliss",
        "restaurantEmail": "info@burgerbliss.com",
        "phoneNumber": "(012) 345-6791",
        "address": "157 Fir Street, Anytown, USA",
        "description": "Gourmet burgers with unique toppings and handcrafted buns."
      },
      {
        "id": 1,
        "restaurantName": "The Gourmet Kitchen",
        "restaurantEmail": "contact@gourmetkitchen.com",
        "phoneNumber": "(123) 456-7890",
        "address": "123 Main Street, Anytown, USA",
        "description": "A fine dining experience offering a fusion of international cuisines."
      },
      {
        "id": 2,
        "restaurantName": "Pasta Palace",
        "restaurantEmail": "info@pastapalace.com",
        "phoneNumber": "(234) 567-8901",
        "address": "456 Elm Street, Springfield, USA",
        "description": "Authentic Italian pasta dishes made from fresh ingredients."
      },
      {
        "id": 3,
        "restaurantName": "Sushi World",
        "restaurantEmail": "hello@sushiworld.com",
        "phoneNumber": "(345) 678-9012",
        "address": "789 Oak Avenue, Metropolis, USA",
        "description": "Fresh and creative sushi rolls crafted by expert chefs."
      },
      {
        "id": 4,
        "restaurantName": "Burger Haven",
        "restaurantEmail": "support@burgerhaven.com",
        "phoneNumber": "(456) 789-0123",
        "address": "321 Pine Road, Gotham, USA",
        "description": "Juicy gourmet burgers with a variety of toppings and sides."
      },
      {
        "id": 5,
        "restaurantName": "Taco Fiesta",
        "restaurantEmail": "contact@tacofiesta.com",
        "phoneNumber": "(567) 890-1234",
        "address": "654 Maple Street, Star City, USA",
        "description": "Vibrant Mexican flavors with a wide selection of tacos and margaritas."
      },
      {
        "id": 6,
        "restaurantName": "Vegan Delights",
        "restaurantEmail": "info@vegandelights.com",
        "phoneNumber": "(678) 901-2345",
        "address": "987 Cedar Avenue, Central City, USA",
        "description": "Delicious plant-based meals that are both healthy and flavorful."
      },
      {
        "id": 7,
        "restaurantName": "Sea Breeze Seafood",
        "restaurantEmail": "hello@seabreezeseafood.com",
        "phoneNumber": "(789) 012-3456",
        "address": "159 Ocean Drive, Coast City, USA",
        "description": "Fresh seafood dishes with stunning ocean views."
      },
      {
        "id": 8,
        "restaurantName": "Steakhouse Supreme",
        "restaurantEmail": "support@steakhousesupreme.com",
        "phoneNumber": "(890) 123-4567",
        "address": "753 Birch Road, Smallville, USA",
        "description": "Premium steaks cooked to perfection in a classic setting."
      },
      {
        "id": 9,
        "restaurantName": "Curry Corner",
        "restaurantEmail": "contact@currycorner.com",
        "phoneNumber": "(901) 234-5678",
        "address": "852 Walnut Street, Blüdhaven, USA",
        "description": "A variety of authentic Indian and Thai curries with rich flavors."
      },
      {
        "id": 10,
        "restaurantName": "Pizza Paradise",
        "restaurantEmail": "info@pizzaparadise.com",
        "phoneNumber": "(012) 345-6789",
        "address": "147 Cherry Avenue, Riverdale, USA",
        "description": "Stone-baked pizzas with a wide range of toppings and crust options."
      },
      {
        "id": 11,
        "restaurantName": "Fusion Feast",
        "restaurantEmail": "hello@fusionfeast.com",
        "phoneNumber": "(123) 456-7891",
        "address": "258 Aspen Road, Emerald City, USA",
        "description": "Innovative dishes that blend culinary traditions from around the world."
      },
      {
        "id": 12,
        "restaurantName": "BBQ Barn",
        "restaurantEmail": "support@bbqbarn.com",
        "phoneNumber": "(234) 567-8902",
        "address": "369 Poplar Street, Hill Valley, USA",
        "description": "Smoky and tender barbecue specialties in a rustic atmosphere."
      },
      {
        "id": 13,
        "restaurantName": "Dim Sum Delight",
        "restaurantEmail": "contact@dimsumdelight.com",
        "phoneNumber": "(345) 678-9013",
        "address": "480 Willow Avenue, Twin Peaks, USA",
        "description": "Traditional Chinese dim sum with a modern twist."
      },
      {
        "id": 14,
        "restaurantName": "Mediterraneo",
        "restaurantEmail": "info@mediterraneo.com",
        "phoneNumber": "(456) 789-0124",
        "address": "591 Cypress Road, Sunnydale, USA",
        "description": "Mediterranean-inspired dishes featuring fresh herbs and olive oil."
      },
      {
        "id": 15,
        "restaurantName": "Breakfast Bistro",
        "restaurantEmail": "hello@breakfastbistro.com",
        "phoneNumber": "(567) 890-1235",
        "address": "602 Magnolia Street, Springfield, USA",
        "description": "Delicious breakfast and brunch options served all day."
      },
      {
        "id": 16,
        "restaurantName": "Tapas Terrace",
        "restaurantEmail": "support@tapesterrace.com",
        "phoneNumber": "(678) 901-2346",
        "address": "713 Dogwood Avenue, Riverdale, USA",
        "description": "A variety of Spanish tapas perfect for sharing."
      },
      {
        "id": 17,
        "restaurantName": "Green Garden",
        "restaurantEmail": "contact@greengarden.com",
        "phoneNumber": "(789) 012-3457",
        "address": "824 Fir Road, Gotham, USA",
        "description": "Farm-to-table restaurant offering fresh and sustainable meals."
      },
      {
        "id": 18,
        "restaurantName": "Kebab Kingdom",
        "restaurantEmail": "info@kebabkingdom.com",
        "phoneNumber": "(890) 123-4568",
        "address": "935 Pine Street, Metropolis, USA",
        "description": "Delicious Middle Eastern kebabs and wraps."
      },
      {
        "id": 19,
        "restaurantName": "Brunch & Brew",
        "restaurantEmail": "hello@brunchandbrew.com",
        "phoneNumber": "(901) 234-5679",
        "address": "046 Oak Avenue, Star City, USA",
        "description": "Perfect spot for brunch lovers and craft beer enthusiasts."
      },
      {
        "id": 20,
        "restaurantName": "Noodle Nirvana",
        "restaurantEmail": "support@noodlenirvana.com",
        "phoneNumber": "(012) 345-6790",
        "address": "157 Maple Road, Central City, USA",
        "description": "A wide selection of Asian noodle dishes in a cozy environment."
      },
      {
        "id": 21,
        "restaurantName": "Sweet Tooth Bakery",
        "restaurantEmail": "contact@sweettoothbakery.com",
        "phoneNumber": "(123) 456-7892",
        "address": "268 Birch Street, Smallville, USA",
        "description": "Freshly baked pastries, cakes, and desserts daily."
      },
      {
        "id": 22,
        "restaurantName": "Taproom Tavern",
        "restaurantEmail": "info@taproomtavern.com",
        "phoneNumber": "(234) 567-8903",
        "address": "379 Cedar Avenue, Blüdhaven, USA",
        "description": "Local craft beers and hearty pub fare in a lively setting."
      },
      {
        "id": 23,
        "restaurantName": "The Green Fork",
        "restaurantEmail": "hello@thegreenfork.com",
        "phoneNumber": "(345) 678-9014",
        "address": "480 Walnut Road, Riverdale, USA",
        "description": "Healthy and organic meals with a focus on sustainability."
      },
      {
        "id": 24,
        "restaurantName": "Pho Perfect",
        "restaurantEmail": "support@phoperfect.com",
        "phoneNumber": "(456) 789-0125",
        "address": "591 Cherry Street, Gotham, USA",
        "description": "Authentic Vietnamese pho and other traditional dishes."
      },
      {
        "id": 25,
        "restaurantName": "Crepe Café",
        "restaurantEmail": "contact@crepecafe.com",
        "phoneNumber": "(567) 890-1236",
        "address": "602 Aspen Avenue, Metropolis, USA",
        "description": "Delicious sweet and savory crepes in a charming café setting."
      },
      {
        "id": 26,
        "restaurantName": "Steamy Dumplings",
        "restaurantEmail": "info@steamedumplings.com",
        "phoneNumber": "(678) 901-2347",
        "address": "713 Poplar Road, Sunnydale, USA",
        "description": "A variety of steamed and fried dumplings with flavorful fillings."
      },
      {
        "id": 27,
        "restaurantName": "Olive Branch",
        "restaurantEmail": "hello@olivebranch.com",
        "phoneNumber": "(789) 012-3458",
        "address": "824 Willow Street, Central City, USA",
        "description": "Mediterranean dishes highlighting olives, fresh vegetables, and herbs."
      },
      {
        "id": 28,
        "restaurantName": "Waffle Wonderland",
        "restaurantEmail": "support@wafflewonderland.com",
        "phoneNumber": "(890) 123-4569",
        "address": "935 Cypress Avenue, Hill Valley, USA",
        "description": "Creative waffle creations for breakfast and dessert lovers."
      },
      {
        "id": 29,
        "restaurantName": "Saffron Spice",
        "restaurantEmail": "contact@saffronspice.com",
        "phoneNumber": "(901) 234-5680",
        "address": "046 Magnolia Road, Twin Peaks, USA",
        "description": "Exquisite Indian and Middle Eastern spices in every dish."
      },
      {
        "id": 30,
        "restaurantName": "Burger Bliss",
        "restaurantEmail": "info@burgerbliss.com",
        "phoneNumber": "(012) 345-6791",
        "address": "157 Fir Street, Anytown, USA",
        "description": "Gourmet burgers with unique toppings and handcrafted buns."
      },
      {
        "id": 1,
        "restaurantName": "The Gourmet Kitchen",
        "restaurantEmail": "contact@gourmetkitchen.com",
        "phoneNumber": "(123) 456-7890",
        "address": "123 Main Street, Anytown, USA",
        "description": "A fine dining experience offering a fusion of international cuisines."
      },
      {
        "id": 2,
        "restaurantName": "Pasta Palace",
        "restaurantEmail": "info@pastapalace.com",
        "phoneNumber": "(234) 567-8901",
        "address": "456 Elm Street, Springfield, USA",
        "description": "Authentic Italian pasta dishes made from fresh ingredients."
      },
      {
        "id": 3,
        "restaurantName": "Sushi World",
        "restaurantEmail": "hello@sushiworld.com",
        "phoneNumber": "(345) 678-9012",
        "address": "789 Oak Avenue, Metropolis, USA",
        "description": "Fresh and creative sushi rolls crafted by expert chefs."
      },
      {
        "id": 4,
        "restaurantName": "Burger Haven",
        "restaurantEmail": "support@burgerhaven.com",
        "phoneNumber": "(456) 789-0123",
        "address": "321 Pine Road, Gotham, USA",
        "description": "Juicy gourmet burgers with a variety of toppings and sides."
      },
      {
        "id": 5,
        "restaurantName": "Taco Fiesta",
        "restaurantEmail": "contact@tacofiesta.com",
        "phoneNumber": "(567) 890-1234",
        "address": "654 Maple Street, Star City, USA",
        "description": "Vibrant Mexican flavors with a wide selection of tacos and margaritas."
      },
      {
        "id": 6,
        "restaurantName": "Vegan Delights",
        "restaurantEmail": "info@vegandelights.com",
        "phoneNumber": "(678) 901-2345",
        "address": "987 Cedar Avenue, Central City, USA",
        "description": "Delicious plant-based meals that are both healthy and flavorful."
      },
      {
        "id": 7,
        "restaurantName": "Sea Breeze Seafood",
        "restaurantEmail": "hello@seabreezeseafood.com",
        "phoneNumber": "(789) 012-3456",
        "address": "159 Ocean Drive, Coast City, USA",
        "description": "Fresh seafood dishes with stunning ocean views."
      },
      {
        "id": 8,
        "restaurantName": "Steakhouse Supreme",
        "restaurantEmail": "support@steakhousesupreme.com",
        "phoneNumber": "(890) 123-4567",
        "address": "753 Birch Road, Smallville, USA",
        "description": "Premium steaks cooked to perfection in a classic setting."
      },
      {
        "id": 9,
        "restaurantName": "Curry Corner",
        "restaurantEmail": "contact@currycorner.com",
        "phoneNumber": "(901) 234-5678",
        "address": "852 Walnut Street, Blüdhaven, USA",
        "description": "A variety of authentic Indian and Thai curries with rich flavors."
      },
      {
        "id": 10,
        "restaurantName": "Pizza Paradise",
        "restaurantEmail": "info@pizzaparadise.com",
        "phoneNumber": "(012) 345-6789",
        "address": "147 Cherry Avenue, Riverdale, USA",
        "description": "Stone-baked pizzas with a wide range of toppings and crust options."
      },
      {
        "id": 11,
        "restaurantName": "Fusion Feast",
        "restaurantEmail": "hello@fusionfeast.com",
        "phoneNumber": "(123) 456-7891",
        "address": "258 Aspen Road, Emerald City, USA",
        "description": "Innovative dishes that blend culinary traditions from around the world."
      },
      {
        "id": 12,
        "restaurantName": "BBQ Barn",
        "restaurantEmail": "support@bbqbarn.com",
        "phoneNumber": "(234) 567-8902",
        "address": "369 Poplar Street, Hill Valley, USA",
        "description": "Smoky and tender barbecue specialties in a rustic atmosphere."
      },
      {
        "id": 13,
        "restaurantName": "Dim Sum Delight",
        "restaurantEmail": "contact@dimsumdelight.com",
        "phoneNumber": "(345) 678-9013",
        "address": "480 Willow Avenue, Twin Peaks, USA",
        "description": "Traditional Chinese dim sum with a modern twist."
      },
      {
        "id": 14,
        "restaurantName": "Mediterraneo",
        "restaurantEmail": "info@mediterraneo.com",
        "phoneNumber": "(456) 789-0124",
        "address": "591 Cypress Road, Sunnydale, USA",
        "description": "Mediterranean-inspired dishes featuring fresh herbs and olive oil."
      },
      {
        "id": 15,
        "restaurantName": "Breakfast Bistro",
        "restaurantEmail": "hello@breakfastbistro.com",
        "phoneNumber": "(567) 890-1235",
        "address": "602 Magnolia Street, Springfield, USA",
        "description": "Delicious breakfast and brunch options served all day."
      },
      {
        "id": 16,
        "restaurantName": "Tapas Terrace",
        "restaurantEmail": "support@tapesterrace.com",
        "phoneNumber": "(678) 901-2346",
        "address": "713 Dogwood Avenue, Riverdale, USA",
        "description": "A variety of Spanish tapas perfect for sharing."
      },
      {
        "id": 17,
        "restaurantName": "Green Garden",
        "restaurantEmail": "contact@greengarden.com",
        "phoneNumber": "(789) 012-3457",
        "address": "824 Fir Road, Gotham, USA",
        "description": "Farm-to-table restaurant offering fresh and sustainable meals."
      },
      {
        "id": 18,
        "restaurantName": "Kebab Kingdom",
        "restaurantEmail": "info@kebabkingdom.com",
        "phoneNumber": "(890) 123-4568",
        "address": "935 Pine Street, Metropolis, USA",
        "description": "Delicious Middle Eastern kebabs and wraps."
      },
      {
        "id": 19,
        "restaurantName": "Brunch & Brew",
        "restaurantEmail": "hello@brunchandbrew.com",
        "phoneNumber": "(901) 234-5679",
        "address": "046 Oak Avenue, Star City, USA",
        "description": "Perfect spot for brunch lovers and craft beer enthusiasts."
      },
      {
        "id": 20,
        "restaurantName": "Noodle Nirvana",
        "restaurantEmail": "support@noodlenirvana.com",
        "phoneNumber": "(012) 345-6790",
        "address": "157 Maple Road, Central City, USA",
        "description": "A wide selection of Asian noodle dishes in a cozy environment."
      },
      {
        "id": 21,
        "restaurantName": "Sweet Tooth Bakery",
        "restaurantEmail": "contact@sweettoothbakery.com",
        "phoneNumber": "(123) 456-7892",
        "address": "268 Birch Street, Smallville, USA",
        "description": "Freshly baked pastries, cakes, and desserts daily."
      },
      {
        "id": 22,
        "restaurantName": "Taproom Tavern",
        "restaurantEmail": "info@taproomtavern.com",
        "phoneNumber": "(234) 567-8903",
        "address": "379 Cedar Avenue, Blüdhaven, USA",
        "description": "Local craft beers and hearty pub fare in a lively setting."
      },
      {
        "id": 23,
        "restaurantName": "The Green Fork",
        "restaurantEmail": "hello@thegreenfork.com",
        "phoneNumber": "(345) 678-9014",
        "address": "480 Walnut Road, Riverdale, USA",
        "description": "Healthy and organic meals with a focus on sustainability."
      },
      {
        "id": 24,
        "restaurantName": "Pho Perfect",
        "restaurantEmail": "support@phoperfect.com",
        "phoneNumber": "(456) 789-0125",
        "address": "591 Cherry Street, Gotham, USA",
        "description": "Authentic Vietnamese pho and other traditional dishes."
      },
      {
        "id": 25,
        "restaurantName": "Crepe Café",
        "restaurantEmail": "contact@crepecafe.com",
        "phoneNumber": "(567) 890-1236",
        "address": "602 Aspen Avenue, Metropolis, USA",
        "description": "Delicious sweet and savory crepes in a charming café setting."
      },
      {
        "id": 26,
        "restaurantName": "Steamy Dumplings",
        "restaurantEmail": "info@steamedumplings.com",
        "phoneNumber": "(678) 901-2347",
        "address": "713 Poplar Road, Sunnydale, USA",
        "description": "A variety of steamed and fried dumplings with flavorful fillings."
      },
      {
        "id": 27,
        "restaurantName": "Olive Branch",
        "restaurantEmail": "hello@olivebranch.com",
        "phoneNumber": "(789) 012-3458",
        "address": "824 Willow Street, Central City, USA",
        "description": "Mediterranean dishes highlighting olives, fresh vegetables, and herbs."
      },
      {
        "id": 28,
        "restaurantName": "Waffle Wonderland",
        "restaurantEmail": "support@wafflewonderland.com",
        "phoneNumber": "(890) 123-4569",
        "address": "935 Cypress Avenue, Hill Valley, USA",
        "description": "Creative waffle creations for breakfast and dessert lovers."
      },
      {
        "id": 29,
        "restaurantName": "Saffron Spice",
        "restaurantEmail": "contact@saffronspice.com",
        "phoneNumber": "(901) 234-5680",
        "address": "046 Magnolia Road, Twin Peaks, USA",
        "description": "Exquisite Indian and Middle Eastern spices in every dish."
      },
      {
        "id": 30,
        "restaurantName": "Burger Bliss",
        "restaurantEmail": "info@burgerbliss.com",
        "phoneNumber": "(012) 345-6791",
        "address": "157 Fir Street, Anytown, USA",
        "description": "Gourmet burgers with unique toppings and handcrafted buns."
      },
      {
        "id": 1,
        "restaurantName": "The Gourmet Kitchen",
        "restaurantEmail": "contact@gourmetkitchen.com",
        "phoneNumber": "(123) 456-7890",
        "address": "123 Main Street, Anytown, USA",
        "description": "A fine dining experience offering a fusion of international cuisines."
      },
      {
        "id": 2,
        "restaurantName": "Pasta Palace",
        "restaurantEmail": "info@pastapalace.com",
        "phoneNumber": "(234) 567-8901",
        "address": "456 Elm Street, Springfield, USA",
        "description": "Authentic Italian pasta dishes made from fresh ingredients."
      },
      {
        "id": 3,
        "restaurantName": "Sushi World",
        "restaurantEmail": "hello@sushiworld.com",
        "phoneNumber": "(345) 678-9012",
        "address": "789 Oak Avenue, Metropolis, USA",
        "description": "Fresh and creative sushi rolls crafted by expert chefs."
      },
      {
        "id": 4,
        "restaurantName": "Burger Haven",
        "restaurantEmail": "support@burgerhaven.com",
        "phoneNumber": "(456) 789-0123",
        "address": "321 Pine Road, Gotham, USA",
        "description": "Juicy gourmet burgers with a variety of toppings and sides."
      },
      {
        "id": 5,
        "restaurantName": "Taco Fiesta",
        "restaurantEmail": "contact@tacofiesta.com",
        "phoneNumber": "(567) 890-1234",
        "address": "654 Maple Street, Star City, USA",
        "description": "Vibrant Mexican flavors with a wide selection of tacos and margaritas."
      },
      {
        "id": 6,
        "restaurantName": "Vegan Delights",
        "restaurantEmail": "info@vegandelights.com",
        "phoneNumber": "(678) 901-2345",
        "address": "987 Cedar Avenue, Central City, USA",
        "description": "Delicious plant-based meals that are both healthy and flavorful."
      },
      {
        "id": 7,
        "restaurantName": "Sea Breeze Seafood",
        "restaurantEmail": "hello@seabreezeseafood.com",
        "phoneNumber": "(789) 012-3456",
        "address": "159 Ocean Drive, Coast City, USA",
        "description": "Fresh seafood dishes with stunning ocean views."
      },
      {
        "id": 8,
        "restaurantName": "Steakhouse Supreme",
        "restaurantEmail": "support@steakhousesupreme.com",
        "phoneNumber": "(890) 123-4567",
        "address": "753 Birch Road, Smallville, USA",
        "description": "Premium steaks cooked to perfection in a classic setting."
      },
      {
        "id": 9,
        "restaurantName": "Curry Corner",
        "restaurantEmail": "contact@currycorner.com",
        "phoneNumber": "(901) 234-5678",
        "address": "852 Walnut Street, Blüdhaven, USA",
        "description": "A variety of authentic Indian and Thai curries with rich flavors."
      },
      {
        "id": 10,
        "restaurantName": "Pizza Paradise",
        "restaurantEmail": "info@pizzaparadise.com",
        "phoneNumber": "(012) 345-6789",
        "address": "147 Cherry Avenue, Riverdale, USA",
        "description": "Stone-baked pizzas with a wide range of toppings and crust options."
      },
      {
        "id": 11,
        "restaurantName": "Fusion Feast",
        "restaurantEmail": "hello@fusionfeast.com",
        "phoneNumber": "(123) 456-7891",
        "address": "258 Aspen Road, Emerald City, USA",
        "description": "Innovative dishes that blend culinary traditions from around the world."
      },
      {
        "id": 12,
        "restaurantName": "BBQ Barn",
        "restaurantEmail": "support@bbqbarn.com",
        "phoneNumber": "(234) 567-8902",
        "address": "369 Poplar Street, Hill Valley, USA",
        "description": "Smoky and tender barbecue specialties in a rustic atmosphere."
      },
      {
        "id": 13,
        "restaurantName": "Dim Sum Delight",
        "restaurantEmail": "contact@dimsumdelight.com",
        "phoneNumber": "(345) 678-9013",
        "address": "480 Willow Avenue, Twin Peaks, USA",
        "description": "Traditional Chinese dim sum with a modern twist."
      },
      {
        "id": 14,
        "restaurantName": "Mediterraneo",
        "restaurantEmail": "info@mediterraneo.com",
        "phoneNumber": "(456) 789-0124",
        "address": "591 Cypress Road, Sunnydale, USA",
        "description": "Mediterranean-inspired dishes featuring fresh herbs and olive oil."
      },
      {
        "id": 15,
        "restaurantName": "Breakfast Bistro",
        "restaurantEmail": "hello@breakfastbistro.com",
        "phoneNumber": "(567) 890-1235",
        "address": "602 Magnolia Street, Springfield, USA",
        "description": "Delicious breakfast and brunch options served all day."
      },
      {
        "id": 16,
        "restaurantName": "Tapas Terrace",
        "restaurantEmail": "support@tapesterrace.com",
        "phoneNumber": "(678) 901-2346",
        "address": "713 Dogwood Avenue, Riverdale, USA",
        "description": "A variety of Spanish tapas perfect for sharing."
      },
      {
        "id": 17,
        "restaurantName": "Green Garden",
        "restaurantEmail": "contact@greengarden.com",
        "phoneNumber": "(789) 012-3457",
        "address": "824 Fir Road, Gotham, USA",
        "description": "Farm-to-table restaurant offering fresh and sustainable meals."
      },
      {
        "id": 18,
        "restaurantName": "Kebab Kingdom",
        "restaurantEmail": "info@kebabkingdom.com",
        "phoneNumber": "(890) 123-4568",
        "address": "935 Pine Street, Metropolis, USA",
        "description": "Delicious Middle Eastern kebabs and wraps."
      },
      {
        "id": 19,
        "restaurantName": "Brunch & Brew",
        "restaurantEmail": "hello@brunchandbrew.com",
        "phoneNumber": "(901) 234-5679",
        "address": "046 Oak Avenue, Star City, USA",
        "description": "Perfect spot for brunch lovers and craft beer enthusiasts."
      },
      {
        "id": 20,
        "restaurantName": "Noodle Nirvana",
        "restaurantEmail": "support@noodlenirvana.com",
        "phoneNumber": "(012) 345-6790",
        "address": "157 Maple Road, Central City, USA",
        "description": "A wide selection of Asian noodle dishes in a cozy environment."
      },
      {
        "id": 21,
        "restaurantName": "Sweet Tooth Bakery",
        "restaurantEmail": "contact@sweettoothbakery.com",
        "phoneNumber": "(123) 456-7892",
        "address": "268 Birch Street, Smallville, USA",
        "description": "Freshly baked pastries, cakes, and desserts daily."
      },
      {
        "id": 22,
        "restaurantName": "Taproom Tavern",
        "restaurantEmail": "info@taproomtavern.com",
        "phoneNumber": "(234) 567-8903",
        "address": "379 Cedar Avenue, Blüdhaven, USA",
        "description": "Local craft beers and hearty pub fare in a lively setting."
      },
      {
        "id": 23,
        "restaurantName": "The Green Fork",
        "restaurantEmail": "hello@thegreenfork.com",
        "phoneNumber": "(345) 678-9014",
        "address": "480 Walnut Road, Riverdale, USA",
        "description": "Healthy and organic meals with a focus on sustainability."
      },
      {
        "id": 24,
        "restaurantName": "Pho Perfect",
        "restaurantEmail": "support@phoperfect.com",
        "phoneNumber": "(456) 789-0125",
        "address": "591 Cherry Street, Gotham, USA",
        "description": "Authentic Vietnamese pho and other traditional dishes."
      },
      {
        "id": 25,
        "restaurantName": "Crepe Café",
        "restaurantEmail": "contact@crepecafe.com",
        "phoneNumber": "(567) 890-1236",
        "address": "602 Aspen Avenue, Metropolis, USA",
        "description": "Delicious sweet and savory crepes in a charming café setting."
      },
      {
        "id": 26,
        "restaurantName": "Steamy Dumplings",
        "restaurantEmail": "info@steamedumplings.com",
        "phoneNumber": "(678) 901-2347",
        "address": "713 Poplar Road, Sunnydale, USA",
        "description": "A variety of steamed and fried dumplings with flavorful fillings."
      },
      {
        "id": 27,
        "restaurantName": "Olive Branch",
        "restaurantEmail": "hello@olivebranch.com",
        "phoneNumber": "(789) 012-3458",
        "address": "824 Willow Street, Central City, USA",
        "description": "Mediterranean dishes highlighting olives, fresh vegetables, and herbs."
      },
      {
        "id": 28,
        "restaurantName": "Waffle Wonderland",
        "restaurantEmail": "support@wafflewonderland.com",
        "phoneNumber": "(890) 123-4569",
        "address": "935 Cypress Avenue, Hill Valley, USA",
        "description": "Creative waffle creations for breakfast and dessert lovers."
      },
      {
        "id": 29,
        "restaurantName": "Saffron Spice",
        "restaurantEmail": "contact@saffronspice.com",
        "phoneNumber": "(901) 234-5680",
        "address": "046 Magnolia Road, Twin Peaks, USA",
        "description": "Exquisite Indian and Middle Eastern spices in every dish."
      },
      {
        "id": 30,
        "restaurantName": "Burger Bliss",
        "restaurantEmail": "info@burgerbliss.com",
        "phoneNumber": "(012) 345-6791",
        "address": "157 Fir Street, Anytown, USA",
        "description": "Gourmet burgers with unique toppings and handcrafted buns."
      }
    ]

  }
}

