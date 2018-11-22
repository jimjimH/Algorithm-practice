# -*- coding: UTF-8 -*-
"""
题目：企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于100万元时，超过100万元的部分按1%提成，从键盘输入当月利润I，求应发放奖金总数？

程序分析：请利用数轴来分界，定位。注意定义时需把奖金定义成长整型。"""

Profit = int(input('淨利潤'))
Profit /= 10000
Bonus = 0
BonusRateList = [[100,0.010],[60,0.015],[40,0.030],[20,0.050],[10,0.075],[0,0.100]]

for i in range(0, len(BonusRateList)) :
    if (Profit > BonusRateList[i][0]) :
        Bonus += ((Profit - BonusRateList[i][0]) * BonusRateList[i][1])
        Profit = BonusRateList[i][0]

print (Bonus * 10000)

p = int(input('净利润:'))
goal = [1000000,600000,400000,200000,100000,0]
rat = [0.01,0.015,0.03,0.05,0.075,0.1]
r = 0
for i in range(len(goal)):
    if p>goal[i]:
        r+=(p-goal[i])*rat[i]
        print (p-goal[i])*rat[i]
        p=goal[i]
print '總獎金',r


