/**
 * Реализовать два дочерних класса
 *  “Class1” и “Class2” с методом
 *  “sort” который сортирует массив
 *  Numbers, а затем выдает массив факториалов.
 *  Способы сортировки в классах “Class1” и “Class2”
 * должны различаться.
 */

abstract class Aclass {
  Numbers: number[];

  constructor(n: number) {
    // Конструктор принимает один параметр “n” и вызывает метод “fill”
    this.Numbers = Array(n);
    this.fill();
    console.log(this.Numbers);
  }

  private fill(): void {
    //который заполняет массив Numbers случайными числами
    this.Numbers = Array.from(
      this.Numbers,
      () => getRandomInt()
    );
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
    return [];
  }
}
class Class2 extends Aclass {
  sort() {
    return [];
  }
}

function getRandomInt() {
  return Math.floor(Math.random() * 10);
}

function getFact(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 1;
  else {
    return n * getFact(n - 1);
  }
}

// console.log(new Aclass(3).factorial());
