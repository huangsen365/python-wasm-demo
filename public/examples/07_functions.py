# 第七课：函数 - 可重用的代码块
# Lesson 7: Functions - Reusable Code Blocks

# 简单函数定义 - Simple function definition
def greet(name):
    """问候函数，返回问候消息"""
    return f"你好, {name}!"

# 调用函数 - Call the function
message = greet("小明")
print(message)

# 带多个参数的函数 - Function with multiple parameters
def calculate_area(length, width):
    """计算矩形面积"""
    area = length * width
    return area

# 计算房间面积 - Calculate room area
room_area = calculate_area(10, 12)
print(f"房间面积: {room_area} 平方米")

# 带默认参数的函数 - Function with default parameters
def introduce(name, age=0):
    """自我介绍函数"""
    if age > 0:
        return f"大家好，我是{name}，{age}岁"
    return f"大家好，我是{name}"

# 测试默认参数 - Test default parameters
print(introduce("小红"))
print(introduce("小李", 25))

# 返回多个值的函数 - Function returning multiple values
def get_student_info():
    """获取学生信息"""
    name = "张小华"
    age = 17
    grade = "高二"
    return name, age, grade

# 接收多个返回值
student_name, student_age, student_grade = get_student_info()
print(f"学生: {student_name}, {student_age}岁, {student_grade}")

# 数学函数示例 - Math function examples
def calculate_score_stats(scores):
    """计算成绩统计"""
    if not scores:
        return 0, 0, 0
    
    total = sum(scores)
    average = total / len(scores)
    highest = max(scores)
    
    return total, average, highest

# 测试数学函数
test_scores = [85, 92, 78, 96, 88]
total, avg, highest = calculate_score_stats(test_scores)

print(f"\n成绩统计:")
print(f"总分: {total}")
print(f"平均分: {avg:.1f}")
print(f"最高分: {highest}")

# 递归函数示例 - Recursive function example
def factorial(n):
    """计算阶乘"""
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"\n阶乘计算:")
for i in range(1, 6):
    result = factorial(i)
    print(f"{i}! = {result}")

# 实用工具函数 - Utility functions
def is_valid_score(score):
    """检查分数是否有效"""
    return 0 <= score <= 100

def grade_level(score):
    """根据分数返回等级"""
    if not is_valid_score(score):
        return "无效分数"
    elif score >= 90:
        return "优秀"
    elif score >= 80:
        return "良好"
    elif score >= 70:
        return "中等"
    elif score >= 60:
        return "及格"
    else:
        return "不及格"

# 测试工具函数
test_scores = [95, 87, 72, 58, 105]
print(f"\n成绩等级评定:")
for score in test_scores:
    level = grade_level(score)
    print(f"分数 {score}: {level}")