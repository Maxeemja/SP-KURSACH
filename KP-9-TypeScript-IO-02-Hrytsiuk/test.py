def algo(a,d,n):
    i=1
    s=a
    while(i!=n):
        a=a+d
        s=s+a
        i=i+1
    return a,s
def main():
    return algo(5,3,2)
