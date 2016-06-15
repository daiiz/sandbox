//
// Created by Daiki Iizuka on 2016/06/10.
//
#include <iostream>
#include <fstream>
#include <map>
#include <list>
#include "DataLoader.h"


int DataLoader::loadCSV () {
  cout << "Good" << endl;
  return 20;
};

void DataLoader::loadText (std::string filePath) {
  std::ifstream ifs(filePath);
  std::string str;
  if (ifs.fail()) {
    // TODO: エラーの詳細調べ方
    cout << "fail" << endl;
    return;
  }

  // マップを作ってみる
  // 頭文字をキー，名称を値とする
  map<string, string> namesMap;
  while (getline(ifs, str)) {
    cout << str << endl;
    // 頭文字
    string initials = str.substr(0, 1);
    namesMap.insert(map<string, string>::value_type(initials, str));
  }
  cout << namesMap.size() << endl;
};


