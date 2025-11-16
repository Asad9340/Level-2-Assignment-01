const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  } else {
    return 'Wrong Input';
  }
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

const getLength = <T>(value: string | T[]): number | string => {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 'Wrong Input';
  }
};

// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);

// console.log(person1.getDetails());
// console.log(person2.getDetails());

type BookType = {
  title: string;
  rating: number;
};

const filterByRating = (value: BookType[]):BookType[] => {
  let filterBook = value.filter(item => item.rating >= 4);
  return filterBook;
};

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
