#-*- coding:utf-8 -*-
"""
题目：有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？

程序分析：可填在百位、十位、个位的数字都是1、2、3、4。组成所有的排列后再去 掉不满足条件的排列。

程序源代码：
for i in range(1,5):
    for j in range(1,5):
        for k in range(1,5):
            if( i != k ) and (i != j) and (j != k):
                print i,j,k
                
[(x,y,z) for x in range(1,5) for y in range(1,5) for z in range(1,5) if(x!=y)and(x!=z)and(y!=z)]


num=[1,2,3,4]
i=0
for a in num:
    for b in num:
        for c in num:
            if (a!=b) and (b!=c) and (c!=a):
                i+=1
                print a,b,c
print("總數是：",i) 


list_num=[1,2,3,4]
list=[i*100+j*10+k for i in list_num for j in list_num for k in list_num if i!=k and i !=j and j !=k ]
print list

考虑减少冗余判断和循环，做如下优化；
for i in range(1, 5):
    for j in range(1, 5):
        if (j==i) :
            continue;
        for k in range(1, 5):
            if (k==i or k==j):
                continue;
            print(i,j,k);

"""


