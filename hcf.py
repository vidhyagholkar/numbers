#!/usr/bin/python
def hcf(a,b):
    if (a or b) == 0:
        print "Both numbers should be integers > 0"
        return None
    if a < b:
        a,b = b,a    
    while True:    
        r = a%b
        if r == 0:
            return b
        a,b = b,r

