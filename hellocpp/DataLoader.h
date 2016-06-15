//
// Created by Daiki Iizuka on 2016/06/10.
//

#ifndef HELLOCPP_DATALOADER_H
#define HELLOCPP_DATALOADER_H
#endif //HELLOCPP_DATALOADER_H

using namespace std;

class DataLoader {
  public:
    int e;
    int loadCSV();
    void androidCodeNames(string, std::shared_ptr <map<string, string>>);
};