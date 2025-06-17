# 第八课：类和对象 - 面向对象编程
# Lesson 8: Classes and Objects - Object-Oriented Programming

# 类定义 - Class definition
class Dog:
    """狗类 - 用来创建狗对象"""
    
    def __init__(self, name, age, breed="未知"):
        """初始化方法 - 创建新狗对象时调用"""
        self.name = name     # 狗的名字
        self.age = age       # 狗的年龄
        self.breed = breed   # 狗的品种
        print(f"创建了一只叫{name}的狗！")
    
    def bark(self):
        """叫的方法"""
        return f"{self.name}汪汪叫：汪汪！"
    
    def describe(self):
        """描述方法"""
        return f"{self.name}是一只{self.age}岁的{self.breed}"
        
    def birthday(self):
        """生日方法 - 年龄增加1"""
        self.age += 1
        return f"{self.name}过生日了！现在{self.age}岁了！"

# 创建对象实例 - Create object instances
print("=== 创建狗对象 ===")
my_dog = Dog("小白", 3, "金毛")
print(my_dog.describe())
print(my_dog.bark())

# 另一只狗 - Another dog
other_dog = Dog("小黑", 5, "拉布拉多")
print(other_dog.describe())

# 调用方法 - Call methods
print("\n=== 狗的生日 ===")
print(my_dog.birthday())
print(my_dog.describe())

# 人类类示例 - Human class example
class Person:
    """人类"""
    
    def __init__(self, name, age, job="学生"):
        self.name = name
        self.age = age
        self.job = job
        self.pets = []  # 宠物列表
    
    def introduce(self):
        return f"我叫{self.name}，{self.age}岁，职业是{self.job}"
    
    def adopt_pet(self, pet):
        """收养宠物"""
        self.pets.append(pet)
        return f"{self.name}收养了{pet.name}！"
    
    def list_pets(self):
        """列出所有宠物"""
        if not self.pets:
            return f"{self.name}没有宠物"
        pet_names = [pet.name for pet in self.pets]
        return f"{self.name}的宠物: {', '.join(pet_names)}"

print("\n=== 人和宠物 ===")
owner = Person("小明", 25, "程序员")
print(owner.introduce())
print(owner.adopt_pet(my_dog))
print(owner.adopt_pet(other_dog))
print(owner.list_pets())

# 学生类 - Student class
class Student:
    """学生类"""
    
    def __init__(self, name, student_id, grade):
        self.name = name
        self.student_id = student_id
        self.grade = grade
        self.subjects = {}  # 学科成绩
    
    def add_score(self, subject, score):
        """添加学科成绩"""
        self.subjects[subject] = score
        print(f"{self.name}的{subject}成绩: {score}分")
    
    def get_average(self):
        """计算平均分"""
        if not self.subjects:
            return 0
        return sum(self.subjects.values()) / len(self.subjects)
    
    def get_report(self):
        """生成成绩报告"""
        report = f"学生: {self.name} (学号: {self.student_id})\n"
        report += f"年级: {self.grade}\n"
        report += "成绩单:\n"
        
        for subject, score in self.subjects.items():
            report += f"  {subject}: {score}分\n"
        
        avg = self.get_average()
        report += f"平均分: {avg:.1f}分"
        return report

# 创建学生对象
print("\n=== 学生成绩管理 ===")
student = Student("李小华", "2024001", "高二")
student.add_score("数学", 92)
student.add_score("语文", 85)
student.add_score("英语", 88)
student.add_score("物理", 90)

print(f"\n{student.get_report()}")

# 类继承示例 - Class inheritance example
class HighSchoolStudent(Student):
    """高中生类 - 继承自学生类"""
    
    def __init__(self, name, student_id, grade, class_name):
        super().__init__(name, student_id, grade)
        self.class_name = class_name
    
    def get_class_info(self):
        """获取班级信息"""
        return f"{self.name}在{self.grade}{self.class_name}"

# 测试继承
print("\n=== 类继承示例 ===")
hs_student = HighSchoolStudent("王小明", "2024002", "高三", "1班")
hs_student.add_score("数学", 95)
hs_student.add_score("语文", 88)

print(hs_student.get_class_info())
print(f"平均分: {hs_student.get_average():.1f}分")