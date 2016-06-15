//
// Created by Daiki Iizuka on 2016/06/10.
//
#include <iostream>
#include <string>
#include <fstream>
#include "DataLoader.h"


int DataLoader::loadCSV () {
  cout << "Good" << endl;
  return 20;
};

void DataLoader::loadText (char* filePath) {
  std::ifstream ifs(filePath);
  string str;
  if (ifs.fail()) {
    cout << "fail" << endl;
    return;
  }
  while (getline(ifs, str)) {
    cout << str << endl;
  }
};


