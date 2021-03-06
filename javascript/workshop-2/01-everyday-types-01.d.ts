declare let myName: string;
declare type StringOrNum = string | number;
declare let myString: string;
declare let myStringOrNumber: StringOrNum;
declare let myNumber: number;
declare let myBool: boolean;
declare let numArray: number[];
declare let mySecondNumArray: Array<number>;
declare let stringArray: string[];
declare let booleanArray: boolean[];
declare let anyArray: any[];
declare let stringOrNumArray: StringOrNum[];
declare function sayHi(person: string): void;
declare function getRandomNumber(): number;
declare const names: string[];
declare function printName(obj: {
    first: string;
    last?: string;
}): void;
declare function printID(id: string | number): void;
declare function welcomePeople(x: string[] | string): void;
declare function getFirstThree(x: number[] | string): string | number[];
