#!/bin/bash
#
# 修复node_modules中存在问题的模块
#

echo "start..."

# 1. 修复 表格证书 错误

#　"ag-grid-enterprise": "^17.0.0"
# 注释报错
url_old="./node_modules/ag-grid-enterprise/dist/lib/licenseManager.js"
url_new="./src/assets/js/ag-grid-enterprise/licenseManager.js"
cp -rf $url_new $url_old

echo "replace pkg success"
