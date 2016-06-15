cmake_minimum_required(VERSION 3.5)
project(hellocpp)

find_package(Boost 1.58.0 COMPONENTS system filesystem REQUIRED)

if(Boost_FOUND)
    message(STATUS "Boost_INCLUDE_DIRS: ${Boost_INCLUDE_DIRS}")
    message(STATUS "Boost_LIBRARIES: ${Boost_LIBRARIES}")
    message(STATUS "Boost_VERSION: ${Boost_VERSION}")
    include_directories(${Boost_INCLUDE_DIRS})
endif()

set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -stdlib=libstdc++")

set(SOURCE_FILES DataLoader.cpp DataLoader.h main.cpp)
add_executable(hellocpp ${SOURCE_FILES})


if(Boost_FOUND)
    target_link_libraries(hellocpp ${Boost_LIBRARIES})
endif()