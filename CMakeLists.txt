cmake_minimum_required(VERSION 3.0)
project(polyfill-prototype-1 CXX)
add_executable(pack-asmjs src/unpack.cpp src/cashew/parser.cpp src/pack-asmjs.cpp)
add_executable(unpack-asmjs src/unpack.cpp src/unpack-asmjs.cpp)
include_directories("${CMAKE_SOURCE_DIR}")
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -Wall -Wpedantic -Wextra --std=c++11")
target_compile_definitions(pack-asmjs PRIVATE -DCHECKED_OUTPUT_SIZE)

