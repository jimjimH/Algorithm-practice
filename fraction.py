def gcd(m,n):
    while m%n != 0:
        oldm=m
        oldn=n
        m=oldn
        n=oldm%oldn
    return n
class Fraction:
    def __init__(self,top,bottom):
        self.num=top
        self.den=bottom
    def __str__(self):
        return str(self.num)+"/"+str(self.den)
    def __eq__(self, other):
        firstnum=self.num*other.den
        secondnum=other.num*self.den
        return firstnum==secondnum
    def __lt__(self, other):
        firstnum=self.num*other.den
        secondnum=other.num*self.den
        return firstnum<secondnum        
    def __gt__(self, other):
        firstnum=self.num*other.den
        secondnum=other.num*self.den
        return firstnum>secondnum
    def __add__(self,otherfraction):
        newnum=self.num*otherfraction.den + self.den*otherfraction.num
        newden=self.den*otherfraction.den
        if newnum==newden:
            return 1
        else:
            common=gcd(newnum, newden)
            return Fraction(newnum//common,newden//common)
    def __sub__(self,otherfraction):
        newnum=self.num*otherfraction.den - self.den*otherfraction.num
        newden=self.den*otherfraction.den
        if newnum>0:
            common=gcd(newnum, newden)
        elif newnum==0:
            return 0
        else:
            common=gcd(newnum*-1, newden)
        return Fraction(newnum//common,newden//common)
    def __mul__(self,otherfraction):
        newnum=self.num*otherfraction.num
        newden=self.den*otherfraction.den
        common=gcd(newnum, newden)
        return Fraction(newnum//common,newden//common)
    def __truediv__(self,otherfraction):
        newnum=self.num*otherfraction.den
        newden=self.den*otherfraction.num
        common=gcd(newnum, newden)
        return Fraction(newnum//common,newden//common)

f1=Fraction(8,4)
f2=Fraction(4,8)
f3=f1+f2
f4=f1/f2
print(f3)
print(f4)
print(f1==f2)
print(f1>f2)
print(f1<f2)