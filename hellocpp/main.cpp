#include <iostream>
#include <boost/scoped_ptr.hpp>
#include <memory>
#include "DataLoader.h"


int test0 () {
  DataLoader *loader = new DataLoader();
  loader->e = 10;
  int e = loader->e;
  int r = loader->loadCSV();
  cout << e + r << endl;
  return 0;
}

int test1 () {
  std::unique_ptr <DataLoader> loader(new DataLoader());
  loader->e = 100;
  int r = loader->loadCSV();
  cout << loader->e + r << endl;
  return 0;
}

int main() {
  cout << "Hello, World!" << endl;
  test1();
  return 0;
}