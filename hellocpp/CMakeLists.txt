cmake_minimum_required(VERSION 3.5)
project(hellocpp)

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -stdlib=libstdc++")

set(SOURCE_FILES DataLoader.cpp DataLoader.h main.cpp)
add_executable(hellocpp ${SOURCE_FILES})