# 第十一课：系统模块 - 探索已加载的模块
# Lesson 11: System Modules - Exploring Loaded Modules

import sys

print("=== 查看已加载的模块 ===")
# 打印所有已加载模块的名称
for module_name in sys.modules:
    print(module_name)

print("\n=== 模块统计 ===")
# 统计模块数量
print(f"已加载模块总数: {len(sys.modules)}")

print("\n=== 示例模块 ===")
# 查看前5个模块示例
print("示例模块:", list(sys.modules.keys())[:5])

print("\n=== 查看特定模块 ===")
# 查看是否加载了某些常用模块
common_modules = ['os', 'sys', 'math', 'json', 'datetime']
for module in common_modules:
    if module in sys.modules:
        print(f"✓ {module} 已加载")
    else:
        print(f"✗ {module} 未加载")

print("\n=== 导入新模块后的变化 ===")
before_count = len(sys.modules)
import collections  # 导入一个新模块
after_count = len(sys.modules)
print(f"导入前: {before_count} 个模块")
print(f"导入后: {after_count} 个模块")
print(f"新增了 {after_count - before_count} 个模块")

print("\n系统会自动管理模块加载！")