
class User {
  private name: string;
  private age: number;
  private address: string;
  private phoneNumber: string;
  private email: string;
  private role: string;
  private isActive: boolean;
  private isVerified: boolean;
  private isPremium: boolean;
  private lastLogin: Date;
  private registrationDate: Date;
  private profilePicture: string;
  private bio: string;
  private interests: string[];

  constructor(
    name: string,
    age: number,
    address: string,
    phoneNumber: string,
    email: string,
    role: string,
    isActive: boolean,
    isVerified: boolean,
    isPremium: boolean,
    lastLogin: Date,
    registrationDate: Date,
    profilePicture: string,
    bio: string,
    interests: string[]
  ) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
    this.isVerified = isVerified;
    this.isPremium = isPremium;
    this.lastLogin = lastLogin;
    this.registrationDate = registrationDate;
    this.profilePicture = profilePicture;
    this.bio = bio;
    this.interests = interests;
  }

  // ... (other methods)
}


/**
 * Что плохо
 * 
 * Слишком много параметров конструктора. Возможны потом ошибки, т.к
 * Трудно уследить за порядком и типами параметров.
 * 
 * Дублированный код: В исходном коде было много дублирующегося кода в
 * конструкторе, где каждое свойство назначалось отдельно. 
 * 
 */

class UserWithProps {
  private props: {
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
    email: string;
    role: string;
    isActive: boolean;
    isVerified: boolean;
    isPremium: boolean;
    lastLogin: Date;
    registrationDate: Date;
    profilePicture: string;
    bio: string;
    interests: string[];
  };

  constructor(props: {
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
    email: string;
    role: string;
    isActive: boolean;
    isVerified: boolean;
    isPremium: boolean;
    lastLogin: Date;
    registrationDate: Date;
    profilePicture: string;
    bio: string;
    interests: string[];
  }) {
    // Использование глубокого клонирования
    this.props = structuredClone(props);
  }
}
