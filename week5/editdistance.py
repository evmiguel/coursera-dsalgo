# Uses python3
def edit_distance(s, t):
	s = " " + s
	t = " " + t

	n = len(s)
	m = len(t)

	distances = [[0 for j in range(m)] for i in range(n)]

	for i in range(n):
		distances[i][0] = i

	for j in range(m):
		distances[0][j] = j

	for j in range(1, m):
		for i in range(1, n):
			insertion = distances[i][j-1] + 1
			deletion = distances[i-1][j] + 1
			match = distances[i-1][j-1]
			mismatch = distances[i-1][j-1] + 1
			if s[i] == t[j]:
				distances[i][j] = min(insertion, deletion, match)
			else:
				distances[i][j] = min(insertion, deletion, mismatch)

	return distances[n-1][m-1]

if __name__ == "__main__":
    print(edit_distance(input(), input()))
