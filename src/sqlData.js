export const data = [
  {
    id: 0,
    query: "SELECT * FROM categories WHERE categoryID > 0;",
    headcells: [
      { id: "categoryID", numeric: false, disablePadding: true, label: "categoryID" },
      { id: "categoryName", numeric: false, disablePadding: true, label: "categoryName" },
      { id: "description", numeric: false, disablePadding: true, label: "description" }
    ],
    output: [
      { categoryID: "1", categoryName: "Beverages", description: "Soft drinks, coffees, teas, beers, and ales" },
      { categoryID: "2", categoryName: "Condiments", description: "Sweet and savory sauces, relishes, spreads, and seasonings" },
      { categoryID: "3", categoryName: "Confections", description: "Desserts, candies, and sweet breads" },
      { categoryID: "4", categoryName: "Dairy Products", description: "Cheeses" },
      { categoryID: "5", categoryName: "Grains/Cereals", description: "Breads, crackers, pasta, and cereal" },
      { categoryID: "6", categoryName: "Meat/Poultry", description: "Prepared meats" },
      { categoryID: "7", categoryName: "Produce", description: "Dried fruit and bean curd" },
      { categoryID: "8", categoryName: "Seafood", description: "Seaweed and fish" }
    ]
  }, 
]

  export const suggestions = [
    "SELECT * FROM categories WHERE categoryID > 0;",
  ];
  