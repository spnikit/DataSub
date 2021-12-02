/**
 * Реализовать два дочерних класса
 *  “Class1” и “Class2” с методом
 *  “sort” который сортирует массив
 *  Numbers, а затем выдает массив факториалов.
 *  Способы сортировки в классах “Class1” и “Class2”
 * должны различаться.
 */

import { insertionSort, bubbleSort, getRandomInt, getFact } from "./utils";

abstract class Aclass {
  Numbers: number[];

  constructor(n: number) {
    // Конструктор принимает один параметр “n” и вызывает метод “fill”
    this.Numbers = Array(n);
    this.fill();
  }

  private fill(): void {
    //который заполняет массив Numbers случайными числами
    this.Numbers = Array.from(this.Numbers, () => getRandomInt());
  }

  factorial(): number[] {
    return this.Numbers.map((elem) => {
      return getFact(elem);
    });
  }

  abstract sort(): number[];
}

class Class1 extends Aclass {
  sort() {
    bubbleSort(this.Numbers);
    return this.factorial();
  }
}
class Class2 extends Aclass {
  sort() {
    insertionSort(this.Numbers);
    return this.factorial();
  }
}
