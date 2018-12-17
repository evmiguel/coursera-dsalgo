# Uses python3
import sys

def optimal_weight(W, w):
	w = [0] + w
	W = W+1
	value = [[0 for j in range(len(w))] for i in range(W)]

	for i in range(1,len(w)):
		for v in range(1, W):
			value[v][i] = value[v][i-1]
			if w[i] <= v:
				val = value[v-w[i]][i-1] + w[i]
				if value[v][i] < val:
					value[v][i] = val

	return value[v][i]

if __name__ == '__main__':
	W, n = map(int, input().split())
	w = list(map(int, input().split()))
	print(optimal_weight(W, w))
