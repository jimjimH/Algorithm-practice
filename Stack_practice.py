from pythonds.basic.stack import Stack


def revstring(mystr):
    myStack = Stack()
    for ch in mystr:
        myStack.push(ch)
    revstr = ""
    while not myStack.isEmpty():
        revstr = revstr + myStack.pop()
    return revstr


def revstring1(mystr):
    lst = list(mystr)
    revstr = ""
    while not len(lst) <= 0:
        revstr = revstr+lst.pop()
    return revstr


print(revstring1('apple'))
