@echo off
set CUR_DIR=%cd%
%CUR_DIR%\node_modules\.bin\babel.cmd %CUR_DIR%\src --out-dir %CUR_DIR%\bin