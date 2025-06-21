# 第三课：列表 - 存储多个项目
# Lesson 3: Lists - Storing Multiple Items

# 创建列表 - Creating lists
fruits = ["苹果", "香蕉", "橙子", "葡萄"]
numbers = [1, 2, 3, 4, 5]
mixed = ["张三", 18, True, 98.5]

print("水果列表:", fruits)
print("数字列表:", numbers)
print("混合列表:", mixed)

# 访问列表项 - Accessing list items
print(f"第一个水果: {fruits[0]}")
print(f"第二个水果: {fruits[1]}")
print(f"最后一个水果: {fruits[-1]}")

# 列表长度 - List length
print(f"水果总数: {len(fruits)}")
print(f"数字总数: {len(numbers)}")

# 添加项目 - Adding items
fruits.append("草莓")  # Add strawberry
print("添加草莓后:", fruits)

# 插入项目 - Inserting items
fruits.insert(1, "菠萝")  # Insert pineapple at position 1
print("插入菠萝后:", fruits)

# 删除项目 - Removing items
fruits.remove("香蕉")  # Remove banana
print("删除香蕉后:", fruits)

# 列表切片 - List slicing
subset = fruits[1:4]  # Get items from index 1 to 3
print("子列表 [1:4]:", subset)

# 遍历列表 - Iterating through list
print("\n所有水果:")
for fruit in fruits:
    print(f"- {fruit}")

# 列表推导式 - List comprehension
squares = [x**2 for x in numbers]
print(f"平方数列表: {squares}")

# 排序 - Sorting
scores = [85, 92, 78, 96, 88]
print("原始分数:", scores)
scores.sort()
print("排序后分数:", scores)
scores.sort(reverse=True)
print("降序分数:", scores)