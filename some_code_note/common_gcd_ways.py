#-*-coding = utf-8-*-


def gcd(m,n): #最大公因素
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
    for i in range(1, small+1): 
        if((x % i == 0) and (y % i == 0)): 
            gcd = i           
    return gcd     
def gcd(m,n):
    while m%n != 0:
        oldm = m
        oldn = n

        m = oldn
        n = oldm%oldn
    return n
#Using Euclidean Algorithm
def computeGCD(x, y):
    while(y):
        x, y = y, x % y
    return x
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