#include <stdio.h>
#include <stdlib.h>

int main (void) {
  int n;
  int* arr;

  // とりあえずint型10個ぶん確保
  n = 10;
  arr = (int *) malloc(sizeof(int) * n);
  if (arr == NULL) return 0;

  // 値を入れる
  for (int i = 0; i < n; i++) {
    arr[i] = i;
  }

  // 値を見る
  for (int i = 0; i < n; i++) {
    printf("%d,", arr[i]);
  }
  printf("\n");


  // さらに10個ぶん容量をのばす
  n = 20;
  arr = (int *) realloc(arr, sizeof(int) * n);

  // 続きから，追加して値を入れる
  for (int i = 10; i < n; i++) {
    arr[i] = i;
  }

  // 値を見る
  for (int i = 0; i < n; i++) {
    printf("%d,", arr[i]);
  }
  printf("\n");

  // 全部解放
  free(arr);

  return 0;
}
