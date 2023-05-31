```python
import time

def focus_timer(minutes):
    seconds = minutes * 60
    while seconds > 0:
        time.sleep(60)
        seconds -= 60
        print(time.strftime("%H:%M:%S", time.localtime()), "Remaining Time: ", seconds // 60, " Minutes")
    print('\nTime is up! Start to have a break.')
    
focus_timer(25)
```
