#include <iostream>
#include <memory>
#include <map>
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

int test2 () {
  std::unique_ptr <DataLoader> loader(new DataLoader());
  std::unique_ptr <string> fname(new string("/Users/daiki/GitHubRepos/sandbox/hellocpp/android_names.txt"));
  std::string fn = "/Users/daiki/GitHubRepos/sandbox/hellocpp/android_names.txt";

  // &fname: アドレス番地が見れる
  // *fname: 格納されているものが見れる
  cout << &fn << endl;
  cout << fn << endl;

  //loader->loadText(fname->c_str());

  std::shared_ptr <map<string, string>> namesMap(new map<string, string>());
  loader->androidCodeNames(fn, namesMap);
  cout << namesMap->size() << endl;
  return 0;
}


int main() {
  cout << "Hello, World!\n" << endl;
  test2();
  return 0;
}