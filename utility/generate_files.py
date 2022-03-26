import json

with open('words.txt') as f: 
    words = f.read().split('\n')

for i in range (4, 8):
    l = []
    for word in words:
        if len(word) == i:
            l.append(word)
    
    with open(f'words_{i}.json', 'w') as f:
        json.dump(l, f)