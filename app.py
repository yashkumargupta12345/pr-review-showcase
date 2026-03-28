def calculate(a,b):
    result = a+b
    temp = 100
    return result

def login(user,password):
    if user=="admin" and password=="1234":
        print("Login success")
        return True
    else:
        return False

def process_data(data):
    for i in range(len(data)):
        print(data[i])
