# Write a program that takes a list of strings and a string containing a single character, and prints a new list of all the strings containing that character.


#test case

word_list = ['hello','world','my','name','is','Anna']
char = 'o'
new_list= []


def characterChecker(list, value):
    #loop through elements in list and compare with value to see if value is in the element
    for element in list:
        if value in element:
            new_list.append(element)

    print new_list


characterChecker(word_list, char)



        
