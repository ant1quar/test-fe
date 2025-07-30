/*
 *  Реалиовать класс TextCursor, который эмулирует текстовое поле ввода с курсором  "aa|zxczcx"
 * insert - вставить символ слева от курсора
 * delete - удалить символ слева от курсора
 * moveCursor - переместить курсор на position символов влево или вправо. position может быть отрицательным. При достижении конца строки дальше не идем
 * getBuffer - вернуть всю строку.
 */

interface TextCursor {
  insert(char: string): void;
  delete(): void;
  moveCursor(position: number): void;
  getBuffer(): string;
}
