#-*-coding = utf-8-*-

def gcd(m, n): #最大公因素 #gcd(1, 500)會有問題, return 0
    if n==0:
        return m
    else:
        return gcd(n, m % n)

def lcm(m,n): #最小公倍數
    return m * n // gcd(m, n) #lcm * gcd為兩數乘積

# find gcd: using loops
def computeGCD(x, y):
    if x > y:
        small = y
    else:
        small = x
    for i in range(1, small+1): #一個一個試
        if((x % i == 0) and (y % i == 0)):
            gcd = i
    return gcd

#Using Euclidean Algorithm 輾轉相除法 加上multiple assignment
def computeGCD(x, y):
    while(y):
        x, y = y, x % y
    return x

print(computeGCD(500,10))
print(computeGCD(500,1))
print(computeGCD(500,0))
print(computeGCD(0,500))
print(computeGCD(1,500))
print(computeGCD(10,500))
# 10
# 1
# 500
# 500
# 1
# 10


#Using math.gcd() function of Python
#限制：參數必須是非負值的integer
import math
math.gcd(a,b)

#找質數，<10的部分會不見
def findit(N):
    for i in range(N):
        if i*i<=N and gcd(i,N)==1:
            print (i) 

findit(1500)
