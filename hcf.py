#!/usr/bin/python
def hcf(a,b):

    while b != 0:
        return hcf(b, a % b)
    return a

if __name__ == "__main__":
    print "Highest Common Factor of 75 and 715 is", hcf(75,715)
    print "Highest Common Factor of 108 and 90 is", hcf(108,90)


