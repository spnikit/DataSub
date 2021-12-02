Задания можно реализовать на языках программирования JavaScript, TypeScript

---

## Задание 1

Создать абстрактный класс “AClass” у которого будет свойство “Numbers” типа Array, который будет содержать n натуральных чисел. Также AClass должен иметь метод “fill”, который заполняет массив Numbers случайными числами; метод “factorial”, который возвращает
массив факториалов из массива Numbers; и абстрактный метод “sort”. Конструктор принимает один параметр “n” и вызывает метод “fill”. Метод “fill” можно вызывать только из методов класса “AClass”. Метод “factorial” может вызываться из класса AClass и из дочерних классов.
Реализовать два дочерних класса “Class1” и “Class2” с методом “sort” который сортирует массив Numbers, а затем выдает массив факториалов. Способы сортировки в классах “Class1” и “Class2” должны различаться.

    Реализовано в файле index.ts

## Задание 2

Таблица Students имеет поля StudentId, FirstName, LastName, Group и содержит информацию о студентах института. Таблица Exams имеет поля StudentId, ExamName, Result и содержит результаты экзаменов студентов.

_Students_ table
| StudentId | FirstName | LastName | Group |
|-----------|-----------|----------|-------|
| 3456 | Peter| Jackson | 3A |

_Exams_ table
StudentId | ExamName | Result
--- | --- | ---
3456 | Arithmency | Poor

1. написать SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.

```sql
SELECT
    s.FirstName, s.LastName
FROM
    Students AS s
        INNER JOIN
    Exams AS e ON s.StudentId = e.StudentId
WHERE
    e.Result < 3
GROUP BY s.StudentId
HAVING COUNT(e.ExamName) > 2
```

2. написать SQL запрос, который выводит название групп, в которых таких студентов больше 10

```sql
SELECT
    s.Group
FROM
    Students AS s
WHERE
    s.StudentId IN (SELECT
            s.StudentId
        FROM
            Students AS s
                INNER JOIN
            Exams AS e ON s.StudentId = e.StudentId
        WHERE
            e.Result < 3
        GROUP BY s.StudentId
        HAVING COUNT(e.ExamName) > 2)
GROUP BY s.Group
HAVING COUNT(*) > 10;


```

---
