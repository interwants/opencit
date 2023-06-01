#include <stdio.h>
#include <unistd.h> // 用于使用sleep函数

int main() {
    int slides[] = {1, 2, 3, 4, 5}; // 幻灯片编号数组
    int numSlides = sizeof(slides) / sizeof(slides[0]); // 幻灯片数量
    int currentIndex = 0; // 当前显示的幻灯片索引

    while (1) { // 无限循环播放
        printf("正在播放幻灯片 %d\n", slides[currentIndex]);
        // 这里可以根据需要添加显示幻灯片的代码

        currentIndex++; // 切换到下一个幻灯片
        if (currentIndex >= numSlides) {
            currentIndex = 0; // 如果已达到最后一张幻灯片，切换回第一张
        }

        sleep(1); // 等待1秒钟
        // 这里可以根据需要调整等待时间
    }

    return 0;
}
