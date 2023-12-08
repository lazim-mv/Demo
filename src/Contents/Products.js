const productData = [
  {
    id: 1,
    title: "Product 1",
    img: "/zip/cctv1.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
    productColor:["red","blue","green","yellow"],
    briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eos dolorum culpa odio soluta, doloribus, cupiditate ipsa debitis pariatur quisquam mollitia delectus! Nemo inventore esse optio, mollitia id quod autem alias ut, excepturi veritatis nesciunt voluptate iusto maxime iure blanditiis aliquam at dolor unde distinctio dolores!.",
  },
  {
    id: 2,
    title: "Product 2",
    img: "/zip/cctv2.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
    productColor:["red","blue","green","yellow"],
    briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eos dolorum culpa odio soluta, doloribus, cupiditate ipsa debitis pariatur quisquam mollitia delectus! Nemo inventore esse optio, mollitia id quod autem alias ut, excepturi veritatis nesciunt voluptate iusto maxime iure blanditiis aliquam at dolor unde distinctio dolores!.",
  },
  {
    id: 3,
    title: "Product 3",
    img: "/zip/cctv3.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
    productColor:["red","blue","green","yellow"],
    briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eos dolorum culpa odio soluta, doloribus, cupiditate ipsa debitis pariatur quisquam mollitia delectus! Nemo inventore esse optio, mollitia id quod autem alias ut, excepturi veritatis nesciunt voluptate iusto maxime iure blanditiis aliquam at dolor unde distinctio dolores!.",
  },
  {
    id: 4,
    title: "Product 4",
    img: "/zip/cctv4.jpg",
    description: "Lorem ipsum dolor sit amet consectetur.",
    productColor:["red","blue","green","yellow"],
    briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eos dolorum culpa odio soluta, doloribus, cupiditate ipsa debitis pariatur quisquam mollitia delectus! Nemo inventore esse optio, mollitia id quod autem alias ut, excepturi veritatis nesciunt voluptate iusto maxime iure blanditiis aliquam at dolor unde distinctio dolores!.",
  },
  {
    id: 5,
    title: "Product 5",
    img: "/cctv.webp",
    description: "Lorem ipsum dolor sit amet consectetur.",
    productColor:["red","blue","green","yellow"],
    briefDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quia eos dolorum culpa odio soluta, doloribus, cupiditate ipsa debitis pariatur quisquam mollitia delectus! Nemo inventore esse optio, mollitia id quod autem alias ut, excepturi veritatis nesciunt voluptate iusto maxime iure blanditiis aliquam at dolor unde distinctio dolores!.",
  },
];

const [tomato, lettuce, cheese, carrot] = productData;
export const productTabs = [tomato, lettuce, cheese, carrot];

export function getNextProduct(existingProducts) {
  const existingIds = new Set(existingProducts.map(product => product.id));

  return productData.find(product => !existingIds.has(product.id));
}

export default productData;
