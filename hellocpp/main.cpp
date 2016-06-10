#include <iostream>
#include "DataLoader.h"

using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  DataLoader *loader = new DataLoader();
  loader->e = 10;
  int e = loader->e;
  int r = loader->loadCSV();
  cout << e + r << endl;
  return 0;
}