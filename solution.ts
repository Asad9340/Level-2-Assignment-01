const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | number[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Rating = 0 | 0.5 | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 | 4.5 | 5.0
type BookType = {
  title: string;
  rating: Rating;
};

const filterByRating = (value: BookType[]): BookType[] => {
  let filterBook = value.filter(item => item.rating >= 4);
  return filterBook;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  let activeUser = users.filter(u => u.isActive === true);
  return activeUser;
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable === true ? 'Yes' : 'No'}`
  );
};

const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {
  const output: (number | string)[] = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < output.length; j++) {
      if (output[j] === arr1[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      output[output.length] = arr1[i];
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < output.length; j++) {
      if (output[j] === arr2[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      output[output.length] = arr2[i];
    }
  }

  return output;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    const discountAmount = product.discount
      ? (product.discount / 100) * productTotal
      : 0;
    return total + (productTotal - discountAmount);
  }, 0);
};
