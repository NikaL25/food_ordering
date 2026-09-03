import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seed started");

  // очистка
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // ======================
  // CATEGORIES
  // ======================

  const coffee = await prisma.category.create({
    data: {
      name: "Coffee",
      slug: "coffee",
      image: "/categories/coffee.jpg",
    },
  });

  const fries = await prisma.category.create({
    data: {
      name: "Fries",
      slug: "fries",
      image: "/categories/fries.jpg",
    },
  });

  const burger = await prisma.category.create({
    data: {
      name: "Burger",
      slug: "burger",
      image: "/categories/burger.jpg",
    },
  });

  const drink = await prisma.category.create({
    data: {
      name: "Drink",
      slug: "drink",
      image: "/categories/drink.jpg",
    },
  });

  // ======================
  // PRODUCTS
  // ======================

  await prisma.product.createMany({
    data: [
      // COFFEE
      {
        name: "Cappuccino",
        slug: "cappuccino",
        description: "Classic cappuccino with milk foam",
        price: 12,
        image: "/products/cappuccino.jpg",
        categoryId: coffee.id,
      },
      {
        name: "Latte",
        slug: "latte",
        description: "Smooth latte with espresso",
        price: 14,
        image: "/products/latte.jpg",
        categoryId: coffee.id,
      },
      {
        name: "Americano",
        slug: "americano",
        description: "Strong black coffee",
        price: 10,
        image: "/products/americano.jpg",
        categoryId: coffee.id,
      },

      // FRIES
      {
        name: "Classic Fries",
        slug: "classic-fries",
        description: "Crispy golden fries",
        price: 8,
        image: "/products/fries.jpg",
        categoryId: fries.id,
      },
      {
        name: "Cheese Fries",
        slug: "cheese-fries",
        description: "Fries with cheese sauce",
        price: 11,
        image: "/products/cheese-fries.jpg",
        categoryId: fries.id,
      },
      {
        name: "Bacon Fries",
        slug: "bacon-fries",
        description: "Fries with bacon and sauce",
        price: 13,
        image: "/products/bacon-fries.jpg",
        categoryId: fries.id,
      },

      // BURGERS (McDonald's style)
      {
        name: "Big Mac",
        slug: "big-mac",
        description: "Iconic McDonald's burger",
        price: 22,
        image: "/products/big-mac.jpg",
        categoryId: burger.id,
      },
      {
        name: "Cheeseburger",
        slug: "cheeseburger",
        description: "Beef burger with cheese",
        price: 16,
        image: "/products/cheeseburger.jpg",
        categoryId: burger.id,
      },
      {
        name: "Double Cheeseburger",
        slug: "double-cheeseburger",
        description: "Double beef + cheese",
        price: 25,
        image: "/products/double-cheeseburger.jpg",
        categoryId: burger.id,
      },

      // DRINKS
      {
        name: "Coca Cola",
        slug: "coca-cola",
        description: "Classic Coca-Cola",
        price: 6,
        image: "/products/cola.jpg",
        categoryId: drink.id,
      },
      {
        name: "Fanta",
        slug: "fanta",
        description: "Orange soda",
        price: 6,
        image: "/products/fanta.jpg",
        categoryId: drink.id,
      },
      {
        name: "Sprite",
        slug: "sprite",
        description: "Lemon-lime soda",
        price: 6,
        image: "/products/sprite.jpg",
        categoryId: drink.id,
      },
    ],
  });

  console.log("Seed completed successfully");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });