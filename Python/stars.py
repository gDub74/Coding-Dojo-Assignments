#Create a function that takes a list of numbers and prints out *'s.


def starPrinter(list):
    for element in list:
        print '\033[1;31m *\033[1;m' * element  #red formating with '*' - and * is used as a multiplier after the ''

starPrinter([1,2,3])
starPrinter([4,5,6])
starPrinter([6,5,4,3,2,11])


