# 第五课：条件控制 - 让程序做决定
# Lesson 5: Control Flow - Making Decisions

# 基本if语句 - Basic if statement
age = 18
print(f"年龄: {age}岁")

if age >= 18:
    print("你已经成年了！")
    print("You are an adult!")
else:
    print("你还未成年")
    print("You are a minor")

# 多重条件 (elif) - Multiple conditions
score = 85
print(f"\n考试成绩: {score}分")

if score >= 90:
    grade = "优秀"
    comment = "太棒了！"
elif score >= 80:
    grade = "良好"
    comment = "不错哦！"
elif score >= 70:
    grade = "中等"
    comment = "还需努力"
elif score >= 60:
    grade = "及格"
    comment = "刚好及格"
else:
    grade = "不及格"
    comment = "需要加油！"

print(f"等级: {grade} - {comment}")

# 复合条件 - Compound conditions
temperature = 25
is_sunny = True
is_weekend = True

print(f"\n温度: {temperature}°C")
print(f"晴天: {is_sunny}")
print(f"周末: {is_weekend}")

# 使用and (并且)
if temperature > 20 and is_sunny:
    print("天气很好，适合出门！")

# 使用or (或者)
if temperature > 30 or temperature < 10:
    print("温度比较极端")

# 使用and连接多个条件
if temperature > 15 and is_sunny and is_weekend:
    print("完美的周末！去公园走走吧！")
elif is_weekend:
    print("虽然是周末，但天气一般")
else:
    print("工作日，专心工作吧")

# 使用not (非) - Using not
has_account = True
remember_password = False

print(f"\n账号状态检查:")
if has_account and not remember_password:
    print("有账号但忘记密码了，请重置密码")
elif not has_account:
    print("没有账号，请先注册")
else:
    print("欢迎登录！")

# 使用in操作符 - Using in operator
favorite_colors = ["红色", "蓝色", "绿色"]
user_color = "蓝色"

if user_color in favorite_colors:
    print(f"{user_color}是我喜欢的颜色之一！")
else:
    print(f"{user_color}不是我喜欢的颜色")

# 嵌套条件 - Nested conditions
is_member = True
purchase_amount = 150

print(f"\n购物折扣计算:")
if is_member:
    print("你是会员！")
    if purchase_amount >= 100:
        discount = 0.2  # 20%折扣
        print("购买满100元，享受20%会员折扣！")
    else:
        discount = 0.1  # 10%折扣
        print("会员享受10%折扣")
else:
    print("不是会员")
    if purchase_amount >= 200:
        discount = 0.05  # 5%折扣
        print("购买满200元，享受5%折扣")
    else:
        discount = 0
        print("无折扣")

final_price = purchase_amount * (1 - discount)
print(f"原价: {purchase_amount}元")
print(f"最终价格: {final_price}元")