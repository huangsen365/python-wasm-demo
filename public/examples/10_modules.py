# 第十课：模块 - 使用Python标准库
# Lesson 10: Modules - Using Python Standard Library

print("=== 数学模块 ===")
import math

print(f"圆周率: {math.pi}")
print(f"平方根: {math.sqrt(16)}")
print(f"向上取整: {math.ceil(4.3)}")
print(f"向下取整: {math.floor(4.7)}")

print("\n=== 随机数模块 ===")
import random

print(f"随机数: {random.random()}")
print(f"随机整数: {random.randint(1, 10)}")

fruits = ["苹果", "香蕉", "橙子"]
print(f"随机水果: {random.choice(fruits)}")

print("\n=== 日期时间模块 ===")
from datetime import datetime

now = datetime.now()
print(f"当前时间: {now}")
print(f"格式化: {now.strftime('%Y年%m月%d日')}")

print("\n=== JSON模块 ===")
import json

data = {"姓名": "张三", "年龄": 25}
json_str = json.dumps(data, ensure_ascii=False)
print(f"JSON: {json_str}")

print("\n模块让Python功能更强大！")