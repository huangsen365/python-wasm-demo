# 第四课：字典 - 键值对数据存储
# Lesson 4: Dictionaries - Key-Value Data Storage

# 创建字典 - Creating dictionaries
student = {
    "姓名": "王小华",
    "年龄": 17,
    "班级": "高二3班",
    "成绩": 88.5
}

print("学生信息:", student)

# 访问字典值 - Accessing dictionary values
print(f"姓名: {student['姓名']}")
print(f"年龄: {student['年龄']}")
print(f"班级: {student['班级']}")

# 使用get方法 - Using get method
grade = student.get("成绩", "未知")
phone = student.get("电话", "未提供")
print(f"成绩: {grade}")
print(f"电话: {phone}")

# 添加新键值对 - Adding new key-value pairs
student["爱好"] = ["阅读", "运动", "音乐"]
student["地址"] = "北京市"
print("添加信息后:", student)

# 修改值 - Modifying values
student["年龄"] = 18
student["成绩"] = 92.0
print("修改后:", student)

# 字典方法 - Dictionary methods
print("所有键:", list(student.keys()))
print("所有值:", list(student.values()))
print("所有项:", list(student.items()))

# 遍历字典 - Iterating through dictionary
print("\n学生详细信息:")
for key, value in student.items():
    print(f"{key}: {value}")

# 嵌套字典 - Nested dictionaries
class_info = {
    "班级名称": "高二3班",
    "班主任": "李老师",
    "学生": {
        "王小华": {"年龄": 17, "成绩": 88.5},
        "张小明": {"年龄": 16, "成绩": 92.0},
        "李小红": {"年龄": 17, "成绩": 85.5}
    }
}

print("\n班级信息:")
print(f"班级: {class_info['班级名称']}")
print(f"班主任: {class_info['班主任']}")

print("\n学生成绩:")
for name, info in class_info["学生"].items():
    print(f"{name}: 年龄{info['年龄']}, 成绩{info['成绩']}")

# 字典应用示例 - Dictionary application example
menu = {
    "汉堡": 25.0,
    "薯条": 12.0,
    "可乐": 8.0,
    "沙拉": 18.0
}

order = ["汉堡", "薯条", "可乐"]
total = sum(menu[item] for item in order)

print(f"\n点餐单: {order}")
print(f"总价: {total}元")