# 第二课：变量 - 存储和使用数据
# Lesson 2: Variables - Storing and Using Data

# 字符串变量 - String variables
name = "小明"  # Xiao Ming (common Chinese name)
english_name = "Tom"
print(f"中文名字: {name}")
print(f"English name: {english_name}")

# 数字变量 - Number variables
age = 16
height = 170.5
print(f"年龄: {age} 岁")    # Age in years
print(f"身高: {height} 厘米")  # Height in centimeters

# 布尔变量 - Boolean variables
is_student = True
has_homework = False
print(f"是学生: {is_student}")
print(f"有作业: {has_homework}")

# 变量运算 - Variable operations
score1 = 85
score2 = 92
score3 = 78
total = score1 + score2 + score3
average = total / 3

print(f"三次考试成绩: {score1}, {score2}, {score3}")
print(f"总分: {total}")
print(f"平均分: {average:.1f}")

# 字符串拼接 - String concatenation
first_name = "李"
last_name = "小红"
full_name = first_name + last_name
print(f"全名: {full_name}")

# 变量类型 - Variable types
print(f"name的类型: {type(name)}")
print(f"age的类型: {type(age)}")
print(f"height的类型: {type(height)}")
print(f"is_student的类型: {type(is_student)}")