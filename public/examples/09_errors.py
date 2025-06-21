# 第九课：错误处理 - 优雅地处理问题
# Lesson 9: Error Handling - Gracefully Dealing with Problems

print("=== 基本错误处理 ===")

# 基本try-except结构 - Basic try-except structure
def safe_divide(a, b):
    """安全除法函数"""
    try:
        result = a / b
        return f"{a} ÷ {b} = {result}"
    except ZeroDivisionError:
        return f"错误：不能除以零！"

print("测试除法：")
print(safe_divide(10, 2))  # 正常情况
print(safe_divide(10, 0))  # 错误情况

print("\n=== 多种错误类型处理 ===")

# 处理多种错误类型 - Handling multiple error types
def safe_calculator(value1, value2, operation):
    """安全的计算器函数"""
    try:
        # 尝试转换为数字
        num1 = float(value1)
        num2 = float(value2)
        
        # 根据操作符计算
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 == 0:
                raise ZeroDivisionError("除数不能为零")
            result = num1 / num2
        else:
            raise ValueError(f"不支持的操作符: {operation}")
            
        return f"{value1} {operation} {value2} = {result}"
        
    except ValueError as e:
        return f"数值错误：{e}"
    except ZeroDivisionError as e:
        return f"除法错误：{e}"
    except Exception as e:
        return f"未知错误：{e}"

print("测试计算器：")
print(safe_calculator("10", "5", "+"))    # 正常
print(safe_calculator("abc", "5", "+"))   # 数值错误
print(safe_calculator("10", "0", "/"))    # 除零错误
print(safe_calculator("10", "5", "^"))    # 操作符错误

print("\n=== 用户输入验证 ===")

# 用户输入验证 - Input validation
def validate_age(age_str):
    """验证年龄输入"""
    try:
        age = int(age_str)
        
        if age < 0:
            raise ValueError("年龄不能为负数")
        elif age > 150:
            raise ValueError("年龄不能超过150岁")
        elif age == 0:
            return "刚出生的婴儿"
        elif age < 18:
            return f"{age}岁，未成年人"
        elif age < 60:
            return f"{age}岁，成年人"
        else:
            return f"{age}岁，老年人"
            
    except ValueError as e:
        if "invalid literal" in str(e):
            return f"输入错误：请输入数字"
        else:
            return f"年龄错误：{e}"

print("测试年龄验证：")
test_ages = ["25", "abc", "-5", "200", "0", "16"]
for age in test_ages:
    print(f"输入 \"{age}\": {validate_age(age)}")

print("\n=== finally语句的使用 ===")

# finally语句的使用 - Using finally statement
def process_data(data):
    """数据处理，确保清理资源"""
    print(f"开始处理数据: {data}")
    
    try:
        if not data:
            raise ValueError("数据为空")
            
        if not isinstance(data, (list, str)):
            raise TypeError("数据类型不支持")
            
        # 模拟数据处理
        result = f"处理完成，数据长度: {len(data)}"
        print(f"处理成功: {result}")
        return result
        
    except ValueError as e:
        print(f"数据错误: {e}")
        return None
    except TypeError as e:
        print(f"类型错误: {e}")
        return None
    finally:
        # 无论是否出错都会执行
        print("清理资源和临时文件")
        print("-" * 30)

print("测试数据处理：")
test_data = [[1, 2, 3], "", "hello", 123]
for data in test_data:
    process_data(data)

print("\n=== 自定义异常 ===")

# 自定义异常 - Custom exceptions
class StudentError(Exception):
    """学生相关错误"""
    pass

class ScoreError(StudentError):
    """成绩相关错误"""
    pass

class AgeError(StudentError):
    """年龄相关错误"""
    pass

def create_student(name, age, score):
    """创建学生信息"""
    try:
        # 验证姓名
        if not name or len(name.strip()) == 0:
            raise StudentError("姓名不能为空")
            
        # 验证年龄
        if not isinstance(age, int) or age < 6 or age > 25:
            raise AgeError(f"学生年龄应在6-25岁之间，当前: {age}岁")
            
        # 验证成绩
        if not isinstance(score, (int, float)) or score < 0 or score > 100:
            raise ScoreError(f"成绩应在0-100分之间，当前: {score}分")
            
        return {
            "name": name.strip(),
            "age": age,
            "score": score,
            "status": "创建成功"
        }
        
    except AgeError as e:
        return {"error": f"年龄错误: {e}"}
    except ScoreError as e:
        return {"error": f"成绩错误: {e}"}
    except StudentError as e:
        return {"error": f"学生信息错误: {e}"}
    except Exception as e:
        return {"error": f"未知错误: {e}"}

print("测试学生创建：")
test_students = [
    ("张三", 16, 85),    # 正常
    ("", 16, 85),       # 姓名为空
    ("李四", 30, 85),    # 年龄超范围
    ("王五", 16, 150),   # 成绩超范围
    ("赵六", 16, 95)     # 正常
]

for name, age, score in test_students:
    result = create_student(name, age, score)
    print(f"学生({name}, {age}, {score}): {result}")

print("\n=== 错误处理最佳实践 ===")
print("1. 具体捕获异常，避免使用裸露的except")
print("2. 记录错误信息，便于调试")
print("3. 优雅降级，提供备选方案")
print("4. 使用finally清理资源")
print("5. 自定义异常，提供更好的错误信息")