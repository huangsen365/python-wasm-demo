        // Initialize global variables immediately for testing accessibility
        window.currentFile = null;
        window.files = new Map();
        window.openTabs = [];
        window.exampleFiles = [
            'welcome.py',
            '01_hello_world.py',
            '02_variables.py',
            '03_lists.py',
            '04_dictionaries.py',
            '05_control_flow.py',
            '06_loops.py',
            '07_functions.py',
            '08_classes.py',
            '09_errors.py',
            '10_modules.py'
        ];
        
        // exampleTemplates will be initialized later with full content
        
        // Initialize local variables
        let pyodide;
        let editor;
        let maxTerminalLines = 500;
        let maxOpenTabs = 3;
        let terminalLineCount = 0;
        
        // Initialize functions immediately for testing (proper implementation follows)
        window.loadFile = function(filename) {
            console.log('loadFile called early:', filename);
            // Will be replaced by full implementation
        };
        
        window.updateFileTree = function() {
            console.log('updateFileTree called early');
            const fileTree = document.getElementById('file-tree');
            if (fileTree && window.exampleFiles) {
                fileTree.innerHTML = '';
                window.exampleFiles.forEach(fileName => {
                    const li = document.createElement('li');
                    li.className = 'file-item' + (fileName === window.currentFile ? ' active' : '');
                    li.onclick = () => window.loadFile(fileName);
                    const isLoaded = window.files.has(fileName);
                    const icon = isLoaded ? '📄' : '📋';
                    li.innerHTML = `<span class="file-icon">${icon}</span> ${fileName}`;
                    fileTree.appendChild(li);
                });
                console.log('File tree populated with', window.exampleFiles.length, 'items');
            } else {
                console.error('File tree element or exampleFiles not found');
            }
        };

        // Library loading is now handled in specific initialization functions

        // Terminal elements
        const terminalOutput = document.getElementById('terminal-output');
        const terminalInput = document.getElementById('terminal-input');
        const terminalInputLine = document.getElementById('terminal-input-line');
        const memoryInfo = document.getElementById('memory-info');

        // Example files list already initialized at top of script

        // Load templates with proper formatting
        window.exampleTemplates = {};
        
        // Helper function to create properly formatted templates
        function addTemplate(name, content) {
            window.exampleTemplates[name] = content.replace(/\\n/g, '\n');
        }
        window.exampleTemplates['welcome.py'] = `# 欢迎来到Python在线编程环境！🐍
# Welcome to Python Online IDE!

# 这是一个完全在浏览器中运行的Python开发环境
# This is a Python development environment that runs entirely in your browser

print("🎉 欢迎学习Python编程！")
print("Welcome to Python Programming!")
print("您的编程学习之旅从这里开始！")
print("Your programming journey begins here!")

# 试着修改下面的代码，然后点击"运行"按钮看看效果
# Try modifying the code below, then click the "Run" button to see the result
name = "您的姓名"  # 请把"您的姓名"改成你的真实姓名！
print(f"你好，{name}！祝你编程愉快！🚀")

# 学习建议：
# Learning tips:
# 1. 点击左侧文件列表中的其他示例文件来学习更多Python概念
#    Click on other example files in the left sidebar to learn more Python concepts
# 2. 每个文件都包含详细的中文注释和说明
#    Each file contains detailed Chinese comments and explanations  
# 3. 尝试修改代码并运行，这是学习编程的最好方法
#    Try modifying the code and running it - this is the best way to learn programming
# 4. 如果遇到错误，仔细阅读终端中的错误信息
#    If you encounter errors, carefully read the error messages in the terminal

print("\n开始你的Python学习之旅吧！Let's start your Python learning journey!")`;
        addTemplate('01_hello_world.py', '# 第一课：Python基础和Hello World程序\\n# 这是你的第一个Python程序\\n\\nprint(\\\"Hello, World!\\\")\\nprint(\\\"你好，世界!\\\")\\n\\n# 使用变量\\nname = \\\"Python学习者\\\"\\nprint(f\\\"你好，{name}!\\\")\\n\\n# Python可以做数学计算\\nprint(f\\\"2 + 2 = {2 + 2}\\\")\\nprint(f\\\"10 - 3 = {10 - 3}\\\")\\nprint(f\\\"4 * 5 = {4 * 5}\\\")\\nprint(f\\\"15 / 3 = {15 / 3}\\\")');
        
        addTemplate('02_variables.py', '# 第二课：变量和数据类型\\n# Variables and Data Types\\n\\n# 数字\\nage = 25\\nheight = 1.75\\nprint(f\\\"年龄: {age}岁\\\")\\nprint(f\\\"身高: {height}米\\\")\\n\\n# 文字\\nname = \\\"张三\\\"\\ncity = \\\"北京\\\"\\nprint(f\\\"姓名: {name}\\\")\\nprint(f\\\"城市: {city}\\\")\\n\\n# 布尔值\\nis_student = True\\nprint(f\\\"是学生吗: {is_student}\\\")');
        
        addTemplate('03_lists.py', '# 第三课：列表\\n# Lists in Python\\n\\n# 创建列表\\nfruits = [\\\"苹果\\\", \\\"香蕉\\\", \\\"橙子\\\"]\\nnumbers = [1, 2, 3, 4, 5]\\n\\nprint(\\\"水果列表:\\\", fruits)\\nprint(\\\"数字列表:\\\", numbers)\\n\\n# 访问元素\\nprint(f\\\"第一个水果: {fruits[0]}\\\")\\nprint(f\\\"最后一个水果: {fruits[-1]}\\\")\\n\\n# 添加元素\\nfruits.append(\\\"葡萄\\\")\\nprint(\\\"添加后:\\\", fruits)\\n\\n# 遍历列表\\nfor fruit in fruits:\\n    print(f\\\"水果: {fruit}\\\")');
        
        addTemplate('04_dictionaries.py', '# 第四课：字典 - 键值对数据结构\\n# Lesson 4: Dictionaries - Key-Value Data Structure\\n\\n# 字典是一种存储键值对的数据结构，就像现实中的字典一样\\n# Dictionaries store key-value pairs, just like a real dictionary\\n\\n# 1. 创建字典\\n# ==========\\n\\n# 个人信息字典\\nperson = {\\n    "姓名": "张三",\\n    "年龄": 25,\\n    "城市": "北京",\\n    "职业": "程序员"\\n}\\n\\nprint("个人信息:", person)\\nprint("Person info:", person)\\n\\n# 2. 访问字典中的值\\n# ===============\\n\\nprint("\\\\n=== 访问字典值 ===")\\nprint(f"姓名: {person[\\"姓名\\"]}")\\nprint(f"年龄: {person[\\"年龄\\"]}岁")\\nprint(f"城市: {person[\\"城市\\"]}")\\n\\n# 使用get()方法更安全地访问（如果键不存在不会报错）\\nprint(f"职业: {person.get(\\"职业\\", \\"未知\\")}")\\nprint(f"薪资: {person.get(\\"薪资\\", \\"未设置\\")}")  # 这个键不存在\\n\\n# 3. 修改和添加值\\n# =============\\n\\nprint("\\\\n=== 修改字典 ===")\\n# 修改现有的值\\nperson[\\"年龄\\"] = 26\\nprint("生日后年龄:", person[\\"年龄\\"])\\n\\n# 添加新的键值对\\nperson[\\"邮箱\\"] = \\"zhangsan@example.com\\"\\nperson[\\"爱好\\"] = [\\"编程\\", \\"阅读\\", \\"运动\\"]\\nprint("添加邮箱和爱好后:", person)\\n\\n# 4. 删除字典元素\\n# =============\\n\\nprint("\\\\n=== 删除元素 ===")\\n# 使用del删除\\nif \\"职业\\" in person:\\n    del person[\\"职业\\"]\\n    print("删除职业后:", person)\\n\\n# 使用pop()删除并返回值\\nremoved_hobby = person.pop(\\"爱好\\", \\"没有这个键\\")\\nprint(f"删除的爱好: {removed_hobby}")\\n\\n# 5. 字典的常用方法\\n# ===============\\n\\nprint("\\\\n=== 字典信息 ===")\\nprint(f"字典长度: {len(person)}个项目")\\nprint(f"所有键: {list(person.keys())}")\\nprint(f"所有值: {list(person.values())}")\\nprint(f"所有键值对: {list(person.items())}")\\n\\n# 6. 遍历字典\\n# ==========\\n\\nprint("\\\\n=== 遍历字典 ===")\\n# 遍历键\\nprint("所有键:")\\nfor key in person:\\n    print(f"  - {key}")\\n\\n# 遍历值\\nprint("\\\\n所有值:")\\nfor value in person.values():\\n    print(f"  - {value}")\\n\\n# 遍历键值对\\nprint("\\\\n键值对:")\\nfor key, value in person.items():\\n    print(f"  {key}: {value}")\\n\\n# 7. 嵌套字典\\n# ==========\\n\\nprint("\\\\n=== 嵌套字典 ===")\\nstudents = {\\n    \\"学生1\\": {\\n        \\"姓名\\": \\"李四\\",\\n        \\"年龄\\": 20,\\n        \\"成绩\\": {\\"语文\\": 85, \\"数学\\": 92, \\"英语\\": 78}\\n    },\\n    \\"学生2\\": {\\n        \\"姓名\\": \\"王五\\",\\n        \\"年龄\\": 21,\\n        \\"成绩\\": {\\"语文\\": 90, \\"数学\\": 88, \\"英语\\": 95}\\n    }\\n}\\n\\nprint("班级信息:")\\nfor student_id, info in students.items():\\n    name = info[\\"姓名\\"]\\n    age = info[\\"年龄\\"]\\n    math_score = info[\\"成绩\\"][\\"数学\\"]\\n    print(f"  {student_id}: {name}，{age}岁，数学成绩：{math_score}分")\\n\\n# 8. 练习题\\n# ========\\nprint("\\\\n=== 练习时间 ===")\\n# 创建你自己的个人档案字典\\nmy_profile = {\\n    \\"姓名\\": \\"你的名字\\",\\n    \\"年龄\\": 18,\\n    \\"城市\\": \\"你的城市\\",\\n    \\"爱好\\": [\\"编程\\", \\"学习\\"]\\n}\\n\\nprint("我的档案:", my_profile)\\n\\n# 挑战：添加更多信息到你的档案中，比如学校、专业等');
        
        addTemplate('05_control_flow.py', '# 第五课：条件控制 - 让程序做决定\\n# Lesson 5: Control Flow - Making Decisions\\n\\n# 条件语句让程序根据不同情况执行不同的代码\\n# Conditional statements allow programs to execute different code based on conditions\\n\\n# 1. 基本if语句\\n# ===========\\n\\nprint("=== 基本条件判断 ===")\\nage = 18\\nprint(f"年龄: {age}岁")\\n\\nif age >= 18:\\n    print("你已经成年了！")\\n    print("You are an adult!")\\nelse:\\n    print("你还未成年")\\n    print("You are a minor")\\n\\n# 2. 多重条件 (elif)\\n# ================\\n\\nprint("\\\\n=== 成绩等级判断 ===")\\nscore = 85\\nprint(f"考试成绩: {score}分")\\n\\nif score >= 90:\\n    grade = "优秀"\\n    comment = "太棒了！"\\nelif score >= 80:\\n    grade = "良好"\\n    comment = "不错哦！"\\nelif score >= 70:\\n    grade = "中等"\\n    comment = "还需努力"\\nelif score >= 60:\\n    grade = "及格"\\n    comment = "刚好及格"\\nelse:\\n    grade = "不及格"\\n    comment = "需要加油！"\\n\\nprint(f"等级: {grade} - {comment}")\\n\\n# 3. 复合条件\\n# ==========\\n\\nprint("\\\\n=== 天气建议 ===")\\ntemperature = 25  # 温度\\nis_sunny = True   # 是否晴天\\nis_weekend = True # 是否周末\\n\\nprint(f"温度: {temperature}°C")\\nprint(f"晴天: {is_sunny}")\\nprint(f"周末: {is_weekend}")\\n\\n# 使用and (并且)\\nif temperature > 20 and is_sunny:\\n    print("天气很好，适合出门！")\\n\\n# 使用or (或者)\\nif temperature > 30 or temperature < 10:\\n    print("温度比较极端")\\n\\n# 使用and连接多个条件\\nif temperature > 15 and is_sunny and is_weekend:\\n    print("完美的周末！去公园走走吧！")\\nelif is_weekend:\\n    print("虽然是周末，但天气一般")\\nelse:\\n    print("工作日，专心工作吧")\\n\\n# 4. 使用not (非)\\n# =============\\n\\nprint("\\\\n=== 登录检查 ===")\\nhas_account = True\\nremember_password = False\\n\\nif has_account and not remember_password:\\n    print("有账号但忘记密码了，请重置密码")\\nelif not has_account:\\n    print("没有账号，请先注册")\\nelse:\\n    print("欢迎登录！")\\n\\n# 5. 使用in操作符\\n# =============\\n\\nprint("\\\\n=== 喜好检查 ===")\\nfavorite_colors = ["红色", "蓝色", "绿色"]\\nuser_color = "蓝色"\\n\\nif user_color in favorite_colors:\\n    print(f"{user_color}是我喜欢的颜色之一！")\\nelse:\\n    print(f"{user_color}不是我喜欢的颜色")\\n\\n# 6. 嵌套条件\\n# ==========\\n\\nprint("\\\\n=== 购物折扣 ===")\\nis_member = True\\npurchase_amount = 150\\n\\nif is_member:\\n    print("你是会员！")\\n    if purchase_amount >= 100:\\n        discount = 0.2  # 20%折扣\\n        print("购买满100元，享受20%会员折扣！")\\n    else:\\n        discount = 0.1  # 10%折扣\\n        print("会员享受10%折扣")\\nelse:\\n    print("不是会员")\\n    if purchase_amount >= 200:\\n        discount = 0.05  # 5%折扣\\n        print("购买满200元，享受5%折扣")\\n    else:\\n        discount = 0\\n        print("无折扣")\\n\\nfinal_price = purchase_amount * (1 - discount)\\nprint(f"原价: {purchase_amount}元")\\nprint(f"最终价格: {final_price}元")\\n\\n# 7. 实际应用示例\\n# =============\\n\\nprint("\\\\n=== 学生信息系统 ===")\\nstudent_age = 16\\nstudent_grade = 88\\nhas_homework = False\\n\\nprint(f"学生年龄: {student_age}岁")\\nprint(f"考试成绩: {student_grade}分")\\nprint(f"完成作业: {has_homework}")\\n\\n# 综合判断\\nif student_age < 18:\\n    print("未成年学生")\\n    if student_grade >= 85 and has_homework:\\n        print("优秀学生，给予表扬！")\\n    elif student_grade >= 85:\\n        print("成绩优秀，但要记得完成作业")\\n    elif has_homework:\\n        print("作业完成良好，继续加油提高成绩")\\n    else:\\n        print("需要更加努力学习")\\nelse:\\n    print("成年学生，要更加自觉")\\n\\n# 8. 练习题\\n# ========\\nprint("\\\\n=== 练习时间 ===")\\n# 创建一个简单的计算器\\nnum1 = 10\\nnum2 = 3\\noperation = "+"  # 可以改成 "-", "*", "/"\\n\\nprint(f"计算: {num1} {operation} {num2}")\\n\\nif operation == "+":\\n    result = num1 + num2\\nelif operation == "-":\\n    result = num1 - num2\\nelif operation == "*":\\n    result = num1 * num2\\nelif operation == "/":\\n    if num2 != 0:\\n        result = num1 / num2\\n    else:\\n        result = "错误：不能除以0"\\nelse:\\n    result = "未知操作"\\n\\nprint(f"结果: {result}")\\n\\n# 挑战：创建一个年龄分组程序，根据年龄判断是儿童、青少年、成年人还是老年人');
        
        addTemplate('06_loops.py', '# Loops - Repeating Actions\\n# for and while loops\\n\\n# For loop with range\\nprint("Counting to 5:")\\nfor i in range(1, 6):\\n    print(f"  Count: {i}")\\n\\n# For loop with list\\ncolors = ["red", "green", "blue", "yellow"]\\nprint("Colors:")\\nfor color in colors:\\n    print(f"  - {color.upper()}")\\n\\n# While loop\\ncount = 3\\nwhile count > 0:\\n    print(f"  {count}...")\\n    count -= 1\\nprint("  Done!")');
        
        addTemplate('07_functions.py', '# 第七课：函数 - 可重用的代码块\\n# Lesson 7: Functions - Reusable Code Blocks\\n\\n# 简单函数定义 Simple function definition\\ndef greet(name):\\n    """问候函数，返回问候消息 Greeting function that returns a greeting message"""\\n    return f"你好, {name}!" # Hello in Chinese\\n\\n# 调用函数 Call the function\\nmessage = greet("小明") # Xiao Ming (common Chinese name)\\nprint(message)\\n\\n# 带多个参数的函数 Function with multiple parameters\\ndef calculate_area(length, width):\\n    """计算矩形面积 Calculate rectangle area"""\\n    area = length * width\\n    return area\\n\\n# 计算房间面积 Calculate room area\\nroom_area = calculate_area(10, 12)\\nprint(f"房间面积: {room_area} 平方米") # Room area in square meters\\n\\n# 带默认参数的函数 Function with default parameters\\ndef introduce(name, age=0):\\n    """自我介绍函数 Self-introduction function"""\\n    if age > 0:\\n        return f"大家好，我是{name}，{age}岁" # Hello everyone, I am...\\n    return f"大家好，我是{name}" # Hello everyone, I am...\\n\\n# 测试默认参数 Test default parameters\\nprint(introduce("小红")) # Without age\\nprint(introduce("小李", 25)) # With age');
        
        addTemplate('08_classes.py', '# 第八课：类和对象 - 面向对象编程\\n# Lesson 8: Classes and Objects - Object-Oriented Programming\\n\\n# 类定义 - 创建自己的数据类型\\n# Class definition - creating your own data type\\nclass Dog:\\n    """狗类 - 用来创建狗对象 Dog class - for creating dog objects"""\\n    \\n    def __init__(self, name, age, breed="未知"):\\n        """初始化方法 - 创建新狗对象时调用 Initialization method"""\\n        self.name = name     # 狗的名字 Dog name\\n        self.age = age       # 狗的年龄 Dog age\\n        self.breed = breed   # 狗的品种 Dog breed\\n        print(f"创建了一只叫{name}的狗！") # Created a dog named...\\n    \\n    def bark(self):\\n        """叫的方法 Barking method"""\\n        return f"{self.name}汪汪叫：汪汪！" # Dog barking\\n    \\n    def describe(self):\\n        """描述方法 Description method"""\\n        return f"{self.name}是一只{self.age}岁的{self.breed}"\\n        \\n    def birthday(self):\\n        """生日方法 - 年龄增加1 Birthday method - age increases by 1"""\\n        self.age += 1\\n        return f"{self.name}过生日了！现在{self.age}岁了！"\\n\\n# 创建对象实例 Create object instances\\nprint("=== 创建狗对象 ===")\\nmy_dog = Dog("小白", 3, "金毛") # Xiao Bai, Golden Retriever\\nprint(my_dog.describe())\\nprint(my_dog.bark())\\n\\n# 另一只狗 Another dog\\nother_dog = Dog("小黑", 5, "拉布拉多") # Xiao Hei, Labrador\\nprint(other_dog.describe())\\n\\n# 调用方法 Call methods\\nprint("\\\\n=== 狗的生日 ===")\\nprint(my_dog.birthday())\\nprint(my_dog.describe())\\n\\n# 人类类示例 Human class example\\nclass Person:\\n    """人类 Human class"""\\n    \\n    def __init__(self, name, age, job="学生"):\\n        self.name = name\\n        self.age = age\\n        self.job = job\\n        self.pets = []  # 宠物列表 Pet list\\n    \\n    def introduce(self):\\n        return f"我叫{self.name}，{self.age}岁，职业是{self.job}"\\n    \\n    def adopt_pet(self, pet):\\n        """收养宠物 Adopt a pet"""\\n        self.pets.append(pet)\\n        return f"{self.name}收养了{pet.name}！"\\n\\nprint("\\\\n=== 人和宠物 ===")\\nowner = Person("小明", 25, "程序员") # Xiao Ming, programmer\\nprint(owner.introduce())\\nprint(owner.adopt_pet(my_dog))\\nprint(f"{owner.name}有{len(owner.pets)}只宠物")');
        
        addTemplate('09_errors.py', '# 第九课：错误处理 - 优雅地处理问题\\n# Lesson 9: Error Handling - Gracefully Dealing with Problems\\n\\n# 错误处理让程序在遇到问题时不会崩溃\\n# Error handling prevents programs from crashing when problems occur\\n\\nprint("=== 基本错误处理 ===")\\n\\n# 1. 基本try-except结构\\n# Basic try-except structure\\ndef safe_divide(a, b):\\n    \"\"\"安全除法函数 Safe division function\"\"\"\\n    try:\\n        result = a / b\\n        return f\"{a} ÷ {b} = {result}\"\\n    except ZeroDivisionError:\\n        return f\"错误：不能除以零！Cannot divide by zero!\"\\n\\nprint(\"测试除法：\")\\nprint(safe_divide(10, 2))  # 正常情况\\nprint(safe_divide(10, 0))  # 错误情况\\n\\nprint(\"\\\\n=== 多种错误类型处理 ===")\\n\\n# 2. 处理多种错误类型\\n# Handling multiple error types\\ndef safe_convert_and_calc(value1, value2, operation):\\n    \"\"\"安全的转换和计算函数\"\"\"\\n    try:\\n        # 尝试转换为数字\\n        num1 = float(value1)\\n        num2 = float(value2)\\n        \\n        # 根据操作符计算\\n        if operation == \"+\":\\n            result = num1 + num2\\n        elif operation == \"-\":\\n            result = num1 - num2\\n        elif operation == \"*\":\\n            result = num1 * num2\\n        elif operation == \"/\":\\n            if num2 == 0:\\n                raise ZeroDivisionError(\"除数不能为零\")\\n            result = num1 / num2\\n        else:\\n            raise ValueError(f\"不支持的操作符: {operation}\")\\n            \\n        return f\"{value1} {operation} {value2} = {result}\"\\n        \\n    except ValueError as e:\\n        return f\"数值错误：{e}\"\\n    except ZeroDivisionError as e:\\n        return f\"除法错误：{e}\"\\n    except Exception as e:\\n        return f\"未知错误：{e}\"\\n\\nprint(\"测试计算器：\")\\nprint(safe_convert_and_calc(\"10\", \"5\", \"+\"))    # 正常\\nprint(safe_convert_and_calc(\"abc\", \"5\", \"+\"))   # 数值错误\\nprint(safe_convert_and_calc(\"10\", \"0\", \"/\"))    # 除零错误\\nprint(safe_convert_and_calc(\"10\", \"5\", \"^\"))    # 操作符错误\\n\\nprint(\"\\\\n=== 文件操作错误处理 ===")\\n\\n# 3. 文件操作错误处理（模拟）\\n# File operation error handling (simulated)\\ndef read_config(filename):\\n    \"\"\"读取配置文件（模拟）\"\"\"\\n    try:\\n        # 模拟文件读取\\n        if filename == \"config.txt\":\\n            return {\"name\": \"应用程序\", \"version\": \"1.0\"}\\n        elif filename == \"missing.txt\":\\n            raise FileNotFoundError(f\"文件 {filename} 不存在\")\\n        elif filename == \"corrupted.txt\":\\n            raise PermissionError(f\"没有权限读取 {filename}\")\\n        else:\\n            raise ValueError(f\"不支持的文件格式: {filename}\")\\n            \\n    except FileNotFoundError as e:\\n        return f\"文件错误：{e}\"\\n    except PermissionError as e:\\n        return f\"权限错误：{e}\"\\n    except Exception as e:\\n        return f\"其他错误：{e}\"\\n\\nprint(\"测试文件读取：\")\\nprint(read_config(\"config.txt\"))     # 成功\\nprint(read_config(\"missing.txt\"))    # 文件不存在\\nprint(read_config(\"corrupted.txt\"))  # 权限错误\\n\\nprint(\"\\\\n=== 用户输入验证 ===")\\n\\n# 4. 用户输入验证\\n# User input validation\\ndef validate_age(age_str):\\n    \"\"\"验证年龄输入\"\"\"\\n    try:\\n        age = int(age_str)\\n        \\n        if age < 0:\\n            raise ValueError(\"年龄不能为负数\")\\n        elif age > 150:\\n            raise ValueError(\"年龄不能超过150岁\")\\n        elif age == 0:\\n            return \"刚出生的婴儿\"\\n        elif age < 18:\\n            return f\"{age}岁，未成年人\"\\n        elif age < 60:\\n            return f\"{age}岁，成年人\"\\n        else:\\n            return f\"{age}岁，老年人\"\\n            \\n    except ValueError as e:\\n        if \"invalid literal\" in str(e):\\n            return f\"输入错误：请输入数字，不是文字\"\\n        else:\\n            return f\"年龄错误：{e}\"\\n\\nprint(\"测试年龄验证：\")\\ntest_ages = [\"25\", \"abc\", \"-5\", \"200\", \"0\", \"16\", \"65\"]\\nfor age in test_ages:\\n    print(f\"输入 \\\"{age}\\\": {validate_age(age)}\")\\n\\nprint(\"\\\\n=== 网络请求错误处理（模拟）===")\\n\\n# 5. 网络请求错误处理（模拟）\\n# Network request error handling (simulated)\\nimport random\\n\\ndef simulate_api_request(url):\\n    \"\"\"模拟API请求\"\"\"\\n    try:\\n        # 模拟不同的网络情况\\n        random_result = random.choice([\"success\", \"timeout\", \"not_found\", \"server_error\"])\\n        \\n        if random_result == \"success\":\\n            return {\"status\": \"成功\", \"data\": \"API数据\"}\\n        elif random_result == \"timeout\":\\n            raise TimeoutError(\"请求超时\")\\n        elif random_result == \"not_found\":\\n            raise FileNotFoundError(\"API接口不存在\")\\n        else:\\n            raise ConnectionError(\"服务器内部错误\")\\n            \\n    except TimeoutError:\\n        return {\"status\": \"错误\", \"message\": \"网络超时，请稍后重试\"}\\n    except FileNotFoundError:\\n        return {\"status\": \"错误\", \"message\": \"API接口未找到\"}\\n    except ConnectionError:\\n        return {\"status\": \"错误\", \"message\": \"服务器连接失败\"}\\n    except Exception as e:\\n        return {\"status\": \"错误\", \"message\": f\"未知网络错误: {e}\"}\\n\\nprint(\"模拟API请求：\")\\nfor i in range(3):\\n    result = simulate_api_request(\"https://api.example.com/data\")\\n    print(f\"请求 {i+1}: {result}\")\\n\\nprint(\"\\\\n=== finally语句的使用 ===")\\n\\n# 6. finally语句的使用\\n# Using finally statement\\ndef process_data_with_cleanup(data):\\n    \"\"\"数据处理，确保清理资源\"\"\"\\n    print(f\"开始处理数据: {data}\")\\n    \\n    try:\\n        if not data:\\n            raise ValueError(\"数据为空\")\\n            \\n        if not isinstance(data, (list, str)):\\n            raise TypeError(\"数据类型不支持\")\\n            \\n        # 模拟数据处理\\n        result = f\"处理完成，数据长度: {len(data)}\"\\n        print(f\"处理成功: {result}\")\\n        return result\\n        \\n    except ValueError as e:\\n        print(f\"数据错误: {e}\")\\n        return None\\n    except TypeError as e:\\n        print(f\"类型错误: {e}\")\\n        return None\\n    finally:\\n        # 无论是否出错都会执行\\n        print(\"清理资源和临时文件\")\\n        print(\"-\" * 30)\\n\\nprint(\"测试数据处理：\")\\ntest_data = [[1, 2, 3], \"\", \"hello\", 123, None]\\nfor data in test_data:\\n    process_data_with_cleanup(data)\\n\\nprint(\"\\\\n=== 自定义异常 ===")\\n\\n# 7. 自定义异常\\n# Custom exceptions\\nclass StudentError(Exception):\\n    \"\"\"学生相关错误\"\"\"\\n    pass\\n\\nclass ScoreError(StudentError):\\n    \"\"\"成绩相关错误\"\"\"\\n    pass\\n\\nclass AgeError(StudentError):\\n    \"\"\"年龄相关错误\"\"\"\\n    pass\\n\\ndef create_student(name, age, score):\\n    \"\"\"创建学生信息\"\"\"\\n    try:\\n        # 验证姓名\\n        if not name or len(name.strip()) == 0:\\n            raise StudentError(\"姓名不能为空\")\\n            \\n        # 验证年龄\\n        if not isinstance(age, int) or age < 6 or age > 25:\\n            raise AgeError(f\"学生年龄应在6-25岁之间，当前: {age}岁\")\\n            \\n        # 验证成绩\\n        if not isinstance(score, (int, float)) or score < 0 or score > 100:\\n            raise ScoreError(f\"成绩应在0-100分之间，当前: {score}分\")\\n            \\n        return {\\n            \"name\": name.strip(),\\n            \"age\": age,\\n            \"score\": score,\\n            \"status\": \"创建成功\"\\n        }\\n        \\n    except AgeError as e:\\n        return {\"error\": f\"年龄错误: {e}\"}\\n    except ScoreError as e:\\n        return {\"error\": f\"成绩错误: {e}\"}\\n    except StudentError as e:\\n        return {\"error\": f\"学生信息错误: {e}\"}\\n    except Exception as e:\\n        return {\"error\": f\"未知错误: {e}\"}\\n\\nprint(\"测试学生创建：\")\\ntest_students = [\\n    (\"张三\", 16, 85),    # 正常\\n    (\"\", 16, 85),       # 姓名为空\\n    (\"李四\", 30, 85),    # 年龄超范围\\n    (\"王五\", 16, 150),   # 成绩超范围\\n    (\"赵六\", 16, 95)     # 正常\\n]\\n\\nfor name, age, score in test_students:\\n    result = create_student(name, age, score)\\n    print(f\"学生({name}, {age}, {score}): {result}\")\\n\\nprint(\"\\\\n=== 错误处理最佳实践 ===")\\nprint(\"1. 具体捕获异常，避免使用裸露的except\")\\nprint(\"2. 记录错误信息，便于调试\")\\nprint(\"3. 优雅降级，提供备选方案\")\\nprint(\"4. 使用finally清理资源\")\\nprint(\"5. 自定义异常，提供更好的错误信息\")\\nprint(\"6. 验证用户输入，防止异常发生\")\\nprint(\"7. 记录日志，便于问题排查\")');
        
        addTemplate('10_modules.py', '# 第十课：模块 - 使用Python标准库\\n# Lesson 10: Modules - Using Python Standard Library\\n\\n# 模块是Python的代码库，包含了很多有用的函数和工具\\n# Modules are Python code libraries containing many useful functions and tools\\n\\n# 1. 数学模块 (math)\\n# ================\\n\\nprint("=== 数学运算模块 ===")\\nimport math\\n\\nprint("基本数学常量:")\\nprint(f"圆周率 π: {math.pi}")\\nprint(f"自然数 e: {math.e}")\\n\\nprint("\\\\n基本数学函数:")\\nprint(f"16的平方根: {math.sqrt(16)}")\\nprint(f"4.3向上取整: {math.ceil(4.3)}")\\nprint(f"4.7向下取整: {math.floor(4.7)}")\\nprint(f"2的3次方: {math.pow(2, 3)}")\\nprint(f"绝对值|-5|: {math.fabs(-5)}")\\n\\nprint("\\\\n三角函数 (弧度制):")\\nprint(f"sin(π/2): {math.sin(math.pi/2)}")\\nprint(f"cos(0): {math.cos(0)}")\\nprint(f"tan(π/4): {math.tan(math.pi/4)}")\\n\\nprint("\\\\n角度转换:")\\ndegrees = 90\\nradians = math.radians(degrees)\\nprint(f"{degrees}度 = {radians}弧度")\\nprint(f"{radians}弧度 = {math.degrees(radians)}度")\\n\\n# 2. 随机数模块 (random)\\n# ====================\\n\\nprint("\\\\n=== 随机数模块 ===")\\nimport random\\n\\nprint("基本随机数:")\\nprint(f"0-1之间的随机小数: {random.random()}")\\nprint(f"1-10之间的随机整数: {random.randint(1, 10)}")\\nprint(f"1-100之间的随机整数: {random.randrange(1, 101)}")\\n\\nprint("\\\\n从列表中随机选择:")\\nfruits = ["苹果", "香蕉", "橙子", "葡萄", "草莓"]\\nprint(f"随机水果: {random.choice(fruits)}")\\n\\n# 随机选择多个（不重复）\\nprint(f"随机选择3个水果: {random.sample(fruits, 3)}")\\n\\nprint("\\\\n打乱列表:")\\nnumbers = [1, 2, 3, 4, 5, 6]\\nprint(f"原始列表: {numbers}")\\nrandom.shuffle(numbers)\\nprint(f"打乱后: {numbers}")\\n\\n# 3. 日期时间模块 (datetime)\\n# ========================\\n\\nprint("\\\\n=== 日期时间模块 ===")\\nfrom datetime import datetime, timedelta\\n\\n# 获取当前时间\\nnow = datetime.now()\\nprint(f"当前时间: {now}")\\nprint(f"当前日期: {now.date()}")\\nprint(f"当前时间: {now.time()}")\\n\\n# 格式化时间\\nprint(f"格式化时间: {now.strftime(\\'%Y年%m月%d日 %H:%M:%S\\')}")\\nprint(f"English format: {now.strftime(\\'%B %d, %Y at %I:%M %p\\')}")\\n\\n# 时间计算\\ntomorrow = now + timedelta(days=1)\\nprint(f"明天: {tomorrow.strftime(\\'%Y-%m-%d\\')}")\\n\\nweek_ago = now - timedelta(weeks=1)\\nprint(f"一周前: {week_ago.strftime(\\'%Y-%m-%d\\')}")\\n\\n# 特定日期\\nbirthday = datetime(2024, 1, 1)\\ndays_passed = (now - birthday).days\\nprint(f"距离2024年1月1日已过去 {days_passed} 天")\\n\\n# 4. 字符串模块 (string)\\n# ===================\\n\\nprint("\\\\n=== 字符串工具模块 ===")\\nimport string\\n\\nprint("字符串常量:")\\nprint(f"小写字母: {string.ascii_lowercase}")\\nprint(f"大写字母: {string.ascii_uppercase}")\\nprint(f"所有字母: {string.ascii_letters}")\\nprint(f"数字: {string.digits}")\\nprint(f"标点符号: {string.punctuation}")\\n\\nprint("\\\\n生成随机密码:")\\n# 密码包含字母和数字\\npassword_chars = string.ascii_letters + string.digits\\npassword = \"\".join(random.choice(password_chars) for _ in range(8))\\nprint(f"8位随机密码: {password}")\\n\\n# 更强的密码（包含特殊字符）\\nstrong_chars = string.ascii_letters + string.digits + \"!@#$%\"\\nstrong_password = \"\".join(random.choice(strong_chars) for _ in range(12))\\nprint(f"12位强密码: {strong_password}")\\n\\n# 5. 操作系统模块 (os)\\n# ==================\\n\\nprint("\\\\n=== 操作系统模块 ===")\\nimport os\\n\\nprint("系统信息:")\\nprint(f\"操作系统名称: {os.name}\")\\n# print(f\"当前工作目录: {os.getcwd()}\")  # 在Web环境中可能不可用\\n\\n# 环境变量（模拟）\\nprint(\"\\\\n环境变量示例:\")\\nprint(f\"PATH变量长度: {len(os.environ.get(\\'PATH\\', \\'\\'))}\")\\n\\n# 路径操作\\nprint(\"\\\\n路径操作:\")\\nfile_path = \"/home/user/documents/file.txt\"\\nprint(f\"完整路径: {file_path}\")\\nprint(f\"目录部分: {os.path.dirname(file_path)}\")\\nprint(f\"文件名: {os.path.basename(file_path)}\")\\nprint(f\"文件名和扩展名: {os.path.splitext(os.path.basename(file_path))}")\\n\\n# 6. JSON模块\\n# ==========\\n\\nprint("\\\\n=== JSON数据处理 ===")\\nimport json\\n\\n# Python对象转JSON\\nstudent_data = {\\n    \"姓名\": \"张小明\",\\n    \"年龄\": 16,\\n    \"成绩\": {\\n        \"语文\": 85,\\n        \"数学\": 92,\\n        \"英语\": 78\\n    },\\n    \"爱好\": [\"阅读\", \"编程\", \"运动\"]\\n}\\n\\n# 转换为JSON字符串\\njson_string = json.dumps(student_data, ensure_ascii=False, indent=2)\\nprint(\"Python对象转JSON:\")\\nprint(json_string)\\n\\n# JSON字符串转Python对象\\nloaded_data = json.loads(json_string)\\nprint(f\"\\\\nJSON转Python对象:\")\\nprint(f\"学生姓名: {loaded_data[\\'姓名\\']}\")\\nprint(f\"数学成绩: {loaded_data[\\'成绩\\'][\\'数学\\']}\")\\n\\n# 7. 正则表达式模块 (re)\\n# ====================\\n\\nprint("\\\\n=== 正则表达式模块 ===")\\nimport re\\n\\n# 查找模式\\ntext = \"我的电话是138-1234-5678，邮箱是zhang@example.com\"\\n\\n# 查找电话号码\\nphone_pattern = r\"\\\\d{3}-\\\\d{4}-\\\\d{4}\"\\nphone_match = re.search(phone_pattern, text)\\nif phone_match:\\n    print(f\"找到电话号码: {phone_match.group()}\")\\n\\n# 查找邮箱\\nemail_pattern = r\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}\"\\nemail_match = re.search(email_pattern, text)\\nif email_match:\\n    print(f\"找到邮箱: {email_match.group()}\")\\n\\n# 替换文本\\noriginal = \"今天天气很好，明天天气也很好\"\\nreplaced = re.sub(r\"天气\", \"心情\", original)\\nprint(f\"原文: {original}\")\\nprint(f\"替换后: {replaced}\")\\n\\n# 8. 集合操作\\n# ==========\\n\\nprint(\"\\\\n=== 集合运算示例 ===")\\n\\n# 使用集合去重和运算\\nclass1_students = {\"张三\", \"李四\", \"王五\", \"赵六\"}\\nclass2_students = {\"王五\", \"赵六\", \"钱七\", \"孙八\"}\\n\\nprint(f\"1班学生: {class1_students}\")\\nprint(f\"2班学生: {class2_students}\")\\nprint(f\"两班都有的学生: {class1_students & class2_students}\")\\nprint(f\"所有学生: {class1_students | class2_students}\")\\nprint(f\"只在1班的学生: {class1_students - class2_students}\")\\n\\n# 9. 实用工具函数\\n# =============\\n\\nprint(\"\\\\n=== 实用工具函数 ===")\\n\\ndef generate_student_id():\\n    \"\"\"生成学生学号\"\"\"\\n    year = datetime.now().year\\n    random_num = random.randint(1000, 9999)\\n    return f\"S{year}{random_num}\"\\n\\ndef format_score_report(name, scores):\\n    \"\"\"格式化成绩报告\"\"\"\\n    total = sum(scores.values())\\n    average = total / len(scores)\\n    \\n    report = f\"学生: {name}\\\\n\"\\n    report += \"-\" * 20 + \"\\\\n\"\\n    \\n    for subject, score in scores.items():\\n        report += f\"{subject}: {score:>6.1f}分\\\\n\"\\n    \\n    report += \"-\" * 20 + \"\\\\n\"\\n    report += f\"总分: {total:>6.1f}分\\\\n\"\\n    report += f\"平均分: {average:>4.1f}分\"\\n    \\n    return report\\n\\ndef calculate_time_difference(start_time_str, end_time_str):\\n    \"\"\"计算时间差\"\"\"\\n    start = datetime.strptime(start_time_str, \"%H:%M\")\\n    end = datetime.strptime(end_time_str, \"%H:%M\")\\n    \\n    # 处理跨天情况\\n    if end < start:\\n        end += timedelta(days=1)\\n    \\n    duration = end - start\\n    hours = duration.seconds // 3600\\n    minutes = (duration.seconds % 3600) // 60\\n    \\n    return f\"{hours}小时{minutes}分钟\"\\n\\n# 测试工具函数\\nprint(f\"随机学号: {generate_student_id()}\")\\nprint(f\"另一个学号: {generate_student_id()}\")\\n\\ntest_scores = {\"语文\": 85, \"数学\": 92, \"英语\": 78, \"物理\": 88}\\nprint(f\"\\\\n{format_score_report(\\'张小明\\', test_scores)}\")\\n\\nprint(f\"\\\\n时间差计算:\")\\nprint(f\"09:00到17:30的时长: {calculate_time_difference(\\'09:00\\', \\'17:30\\')}\")\\nprint(f\"23:00到01:30的时长: {calculate_time_difference(\\'23:00\\', \\'01:30\\')}\")\\n\\n# 10. 练习题\\n# =========\\nprint(\"\\\\n=== 练习时间 ===")\\n\\n# 练习1：生成幸运数字\\nlucky_numbers = random.sample(range(1, 50), 6)\\nlucky_numbers.sort()\\nprint(f\"今日幸运数字: {lucky_numbers}\")\\n\\n# 练习2：计算年龄\\ndef calculate_age(birth_year):\\n    current_year = datetime.now().year\\n    return current_year - birth_year\\n\\ntest_years = [1990, 2000, 2010, 2015]\\nfor year in test_years:\\n    age = calculate_age(year)\\n    print(f\"{year}年出生的人今年{age}岁\")\\n\\n# 挑战：创建一个完整的学生管理系统，结合所有学到的模块知识');
        
        console.log('Templates loaded with proper formatting:', Object.keys(window.exampleTemplates).length);
        
        // Templates now loaded safely above

        // Initialize Monaco Editor with better error handling
        function initMonacoEditor() {
            try {
                if (typeof require === 'undefined') {
                    console.error('RequireJS not loaded, using fallback editor');
                    createFallbackEditor();
                    return;
                }
                
                require.config({ paths: { vs: 'https://cdn-jsdelivr-net.jiasu.yunbiyun.com/npm/monaco-editor@0.52.2/min/vs' } });
                require(['vs/editor/editor.main'], function() {
                    try {
                        editor = monaco.editor.create(document.getElementById('editor'), {
                            value: '',
                            language: 'python',
                            theme: 'vs-dark',
                            automaticLayout: true,
                            minimap: { enabled: false },
                            fontSize: 14
                        });
                        
                        console.log('Monaco editor initialized successfully');
                        
                        // Make editor globally accessible
                        window.editor = editor;
                        
                        // Load welcome file initially
                        window.loadFile('welcome.py');
                        
                    } catch (error) {
                        console.error('Monaco editor creation failed:', error);
                        createFallbackEditor();
                    }
                }, function(error) {
                    console.error('Monaco editor module loading failed:', error);
                    createFallbackEditor();
                });
                
            } catch (error) {
                console.error('Monaco editor initialization failed:', error);
                createFallbackEditor();
            }
        }
        
        function createFallbackEditor() {
            console.log('Creating fallback textarea editor');
            const editorContainer = document.getElementById('editor');
            editorContainer.innerHTML = '<textarea id="fallback-editor" style="width:100%;height:100%;background:#1e1e1e;color:#d4d4d4;border:none;font-family:monospace;font-size:14px;padding:10px;resize:none;"></textarea>';
            const fallbackEditor = document.getElementById('fallback-editor');
            
            // Create a simple editor object to match Monaco's interface
            editor = {
                setValue: (value) => { fallbackEditor.value = value; },
                getValue: () => fallbackEditor.value,
                layout: () => {}
            };
            
            // Make editor globally accessible
            window.editor = editor;
            
            console.log('Fallback editor created');
            
            // Load welcome file
            window.loadFile('welcome.py');
        }
        
        // Try to initialize Monaco, with fallback after timeout
        initMonacoEditor();
        
        // Fallback timeout if Monaco takes too long
        setTimeout(() => {
            if (!window.editor) {
                console.log('Monaco editor timeout, creating fallback');
                createFallbackEditor();
            }
        }, 10000);

        // Replace the early loadFile function with full implementation
        window.loadFile = function loadFile(filename) {
            console.log('loadFile called with:', filename);
            
            // Load content if not already loaded
            if (!window.files.has(filename) && window.exampleTemplates[filename]) {
                window.files.set(filename, window.exampleTemplates[filename]);
                console.log('Loaded content for:', filename, 'Length:', window.exampleTemplates[filename].length);
            } else if (!window.exampleTemplates[filename]) {
                console.error('No template found for:', filename);
                return;
            }
            
            // Manage tab limits
            if (!window.openTabs.includes(filename)) {
                if (window.openTabs.length >= maxOpenTabs) {
                    const oldestTab = window.openTabs.shift();
                    cleanupFile(oldestTab);
                }
                window.openTabs.push(filename);
            }
            
            window.currentFile = filename;
            
            // Try to set editor content with fallback
            const content = window.files.get(filename) || '';
            if (window.editor && window.editor.setValue) {
                try {
                    window.editor.setValue(content);
                    console.log('Editor content set successfully');
                } catch (error) {
                    console.error('Error setting editor content:', error);
                }
            } else {
                console.log('Editor not ready, waiting...');
                // Wait for editor to be ready
                let attempts = 0;
                const waitForEditor = setInterval(() => {
                    attempts++;
                    if (window.editor && window.editor.setValue) {
                        try {
                            window.editor.setValue(content);
                            console.log('Editor content set after waiting');
                            clearInterval(waitForEditor);
                        } catch (error) {
                            console.error('Error setting editor content after waiting:', error);
                            clearInterval(waitForEditor);
                        }
                    } else if (attempts > 50) { // 5 seconds max
                        console.error('Editor never became ready');
                        clearInterval(waitForEditor);
                    }
                }, 100);
            }
            
            updateTabs();
            window.updateFileTree();
            updateMemoryInfo();
            
            console.log('loadFile completed. Current file:', window.currentFile, 'Files in memory:', window.files.size);
        };

        // Clean up file content when tab is closed
        function cleanupFile(filename) {
            if (window.exampleTemplates[filename] && filename !== window.currentFile) {
                window.files.delete(filename);
            }
            updateMemoryInfo();
        }

        // Memory management
        function updateMemoryInfo() {
            const memUsage = (window.files.size * 2 + terminalLineCount * 0.1).toFixed(1);
            memoryInfo.textContent = `Memory: ${memUsage} KB`;
        }

        function clearMemory() {
            // Clear all files except current
            const currentContent = window.files.get(window.currentFile);
            window.files.clear();
            if (window.currentFile && currentContent) {
                window.files.set(window.currentFile, currentContent);
            }
            
            // Clear terminal
            clearTerminal();
            
            // Close all tabs except current
            if (window.currentFile) {
                window.openTabs = [window.currentFile];
            } else {
                window.openTabs = [];
            }
            
            updateTabs();
            updateMemoryInfo();
            addTerminalOutput('Memory cleared!', 'success');
        }

        function addTerminalOutput(text, className = '') {
            // Limit terminal history
            if (terminalLineCount >= maxTerminalLines) {
                const lines = terminalOutput.children;
                while (lines.length > maxTerminalLines * 0.8) {
                    terminalOutput.removeChild(lines[0]);
                    terminalLineCount--;
                }
            }
            
            const line = document.createElement('div');
            line.textContent = text;
            if (className) line.className = className;
            terminalOutput.appendChild(line);
            terminalOutput.parentElement.scrollTop = terminalOutput.parentElement.scrollHeight;
            terminalLineCount++;
            updateMemoryInfo();
        }

        async function initPython() {
            try {
                addTerminalOutput('Initializing Python environment...', 'info');
                
                if (typeof loadPyodide === 'undefined') {
                    throw new Error('Pyodide library not loaded. Check internet connection.');
                }
                
                pyodide = await loadPyodide({
                    indexURL: "https://cdn-jsdelivr-net.jiasu.yunbiyun.com/pyodide/v0.27.7/full/"
                });

                addTerminalOutput('Pyodide loaded, setting up environment...', 'info');

                pyodide.runPython(`
                    import sys
                    import os
                    from js import console

                    os.makedirs('/home/user', exist_ok=True)
                    os.chdir('/home/user')
                    
                    class JSConsole:
                        def write(self, text):
                            console.log(text)
                            return len(text)
                        
                        def flush(self):
                            pass
                    
                    sys.stdout = JSConsole()
                    sys.stderr = JSConsole()
                `);

                const originalLog = console.log;
                console.log = function(text) {
                    if (text && text.trim()) {
                        addTerminalOutput(text, 'output');
                    }
                    originalLog.apply(console, arguments);
                };

                addTerminalOutput('✅ Python environment loaded successfully!', 'success');
                addTerminalOutput('✅ Memory-optimized version ready!', 'success');
                addTerminalOutput('✅ You can now run Python code!', 'success');
                addTerminalOutput('');
                
                terminalInputLine.style.display = 'flex';
                terminalInput.focus();
                
                // Make pyodide globally accessible for debugging
                window.pyodide = pyodide;
                
            } catch (error) {
                addTerminalOutput('❌ Error loading Python: ' + error.message, 'error');
                addTerminalOutput('💡 Try refreshing the page or check your internet connection.', 'info');
                console.error('Pyodide initialization error:', error);
            }
        }

        async function runCode() {
            if (!pyodide) {
                addTerminalOutput('Python environment not ready yet', 'error');
                return;
            }

            const code = editor.getValue();
            saveFile();
            
            addTerminalOutput(`\\n>>> Running ${window.currentFile}...`, 'success');
            
            try {
                pyodide.FS.writeFile(`/home/user/${window.currentFile}`, code);
                await pyodide.runPythonAsync(code);
            } catch (error) {
                addTerminalOutput(error.message, 'error');
            }
            
            addTerminalOutput('');
        }

        async function executeTerminalCommand(command) {
            addTerminalOutput('>>> ' + command);
            
            try {
                if (command.trim() === 'clear') {
                    clearTerminal();
                    return;
                }
                
                if (command.trim() === 'ls') {
                    const fileList = Array.from(window.files.keys()).join('\\n');
                    addTerminalOutput(fileList || 'No files loaded');
                    return;
                }
                
                if (command.trim() === 'memory') {
                    addTerminalOutput(`Files in memory: ${window.files.size}`);
                    addTerminalOutput(`Open tabs: ${window.openTabs.length}/${maxOpenTabs}`);
                    addTerminalOutput(`Terminal lines: ${terminalLineCount}/${maxTerminalLines}`);
                    return;
                }
                
                let result = await pyodide.runPythonAsync(command);
                if (result !== undefined && result !== null) {
                    addTerminalOutput(String(result));
                }
            } catch (error) {
                addTerminalOutput(error.message, 'error');
            }
        }

        function newFile() {
            document.getElementById('newFileModal').style.display = 'block';
            document.getElementById('newFileName').focus();
        }

        function createFile() {
            const fileName = document.getElementById('newFileName').value.trim();
            if (!fileName) return;
            
            if (!fileName.endsWith('.py')) {
                alert('Please use .py extension for Python files');
                return;
            }
            
            if (window.files.has(fileName)) {
                alert('File already exists');
                return;
            }
            
            window.files.set(fileName, '# ' + fileName + '\\n\\n');
            loadFile(fileName);
            closeModal();
            updateFileTree();
        }

        function saveFile() {
            if (window.currentFile) {
                window.files.set(window.currentFile, editor.getValue());
                addTerminalOutput(`Saved ${window.currentFile}`, 'success');
                
                if (pyodide) {
                    try {
                        pyodide.FS.writeFile(`/home/user/${window.currentFile}`, editor.getValue());
                    } catch (error) {
                        console.error('Error saving to filesystem:', error);
                    }
                }
            }
        }

        function openTab(fileName) {
            loadFile(fileName);
        }

        function closeTab(fileName, event) {
            event.stopPropagation();
            const index = window.openTabs.indexOf(fileName);
            if (index > -1) {
                window.openTabs.splice(index, 1);
                cleanupFile(fileName);
            }
            
            if (window.currentFile === fileName && window.openTabs.length > 0) {
                loadFile(window.openTabs[window.openTabs.length - 1]);
            } else if (window.openTabs.length === 0) {
                window.currentFile = null;
                editor.setValue('');
                updateTabs();
                updateFileTree();
            }
        }

        function updateTabs() {
            const tabsContainer = document.getElementById('tabs');
            tabsContainer.innerHTML = '';
            
            window.openTabs.forEach(fileName => {
                const tab = document.createElement('div');
                tab.className = 'tab' + (fileName === window.currentFile ? ' active' : '');
                tab.onclick = () => openTab(fileName);
                
                tab.innerHTML = `
                `;
                
                tabsContainer.appendChild(tab);
            });
        }

        // Replace the early updateFileTree function with full implementation
        window.updateFileTree = function updateFileTree() {
            const fileTree = document.getElementById('file-tree');
            fileTree.innerHTML = '';
            
            window.exampleFiles.forEach(fileName => {
                const li = document.createElement('li');
                li.className = 'file-item' + (fileName === window.currentFile ? ' active' : '');
                li.onclick = () => loadFile(fileName);
                
                const isLoaded = window.files.has(fileName);
                const icon = isLoaded ? '📄' : '📋';
                li.innerHTML = `<span class="file-icon">${icon}</span> ${fileName}`;
                fileTree.appendChild(li);
            });
        };

        function clearTerminal() {
            terminalOutput.innerHTML = '';
            terminalLineCount = 0;
            updateMemoryInfo();
        }

        function closeModal() {
            document.getElementById('newFileModal').style.display = 'none';
            document.getElementById('newFileName').value = '';
        }

        // Terminal input handler
        terminalInput.addEventListener('keydown', async (e) => {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim();
                if (command) {
                    terminalInput.value = '';
                    await executeTerminalCommand(command);
                }
            }
        });

        // Modal handlers
        document.getElementById('newFileName').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                createFile();
            } else if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Resize handler
        let isResizing = false;
        const resizeHandle = document.getElementById('resize-handle');
        const editorDiv = document.getElementById('editor');
        const terminalContainer = document.getElementById('terminal-container');

        resizeHandle.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const containerWidth = document.getElementById('editor-container').offsetWidth;
            const newEditorWidth = e.clientX - editorDiv.offsetLeft;
            const percentage = (newEditorWidth / containerWidth) * 100;
            
            if (percentage > 20 && percentage < 80) {
                editorDiv.style.width = percentage + '%';
                terminalContainer.style.width = (100 - percentage) + '%';
                editor.layout();
            }
        });

        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.body.style.cursor = 'default';
        });

        // Initialize file tree immediately on page load with debugging
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOMContentLoaded fired');
            console.log('exampleFiles available:', !!window.exampleFiles);
            console.log('exampleTemplates available:', !!window.exampleTemplates);
            console.log('updateFileTree available:', !!window.updateFileTree);
            
            if (window.updateFileTree) {
                window.updateFileTree();
                console.log('updateFileTree called');
            } else {
                console.error('updateFileTree not available');
                // Fallback: manually populate file tree
                setTimeout(function() {
                    if (window.exampleFiles && window.updateFileTree) {
                        window.updateFileTree();
                        console.log('updateFileTree called via fallback');
                    }
                }, 1000);
            }
        });

        // Initialize Python when page loads
        initPython();
