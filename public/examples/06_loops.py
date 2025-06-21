# 第六课：循环 - 重复执行代码
# Lesson 6: Loops - Repeating Code

# for循环与range - for loop with range
print("=== 基本for循环 ===")
print("数数从1到5:")
for i in range(1, 6):
    print(f"  第{i}次")

# 遍历列表 - Iterating through a list
print("\n=== 遍历列表 ===")
colors = ["红色", "绿色", "蓝色", "黄色"]
print("颜色列表:")
for color in colors:
    print(f"  - {color}")

# while循环 - while loop
print("\n=== while循环 ===")
count = 3
print("倒计时:")
while count > 0:
    print(f"  {count}...")
    count -= 1
print("  完成！")

# 循环计算 - Loop calculations
print("\n=== 计算总和 ===")
numbers = [10, 20, 30, 40, 50]
total = 0
for num in numbers:
    total += num
    print(f"加上 {num}, 当前总和: {total}")
print(f"最终总和: {total}")

# 嵌套循环 - Nested loops
print("\n=== 九九乘法表 ===")
for i in range(1, 4):  # 只显示前3行作为示例
    for j in range(1, 6):  # 只显示前5列
        result = i * j
        print(f"{i}×{j}={result:2d}", end="  ")
    print()  # 换行

# 带条件的循环 - Loops with conditions
print("\n=== 查找偶数 ===")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []
for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
        print(f"找到偶数: {num}")

print(f"所有偶数: {even_numbers}")

# break和continue - break and continue
print("\n=== break示例 ===")
for i in range(1, 11):
    if i == 6:
        print(f"  遇到{i}，停止循环")
        break
    print(f"  数字: {i}")

print("\n=== continue示例 ===")
for i in range(1, 8):
    if i % 2 == 0:
        continue  # 跳过偶数
    print(f"  奇数: {i}")

# 实际应用：学生成绩统计
print("\n=== 学生成绩统计 ===")
students = {
    "张三": 85,
    "李四": 92,
    "王五": 78,
    "赵六": 96,
    "钱七": 88
}

print("所有学生成绩:")
excellent_count = 0
for name, score in students.items():
    print(f"  {name}: {score}分", end="")
    if score >= 90:
        print(" (优秀)")
        excellent_count += 1
    elif score >= 80:
        print(" (良好)")
    else:
        print(" (需努力)")

print(f"\n优秀学生人数: {excellent_count}")
average = sum(students.values()) / len(students)
print(f"班级平均分: {average:.1f}")