import time

seconds = 10  # 设置倒计时的秒数

while seconds > 0:
    print(seconds)
    time.sleep(1)
    seconds -= 1

print("倒计时结束！")
