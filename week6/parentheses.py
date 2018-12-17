import re

# Uses python3
def evalt(a, b, op):
    if op == '+':
        return a + b
    elif op == '-':
        return a - b
    elif op == '*':
        return a * b
    else:
        assert False

def minAndMax(i,j, m, M, ops):
    minimum = float("inf")
    maximum = float("-inf")

    if (i == j-1):
        k=i
        a = evalt(M[i][k], M[k+1][j], ops[k])
        b = evalt(M[i][k], m[k+1][j], ops[k])
        c = evalt(m[i][k], M[k+1][j], ops[k])
        d = evalt(m[i][k], m[k+1][j], ops[k])
        minimum = min(minimum, a, b, c ,d)
        maximum = max(maximum, a, b, c ,d)


    for k in range(i, j-1):
        a = evalt(M[i][k], M[k+1][j], ops[k])
        b = evalt(M[i][k], m[k+1][j], ops[k])
        c = evalt(m[i][k], M[k+1][j], ops[k])
        d = evalt(m[i][k], m[k+1][j], ops[k])
        minimum = min(minimum, a, b, c ,d)
        maximum = max(maximum, a, b, c ,d)

    return minimum, maximum

def parentheses(expression):
    digits = [0] + [int(s) for s in re.findall(r'\d+', expression)]
    ops = [0] + re.findall(r'\D+', expression)

    m = [[0 for i in range(len(digits))] for i in range(len(digits))]
    M = [[0 for i in range(len(digits))] for i in range(len(digits))]

    for i in range(1,len(digits)):
        m[i][i] = digits[i]
        M[i][i] = digits[i]


    for s in range(1, len(digits)-1):
        for i in range(1, len(digits)-s):
            j = i+s
            m[i][j], M[i][j] = minAndMax(i, j, m, M, ops)

    return M[1][len(digits)-1]


if __name__ == "__main__":
    print(parentheses(input()))
